export interface ProcessStep {
  num:         string
  label:       string
  title:       string
  description: string
  includes:    string[]
}

export const steps: ProcessStep[] = [
  {
    num:   '01',
    label: 'FREE — NO OBLIGATION',
    title: 'Free Compliance Check',
    description: 'A 30-minute call to assess your current TTA and GIPC position. We review what you have, identify gaps, and tell you exactly where you stand — at no charge, with no obligation to proceed.',
    includes: [
      'TTA registration status review',
      'GIPC compliance gap assessment',
      'Immigration quota check',
      'Risk exposure summary',
    ],
  },
  {
    num:   '02',
    label: 'FIXED FEE — NO SURPRISES',
    title: 'Scope & Proposal',
    description: 'We define exactly what needs to be done, the timeline to completion, and a transparent fixed fee — agreed before any work begins. No hourly billing. No scope creep.',
    includes: [
      'Detailed scope of services',
      'Realistic timeline with milestones',
      'Fixed-fee engagement letter',
      'Government fee pass-through disclosed',
    ],
  },
  {
    num:   '03',
    label: 'MANAGED BY PTA',
    title: 'Execution',
    description: 'Our team prepares, reviews, and submits all documentation. Where specialist partners are involved, we coordinate and own the process. You receive regular updates and never chase anyone.',
    includes: [
      'Document preparation & review',
      'Regulatory body submission & follow-up',
      'Partner coordination (Firmus, GT Legal)',
      'Real-time status updates',
    ],
  },
  {
    num:   '04',
    label: 'ONGOING — RETAINER AVAILABLE',
    title: 'Ongoing Protection',
    description: 'Compliance is not a one-time event. We offer annual renewal management, regulatory change monitoring, and proactive alerts — so your position never lapses and you are never caught off guard.',
    includes: [
      'Annual TTA & GIPC renewal management',
      'GIPC Bill 2025 compliance monitoring',
      'Immigration renewal tracking',
      'Regulatory change alerts',
    ],
  },
]
