// PTA Intake Portal — design tokens and shared types
// Always dark — no theme switching in the portal

export const C = {
  bg:           '#0D0F14',
  surface:      '#131720',
  surfaceAlt:   '#1A1F2C',
  border:       '#252A36',
  borderActive: '#C9A84C',
  gold:         '#C9A84C',
  goldDim:      '#8A6E30',
  text:         '#E8E2D9',
  textMuted:    '#8A8A8A',
  success:      '#4A7C59',
  error:        '#C44444',
  warning:      '#C9A84C',
} as const

export const ENTITY_TYPES = [
  'Limited Company',
  'Partnership',
  'Sole Proprietorship',
  'Trust',
  'Government Entity',
  'Other',
] as const

export const STEP_TITLES: Record<number, string> = {
  1:  'Transferor details',
  2:  'Transferee details',
  3:  'Technology & intellectual property',
  4:  'Licence scope & territory',
  5:  'Commercial terms',
  6:  'Training & technical support',
  7:  'Confidentiality',
  8:  'Termination',
  9:  'Dispute resolution',
  10: 'Confirmations & documents',
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
