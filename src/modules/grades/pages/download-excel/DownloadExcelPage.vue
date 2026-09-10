<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-tertiary to-tertiary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center gap-4">
          <router-link
            to="/grades"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-gray-900 transition-colors hover:bg-white/30"
          >
            <IconArrowLeft class="h-5 w-5" />
          </router-link>
          <div>
            <h1 class="h2-hero-white text-2xl font-bold text-gray-900">Descargar Reporte</h1>
            <p class="span-white mt-1 text-gray-800/70">Exportar datos evaluados</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Filtros -->
      <div class="mb-6 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
        <!-- Área Curricular -->
        <div>
          <label class="label mb-2 block font-medium text-gray-700">Área Curricular</label>
          <div class="relative">
            <IconBook class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <select
              class="focus:border-tertiary focus:ring-tertiary/20 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
            >
              <option value="">Seleccionar área</option>
              <option value="cognitivo">Cognitivo</option>
              <option value="comunicativo">Comunicativo</option>
              <option value="psicomotriz">Psicomotriz</option>
              <option value="social">Socioemocional</option>
            </select>
            <IconChevronDown
              class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <!-- Bimestre -->
        <div>
          <label class="label mb-2 block font-medium text-gray-700">Bimestre</label>
          <div class="relative">
            <IconCalendar class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <select
              class="focus:border-tertiary focus:ring-tertiary/20 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
            >
              <option value="">Seleccionar bimestre</option>
              <option value="1">I Bimestre</option>
              <option value="2">II Bimestre</option>
              <option value="3">III Bimestre</option>
              <option value="4">IV Bimestre</option>
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
              class="focus:border-tertiary focus:ring-tertiary/20 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
            >
              <option value="">Seleccionar sección</option>
              <option value="A">Sección A</option>
              <option value="B">Sección B</option>
              <option value="C">Sección C</option>
            </select>
            <IconChevronDown
              class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      <!-- Botón de descarga -->
      <div class="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-4 flex items-center gap-4">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
            <IconDownload class="h-7 w-7 text-green-600" />
          </div>
          <div>
            <h3 class="h5 text-gray-800">Descargar en Excel</h3>
            <p class="small text-gray-500">Formato compatible con SIAGIE</p>
          </div>
        </div>

        <button
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
        >
          <IconDownload class="h-5 w-5" />
          Descargar Reporte
        </button>
      </div>

      <!-- Historial de descargas -->
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="h5 mb-4 text-gray-800">Descargas recientes</h3>

        <div class="space-y-3">
          <!-- Descarga 1 -->
          <div class="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
              <IconFileSpreadsheet class="h-5 w-5 text-green-600" />
            </div>
            <div class="flex-1">
              <p class="label font-medium text-gray-800">Cognitivo_B1_SeccionA.xlsx</p>
              <p class="small text-gray-500">Descargado hace 2 horas</p>
            </div>
            <button class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <IconRefresh class="h-5 w-5" />
            </button>
          </div>

          <!-- Descarga 2 -->
          <div class="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
              <IconFileSpreadsheet class="h-5 w-5 text-green-600" />
            </div>
            <div class="flex-1">
              <p class="label font-medium text-gray-800">Comunicativo_B1_SeccionA.xlsx</p>
              <p class="small text-gray-500">Descargado hace 1 día</p>
            </div>
            <button class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <IconRefresh class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  IconArrowLeft,
  IconBook,
  IconCalendar,
  IconChevronDown,
  IconDownload,
  IconFileSpreadsheet,
  IconRefresh,
  IconSchool,
} from '@tabler/icons-vue'
</script>
