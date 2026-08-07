<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { brand } from '@/content/site'

const emailHref = `mailto:${brand.email}`
</script>

<template>
  <div class="bg-white">
    <section class="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p class="section-label">Pricing</p>
      <h1 class="mt-2 text-4xl font-bold">Custom quote for your school</h1>
      <p class="mt-4 text-ink-500">
        Pricing depends on campuses, student count, modules (WhatsApp, gateways, AutoPay), and
        onboarding scope. We don’t publish fake list prices — talk to sales for a clear proposal.
      </p>
      <div class="mt-10 rounded-2xl border border-ink-100 bg-surface-muted p-8 text-left">
        <h2 class="font-display text-lg font-semibold">What’s typically included</h2>
        <ul class="mt-4 space-y-2 text-sm text-ink-700">
          <li>• Multi-tenant {{ brand.productName }} tenant on Azure</li>
          <li>• Web admin/staff + Android parent app</li>
          <li>• Selected modules via feature flags</li>
          <li>• CSV/Excel onboarding support</li>
        </ul>
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink to="/request-demo" class="btn-primary">Request Free Demo</RouterLink>
        <a :href="emailHref" class="btn-secondary">Talk to Sales</a>
      </div>
    </section>
  </div>
</template>
