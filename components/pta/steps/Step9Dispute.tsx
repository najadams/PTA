'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

const LAW_OPTS = [
  { value: 'Ghana',            label: 'Ghana' },
  { value: 'England & Wales',  label: 'England & Wales' },
  { value: 'Singapore',        label: 'Singapore' },
  { value: 'Other',            label: 'Other' },
]
const SEAT_OPTS = [
  { value: 'Accra',     label: 'Accra' },
  { value: 'London',    label: 'London' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Other',     label: 'Other' },
]

export function Step9Dispute({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const rules = g(fd, 'arbitration_rules')
  const showSeat = rules !== '' && rules !== 'Litigation (Ghanaian courts)'

  return (
    <div>
      <PtaField label="Governing law" required error={e.governing_law}
        helper="GIPC requires Ghanaian law for agreements involving Ghanaian entities in most cases. PTA will advise if an override is appropriate.">
        <PtaRadioGroup name="governing_law" options={LAW_OPTS} variant="pill"
          value={g(fd,'governing_law') || 'Ghana'}
          onChange={v => oc('governing_law', v)} hasError={!!e.governing_law} />
      </PtaField>

      <PtaField label="Arbitration rules (if applicable)" required error={e.arbitration_rules}>
        <PtaRadioGroup 
          name="arbitration_rules"
          value={rules} 
          onChange={val => oc('arbitration_rules', val)}
          hasError={!!e.arbitration_rules}
          options={['Ghana ADR Centre','ICC','LCIA','UNCITRAL','Litigation (Ghanaian courts)','Other'].map(o => ({ label: o, value: o }))}
        />
      </PtaField>

      {showSeat && (
        <PtaField label="Arbitration seat">
          <PtaRadioGroup name="arbitration_seat" options={SEAT_OPTS} variant="pill"
            value={g(fd,'arbitration_seat') || 'Accra'}
            onChange={v => oc('arbitration_seat', v)} />
        </PtaField>
      )}
    </div>
  )
}
