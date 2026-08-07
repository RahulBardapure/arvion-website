<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, Search } from '@lucide/vue'
import { moduleIndex } from '@/content/digitalSchool'

const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return moduleIndex
  return moduleIndex.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      m.tags.some((t) => t.includes(q)),
  )
})
</script>

<template>
  <div class="bg-surface-soft">
    <section class="border-b border-ink-100 bg-white px-4 py-14 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <RouterLink
          to="/products/digital-school"
          class="inline-flex items-center gap-1.5 text-sm text-ink-500 transition hover:text-brand-700"
        >
          <ArrowLeft class="h-4 w-4" />
          Digital School
        </RouterLink>
        <h1 class="mt-4 font-display text-4xl font-bold tracking-tight">Module directory</h1>
        <p class="mt-3 max-w-2xl text-ink-500">
          Search every Digital School capability — then open the deep page or book a demo.
        </p>
        <label class="relative mt-8 block max-w-md">
          <Search class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
          <input
            v-model="query"
            type="search"
            class="input-field pl-10"
            placeholder="Search modules (fees, whatsapp, rte…)"
            aria-label="Search modules"
          />
        </label>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="m in filtered"
          :key="m.href"
          :to="m.href"
          class="premium-card block p-5"
        >
          <h2 class="font-display text-base font-semibold">{{ m.title }}</h2>
          <p class="mt-2 text-sm text-ink-500">{{ m.summary }}</p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="tag in m.tags"
              :key="tag"
              class="rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700"
            >
              {{ tag }}
            </span>
          </div>
        </RouterLink>
      </div>
      <p v-if="filtered.length === 0" class="py-16 text-center text-ink-400">No modules match that search.</p>
      <RouterLink to="/request-demo" class="btn-primary mt-10">Request Free Demo</RouterLink>
    </section>
  </div>
</template>
