<template>
  <div class="min-h-screen bg-white">
    <!-- ========== NAVBAR ========== -->
    <nav class="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <IconSeedling class="h-6 w-6 text-white" />
          </div>
          <label class="text-gray-900">Semillitas</label>
        </router-link>

        <!-- Botón Login / Dashboard -->
        <router-link
          v-if="authStore.isAuthenticated"
          to="/dashboard"
          class="bg-primary hover:bg-primary-dark flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-white transition-colors"
        >
          <IconLayoutDashboard class="h-5 w-5" />
          Mi Panel
        </router-link>
        <router-link
          v-else
          to="/login"
          class="bg-primary hover:bg-primary-dark flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-white transition-colors"
        >
          <IconLogin class="h-5 w-5" />
          Ingresar
        </router-link>
      </div>
    </nav>

    <!-- ========== HERO ========== -->
    <section class="hero-section relative flex min-h-screen items-center justify-center">
      <!-- Overlay degradado -->
      <div class="from-primary/70 to-secondary/30 absolute inset-0 bg-gradient-to-r via-black/50" />

      <!-- Contenido hero -->
      <div class="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <span
          class="h1-badge-primary bg-primary/20 text-primary mb-6 inline-block rounded-full px-5 py-2 backdrop-blur-sm"
        >
          Educación Inicial
        </span>

        <h1 class="display-white mb-6 text-white">Semillitas<br />del Saber</h1>

        <p class="lead-white mx-auto mb-10 max-w-2xl text-white/90">
          Plataforma de gestión escolar para nivel inicial. Controla matrículas, asistencia y
          evaluaciones de tus pequeños en un solo lugar.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <router-link
            to="/login"
            class="bg-primary hover:bg-primary-dark flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
          >
            <IconArrowRight class="h-5 w-5" />
            Comenzar ahora
          </router-link>
          <a
            href="#caracteristicas"
            class="flex items-center gap-2 rounded-2xl border-2 border-white/40 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>

    <!-- ========== CARACTERÍSTICAS ========== -->
    <section id="caracteristicas" class="bg-gray-50 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-14 text-center">
          <span
            class="h1-badge-primary bg-primary/20 text-primary mb-4 inline-block rounded-full px-5 py-2"
          >
            Nuestros módulos
          </span>
          <h2 class="h2-hero mb-4 text-gray-900">Todo lo que tu institución necesita</h2>
          <p class="lead2 text-gray-500">
            Herramientas simples para el día a día de docentes, directores y padres.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- Matrícula -->
          <div
            class="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
              <IconClipboardList class="text-primary h-8 w-8" />
            </div>
            <h3 class="h3-card mb-3 text-gray-900">Matrícula</h3>
            <p class="p text-gray-500">
              Registra a los nuevos alumnos, gestiona turnos y secciones, y consulta la información
              de cada niño desde un solo lugar.
            </p>
          </div>

          <!-- Asistencia -->
          <div
            class="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="bg-secondary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            >
              <IconCalendarCheck class="text-secondary h-8 w-8" />
            </div>
            <h3 class="h3-card mb-3 text-gray-900">Asistencia</h3>
            <p class="p text-gray-500">
              Marca la asistencia diaria de docentes y alumnos, y revisa el historial completo de
              puntualidad y faltas.
            </p>
          </div>

          <!-- Evaluaciones -->
          <div
            class="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="bg-tertiary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
              <IconFileSpreadsheet class="text-tertiary h-8 w-8" />
            </div>
            <h3 class="h3-card mb-3 text-gray-900">Evaluaciones</h3>
            <p class="p text-gray-500">
              Evalúa por competencias, sube tus archivos SIAGIE y genera reportes descargables en
              Excel sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CTA FINAL ========== -->
    <section class="from-primary to-primary-dark bg-gradient-to-r py-16">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="h2-hero-white mb-4 text-white">¿Listo para empezar?</h2>
        <p class="lead-white mx-auto mb-8 max-w-xl text-white/90">
          Únete a la comunidad Semillitas y simplifica la gestión de tu institución educativa.
        </p>
        <router-link
          to="/login"
          class="text-primary inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold shadow-xl transition-all hover:shadow-2xl"
        >
          <IconLogin class="h-5 w-5" />
          Iniciar sesión
        </router-link>
      </div>
    </section>

    <!-- ========== FOOTER ========== -->
    <footer class="bg-gray-900 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div class="flex items-center gap-2">
            <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
              <IconSeedling class="h-6 w-6 text-white" />
            </div>
            <label class="label-white font-semibold">Semillitas</label>
          </div>

          <p class="small-white text-white/60">
            © 2026 Semillitas del Saber. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  IconArrowRight,
  IconCalendarCheck,
  IconClipboardList,
  IconFileSpreadsheet,
  IconLayoutDashboard,
  IconLogin,
  IconSeedling,
} from '@tabler/icons-vue'

import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>

<style>
/* Fondo del hero - imagen local (sin scoped para aplicar a la sección) */
.hero-section {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
