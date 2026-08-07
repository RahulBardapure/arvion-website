<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { X } from '@lucide/vue'
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()
const { items } = storeToRefs(toast)
</script>

<template>
  <div
    class="pointer-events-none fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-2 px-4 sm:px-0"
    aria-live="polite"
  >
    <TransitionGroup
      enter-active-class="transition duration-200 ease-premium"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 translate-x-2"
    >
      <div
        v-for="t in items"
        :key="t.id"
        class="pointer-events-auto rounded-xl border px-4 py-3 text-sm shadow-glow backdrop-blur-md"
        :class="{
          'border-emerald-200/80 bg-success-soft/95 text-success': t.kind === 'success',
          'border-rose-200/80 bg-danger-soft/95 text-danger': t.kind === 'error',
          'border-ink-100 bg-white/95 text-ink-900': t.kind === 'info',
        }"
      >
        <div class="flex items-start justify-between gap-3">
          <p>{{ t.message }}</p>
          <button
            type="button"
            class="shrink-0 rounded-md p-0.5 opacity-50 transition hover:opacity-100"
            :aria-label="'Dismiss'"
            @click="toast.dismiss(t.id)"
          >
            <X class="h-4 w-4" />
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
