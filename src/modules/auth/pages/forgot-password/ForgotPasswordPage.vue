<script setup lang="ts">
// ForgotPasswordPage - Página de recuperación de contraseña
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#B8D787] to-[#C08461] p-4">
    <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Semillitas</h1>
        <p class="mt-2 text-gray-500">Recuperar Contraseña</p>
      </div>

      <form class="space-y-6">
        <div>
          <label for="email" class="mb-2 block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su correo"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-[#B8D787] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
        >
          Enviar enlace
        </button>

        <p class="text-center text-sm text-gray-500">
          <router-link to="/login" class="text-[#C08461] hover:underline">
            Volver al login
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>
