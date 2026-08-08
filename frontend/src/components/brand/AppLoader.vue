<script setup lang="ts">
/**
 * Centered Arvion mark + thin spinning ring (splash / route loading).
 */
withDefaults(
  defineProps<{
    /** Logo size in px */
    size?: number
    /** Full-viewport overlay */
    fullscreen?: boolean
    label?: string
  }>(),
  {
    size: 56,
    fullscreen: true,
    label: 'Loading Arvion',
  },
)
</script>

<template>
  <div
    class="arvion-loader"
    :class="fullscreen ? 'arvion-loader--fullscreen' : 'arvion-loader--inline'"
    role="status"
    :aria-label="label"
  >
    <div class="arvion-loader__mark" :style="{ width: `${size + 36}px`, height: `${size + 36}px` }">
      <svg class="arvion-loader__ring" viewBox="0 0 80 80" aria-hidden="true">
        <circle class="arvion-loader__track" cx="40" cy="40" r="36" fill="none" />
        <circle class="arvion-loader__arc" cx="40" cy="40" r="36" fill="none" />
      </svg>
      <img
        src="/brand/arvion-logo.png"
        alt=""
        class="arvion-loader__logo"
        :width="size"
        :height="size"
        decoding="async"
      />
    </div>
  </div>
</template>
