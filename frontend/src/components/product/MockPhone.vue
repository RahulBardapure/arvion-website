<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'dashboard' | 'fees' | 'attendance'
  }>(),
  { variant: 'dashboard' },
)
</script>

<template>
  <div
    class="relative mx-auto w-[148px] overflow-hidden rounded-[1.65rem] border-[5px] border-ink-900 bg-ink-950 shadow-glow sm:w-[168px]"
    style="aspect-ratio: 9 / 19.2"
  >
    <!-- Notch -->
    <div class="absolute left-1/2 top-1.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-ink-900" />

    <div class="flex h-full flex-col bg-gradient-to-b from-[#12182c] via-ink-950 to-[#0a0e1c] pt-7">
      <div class="px-3">
        <div class="flex items-center justify-between">
          <div class="h-2 w-14 rounded bg-white/30" />
          <div class="h-5 w-5 rounded-full bg-brand-500/50" />
        </div>
        <p class="mt-3 font-display text-[10px] font-semibold text-white/90">
          {{ variant === 'fees' ? 'Fee dues' : variant === 'attendance' ? 'Attendance' : 'Home' }}
        </p>
      </div>

      <!-- Fee strip -->
      <div
        v-if="variant !== 'attendance'"
        class="mx-3 mt-2 rounded-xl border border-brand-400/20 bg-gradient-to-r from-brand-600/40 to-indigo-600/30 p-2"
      >
        <div class="h-1.5 w-12 rounded bg-white/30" />
        <div class="mt-1.5 h-3 w-20 rounded bg-white/50" />
        <div class="mt-2 h-5 rounded-md bg-cyan-300/40" />
      </div>

      <div class="mt-3 grid grid-cols-2 gap-1.5 px-3">
        <div
          v-for="i in 4"
          :key="i"
          class="rounded-xl border border-white/5 bg-white/[0.04] p-2"
        >
          <div class="h-4 w-4 rounded-md bg-brand-400/40" />
          <div class="mt-2 h-1.5 w-full rounded bg-white/20" />
        </div>
      </div>

      <div class="mt-auto border-t border-white/5 px-4 py-2.5">
        <div class="mx-auto flex h-1 w-16 justify-center rounded-full bg-white/25" />
      </div>
    </div>
  </div>
</template>
