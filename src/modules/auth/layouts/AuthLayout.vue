<template>
  <!-- Si ya está autenticado, redirigir a home -->
  <div
    v-if="authStore.isAuthenticated"
    class="flex min-h-screen items-center justify-center bg-gray-50"
  >
    <div class="text-center">
      <div
        class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#B8D787] border-t-transparent"
      />
      <p class="text-gray-500">Ya has iniciado sesión. Redirigiendo...</p>
    </div>
  </div>

  <!-- Login/Forgot Password -->
  <div v-else class="min-h-screen">
    <slot />
  </div>
</template>

<script setup lang="ts">
// AuthLayout - Layout para páginas de autenticación
// Si el usuario ya está logueado, redirige al home
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.store'

const router = useRouter()
const authStore = useAuthStore()

// Restaurar sesión y verificar
onMounted(() => {
  authStore.restoreSession()

  // Si ya está autenticado, redirigir al dashboard
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>
