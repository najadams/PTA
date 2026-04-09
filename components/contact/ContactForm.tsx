'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import Button from '@/components/shared/Button'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  service: z.enum([
    'tta-advisory',
    'legal-services',
    'corporate-immigration',
    'corporate-business',
    'regulatory-compliance',
    'market-research',
    'trade-development',
    'other',
  ] as const, {
    error: 'Please select a service',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-[2px] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200'

  const errorClasses = 'mt-1 text-xs text-[var(--color-error)]'
  const labelClasses = 'block font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-secondary)] mb-2'

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-gold-surface)] border border-[var(--color-border)] mb-5">
          <span className="text-[var(--color-text-gold)] text-2xl">✓</span>
        </div>
        <h3
          className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mb-2"
          style={{ fontSize: '28px' }}
        >
          Message Received
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll respond within 24 hours to discuss your TTA
          requirements.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[var(--color-text-gold)] text-sm hover:text-[var(--color-gold-light)] transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className={inputClasses}
            {...register('name')}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>Company *</label>
          <input
            id="company"
            type="text"
            placeholder="Company or organisation"
            className={inputClasses}
            {...register('company')}
          />
          {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={inputClasses}
            {...register('email')}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone (Optional)</label>
          <input
            id="phone"
            type="tel"
            placeholder="+233 ..."
            className={inputClasses}
            {...register('phone')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>Service Needed *</label>
        <select
          id="service"
          className={`${inputClasses} appearance-none cursor-pointer`}
          {...register('service')}
          defaultValue=""
        >
          <option value="" disabled className="bg-[var(--color-surface)]">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[var(--color-surface)]">
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message *</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your TTA requirements or the nature of your technology transfer..."
          className={`${inputClasses} resize-none`}
          {...register('message')}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-[var(--color-error)] bg-[var(--color-surface-raised)] border border-[var(--color-error)]/30 rounded-[2px] px-4 py-3">
          Something went wrong. Please try again or contact us directly at{' '}
          <a href="tel:+233555547998" className="underline">0555547984</a>.
        </p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === 'loading'}
          size="lg"
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed border-t border-[var(--color-border)] pt-4">
        PTA provides advisory services, not legal advice. For legal representation, please
        consult a qualified Ghanaian attorney.
      </p>
    </form>
  )
}
