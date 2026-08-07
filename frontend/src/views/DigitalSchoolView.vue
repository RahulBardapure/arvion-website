<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight, Check, Download } from '@lucide/vue'
import DsSubnav from '@/components/digital-school/DsSubnav.vue'
import MarketingImage from '@/components/digital-school/MarketingImage.vue'
import FeatureChecklist from '@/components/digital-school/FeatureChecklist.vue'
import MicroCta from '@/components/digital-school/MicroCta.vue'
import FaqAccordion from '@/components/digital-school/FaqAccordion.vue'
import DemoForm from '@/components/forms/DemoForm.vue'
import { brand } from '@/content/site'
import {
  DS_IMG,
  admissionsFlow,
  dailyOpsMosaic,
  faqItems,
  moduleIndex,
  personas,
  proofStrip,
} from '@/content/digitalSchool'

const trustChips = [
  'WhatsApp Business',
  'Meta Lead Ads',
  'CCAvenue',
  'Easebuzz',
  'Azure',
  'Android App',
]

const admissionsChecklist = [
  'Facebook & Instagram Lead Ads → Inquiry auto-created (direct integration)',
  'No Ads Manager export / no copy-paste into the CRM',
  'Admissions Dashboard — inquiries, calls due, enrollment pending',
  'Follow-ups: overdue calls, outcomes, next-call reminders',
  'Convert to Candidate with form-fee collection',
  'Candidate pipeline: fees → documents → confirm → enroll',
  'Walk-in / phone / portal / WhatsApp sources in the same list',
]

const feesChecklist = [
  'Fee heads & structures (year + class + division + category)',
  'RTE / Scholarship / Staff Ward / School Adopted rules',
  'Fee assignment workspace',
  'Student ledger (total / paid / remaining)',
  'Installments, discounts, fines, arrears',
  'Immutable receipts + PDF',
  'Correction queue / overrides with audit',
  'Outstanding / collection / overdue reports (₹)',
]

const paymentsChecklist = [
  'CCAvenue + Easebuzz gateways',
  'UPI · Cards · NetBanking · Wallets',
  'UPI AutoPay & eNACH',
  'Payment links via WhatsApp',
  'Online Payment Activity + AutoPay monitoring',
  'Gateway-compliant checkout via trusted Indian PGs',
]

const whatsappChecklist = [
  'Fee reminder templates with pay link',
  'Two-way inbox inside ERP',
  'Receipts (text/PDF) in 24-hour window',
  'Delivery / read status',
  'WhatsApp analytics (delivery, read rate, failures)',
  'Automated alerts: admissions, fees, arrears',
]

const parentChecklist = [
  'Multi-child switcher',
  'Home · Profile · Homework · Fees · Notices · More',
  'Pay Online + AutoPay setup',
  'Attendance, timetable, teacher notes, exams, behaviour',
  'Leave, certificates, School Connect helpdesk',
]

const studentsChecklist = [
  'Student list + rich profile (fees, attendance, family, documents)',
  'Bulk / individual attendance WhatsApp nudges',
  'Alumni + admission promo WhatsApp',
  'Division assignment workspace',
  'Student leaves & leave reports',
  'Batch promotion with fee checks & arrears carry-forward',
]

const certificatesChecklist = [
  'Bonafide, Leaving/TC, Character, Migration',
  'School & staff certificate suite',
  'PDF generation',
  'Fee clearance gate for Leaving/TC',
  'Parent / teacher certificate requests',
]

const adminChecklist = [
  'School code → username / password staff login',
  'WhatsApp OTP for secure admin access',
  'Forgot password via WhatsApp',
  'Separate vendor admin login',
  'Roles + claim-based permissions',
  'Feature flags per school',
  'Azure multi-tenant isolation',
  'Vendor provisioning & CSV onboarding',
]
</script>

