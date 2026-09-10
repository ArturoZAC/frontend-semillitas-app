<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-primary to-primary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center gap-4">
          <router-link
            to="/enrollments"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
          >
            <IconArrowLeft class="h-5 w-5" />
          </router-link>
          <div>
            <h1 class="h2-hero-white text-2xl font-bold text-white">Detalle del Alumno</h1>
            <p class="span-white mt-1 text-white/70">Información de matrícula</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Tarjeta de información -->
      <div class="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <!-- Avatar y nombre -->
        <div class="mb-6 flex items-center gap-4">
          <div class="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
            <span class="h3-card text-primary">AP</span>
          </div>
          <div>
            <h2 class="h4 text-gray-800">Ana Pérez García</h2>
            <p class="small text-gray-500">DNI: 12345678</p>
          </div>
        </div>

        <!-- Estado actual -->
        <div class="bg-primary/5 mb-6 flex items-center justify-between rounded-xl p-4">
          <span class="label text-gray-600">Estado actual:</span>
          <span class="bg-primary rounded-full px-4 py-1.5 text-sm font-semibold text-white">
            Matriculado
          </span>
        </div>

        <!-- Datos del niño -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconUser class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">Nombre completo</p>
              <p class="label font-medium text-gray-800">Ana Pérez García</p>
            </div>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconId class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">DNI del niño</p>
              <p class="label font-medium text-gray-800">12345678</p>
            </div>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconClock class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">Turno</p>
              <p class="label font-medium text-gray-800">Mañana (7:00 AM - 12:00 PM)</p>
            </div>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconSchool class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">Sección</p>
              <p class="label font-medium text-gray-800">Sección A</p>
            </div>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconUser class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">Apoderado</p>
              <p class="label font-medium text-gray-800">Juan Pérez López</p>
            </div>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
            <IconId class="h-5 w-5 text-gray-400" />
            <div>
              <p class="small text-gray-400">DNI del apoderado</p>
              <p class="label font-medium text-gray-800">87654321</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Acciones -->
      <div class="space-y-3">
        <button
          class="border-secondary text-secondary hover:bg-secondary flex w-full items-center justify-center gap-2 rounded-xl border-2 bg-white py-3.5 font-semibold transition-all hover:text-white"
        >
          <IconEdit class="h-5 w-5" />
          Editar Información
        </button>

        <button
          class="border-tertiary text-tertiary hover:bg-tertiary flex w-full items-center justify-center gap-2 rounded-xl border-2 bg-white py-3.5 font-semibold transition-all hover:text-white"
        >
          <IconArrowsExchange class="h-5 w-5" />
          Trasladar
        </button>

        <button
          class="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-white py-3.5 font-semibold text-red-500 transition-all hover:bg-red-500 hover:text-white"
        >
          <IconUserOff class="h-5 w-5" />
          Retirar
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  IconArrowLeft,
  IconArrowsExchange,
  IconClock,
  IconEdit,
  IconId,
  IconSchool,
  IconUser,
  IconUserOff,
} from '@tabler/icons-vue'
</script>
