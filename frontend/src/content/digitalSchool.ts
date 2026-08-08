import { brand } from './site'

export const DS_IMG = '/marketing/digital-school'

export const dsSubnav = [
  { id: 'overview', label: 'Overview', href: '/products/digital-school#overview' },
  { id: 'admissions', label: 'Admissions & Meta Leads', href: '/products/digital-school#admissions' },
  { id: 'fees', label: 'Fees & Accounting', href: '/products/digital-school#fees' },
  { id: 'payments', label: 'Online Payments & AutoPay', href: '/products/digital-school#payments' },
  { id: 'whatsapp', label: 'WhatsApp', href: '/products/digital-school#whatsapp' },
  { id: 'parent-app', label: 'Parent App', href: '/products/digital-school#parent-app' },
  { id: 'academics', label: 'Academics & Daily Ops', href: '/products/digital-school#academics' },
  { id: 'students', label: 'Students & Lifecycle', href: '/products/digital-school#students' },
  { id: 'certificates', label: 'Certificates', href: '/products/digital-school#certificates' },
  { id: 'admin', label: 'Admin & Security', href: '/products/digital-school#admin' },
  { id: 'modules', label: 'Modules', href: '/products/digital-school#modules' },
  { id: 'demo', label: 'Demo', href: '/products/digital-school#demo' },
] as const

export const dsDeepLinks = [
  { slug: 'admissions', title: 'Admissions & Meta Leads', href: '/products/digital-school/admissions' },
  { slug: 'fees', title: 'Fees & Accounting', href: '/products/digital-school/fees' },
  { slug: 'payments', title: 'Online Payments & AutoPay', href: '/products/digital-school/payments' },
  { slug: 'whatsapp', title: 'WhatsApp Business', href: '/products/digital-school/whatsapp' },
  { slug: 'parent-app', title: 'Parent App', href: '/products/digital-school/parent-app' },
  { slug: 'attendance', title: 'Attendance', href: '/products/digital-school/attendance' },
  { slug: 'academics', title: 'Academics & Daily Ops', href: '/products/digital-school/academics' },
  { slug: 'students', title: 'Students & Lifecycle', href: '/products/digital-school/students' },
  { slug: 'certificates', title: 'Certificates', href: '/products/digital-school/certificates' },
  { slug: 'admin', title: 'Admin & Security', href: '/products/digital-school/admin' },
  { slug: 'modules', title: 'All Modules', href: '/products/digital-school/modules' },
] as const

export const proofStrip = [
  { src: `${DS_IMG}/proof-login.png`, caption: 'Login', href: '#admin' },
  { src: `${DS_IMG}/proof-dashboard.png`, caption: 'Dashboard', href: '#overview' },
  { src: `${DS_IMG}/proof-students.png`, caption: 'Students', href: '#students' },
  { src: `${DS_IMG}/proof-admissions.png`, caption: 'Admissions', href: '#admissions' },
  { src: `${DS_IMG}/proof-fee-ledger.png`, caption: 'Fee Ledger', href: '#fees' },
  { src: `${DS_IMG}/proof-payments.png`, caption: 'Online Payments', href: '#payments' },
  { src: `${DS_IMG}/fees/reports-collection.png`, caption: 'Reports', href: '#fees' },
  { src: `${DS_IMG}/whatsapp/whatsapp-trends-phase1.png`, caption: 'WhatsApp Analytics', href: '#whatsapp' },
  { src: `${DS_IMG}/proof-parent-app.png`, caption: 'Parent App', href: '#parent-app' },
] as const

const AUTH = `${DS_IMG}/auth`
const ST = `${DS_IMG}/students`
const ADM = `${DS_IMG}/admissions`
const FE = `${DS_IMG}/fees`

