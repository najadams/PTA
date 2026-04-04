'use client'
import { useState } from 'react'
import { generateSlug }    from '@/lib/pta/slug'
import { C }               from '@/components/pta/shared/portal'
import { PtaField }        from '@/components/pta/shared/PtaField'
import { PtaInput }        from '@/components/pta/shared/PtaInput'
import { PtaToggle }       from '@/components/pta/shared/PtaToggle'
import { InlineAlert }     from '@/components/pta/shared/InlineAlert'
import { GenerateResult }  from '@/components/pta/GenerateResult'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://protocolandtransfer.com'

interface Result { url: string; emailSent: boolean; clientEmail: string }

export default function GeneratePage() {
  const [clientName,  setClientName]  = useState('')
  const [companyName, setCompanyName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [sendEmail,   setSendEmail]   = useState(true)
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState('')
  const [result,      setResult]      = useState<Result | null>(null)

  const liveSlug   = companyName ? generateSlug(companyName) : ''
  const previewUrl = liveSlug ? `${SITE}/intake/${liveSlug}` : ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientName.trim() || !companyName.trim() || !clientEmail.trim()) {
      setError('All fields are required.')
      return
    }
    setError('')
    setLoading(true)

    try {
      const sessionRes  = await fetch('/api/intake/sessions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_name: clientName, company_name: companyName, client_email: clientEmail }),
      })
      const sessionData = await sessionRes.json() as { slug?: string; error?: string }
      if (!sessionRes.ok) throw new Error(sessionData.error ?? 'Failed to create session')

      const intakeUrl = `${SITE}/intake/${sessionData.slug}`
      await navigator.clipboard.writeText(intakeUrl)

      let emailSent = false
      if (sendEmail) {
        const emailRes = await fetch('/api/intake/send-link', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ client_name: clientName, company_name: companyName, client_email: clientEmail, intake_url: intakeUrl }),
        })
        emailSent = emailRes.ok
      }

      setResult({ url: intakeUrl, emailSent, clientEmail })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setResult(null); setClientName(''); setCompanyName(''); setClientEmail(''); setSendEmail(true); setError('')
  }

  if (result) return <GenerateResult {...result} onReset={reset} />

  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ maxWidth: 480, width: '100%' }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 4, padding: '36px 40px' }}>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 500, color: C.text, margin: '0 0 28px' }}>
            Generate Client Intake Link
          </h1>

          <form onSubmit={handleSubmit}>
            <PtaField label="Client contact name" required>
              <PtaInput value={clientName} onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Kwame Mensah" />
            </PtaField>

            <PtaField label="Company name" required>
              <PtaInput value={companyName} onChange={e => setCompanyName(e.target.value)}
                placeholder="e.g. MTN Ghana" />
              {previewUrl && (
                <p style={{ marginTop: 6, fontSize: 12, color: C.textMuted, fontFamily: 'monospace', wordBreak: 'break-all' }}>
                  Link preview: {previewUrl}
                </p>
              )}
            </PtaField>

            <PtaField label="Client email address" required>
              <PtaInput type="email" value={clientEmail} onChange={e => setClientEmail(e.target.value)}
                placeholder="client@company.com" />
            </PtaField>

            <div style={{ marginBottom: 28 }}>
              <PtaToggle on={sendEmail} onToggle={() => setSendEmail(v => !v)}
                label="Send intake link to client automatically" />
            </div>

            {error && <div style={{ marginBottom: 16 }}><InlineAlert variant="error">{error}</InlineAlert></div>}

            <button type="submit" disabled={loading} style={{
              width: '100%', background: loading ? C.goldDim : C.gold, border: 'none',
              borderRadius: 2, padding: '13px 0', fontSize: 13, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#0D0F14',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-dm-sans)', fontWeight: 600, transition: 'background 200ms',
            }}>
              {loading ? 'Generating...' : 'Generate & Copy Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
