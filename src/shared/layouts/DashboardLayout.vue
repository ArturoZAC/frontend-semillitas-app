<template>
  <!-- Loading state -->
  <div v-if="isCheckingAuth" class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="text-center">
      <div
        class="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"
      />
      <p class="text-gray-500">Verificando acceso...</p>
    </div>
  </div>

  <!-- No autenticado - redirigir a login -->
  <div
    v-else-if="!authStore.isAuthenticated"
    class="flex min-h-screen items-center justify-center bg-gray-50"
  >
    <div class="text-center">
      <IconLock class="mx-auto mb-4 h-16 w-16 text-gray-300" />
      <h2 class="mb-2 text-xl font-bold text-gray-800">Acceso no autorizado</h2>
      <p class="mb-4 text-gray-500">Debes iniciar sesión para acceder</p>
      <router-link
        to="/login"
        class="bg-primary hover:bg-primary-dark inline-block rounded-xl px-6 py-3 font-semibold text-white transition-colors"
      >
        Ir al Login
      </router-link>
    </div>
  </div>

  <!-- Sin permisos para esta ruta -->
  <div v-else-if="!hasAccess" class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="text-center">
      <IconShieldOff class="mx-auto mb-4 h-16 w-16 text-gray-300" />
      <h2 class="mb-2 text-xl font-bold text-gray-800">Sin permisos</h2>
      <p class="mb-4 text-gray-500">No tienes acceso a esta sección</p>
      <router-link
        to="/"
        class="bg-primary hover:bg-primary-dark inline-block rounded-xl px-6 py-3 font-semibold text-white transition-colors"
      >
        Volver al Inicio
      </router-link>
    </div>
  </div>

  <!-- Layout principal (autenticado + tiene permisos) -->
  <div v-else class="min-h-screen bg-gray-50 pb-20">
    <!-- Header dinámico -->
    <header v-if="showHeader" class="bg-primary p-4 shadow-md">
      <slot name="header">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-white">Semillitas</h1>
            <p class="text-sm text-white/80">{{ authStore.userName }}</p>
          </div>
          <button
            @click="handleLogout"
            class="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
          >
            <IconLogout class="h-4 w-4" />
            Salir
          </button>
        </div>
      </slot>
    </header>

    <!-- Contenido principal -->
    <main>
      <slot />
    </main>

    <!-- Bottom Navigation -->
    <nav class="fixed right-0 bottom-0 left-0 border-t border-gray-200 bg-white">
      <div class="flex items-center justify-around py-2">
        <!-- Inicio -->
        <router-link
          to="/dashboard"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-primary': route.path.startsWith('/dashboard') }"
        >
          <IconHome class="mb-1 h-6 w-6" />
          <span class="text-xs">Inicio</span>
        </router-link>

        <!-- Matrícula (solo directora) -->
        <router-link
          v-if="authStore.permissions.canAccessEnrollment"
          to="/enrollments"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-primary': route.path.startsWith('/enrollments') }"
        >
          <IconClipboardList class="mb-1 h-6 w-6" />
          <span class="text-xs">Matrícula</span>
        </router-link>

        <!-- Asistencia (directora y docente) -->
        <router-link
          v-if="authStore.permissions.canAccessAttendance"
          to="/attendance"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-primary': route.path.startsWith('/attendance') }"
        >
          <IconCircleCheck class="mb-1 h-6 w-6" />
          <span class="text-xs">Asistencia</span>
        </router-link>

        <!-- Notas (directora y docente) -->
        <router-link
          v-if="authStore.permissions.canAccessGrades"
          to="/grades"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-primary': route.path.startsWith('/grades') }"
        >
          <IconPencil class="mb-1 h-6 w-6" />
          <span class="text-xs">Notas</span>
        </router-link>

        <!-- Consulta (solo padre) -->
        <router-link
          v-if="authStore.permissions.canAccessConsultation"
          to="/consultation"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-primary': route.path.startsWith('/consultation') }"
        >
          <IconHelpCircle class="mb-1 h-6 w-6" />
          <span class="text-xs">Consulta</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
// DashboardLayout - Layout para módulos autenticados
// Valida autenticación y permisos internamente
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  IconCircleCheck,
  IconClipboardList,
  IconHelpCircle,
  IconHome,
  IconLock,
  IconLogout,
  IconPencil,
  IconShieldOff,
} from '@tabler/icons-vue'

import { useAuthStore } from '@/stores/auth.store'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Estado para verificar auth al montar
const isCheckingAuth = ref(true)

// Verificar autenticación al montar el layout
onMounted(() => {
  // Restaurar sesión si existe
  authStore.restoreSession()

  // Simular delay de verificación
  setTimeout(() => {
    isCheckingAuth.value = false

    // Si no está autenticado, redirigir a login
    if (!authStore.isAuthenticated) {
      router.push('/login')
    }
  }, 500)
})

// Verificar si tiene acceso a la ruta actual
const hasAccess = computed(() => {
  return authStore.canAccessRoute(route.name as string)
})

// Determinar si mostrar header
const showHeader = computed(() => {
  const routesWithHeader = [
    'enrollments-list',
    'enrollment-create',
    'enrollment-detail',
    'attendance',
    'teacher-history',
    'mark-child-attendance',
    'attendance-report',
    'grades',
    'grade-evaluation',
    'grade-download',
    'consultation',
  ]
  return routesWithHeader.includes(route.name as string)
})

// Cerrar sesión
function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
