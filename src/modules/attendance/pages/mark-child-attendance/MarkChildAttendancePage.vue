<script setup lang="ts">
// MarkChildAttendancePage - Marcar asistencia de niños (vista docente)
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <div class="flex items-center">
        <router-link to="/attendance" class="mr-3 text-white"> ← </router-link>
        <div>
          <h1 class="text-xl font-bold text-white">Asistencia Niños</h1>
          <p class="text-sm text-white/80">Marcar asistencia diaria</p>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Selector de sección -->
      <div class="mb-4">
        <select
          class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none"
        >
          <option value="">Seleccionar sección</option>
        </select>
      </div>

      <!-- Lista de niños -->
      <div class="space-y-3">
        <p class="text-center text-gray-500">Seleccione una sección para ver los niños</p>
      </div>

      <!-- Botón guardar -->
      <div class="mt-6">
        <button
          class="w-full rounded-xl bg-[#B8D787] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
        >
          Guardar Asistencia
        </button>
      </div>
    </main>
  </div>
</template>
