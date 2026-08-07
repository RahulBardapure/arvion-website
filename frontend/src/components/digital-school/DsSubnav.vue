<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { dsSubnav } from '@/content/digitalSchool'

const route = useRoute()
const active = ref('overview')

const sectionIds = dsSubnav.map((s) => s.id)

function syncFromHash() {
  const hash = route.hash.replace('#', '')
  if (hash && sectionIds.includes(hash as (typeof sectionIds)[number])) {
    active.value = hash
  }
}

function onScroll() {
  if (route.path !== '/products/digital-school') return
  const offset = 120
  let current = sectionIds[0]
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= offset) current = id
  }
  active.value = current
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
watch(() => route.hash, syncFromHash)
</script>

<template>
  <nav
    class="sticky top-[57px] z-40 border-b border-ink-100/80 bg-white/85 backdrop-blur-xl"
    aria-label="Digital School sections"
  >
    <div
      class="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <a
        v-for="item in dsSubnav"
        :key="item.id"
        :href="item.href"
        class="shrink-0 rounded-full px-3 py-1.5 text-[12px] font-semibold transition duration-200"
        :class="
          active === item.id
            ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-200'
            : 'text-ink-500 hover:bg-ink-50 hover:text-ink-800'
        "
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>
