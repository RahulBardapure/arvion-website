import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_KEY = 'arvion_admin_token'
const EMAIL_KEY = 'arvion_admin_email'

export const useAdminAuthStore = defineStore('adminAuth', () => {
  const token = ref<string | null>(sessionStorage.getItem(TOKEN_KEY))
  const email = ref<string | null>(sessionStorage.getItem(EMAIL_KEY))

  const isAuthenticated = computed(() => !!token.value)

  function setSession(nextToken: string, nextEmail: string) {
    token.value = nextToken
    email.value = nextEmail
    sessionStorage.setItem(TOKEN_KEY, nextToken)
    sessionStorage.setItem(EMAIL_KEY, nextEmail)
  }

  function logout() {
    token.value = null
    email.value = null
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(EMAIL_KEY)
  }

  return { token, email, isAuthenticated, setSession, logout }
})
