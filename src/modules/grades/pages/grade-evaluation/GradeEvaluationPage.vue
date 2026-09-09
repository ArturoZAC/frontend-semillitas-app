<script setup lang="ts">
// GradeEvaluationPage - Evaluar competencias por niño
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
          <h1 class="text-xl font-bold text-white">Evaluar Niños</h1>
          <p class="text-sm text-white/80">Registrar evaluaciones</p>
        </div>
      </div>
    </header>

    <!-- Barra de progreso -->
    <div class="bg-white p-4 shadow-sm">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-sm text-gray-600">Progreso</span>
        <span class="text-sm font-medium text-[#B8D787]">0/0</span>
      </div>
      <div class="h-2 w-full rounded-full bg-gray-200">
        <div class="h-2 rounded-full bg-[#B8D787]" style="width: 0%"></div>
      </div>
    </div>

    <!-- Lista de niños -->
    <main class="p-4">
      <div class="space-y-3">
        <p class="text-center text-gray-500">Cargando niños...</p>
      </div>
    </main>
  </div>
</template>
