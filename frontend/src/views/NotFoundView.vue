<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-lg px-4 py-24 text-center">
    <p class="font-display text-6xl font-bold text-brand-400">404</p>
    <h1 class="mt-4 text-2xl font-bold">Page not found</h1>
    <p class="mt-2 text-ink-500">That URL isn’t part of the Arvion marketing site.</p>
    <RouterLink to="/" class="btn-primary mt-8 inline-flex">Back home</RouterLink>
  </div>
</template>
