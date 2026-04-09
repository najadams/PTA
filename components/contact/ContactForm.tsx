'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName:  z.string().min(1, 'Required'),
  company:   z.string().min(1, 'Required'),
  email:     z.string().email('Valid email required'),
  service:   z.enum([
    'tta-advisory', 'legal-services', 'corporate-immigration',
    'corporate-business', 'regulatory-compliance', 'market-research',
    'trade-development', 'other',
  ] as const, { error: 'Please select a service' }),
  message: z.string().min(10, 'At least 10 characters'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  { value: 'tta-advisory',          label: 'TTA & GIPC Advisory (Flagship)' },
  { value: 'legal-services',        label: 'Legal Services' },
  { value: 'corporate-immigration', label: 'Corporate Immigration' },
  { value: 'corporate-business',    label: 'Corporate & Business Services' },
  { value: 'regulatory-compliance', label: 'Regulatory Compliance' },
  { value: 'market-research',       label: 'Market & Social Research' },
  { value: 'trade-development',     label: 'Trade Development & Market Entry' },
  { value: 'other',                 label: 'Not sure — book a compliance check' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 300,
    color: '#B05050', marginTop: '4px',
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <div style={{
          width: '48px', height: '48px', border: '0.5px solid var(--border)',
          background: 'var(--gold-glow)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 24px',
          fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--gold)',
        }}>
          ✓
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--text)', marginBottom: '12px' }}>
          Enquiry Sent
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.75 }}>
          We&apos;ll be in touch within 2 business hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{ marginTop: '24px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px', display: 'block' }}>
          SEND AN ENQUIRY
        </span>
      </div>

      {/* Name row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <label className="form-label">First Name *</label>
          <input className="form-field" placeholder="First name" {...register('firstName')} />
          {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="form-label">Last Name *</label>
          <input className="form-field" placeholder="Last name" {...register('lastName')} />
          {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label">Company *</label>
        <input className="form-field" placeholder="Company or organisation" {...register('company')} />
        {errors.company && <p style={errorStyle}>{errors.company.message}</p>}
      </div>

      <div>
        <label className="form-label">Email Address *</label>
        <input className="form-field" type="email" placeholder="your@email.com" {...register('email')} />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="form-label">Service Needed *</label>
        <select className="form-field" defaultValue="" {...register('service')}
          style={{ cursor: 'pointer' }}>
          <option value="" disabled>Select a service...</option>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {errors.service && <p style={errorStyle}>{errors.service.message}</p>}
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea
          className="form-field"
          placeholder="Briefly describe your requirements..."
          rows={5}
          style={{ resize: 'none', minHeight: '100px' }}
          {...register('message')}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: '#B05050' }}>
          Something went wrong. Please try again or WhatsApp us at +233 555 547 998.
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'loading'}
        style={{ width: '100%' }}>
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
