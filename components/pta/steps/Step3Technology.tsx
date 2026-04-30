'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaTextarea }   from '../shared/PtaTextarea'
import { C, type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

const AGREEMENT_TYPES = [
  {
    value: 'industrial_property',
    label: 'Industrial Property Rights',
    desc:  'Assignment, sale, or licensing of patents, trademarks, service marks, trade names, utility models, or industrial designs',
  },
  {
    value: 'technical_services',
    label: 'Technical Services / Assistance',
    desc:  'Feasibility studies, technical assessments, blueprints, engineering designs, formulas, or operational guides',
  },
  {
    value: 'know_how',
    label: 'Know-How Transfer',
    desc:  'Transfer of technical knowledge or data (patented or not) needed to install, operate, or maintain machinery, equipment, or turn-key projects',
  },
  {
    value: 'management_services',
    label: 'Management Services',
    desc:  'Provision of management personnel for day-to-day operations, corporate strategy, organisational restructuring, or staff training',
  },
] as const

const SECTORS = [
  'Telecommunications','Banking & Finance','FMCG','Mining & Resources','Energy', 'Real Estate',
  'Logistics & Supply Chain','Technology & Software','Healthcare','Agriculture','Other',
]

export function Step3Technology({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const agreementType = g(fd, 'agreement_type')
  const isOtherSector = g(fd, 'sector') === 'Other'

  return (
    <div>
      <PtaField label="Describe the technology being transfered" required error={e.technology_description}
        helper="Be specific — what it is, what it does, how the Ghanaian entity will use it">
        <PtaTextarea value={g(fd, 'technology_description')} onChange={ev => oc('technology_description', ev.target.value)}
          placeholder="Describe the technology in detail (minimum 80 characters)..." rows={5}
          hasError={!!e.technology_description} />
      </PtaField>

      <PtaField label="Agreement type" required error={e.agreement_type}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 2 }}>
          {AGREEMENT_TYPES.map(opt => {
            const selected = agreementType === opt.value
            return (
              <label key={opt.value} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 16px',
                background: selected ? 'rgba(201,168,76,0.08)' : C.surfaceAlt,
                border: `1px solid ${e.agreement_type ? C.error : selected ? C.gold : C.border}`,
                borderRadius: 4, cursor: 'pointer',
                transition: 'border-color 150ms, background 150ms',
              }}>
                <input
                  type="radio" name="agreement_type" value={opt.value}
                  checked={selected} onChange={() => oc('agreement_type', opt.value)}
                  style={{ display: 'none' }}
                />
                <div style={{
                  flexShrink: 0, marginTop: 2,
                  width: 16, height: 16, borderRadius: '50%',
                  border: `2px solid ${selected ? C.gold : C.textMuted}`,
                  background: selected ? C.gold : 'transparent',
                  transition: 'border-color 150ms, background 150ms',
                  boxSizing: 'border-box',
                }} />
                <div>
                  <span style={{ fontSize: 14, color: C.text, fontFamily: 'var(--font-dm-sans)', fontWeight: 500, display: 'block' }}>
                    {opt.label}
                  </span>
                  <span style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.55, display: 'block', marginTop: 3 }}>
                    {opt.desc}
                  </span>
                </div>
              </label>
            )
          })}
        </div>
      </PtaField>

      {agreementType === 'industrial_property' && (
        <PtaField label="Registration numbers (if any)">
          <PtaInput value={g(fd, 'registration_numbers')} onChange={ev => oc('registration_numbers', ev.target.value)}
            placeholder="e.g. PAT267fd567" style={{ maxWidth: '50%' }} />
        </PtaField>
      )}

      <PtaField label="Sector" required error={e.sector}>
        <PtaSelect
          value={g(fd, 'sector')}
          onChange={ev => {
            oc('sector', ev.target.value)
            if (ev.target.value !== 'Other') oc('sector_other', '')
          }}
          hasError={!!e.sector} placeholder="Select sector" style={{ maxWidth: '50%' }}>
          {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
        </PtaSelect>
      </PtaField>

      {isOtherSector && (
        <PtaField label="Please specify sector" required error={e.sector_other}>
          <PtaInput
            value={g(fd, 'sector_other')}
            onChange={ev => oc('sector_other', ev.target.value)}
            placeholder="e.g. Maritime, Education, Real Estate"
            hasError={!!e.sector_other}
            style={{ maxWidth: '50%' }}
          />
        </PtaField>
      )}

    </div>
  )
}
