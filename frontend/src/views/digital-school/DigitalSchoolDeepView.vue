<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import DeepPageShell from '@/components/digital-school/DeepPageShell.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { deepPages } from '@/content/digitalSchool'

const route = useRoute()
const page = computed(() => {
  const slug = route.params.slug as string
  return deepPages[slug] ?? null
})

watchEffect(() => {
  if (page.value) {
    document.title = `${page.value.title} — Digital School · Arvion`
  }
})
</script>

<template>
  <DeepPageShell v-if="page" :page="page" />
  <NotFoundView v-else />
</template>
