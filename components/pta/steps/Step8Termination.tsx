'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const YN = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]

export function Step8Termination({ formData: fd, onChange: oc, errors: e }: StepProps) {
  return (
    <div>
      <InlineAlert variant="notice">
        Breach cure periods and post-termination obligations will be structured by PTA in the draft.
      </InlineAlert>

      <div style={{ marginTop: 24 }}>
        <PtaField label="Termination notice period (days)" required error={e.notice_days}
          helper="Typically 30 – 90 days">
          <PtaInput
            type="number" min={1} step={1}
            value={g(fd,'notice_days')}
            onChange={ev => oc('notice_days', ev.target.value)}
            placeholder="e.g. 60"
            hasError={!!e.notice_days}
            style={{ maxWidth: 180 }}
          />
        </PtaField>

        <PtaField
          label="Can either party terminate for convenience (without cause)?"
          required error={e.termination_for_convenience}
        >
          <PtaRadioGroup
            name="termination_for_convenience"
            options={YN}
            value={g(fd,'termination_for_convenience')}
            onChange={v => oc('termination_for_convenience', v)}
            hasError={!!e.termination_for_convenience}
          />
        </PtaField>
      </div>
    </div>
  )
}
