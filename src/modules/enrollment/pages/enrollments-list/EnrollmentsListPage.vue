<script setup lang="ts">
// EnrollmentsListPage - Listado de matrículas
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <h1 class="text-xl font-bold text-white">Matrícula</h1>
      <p class="text-sm text-white/80">Listado de niños matriculados</p>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Buscador y filtros -->
      <div class="mb-4 space-y-3">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
        />

        <div class="flex gap-2">
          <select class="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none">
            <option value="">Todos los turnos</option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
          </select>

          <select class="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none">
            <option value="">Todas las secciones</option>
          </select>
        </div>
      </div>

      <!-- Lista de niños -->
      <div class="space-y-3">
        <p class="text-center text-gray-500">No hay niños matriculados</p>
      </div>
    </main>

    <!-- Botón flotante -->
    <router-link
      to="/enrollments/create"
      class="fixed bottom-24 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#B8D787] text-2xl text-white shadow-lg transition-transform hover:scale-105"
    >
      +
    </router-link>
  </div>
</template>
