<script setup lang="ts">
import { Phone, Mail } from '@lucide/vue'
import { brand } from '@/content/site'

const phoneHref = `tel:${brand.phoneTel}`
const emailHref = `mailto:${brand.email}`
const playStore = brand.playStoreUrl || null
</script>

<template>
  <div class="border-b border-white/5 bg-ink-950 text-[12px] text-ink-300">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
        <a :href="phoneHref" class="inline-flex items-center gap-1.5 transition hover:text-cyan-300">
          <Phone class="h-3 w-3 opacity-70" aria-hidden="true" />
          {{ brand.phone }}
        </a>
        <a :href="emailHref" class="inline-flex items-center gap-1.5 transition hover:text-cyan-300">
          <Mail class="h-3 w-3 opacity-70" aria-hidden="true" />
          {{ brand.email }}
        </a>
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
        <a
          v-if="playStore"
          :href="playStore"
          target="_blank"
          rel="noopener noreferrer"
          class="transition hover:text-cyan-300"
        >
          Download Android App
        </a>
        <span v-else class="text-ink-500">Android App — Coming soon</span>
        <span class="text-ink-600">iOS — Coming soon</span>
        <RouterLink to="/help" class="transition hover:text-cyan-300">Support</RouterLink>
        <a
          :href="brand.signInUrl"
          class="font-semibold text-brand-300 transition hover:text-brand-200"
        >
          Sign In
        </a>
      </div>
    </div>
  </div>
</template>
