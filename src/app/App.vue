<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue'
import DashboardLayout from '@/shared/layouts/DashboardLayout.vue'

const route = useRoute()

const layouts: Record<string, Component> = {
  app: AppLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
}

const currentLayout = computed(() => {
  const layoutName = (route.meta?.layout as string) || 'app'
  return layouts[layoutName] || AppLayout
})
</script>
