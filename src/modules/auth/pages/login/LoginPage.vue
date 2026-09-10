<template>
  <div class="login-page flex min-h-screen flex-col lg:flex-row">
    <!-- Mitad imagen izquierda -->
    <div
      class="login-image relative flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-b-[2rem] sm:h-64 lg:h-auto lg:w-1/2 lg:rounded-none lg:rounded-r-[2.5rem]"
    >
      <!-- Overlay degradado -->
      <div class="from-primary/70 to-secondary/30 absolute inset-0 bg-gradient-to-r via-black/50" />

      <!-- Contenido desktop (solo lg+) -->
      <div
        class="relative z-10 hidden flex-col items-center justify-center p-12 text-center lg:flex"
      >
        <div
          class="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm"
        >
          <IconSeedling class="h-14 w-14 text-white" />
        </div>
        <h1 class="display-white text-white">Semillitas<br />del Saber</h1>
        <p class="lead-white mt-4 max-w-md text-white/90">
          Plataforma de gestión escolar para nivel inicial. Controla matrículas, asistencia y
          evaluaciones de tus pequeños en un solo lugar.
        </p>
      </div>

      <!-- Contenido mobile (logo minimal) -->
      <div class="relative z-10 flex items-center gap-3 lg:hidden">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
        >
          <IconSeedling class="h-7 w-7 text-white" />
        </div>
        <label class="label-white font-semibold">Semillitas del Saber</label>
      </div>
    </div>

    <!-- Mitad formulario derecha -->
    <div class="flex w-full flex-1 items-center justify-center p-6 sm:p-10 lg:w-1/2 lg:flex-none">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="mb-8 text-center">
          <div
            class="bg-primary mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg"
          >
            <IconSeedling class="h-12 w-12 text-white" />
          </div>
          <h2 class="h2-hero text-gray-900">Iniciar Sesión</h2>
          <p class="lead2 mt-2 text-gray-500">Sistema de Gestión</p>
        </div>

        <!-- Card de Login -->
        <div class="rounded-3xl bg-white p-8 shadow-2xl">
          <form class="space-y-5">
            <!-- Campo DNI/Usuario -->
            <div>
              <label class="label mb-2 block text-gray-700">DNI o Usuario</label>
              <div class="relative">
                <IconUser
                  class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
                />
                <input
                  v-model="dni"
                  type="text"
                  placeholder="Ingrese su DNI o usuario"
                  class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <!-- Campo Contraseña -->
            <div>
              <label class="label mb-2 block text-gray-700">Contraseña</label>
              <div class="relative">
                <IconLock
                  class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
                />
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Ingrese su contraseña"
                  class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-12 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
                />
                <!-- Toggle ver contraseña -->
                <button
                  type="button"
                  :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                  class="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none"
                  @click="showPassword = !showPassword"
                >
                  <IconEye v-if="!showPassword" class="h-5 w-5" />
                  <IconEyeOff v-else class="h-5 w-5" />
                </button>
              </div>
            </div>

            <!-- Botón Ingresar -->
            <button
              type="submit"
              class="bg-primary hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              <IconLogin class="h-5 w-5" />
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconEye, IconEyeOff, IconLock, IconLogin, IconSeedling, IconUser } from '@tabler/icons-vue'

// Estado del formulario
const dni = ref('')
const password = ref('')
const showPassword = ref(false)
</script>

<style scoped>
/* Fondo de la mitad imagen - misma imagen del hero */
.login-image {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>