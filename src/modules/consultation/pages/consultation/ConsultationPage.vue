<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-primary to-primary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <h1 class="h2-hero-white text-2xl font-bold text-white">Consulta</h1>
        <p class="span-white mt-1 text-white/70">Información de tu hijo</p>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Información del niño -->
      <div class="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
            <span class="h3-card text-primary">AP</span>
          </div>
          <div>
            <h2 class="h4 text-gray-800">Ana Pérez García</h2>
            <p class="small text-gray-500">DNI: 12345678 • Sección A</p>
          </div>
        </div>
      </div>

      <!-- Opciones de consulta -->
      <div class="space-y-4">
        <!-- Ver Asistencia -->
        <router-link
          to="/attendance/history"
          class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-secondary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
            <IconClock class="text-secondary h-7 w-7" />
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Ver Asistencia</h3>
            <p class="small text-gray-500">Historial de asistencia de tu hijo</p>
          </div>
          <IconChevronRight class="h-5 w-5 text-gray-400" />
        </router-link>

        <!-- Ver Evaluaciones -->
        <router-link
          to="/grades/download"
          class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-tertiary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
            <IconClipboard class="text-tertiary h-7 w-7" />
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Ver Evaluaciones</h3>
            <p class="small text-gray-500">Reportes de evaluación por bimestre</p>
          </div>
          <IconChevronRight class="h-5 w-5 text-gray-400" />
        </router-link>

        <!-- Información General -->
        <div class="rounded-2xl bg-white p-5 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <IconInfoCircle class="text-primary h-7 w-7" />
            </div>
            <div class="flex-1">
              <h3 class="h5 text-gray-800">Información General</h3>
              <p class="small text-gray-500">Datos del establecimiento</p>
            </div>
          </div>

          <div class="mt-4 space-y-3 border-t border-gray-100 pt-4">
            <div class="flex items-center gap-3">
              <IconSchool class="h-5 w-5 text-gray-400" />
              <div>
                <p class="small text-gray-400">Institución</p>
                <p class="label font-medium text-gray-800">IEI Semillitas del Saber</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <IconClock class="h-5 w-5 text-gray-400" />
              <div>
                <p class="small text-gray-400">Horario</p>
                <p class="label font-medium text-gray-800">7:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <IconMapPin class="h-5 w-5 text-gray-400" />
              <div>
                <p class="small text-gray-400">Dirección</p>
                <p class="label font-medium text-gray-800">Av. Principal 123, Lima</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <IconPhone class="h-5 w-5 text-gray-400" />
              <div>
                <p class="small text-gray-400">Teléfono</p>
                <p class="label font-medium text-gray-800">(01) 234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  IconChevronRight,
  IconClipboard,
  IconClock,
  IconInfoCircle,
  IconMapPin,
  IconPhone,
  IconSchool,
} from '@tabler/icons-vue'
</script>
