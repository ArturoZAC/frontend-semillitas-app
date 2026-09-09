<script setup lang="ts">
// EnrollmentCreatePage - Formulario de nueva matrícula
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <div class="flex items-center">
        <router-link to="/enrollments" class="mr-3 text-white">
          ←
        </router-link>
        <div>
          <h1 class="text-xl font-bold text-white">Nueva Matrícula</h1>
          <p class="text-sm text-white/80">Registrar nuevo niño</p>
        </div>
      </div>
    </header>

    <!-- Formulario -->
    <main class="p-4">
      <form class="space-y-4">
        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700">
            DNI del Padre/Apoderado
          </label>
          <input
            type="text"
            placeholder="Ingrese DNI del apoderado"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700">
            DNI del Niño
          </label>
          <input
            type="text"
            placeholder="Ingrese DNI del niño"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700">
            Nombre Completo del Niño
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre completo"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700">
            Turno
          </label>
          <select class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none">
            <option value="">Seleccione turno</option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700">
            Sección
          </label>
          <select class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none">
            <option value="">Seleccione sección</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-[#B8D787] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
        >
          Registrar Matrícula
        </button>
      </form>
    </main>
  </div>
</template>
