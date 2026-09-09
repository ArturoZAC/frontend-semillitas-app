<script setup lang="ts">
// MarkTeacherAttendancePage - Marcar entrada/salida del docente
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-[#B8D787] p-4 shadow-md">
      <h1 class="text-xl font-bold text-white">Asistencia</h1>
      <p class="text-sm text-white/80">Marcar entrada y salida</p>
    </header>

    <!-- Contenido principal -->
    <main class="p-4">
      <!-- Hora actual -->
      <div class="mb-6 text-center">
        <p class="text-4xl font-bold text-gray-800">00:00:00</p>
        <p class="text-gray-500">Hora actual</p>
        <p class="mt-2 text-sm text-[#C08461]">Turno: --</p>
      </div>

      <!-- Botón de marcar -->
      <div class="mb-8 flex justify-center">
        <button
          class="flex h-40 w-40 items-center justify-center rounded-full bg-[#B8D787] text-xl font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          Marcar Entrada
        </button>
      </div>

      <!-- Historial -->
      <section>
        <h2 class="mb-3 text-lg font-semibold text-gray-800">Historial</h2>
        <div class="space-y-3">
          <div class="rounded-xl bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-gray-800">--/--/----</p>
                <p class="text-sm text-gray-500">Entrada: --:-- | Salida: --:--</p>
              </div>
              <span class="rounded-full bg-[#B8D787] px-3 py-1 text-xs font-medium text-white">
                Puntual
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
