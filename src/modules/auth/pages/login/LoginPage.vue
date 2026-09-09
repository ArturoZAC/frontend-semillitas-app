<script setup lang="ts">
// LoginPage - Página de inicio de sesión
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#B8D787] to-[#C08461] p-4">
    <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Semillitas</h1>
        <p class="mt-2 text-gray-500">Sistema de Gestión</p>
      </div>

      <form class="space-y-6">
        <div>
          <label for="username" class="mb-2 block text-sm font-medium text-gray-700">
            Usuario o DNI
          </label>
          <input
            id="username"
            type="text"
            placeholder="Ingrese su usuario o DNI"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <div>
          <label for="password" class="mb-2 block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-[#B8D787] focus:outline-none focus:ring-2 focus:ring-[#B8D787]"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-[#B8D787] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#a3c474]"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
</template>
