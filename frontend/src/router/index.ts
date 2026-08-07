import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Arvion — Digital School ERP & Parent App',
        description:
          'Run admissions, fees, attendance, and parent engagement from one Azure-hosted school platform.',
      },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: { title: 'Products — Arvion', description: 'Software products from Arvion.' },
    },
    {
      path: '/products/digital-school',
      name: 'digital-school',
      component: () => import('@/views/DigitalSchoolView.vue'),
      meta: {
        title: 'Digital School — School ERP by Arvion',
        description: 'Full school ERP with WhatsApp, online fees, AutoPay, and Android parent app.',
      },
    },
    {
      path: '/products/digital-school/modules',
      name: 'digital-school-modules',
      component: () => import('@/views/digital-school/ModulesIndexView.vue'),
      meta: {
        title: 'Digital School Modules — Arvion',
        description: 'Full module directory for Digital School ERP.',
      },
    },
    {
      path: '/products/digital-school/:slug',
      name: 'digital-school-deep',
      component: () => import('@/views/digital-school/DigitalSchoolDeepView.vue'),
      meta: {
        title: 'Digital School — Arvion',
        description: 'Digital School capability deep dive.',
      },
    },
    {
      path: '/modules',
      redirect: '/products/digital-school/modules',
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('@/views/SolutionsView.vue'),
      meta: { title: 'Solutions — Arvion', description: 'Solutions for principals, staff, and parents.' },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/PricingView.vue'),
      meta: { title: 'Pricing — Arvion', description: 'Custom quotes for schools and groups.' },
    },
    {
      path: '/success-stories',
      name: 'success-stories',
      component: () => import('@/views/SuccessStoriesView.vue'),
      meta: { title: 'Success Stories — Arvion', description: 'Schools using Digital School.' },
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/HelpView.vue'),
      meta: { title: 'Help & Support — Arvion', description: 'Contact Arvion support.' },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/PrivacyView.vue'),
      meta: { title: 'Privacy Policy — Arvion' },
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/TermsView.vue'),
      meta: { title: 'Terms of Use — Arvion' },
    },
    {
      path: '/request-demo',
      name: 'request-demo',
      component: () => import('@/views/RequestDemoView.vue'),
      meta: {
        title: 'Request Free Demo — Arvion',
        description: 'Book a free Digital School demo for your institute.',
      },
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: () => import('@/views/AdminLoginView.vue'),
      meta: {
        title: 'Admin — Arvion',
        hideChrome: true,
      },
    },
    {
      path: '/admin/leads',
      name: 'admin-leads',
      component: () => import('@/views/AdminLeadsView.vue'),
      meta: {
        title: 'Demo requests — Admin',
        hideChrome: true,
        requiresAdmin: true,
      },
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
  ],
})

router.beforeEach((to) => {
  if (!to.meta.requiresAdmin) return true
  const token = sessionStorage.getItem('arvion_admin_token')
  if (!token) return { name: 'admin-login', query: { redirect: to.fullPath } }
  return true
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || 'Arvion'
  const description =
    (to.meta.description as string) ||
    'Arvion builds cloud school systems — starting with Digital School ERP.'
  document.title = title

  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', description)

  const setOg = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', property)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }
  setOg('og:title', title)
  setOg('og:description', description)
  setOg('og:type', 'website')
})

export default router
