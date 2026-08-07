<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import { brand, products } from '@/content/site'
import { dsDeepLinks } from '@/content/digitalSchool'

const year = new Date().getFullYear()
const emailHref = `mailto:${brand.email}`
const phoneHref = `tel:${brand.phoneTel}`
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/5 bg-ink-950 text-ink-300">
    <div class="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" aria-hidden="true" />
    <div class="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
      <div class="md:col-span-1">
        <RouterLink to="/" class="inline-flex items-center gap-2.5">
          <BrandLogo :size="32" />
          <span class="font-display text-lg font-bold text-white">{{ brand.companyName }}</span>
        </RouterLink>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">{{ brand.tagline }}</p>
        <p class="mt-5 text-sm">
          <a :href="emailHref" class="text-brand-300 transition hover:text-cyan-300">{{ brand.email }}</a>
        </p>
        <p class="mt-1 text-sm">
          <a :href="phoneHref" class="transition hover:text-cyan-300">{{ brand.phone }}</a>
        </p>
      </div>

      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">Products</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="p in products" :key="p.slug">
            <RouterLink :to="p.href" class="transition hover:text-white">
              {{ p.name }}
              <span v-if="p.status !== 'live'" class="text-ink-600">· Soon</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">Digital School</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="m in dsDeepLinks.slice(0, 7)" :key="m.href">
            <RouterLink :to="m.href" class="transition hover:text-white">
              {{ m.title }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/products/digital-school/modules"
              class="font-medium text-brand-300 hover:text-cyan-300"
            >
              View all modules →
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">Company</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><RouterLink to="/solutions" class="transition hover:text-white">Solutions</RouterLink></li>
          <li><RouterLink to="/pricing" class="transition hover:text-white">Pricing</RouterLink></li>
          <li>
            <RouterLink to="/success-stories" class="transition hover:text-white">Success Stories</RouterLink>
          </li>
          <li><RouterLink to="/help" class="transition hover:text-white">Help &amp; Support</RouterLink></li>
          <li><RouterLink to="/privacy" class="transition hover:text-white">Privacy</RouterLink></li>
          <li><RouterLink to="/terms" class="transition hover:text-white">Terms</RouterLink></li>
        </ul>
        <RouterLink to="/request-demo" class="btn-primary mt-6">Request Free Demo</RouterLink>
      </div>
    </div>
    <div class="relative border-t border-white/5 py-4 text-center text-[11px] text-ink-500">
      © {{ year }} {{ brand.companyName }}. Multi-tenant school SaaS on Microsoft Azure.
    </div>
  </footer>
</template>
