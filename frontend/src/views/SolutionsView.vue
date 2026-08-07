<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { solutions } from '@/content/site'

const extras: Record<string, string[]> = {
  principals: ['Campus-wide visibility', 'Admissions pipeline health', 'Collections vs arrears'],
  accountants: ['Fee structures & categories', 'Gateway activity & corrections', 'Audit-ready receipts'],
  teachers: ['Attendance & diary', 'Marks entry', 'Leave & certificates'],
  parents: ['Multi-child Android app', 'Online fees & AutoPay', 'Homework & notices'],
  'multi-campus': ['Vendor provisioning', 'Per-school feature flags', 'Tenant isolation'],
}
</script>

<template>
  <div class="bg-white">
    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p class="section-label">Solutions</p>
      <h1 class="mt-2 text-4xl font-bold">One platform, many roles</h1>
      <p class="mt-3 max-w-2xl text-ink-500">
        Digital School is designed around how Indian schools actually work — not generic CRM jargon.
      </p>
      <div class="mt-12 space-y-8">
        <article
          v-for="s in solutions"
          :id="s.slug"
          :key="s.slug"
          class="scroll-mt-28 rounded-2xl border border-ink-100 bg-surface-muted p-6 sm:p-8"
        >
          <h2 class="font-display text-2xl font-semibold">{{ s.title }}</h2>
          <p class="mt-2 text-ink-500">{{ s.summary }}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="e in extras[s.slug] || []"
              :key="e"
              class="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-100"
            >
              {{ e }}
            </li>
          </ul>
        </article>
      </div>
      <RouterLink to="/request-demo" class="btn-primary mt-10 inline-flex">Request Free Demo</RouterLink>
    </section>
  </div>
</template>
