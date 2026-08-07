<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ArrowRight,
  Check,
  Cloud,
  Lock,
  MessageCircle,
  Smartphone,
  Sparkles,
  Wallet,
  GraduationCap,
  Users,
  ClipboardList,
  FileBadge,
  Shield,
  Building2,
} from '@lucide/vue'
import DemoForm from '@/components/forms/DemoForm.vue'
import HeroShowcase from '@/components/product/HeroShowcase.vue'
import { fetchTestimonials, type Testimonial } from '@/api/client'
import { brand, modules, solutions } from '@/content/site'

const testimonials = ref<Testimonial[]>([])

onMounted(async () => {
  try {
    testimonials.value = await fetchTestimonials()
  } catch {
    /* toast via interceptor */
  }
})

const iconMap: Record<string, unknown> = {
  admissions: GraduationCap,
  fees: Wallet,
  whatsapp: MessageCircle,
  students: Users,
  academics: ClipboardList,
  operations: ClipboardList,
  certificates: FileBadge,
  'parent-app': Smartphone,
  admin: Shield,
}

const steps = [
  { title: 'Share your school needs', body: 'Campuses, fee complexity, and parent app goals — we listen first.' },
  { title: 'Live product walkthrough', body: 'Admissions, ledgers, WhatsApp, and the Android parent experience.' },
  { title: 'Pilot on Azure', body: 'Tenant provisioned, CSV imported, office team trained.' },
  { title: 'Go live with confidence', body: 'Feature flags, roles, and audit trails for multi-school groups.' },
]

const bands = [
  {
    eyebrow: 'Admissions',
    title: 'Every lead, one pipeline',
    body: 'Walk-in, call, portal, WhatsApp, and Meta Lead Ads flow into inquiry → enroll — without spreadsheet chaos.',
    points: ['Meta Instant Forms → Admission Inquiry', 'Excel inquiry import', 'Admission fee separate from tuition'],
    icon: GraduationCap,
  },
  {
    eyebrow: 'Collections',
    title: 'Fees, gateways & AutoPay',
    body: 'Student ledger separates obligation from payment. Parents pay online; you monitor UPI e-mandates.',
    points: ['CCAvenue + Easebuzz', 'UPI AutoPay mandates', 'Immutable sequential PDF receipts'],
    icon: Wallet,
  },
  {
    eyebrow: 'Engagement',
    title: 'WhatsApp Business, built in',
    body: 'Template reminders with payment links, staff↔parent inbox, receipts inside the 24-hour window.',
    points: ['Arrear & AutoPay nudges', 'Delivery & read status', 'In-app chat inbox'],
    icon: MessageCircle,
  },
  {
    eyebrow: 'Parents',
    title: 'An app parents actually open',
    body: 'Multi-child switcher, attendance and homework on the dashboard, fees, gallery, leave, School Connect.',
    points: ['Android today · iOS soon', 'Online fees + AutoPay', 'Notices, exams, certificates'],
    icon: Smartphone,
  },
]
</script>

