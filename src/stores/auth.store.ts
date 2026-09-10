import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

// ============================================
// TYPES
// ============================================
export type UserRole = 'directora' | 'docente' | 'padre'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  section?: string // Solo para docentes
}

// ============================================
// MOCK DATA - Cuentas de prueba
// ============================================
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  // Directora - acceso total
  '12345678': {
    password: '123456',
    user: {
      id: '1',
      name: 'María García',
      email: 'maria@semillitas.edu.pe',
      role: 'directora',
    },
  },
  // Docente - acceso a asistencia y notas
  '87654321': {
    password: '123456',
    user: {
      id: '2',
      name: 'Ana López',
      email: 'ana@semillitas.edu.pe',
      role: 'docente',
      section: 'A',
    },
  },
  // Padre - solo lectura
  '11223344': {
    password: '123456',
    user: {
      id: '3',
      name: 'Carlos Pérez',
      email: 'carlos@email.com',
      role: 'padre',
    },
  },
}

// ============================================
// STORE
// ============================================
export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const isLoading = ref(false)

  // Getters
  const isAuthenticated = computed(() => !!user.value && !!token.value)
  const userRole = computed(() => user.value?.role || null)
  const userName = computed(() => user.value?.name || '')

  // Permisos por rol
  const permissions = computed(() => {
    const role = userRole.value

    return {
      // Directora - acceso total
      canAccessEnrollment: role === 'directora',
      canAccessAttendance: role === 'directora' || role === 'docente',
      canAccessGrades: role === 'directora' || role === 'docente',
      canViewReport: role === 'directora',
      canMarkChildAttendance: role === 'docente',
      canMarkTeacherAttendance: role === 'docente' || role === 'directora',
      canUploadExcel: role === 'directora',
      canDownloadExcel: role === 'directora',
      canEvaluateGrades: role === 'docente' || role === 'directora',
      canAccessConsultation: role === 'padre',
      // Padre solo lee
      canEdit: role !== 'padre',
    }
  })

  // Actions
  async function login(dni: string, password: string): Promise<boolean> {
    isLoading.value = true

    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 800))

    const mockData = MOCK_USERS[dni]

    if (mockData && mockData.password === password) {
      user.value = mockData.user
      token.value = `mock-token-${Date.now()}`

      // Guardar en localStorage para persistir
      localStorage.setItem('auth_user', JSON.stringify(mockData.user))
      localStorage.setItem('auth_token', token.value)

      isLoading.value = false
      return true
    }

    isLoading.value = false
    return false
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('auth_user')
    localStorage.removeItem('auth_token')
  }

  function restoreSession() {
    const savedUser = localStorage.getItem('auth_user')
    const savedToken = localStorage.getItem('auth_token')

    if (savedUser && savedToken) {
      user.value = JSON.parse(savedUser)
      token.value = savedToken
    }
  }

  // Verificar si tiene permiso para acceder a una ruta
  function canAccessRoute(routeName: string): boolean {
    const role = userRole.value

    // Rutas públicas - todos pueden acceder
    const publicRoutes = ['home', 'login', 'forgot-password', 'not-found']
    if (publicRoutes.includes(routeName)) return true

    // Si no está autenticado, no puede acceder a rutas protegidas
    if (!isAuthenticated.value) return false

    // Verificar permisos por rol
    const routePermissions: Record<string, UserRole[]> = {
      'dashboard-home': ['directora', 'docente', 'padre'],
      'enrollments-list': ['directora'],
      'enrollment-create': ['directora'],
      'enrollment-detail': ['directora'],
      attendance: ['directora', 'docente'],
      'teacher-history': ['directora', 'docente'],
      'mark-child-attendance': ['docente'],
      'attendance-report': ['directora'],
      grades: ['directora', 'docente'],
      'grade-evaluation': ['directora', 'docente'],
      'grade-download': ['directora'],
      consultation: ['padre'],
    }

    const allowedRoles = routePermissions[routeName]
    if (!allowedRoles) return true // Si no está definido, permitir

    return allowedRoles.includes(role as UserRole)
  }

  return {
    // Estado
    user,
    token,
    isLoading,
    // Getters
    isAuthenticated,
    userRole,
    userName,
    permissions,
    // Actions
    login,
    logout,
    restoreSession,
    canAccessRoute,
  }
})
