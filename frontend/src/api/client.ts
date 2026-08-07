import axios from 'axios'
import { useToastStore } from '@/stores/toast'
import { useAdminAuthStore } from '@/stores/adminAuth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5034/api/v1',
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000,
})

api.interceptors.request.use((config) => {
  try {
    const auth = useAdminAuthStore()
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }
  } catch {
    // Pinia may not be ready
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const hasFieldErrors = !!error.response?.data?.errors
    // Let forms show inline validation; toast for other failures
    if (!(status === 400 && hasFieldErrors)) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Something went wrong. Please try again.'
      try {
        useToastStore().error(message)
      } catch {
        // Pinia may not be ready in rare edge cases
      }
    }
    return Promise.reject(error)
  },
)

export interface ApiEnvelope<T> {
  success: boolean
  data: T
  message: string
  errors?: Record<string, string[]>
}

export interface DemoRequestPayload {
  fullName: string
  email: string
  phone: string
  countryCode: string
  instituteName: string
  productInterest?: string
  message?: string
  sourcePage?: string
  captchaToken?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  quote: string
  rating: number
  avatarUrl?: string | null
}

export interface DemoLead {
  id: string
  fullName: string
  email: string
  phone: string
  countryCode: string
  instituteName: string
  productInterest: string
  message?: string | null
  sourcePage?: string | null
  status: string
  createdAt: string
}

export async function submitDemoRequest(payload: DemoRequestPayload) {
  const { data } = await api.post<ApiEnvelope<unknown>>('/leads/demo', payload)
  return data
}

export async function submitContact(payload: Record<string, string>) {
  const { data } = await api.post<ApiEnvelope<unknown>>('/leads/contact', payload)
  return data
}

export async function fetchTestimonials() {
  const { data } = await api.get<ApiEnvelope<Testimonial[]>>('/testimonials')
  return data.data ?? []
}

export async function adminLogin(email: string, password: string) {
  const { data } = await api.post<
    ApiEnvelope<{ token: string; email: string; expiresAt: string }>
  >('/auth/login', { email, password })
  return data
}

export async function fetchAdminLeads() {
  const { data } = await api.get<ApiEnvelope<DemoLead[]>>('/admin/leads')
  return data.data ?? []
}

export async function deleteAdminLead(id: string) {
  const { data } = await api.delete<ApiEnvelope<unknown>>(`/admin/leads/${id}`)
  return data
}

export default api
