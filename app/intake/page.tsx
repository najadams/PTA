import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Intake Portal | Protocol & Transfer Advisory',
}

export default function IntakeLandingPage() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 56px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0D0F14', padding: '40px 24px',
    }}>
      <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>

        {/* Wordmark */}
        <p style={{
          fontFamily: 'var(--font-dm-sans)', fontSize: 11,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#8A8A8A', margin: '0 0 20px',
        }}>
          Protocol &amp; Transfer Advisory
        </p>

        {/* Divider accent */}
        <div style={{ width: 40, height: 2, background: '#C9A84C', margin: '0 auto 28px' }} />

        <h1 style={{
          fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 500,
          color: '#E8E2D9', margin: '0 0 20px', lineHeight: 1.1,
        }}>
          Client Intake Portal
        </h1>

        <p style={{
          fontFamily: 'var(--font-dm-sans)', fontSize: 16,
          color: '#8A8A8A', lineHeight: 1.7, margin: '0 0 32px',
        }}>
          This portal is accessed via a unique link provided by our team.
          If you have not received your intake link, please contact us to request access.
        </p>

        <div style={{ height: 1, background: '#252A36', margin: '0 0 28px' }} />

        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#8A8A8A', margin: 0 }}>
          Contact us at{' '}
          <a href="mailto:contact@protocolandtransfer.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>
            contact@protocolandtransfer.com
          </a>
        </p>
      </div>
    </div>
  )
}
