<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    alt?: string
  }>(),
  {
    size: 36,
    alt: 'Arvion',
  },
)
</script>

<template>
  <img
    src="/brand/arvion-logo.png"
    :alt="alt"
    :width="size"
    :height="size"
    class="shrink-0 select-none object-contain"
    decoding="async"
  />
</template>
