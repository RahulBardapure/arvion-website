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
  { src: `${DS_IMG}/proof-reports.png`, caption: 'Reports', href: '#fees' },
  { src: `${DS_IMG}/proof-whatsapp-analytics.png`, caption: 'WhatsApp Analytics', href: '#whatsapp' },
  { src: `${DS_IMG}/proof-parent-app.png`, caption: 'Parent App', href: '#parent-app' },
] as const

const AUTH = `${DS_IMG}/auth`
const ST = `${DS_IMG}/students`
const ADM = `${DS_IMG}/admissions`

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
  { title: 'Fees & Accounting', summary: 'Structures, RTE categories, ledgers, receipts, reports.', href: '/products/digital-school/fees', tags: ['fees', 'ledger', 'rte'] },
  { title: 'Online Payments & AutoPay', summary: 'CCAvenue, Easebuzz, UPI, AutoPay, eNACH, payment links.', href: '/products/digital-school/payments', tags: ['payments', 'autopay', 'upi'] },
  { title: 'WhatsApp Business', summary: 'Templates, inbox, receipts, delivery analytics.', href: '/products/digital-school/whatsapp', tags: ['whatsapp', 'meta'] },
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
    eyebrow: 'Fees',
    headline: 'Fees as a real ledger — not a spreadsheet.',
    sub: 'Fee heads, structures, RTE categories, student obligation vs payment, installments, and immutable receipts.',
    images: [
      { src: `${DS_IMG}/fees-ledger.png`, caption: 'Student ledger — total / paid / remaining' },
      { src: `${DS_IMG}/fees-reports.png`, caption: 'Outstanding, collection, and overdue reports (₹)' },
    ],
    checklist: [
      'Fee heads & structures by academic year + class + division + student category',
      'RTE / Scholarship / Staff Ward / School Adopted eligibility',
      'Fee assignment workspace',
      'Student ledger: obligation ≠ payment',
      'Installments, discounts, fines, arrears',
      'Counter payments + immutable sequential PDF receipts',
      'Correction queue / overrides with audit',
      'Outstanding / collection / overdue fee reports',
    ],
    faq: [
      { q: 'Can we keep admission fees separate from tuition?', a: 'Yes. Admission fee tracking is modeled separately from the tuition ledger.' },
      { q: 'Are receipt numbers sequential and immutable?', a: 'Counter receipts are sequential PDFs designed for audit-friendly collections.' },
    ],
  },
  payments: {
    slug: 'payments',
    title: 'Online Payments & AutoPay',
    eyebrow: 'Payments',
    headline: 'Smart & secure payment integration.',
    sub: 'Multiple gateways. One seamless experience — UPI, cards, netbanking, wallets, AutoPay, and eNACH.',
    images: [{ src: `${DS_IMG}/payments-gateways.png`, caption: 'CCAvenue · Easebuzz · UPI AutoPay · eNACH' }],
    checklist: [
      'Gateways: CCAvenue + Easebuzz',
      'UPI · Cards · NetBanking · Wallets',
      'UPI AutoPay / e-mandate for parents',
      'Admin AutoPay / mandate monitoring',
      'Online payment links (including WhatsApp)',
      'Bulk payment links & gateway activity',
      'Gateway-compliant checkout via trusted Indian PGs',
      'Correction queue for payment exceptions',
    ],
    faq: [
      { q: 'Do you store card data on Arvion servers?', a: 'Checkout runs through CCAvenue / Easebuzz — gateway-compliant flows. We track payment activity and mandates in the ERP.' },
      { q: 'Can parents set AutoPay?', a: 'Yes. Parents set up UPI e-mandate; admins monitor mandates and arrears nudges.' },
    ],
  },
  whatsapp: {
    slug: 'whatsapp',
    title: 'WhatsApp Business',
    eyebrow: 'WhatsApp',
    headline: 'Seamless Meta + WhatsApp for Digital School.',
    sub: 'Connect. Communicate. Engage — templates, inbox, receipts, and analytics inside the ERP.',
    images: [
      { src: `${DS_IMG}/whatsapp-integration.png`, caption: 'WhatsApp Business integration with Digital School' },
      { src: `${DS_IMG}/whatsapp-analytics.png`, caption: 'Delivery, read rate, failures — standard-wise analytics' },
    ],
    checklist: [
      'Fee reminder templates with payment links',
      'Two-way staff ↔ parent inbox inside the ERP',
      'Receipt text/PDF within the 24-hour window',
      'Delivery and read status',
      'WhatsApp analytics (delivery, read, failures)',
      'Arrear / AutoPay / app-update template nudges',
      'Admission acknowledgment templates',
    ],
    faq: [
      { q: 'Is this personal WhatsApp?', a: 'No — Business API templates and inbox designed for school operations.' },
      { q: 'Can we send fee receipts on WhatsApp?', a: 'Yes, within the 24-hour messaging window (text/PDF).' },
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
