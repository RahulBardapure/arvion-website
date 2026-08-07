<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@lucide/vue'
import { products } from '@/content/site'
</script>

<template>
  <div class="bg-surface-soft">
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p class="section-label">Products</p>
      <h1 class="mt-3 font-display text-4xl font-bold tracking-tight">Software built for institutions</h1>
      <p class="mt-3 max-w-2xl text-ink-500">
        Start with Digital School today. Additional verticals follow the same multi-tenant pattern.
      </p>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="p in products"
          :id="p.slug"
          :key="p.slug"
          class="premium-card flex flex-col p-6"
        >
          <div class="flex items-center justify-between">
            <h2 class="font-display text-xl font-semibold">{{ p.name }}</h2>
            <span
              class="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              :class="
                p.status === 'live'
                  ? 'bg-success-soft text-success'
                  : 'bg-ink-50 text-ink-400'
              "
            >
              {{ p.status === 'live' ? 'Live' : 'Coming soon' }}
            </span>
          </div>
          <p class="mt-3 flex-1 text-sm text-ink-500">{{ p.blurb }}</p>
          <RouterLink
            v-if="p.status === 'live'"
            :to="p.href"
            class="btn-primary mt-6 self-start"
          >
            Explore product
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
          <p v-else class="mt-6 text-sm font-medium text-ink-300">Coming Soon</p>
        </article>
      </div>
    </section>
  </div>
</template>
