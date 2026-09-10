<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-secondary to-secondary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <h1 class="h2-hero-white text-2xl font-bold text-white">Asistencia</h1>
        <p class="span-white mt-1 text-white/70">Marcar asistencia diaria</p>
      </div>
    </header>

    <!-- Tabs -->
    <div class="mx-auto -mt-4 max-w-7xl px-4">
      <div class="mb-6 flex rounded-xl bg-white p-1 shadow-sm">
        <button
          @click="activeTab = 'own'"
          class="flex-1 rounded-lg py-3 text-sm font-semibold transition-all"
          :class="
            activeTab === 'own'
              ? 'bg-secondary text-white shadow'
              : 'text-gray-500 hover:text-gray-700'
          "
        >
          Mi Asistencia
        </button>
        <button
          @click="activeTab = 'children'"
          class="flex-1 rounded-lg py-3 text-sm font-semibold transition-all"
          :class="
            activeTab === 'children'
              ? 'bg-secondary text-white shadow'
              : 'text-gray-500 hover:text-gray-700'
          "
        >
          Asistencia Niños
        </button>
      </div>
    </div>

    <!-- Contenido principal -->
    <main class="mx-auto max-w-7xl px-4">
      <!-- Tab: Mi Asistencia -->
      <div v-if="activeTab === 'own'">
        <!-- Hora actual -->
        <div class="mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
          <p class="small mb-1 text-gray-400">Hora actual</p>
          <p class="display text-4xl font-bold text-gray-800">08:32:15</p>
          <p class="label text-secondary mt-2">Turno: Mañana</p>
        </div>

        <!-- Botones de marcar -->
        <div class="mb-6 grid grid-cols-2 gap-4">
          <!-- Marcar Entrada -->
          <button
            class="border-primary bg-primary/5 hover:bg-primary flex flex-col items-center rounded-2xl border-2 p-6 transition-all hover:text-white"
          >
            <IconLogin class="text-primary mb-3 h-12 w-12" />
            <span class="h5 text-primary">Entrada</span>
            <span class="small text-gray-400">07:00 AM</span>
          </button>

          <!-- Marcar Salida -->
          <button
            class="hover:border-secondary hover:bg-secondary/5 flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 transition-all"
          >
            <IconLogout class="mb-3 h-12 w-12 text-gray-400" />
            <span class="h5 text-gray-400">Salida</span>
            <span class="small text-gray-400">12:00 PM</span>
          </button>
        </div>

        <!-- Último registro -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
              <IconCheck class="h-5 w-5 text-green-600" />
            </div>
            <div class="flex-1">
              <p class="label font-medium text-gray-800">Último registro</p>
              <p class="small text-gray-500">Hoy • Entrada: 07:58 AM</p>
            </div>
            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Puntual
            </span>
          </div>
        </div>
      </div>

      <!-- Tab: Asistencia Niños -->
      <div v-if="activeTab === 'children'">
        <!-- Selector de sección -->
        <div class="mb-4">
          <select
            class="focus:border-secondary w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
          >
            <option value="">Seleccionar sección</option>
            <option value="A" selected>Sección A</option>
            <option value="B">Sección B</option>
            <option value="C">Sección C</option>
          </select>
        </div>

        <!-- Resumen -->
        <div class="mb-4 flex gap-3">
          <div class="flex-1 rounded-xl bg-green-50 p-3 text-center">
            <p class="display text-lg font-bold text-green-600">18</p>
            <p class="small text-gray-500">Presentes</p>
          </div>
          <div class="flex-1 rounded-xl bg-red-50 p-3 text-center">
            <p class="display text-lg font-bold text-red-500">2</p>
            <p class="small text-gray-500">Ausentes</p>
          </div>
          <div class="flex-1 rounded-xl bg-gray-100 p-3 text-center">
            <p class="display text-lg font-bold text-gray-700">20</p>
            <p class="small text-gray-500">Total</p>
          </div>
        </div>

        <!-- Lista de niños -->
        <div class="space-y-3">
          <!-- Niño 1 -->
          <div class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <span class="label text-primary">AP</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Ana Pérez García</h3>
              <p class="small text-gray-400">DNI: 12345678</p>
            </div>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white"
            >
              <IconCheck class="h-5 w-5" />
            </button>
          </div>

          <!-- Niño 2 -->
          <div class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div class="bg-secondary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <span class="label text-secondary">CL</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Carlos López Ramos</h3>
              <p class="small text-gray-400">DNI: 87654321</p>
            </div>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white"
            >
              <IconCheck class="h-5 w-5" />
            </button>
          </div>

          <!-- Niño 3 (Ausente) -->
          <div class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div class="bg-tertiary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <span class="label text-tertiary">MR</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">María Rodríguez Silva</h3>
              <p class="small text-gray-400">DNI: 11223344</p>
            </div>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50"
            >
              <IconX class="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <!-- Niño 4 -->
          <div class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <span class="label text-red-500">JG</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Jorge Gonzales Torres</h3>
              <p class="small text-gray-400">DNI: 55667788</p>
            </div>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white"
            >
              <IconCheck class="h-5 w-5" />
            </button>
          </div>

          <!-- Niño 5 (Ausente) -->
          <div class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <span class="label text-primary">LM</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Laura Martínez Vargas</h3>
              <p class="small text-gray-400">DNI: 99887766</p>
            </div>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50"
            >
              <IconX class="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        <!-- Botón guardar -->
        <div class="mt-6">
          <button
            class="bg-secondary hover:bg-secondary-dark flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            <IconDeviceFloppy class="h-5 w-5" />
            Guardar Asistencia
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { IconCheck, IconDeviceFloppy, IconLogin, IconLogout, IconX } from '@tabler/icons-vue'

const activeTab = ref<'own' | 'children'>('own')
</script>
