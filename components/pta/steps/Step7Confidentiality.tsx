'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

const RETURN_OPTIONS = [
  { value: 'return',    label: 'Yes — return required' },
  { value: 'destroy',   label: 'Yes — destruction required' },
  { value: 'none',      label: 'No specific obligation' },
  { value: 'to_agree',  label: 'To be agreed' },
]

export function Step7Confidentiality({ formData: fd, onChange: oc, errors: e }: StepProps) {
  return (
    <div>
      <InlineAlert variant="notice">
        Standard confidentiality provisions will be applied by PTA. The inputs below are used to customise duration and material handling only.
      </InlineAlert>

      <div style={{ marginTop: 24 }}>
        <PtaField label="Confidentiality obligation period (years)" required error={e.confidentiality_duration_years}
          helper="Typically 2–5 years post-termination">
          <PtaInput
            type="number" min={1} step={1}
            value={g(fd,'confidentiality_duration_years')}
            onChange={ev => oc('confidentiality_duration_years', ev.target.value)}
            placeholder="e.g. 3"
            hasError={!!e.confidentiality_duration_years}
            style={{ maxWidth: 180 }}
          />
        </PtaField>

        <PtaField
          label="Are parties required to return or destroy confidential materials on termination?"
          required error={e.return_of_materials}
        >
          <PtaRadioGroup
            name="return_of_materials"
            options={RETURN_OPTIONS}
            value={g(fd,'return_of_materials')}
            onChange={v => oc('return_of_materials', v)}
            hasError={!!e.return_of_materials}
          />
        </PtaField>
      </div>
    </div>
  )
}
