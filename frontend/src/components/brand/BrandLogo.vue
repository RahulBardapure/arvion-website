<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    alt?: string
    /** Solid purple badge mark */
    badge?: boolean
  }>(),
  {
    size: 36,
    alt: 'Arvion',
    badge: false,
  },
)
</script>

<template>
  <!-- PNG matches the polished homepage mark; badge SVG for dark/busy backgrounds -->
  <img
    :src="badge ? '/brand/arvion-icon-badge.svg' : '/brand/arvion-logo.png'"
    :alt="alt"
    :width="size"
    :height="size"
    class="shrink-0 select-none object-contain"
    decoding="async"
  />
</template>
