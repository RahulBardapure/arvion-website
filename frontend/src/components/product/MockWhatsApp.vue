<script setup lang="ts">
/** WhatsApp-style chat card for product showcase */
</script>

<template>
  <div class="w-[220px] overflow-hidden rounded-2xl border border-ink-100/60 bg-white shadow-card sm:w-[240px]">
    <div class="flex items-center gap-2 bg-[#075E54] px-3 py-2.5 text-white">
      <div class="h-7 w-7 rounded-full bg-white/20" />
      <div>
        <p class="text-[11px] font-semibold leading-none">Digital School</p>
        <p class="mt-0.5 text-[9px] text-white/70">Fee reminder</p>
      </div>
    </div>
    <div class="space-y-2 bg-[#ECE5DD] p-3">
      <div class="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2.5 py-2 shadow-sm">
        <p class="text-[10px] leading-snug text-ink-700">
          Reminder: Fee installment due for Class 7-A. Pay securely online.
        </p>
        <div class="mt-1.5 inline-flex rounded-md bg-brand-50 px-2 py-1 text-[9px] font-semibold text-brand-700">
          Pay now →
        </div>
        <p class="mt-1 text-right text-[8px] text-ink-300">10:42 ✓✓</p>
      </div>
      <div class="ml-auto max-w-[75%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-2.5 py-2 shadow-sm">
        <p class="text-[10px] text-ink-700">Paid. Receipt received.</p>
        <p class="mt-1 text-right text-[8px] text-ink-300">10:45 ✓✓</p>
      </div>
    </div>
  </div>
</template>