export const feesGalleries = [
  {
    title: 'Fee Heads',
    note: 'Reusable fee categories — mandatory, online payment, carry as arrears, applicability (all / new admission)',
    images: [
      { src: `${FE}/fee-heads-list.png`, caption: 'Fee Heads — reusable across years' },
      { src: `${FE}/fee-head-add.png`, caption: 'Add Fee Head — online lock & arrears flags' },
      { src: `${FE}/fee-heads-access.png`, caption: 'Fee Heads — claim permissions' },
    ],
  },
  {
    title: 'Fee Structures',
    note: 'Year + standard + category blueprint — items, installments, gateway accounts, retro edit after assignment',
    images: [
      { src: `${FE}/fee-structures-list.png`, caption: 'Fee Structures — by standard & year' },
      { src: `${FE}/fee-structure-create.png`, caption: 'Create Structure — heads, amounts, installments' },
      { src: `${FE}/fee-structure-payment-account.png`, caption: 'Payment Account — CCAvenue / Easebuzz' },
      { src: `${FE}/fee-structure-edit-limited.png`, caption: 'Edit Structure (limited) after assignment' },
      { src: `${FE}/fee-structure-retro-edit.png`, caption: 'Retroactive Edit — add head with audit reason' },
      { src: `${FE}/fee-structures-access.png`, caption: 'Fee Structures — claim permissions' },
    ],
  },
  {
    title: 'Student Ledger — the collections cockpit',
    note:
      'Flagship fee operations screen: filter by class, see total / paid / remaining / arrears in ₹, open any student for a true ledger — not a spreadsheet export.',
    images: [
      {
        src: `${FE}/student-ledger-list.png`,
        caption: 'Student Ledger — class filters, due totals, WhatsApp day stats',
      },
      {
        src: `${FE}/student-fee-ledger-detail.png`,
        caption: 'Student Fee Ledger — heads, balances, overdue, Collect payment',
      },
      {
        src: `${FE}/fee-head-breakdown.png`,
        caption: 'Fee head breakdown — planned vs after override vs paid',
      },
      {
        src: `${FE}/transaction-history.png`,
        caption: 'Transaction history — receipts, heads, UPI / online methods',
      },
      {
        src: `${FE}/student-ledger-access.png`,
        caption: 'Student Ledger — claim permissions (collect, WhatsApp, links)',
      },
    ],
  },
  {
    title: 'Collect payment at the counter',
    note:
      'Record cash, UPI, or split modes against one head or many heads on a single receipt — with payment date that can differ from “today”.',
    images: [
      {
        src: `${FE}/collect-payment-one-head.png`,
        caption: 'Collect Payment — one fee head + payment modes',
      },
      {
        src: `${FE}/collect-payment-multi-head.png`,
        caption: 'Collect Payment — multiple fee heads, one receipt',
      },
    ],
  },
  {
    title: 'WhatsApp from the ledger — one student',
    note:
      'Side-by-side chat and fee context: payment links, arrear / installment / minimum reminders, AutoPay setup, and logged follow-ups — so collections never leave the ERP.',
    images: [
      {
        src: `${FE}/student-ledger-whatsapp.png`,
        caption: 'Ledger + WhatsApp thread with live payment link',
      },
      {
        src: `${FE}/ledger-fee-heads-chat.png`,
        caption: 'Fee heads panel beside the WhatsApp conversation',
      },
      {
        src: `${FE}/ledger-log-follow-up.png`,
        caption: 'Log follow-up — WhatsApp / call outcomes & next date',
      },
      {
        src: `${FE}/send-whatsapp-menu.png`,
        caption: 'Send WhatsApp — choose payment link, arrears, installment, AutoPay',
      },
      {
        src: `${FE}/send-payment-link.png`,
        caption: 'Send Payment Link — online heads only (counter-only excluded)',
      },
      {
        src: `${FE}/min-amount-reminder.png`,
        caption: 'Minimum Amount Reminder — monthly minimum + pay link',
      },
      {
        src: `${FE}/fee-installment-due.png`,
        caption: 'Fee Installment Due — overdue installment + urgency note',
      },
      {
        src: `${FE}/autopay-setup-guide.png`,
        caption: 'Auto Pay Setup Guide — parent e-mandate invite',
      },
    ],
  },
  {
    title: 'Bulk WhatsApp campaigns from the ledger',
    note:
      'Same templates at scale: respect ledger filters, show eligible counts, skip no-phone / active AutoPay, and enforce cooldowns (e.g. arrears every 10 days).',
    images: [
      {
        src: `${FE}/bulk-whatsapp-menu.png`,
        caption: 'Bulk WhatsApp — collect fees, arrears, Auto Pay campaigns',
      },
      {
        src: `${FE}/bulk-send-payment-links.png`,
        caption: 'Bulk Send Payment Links — eligible count from filters',
      },
      {
        src: `${FE}/bulk-min-amount-reminder.png`,
        caption: 'Bulk Minimum Amount + Payment Reminder — preview rows',
      },
      {
        src: `${FE}/bulk-installment-due.png`,
        caption: 'Bulk Fee Installment Due — overdue online heads + urgency note',
      },
      {
        src: `${FE}/bulk-arrear-reminders.png`,
        caption: 'Bulk Arrear Reminders — prior-year dues, 10-day cooldown',
      },
      {
        src: `${FE}/bulk-autopay-setup.png`,
        caption: 'Bulk Auto Pay Setup Guide — parents without active mandate',
      },
    ],
  },
  {
    title: 'Receipts — find, print, download',
    note:
      'Lookup by enrolled student (year / class / division) or jump straight to a receipt number / applicant. Payment history with totals, Online badges, and download / print actions — claim-gated.',
    images: [
      {
        src: `${FE}/receipts-list.png`,
        caption: 'Receipts — student search, payment history, download & print',
      },
      {
        src: `${FE}/receipts-access.png`,
        caption: 'Receipts — Access Info (Fees.View / Operate + academics filters)',
      },
    ],
  },
  {
    title: 'Online Payment Activity',
    note:
      'One-time gateway payments and UPI auto-debits in one ops screen: attempts / success / settlement KPIs, unsettled alerts, rich filters, failure reasons, follow-up calls, CSV export — plus Analytics for funnel, failures, volume, and gateway conversion.',
    images: [
      {
        src: `${FE}/online-payment-activity.png`,
        caption: 'Online Payment Activity — KPIs, settlement, auto-debit & failures',
      },
      {
        src: `${FE}/online-payment-analytics.png`,
        caption: 'Online Payment Analytics — funnel, conversion, gateway rates',
      },
      {
        src: `${FE}/online-payment-activity-access.png`,
        caption: 'Online Payment Activity — Fees.View / DoReconcile / FollowUp',
      },
    ],
  },
  {
    title: 'AutoPay Activity',
    note:
      'Mandate lifecycle in one Fees screen: Mandates, Pre-debit Notifications, Presentments, and Schedulers — plus Mandate Registration Analytics for adoption, at-risk cancelled mandates, and class / account uptake.',
    images: [
      {
        src: `${FE}/autopay-activity-mandates.png`,
        caption: 'AutoPay Activity — Mandates (authorized, bounced, expired)',
      },
      {
        src: `${FE}/autopay-activity-predebit.png`,
        caption: 'Pre-debit Notifications — today / overdue / notified status bar',
      },
      {
        src: `${FE}/autopay-activity-presentments.png`,
        caption: 'Presentments — scheduled debits, success / paused / cancelled',
      },
      {
        src: `${FE}/autopay-mandate-analytics.png`,
        caption: 'Mandate Registration Analytics — adoption & at-risk students',
      },
    ],
  },
  {
    title: 'Reports — read-only fee insights',
    note:
      'Year KPIs (expected / collected / outstanding / overdue) plus focused tabs: Collection, Student × Fee Heads, Defaulters, Attendance × Fees, Fee × Att. Bands, Collection Priority (Hot/Warm/Watch), Fee Overrides — export Excel / SMS ready.',
    images: [
      {
        src: `${FE}/reports-collection.png`,
        caption: 'Collection Report — KPIs, instruments, receipt rows',
      },
      {
        src: `${FE}/reports-student-fee-heads.png`,
        caption: 'Student × Fee Heads — matrix expected / paid / bal',
      },
      {
        src: `${FE}/reports-defaulters.png`,
        caption: 'Defaulters — overdue list + Export for SMS',
      },
      {
        src: `${FE}/reports-attendance-fees.png`,
        caption: 'Attendance × Fees — dues with attendance context',
      },
      {
        src: `${FE}/reports-fee-att-bands.png`,
        caption: 'Fee × Att. Bands — unpaid grouped by attendance %',
      },
      {
        src: `${FE}/reports-collection-priority.png`,
        caption: 'Collection Priority — Hot / Warm / Watch follow-up queue',
      },
      {
        src: `${FE}/reports-fee-overrides.png`,
        caption: 'Fee Overrides — planned vs override with audit reason',
      },
    ],
  },
  {
    title: 'Ledger · Gateway · Mandate analytics',
    note:
      'Deep analytics beyond tabular Reports: Student Ledger Analytics (collection health, modes, aging), Gateway Analytics (funnel, abandonment, Easebuzz/CCAvenue rates), and Mandate Registration Analytics (adoption overview + by class).',
    images: [
      {
        src: `${FE}/ledger-analytics.png`,
        caption: 'Student Ledger Analytics — collection rate, modes, overdue aging',
      },
      {
        src: `${FE}/gateway-analytics.png`,
        caption: 'Gateway Analytics — funnel, abandonment, provider rates',
      },
      {
        src: `${FE}/mandate-analytics-overview.png`,
        caption: 'Mandate Analytics — adoption, at-risk students & ₹',
      },
      {
        src: `${FE}/mandate-analytics-by-class.png`,
        caption: 'Mandate Analytics — adoption by standard / class',
      },
    ],
  },
  {
    title: 'Fees Follow-up · Promise Tracker · WhatsApp',
    note:
      'Collections CRM for accountants: Today’s Briefing, My Day call queues, All Pending, Promise Tracker (due / broken / upcoming / completed), Collection Calendar, and Communication History — with WhatsApp send, reply/unread filters, and promise payment links from every row.',
    images: [
      {
        src: `${FE}/followup-todays-briefing.png`,
        caption: "Today's Briefing — calls, promises, recovery KPIs",
      },
      {
        src: `${FE}/followup-my-day.png`,
        caption: 'My Day — today’s calls with WhatsApp / call actions',
      },
      {
        src: `${FE}/followup-all-pending.png`,
        caption: 'All Pending — critical queue, outcomes, WhatsApp',
      },
      {
        src: `${FE}/promise-tracker-due-today.png`,
        caption: 'Promise Tracker — Due Today + WhatsApp filters',
      },
      {
        src: `${FE}/promise-tracker-broken.png`,
        caption: 'Promise Tracker — Broken promises follow-up',
      },
      {
        src: `${FE}/promise-tracker-upcoming.png`,
        caption: 'Promise Tracker — Upcoming commitments',
      },
      {
        src: `${FE}/promise-tracker-completed.png`,
        caption: 'Promise Tracker — Completed promises',
      },
      {
        src: `${FE}/followup-collection-calendar.png`,
        caption: 'Collection Calendar — reminders & promises',
      },
      {
        src: `${FE}/followup-communication-history.png`,
        caption: 'Communication History — calls, promises, pay links',
      },
    ],
  },
] as const

