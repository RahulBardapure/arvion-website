export const brand = {
  companyName: 'Arvion',
  productName: 'Digital School',
  tagline: 'Run your whole school from one platform.',
  /** Display + tel: use digits only for href */
  phone: '+91 92261 93828',
  phoneTel: '+919226193828',
  email: 'arvionsoftwares@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kunjirschool.erp',
  /** Placeholder until product login URL is ready */
  signInUrl: '#signin',
  supportUrl: '/help',
  logoSrc: '/brand/arvion-logo.png',
  logoSvgSrc: '/brand/arvion-logo.svg',
} as const

/** Extension point: add Product #2 here and in nav /products */
export type ProductStatus = 'live' | 'coming-soon'

export interface ProductSummary {
  slug: string
  name: string
  shortName: string
  blurb: string
  status: ProductStatus
  href: string
}

export const products: ProductSummary[] = [
  {
    slug: 'digital-school',
    name: 'Digital School',
    shortName: 'School ERP',
    blurb: 'Admissions, fees, academics, WhatsApp, and parent app — one multi-tenant SaaS.',
    status: 'live',
    href: '/products/digital-school',
  },
  {
    slug: 'college-erp',
    name: 'College ERP',
    shortName: 'Higher Ed',
    blurb: 'Campus operations for colleges — structured for a future release.',
    status: 'coming-soon',
    href: '/products#college-erp',
  },
  {
    slug: 'lms',
    name: 'Learning LMS',
    shortName: 'LMS',
    blurb: 'Teaching and learning layer — Coming Soon.',
    status: 'coming-soon',
    href: '/products#lms',
  },
]

export const modules = [
  {
    slug: 'admissions',
    title: 'Admissions & Leads',
    summary: 'Inquiry to enrollment with Meta Lead Ads, WhatsApp, and walk-ins.',
    icon: 'admissions',
    href: '/products/digital-school/admissions',
  },
  {
    slug: 'fees',
    title: 'Fees & Collections',
    summary: 'Ledgers, installments, CCAvenue & Easebuzz, AutoPay mandates.',
    icon: 'fees',
    href: '/products/digital-school/fees',
  },
  {
    slug: 'whatsapp',
    title: 'WhatsApp Business',
    summary: 'Fee reminders, chat inbox, receipts in the 24-hour window.',
    icon: 'whatsapp',
    href: '/products/digital-school/whatsapp',
  },
  {
    slug: 'students',
    title: 'Students & Lifecycle',
    summary: 'Profiles, divisions, alumni, promotion with arrears carry-forward.',
    icon: 'students',
    href: '/products/digital-school/students',
  },
  {
    slug: 'academics',
    title: 'Academics & Structure',
    summary: 'Years, standards, subjects, teacher portal and timetable.',
    icon: 'academics',
    href: '/products/digital-school/academics',
  },
  {
    slug: 'operations',
    title: 'Daily Operations',
    summary: 'Attendance, homework, exams, leave, gallery, notice board.',
    icon: 'operations',
    href: '/products/digital-school/academics',
  },
  {
    slug: 'certificates',
    title: 'Certificates',
    summary: 'Bonafide, TC, character, migration — PDF with fee clearance gates.',
    icon: 'certificates',
    href: '/products/digital-school/certificates',
  },
  {
    slug: 'parent-app',
    title: 'Parent Mobile App',
    summary: 'Multi-child dashboard, fees, AutoPay, School Connect helpdesk.',
    icon: 'parent',
    href: '/products/digital-school/parent-app',
  },
  {
    slug: 'admin',
    title: 'Admin & Security',
    summary: 'Roles, feature flags, multi-school isolation, Azure-ready.',
    icon: 'admin',
    href: '/products/digital-school/admin',
  },
] as const

export const solutions = [
  {
    slug: 'principals',
    title: 'For Principals',
    summary: 'One view of admissions, collections, and campus operations.',
  },
  {
    slug: 'accountants',
    title: 'For Accountants',
    summary: 'Fee structures, ledgers, gateways, and audit-friendly receipts.',
  },
  {
    slug: 'teachers',
    title: 'For Teachers',
    summary: 'Attendance, diary, marks, leaves, and certificates in one portal.',
  },
  {
    slug: 'parents',
    title: 'For Parents',
    summary: 'Android app for fees, attendance, homework, and school updates.',
  },
  {
    slug: 'multi-campus',
    title: 'For Multi-campus Groups',
    summary: 'Vendor console, feature flags, and isolated school tenants.',
  },
] as const
