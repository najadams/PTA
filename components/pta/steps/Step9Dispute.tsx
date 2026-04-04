'use client'
import { PtaField }  from '../shared/PtaField'
import { PtaSelect } from '../shared/PtaSelect'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

export function Step9Dispute({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const rules         = g(fd, 'arbitration_rules')
  const showSeat      = rules !== '' && rules !== 'Litigation (Ghanaian courts)'
  const arbitrationSeat = g(fd, 'arbitration_seat') || 'Accra'

  return (
    <div>
      <PtaField label="Governing law" required error={e.governing_law}
        helper="GIPC requires Ghanaian law for agreements involving Ghanaian entities in most cases. PTA will advise if an override is appropriate.">
        <PtaSelect
          value={g(fd,'governing_law') || 'Ghana'}
          onChange={ev => oc('governing_law', ev.target.value)}
          hasError={!!e.governing_law}
        >
          {['Ghana','England & Wales','Singapore','Other'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>

      <PtaField label="Arbitration rules (if applicable)" required error={e.arbitration_rules}>
        <PtaSelect
          value={rules}
          onChange={ev => oc('arbitration_rules', ev.target.value)}
          placeholder="Select"
          hasError={!!e.arbitration_rules}
        >
          {['Ghana ADR Centre','ICC','LCIA','UNCITRAL','Litigation (Ghanaian courts)','Other'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>

      {showSeat && (
        <PtaField label="Arbitration seat">
          <PtaSelect
            value={arbitrationSeat}
            onChange={ev => oc('arbitration_seat', ev.target.value)}
          >
            {['Accra','London','Singapore','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
      )}
    </div>
  )
}
