<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { fetchTestimonials, type Testimonial } from '@/api/client'

const testimonials = ref<Testimonial[]>([])

onMounted(async () => {
  try {
    testimonials.value = await fetchTestimonials()
  } catch {
    /* toast via interceptor */
  }
})
</script>

<template>
  <div class="bg-white">
    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p class="section-label">Success stories</p>
      <h1 class="mt-2 text-4xl font-bold">Schools choosing clarity over spreadsheets</h1>
      <p class="mt-3 max-w-2xl text-ink-500">
        Placeholder testimonials for launch. Case studies will replace these once we publish customer stories.
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <article
          v-for="t in testimonials"
          :key="t.id"
          class="rounded-xl border border-ink-100 bg-surface-muted p-6"
        >
          <p class="text-warning">{{ '★'.repeat(t.rating) }}</p>
          <blockquote class="mt-3 text-ink-700">“{{ t.quote }}”</blockquote>
          <p class="mt-4 text-sm font-semibold">{{ t.name }}</p>
          <p class="text-xs text-ink-400">{{ t.role }} · {{ t.organization }}</p>
        </article>
      </div>
      <RouterLink to="/request-demo" class="btn-primary mt-10 inline-flex">Request Free Demo</RouterLink>
    </section>
  </div>
</template>
