<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'

defineProps<{ items: { q: string; a: string }[] }>()

const open = ref<number | null>(0)

function toggle(i: number) {
  open.value = open.value === i ? null : i
}
</script>

<template>
  <div class="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
    <div v-for="(item, i) in items" :key="item.q">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-brand-50/40"
        :aria-expanded="open === i"
        @click="toggle(i)"
      >
        <span class="font-display text-sm font-semibold text-ink-950">{{ item.q }}</span>
        <ChevronDown
          class="h-4 w-4 shrink-0 text-ink-400 transition"
          :class="open === i ? 'rotate-180' : ''"
        />
      </button>
      <div v-show="open === i" class="px-5 pb-4 text-sm leading-relaxed text-ink-500">
        {{ item.a }}
      </div>
    </div>
  </div>
</template>