const WA = `${DS_IMG}/whatsapp`

export const whatsappGalleries = [
  {
    title: 'WhatsApp Trends & Reports',
    note:
      'Phase 1 Trends: template delivery funnel, daily volume, standard-wise read rate, per-template report, and message drill-down. Phase 2 Insights: best send hours, weekday engagement, failure reasons, and actionable recommendations.',
    images: [
      {
        src: `${WA}/whatsapp-trends-phase1.png`,
        caption: 'WhatsApp Trends — Phase 1 delivery / read funnel',
      },
      {
        src: `${WA}/whatsapp-trends-phase2.png`,
        caption: 'WhatsApp Insights — best hours, failures, recommendations',
      },
    ],
  },
] as const

export const admissionsGalleries = [
  {
    title: 'Admissions Dashboard',
    note: 'Pipeline health — inquiries, calls due, enrollment pending, conversion gauges',
    images: [
      { src: `${ADM}/admissions-dashboard.png`, caption: 'Admissions Dashboard — KPIs & pipeline' },
      { src: `${ADM}/admissions-dashboard-access.png`, caption: 'Admissions Dashboard — claim permissions' },
    ],
  },
  {
    title: 'Inquiries · Facebook & Instagram Lead Ads',
    note:
      'Strong feature: Meta Lead Ads from Facebook & Instagram land directly as inquiries in the ERP — no Ads Manager export, no copy-paste. Walk-in, phone, WhatsApp, and portal share the same list.',
    images: [
      { src: `${ADM}/inquiries-list.png`, caption: 'Inquiries — FB / IG leads auto-created as inquiries' },
      { src: `${ADM}/inquiry-new.png`, caption: 'New Inquiry — walk-in / phone / portal entry' },
      { src: `${ADM}/inquiry-log-call.png`, caption: 'Log a Call — outcomes & next-call reminder' },
      { src: `${ADM}/inquiry-convert-candidate.png`, caption: 'Convert to Candidate — form fee collection' },
      { src: `${ADM}/inquiries-access.png`, caption: 'Inquiries — MetaLeadAds + WhatsApp claims' },
    ],
  },
  {
    title: 'Follow-ups',
    note: 'Admission CRM — overdue & today calls, outcome tags, next-call reminders so no lead is forgotten',
    images: [
      { src: `${ADM}/follow-ups-list.png`, caption: 'Follow-ups — calls due, overdue, outcomes' },
      { src: `${ADM}/follow-ups-log-this-call.png`, caption: 'Log This Call — quick outcome + next date' },
      { src: `${ADM}/follow-ups-log-a-call.png`, caption: 'Log a Call — full outcomes (fees, visits, enroll)' },
    ],
  },
  {
    title: 'Candidates',
    note: 'Serious admission cases — form fee, admission fee, documents, confirm, enroll',
    images: [
      { src: `${ADM}/candidates-list.png`, caption: 'Candidates list — progress badges' },
      { src: `${ADM}/candidate-pipeline.png`, caption: 'Candidate pipeline & available actions' },
      { src: `${ADM}/candidates-access.png`, caption: 'Candidates — claim permissions' },
    ],
  },
] as const

export const authGalleries = [
  {
    title: 'Secure staff login',
    note: 'School code → credentials → WhatsApp OTP for admin · vendor login separate',
    images: [
      { src: `${AUTH}/login-school-code.png`, caption: 'Enter school code' },
      { src: `${AUTH}/login-credentials.png`, caption: 'Username & password' },
      { src: `${AUTH}/login-otp-whatsapp.png`, caption: 'OTP via WhatsApp' },
      { src: `${AUTH}/login-forgot-password.png`, caption: 'Forgot password — WhatsApp reset' },
    ],
  },
] as const

export const studentsGalleries = [
  {
    title: 'Student List',
    note: 'Enrolled students — filters, profile, WhatsApp nudges, deactivate with fee warning',
    images: [
      { src: `${ST}/students-list.png`, caption: 'Students list — all enrolled records' },
      { src: `${ST}/student-profile.png`, caption: 'Student profile — overview & tabs' },
      { src: `${ST}/students-bulk-attendance-whatsapp.png`, caption: 'Bulk attendance WhatsApp' },
      { src: `${ST}/students-send-attendance-whatsapp.png`, caption: 'Send attendance WhatsApp (per student)' },
      { src: `${ST}/students-deactivate.png`, caption: 'Deactivate student — pending fees warning' },
      { src: `${ST}/students-access.png`, caption: 'Students — claim permissions' },
    ],
  },
  {
    title: 'Alumni',
    note: 'Graduated / historical records + admission promo WhatsApp',
    images: [
      { src: `${ST}/alumni-list.png`, caption: 'Alumni list' },
      { src: `${ST}/alumni-filtered.png`, caption: 'Alumni filtered by standard' },
      { src: `${ST}/alumni-admission-promo.png`, caption: 'Admission promo WhatsApp template' },
      { src: `${ST}/alumni-access.png`, caption: 'Alumni — claim permissions' },
    ],
  },
  {
    title: 'Division Assignment',
    note: 'Place students into the right division for fees, attendance, timetable',
    images: [
      { src: `${ST}/division-assignment.png`, caption: 'Division assignment workspace' },
      { src: `${ST}/division-assignment-access.png`, caption: 'Division assignment — claims' },
    ],
  },
  {
    title: 'Student Leaves',
    note: 'Review leave requests + reports by type and standard',
    images: [
      { src: `${ST}/student-leaves.png`, caption: 'Student leaves — pending / approved' },
      { src: `${ST}/student-leave-reports.png`, caption: 'Student leave reports' },
    ],
  },
  {
    title: 'Batch Promotion',
    note: 'Promote year-to-year with mapping, fee checks, arrears carry-forward',
    images: [
      { src: `${ST}/batch-promotion-step1.png`, caption: 'Batch promotion — years & class mapping' },
      { src: `${ST}/batch-promotion-preview.png`, caption: 'Promotion preview — eligible / graduate' },
      { src: `${ST}/batch-promotion-checklist.png`, caption: 'Promote & close year — validation checklist' },
    ],
  },
] as const

