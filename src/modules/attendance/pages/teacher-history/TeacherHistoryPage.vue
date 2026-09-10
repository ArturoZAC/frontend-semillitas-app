<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-secondary to-secondary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center gap-4">
          <router-link
            to="/attendance"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
          >
            <IconArrowLeft class="h-5 w-5" />
          </router-link>
          <div>
            <h1 class="h2-hero-white text-2xl font-bold text-white">Historial</h1>
            <p class="span-white mt-1 text-white/70">Mi historial de asistencia</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Filtros -->
      <div class="mb-6 flex gap-3">
        <select
          class="focus:border-secondary flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
        >
          <option value="">Todos los meses</option>
          <option value="1">Enero 2026</option>
          <option value="2">Febrero 2026</option>
          <option value="3">Marzo 2026</option>
          <option value="4">Abril 2026</option>
          <option value="5">Mayo 2026</option>
          <option value="6">Junio 2026</option>
        </select>
      </div>

      <!-- Resumen del mes -->
      <div class="mb-6 grid grid-cols-3 gap-3">
        <div class="rounded-xl bg-green-50 p-3 text-center">
          <p class="display text-lg font-bold text-green-600">22</p>
          <p class="small text-gray-500">Puntual</p>
        </div>
        <div class="rounded-xl bg-yellow-50 p-3 text-center">
          <p class="display text-lg font-bold text-yellow-600">3</p>
          <p class="small text-gray-500">Tardanzas</p>
        </div>
        <div class="rounded-xl bg-red-50 p-3 text-center">
          <p class="display text-lg font-bold text-red-500">1</p>
          <p class="small text-gray-500">Faltas</p>
        </div>
      </div>

      <!-- Lista de asistencia -->
      <div class="space-y-3">
        <!-- Registro 1 -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <p class="label font-medium text-gray-800">Lunes, 08 de Septiembre</p>
            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Puntual
            </span>
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <IconLogin class="h-4 w-4 text-green-500" />
              <span class="small text-gray-600">07:58 AM</span>
            </div>
            <div class="flex items-center gap-2">
              <IconLogout class="text-secondary h-4 w-4" />
              <span class="small text-gray-600">12:02 PM</span>
            </div>
          </div>
        </div>

        <!-- Registro 2 -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <p class="label font-medium text-gray-800">Viernes, 05 de Septiembre</p>
            <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
              Tardanza
            </span>
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <IconLogin class="h-4 w-4 text-yellow-500" />
              <span class="small text-gray-600">08:15 AM</span>
            </div>
            <div class="flex items-center gap-2">
              <IconLogout class="text-secondary h-4 w-4" />
              <span class="small text-gray-600">12:00 PM</span>
            </div>
          </div>
        </div>

        <!-- Registro 3 -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <p class="label font-medium text-gray-800">Jueves, 04 de Septiembre</p>
            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Puntual
            </span>
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <IconLogin class="h-4 w-4 text-green-500" />
              <span class="small text-gray-600">07:55 AM</span>
            </div>
            <div class="flex items-center gap-2">
              <IconLogout class="text-secondary h-4 w-4" />
              <span class="small text-gray-600">12:05 PM</span>
            </div>
          </div>
        </div>

        <!-- Registro 4 -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <p class="label font-medium text-gray-800">Miércoles, 03 de Septiembre</p>
            <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
              Falta
            </span>
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <IconX class="h-4 w-4 text-red-400" />
              <span class="small text-gray-400">Sin registro</span>
            </div>
          </div>
        </div>

        <!-- Registro 5 -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <p class="label font-medium text-gray-800">Martes, 02 de Septiembre</p>
            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Puntual
            </span>
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <IconLogin class="h-4 w-4 text-green-500" />
              <span class="small text-gray-600">07:52 AM</span>
            </div>
            <div class="flex items-center gap-2">
              <IconLogout class="text-secondary h-4 w-4" />
              <span class="small text-gray-600">12:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconLogin, IconLogout, IconX } from '@tabler/icons-vue'
</script>
