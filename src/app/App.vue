<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
// App.vue - Componente raíz
// El layout se determina por el meta.layout en cada ruta del router
import type { Component } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const route = useRoute()

// Mapping de layouts
const layouts: Record<string, Component> = {
  app: AppLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
}

// Obtener el layout actual basado en el meta de la ruta
const currentLayout = computed(() => {
  const layoutName = (route.meta?.layout as string) || 'app'
  return layouts[layoutName] || AppLayout
})
</script>
