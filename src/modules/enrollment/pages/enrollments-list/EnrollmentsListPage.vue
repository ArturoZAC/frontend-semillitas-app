<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-primary to-primary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="h2-hero-white text-2xl font-bold text-white">Matrícula</h1>
            <p class="span-white mt-1 text-white/70">Listado de alumnos</p>
          </div>
          <router-link
            to="/enrollments/create"
            class="text-primary flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold shadow-lg transition-all hover:shadow-xl"
          >
            <IconPlus class="h-5 w-5" />
            Nueva
          </router-link>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="mx-auto -mt-4 max-w-7xl px-4">
      <!-- Buscador y filtros -->
      <div class="mb-6 space-y-3">
        <!-- Buscador -->
        <div class="relative">
          <IconSearch class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre..."
            class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-12 text-gray-800 shadow-sm transition-colors focus:ring-2 focus:outline-none"
          />
        </div>

        <!-- Filtros -->
        <div class="flex gap-3">
          <select
            class="focus:border-primary flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
          >
            <option value="">Todos los turnos</option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
          </select>

          <select
            class="focus:border-primary flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
          >
            <option value="">Todas las secciones</option>
            <option value="A">Sección A</option>
            <option value="B">Sección B</option>
            <option value="C">Sección C</option>
          </select>
        </div>
      </div>

      <!-- Estadísticas rápidas -->
      <div class="mb-6 flex gap-3">
        <div class="bg-primary/10 flex-1 rounded-xl p-3 text-center">
          <p class="display text-primary text-xl font-bold">85</p>
          <p class="small text-gray-500">Mañana</p>
        </div>
        <div class="bg-secondary/10 flex-1 rounded-xl p-3 text-center">
          <p class="display text-secondary text-xl font-bold">65</p>
          <p class="small text-gray-500">Tarde</p>
        </div>
        <div class="flex-1 rounded-xl bg-gray-100 p-3 text-center">
          <p class="display text-xl font-bold text-gray-700">150</p>
          <p class="small text-gray-500">Total</p>
        </div>
      </div>

      <!-- Lista de niños -->
      <div class="space-y-3">
        <!-- Niño 1 -->
        <router-link
          to="/enrollments/1"
          class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <span class="h5 text-primary">AP</span>
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Ana Pérez García</h3>
            <p class="small text-gray-500">DNI: 12345678 • Turno: Mañana • Sección A</p>
          </div>
          <span class="bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-medium">
            Matriculado
          </span>
        </router-link>

        <!-- Niño 2 -->
        <router-link
          to="/enrollments/2"
          class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-secondary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <span class="h5 text-secondary">CL</span>
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Carlos López Ramos</h3>
            <p class="small text-gray-500">DNI: 87654321 • Turno: Tarde • Sección B</p>
          </div>
          <span class="bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-medium">
            Matriculado
          </span>
        </router-link>

        <!-- Niño 3 -->
        <router-link
          to="/enrollments/3"
          class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-tertiary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <span class="h5 text-tertiary">MR</span>
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">María Rodríguez Silva</h3>
            <p class="small text-gray-500">DNI: 11223344 • Turno: Mañana • Sección A</p>
          </div>
          <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            Trasladado
          </span>
        </router-link>

        <!-- Niño 4 -->
        <router-link
          to="/enrollments/4"
          class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <span class="h5 text-red-500">JG</span>
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Jorge Gonzales Torres</h3>
            <p class="small text-gray-500">DNI: 55667788 • Turno: Tarde • Sección C</p>
          </div>
          <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
            Retirado
          </span>
        </router-link>

        <!-- Niño 5 -->
        <router-link
          to="/enrollments/5"
          class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <span class="h5 text-primary">LM</span>
          </div>
          <div class="flex-1">
            <h3 class="h5 text-gray-800">Laura Martínez Vargas</h3>
            <p class="small text-gray-500">DNI: 99887766 • Turno: Mañana • Sección B</p>
          </div>
          <span class="bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-medium">
            Matriculado
          </span>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { IconPlus, IconSearch } from '@tabler/icons-vue'
</script>
