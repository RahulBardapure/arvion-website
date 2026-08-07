<script setup lang="ts">
import MockDesktop from './MockDesktop.vue'
import MockPhone from './MockPhone.vue'
import MockWhatsApp from './MockWhatsApp.vue'
</script>

<template>
  <div class="relative mx-auto h-[380px] w-full max-w-xl sm:h-[440px] lg:h-[480px]">
    <!-- Ambient glow -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 rounded-full bg-mesh-hero opacity-90 blur-2xl"
      aria-hidden="true"
    />

    <!-- Desktop (anchor) -->
    <div class="absolute left-[4%] top-[8%] w-[78%] animate-fade-up sm:left-[2%] sm:w-[72%]">
      <div class="transition duration-500 ease-premium hover:-translate-y-1 hover:scale-[1.01]">
        <MockDesktop />
      </div>
    </div>

    <!-- Parent phone -->
    <div
      class="absolute bottom-[2%] right-[2%] z-20 animate-float sm:right-[4%]"
      style="animation-delay: 0.4s"
    >
      <div class="transition duration-500 ease-premium hover:-translate-y-1">
        <MockPhone variant="dashboard" />
      </div>
    </div>

    <!-- WhatsApp card -->
    <div
      class="absolute bottom-[18%] left-[-2%] z-10 hidden animate-float-slow sm:block"
      style="animation-delay: 1.2s"
    >
      <div class="origin-bottom-left scale-90 transition duration-500 ease-premium hover:scale-95 lg:scale-100">
        <MockWhatsApp />
      </div>
    </div>

    <!-- Floating glass badges -->
    <div
      class="absolute right-[8%] top-[2%] z-30 hidden animate-fade-up rounded-full glass-panel px-3 py-1.5 text-[11px] font-semibold text-ink-700 sm:block"
      style="animation-delay: 0.35s"
    >
      AutoPay · UPI
    </div>
    <div
      class="absolute left-[12%] top-[52%] z-30 hidden animate-fade-up rounded-full glass-panel px-3 py-1.5 text-[11px] font-semibold text-ink-700 md:block"
      style="animation-delay: 0.55s"
    >
      Attendance locked
    </div>
  </div>
</template>
