<script setup lang="ts">
// DownloadExcelPage - Descargar Excel completado
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <div class="flex items-center">
        <router-link to="/grades" class="mr-3 text-white">
          ←
        </router-link>
        <div>
          <h1 class="text-xl font-bold text-white">Descargar Excel</h1>
          <p class="text-sm text-white/80">Generar archivo SIAGIE</p>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Resumen -->
      <div class="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">Resumen</h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Niños evaluados</span>
            <span class="font-medium text-[#B8D787]">0/0</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Competencias completas</span>
            <span class="font-medium text-[#B8D787]">0/0</span>
          </div>
        </div>
      </div>

      <!-- Estado -->
      <div class="mb-6 rounded-2xl bg-yellow-50 p-6 text-center">
        <div class="text-4xl">⚠️</div>
        <p class="mt-2 font-medium text-yellow-800">Faltan niños por evaluar</p>
        <p class="text-sm text-yellow-600">Completa todas las evaluaciones para descargar</p>
      </div>

      <!-- Botón descargar -->
      <button
        disabled
        class="w-full rounded-xl bg-gray-300 px-4 py-3 font-semibold text-gray-500 cursor-not-allowed"
      >
        Descargar Excel
      </button>
    </main>
  </div>
</template>
