<script setup lang="ts">
import { brand } from '@/content/site'
</script>

<template>
  <div class="bg-white">
    <article class="prose prose-slate mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 class="font-display text-4xl font-bold text-ink-950">Privacy Policy</h1>
      <p class="text-sm text-ink-400">Last updated: August 2026 · Placeholder — replace with legal review.</p>
      <p class="mt-6 text-ink-700">
        {{ brand.companyName }} (“we”) operates this marketing website and the {{ brand.productName }}
        product. This page explains how we handle information collected through demo and contact forms.
      </p>
      <h2 class="mt-8 font-display text-xl font-semibold">What we collect</h2>
      <p class="mt-2 text-ink-700">
        When you request a demo or contact us, we collect your name, email, phone, institute name, and any
        message you provide. Forms may use Cloudflare Turnstile or hCaptcha to reduce spam.
      </p>
      <h2 class="mt-8 font-display text-xl font-semibold">How we use it</h2>
      <p class="mt-2 text-ink-700">
        We use lead data to respond to your inquiry, schedule demos, and improve our services. We do not sell
        personal information.
      </p>
      <h2 class="mt-8 font-display text-xl font-semibold">Storage &amp; security</h2>
      <p class="mt-2 text-ink-700">
        Data is stored in Azure SQL (production) with access limited to authorized staff. Marketing assets may
        use Azure Blob Storage.
      </p>
      <h2 class="mt-8 font-display text-xl font-semibold">Contact</h2>
      <p class="mt-2 text-ink-700">
        Questions: <a :href="`mailto:${brand.email}`" class="text-brand-600">{{ brand.email }}</a>
      </p>
    </article>
  </div>
</template>
