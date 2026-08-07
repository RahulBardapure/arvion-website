<script setup lang="ts">
import { Check } from '@lucide/vue'

defineProps<{ items: string[] }>()
</script>

<template>
  <ul class="space-y-2.5">
    <li v-for="item in items" :key="item" class="flex gap-2.5 text-sm text-ink-700">
      <span
        class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100"
      >
        <Check class="h-3 w-3" stroke-width="3" />
      </span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
