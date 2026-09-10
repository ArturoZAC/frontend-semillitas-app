<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <header class="from-tertiary to-tertiary-dark bg-gradient-to-r p-6 pb-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center gap-4">
          <router-link
            to="/grades"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-gray-900 transition-colors hover:bg-white/30"
          >
            <IconArrowLeft class="h-5 w-5" />
          </router-link>
          <div>
            <h1 class="h2-hero-white text-2xl font-bold text-gray-900">Evaluar Niños</h1>
            <p class="span-white mt-1 text-gray-800/70">Cognitivo • I Bimestre • Sección A</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Barra de progreso -->
    <div class="mx-auto -mt-4 max-w-7xl px-4">
      <div class="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <div class="mb-2 flex items-center justify-between">
          <span class="label text-gray-600">Progreso</span>
          <span class="label text-tertiary font-semibold">12/25 niños</span>
        </div>
        <div class="h-3 w-full overflow-hidden rounded-full bg-gray-100">
          <div class="bg-tertiary h-full rounded-full transition-all" style="width: 48%" />
        </div>
      </div>
    </div>

    <!-- Contenido principal -->
    <main class="mx-auto max-w-7xl px-4">
      <!-- Lista de niños -->
      <div class="space-y-3">
        <!-- Niño 1 - Completado -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <span class="label font-semibold text-green-600">AP</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Ana Pérez García</h3>
              <p class="small text-gray-500">4/4 competencias completadas</p>
            </div>
            <IconCircleCheck class="h-6 w-6 text-green-500" />
          </div>
        </div>

        <!-- Niño 2 - En progreso -->
        <div class="border-tertiary rounded-2xl border-2 bg-white p-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="bg-tertiary/10 flex h-12 w-12 items-center justify-center rounded-full">
              <span class="label text-tertiary font-semibold">CL</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Carlos López Ramos</h3>
              <p class="small text-gray-500">2/4 competencias completadas</p>
            </div>
            <span class="bg-tertiary/20 text-tertiary rounded-full px-3 py-1 text-xs font-medium">
              En progreso
            </span>
          </div>

          <!-- Competencias (acordeón abierto) -->
          <div class="mt-4 space-y-3 border-t border-gray-100 pt-4">
            <!-- Competencia 1 -->
            <div class="rounded-xl bg-gray-50 p-4">
              <div class="mb-3 flex items-center justify-between">
                <h4 class="label font-medium text-gray-700">Identifica colores</h4>
                <span
                  class="bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-semibold"
                  >AD</span
                >
              </div>
              <textarea
                placeholder="Conclusión descriptiva..."
                rows="2"
                class="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:outline-none"
              />
            </div>

            <!-- Competencia 2 -->
            <div class="rounded-xl bg-gray-50 p-4">
              <div class="mb-3 flex items-center justify-between">
                <h4 class="label font-medium text-gray-700">Reconoce formas geométricas</h4>
                <div class="flex gap-1">
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    AD
                  </button>
                  <button class="bg-secondary rounded-lg px-3 py-1 text-xs font-medium text-white">
                    A
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    B
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    C
                  </button>
                </div>
              </div>
              <textarea
                placeholder="Conclusión descriptiva..."
                rows="2"
                class="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:outline-none"
              />
            </div>

            <!-- Competencia 3 -->
            <div class="rounded-xl bg-gray-50 p-4">
              <div class="mb-3 flex items-center justify-between">
                <h4 class="label font-medium text-gray-700">Cuenta del 1 al 10</h4>
                <div class="flex gap-1">
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    AD
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    A
                  </button>
                  <button class="bg-primary rounded-lg px-3 py-1 text-xs font-medium text-white">
                    B
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    C
                  </button>
                </div>
              </div>
              <textarea
                placeholder="Conclusión descriptiva..."
                rows="2"
                class="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:outline-none"
              />
            </div>

            <!-- Competencia 4 -->
            <div class="rounded-xl bg-gray-50 p-4">
              <div class="mb-3 flex items-center justify-between">
                <h4 class="label font-medium text-gray-700">Escribe su nombre</h4>
                <div class="flex gap-1">
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    AD
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    A
                  </button>
                  <button
                    class="rounded-lg px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-200"
                  >
                    B
                  </button>
                  <button class="bg-secondary rounded-lg px-3 py-1 text-xs font-medium text-white">
                    C
                  </button>
                </div>
              </div>
              <textarea
                placeholder="Conclusión descriptiva..."
                rows="2"
                class="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:outline-none"
              />
            </div>
          </div>

          <!-- Botón guardar y siguiente -->
          <button
            class="bg-tertiary hover:bg-tertiary-dark mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-gray-900 transition-all"
          >
            <IconDeviceFloppy class="h-5 w-5" />
            Guardar y Siguiente
          </button>
        </div>

        <!-- Niño 3 - Pendiente -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <span class="label font-semibold text-gray-500">MR</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">María Rodríguez Silva</h3>
              <p class="small text-gray-500">0/4 competencias completadas</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
              Pendiente
            </span>
          </div>
        </div>

        <!-- Niño 4 - Pendiente -->
        <div class="rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <span class="label font-semibold text-gray-500">JG</span>
            </div>
            <div class="flex-1">
              <h3 class="label font-medium text-gray-800">Jorge Gonzales Torres</h3>
              <p class="small text-gray-500">0/4 competencias completadas</p>
            </div>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
              Pendiente
            </span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconCircleCheck, IconDeviceFloppy } from '@tabler/icons-vue'
</script>
