<script setup lang="ts">
import { modules } from '@/content/site'

const details: Record<string, string[]> = {
  admissions: [
    'Facebook & Instagram Lead Ads → Inquiry auto-created (direct integration)',
    'No Ads Manager export — leads land in the ERP with meta_leadgen IDs',
    'Follow-ups CRM: overdue calls, outcomes, next-call reminders',
    'Inquiry → Follow-up → Candidate → Documents → Confirm → Enroll',
    'Form fee / admission fee tracking (separate from tuition)',
  ],
  fees: [
    'Student Ledger — obligation vs payment, arrears, receipts',
    "Fees Follow-up / Promise Tracker — My Day + WhatsApp",
    'Receipts — find, download & print by student or number',
    'Online Payment Activity — settlement, failures, Analytics',
    'AutoPay Activity — mandates, pre-debit, presentments',
    'Reports — collection, defaulters, priority, overrides',
    'Collect payment + WhatsApp pay links from the same screen',
    'Bulk fee / arrear / AutoPay WhatsApp with eligible counts',
    'Fee heads & structures (year + standard + category)',
    'CCAvenue + Easebuzz; online vs counter-only heads',
  ],
  whatsapp: [
    'Fee reminders with payment links (templates)',
    'In-app chat inbox with delivery/read status',
    'Receipt text/PDF in the 24-hour window',
    'WhatsApp Trends & Insights (Phase 1 + Phase 2)',
    'Arrear / AutoPay / app-update nudges',
  ],
  students: [
    'Student identity vs year-wise academic records',
    'Full profile: academics, family, fees, attendance, exams, documents',
    'Division assignment, alumni, batch promotion + arrears carry-forward',
    'Direct enrollment',
  ],
  academics: [
    'Academic years, standards, divisions, subjects, teachers',
    'Teacher portal: teaching, timetable, leaves, certificates',
  ],
  operations: [
    'Class attendance (draft → submit → lock) + reports',
    'Homework, class diary, assignments, exams & marks',
    'Behaviour notes, timetable + substitutions, calendar, notice board',
    'Gallery albums, student & teacher leave workflows',
  ],
  certificates: [
    'Bonafide, Leaving/TC, Character, Migration, and more',
    'PDF generation with fee clearance gate for leaving certificates',
    'Parent/teacher certificate requests',
  ],
  'parent-app': [
    'Multi-child switcher',
    'Dashboard: attendance, timetable, homework, fees strip',
    'Pay fees online + AutoPay setup',
    'Notices, gallery, calendar, exams, behaviour, leave, certificates',
    'School Connect helpdesk tickets',
  ],
  admin: [
    'Roles + fine-grained claim-based permissions',
    'Feature flags per school (vendor-controlled)',
    'Multi-tenant isolation + vendor admin',
    'CSV/Excel onboarding imports',
    'Dashboards, audit trails, Android app distribution',
  ],
}
</script>

<template>
  <div class="bg-white">
    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p class="section-label">Modules</p>
      <h1 class="mt-2 text-4xl font-bold">Digital School module grid</h1>
      <p class="mt-3 max-w-2xl text-ink-500">
        Deep capabilities you can enable per school via feature flags — honest to our product pillars.
      </p>

      <div class="mt-12 space-y-10">
        <article
          v-for="m in modules"
          :id="m.slug"
          :key="m.slug"
          class="scroll-mt-28 rounded-2xl border border-ink-100 p-6 sm:p-8"
        >
          <h2 class="font-display text-2xl font-semibold">{{ m.title }}</h2>
          <p class="mt-2 text-ink-500">{{ m.summary }}</p>
          <ul class="mt-5 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in details[m.slug] || []"
              :key="item"
              class="flex gap-2 text-sm text-ink-700"
            >
              <span class="text-brand-600" aria-hidden="true">•</span>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
