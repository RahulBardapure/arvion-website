<script setup lang="ts">
/** Desktop admin dashboard mock — Apple-style product frame */
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl border border-ink-100/80 bg-ink-950 shadow-glow"
    style="aspect-ratio: 16 / 10"
  >
    <!-- Title bar -->
    <div class="flex items-center gap-2 border-b border-white/5 bg-ink-900/90 px-3 py-2.5">
      <span class="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <div class="ml-3 h-5 flex-1 rounded-md bg-white/5" />
    </div>

    <div class="grid h-[calc(100%-2.25rem)] grid-cols-[72px_1fr]">
      <!-- Sidebar -->
      <aside class="flex flex-col gap-2 border-r border-white/5 bg-ink-900/60 p-2.5">
        <div class="mb-2 h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-500" />
        <div v-for="i in 6" :key="i" class="h-7 rounded-lg bg-white/[0.04]" :class="i === 2 ? 'bg-brand-500/30 ring-1 ring-brand-400/40' : ''" />
      </aside>

      <!-- Main -->
      <div class="flex flex-col gap-3 overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-[#0d1230] p-3 sm:p-4">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="h-2.5 w-24 rounded bg-white/20" />
            <div class="mt-1.5 h-2 w-36 rounded bg-white/10" />
          </div>
          <div class="h-7 w-20 rounded-lg bg-brand-500/40 ring-1 ring-brand-400/30" />
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div
            v-for="(c, i) in ['from-brand-500/25', 'from-cyan-400/20', 'from-indigo-500/25']"
            :key="i"
            class="rounded-xl border border-white/5 bg-gradient-to-br p-2.5 to-transparent"
            :class="c"
          >
            <div class="h-2 w-10 rounded bg-white/25" />
            <div class="mt-2 h-4 w-14 rounded bg-white/40" />
          </div>
        </div>

        <div class="min-h-0 flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <div class="mb-2 flex gap-2">
            <div class="h-2 w-16 rounded bg-white/20" />
            <div class="h-2 w-12 rounded bg-white/10" />
          </div>
          <div class="space-y-1.5">
            <div
              v-for="i in 5"
              :key="i"
              class="flex items-center gap-2 rounded-lg px-2 py-1.5"
              :class="i % 2 ? 'bg-white/[0.03]' : ''"
            >
              <div class="h-5 w-5 rounded-full bg-brand-400/30" />
              <div class="h-2 flex-1 rounded bg-white/15" />
              <div class="h-2 w-10 rounded bg-cyan-300/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
