'use client'
import { PtaField }    from '../shared/PtaField'
import { PtaInput }    from '../shared/PtaInput'
import { PtaSelect }   from '../shared/PtaSelect'
import { PtaTextarea } from '../shared/PtaTextarea'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert } from '../shared/InlineAlert'
import { C, type StepProps } from '../shared/portal'

const g  = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const ga = (fd: Record<string, unknown>, k: string) => (fd[k] as string[] | undefined) ?? []

const CATEGORIES = ['Software','Trademark/Brand','Patent','Know-How/Trade Secret','Franchise System','Technical Processes','Management Methods','Other']
const PAYMENT_OPTS = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]

export function Step3Technology({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const cats    = ga(fd, 'technology_categories')
  const hasPaid = g(fd, 'existing_payments_made') === 'yes'

  const toggleCat = (cat: string) => {
    oc('technology_categories', cats.includes(cat) ? cats.filter(c => c !== cat) : [...cats, cat])
  }

  return (
    <div>
      <PtaField label="Describe the technology, software, or IP being transferred" required error={e.technology_description}
        helper="Be specific — what it is, what it does, how the Ghanaian entity will use it">
        <PtaTextarea value={g(fd,'technology_description')} onChange={ev => oc('technology_description', ev.target.value)}
          placeholder="Describe the technology in detail (minimum 80 characters)..." rows={5}
          hasError={!!e.technology_description} />
      </PtaField>

      <PtaField label="Technology categories" required error={e.technology_categories}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} type="button" onClick={() => toggleCat(cat)} style={{
              padding: '6px 14px', borderRadius: 3, fontSize: 13, cursor: 'pointer',
              background: cats.includes(cat) ? 'rgba(201,168,76,0.15)' : C.surfaceAlt,
              border: `1px solid ${cats.includes(cat) ? C.gold : C.border}`,
              color: cats.includes(cat) ? C.gold : C.textMuted,
              fontFamily: 'var(--font-dm-sans)', transition: 'all 150ms',
            }}>{cat}</button>
          ))}
        </div>
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <PtaField label="IP type" required error={e.ip_type}>
          <PtaSelect value={g(fd,'ip_type')} onChange={ev => oc('ip_type', ev.target.value)}
            placeholder="Select IP type" hasError={!!e.ip_type}>
            {['Proprietary software','Registered trademark','Granted patent','Unregistered know-how','Mixed IP bundle','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
        <PtaField label="Patent or trademark registration numbers (if any)">
          <PtaInput value={g(fd,'registration_numbers')} onChange={ev => oc('registration_numbers', ev.target.value)}
            placeholder="e.g. EP1234567, TM GB 00001" />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <PtaField label="Sector" required error={e.sector}>
          <PtaSelect value={g(fd,'sector')} onChange={ev => oc('sector', ev.target.value)}
            placeholder="Select sector" hasError={!!e.sector}>
            {['Telecommunications','Banking & Finance','FMCG','Mining & Resources','Energy','Logistics & Supply Chain','Technology & Software','Healthcare','Agriculture','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
        <PtaField label="Technology maturity">
          <PtaSelect value={g(fd,'technology_maturity')} onChange={ev => oc('technology_maturity', ev.target.value)}
            placeholder="Select (optional)">
            {['Proven / commercially deployed','In active development','Early stage / pre-commercial'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
      </div>

      <PtaField label="Current implementation status" required error={e.implementation_status}
        helper="Important for determining agreement effective date and retroactive risk">
        <PtaSelect value={g(fd,'implementation_status')} onChange={ev => oc('implementation_status', ev.target.value)}
          placeholder="Select status" hasError={!!e.implementation_status}>
          {['Not yet started','In progress','Already operational'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>

      <PtaField label="Have any payments already been made under this arrangement?" required error={e.existing_payments_made}>
        <PtaRadioGroup name="existing_payments_made" options={PAYMENT_OPTS}
          value={g(fd,'existing_payments_made')} onChange={v => oc('existing_payments_made', v)}
          hasError={!!e.existing_payments_made} />
      </PtaField>

      {hasPaid && (
        <PtaField label="Approximate duration payments have been made">
          <PtaInput value={g(fd,'existing_payments_duration')} onChange={ev => oc('existing_payments_duration', ev.target.value)}
            placeholder="e.g. 8 months, since January 2024" />
        </PtaField>
      )}
    </div>
  )
}