export const personas = [
  {
    title: 'Principal / Trustee',
    pain: 'Visibility into admissions, arrears, and campus health is scattered.',
    outcome: 'One dashboard for pipeline, collections, and multi-campus control.',
    href: '#admin',
  },
  {
    title: 'Accountant',
    pain: 'Excel fee sheets hide RTE rules, installments, and audit trails.',
    outcome: 'Real student ledgers, gateways, AutoPay, and ₹ reports that match reality.',
    href: '#fees',
  },
  {
    title: 'Teachers',
    pain: 'Attendance, diary, and marks live in notebooks and WhatsApp groups.',
    outcome: 'Session attendance, homework, exams, and leave in one teacher portal.',
    href: '#academics',
  },
  {
    title: 'Parents',
    pain: 'They only hear from school when fees are overdue.',
    outcome: 'Daily app for attendance, homework, notices — and one-tap online pay.',
    href: '#parent-app',
  },
] as const

export const admissionsFlow = [
  { step: 1, title: 'Facebook / Instagram ads reach parents', body: 'Meta campaigns target the right catchment for your school.' },
  { step: 2, title: 'Parent submits Lead Ad form', body: 'Facebook & Instagram Instant Forms capture interest in-app.' },
  { step: 3, title: 'Inquiry auto-created in Digital School', body: 'Lead becomes an Inquiry in the correct school tenant — no Ads Manager export, no Excel paste.' },
  { step: 4, title: 'Follow-ups & WhatsApp', body: 'Calls due / overdue board, outcome tags, next-call reminders, and visit-thanks WhatsApp.' },
  { step: 5, title: 'Convert to Candidate', body: 'Collect form fee, track documents, and move through the admission pipeline.' },
  { step: 6, title: 'Enroll with a clean audit trail', body: 'Confirm → Enroll Student — fees and academics start cleanly.' },
] as const

