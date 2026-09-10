<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-primary to-primary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p class="span-white text-sm text-white/80">Bienvenido,</p>
          <h1 class="h2-hero-white text-2xl font-bold text-white">{{ authStore.userName }}</h1>
          <p class="span-white mt-1 text-white/70">{{ roleLabel }}</p>
        </div>
        <button
          @click="handleLogout"
          class="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/30"
        >
          <IconLogout class="h-5 w-5" />
          Salir
        </button>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Resumen de matrícula (directora y docente) -->
      <section v-if="canViewEnrollmentStats" class="mb-6">
        <div class="grid grid-cols-2 gap-4">
          <!-- Turno Mañana -->
          <div class="rounded-2xl bg-white p-5 shadow-sm">
            <div class="mb-3 flex items-center gap-3">
              <div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                <IconSun class="text-primary h-5 w-5" />
              </div>
              <span class="label text-gray-600">Mañana</span>
            </div>
            <p class="display text-primary text-3xl font-bold">85</p>
            <p class="small text-gray-400">niños matriculados</p>
          </div>

          <!-- Turno Tarde -->
          <div class="rounded-2xl bg-white p-5 shadow-sm">
            <div class="mb-3 flex items-center gap-3">
              <div class="bg-secondary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                <IconMoon class="text-secondary h-5 w-5" />
              </div>
              <span class="label text-gray-600">Tarde</span>
            </div>
            <p class="display text-secondary text-3xl font-bold">65</p>
            <p class="small text-gray-400">niños matriculados</p>
          </div>
        </div>
      </section>

      <!-- Accesos rápidos -->
      <section class="mb-6">
        <h2 class="h4 mb-4 text-gray-800">Accesos Rápidos</h2>
        <div class="space-y-3">
          <!-- Matrícula (solo directora) -->
          <router-link
            v-if="authStore.permissions.canAccessEnrollment"
            to="/enrollments"
            class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div class="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <IconClipboardList class="text-primary h-7 w-7" />
            </div>
            <div class="flex-1">
              <h3 class="h5 text-gray-800">Matrícula</h3>
              <p class="small text-gray-500">Gestionar alumnos matriculados</p>
            </div>
            <IconChevronRight class="h-5 w-5 text-gray-400" />
          </router-link>

          <!-- Asistencia (directora y docente) -->
          <router-link
            v-if="authStore.permissions.canAccessAttendance"
            to="/attendance"
            class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div class="bg-secondary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <IconCheck class="text-secondary h-7 w-7" />
            </div>
            <div class="flex-1">
              <h3 class="h5 text-gray-800">Asistencia</h3>
              <p class="small text-gray-500">Marcar y consultar asistencia</p>
            </div>
            <IconChevronRight class="h-5 w-5 text-gray-400" />
          </router-link>

          <!-- Notas (directora y docente) -->
          <router-link
            v-if="authStore.permissions.canAccessGrades"
            to="/grades"
            class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div class="bg-tertiary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <IconFileSpreadsheet class="text-tertiary h-7 w-7" />
            </div>
            <div class="flex-1">
              <h3 class="h5 text-gray-800">Notas</h3>
              <p class="small text-gray-500">Evaluar y registrar notas</p>
            </div>
            <IconChevronRight class="h-5 w-5 text-gray-400" />
          </router-link>

          <!-- Consulta (solo padre) -->
          <router-link
            v-if="authStore.permissions.canAccessConsultation"
            to="/consultation"
            class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div class="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <IconHelpCircle class="text-primary h-7 w-7" />
            </div>
            <div class="flex-1">
              <h3 class="h5 text-gray-800">Consulta</h3>
              <p class="small text-gray-500">Información de tu hijo</p>
            </div>
            <IconChevronRight class="h-5 w-5 text-gray-400" />
          </router-link>
        </div>
      </section>

      <!-- Resumen de asistencia de hoy (directora y docente) -->
      <section v-if="authStore.permissions.canAccessAttendance">
        <h2 class="h4 mb-4 text-gray-800">Asistencia de Hoy</h2>
        <div class="rounded-2xl bg-white p-5 shadow-sm">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <IconUserCheck class="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p class="label font-medium text-gray-800">Docentes presentes</p>
                <p class="small text-gray-400">Turno mañana</p>
              </div>
            </div>
            <p class="display text-2xl font-bold text-green-600">12/15</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import {
  IconCheck,
  IconChevronRight,
  IconClipboardList,
  IconFileSpreadsheet,
  IconHelpCircle,
  IconLogout,
  IconMoon,
  IconSun,
  IconUserCheck,
} from '@tabler/icons-vue'

import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
const router = useRouter()

// Etiqueta del rol para el subtítulo del header
const roleLabel = computed(() => {
  switch (authStore.userRole) {
    case 'directora':
      return 'Directora'
    case 'docente':
      return `Docente • Sección ${authStore.user?.section || 'A'}`
    case 'padre':
      return 'Padre de familia'
    default:
      return ''
  }
})

// Stats de matrícula visibles para directora y docente
const canViewEnrollmentStats = computed(
  () => authStore.userRole === 'directora' || authStore.userRole === 'docente',
)

// Cerrar sesión
function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
