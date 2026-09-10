<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-tertiary to-tertiary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <h1 class="h2-hero-white text-2xl font-bold text-gray-900">Subir Excel SIAGIE</h1>
        <p class="span-white mt-1 text-gray-800/70">Cargar archivo de evaluaciones</p>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Selectores -->
      <div class="mb-6 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
        <!-- Área Curricular -->
        <div>
          <label class="label mb-2 block font-medium text-gray-700">Área Curricular</label>
          <AppSelect
            v-model="areaFilter"
            :options="areaOptions"
            placeholder="Seleccionar área"
            :leading-icon="IconBook"
          />
        </div>

        <!-- Bimestre -->
        <div>
          <label class="label mb-2 block font-medium text-gray-700">Bimestre</label>
          <AppSelect
            v-model="bimestreFilter"
            :options="bimestreOptions"
            placeholder="Seleccionar bimestre"
            :leading-icon="IconCalendar"
          />
        </div>

        <!-- Sección -->
        <div>
          <label class="label mb-2 block font-medium text-gray-700">Sección</label>
          <AppSelect
            v-model="seccionFilter"
            :options="seccionOptions"
            placeholder="Seleccionar sección"
            :leading-icon="IconSchool"
          />
        </div>
      </div>

      <!-- Zona de subida de archivo -->
      <div class="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div
          class="hover:border-tertiary rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center transition-colors"
        >
          <div class="mb-4 flex justify-center">
            <div class="bg-tertiary/10 flex h-16 w-16 items-center justify-center rounded-2xl">
              <IconUpload class="text-tertiary h-8 w-8" />
            </div>
          </div>
          <p class="h5 mb-1 text-gray-800">Arrastra el archivo aquí</p>
          <p class="small mb-4 text-gray-400">o haz clic para seleccionar</p>
          <p class="small text-gray-400">Formatos aceptados: .xlsx, .xls</p>
          <input type="file" class="hidden" accept=".xlsx,.xls" />
          <button
            class="bg-tertiary/10 text-tertiary hover:bg-tertiary/20 mt-4 rounded-xl px-6 py-2.5 font-medium transition-colors"
          >
            Seleccionar archivo
          </button>
        </div>
      </div>

      <!-- Estado: Archivo cargado (ejemplo) -->
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="h5 mb-4 text-gray-800">Estado de carga</h3>

        <!-- Archivo cargado exitosamente -->
        <div class="flex items-center gap-4 rounded-xl bg-green-50 p-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <IconFileSpreadsheet class="h-6 w-6 text-green-600" />
          </div>
          <div class="flex-1">
            <p class="label font-medium text-gray-800">SIAGIE_Cognitivo_2026.xlsx</p>
            <p class="small text-gray-500">25 niños detectados • 32 KB</p>
          </div>
          <IconCheck class="h-6 w-6 text-green-500" />
        </div>

        <!-- Botón continuar -->
        <button
          class="bg-tertiary hover:bg-tertiary-dark mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-gray-900 shadow-lg transition-all hover:shadow-xl"
        >
          <IconArrowRight class="h-5 w-5" />
          Continuar a Evaluación
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
  IconArrowRight,
  IconBook,
  IconCalendar,
  IconCheck,
  IconFileSpreadsheet,
  IconSchool,
  IconUpload,
} from '@tabler/icons-vue'

import AppSelect from '@/shared/components/AppSelect.vue'
import type { AppSelectOption } from '@/shared/components/AppSelect.vue'

const areaFilter = ref('')
const bimestreFilter = ref('')
const seccionFilter = ref('')

const areaOptions: AppSelectOption[] = [
  { value: 'cognitivo', label: 'Cognitivo' },
  { value: 'comunicativo', label: 'Comunicativo' },
  { value: 'psicomotriz', label: 'Psicomotriz' },
  { value: 'social', label: 'Socioemocional' },
]

const bimestreOptions: AppSelectOption[] = [
  { value: '1', label: 'I Bimestre' },
  { value: '2', label: 'II Bimestre' },
  { value: '3', label: 'III Bimestre' },
  { value: '4', label: 'IV Bimestre' },
]

const seccionOptions: AppSelectOption[] = [
  { value: 'A', label: 'Sección A' },
  { value: 'B', label: 'Sección B' },
  { value: 'C', label: 'Sección C' },
]
</script>
