<script setup lang="ts">
// TeacherHistoryPage - Historial de asistencia del docente
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <div class="flex items-center">
        <router-link to="/attendance" class="mr-3 text-white">
          ←
        </router-link>
        <div>
          <h1 class="text-xl font-bold text-white">Historial</h1>
          <p class="text-sm text-white/80">Mi historial de asistencia</p>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Filtro de mes -->
      <div class="mb-4">
        <select class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none">
          <option value="">Seleccionar mes</option>
        </select>
      </div>

      <!-- Lista de asistencias -->
      <div class="space-y-3">
        <p class="text-center text-gray-500">No hay registros de asistencia</p>
      </div>
    </main>
  </div>
</template>