export const dailyOpsMosaic = [
  { title: 'Subjects', body: 'Standards, teachers, and subject mapping (staff claims).', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/subjects.png` },
  { title: 'Attendance', body: 'Session mark, monthly register, analytics & defaulters.', href: '/products/digital-school/attendance', thumb: `${DS_IMG}/academics/attendance-01.png` },
  { title: 'Homework', body: 'Assign, review, and analytics for teachers & office.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/homework-list.png` },
  { title: 'Class Diary', body: 'Observations and notes with parent read rates.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/class-diary-list.png` },
  { title: 'Timetable', body: 'Slots, substitutions, period duration per standard.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/timetable-slots.png` },
  { title: 'Assignments', body: 'Create, publish, and grade with marks & remarks.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/assignments-list.png` },
  { title: 'Exams & Tests', body: 'Unit tests, marks entry, and progress by class.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/exams-list.png` },
  { title: 'Behaviour Notes', body: 'Appreciations & concerns — visible to parents when needed.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/behaviour-notes-list.png` },
  { title: 'Homework Analytics', body: 'Completion by subject, teacher, and at-risk students.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/homework-analytics.png` },
  { title: 'Attendance Analytics', body: 'School-wide trends and defaulter identification.', href: '/products/digital-school/attendance', thumb: `${DS_IMG}/academics/attendance-analytics.png` },
  { title: 'Monthly Register', body: 'Government-format printable / PDF register.', href: '/products/digital-school/attendance', thumb: `${DS_IMG}/academics/attendance-monthly-register.png` },
  { title: 'Exam Marks Entry', body: 'Bulk marks, absent flag, grades & remarks.', href: '/products/digital-school/academics', thumb: `${DS_IMG}/academics/exams-marks-entry.png` },
] as const

export const moduleIndex = [
  { title: 'Admissions & Meta Leads', summary: 'Inquiry CRM, Meta Instant Forms, walk-ins, enrollment.', href: '/products/digital-school/admissions', tags: ['admissions', 'meta', 'crm'] },
  { title: 'Fees & Accounting', summary: 'Ledger, follow-up/promise tracker with WhatsApp, reports, AutoPay.', href: '/products/digital-school/fees', tags: ['fees', 'follow-up', 'whatsapp'] },
  { title: 'Online Payments & AutoPay', summary: 'Gateway activity, AutoPay mandates, settlement, analytics.', href: '/products/digital-school/payments', tags: ['payments', 'autopay', 'easebuzz'] },
  { title: 'WhatsApp Business', summary: 'Templates, inbox, Trends & Insights (Phase 1 + 2).', href: '/products/digital-school/whatsapp', tags: ['whatsapp', 'meta'] },
  { title: 'Parent Mobile App', summary: 'Multi-child, fees, homework, notices, School Connect.', href: '/products/digital-school/parent-app', tags: ['parent', 'android', 'app'] },
  { title: 'Attendance', summary: 'Session attendance with draft, submit, and lock.', href: '/products/digital-school/attendance', tags: ['attendance', 'ops'] },
  { title: 'Academics & Daily Ops', summary: 'Homework, diary, exams, timetable, gallery, leave.', href: '/products/digital-school/academics', tags: ['academics', 'ops'] },
  { title: 'Students & Lifecycle', summary: 'Profiles, promotion, alumni, arrears carry-forward.', href: '/products/digital-school/students', tags: ['students', 'alumni'] },
  { title: 'Certificates', summary: 'Bonafide, TC, character, migration — PDF with fee gates.', href: '/products/digital-school/certificates', tags: ['certificates', 'pdf'] },
  { title: 'Admin & Security', summary: 'Roles, feature flags, multi-tenant Azure, CSV import.', href: '/products/digital-school/admin', tags: ['admin', 'security', 'azure'] },
] as const

export const faqItems = [
  {
    q: 'Do we replace Excel fee sheets?',
    a: 'Yes. Fee heads, structures, assignment, and student ledgers replace spreadsheet chaos — with installments, categories, and audit-friendly overrides.',
  },
  {
    q: 'Can RTE students be handled correctly?',
    a: 'RTE / Scholarship / Staff Ward / School Adopted eligibility is modeled in fee structures so obligations stay accurate.',
  },
  {
    q: 'Is WhatsApp official Business API?',
    a: `${brand.productName} is built for WhatsApp Business templates, inbox, and delivery/read status inside the ERP — not personal WhatsApp forwards.`,
  },
  {
    q: 'Can parents pay without coming to the office?',
    a: 'Yes. Online payment links, CCAvenue / Easebuzz checkout, and UPI AutoPay / eNACH so parents pay from the Android app or WhatsApp.',
  },
  {
    q: 'Do you support multi-branch / multi-school?',
    a: 'Multi-tenant isolation with vendor provisioning and per-school feature flags — designed for groups and societies.',
  },
  {
    q: 'Where does data live?',
    a: 'Azure-hosted SaaS: Static Web Apps, App Service API, Azure SQL, and Blob Storage — with claim-based permissions and audit trails.',
  },
] as const

export interface DeepPageContent {
  slug: string
  title: string
  eyebrow: string
  headline: string
  sub: string
  images: { src: string; caption: string }[]
  /** Optional grouped screenshot galleries (staff / claim-gated modules) */
  galleries?: { title: string; note?: string; images: { src: string; caption: string }[] }[]
  checklist: string[]
  faq: { q: string; a: string }[]
}

const AC = `${DS_IMG}/academics`

/** Staff/claim-gated Academics screens (not parent app) */
export const academicsGalleries = [
  {
    title: 'Subjects',
    note: 'Staff with subject / academic setup claims',
    images: [{ src: `${AC}/subjects.png`, caption: 'Subjects — standards, teachers, and class mapping' }],
  },
  {
    title: 'Attendance',
    note: 'Teachers & office — session mark, register, analytics, defaulters',
    images: [
      { src: `${AC}/attendance-01.png`, caption: 'Attendance — take session' },
      { src: `${AC}/attendance-02.png`, caption: 'Attendance — class session view' },
      { src: `${AC}/attendance-03.png`, caption: 'Attendance — submit / lock flow' },
      { src: `${AC}/attendance-monthly-register.png`, caption: 'Monthly attendance register (printable / PDF)' },
      { src: `${AC}/attendance-analytics.png`, caption: 'Attendance analytics — school-wide overview' },
      { src: `${AC}/attendance-defaulters.png`, caption: 'Defaulters & at-risk students' },
    ],
  },
  {
    title: 'Homework',
    note: 'Teachers assign; office sees analytics & review',
    images: [
      { src: `${AC}/homework-list.png`, caption: 'Homework list — assign & manage' },
      { src: `${AC}/homework-analytics.png`, caption: 'Homework analytics — overview' },
      { src: `${AC}/homework-subjects-teachers.png`, caption: 'Homework analytics — subjects & teachers' },
      { src: `${AC}/homework-students-parents.png`, caption: 'Homework analytics — lowest completion' },
      { src: `${AC}/homework-assign.png`, caption: 'Assign homework modal' },
      { src: `${AC}/homework-review.png`, caption: 'Homework review — approve / redo' },
    ],
  },
  {
    title: 'Class Diary',
    note: 'Teachers & coordinators — observations to parents',
    images: [
      { src: `${AC}/class-diary-list.png`, caption: 'Class diary entries' },
      { src: `${AC}/class-diary-analytics.png`, caption: 'Class diary analytics — overview' },
      { src: `${AC}/class-diary-teachers.png`, caption: 'Class diary — teacher activity' },
      { src: `${AC}/class-diary-new-entry.png`, caption: 'New diary entry' },
    ],
  },
  {
    title: 'Timetable',
    note: 'Academic coordinators — slots, substitutions, period duration',
    images: [
      { src: `${AC}/timetable-slots.png`, caption: 'Timetable slots & day view' },
      { src: `${AC}/timetable-add-slot.png`, caption: 'Add timetable slot' },
      { src: `${AC}/timetable-period-duration.png`, caption: 'Period duration per standard' },
    ],
  },
  {
    title: 'Assignments',
    note: 'Teachers create, publish, and grade assignments (claim-gated)',
    images: [
      { src: `${AC}/assignments-list.png`, caption: 'Assignments list — create, manage, grade' },
      { src: `${AC}/assignments-create.png`, caption: 'Create assignment' },
      { src: `${AC}/assignments-grade.png`, caption: 'Grade assignment — marks & remarks' },
    ],
  },
  {
    title: 'Exams & Tests',
    note: 'Create exams, enter marks, track progress by class',
    images: [
      { src: `${AC}/exams-list.png`, caption: 'Exams & tests list' },
      { src: `${AC}/exams-create.png`, caption: 'Create exam' },
      { src: `${AC}/exams-marks-entry.png`, caption: 'Exam marks entry' },
    ],
  },
  {
    title: 'Behaviour Notes',
    note: 'Appreciations & concerns — optional parent visibility / acknowledgement',
    images: [
      { src: `${AC}/behaviour-notes-list.png`, caption: 'Behaviour notes list' },
      { src: `${AC}/behaviour-notes-edit.png`, caption: 'Edit behaviour note' },
      { src: `${AC}/behaviour-notes-add.png`, caption: 'Add behaviour note' },
    ],
  },
] as const

export const deepPages: Record<string, DeepPageContent> = {
  admissions: {
    slug: 'admissions',
    title: 'Admissions & Meta Leads',
    eyebrow: 'Admissions · Meta Lead Ads',
    headline: 'Facebook & Instagram Lead Ads become Inquiries automatically.',
    sub: 'Strong feature: Meta Lead Ads from Facebook and Instagram are directly integrated — each lead is created as an Inquiry in Digital School. No Ads Manager download. No copy-paste. Then follow up with calls, WhatsApp, convert, and enroll.',
    images: [
      { src: `${ADM}/inquiries-list.png`, caption: 'FB / IG Lead Ads → Inquiry (auto-created)' },
      { src: `${ADM}/admissions-dashboard.png`, caption: 'Admissions Dashboard — pipeline & KPIs' },
      { src: `${ADM}/follow-ups-list.png`, caption: 'Follow-ups — overdue & next-call reminders' },
      { src: `${ADM}/candidates-list.png`, caption: 'Candidates — form fee, docs, enrolled' },
    ],
    galleries: admissionsGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'Facebook & Instagram Lead Ads directly integrated — leads auto-create as Inquiries',
      'meta_leadgen IDs visible on each social lead — full traceability',
      'No Ads Manager export / no Excel paste into the CRM',
      'Admissions Dashboard: inquiries, calls due, enrollment pending, conversion gauges',
      'Inquiry CRM: walk-in, phone, WhatsApp, portal + FB/IG sources in one list',
      'Follow-ups workspace: calls today, overdue, outcomes, next-call reminders',
      'Log Call with rich outcomes (visit, fees, documents, ready to enroll)',
      'Convert to Candidate with form-fee collection (modes + override)',
      'Candidate pipeline: form fee → admission fee → documents → confirm → enroll',
      'Visit-thanks WhatsApp for inquiries (claim-gated)',
      'Claim-based access per screen (Dashboard / Inquiries / Candidates)',
    ],
    faq: [
      {
        q: 'How do Facebook / Instagram leads enter the system?',
        a: 'Meta Lead Ads are directly integrated. When a parent submits a Lead Ad form on Facebook or Instagram, Digital School creates an Inquiry in the correct school tenant automatically — tagged with the Meta lead ID. Your team works one list, not Ads Manager CSVs.',
      },
      {
        q: 'How do we keep leads from going cold?',
        a: 'The Follow-ups screen tracks calls due today, overdue reminders, outcomes (No Response, Comparing Schools, Visited School, etc.), and next-call dates so the admission team never loses a lead.',
      },
      { q: 'Can walk-ins use the same pipeline?', a: 'Yes. Walk-in, call, portal, and WhatsApp sources share the same Inquiry → Follow-up → Candidate → Enroll flow.' },
      { q: 'Is form fee separate from tuition?', a: 'Yes. Form fee and admission fee are tracked in the admissions pipeline, separate from the tuition ledger.' },
    ],
  },
  fees: {
    slug: 'fees',
    title: 'Fees & Accounting',
    eyebrow: 'Fees · Ledger · Follow-up · Reports',
    headline: 'From fee blueprint to WhatsApp pay link — one Student Ledger.',
    sub: 'Setup defines heads and structures. The Student Ledger is where accountants live daily. Fees Follow-up & Promise Tracker turn outstanding balances into a staff CRM — My Day queues, broken promises, Collection Calendar — with WhatsApp messaging and payment links on every row.',
    images: [
      { src: `${FE}/followup-todays-briefing.png`, caption: "Today's Briefing — calls, promises, recovery" },
      { src: `${FE}/followup-my-day.png`, caption: 'My Day — WhatsApp & call actions' },
      { src: `${FE}/promise-tracker-broken.png`, caption: 'Promise Tracker — broken promises' },
      { src: `${FE}/ledger-analytics.png`, caption: 'Ledger Analytics — collection health' },
      { src: `${FE}/reports-collection.png`, caption: 'Reports — expected, collected, overdue KPIs' },
    ],
    galleries: feesGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'Fee heads & structures (year + standard + category, RTE / Regular)',
      'Student Ledger: this-year total / paid / remaining + prior-year arrears',
      'Counter collection + Receipts + Online / AutoPay activity',
      "Fees Follow-up: Today's Briefing, My Day, All Pending critical queue",
      'Promise Tracker: Due Today / Broken / Upcoming / Completed',
      'WhatsApp from the row — filters for parent replied & unread',
      'Promise payment links logged in Communication History',
      'Collection Calendar — reminders & promises at a glance',
      'Reports + Ledger / Gateway / Mandate analytics',
      'Bulk WhatsApp campaigns with eligible counts & cooldowns',
    ],
    faq: [
      {
        q: 'What makes Student Ledger different from Excel?',
        a: 'Each student has a live obligation vs payment ledger — heads, overrides, arrears, receipts, and WhatsApp pay links in one place. Filters and bulk sends work on the same numbers the accountant sees.',
      },
      {
        q: 'What is Fees Follow-up / Promise Tracker?',
        a: "Today's Briefing shows calls, promises, broken promises, and recovery. My Day and All Pending are staff queues with WhatsApp, call, and note actions. Promise Tracker tracks Due Today / Broken / Upcoming / Completed with WhatsApp filters (parent replied, unread). Collection Calendar and Communication History keep the audit trail — including promise payment links sent on WhatsApp.",
      },
      {
        q: 'How do we reprint an old receipt?',
        a: 'Open Receipts, search by enrolled student (year / class / division) or paste a receipt number / applicant. Download or print from the payment history — Online vs counter payments are badged clearly.',
      },
      {
        q: 'Where do we see failed online payments and bank settlement?',
        a: 'Online Payment Activity lists every gateway attempt (one-time and UPI auto-debit) with collection status, settlement, gateway error text, and follow-up calls. Analytics shows funnel conversion and gateway rates; Refresh settlement data pulls Easebuzz payout status.',
      },
      {
        q: 'How do we monitor UPI AutoPay mandates?',
        a: 'AutoPay Activity covers the full lifecycle — Mandates, Pre-debit Notifications, Presentments, and Schedulers. Mandate Registration Analytics shows adoption vs fee-due students, failed registrations, and at-risk ₹ when parents cancel but still owe.',
      },
      {
        q: 'What fee reports are included?',
        a: 'Reports opens with year KPIs (expected / collected / outstanding / overdue), then tabs for Collection (by instrument), Student × Fee Heads matrix, Defaulters (SMS export), Attendance × Fees, Fee × attendance bands, Collection Priority (Hot/Warm/Watch/Low), and Fee Overrides with who/when/reason.',
      },
      {
        q: 'What is Ledger / Gateway / Mandate analytics?',
        a: 'Student Ledger Analytics shows collection health, mode mix, and overdue aging. Gateway Analytics (from Online Payment Activity) shows intent→checkout funnel, abandonment, and Easebuzz/CCAvenue rates. Mandate Registration Analytics covers Autopay adoption, at-risk cancelled mandates, and uptake by class.',
      },
      {
        q: 'Can we message a whole class about fees?',
        a: 'Yes. Bulk WhatsApp from the ledger uses your current filters (year, standard, pending only, etc.), shows eligible counts, and supports payment links, installment dues, minimum amount, arrears, and AutoPay setup campaigns. Follow-up / Promise Tracker adds per-case WhatsApp with reply and unread filters.',
      },
      {
        q: 'Do all fee heads go on the online payment link?',
        a: 'No. Only heads marked for online payment are included. Counter-only heads are called out so parents are not asked to pay them online.',
      },
      {
        q: 'Can we change amounts after students are assigned?',
        a: 'Money fields lock after assignment for safety. Use Retro Edit (with an audit reason) on the structure; the ledger reflects controlled changes. Fee Overrides report shows every reduction with staff and reason.',
      },
    ],
  },
  payments: {
    slug: 'payments',
    title: 'Online Payments & AutoPay',
    eyebrow: 'Payments · Gateway ops',
    headline: 'Smart & secure payment integration.',
    sub: 'CCAvenue and Easebuzz for checkout. Online Payment Activity for gateway ops. AutoPay Activity for the full mandate lifecycle — plus Mandate Registration Analytics (overview and by class) and Gateway Analytics for funnel conversion.',
    images: [
      { src: `${FE}/online-payment-activity.png`, caption: 'Online Payment Activity — KPIs & settlement' },
      { src: `${FE}/gateway-analytics.png`, caption: 'Gateway Analytics — funnel & provider rates' },
      { src: `${FE}/autopay-activity-mandates.png`, caption: 'AutoPay Activity — Mandates' },
      { src: `${FE}/mandate-analytics-overview.png`, caption: 'Mandate Analytics — adoption & at-risk' },
      { src: `${FE}/mandate-analytics-by-class.png`, caption: 'Mandate Analytics — by class' },
    ],
    galleries: [
      {
        title: 'Online Payment Activity (Fees menu)',
        note:
          'Staff ops cockpit for one-time payments and UPI auto-debits — collection status and bank settlement in one place, with Gateway Analytics for drop-off and provider rates.',
        images: [
          {
            src: `${FE}/online-payment-activity.png`,
            caption: 'Activity — attempts, success, pending settlement, failures',
          },
          {
            src: `${FE}/gateway-analytics.png`,
            caption: 'Gateway Analytics — funnel, abandonment, Easebuzz / CCAvenue',
          },
          {
            src: `${FE}/online-payment-analytics.png`,
            caption: 'Online Payment Analytics — conversion & one-time vs AutoPay',
          },
          {
            src: `${FE}/online-payment-activity-access.png`,
            caption: 'Access — Fees.View, DoReconcile, FeeCollection.FollowUp',
          },
        ],
      },
      {
        title: 'AutoPay Activity (Fees menu)',
        note:
          'Mandate lifecycle, pre-debit notifications, presentments, and schedulers — plus Mandate Registration Analytics (overview and by class).',
        images: [
          {
            src: `${FE}/autopay-activity-mandates.png`,
            caption: 'Mandates — authorized, bounced, expired, cancelled',
          },
          {
            src: `${FE}/autopay-activity-predebit.png`,
            caption: 'Pre-debit Notifications — schedule window & notify status',
          },
          {
            src: `${FE}/autopay-activity-presentments.png`,
            caption: 'Presentments — planned debits through success / failed',
          },
          {
            src: `${FE}/mandate-analytics-overview.png`,
            caption: 'Mandate Analytics — adoption, cancelled, at-risk ₹',
          },
          {
            src: `${FE}/mandate-analytics-by-class.png`,
            caption: 'Mandate Analytics — active mandates by standard',
          },
        ],
      },
    ],
    checklist: [
      'Gateways: CCAvenue + Easebuzz',
      'UPI · Cards · NetBanking · Wallets',
      'UPI AutoPay / e-mandate for parents',
      'AutoPay Activity: Mandates, Pre-debit, Presentments, Schedulers',
      'Mandate Analytics: overview + by class / at-risk dues',
      'Online Payment Activity: KPIs, filters, failure reasons, CSV export',
      'Gateway Analytics: funnel, abandonment, provider conversion',
      'Settlement refresh + unsettled alerts (Easebuzz payout)',
      'Follow-up calls from bounced / failed payments',
      'Online payment links (including WhatsApp)',
      'Gateway-compliant checkout via trusted Indian PGs',
    ],
    faq: [
      {
        q: 'Do you store card data on Arvion servers?',
        a: 'Checkout runs through CCAvenue / Easebuzz — gateway-compliant flows. We track payment activity, settlement, and mandates in the ERP.',
      },
      {
        q: 'What is Online Payment Activity?',
        a: 'Under Fees, it is the ops screen for every online attempt — one-time and auto-debit — with success/failure, pending settlement, gateway error detail, and call follow-ups. Gateway Analytics adds conversion funnel and provider rates.',
      },
      {
        q: 'What is AutoPay Activity?',
        a: 'The mandate ops cockpit: Mandates, Pre-debit Notifications, Presentments, and Schedulers — with Mandate Registration Analytics for adoption, failed registrations, by-class uptake, and at-risk students who cancelled but still owe fees.',
      },
      {
        q: 'Can parents set AutoPay?',
        a: 'Yes. Parents set up UPI e-mandate; AutoPay Activity tracks the mandate and presentments, while successful auto-debits also appear in Online Payment Activity.',
      },
    ],
  },
  whatsapp: {
    slug: 'whatsapp',
    title: 'WhatsApp Business',
    eyebrow: 'WhatsApp · Trends & Insights',
    headline: 'Seamless Meta + WhatsApp for Digital School.',
    sub: 'Connect. Communicate. Engage — templates, inbox, receipts, and WhatsApp Trends & Reports inside the ERP. Phase 1 shows delivery funnels; Phase 2 adds smart diagnostics and send-time recommendations.',
    images: [
      { src: `${WA}/whatsapp-trends-phase1.png`, caption: 'WhatsApp Trends — delivery / read funnel' },
      { src: `${WA}/whatsapp-trends-phase2.png`, caption: 'WhatsApp Insights — hours, failures, recommendations' },
      { src: `${DS_IMG}/whatsapp-integration.png`, caption: 'WhatsApp Business integration with Digital School' },
    ],
    galleries: whatsappGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'Fee reminder templates with payment links',
      'Two-way staff ↔ parent inbox inside the ERP',
      'Receipt text/PDF within the 24-hour window',
      'Delivery and read status',
      'Fees Follow-up / Promise Tracker — WhatsApp from My Day & queues',
      'WhatsApp Trends (Phase 1): daily volume, standard-wise read %, template report',
      'WhatsApp Insights (Phase 2): best hours, weekday engagement, failure reasons',
      'Actionable recommendations (critical / warning / info)',
      'Message drill-down with student, class, parent mobile',
      'Arrear / AutoPay / app-update template nudges',
      'Admission acknowledgment templates',
    ],
    faq: [
      { q: 'Is this personal WhatsApp?', a: 'No — Business API templates and inbox designed for school operations.' },
      { q: 'Can we send fee receipts on WhatsApp?', a: 'Yes, within the 24-hour messaging window (text/PDF).' },
      {
        q: 'What is WhatsApp Trends & Reports?',
        a: 'Phase 1 Trends shows templates sent, unique parents, delivery/read/failure rates, daily charts, standard-wise read rate, per-template funnel, and message drill-down. Phase 2 Insights adds best send hours, weekday engagement, top failure reasons, and auto recommendations.',
      },
      {
        q: 'How does Fees Follow-up use WhatsApp?',
        a: 'My Day, All Pending, and Promise Tracker put WhatsApp on every row — with filters for parent replied and unread. Communication History logs outcomes and promise payment links sent on WhatsApp.',
      },
    ],
  },
  'parent-app': {
    slug: 'parent-app',
    title: 'Parent Mobile App',
    eyebrow: 'Parent App',
    headline: 'Parents open the app for the child’s day — fees become natural.',
    sub: 'Multi-child Android experience for attendance, homework, fees, notices, and School Connect.',
    images: [{ src: `${DS_IMG}/parent-app-screens.png`, caption: 'Home · Profile · Homework · Fees · Notices · More' }],
    checklist: [
      'Multi-child switcher',
      'Dashboard: attendance, timetable, homework, notes, events, fee strip',
      'Pay fees online + AutoPay setup',
      'Notices, gallery, calendar, exams, behaviour',
      'Student leave requests',
      'Certificates requests',
      'School Connect helpdesk tickets',
      'Android on Play Store · iOS coming soon',
    ],
    faq: [
      { q: 'Where do I download the app?', a: `Get Digital School on Google Play: ${brand.playStoreUrl}` },
      { q: 'Can one parent manage siblings?', a: 'Yes — multi-child switcher on the home experience.' },
    ],
  },
  attendance: {
    slug: 'attendance',
    title: 'Attendance',
    eyebrow: 'Academics · Staff',
    headline: 'Session attendance, government-format registers, and defaulter analytics.',
    sub: 'For teachers and office staff with attendance claims — not the parent app. Draft → Submit → Lock, monthly printable registers, and Principal-ready analytics.',
    images: [
      { src: `${AC}/attendance-01.png`, caption: 'Take / manage class attendance' },
      { src: `${AC}/attendance-monthly-register.png`, caption: 'Monthly attendance register — printable / PDF' },
    ],
    galleries: [
      {
        title: 'Attendance screens',
        note: 'Staff & teachers with attendance claims',
        images: [
          { src: `${AC}/attendance-01.png`, caption: 'Attendance session' },
          { src: `${AC}/attendance-02.png`, caption: 'Class attendance view' },
          { src: `${AC}/attendance-03.png`, caption: 'Submit & lock' },
          { src: `${AC}/attendance-monthly-register.png`, caption: 'Monthly register (govt format)' },
          { src: `${AC}/attendance-analytics.png`, caption: 'School-wide analytics' },
          { src: `${AC}/attendance-defaulters.png`, caption: 'Defaulters & at-risk' },
        ],
      },
    ],
    checklist: [
      'Class-based session attendance (claim-gated for staff)',
      'Draft → Submit → Lock workflow',
      'Government-format monthly register — printable / PDF',
      'School-wide attendance analytics & trends',
      'Defaulters & at-risk identification by standard',
      'Student leave integration (attendance-aware)',
      'Summary visible to parents on the Android app (read-only)',
    ],
    faq: [
      { q: 'Who can mark attendance?', a: 'Staff and teachers with the attendance claim — parents only see the child’s attendance on the app.' },
      { q: 'Can teachers edit after lock?', a: 'Lock protects submitted sessions; corrections follow your school’s controlled process.' },
    ],
  },
  academics: {
    slug: 'academics',
    title: 'Academics & Daily Ops',
    eyebrow: 'Academics · Staff',
    headline: 'Subjects, attendance, homework, class diary, and timetable — for staff with claims.',
    sub: 'These web screens are for teachers, coordinators, and office roles. Parents consume homework, diary, and attendance through the Android app — not these admin UIs.',
    images: [
      { src: `${AC}/subjects.png`, caption: 'Subjects setup' },
      { src: `${AC}/homework-list.png`, caption: 'Homework management' },
      { src: `${AC}/class-diary-list.png`, caption: 'Class diary' },
      { src: `${AC}/timetable-slots.png`, caption: 'Timetable' },
    ],
    galleries: academicsGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'Subjects mapped to standards, divisions, and teachers',
      'Attendance sessions, monthly register, analytics & defaulters',
      'Homework assign, review (approve/redo), and analytics',
      'Assignments — create, publish, grade with marks & remarks',
      'Exams & tests — create, marks entry, progress tracking',
      'Behaviour notes — appreciation / concern with parent visibility',
      'Class diary — appreciation, observation, concern, general',
      'Diary analytics — teacher activity & read rates',
      'Timetable slots, substitutions, period duration per standard',
      'Claim-based access: only roles with the right permissions see each screen',
      'Parent app shows the child-facing slice (homework, diary, attendance, behaviour)',
    ],
    faq: [
      { q: 'Can parents open these web screens?', a: 'No. Subjects, marking attendance, assign homework, diary entry, and timetable setup are staff/claim-gated. Parents use the Android app.' },
      { q: 'Do parents see homework the same day?', a: 'Once assigned, homework and diary surface on the parent Android app alongside attendance and notices.' },
    ],
  },
  students: {
    slug: 'students',
    title: 'Students & Lifecycle',
    eyebrow: 'Students · Staff',
    headline: 'List, profile, alumni, division, leaves, and year-end promotion.',
    sub: 'Staff/claim-gated student lifecycle — rich profiles, WhatsApp attendance nudges, alumni promo, and batch promotion with fee structure checks.',
    images: [
      { src: `${ST}/students-list.png`, caption: 'Students list' },
      { src: `${ST}/student-profile.png`, caption: 'Student profile — overview' },
      { src: `${ST}/division-assignment.png`, caption: 'Division assignment' },
      { src: `${ST}/batch-promotion-preview.png`, caption: 'Batch promotion preview' },
    ],
    galleries: studentsGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'Student list with filters, export CSV, claim-based access',
      'Rich profile tabs: academics, family, fees, attendance, exams, documents, health, history',
      'Bulk & per-student low-attendance WhatsApp reminders',
      'Deactivate / mark left with pending-fee warnings',
      'Alumni records + admission promo WhatsApp template',
      'Division assignment workspace (bulk + per student)',
      'Student leave review & leave reports',
      'Batch promotion: mapping, preview, fee structure validation, arrears carry-forward',
      'Year close after successful promotion (all-or-none)',
    ],
    faq: [
      { q: 'Do fee arrears carry on promotion?', a: 'Promotion supports arrears carry-forward so unpaid balances marked to carry become next-year arrears.' },
      { q: 'Who can assign divisions?', a: 'Staff with Students.AssignDivision (or Edit) claims — shown in the Access panel.' },
    ],
  },
  certificates: {
    slug: 'certificates',
    title: 'Certificates',
    eyebrow: 'Certificates',
    headline: 'Bonafide to Leaving/TC — PDF, with fee clearance when it matters.',
    sub: 'School and staff certificate suite with parent/teacher request flows.',
    images: [{ src: `${DS_IMG}/certificates-suite.png`, caption: 'Certificate generation suite' }],
    checklist: [
      'Bonafide, Leaving/TC, Character, Migration, and more',
      'PDF generation',
      'Fee clearance gate for leaving certificates',
      'Parent/teacher certificate requests',
      'Staff certificate types',
    ],
    faq: [
      { q: 'Can TC be blocked on dues?', a: 'Leaving/TC can require fee clearance so office stays protected.' },
    ],
  },
  admin: {
    slug: 'admin',
    title: 'Admin & Security',
    eyebrow: 'Admin',
    headline: 'Secure login, roles, flags, and Azure multi-tenant isolation.',
    sub: 'School-code login, WhatsApp OTP for admin, vendor console, claim-based permissions, and CSV onboarding.',
    images: [
      { src: `${AUTH}/login-school-code.png`, caption: 'School code login' },
      { src: `${AUTH}/login-otp-whatsapp.png`, caption: 'Admin OTP via WhatsApp' },
    ],
    galleries: authGalleries.map((g) => ({
      title: g.title,
      note: g.note,
      images: g.images.map((img) => ({ src: img.src, caption: img.caption })),
    })),
    checklist: [
      'School code → username/password staff login',
      'WhatsApp OTP verification for secure admin access',
      'Forgot password via registered mobile + WhatsApp',
      'Separate vendor admin login',
      'Roles + fine-grained claim-based permissions',
      'Feature flags per school (vendor-controlled)',
      'Multi-tenant isolation on Azure',
      'Vendor admin for provisioning schools & integrations',
      'CSV/Excel import (students, teachers, fees, subjects)',
      'Dashboards and audit trails',
    ],
    faq: [
      { q: 'How do staff sign in?', a: 'Enter the school code provided by your administrator, then username and password. Admin access can require a WhatsApp OTP.' },
      { q: 'Can two schools share one login realm?', a: 'Tenants are isolated; vendor admin provisions schools and features separately.' },
    ],
  },
}
