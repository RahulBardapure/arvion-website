<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { submitContact } from '@/api/client'
import { useToastStore } from '@/stores/toast'
import { brand } from '@/content/site'

const route = useRoute()
const toast = useToastStore()
const pending = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const emailHref = `mailto:${brand.email}`
const phoneHref = `tel:${brand.phoneTel}`

async function onSubmit() {
  pending.value = true
  try {
    const res = await submitContact({
      ...form,
      sourcePage: route.fullPath,
    })
    toast.success(res.message || 'Message received.')
    form.fullName = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <div class="bg-white">
    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p class="section-label">Help &amp; Support</p>
      <h1 class="mt-2 text-4xl font-bold">We’re here for schools and parents</h1>
      <div class="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 class="font-display text-lg font-semibold">Contact</h2>
          <ul class="mt-4 space-y-3 text-sm text-ink-700">
            <li>
              Phone:
              <a :href="phoneHref" class="font-medium text-brand-600 hover:underline">{{ brand.phone }}</a>
            </li>
            <li>
              Email:
              <a :href="emailHref" class="font-medium text-brand-600 hover:underline">{{ brand.email }}</a>
            </li>
            <li>Hours: Mon–Sat, 10:00–18:00 IST (placeholder)</li>
          </ul>
          <p class="mt-6 text-sm text-ink-500">
            Existing customers: use School Connect in the parent app or Sign In for staff helpdesk.
          </p>
        </div>

        <form class="space-y-4 rounded-2xl border border-ink-100 p-6 shadow-soft" @submit.prevent="onSubmit">
          <h2 class="font-display text-lg font-semibold">Send a message</h2>
          <div>
            <label class="label-field" for="c-name">Full name *</label>
            <input id="c-name" v-model="form.fullName" required class="input-field" />
          </div>
          <div>
            <label class="label-field" for="c-email">Email *</label>
            <input id="c-email" v-model="form.email" type="email" required class="input-field" />
          </div>
          <div>
            <label class="label-field" for="c-phone">Phone</label>
            <input id="c-phone" v-model="form.phone" type="tel" class="input-field" />
          </div>
          <div>
            <label class="label-field" for="c-subject">Subject *</label>
            <input id="c-subject" v-model="form.subject" required class="input-field" />
          </div>
          <div>
            <label class="label-field" for="c-msg">Message *</label>
            <textarea id="c-msg" v-model="form.message" rows="4" required class="input-field" />
          </div>
          <button type="submit" class="btn-primary" :disabled="pending">
            {{ pending ? 'Sending…' : 'Send message' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
