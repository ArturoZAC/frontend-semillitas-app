<template>
  <div class="login-page">
    <!-- Fondo degradado -->
    <div class="from-primary via-primary-dark to-secondary absolute inset-0 bg-gradient-to-br" />

    <!-- Contenido -->
    <div class="relative z-10 flex min-h-screen items-center justify-center p-4">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="mb-8 text-center">
          <div
            class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg"
          >
            <IconPlant2 class="text-primary h-12 w-12" />
          </div>
          <h1 class="h2-hero-white text-4xl font-bold">Colegio Semillitas</h1>
          <p class="lead2-white mt-2 text-white/80">Sistema de Gestión</p>
        </div>

        <!-- Card de Login -->
        <div class="rounded-3xl bg-white p-8 shadow-2xl">
          <h2 class="h3-card mb-6 text-center text-gray-800">Iniciar Sesión</h2>

          <form class="space-y-5">
            <!-- Campo DNI/Usuario -->
            <div>
              <label class="label mb-2 block text-gray-700">DNI o Usuario</label>
              <div class="relative">
                <IconUser class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
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
                <IconLock class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  class="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 text-gray-800 transition-colors focus:bg-white focus:ring-2 focus:outline-none"
                />
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

          <!-- Links -->
          <div class="mt-6 text-center">
            <router-link
              to="/forgot-password"
              class="text-secondary hover:text-secondary-dark text-sm transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </router-link>
          </div>
        </div>

        <!-- Cuentas de prueba -->
        <div class="mt-6 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <p class="mb-2 text-center text-sm font-medium text-white">Cuentas de prueba:</p>
          <div class="space-y-1 text-xs text-white/80">
            <p><strong>Directora:</strong> 12345678 / 123456</p>
            <p><strong>Docente:</strong> 87654321 / 123456</p>
            <p><strong>Padre:</strong> 11223344 / 123456</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconLock, IconLogin, IconPlant2, IconUser } from '@tabler/icons-vue'
</script>

<style scoped>
.login-page {
  min-height: 100vh;
}
</style>
