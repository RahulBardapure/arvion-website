<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowLeft, ArrowRight, Shield } from '@lucide/vue'
import MarketingImage from './MarketingImage.vue'
import FeatureChecklist from './FeatureChecklist.vue'
import FaqAccordion from './FaqAccordion.vue'
import DemoForm from '@/components/forms/DemoForm.vue'
import { brand } from '@/content/site'
import type { DeepPageContent } from '@/content/digitalSchool'

defineProps<{ page: DeepPageContent }>()
</script>

<template>
  <div class="bg-surface-soft">
    <section class="relative overflow-hidden bg-ink-950 px-4 py-16 text-white sm:px-6 sm:py-20">
      <div class="pointer-events-none absolute inset-0 bg-mesh-dark" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl">
        <RouterLink
          to="/products/digital-school"
          class="inline-flex items-center gap-1.5 text-sm text-ink-300 transition hover:text-white"
        >
          <ArrowLeft class="h-4 w-4" />
          Digital School
        </RouterLink>
        <p class="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">
          {{ page.eyebrow }}
        </p>
        <h1 class="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {{ page.headline }}
        </h1>
        <p class="mt-4 max-w-2xl text-base text-ink-300 sm:text-lg">{{ page.sub }}</p>
        <p
          v-if="page.slug === 'academics' || page.slug === 'attendance'"
          class="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cyan-200"
        >
          <Shield class="h-3.5 w-3.5" />
          Staff / claim-gated web screens — not the parent app
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/request-demo" class="btn-primary">
            Request Free Demo
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
          <a
            v-if="page.slug === 'parent-app' && brand.playStoreUrl"
            :href="brand.playStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary !border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
          >
            Download Android App
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-8 px-4 py-14 sm:px-6">
      <div
        class="grid gap-6"
        :class="page.images.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl'"
      >
        <MarketingImage
          v-for="img in page.images"
          :key="img.src"
          :src="img.src"
          :alt="img.caption"
          :caption="img.caption"
        />
      </div>

      <div v-if="page.galleries?.length" class="space-y-16 pt-4">
        <div v-for="gallery in page.galleries" :key="gallery.title">
          <div class="max-w-2xl">
            <h2 class="font-display text-2xl font-bold tracking-tight">{{ gallery.title }}</h2>
            <p v-if="gallery.note" class="mt-2 text-sm text-ink-500">{{ gallery.note }}</p>
          </div>
          <div class="mt-6 grid gap-5 sm:grid-cols-2">
            <MarketingImage
              v-for="img in gallery.images"
              :key="img.src"
              :src="img.src"
              :alt="img.caption"
              :caption="img.caption"
            />
          </div>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 class="font-display text-2xl font-bold tracking-tight">What’s included</h2>
          <div class="mt-6">
            <FeatureChecklist :items="page.checklist" />
          </div>
        </div>
        <div>
          <h2 class="font-display text-2xl font-bold tracking-tight">Quick answers</h2>
          <div class="mt-6">
            <FaqAccordion :items="page.faq" />
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-ink-100 bg-white py-16">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 class="font-display text-2xl font-bold">See {{ page.title }} in a live demo</h2>
          <p class="mt-3 text-ink-500">
            We’ll walk this module with your Principal and teachers — claim roles, attendance lock, and parent app views.
          </p>
        </div>
        <DemoForm />
      </div>
    </section>
  </div>
</template>
