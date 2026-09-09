<script setup lang="ts">
// UploadExcelPage - Subir Excel del SIAGIE
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <h1 class="text-xl font-bold text-white">Notas</h1>
      <p class="text-sm text-white/80">Subir archivo SIAGIE</p>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Selectores -->
      <div class="mb-6 space-y-4">
        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700"> Área Curricular </label>
          <select
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none"
          >
            <option value="">Seleccionar área</option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700"> Bimestre </label>
          <select
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none"
          >
            <option value="">Seleccionar bimestre</option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700"> Sección </label>
          <select
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#B8D787] focus:outline-none"
          >
            <option value="">Seleccionar sección</option>
          </select>
        </div>
      </div>

      <!-- Zona de drag and drop -->
      <div
        class="mb-6 rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-[#B8D787]"
      >
        <div class="text-4xl">📁</div>
        <p class="mt-2 text-gray-600">Arrastra el archivo Excel aquí</p>
        <p class="text-sm text-gray-400">o haz clic para seleccionar</p>
        <input type="file" class="hidden" accept=".xlsx,.xls" />
      </div>

      <!-- Botón subir -->
      <button
        class="w-full rounded-xl bg-[#B8D787] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
      >
        Subir Archivo
      </button>
    </main>
  </div>
</template>
