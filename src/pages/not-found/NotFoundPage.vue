<script setup lang="ts">
// NotFoundPage - Página 404
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
    <div class="text-6xl">🔍</div>
    <h1 class="mt-4 text-4xl font-bold text-gray-800">404</h1>
    <p class="mt-2 text-gray-500">Página no encontrada</p>
    <router-link
      to="/"
      class="mt-6 rounded-xl bg-[#B8D787] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
    >
      Volver al Inicio
    </router-link>
  </div>
</template>
