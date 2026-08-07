<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { deleteAdminLead, fetchAdminLeads, type DemoLead } from '@/api/client'
import { useAdminAuthStore } from '@/stores/adminAuth'
import { useToastStore } from '@/stores/toast'

const router = useRouter()
const auth = useAdminAuthStore()
const toast = useToastStore()

const leads = ref<DemoLead[]>([])
const loading = ref(true)
const deletingId = ref<string | null>(null)

async function load() {
  loading.value = true
  try {
    leads.value = await fetchAdminLeads()
  } catch {
    auth.logout()
    await router.replace('/admin')
  } finally {
    loading.value = false
  }
}

async function onDelete(lead: DemoLead) {
  const ok = window.confirm(`Delete demo request from ${lead.fullName} (${lead.instituteName})?`)
  if (!ok) return

  deletingId.value = lead.id
  try {
    await deleteAdminLead(lead.id)
    leads.value = leads.value.filter((l) => l.id !== lead.id)
    toast.success('Deleted')
  } catch {
    // toast from interceptor
  } finally {
    deletingId.value = null
  }
}

function logout() {
  auth.logout()
  router.replace('/admin')
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

onMounted(load)
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="section-label">Admin</p>
        <h1 class="mt-2 font-display text-3xl font-bold text-ink-950">Demo requests</h1>
        <p class="mt-1 text-sm text-ink-500">
          Signed in as {{ auth.email }} · {{ leads.length }} shown (latest 200)
        </p>
      </div>
      <div class="flex gap-2">
        <button type="button" class="btn-secondary" :disabled="loading" @click="load">Refresh</button>
        <button type="button" class="btn-ghost" @click="logout">Sign out</button>
      </div>
    </div>

    <div v-if="loading" class="mt-10 text-sm text-ink-500">Loading…</div>

    <div
      v-else-if="!leads.length"
      class="mt-10 rounded-2xl border border-dashed border-ink-100 bg-white px-6 py-16 text-center text-ink-500"
    >
      No demo requests yet.
    </div>

    <div v-else class="mt-8 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-soft">
      <table class="min-w-full text-left text-sm">
        <thead class="border-b border-ink-100 bg-surface-muted/80 text-xs uppercase tracking-wide text-ink-500">
          <tr>
            <th class="px-4 py-3 font-semibold">When</th>
            <th class="px-4 py-3 font-semibold">Name / Institute</th>
            <th class="px-4 py-3 font-semibold">Contact</th>
            <th class="px-4 py-3 font-semibold">Product</th>
            <th class="px-4 py-3 font-semibold">Message</th>
            <th class="px-4 py-3 font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="lead in leads"
            :key="lead.id"
            class="border-b border-ink-50 align-top last:border-0 hover:bg-surface-muted/40"
          >
            <td class="whitespace-nowrap px-4 py-3 text-ink-500">{{ formatDate(lead.createdAt) }}</td>
            <td class="px-4 py-3">
              <div class="font-semibold text-ink-950">{{ lead.fullName }}</div>
              <div class="text-ink-600">{{ lead.instituteName }}</div>
              <div class="mt-0.5 text-xs text-ink-400">{{ lead.status }}</div>
            </td>
            <td class="px-4 py-3">
              <div>{{ lead.email }}</div>
              <div class="text-ink-500">{{ lead.countryCode }} {{ lead.phone }}</div>
            </td>
            <td class="px-4 py-3 text-ink-700">{{ lead.productInterest }}</td>
            <td class="max-w-xs px-4 py-3 text-ink-600">
              <span class="line-clamp-3">{{ lead.message || '—' }}</span>
              <div v-if="lead.sourcePage" class="mt-1 text-xs text-ink-400">{{ lead.sourcePage }}</div>
            </td>
            <td class="px-4 py-3 text-right">
              <button
                type="button"
                class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:opacity-50"
                :disabled="deletingId === lead.id"
                @click="onDelete(lead)"
              >
                {{ deletingId === lead.id ? 'Deleting…' : 'Delete' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
