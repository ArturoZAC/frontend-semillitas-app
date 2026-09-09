<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header dinámico (se puede personalizar por módulo) -->
    <header v-if="showHeader" class="bg-[#B8D787] p-4 shadow-md">
      <slot name="header">
        <h1 class="text-xl font-bold text-white">Semillitas</h1>
      </slot>
    </header>

    <!-- Contenido principal -->
    <main>
      <slot />
    </main>

    <!-- Bottom Navigation - Siempre visible en módulos -->
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

        <!-- Matrícula -->
        <router-link
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

        <!-- Asistencia -->
        <router-link
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

        <!-- Notas -->
        <router-link
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
// Se usa para: Enrollment, Attendance, Grades
// Incluye: Header + BottomNav
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Determinar si mostrar header según la ruta
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
</script>
