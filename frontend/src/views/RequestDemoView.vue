<script setup lang="ts">
import DemoForm from '@/components/forms/DemoForm.vue'
import { brand } from '@/content/site'
</script>

<template>
  <div class="bg-surface-muted">
    <section class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
      <div>
        <p class="section-label">Free demo</p>
        <h1 class="mt-2 text-4xl font-bold">See {{ brand.productName }} with your school in mind</h1>
        <p class="mt-4 text-ink-500">
          A focused walkthrough of admissions, fees &amp; AutoPay, WhatsApp, and the parent Android app —
          tailored to your academic year and fee heads.
        </p>
        <ul class="mt-6 space-y-2 text-sm text-ink-700">
          <li>✓ 45–60 minute live session</li>
          <li>✓ Optional deep-dive for accountants</li>
          <li>✓ No obligation · Custom quote after demo</li>
        </ul>
      </div>
      <DemoForm />
    </section>
  </div>
</template>
