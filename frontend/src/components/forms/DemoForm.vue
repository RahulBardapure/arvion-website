<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight, Loader2, ShieldCheck } from '@lucide/vue'
import { submitDemoRequest } from '@/api/client'
import { useToastStore } from '@/stores/toast'
import { brand } from '@/content/site'

const props = withDefaults(
  defineProps<{
    compact?: boolean
    productInterest?: string
  }>(),
  {
    compact: false,
    productInterest: 'digital-school',
  },
)

const route = useRoute()
const toast = useToastStore()
const pending = ref(false)
const submitted = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+91',
  instituteName: '',
  message: '',
  captchaToken: '',
})

const errors = reactive<Record<string, string>>({})

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.fullName.trim()) errors.fullName = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.phone.trim()) errors.phone = 'Phone is required'
  else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) errors.phone = 'Enter a valid phone number'
  if (!form.instituteName.trim()) errors.instituteName = 'Institute name is required'
  return Object.keys(errors).length === 0
}

async function onSubmit() {
  if (!validate()) return
  pending.value = true
  try {
    const res = await submitDemoRequest({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      countryCode: form.countryCode,
      instituteName: form.instituteName.trim(),
      productInterest: props.productInterest,
      message: form.message.trim() || undefined,
      sourcePage: route.fullPath,
      captchaToken: form.captchaToken || undefined,
    })
    submitted.value = true
    toast.success(res.message || 'Thank you! Our team will contact you shortly.')
    form.fullName = ''
    form.email = ''
    form.phone = ''
    form.instituteName = ''
    form.message = ''
  } catch (err: unknown) {
    const ax = err as { response?: { data?: { errors?: Record<string, string[]> } } }
    const apiErrors = ax.response?.data?.errors
    if (apiErrors) {
      for (const [key, msgs] of Object.entries(apiErrors)) {
        const field = key.charAt(0).toLowerCase() + key.slice(1)
        errors[field] = msgs[0]
      }
    }
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <div
    class="rounded-2xl border border-ink-100/80 bg-white/90 p-5 shadow-glow backdrop-blur-xl sm:p-6"
    :class="{ 'p-4 sm:p-5': compact }"
  >
    <div v-if="submitted" class="py-8 text-center">
      <div
        class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-soft text-success"
      >
        <ShieldCheck class="h-6 w-6" />
      </div>
      <p class="mt-4 font-display text-xl font-semibold text-ink-950">Request received</p>
      <p class="mt-2 text-sm text-ink-500">
        Our team will reach out to schedule your {{ brand.productName }} demo.
      </p>
      <button type="button" class="btn-secondary mt-6" @click="submitted = false">
        Submit another request
      </button>
    </div>

    <form v-else class="space-y-3.5" novalidate @submit.prevent="onSubmit">
      <div>
        <p class="font-display text-lg font-semibold text-ink-950">Request a free demo</p>
        <p class="mt-1 text-sm text-ink-400">We’ll contact you within one business day.</p>
      </div>

      <div>
        <label class="label-field" for="demo-name">Full name <span class="text-brand-500">*</span></label>
        <input
          id="demo-name"
          v-model="form.fullName"
          type="text"
          autocomplete="name"
          class="input-field"
          :aria-invalid="!!errors.fullName"
          required
        />
        <p v-if="errors.fullName" class="mt-1 text-xs text-danger">{{ errors.fullName }}</p>
      </div>

      <div>
        <label class="label-field" for="demo-email">Email <span class="text-brand-500">*</span></label>
        <input
          id="demo-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          class="input-field"
          :aria-invalid="!!errors.email"
          required
        />
        <p v-if="errors.email" class="mt-1 text-xs text-danger">{{ errors.email }}</p>
      </div>

      <div>
        <label class="label-field" for="demo-phone">Phone <span class="text-brand-500">*</span></label>
        <div class="flex gap-2">
          <select
            id="demo-cc"
            v-model="form.countryCode"
            class="input-field w-[4.5rem] shrink-0"
            aria-label="Country code"
          >
            <option value="+91">+91</option>
            <option value="+971">+971</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+65">+65</option>
          </select>
          <input
            id="demo-phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            class="input-field"
            placeholder="98765 43210"
            :aria-invalid="!!errors.phone"
            required
          />
        </div>
        <p v-if="errors.phone" class="mt-1 text-xs text-danger">{{ errors.phone }}</p>
      </div>

      <div>
        <label class="label-field" for="demo-institute">
          Institute name <span class="text-brand-500">*</span>
        </label>
        <input
          id="demo-institute"
          v-model="form.instituteName"
          type="text"
          class="input-field"
          :aria-invalid="!!errors.instituteName"
          required
        />
        <p v-if="errors.instituteName" class="mt-1 text-xs text-danger">{{ errors.instituteName }}</p>
      </div>

      <div v-if="!compact">
        <label class="label-field" for="demo-message">Message (optional)</label>
        <textarea id="demo-message" v-model="form.message" rows="3" class="input-field" />
      </div>

      <div class="hidden" aria-hidden="true" data-captcha-placeholder>
        <input v-model="form.captchaToken" type="hidden" />
      </div>

      <p class="flex items-start gap-1.5 text-[11px] text-ink-400">
        <ShieldCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" aria-hidden="true" />
        By submitting, you agree to be contacted about {{ brand.productName }}. No spam.
      </p>

      <button type="submit" class="btn-primary w-full" :disabled="pending">
        <Loader2 v-if="pending" class="h-4 w-4 animate-spin" />
        <template v-else>
          Request free demo
          <ArrowRight class="h-4 w-4" />
        </template>
      </button>

      <p class="text-center text-sm text-ink-400">
        Already a customer?
        <a :href="brand.signInUrl" class="font-semibold text-ink-800 transition hover:text-brand-600">
          Login
        </a>
      </p>
    </form>
  </div>
</template>