<template>
  <div v-reveal-group>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-surface-soft bg-mesh-hero">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent" />

      <div class="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:pb-16 lg:pt-16">
        <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div class="animate-fade-up">
            <p
              class="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold text-brand-700 shadow-soft backdrop-blur-md"
            >
              <Sparkles class="h-3.5 w-3.5" aria-hidden="true" />
              School ERP &amp; Parent Mobile App
            </p>

            <h1 class="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.35rem]">
              The operating system for
              <span
                class="bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent"
              >
                modern schools
              </span>
            </h1>

            <p class="mt-5 max-w-md text-base leading-relaxed text-ink-500 sm:text-[17px]">
              {{ brand.productName }} unifies admissions, fees, WhatsApp, academics, and parent engagement —
              multi-tenant SaaS on Microsoft Azure.
            </p>

            <ul class="mt-7 space-y-2.5">
              <li
                v-for="b in [
                  'One platform for office, teachers, and parents',
                  'WhatsApp reminders with payment links',
                  'CCAvenue, Easebuzz & UPI AutoPay',
                ]"
                :key="b"
                class="flex items-start gap-2.5 text-sm text-ink-700"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200/60"
                >
                  <Check class="h-3 w-3" stroke-width="3" />
                </span>
                {{ b }}
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a href="#demo" class="btn-primary">
                Request Free Demo
                <ArrowRight class="h-4 w-4" />
              </a>
              <RouterLink to="/products/digital-school" class="btn-secondary">Explore product</RouterLink>
            </div>

            <div class="mt-10 flex flex-wrap gap-6 border-t border-ink-100/80 pt-6 text-sm text-ink-400">
              <div>
                <p class="font-display text-base font-bold text-ink-950">Multi-tenant</p>
                <p>Schools &amp; groups</p>
              </div>
              <div>
                <p class="font-display text-base font-bold text-ink-950">Azure-native</p>
                <p>SWA · App Service · SQL</p>
              </div>
              <div>
                <p class="font-display text-base font-bold text-ink-950">No lock-in</p>
                <p>Your data, your exits</p>
              </div>
            </div>
          </div>

          <div class="animate-fade-up" style="animation-delay: 120ms">
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>

    <!-- Trust strip -->
    <section class="border-y border-ink-100/70 bg-white/60 py-8 backdrop-blur-sm">
      <div
        class="reveal mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between"
        data-reveal
      >
        <p class="text-center text-sm text-ink-400 md:text-left">
          Built for Indian schools · Powered by Azure · Ready for Product #2
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6 text-[12px] font-semibold tracking-wide text-ink-400">
          <span class="inline-flex items-center gap-1.5"><Cloud class="h-3.5 w-3.5" /> Azure</span>
          <span>SQL</span>
          <span>Static Web Apps</span>
          <span>Blob Storage</span>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="bg-surface-soft py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal max-w-2xl" data-reveal>
          <p class="section-label">Modules</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your school needs
          </h2>
          <p class="mt-3 text-ink-500">
            From inquiry to alumni — without bolting on five tools.
          </p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="(m, i) in modules"
            :key="m.slug"
            :to="m.href"
            class="reveal premium-card group p-5"
            :class="`reveal-delay-${(i % 4) + 1}`"
            data-reveal
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-100"
            >
              <component :is="iconMap[m.slug] || Sparkles" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-display text-[15px] font-semibold text-ink-950">{{ m.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ m.summary }}</p>
          </RouterLink>
        </div>

        <div class="reveal mt-10" data-reveal>
          <RouterLink to="/modules" class="btn-secondary">
            Explore all modules
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Feature bands -->
    <section class="bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
        <div
          v-for="(band, i) in bands"
          :key="band.title"
          class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          :class="i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''"
          data-reveal
        >
          <div>
            <p class="section-label">{{ band.eyebrow }}</p>
            <h2 class="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {{ band.title }}
            </h2>
            <p class="mt-3 max-w-md text-ink-500">{{ band.body }}</p>
            <ul class="mt-6 space-y-2.5">
              <li v-for="p in band.points" :key="p" class="flex gap-2 text-sm text-ink-700">
                <ArrowRight class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {{ p }}
              </li>
            </ul>
          </div>

          <div
            class="relative overflow-hidden rounded-3xl border border-ink-100/80 bg-gradient-to-br from-ink-950 via-[#12182c] to-brand-950 p-8 shadow-glow"
          >
            <div
              class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl"
            />
            <div
              class="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl"
            />
            <div
              class="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 ring-1 ring-white/10"
            >
              <component :is="band.icon" class="h-7 w-7" />
            </div>
            <p class="relative mt-6 font-display text-lg font-semibold text-white">
              {{ brand.productName }}
            </p>
            <p class="relative mt-2 max-w-xs text-sm text-ink-300">{{ band.title }}</p>
            <div class="relative mt-8 grid grid-cols-2 gap-2">
              <div
                v-for="n in 4"
                :key="n"
                class="h-16 rounded-xl border border-white/5 bg-white/[0.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="border-y border-ink-100/70 bg-surface-muted py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal" data-reveal>
          <p class="section-label">How it works</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
            From demo to day-one readiness
          </h2>
        </div>
        <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="(s, idx) in steps"
            :key="s.title"
            class="reveal relative"
            :class="`reveal-delay-${idx + 1}`"
            data-reveal
          >
            <span class="font-display text-4xl font-bold text-brand-200">0{{ idx + 1 }}</span>
            <h3 class="mt-3 font-display text-base font-semibold text-ink-950">{{ s.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ s.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Solutions -->
    <section class="bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal" data-reveal>
          <p class="section-label">Solutions</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">Built around school roles</h2>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="(s, i) in solutions"
            :key="s.slug"
            :to="`/solutions#${s.slug}`"
            class="reveal premium-card p-5"
            :class="`reveal-delay-${(i % 3) + 1}`"
            data-reveal
          >
            <div class="flex items-center gap-3">
              <Building2 class="h-5 w-5 text-brand-500" />
              <h3 class="font-display text-[15px] font-semibold">{{ s.title }}</h3>
            </div>
            <p class="mt-3 text-sm text-ink-500">{{ s.summary }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-surface-soft py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal" data-reveal>
          <p class="section-label">Wall of Love</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
            Trusted by schools that want clarity
          </h2>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="reveal flex flex-col rounded-2xl border border-ink-100/70 bg-white p-6 shadow-soft"
            :class="`reveal-delay-${(i % 3) + 1}`"
            data-reveal
          >
            <p class="text-sm tracking-wide text-warning" :aria-label="`${t.rating} out of 5 stars`">
              {{ '★'.repeat(t.rating) }}
            </p>
            <blockquote class="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
              “{{ t.quote }}”
            </blockquote>
            <div class="mt-6 flex items-center gap-3 border-t border-ink-50 pt-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-indigo-500 font-display text-sm font-bold text-white"
              >
                {{ t.name.charAt(0) }}
              </div>
              <div>
                <p class="text-sm font-semibold text-ink-950">{{ t.name }}</p>
                <p class="text-xs text-ink-400">{{ t.role }} · {{ t.organization }}</p>
              </div>
            </div>
          </article>
        </div>
        <div class="reveal mt-10" data-reveal>
          <RouterLink to="/success-stories" class="btn-secondary">More success stories</RouterLink>
        </div>
      </div>
    </section>

    <!-- Security dark band -->
    <section class="relative overflow-hidden bg-ink-950 py-20 text-white">
      <div class="pointer-events-none absolute inset-0 bg-mesh-dark" aria-hidden="true" />
      <div class="reveal relative mx-auto max-w-3xl px-4 text-center sm:px-6" data-reveal>
        <div
          class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-300 ring-1 ring-white/10"
        >
          <Lock class="h-5 w-5" />
        </div>
        <p class="section-label mt-6 !text-brand-300 before:!bg-brand-400/50">Security &amp; cloud</p>
        <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-white">
          Multi-tenant isolation on Microsoft Azure
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-300">
          Claim-based permissions, per-school feature flags, audit trails, and vendor admin —
          Static Web Apps, App Service API, Azure SQL, and Blob Storage.
        </p>
      </div>
    </section>

    <!-- Demo + CTA -->
    <section id="demo" class="scroll-mt-24 bg-white py-20 sm:py-24">
      <div class="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div class="reveal" data-reveal>
          <p class="section-label">Get started</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            See {{ brand.productName }} with your fee structure
          </h2>
          <p class="mt-4 max-w-md text-ink-500">
            Bring your Principal and accountant — we’ll walk through admissions, collections, and the
            parent app.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="`mailto:${brand.email}`" class="btn-secondary">Talk to Sales</a>
            <RouterLink to="/pricing" class="btn-ghost">Custom quote →</RouterLink>
          </div>
        </div>
        <div class="reveal reveal-delay-2" data-reveal>
          <DemoForm compact />
        </div>
      </div>
    </section>
  </div>
</template>
