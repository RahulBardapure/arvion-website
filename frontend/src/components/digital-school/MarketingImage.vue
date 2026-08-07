<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  caption?: string
  aspect?: string
}>()

const broken = ref(false)
</script>

<template>
  <figure class="w-full">
    <div
      class="relative overflow-hidden rounded-2xl border border-ink-100/80 bg-ink-950 shadow-glow"
      :style="props.aspect ? { aspectRatio: props.aspect } : undefined"
    >
      <img
        v-show="!broken"
        :src="src"
        :alt="alt"
        class="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
        @error="broken = true"
      />
      <div
        v-if="broken"
        class="flex min-h-[220px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-900 to-brand-950 p-8 text-center"
      >
        <p class="font-display text-sm font-semibold text-white">{{ alt }}</p>
        <p class="text-xs text-ink-300">Drop image at {{ src }}</p>
      </div>
    </div>
    <figcaption v-if="caption" class="mt-3 text-center text-xs text-ink-400 sm:text-sm">
      {{ caption }}
    </figcaption>
  </figure>
</template>
