<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { adminLogin } from '@/api/client'
import { useAdminAuthStore } from '@/stores/adminAuth'
import { useToastStore } from '@/stores/toast'

const router = useRouter()
const auth = useAdminAuthStore()
const toast = useToastStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    const res = await adminLogin(email.value.trim(), password.value)
    if (!res.success || !res.data?.token) {
      error.value = res.message || 'Login failed.'
      return
    }
    auth.setSession(res.data.token, res.data.email)
    toast.success('Signed in')
    await router.replace('/admin/leads')
  } catch (e: unknown) {
    const msg =
      (e as { response?: { data?: { message?: string } } })?.response?.data?.message ||
      'Invalid email or password.'
    error.value = msg
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-[70vh] items-center justify-center px-4 py-16">
    <div class="w-full max-w-md rounded-2xl border border-ink-100 bg-white p-8 shadow-soft">
      <p class="section-label">Admin</p>
      <h1 class="mt-2 font-display text-2xl font-bold text-ink-950">Sign in</h1>
      <p class="mt-2 text-sm text-ink-500">View and delete demo requests. Not linked from the public site.</p>

      <form class="mt-8 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="label-field" for="admin-email">Email</label>
          <input
            id="admin-email"
            v-model="email"
            type="email"
            required
            autocomplete="username"
            class="input-field"
            placeholder="you@arvion.com"
          />
        </div>
        <div>
          <label class="label-field" for="admin-password">Password</label>
          <input
            id="admin-password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="input-field"
            placeholder="••••••••"
          />
        </div>
        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
        <button type="submit" class="btn-primary w-full" :disabled="loading">
          {{ loading ? 'Signing in…' : 'Sign in' }}
        </button>
      </form>
    </div>
  </div>
</template>
