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
            <h1 class="h2-hero-white text-2xl font-bold text-white">Nueva Matrícula</h1>
            <p class="span-white mt-1 text-white/70">Registrar nuevo alumno</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Formulario -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <form class="space-y-5">
          <!-- DNI del Padre/Apoderado -->
          <div>
            <label class="label mb-2 block font-medium text-gray-700"
              >DNI del Padre/Apoderado</label
            >
            <div class="relative">
              <IconId class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ingrese DNI del apoderado"
                maxlength="8"
                class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <!-- DNI del Niño -->
          <div>
            <label class="label mb-2 block font-medium text-gray-700">DNI del Niño</label>
            <div class="relative">
              <IconId class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ingrese DNI del niño"
                maxlength="8"
                class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <!-- Nombre Completo -->
          <div>
            <label class="label mb-2 block font-medium text-gray-700"
              >Nombre Completo del Niño</label
            >
            <div class="relative">
              <IconUser class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ingrese nombre completo"
                class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <!-- Turno -->
          <div>
            <label class="label mb-2 block font-medium text-gray-700">Turno</label>
            <div class="relative">
              <IconClock class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <select
                class="focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
              >
                <option value="">Seleccione turno</option>
                <option value="morning">Mañana (7:00 AM - 12:00 PM)</option>
                <option value="afternoon">Tarde (1:00 PM - 6:00 PM)</option>
              </select>
              <IconChevronDown
                class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <!-- Sección -->
          <div>
            <label class="label mb-2 block font-medium text-gray-700">Sección</label>
            <div class="relative">
              <IconSchool class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <select
                class="focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
              >
                <option value="">Seleccione sección</option>
                <option value="A">Sección A</option>
                <option value="B">Sección B</option>
                <option value="C">Sección C</option>
              </select>
              <IconChevronDown
                class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <!-- Botón Guardar -->
          <button
            type="submit"
            class="bg-primary hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            <IconDeviceFloppy class="h-5 w-5" />
            Guardar Matrícula
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  IconArrowLeft,
  IconChevronDown,
  IconClock,
  IconDeviceFloppy,
  IconId,
  IconSchool,
  IconUser,
} from '@tabler/icons-vue'
</script>