<template>
  <div class="bg-surface-soft">
    <!-- 1. Hero -->
    <section id="overview" class="relative scroll-mt-28 overflow-hidden bg-ink-950 text-white">
      <div class="pointer-events-none absolute inset-0 bg-mesh-dark" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">
              Flagship product
            </p>
            <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {{ brand.productName }}
            </h1>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Run admissions, academics, fees, attendance, and parent engagement from one platform —
              with WhatsApp, Meta leads, online payments, and AutoPay.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <RouterLink to="/request-demo" class="btn-primary">
                Request Free Demo
                <ArrowRight class="h-4 w-4" />
              </RouterLink>
              <a
                href="#modules"
                class="btn-secondary !border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
              >
                Browse modules
              </a>
              <a href="#overview-collage" class="btn-ghost !text-ink-300 hover:!text-white">
                Watch product tour ↓
              </a>
            </div>
            <div class="mt-8 flex flex-wrap gap-2">
              <span
                v-for="chip in trustChips"
                :key="chip"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-ink-200"
              >
                {{ chip }}
              </span>
            </div>
          </div>
          <div id="overview-collage">
            <MarketingImage
              :src="`${DS_IMG}/hero-complete-erp.png`"
              alt="Digital School complete ERP collage"
              caption="Main dashboard — students, fees pending, attendance, collections, and needs attention"
            />
          </div>
        </div>
      </div>
    </section>

    <DsSubnav />

    <!-- 2. Proof strip -->
    <section class="border-b border-ink-100 bg-white py-10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <p class="section-label">See it running</p>
        <h2 class="mt-2 font-display text-2xl font-bold tracking-tight">Product proof — not icons</h2>
        <div class="mt-6 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
          <a
            v-for="p in proofStrip"
            :key="p.src"
            :href="p.href"
            class="group w-40 shrink-0 sm:w-auto"
          >
            <div
              class="overflow-hidden rounded-xl border border-ink-100 shadow-soft transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-glow"
            >
              <img :src="p.src" :alt="p.caption" class="aspect-[8/5] w-full object-cover" loading="lazy" />
            </div>
            <p class="mt-2 text-center text-xs font-semibold text-ink-600">{{ p.caption }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. Personas -->
    <section class="bg-surface-soft py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <p class="section-label">Who it’s for</p>
        <h2 class="mt-2 font-display text-3xl font-bold tracking-tight">Built for Indian school roles</h2>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="persona in personas"
            :key="persona.title"
            :href="persona.href"
            class="premium-card block p-5"
          >
            <h3 class="font-display text-sm font-semibold text-ink-950">{{ persona.title }}</h3>
            <p class="mt-3 text-xs leading-relaxed text-ink-400">{{ persona.pain }}</p>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ persona.outcome }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- 4. Admissions -->
    <section id="admissions" class="scroll-mt-28 bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p class="section-label">Admissions & Meta Leads</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight sm:text-[2rem]">
              Facebook &amp; Instagram Lead Ads become Inquiries — automatically.
            </h2>
            <p class="mt-4 text-ink-500">
              Direct Meta Lead Ads integration: every FB / IG lead is created as an Inquiry in Digital School.
              No Ads Manager download. No Excel paste. Then call, WhatsApp, convert, enroll.
            </p>
            <p class="mt-3 rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3 text-sm font-semibold text-brand-800">
              Strong feature — FB &amp; IG Lead Ads → Inquiry auto-created in the ERP
            </p>
            <div class="mt-8">
              <FeatureChecklist :items="admissionsChecklist" />
            </div>
            <RouterLink to="/products/digital-school/admissions" class="btn-primary mt-8">
              Explore Admissions
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
          <div class="space-y-5">
            <MarketingImage
              :src="`${DS_IMG}/admissions/inquiries-list.png`"
              alt="Inquiries with Facebook Instagram leads"
              caption="Inquiries — Facebook / Instagram Lead Ads auto-created"
            />
            <MarketingImage
              :src="`${DS_IMG}/admissions/admissions-dashboard.png`"
              alt="Admissions dashboard"
              caption="Admissions Dashboard — inquiries, calls due, enrollment"
            />
          </div>
        </div>

        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MarketingImage
            :src="`${DS_IMG}/admissions/inquiry-new.png`"
            alt="New inquiry"
            caption="New Inquiry — walk-in / phone"
          />
          <MarketingImage
            :src="`${DS_IMG}/admissions/follow-ups-list.png`"
            alt="Follow-ups"
            caption="Follow-ups — overdue & next-call reminders"
          />
          <MarketingImage
            :src="`${DS_IMG}/admissions/follow-ups-log-a-call.png`"
            alt="Log a call"
            caption="Log a Call — outcomes & next date"
          />
          <MarketingImage
            :src="`${DS_IMG}/admissions/inquiry-convert-candidate.png`"
            alt="Convert to candidate"
            caption="Convert to Candidate + form fee"
          />
          <MarketingImage
            :src="`${DS_IMG}/admissions/candidates-list.png`"
            alt="Candidates list"
            caption="Candidates — progress badges"
          />
          <MarketingImage
            :src="`${DS_IMG}/admissions/candidate-pipeline.png`"
            alt="Candidate pipeline"
            caption="Candidate pipeline workspace"
          />
        </div>

        <ol class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="step in admissionsFlow"
            :key="step.step"
            class="rounded-2xl border border-ink-100 bg-surface-soft p-5"
          >
            <span class="font-display text-2xl font-bold text-brand-300">0{{ step.step }}</span>
            <h3 class="mt-2 font-display text-sm font-semibold text-ink-950">{{ step.title }}</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-ink-500">{{ step.body }}</p>
          </li>
        </ol>

        <div class="mt-10">
          <MicroCta />
        </div>
      </div>
    </section>

    <!-- 5. Fees -->
    <section id="fees" class="scroll-mt-28 bg-surface-muted py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div class="order-2 space-y-5 lg:order-1">
            <MarketingImage
              :src="`${DS_IMG}/fees-ledger.png`"
              alt="Fee ledger"
              caption="Student ledger — obligation vs payment"
            />
            <MarketingImage
              :src="`${DS_IMG}/fees-reports.png`"
              alt="Fee reports"
              caption="Collection & overdue reports in ₹"
            />
          </div>
          <div class="order-1 lg:order-2">
            <p class="section-label">Fees & Accounting</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Fees as a real ledger — not a spreadsheet.
            </h2>
            <p class="mt-4 text-ink-500">
              Structures by year, class, division, and category. RTE rules that accountants trust.
            </p>
            <div class="mt-8">
              <FeatureChecklist :items="feesChecklist" />
            </div>
            <RouterLink to="/products/digital-school/fees" class="btn-primary mt-8">
              Explore Fees
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Payments -->
    <section id="payments" class="scroll-mt-28 bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p class="section-label">Online Payments & AutoPay</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Smart & secure payment integration.
            </h2>
            <p class="mt-2 text-sm font-semibold text-brand-600">
              Multiple Payment Gateways. One Seamless Experience.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="rounded-xl border border-ink-100 bg-surface-soft px-4 py-3 text-sm font-bold text-ink-800">
                CCAvenue
              </span>
              <span class="rounded-xl border border-ink-100 bg-surface-soft px-4 py-3 text-sm font-bold text-ink-800">
                Easebuzz
              </span>
            </div>
            <p class="mt-4 text-sm text-ink-500">
              UPI · Cards · NetBanking · Wallets · <strong class="text-ink-800">UPI AutoPay</strong> ·
              <strong class="text-ink-800">eNACH</strong>
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-ink-100 p-4">
                <p class="text-xs font-semibold uppercase tracking-wide text-brand-600">School</p>
                <p class="mt-2 text-sm text-ink-600">
                  Gateway activity, mandate monitor, bulk links, fewer counter queues.
                </p>
              </div>
              <div class="rounded-2xl border border-ink-100 p-4">
                <p class="text-xs font-semibold uppercase tracking-wide text-brand-600">Parents</p>
                <p class="mt-2 text-sm text-ink-600">
                  Pay from app or WhatsApp link — AutoPay for recurring installments.
                </p>
              </div>
            </div>
            <div class="mt-8">
              <FeatureChecklist :items="paymentsChecklist" />
            </div>
            <RouterLink to="/products/digital-school/payments" class="btn-primary mt-8">
              Explore Payments
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
          <MarketingImage
            :src="`${DS_IMG}/payments-gateways.png`"
            alt="Payment gateways"
            caption="CCAvenue · Easebuzz · UPI AutoPay · eNACH"
          />
        </div>
        <div class="mt-10">
          <MicroCta />
        </div>
      </div>
    </section>

    <!-- 7. WhatsApp -->
    <section id="whatsapp" class="scroll-mt-28 bg-surface-muted py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div class="order-2 space-y-5 lg:order-1">
            <MarketingImage
              :src="`${DS_IMG}/whatsapp-integration.png`"
              alt="WhatsApp integration"
              caption="Seamless Meta + WhatsApp for Digital School"
            />
            <MarketingImage
              :src="`${DS_IMG}/whatsapp-analytics.png`"
              alt="WhatsApp analytics"
              caption="Delivery, read rate, failures — standard-wise"
            />
          </div>
          <div class="order-1 lg:order-2">
            <p class="section-label">WhatsApp Business</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Seamless Meta + WhatsApp for Digital School.
            </h2>
            <p class="mt-2 text-sm font-semibold text-brand-600">
              Smarter Communication. Stronger Connections. Better Education.
            </p>
            <p class="mt-4 text-ink-500">Connect. Communicate. Engage.</p>
            <div class="mt-8">
              <FeatureChecklist :items="whatsappChecklist" />
            </div>
            <RouterLink to="/products/digital-school/whatsapp" class="btn-primary mt-8">
              Explore WhatsApp
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Parent App -->
    <section id="parent-app" class="scroll-mt-28 bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p class="section-label">Parent Mobile App</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Parents open the app for the child’s day — fees become natural.
            </h2>
            <div class="mt-8">
              <FeatureChecklist :items="parentChecklist" />
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <RouterLink to="/products/digital-school/parent-app" class="btn-primary">
                Explore Parent App
                <ArrowRight class="h-4 w-4" />
              </RouterLink>
              <a
                v-if="brand.playStoreUrl"
                :href="brand.playStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
              >
                <Download class="h-4 w-4" />
                Download Android
              </a>
            </div>
          </div>
          <MarketingImage
            :src="`${DS_IMG}/parent-app-screens.png`"
            alt="Parent app screens"
            caption="Home · Profile · Homework · Fees (Pay Online) · Notices · More"
          />
        </div>
        <div class="mt-10">
          <MicroCta />
        </div>
      </div>
    </section>

    <!-- 9. Academics mosaic -->
    <section id="academics" class="scroll-mt-28 bg-surface-soft py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="max-w-2xl">
          <p class="section-label">Academics & Daily Ops</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
            One Platform. All School Operations.
          </h2>
          <p class="mt-3 text-ink-500">
            Staff web screens (claim-gated) for subjects, attendance, homework, class diary, and timetable.
            Parents see the child-facing slice on the Android app.
          </p>
        </div>
        <div class="mt-8">
          <MarketingImage
            :src="`${DS_IMG}/daily-ops.png`"
            alt="Subjects and academics"
            caption="Subjects · Attendance · Homework · Class Diary · Timetable — staff / claim views"
          />
        </div>
        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="m in dailyOpsMosaic"
            :key="m.title"
            :to="m.href"
            class="premium-card group overflow-hidden p-0"
          >
            <img
              v-if="m.thumb"
              :src="m.thumb"
              :alt="m.title"
              class="aspect-[16/10] w-full object-cover object-top"
              loading="lazy"
            />
            <div class="p-4">
              <h3 class="font-display text-sm font-semibold text-ink-950 group-hover:text-brand-700">
                {{ m.title }}
              </h3>
              <p class="mt-1.5 text-xs text-ink-500">{{ m.body }}</p>
              <p class="mt-3 text-[11px] font-semibold text-brand-600">See screens →</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 10. Students -->
    <section id="students" class="scroll-mt-28 bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p class="section-label">Students & Lifecycle</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Profiles that carry the academic year — and the next.
            </h2>
            <p class="mt-3 text-ink-500">
              List, profile, alumni, division assignment, leaves, and batch promotion — staff screens with claim-based access.
            </p>
            <div class="mt-8">
              <FeatureChecklist :items="studentsChecklist" />
            </div>
            <RouterLink to="/products/digital-school/students" class="btn-primary mt-8">
              Explore Students
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
          <div class="space-y-5">
            <MarketingImage
              :src="`${DS_IMG}/students/students-list.png`"
              alt="Students list"
              caption="Students list — filters, WhatsApp, export"
            />
            <MarketingImage
              :src="`${DS_IMG}/students/student-profile.png`"
              alt="Student profile"
              caption="Student profile — overview tabs"
            />
          </div>
        </div>
        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MarketingImage
            :src="`${DS_IMG}/students/alumni-list.png`"
            alt="Alumni"
            caption="Alumni records"
          />
          <MarketingImage
            :src="`${DS_IMG}/students/division-assignment.png`"
            alt="Division assignment"
            caption="Division assignment"
          />
          <MarketingImage
            :src="`${DS_IMG}/students/batch-promotion-preview.png`"
            alt="Batch promotion"
            caption="Batch promotion preview"
          />
          <MarketingImage
            :src="`${DS_IMG}/students/student-leaves.png`"
            alt="Student leaves"
            caption="Student leaves"
          />
          <MarketingImage
            :src="`${DS_IMG}/students/students-bulk-attendance-whatsapp.png`"
            alt="Bulk attendance WhatsApp"
            caption="Bulk attendance WhatsApp"
          />
          <MarketingImage
            :src="`${DS_IMG}/students/batch-promotion-checklist.png`"
            alt="Promotion checklist"
            caption="Promote & close year checklist"
          />
        </div>
      </div>
    </section>

    <!-- 11. Certificates -->
    <section id="certificates" class="scroll-mt-28 bg-surface-muted py-20">
      <div class="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div class="order-2 lg:order-1">
          <MarketingImage
            :src="`${DS_IMG}/certificates-suite.png`"
            alt="Certificates"
            caption="Bonafide · Leaving/TC · Character · Migration"
          />
        </div>
        <div class="order-1 lg:order-2">
          <p class="section-label">Certificates</p>
          <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
            PDF certificates with fee clearance when it matters.
          </h2>
          <div class="mt-8">
            <FeatureChecklist :items="certificatesChecklist" />
          </div>
          <RouterLink to="/products/digital-school/certificates" class="btn-primary mt-8">
            Explore Certificates
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <MicroCta />
      </div>
    </section>

    <!-- 12. Admin -->
    <section id="admin" class="scroll-mt-28 bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p class="section-label">Admin & Security</p>
            <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">
              Secure login — school code, credentials, WhatsApp OTP.
            </h2>
            <p class="mt-3 text-ink-500">
              Staff enter their school code, sign in, and admins can verify via WhatsApp OTP. Vendor login stays separate.
            </p>
            <div class="mt-8">
              <FeatureChecklist :items="adminChecklist" />
            </div>
            <RouterLink to="/products/digital-school/admin" class="btn-primary mt-8">
              Explore Admin & Login
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
          <div class="space-y-5">
            <MarketingImage
              :src="`${DS_IMG}/auth/login-school-code.png`"
              alt="School code login"
              caption="Enter school code"
            />
            <MarketingImage
              :src="`${DS_IMG}/auth/login-credentials.png`"
              alt="Staff sign in"
              caption="Username & password"
            />
          </div>
        </div>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          <MarketingImage
            :src="`${DS_IMG}/auth/login-otp-whatsapp.png`"
            alt="OTP via WhatsApp"
            caption="Admin OTP via WhatsApp"
          />
          <MarketingImage
            :src="`${DS_IMG}/auth/login-forgot-password.png`"
            alt="Forgot password"
            caption="Reset password — WhatsApp OTP"
          />
        </div>
      </div>
    </section>

    <!-- 13. Modules index -->
    <section id="modules" class="scroll-mt-28 border-y border-ink-100 bg-surface-soft py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <p class="section-label">Modules</p>
        <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">Full module directory</h2>
        <p class="mt-3 max-w-2xl text-ink-500">
          Every capability is findable — open a deep page or book a demo to walk it live.
        </p>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="m in moduleIndex"
            :key="m.href"
            :to="m.href"
            class="premium-card block p-5"
          >
            <h3 class="font-display text-sm font-semibold text-ink-950">{{ m.title }}</h3>
            <p class="mt-2 text-xs leading-relaxed text-ink-500">{{ m.summary }}</p>
            <p class="mt-3 text-[11px] font-semibold text-brand-600">Open →</p>
          </RouterLink>
        </div>
        <RouterLink to="/products/digital-school/modules" class="btn-secondary mt-8">
          View searchable module index
          <ArrowRight class="h-4 w-4" />
        </RouterLink>
      </div>
    </section>

    <!-- 14. FAQ -->
    <section class="bg-white py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <p class="section-label">FAQ</p>
        <h2 class="mt-3 font-display text-3xl font-bold tracking-tight">Objection killers</h2>
        <div class="mt-8">
          <FaqAccordion :items="[...faqItems]" />
        </div>
      </div>
    </section>

    <!-- 15. Final CTA -->
    <section id="demo" class="scroll-mt-28 relative overflow-hidden bg-ink-950 py-20 text-white">
      <div class="pointer-events-none absolute inset-0 bg-mesh-dark" aria-hidden="true" />
      <div class="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">
            Capture. Respond. Collect. Engage.
          </p>
          <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Book a free {{ brand.productName }} demo
          </h2>
          <p class="mt-4 text-ink-300">
            Bring your Principal and accountant. We’ll map admissions, ledgers, WhatsApp, and the parent app to
            your academic year.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-ink-200">
            <li class="flex gap-2"><Check class="h-4 w-4 text-cyan-300" /> {{ brand.phone }}</li>
            <li class="flex gap-2"><Check class="h-4 w-4 text-cyan-300" /> {{ brand.email }}</li>
          </ul>
        </div>
        <DemoForm />
      </div>
    </section>
  </div>
</template>
