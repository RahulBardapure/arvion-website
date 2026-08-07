<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppUtilityBar from '@/components/layout/AppUtilityBar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppToast from '@/components/ui/AppToast.vue'

const route = useRoute()
const hideChrome = computed(() => !!route.meta.hideChrome)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface-soft">
    <template v-if="!hideChrome">
      <AppUtilityBar />
      <AppNavbar />
    </template>
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-premium"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter v-if="!hideChrome" />
    <AppToast />
  </div>
</template>
