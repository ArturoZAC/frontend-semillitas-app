<script setup lang="ts">
// AttendanceReportPage - Reporte mensual de asistencia (vista directora)
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
          <h1 class="text-xl font-bold text-white">Reporte Mensual</h1>
          <p class="text-sm text-white/80">Resumen de asistencia docentes</p>
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

      <!-- Tabla de resumen -->
      <div class="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 bg-gray-50">
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-600">Docente</th>
              <th class="px-4 py-3 text-center text-sm font-medium text-gray-600">Tardanzas</th>
              <th class="px-4 py-3 text-center text-sm font-medium text-gray-600">Faltas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" class="px-4 py-8 text-center text-gray-500">
                No hay datos disponibles
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
