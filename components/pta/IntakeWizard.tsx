'use client'
import { useState, useRef, useCallback } from 'react'
import { WizardProgress }     from './shared/WizardProgress'
import { Step1Transferor }    from './steps/Step1Transferor'
import { Step2Transferee }    from './steps/Step2Transferee'
import { Step3Technology }    from './steps/Step3Technology'
import { Step4Scope }         from './steps/Step4Scope'
import { Step5Commercial }    from './steps/Step5Commercial'
import { Step6Training }      from './steps/Step6Training'
import { Step7Confidentiality } from './steps/Step7Confidentiality'
import { Step8Termination }   from './steps/Step8Termination'
import { Step9Dispute }       from './steps/Step9Dispute'
import { Step10Confirmations } from './steps/Step10Confirmations'
import { getStepErrors }      from '@/lib/pta/validation'
import { C, STEP_TITLES, type IntakeSession, type UploadedFile } from './shared/portal'

interface Props {
  session:     IntakeSession
  slug:        string
  onSubmitted: (ref: string) => void
}

type SaveState = 'idle' | 'saving' | 'saved'

const SAVE_LABELS: Record<SaveState, string> = { idle: '', saving: 'Saving...', saved: 'Saved' }

export function IntakeWizard({ session, slug, onSubmitted }: Props) {
  const [step,    setStep]    = useState(session.current_step ?? 1)
  const [fd,      setFd]      = useState<Record<string, unknown>>(session.form_data ?? {})
  const [errors,  setErrors]  = useState<Record<string, string>>({})
  const [save,    setSave]    = useState<SaveState>('idle')
  const [files,   setFiles]   = useState<UploadedFile[]>(
    Array.isArray(session.form_data?._uploaded_files) ? session.form_data._uploaded_files as UploadedFile[] : []
  )
  const [submitting, setSubmitting] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const patch = useCallback((body: object) =>
    fetch(`/api/intake/sessions/${slug}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }), [slug])

  const handleChange = useCallback((field: string, value: unknown) => {
    setFd(prev => ({ ...prev, [field]: value }))
    setSave('saving')
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      try {
        await patch({ form_data: { [field]: value } })
        setSave('saved')
      } catch { setSave('idle') }
      setTimeout(() => setSave('idle'), 2000)
    }, 1200)
  }, [patch])

  const handleFilesChange = useCallback((next: UploadedFile[]) => {
    setFiles(next)
    patch({ form_data: { _uploaded_files: next } })
  }, [patch])

  const handleNext = async () => {
    const errs = getStepErrors(step, fd)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    const next = step + 1
    setStep(next)
    patch({ current_step: next })
  }

  const handlePrev = () => { setErrors({}); setStep(s => Math.max(1, s - 1)) }

  const handleSubmit = async () => {
    const errs = getStepErrors(10, fd)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    try {
      const res  = await fetch(`/api/intake/sessions/${slug}/submit`, { method: 'POST' })
      const data = await res.json() as { reference_number?: string; error?: string }
      if (!res.ok) throw new Error(data.error ?? 'Submission failed')
      onSubmitted(data.reference_number!)
    } catch {
      setErrors({ _submit: 'Submission failed. Please try again or contact support.' })
      setSubmitting(false)
    }
  }

  const canSubmit = step === 10 &&
    fd.confirm_accuracy === true && fd.confirm_authority === true &&
    fd.confirm_confidentiality === true && fd.confirm_engagement === true

  const stepProps    = { formData: fd, onChange: handleChange, errors }
  const STEPS        = [Step1Transferor, Step2Transferee, Step3Technology, Step4Scope, Step5Commercial, Step6Training, Step7Confidentiality, Step8Termination, Step9Dispute, null]
  const StepComponent = STEPS[step - 1]

  const btnBase: React.CSSProperties = { border: 'none', borderRadius: 2, padding: '12px 32px', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0D0F14', fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }

  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', background: C.bg, padding: '32px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 4, padding: '36px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 30, fontWeight: 500, color: C.text, margin: 0 }}>
              {STEP_TITLES[step]}
            </h2>
            {save !== 'idle' && (
              <span style={{ fontSize: 12, color: save === 'saved' ? C.success : C.textMuted, fontFamily: 'var(--font-dm-sans)', marginTop: 6 }}>
                {SAVE_LABELS[save]}
              </span>
            )}
          </div>

          <WizardProgress currentStep={step} totalSteps={10} />

          {step < 10 && StepComponent && <StepComponent {...stepProps} />}
          {step === 10 && <Step10Confirmations {...stepProps} slug={slug} uploadedFiles={files} onFilesChange={handleFilesChange} />}

          {errors._submit && (
            <p style={{ marginTop: 12, fontSize: 13, color: C.error, fontFamily: 'var(--font-dm-sans)' }}>{errors._submit}</p>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
            <button type="button" onClick={handlePrev} disabled={step === 1} style={{
              background: 'none', border: `1px solid ${C.border}`, borderRadius: 2, padding: '12px 28px',
              fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
              color: step === 1 ? C.textMuted : C.text, cursor: step === 1 ? 'default' : 'pointer',
              fontFamily: 'var(--font-dm-sans)', opacity: step === 1 ? 0.4 : 1, transition: 'opacity 150ms',
            }}>Previous</button>

            {step < 10 ? (
              <button type="button" onClick={handleNext} style={{ ...btnBase, background: C.gold, cursor: 'pointer' }}>
                Save &amp; Continue
              </button>
            ) : (
              <button type="button" onClick={handleSubmit} disabled={!canSubmit || submitting} style={{
                ...btnBase, transition: 'background 200ms',
                background: canSubmit && !submitting ? C.gold : C.goldDim,
                cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed',
              }}>
                {submitting ? 'Submitting...' : 'Submit Intake'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
