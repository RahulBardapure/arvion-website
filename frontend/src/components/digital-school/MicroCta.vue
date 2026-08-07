<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@lucide/vue'

withDefaults(
  defineProps<{
    label?: string
  }>(),
  { label: 'Book a free demo' },
)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 px-4 py-3 sm:px-5">
    <p class="text-sm font-medium text-ink-700">Ready to see this in your school?</p>
    <RouterLink to="/request-demo" class="btn-primary !py-2 text-xs sm:ml-auto">
      {{ label }}
      <ArrowRight class="h-3.5 w-3.5" />
    </RouterLink>
  </div>
</template>
