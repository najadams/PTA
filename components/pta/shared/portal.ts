// PTA Intake Portal — design tokens and shared types
// Now respects global light/dark theme

export const C = {
  bg:           'var(--color-base)',
  surface:      'var(--color-surface)',
  surfaceAlt:   'var(--color-surface-raised)',
  border:       'var(--color-border)',
  borderActive: 'var(--color-gold)',
  gold:         'var(--color-gold)',
  goldDim:      'var(--color-gold-light)',
  text:         'var(--color-text-primary)',
  textMuted:    'var(--color-text-secondary)',
  success:      'var(--color-success)',
  error:        'var(--color-error)',
  warning:      'var(--color-gold-bright)',
} as const

export const ENTITY_TYPES = [
  'Limited Liability Company',
  'Other',
] as const

export const STEP_TITLES: Record<number, string> = {
  1: 'Transferor details',
  2: 'Transferee details',
  3: 'Technology & intellectual property',
  4: 'Commercial terms',
  5: 'Training & technical support',
  6: 'Confidentiality',
  7: 'Termination',
  8: 'Dispute resolution',
  9: 'Confirmations & documents',
}

export interface StepProps {
  formData: Record<string, unknown>
  onChange: (field: string, value: unknown) => void
  errors:   Record<string, string>
}

export interface UploadedFile {
  file_id:      string
  file_name:    string
  storage_path: string
}

export interface Step10Props extends StepProps {
  slug:          string
  uploadedFiles: UploadedFile[]
  onFilesChange: (files: UploadedFile[]) => void
}

export interface IntakeSession {
  id:               string
  slug:             string
  client_name:      string
  company_name:     string
  client_email:     string
  status:           'in_progress' | 'submitted'
  current_step:     number
  form_data:        Record<string, unknown>
  submitted_at:     string | null
  reference_number: string | null
  created_at:       string
  updated_at:       string
}
