<script setup lang="ts">
// HomePage - Dashboard principal
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <h1 class="text-xl font-bold text-white">Semillitas</h1>
      <p class="text-sm text-white/80">Bienvenido, Usuario</p>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Resumen -->
      <section class="mb-6">
        <h2 class="mb-3 text-lg font-semibold text-gray-800">Resumen</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-xl bg-white p-4 shadow-sm">
            <p class="text-sm text-gray-500">Turno Mañana</p>
            <p class="text-2xl font-bold text-[#B8D787]">0</p>
          </div>
          <div class="rounded-xl bg-white p-4 shadow-sm">
            <p class="text-sm text-gray-500">Turno Tarde</p>
            <p class="text-2xl font-bold text-[#C08461]">0</p>
          </div>
        </div>
      </section>

      <!-- Accesos rápidos -->
      <section>
        <h2 class="mb-3 text-lg font-semibold text-gray-800">Accesos Rápidos</h2>
        <div class="space-y-3">
          <router-link
            to="/enrollments"
            class="flex items-center rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-2xl">📋</span>
            <span class="ml-3 font-medium text-gray-800">Matrícula</span>
          </router-link>

          <router-link
            to="/attendance"
            class="flex items-center rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-2xl">✅</span>
            <span class="ml-3 font-medium text-gray-800">Asistencia</span>
          </router-link>

          <router-link
            to="/grades"
            class="flex items-center rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-2xl">📝</span>
            <span class="ml-3 font-medium text-gray-800">Notas</span>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>
