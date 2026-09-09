<script setup lang="ts">
// EnrollmentDetailPage - Detalle de un niño matriculado
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <div class="flex items-center">
        <router-link to="/enrollments" class="mr-3 text-white"> ← </router-link>
        <div>
          <h1 class="text-xl font-bold text-white">Detalle del Niño</h1>
          <p class="text-sm text-white/80">Información de matrícula</p>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Tarjeta de información -->
      <div class="mb-4 rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-800">Nombre del Niño</h2>
          <span class="rounded-full bg-[#B8D787] px-3 py-1 text-sm font-medium text-white">
            Matriculado
          </span>
        </div>

        <div class="space-y-3 text-gray-600">
          <p><span class="font-medium">DNI:</span> --------</p>
          <p><span class="font-medium">Turno:</span> --</p>
          <p><span class="font-medium">Sección:</span> --</p>
          <p><span class="font-medium">Apoderado:</span> --</p>
          <p><span class="font-medium">DNI Apoderado:</span> --</p>
        </div>
      </div>

      <!-- Acciones -->
      <div class="space-y-3">
        <button
          class="w-full rounded-xl border border-[#C08461] px-4 py-3 font-medium text-[#C08461] transition-colors hover:bg-[#C08461] hover:text-white"
        >
          Editar Información
        </button>

        <button
          class="w-full rounded-xl border border-[#F8C40E] px-4 py-3 font-medium text-[#F8C40E] transition-colors hover:bg-[#F8C40E] hover:text-white"
        >
          Trasladar
        </button>

        <button
          class="w-full rounded-xl border border-red-500 px-4 py-3 font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
        >
          Retirar
        </button>
      </div>
    </main>
  </div>
</template>
