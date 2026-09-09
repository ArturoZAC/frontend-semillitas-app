<template>
  <!-- Loading state -->
  <div v-if="isCheckingAuth" class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="text-center">
      <div
        class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#B8D787] border-t-transparent"
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
      <div class="mb-4 text-6xl">🔒</div>
      <h2 class="mb-2 text-xl font-bold text-gray-800">Acceso no autorizado</h2>
      <p class="mb-4 text-gray-500">Debes iniciar sesión para acceder</p>
      <router-link
        to="/login"
        class="inline-block rounded-xl bg-[#B8D787] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
      >
        Ir al Login
      </router-link>
    </div>
  </div>

  <!-- Sin permisos para esta ruta -->
  <div v-else-if="!hasAccess" class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="text-center">
      <div class="mb-4 text-6xl">🚫</div>
      <h2 class="mb-2 text-xl font-bold text-gray-800">Sin permisos</h2>
      <p class="mb-4 text-gray-500">No tienes acceso a esta sección</p>
      <router-link
        to="/"
        class="inline-block rounded-xl bg-[#B8D787] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
      >
        Volver al Inicio
      </router-link>
    </div>
  </div>

  <!-- Layout principal (autenticado + tiene permisos) -->
  <div v-else class="min-h-screen bg-gray-50 pb-20">
    <!-- Header dinámico -->
    <header v-if="showHeader" class="bg-[#B8D787] p-4 shadow-md">
      <slot name="header">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-white">Semillitas</h1>
            <p class="text-sm text-white/80">{{ authStore.userName }}</p>
          </div>
          <button
            @click="handleLogout"
            class="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
          >
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
          to="/"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-[#B8D787]': route.path === '/' }"
        >
          <svg class="mb-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="text-xs">Inicio</span>
        </router-link>

        <!-- Matrícula (solo directora) -->
        <router-link
          v-if="authStore.permissions.canAccessEnrollment"
          to="/enrollments"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-[#B8D787]': route.path.startsWith('/enrollments') }"
        >
          <svg class="mb-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span class="text-xs">Matrícula</span>
        </router-link>

        <!-- Asistencia (directora y docente) -->
        <router-link
          v-if="authStore.permissions.canAccessAttendance"
          to="/attendance"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-[#B8D787]': route.path.startsWith('/attendance') }"
        >
          <svg class="mb-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-xs">Asistencia</span>
        </router-link>

        <!-- Notas (directora y docente) -->
        <router-link
          v-if="authStore.permissions.canAccessGrades"
          to="/grades"
          class="flex flex-col items-center px-4 py-2 text-gray-500 transition-colors"
          :class="{ 'text-[#B8D787]': route.path.startsWith('/grades') }"
        >
          <svg class="mb-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <span class="text-xs">Notas</span>
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
  ]
  return routesWithHeader.includes(route.name as string)
})

// Cerrar sesión
function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
