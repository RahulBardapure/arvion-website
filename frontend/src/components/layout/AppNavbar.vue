<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronDown, Menu, X } from '@lucide/vue'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import { brand, products } from '@/content/site'
import { dsDeepLinks } from '@/content/digitalSchool'

const mobileOpen = ref(false)
const productsOpen = ref(false)
const scrolled = ref(false)

function closeAll() {
  mobileOpen.value = false
  productsOpen.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') closeAll()
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition duration-300 ease-premium"
    :class="
      scrolled
        ? 'border-b border-ink-100/70 bg-white/75 shadow-soft backdrop-blur-xl'
        : 'border-b border-transparent bg-surface-soft/60 backdrop-blur-md'
    "
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="group flex items-center gap-2.5" @click="closeAll">
        <BrandLogo :size="34" />
        <span
          class="font-display text-[17px] font-bold tracking-tight text-ink-950 transition group-hover:text-brand-700"
        >
          {{ brand.companyName }}
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
        <RouterLink
          to="/"
          class="rounded-lg px-3 py-2 text-[13px] font-medium text-ink-600 transition hover:bg-brand-50 hover:text-ink-950"
        >
          Home
        </RouterLink>

        <div class="relative" @mouseenter="productsOpen = true" @mouseleave="productsOpen = false">
          <button
            type="button"
            class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-ink-600 transition hover:bg-brand-50 hover:text-ink-950"
            :aria-expanded="productsOpen"
            @click="productsOpen = !productsOpen"
          >
            Products
            <ChevronDown
              class="h-3.5 w-3.5 transition duration-200"
              :class="productsOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </button>
          <Transition
            enter-active-class="transition duration-200 ease-premium"
            enter-from-class="opacity-0 translate-y-1 scale-[0.98]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-premium"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-show="productsOpen"
              class="absolute left-0 top-full z-50 mt-1 w-[22rem] overflow-hidden rounded-2xl border border-ink-100/80 bg-white/95 p-2 shadow-glow backdrop-blur-xl"
            >
              <RouterLink
                v-for="p in products"
                :key="p.slug"
                :to="p.href"
                class="block rounded-xl px-3.5 py-3 transition hover:bg-brand-50/80"
                @click="closeAll"
              >
                <div class="flex items-center justify-between gap-2">
                  <span class="text-sm font-semibold text-ink-950">{{ p.name }}</span>
                  <span
                    v-if="p.status === 'live'"
                    class="rounded-md bg-success-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success"
                  >
                    Live
                  </span>
                  <span
                    v-else
                    class="rounded-md bg-ink-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-400"
                  >
                    Soon
                  </span>
                </div>
                <p class="mt-1 text-xs leading-relaxed text-ink-400">{{ p.blurb }}</p>
              </RouterLink>

              <div class="mt-1 border-t border-ink-100 px-2 pb-1 pt-2">
                <p class="px-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-300">
                  Digital School
                </p>
                <div class="mt-1 grid grid-cols-2 gap-0.5">
                  <RouterLink
                    v-for="link in dsDeepLinks"
                    :key="link.href"
                    :to="link.href"
                    class="rounded-lg px-2 py-1.5 text-[11px] font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    @click="closeAll"
                  >
                    {{ link.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <RouterLink
          v-for="link in [
            { to: '/products/digital-school/modules', label: 'Modules' },
            { to: '/solutions', label: 'Solutions' },
            { to: '/success-stories', label: 'Success Stories' },
            { to: '/help', label: 'Help' },
          ]"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-[13px] font-medium text-ink-600 transition hover:bg-brand-50 hover:text-ink-950"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <RouterLink to="/request-demo" class="btn-primary hidden sm:inline-flex" @click="closeAll">
          Request Free Demo
        </RouterLink>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 bg-white/80 text-ink-800 lg:hidden"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <Menu v-if="!mobileOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-premium"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="mobileOpen" class="border-t border-ink-100 bg-white/95 backdrop-blur-xl lg:hidden">
        <nav class="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-3" aria-label="Mobile">
          <RouterLink to="/" class="rounded-lg px-3 py-2.5 text-sm font-medium" @click="closeAll">
            Home
          </RouterLink>
          <p class="px-3 pt-2 text-[10px] font-semibold uppercase tracking-wider text-ink-300">
            Products
          </p>
          <RouterLink
            v-for="p in products"
            :key="p.slug"
            :to="p.href"
            class="rounded-lg px-3 py-2 text-sm"
            @click="closeAll"
          >
            {{ p.name }}
            <span v-if="p.status !== 'live'" class="text-ink-300">(Soon)</span>
          </RouterLink>
          <RouterLink to="/products/digital-school/modules" class="rounded-lg px-3 py-2.5 text-sm font-medium" @click="closeAll">
            Modules
          </RouterLink>
          <RouterLink to="/solutions" class="rounded-lg px-3 py-2.5 text-sm font-medium" @click="closeAll">
            Solutions
          </RouterLink>
          <RouterLink
            to="/success-stories"
            class="rounded-lg px-3 py-2.5 text-sm font-medium"
            @click="closeAll"
          >
            Success Stories
          </RouterLink>
          <RouterLink to="/help" class="rounded-lg px-3 py-2.5 text-sm font-medium" @click="closeAll">
            Help &amp; Support
          </RouterLink>
          <RouterLink to="/request-demo" class="btn-primary mt-2" @click="closeAll">
            Request Free Demo
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
