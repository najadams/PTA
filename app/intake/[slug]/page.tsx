'use client'
import { use, useState, useEffect } from 'react'
import { IntakeWizard }       from '@/components/pta/IntakeWizard'
import { ConfirmationScreen } from '@/components/pta/ConfirmationScreen'
import { type IntakeSession } from '@/components/pta/shared/portal'

const BG = '#0D0F14'
const centered: React.CSSProperties = {
  minHeight: 'calc(100vh - 56px)', display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: BG, padding: '40px 24px',
}

function StatusMessage({ children }: { children: React.ReactNode }) {
  return (
    <div style={centered}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        {children}
      </div>
    </div>
  )
}

export default function IntakePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const [session,    setSession]    = useState<IntakeSession | null>(null)
  const [loading,    setLoading]    = useState(true)
  const [notFound,   setNotFound]   = useState(false)
  const [refNumber,  setRefNumber]  = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    fetch(`/api/intake/sessions/${slug}`)
      .then(async res => {
        if (res.status === 404) { setNotFound(true); return }
        const data: IntakeSession = await res.json()
        setSession(data)
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <StatusMessage>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#8A8A8A' }}>Loading your intake session...</p>
    </StatusMessage>
  )

  if (notFound) return (
    <StatusMessage>
      <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #252A36', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#E8E2D9', margin: '0 0 12px' }}>
        Link Not Recognised
      </h2>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#8A8A8A', lineHeight: 1.7, margin: '0 0 24px' }}>
        This intake link is invalid or may have expired.
        Please contact our team to receive a new link.
      </p>
      <a href="mailto:contact@protocolandtransfer.com" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#C9A84C', textDecoration: 'none' }}>
        contact@protocolandtransfer.com
      </a>
    </StatusMessage>
  )

  if (!session) return null

  // Session already submitted (or just submitted now)
  if (session.status === 'submitted' || refNumber) {
    return (
      <ConfirmationScreen
        referenceNumber={refNumber ?? session.reference_number ?? ''}
        companyName={session.company_name}
      />
    )
  }

  return (
    <IntakeWizard
      session={session}
      slug={slug}
      onSubmitted={setRefNumber}
    />
  )
}
