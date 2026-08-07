<script setup lang="ts">
import { brand } from '@/content/site'
</script>

<template>
  <div class="bg-white">
    <article class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 class="font-display text-4xl font-bold">Terms of Use</h1>
      <p class="mt-2 text-sm text-ink-400">Last updated: August 2026 · Placeholder — replace with legal review.</p>
      <div class="mt-6 space-y-4 text-ink-700">
        <p>
          By using the {{ brand.companyName }} marketing website, you agree to these terms. Product
          subscriptions for {{ brand.productName }} are governed by a separate master service agreement.
        </p>
        <p>
          Content on this site is for informational purposes. Features listed for {{ brand.productName }}
          reflect the current product pillars; Coming Soon products are clearly marked and make no service
          claims.
        </p>
        <p>
          You may not misuse forms, attempt unauthorized access to APIs, or scrape content for competitive
          misuse.
        </p>
        <p>
          Contact: <a :href="`mailto:${brand.email}`" class="text-brand-600">{{ brand.email }}</a>
        </p>
      </div>
    </article>
  </div>
</template>
