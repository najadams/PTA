'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

const LICENSE_OPTS = [
  { value: 'exclusive',     label: 'Exclusive' },
  { value: 'non_exclusive', label: 'Non-exclusive' },
  { value: 'sole',          label: 'Sole' },
]
const SUBLICENSE_OPTS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no',  label: 'No'  },
]
const TERRITORY_OPTS = [
  { value: 'Ghana only',   label: 'Ghana only' },
  { value: 'West Africa',  label: 'West Africa' },
  { value: 'Africa-wide',  label: 'Africa-wide' },
  { value: 'Worldwide',    label: 'Worldwide' },
  { value: 'Custom',       label: 'Custom' },
]
const IMPROVEMENT_OPTS = [
  { value: 'Licensor retains all rights',          label: 'Licensor retains all rights' },
  { value: 'Licensee acquires rights to improvements', label: 'Licensee acquires rights to improvements' },
  { value: 'Joint ownership of improvements',      label: 'Joint ownership of improvements' },
  { value: 'Not applicable',                       label: 'Not applicable' },
]

export function Step4Scope({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const territory   = g(fd, 'territory')
  const sublicense  = g(fd, 'sublicensing_allowed')
  const relatedType = g(fd, 'related_party_type')
  const showSubWarn = sublicense === 'yes' && relatedType === 'unrelated'

  return (
    <div>
      <PtaField label="Territory" required error={e.territory}>
        <PtaRadioGroup name="territory" options={TERRITORY_OPTS} variant="pill"
          value={territory} onChange={v => oc('territory', v)} hasError={!!e.territory} />
      </PtaField>

      {territory === 'Custom' && (
        <PtaField label="Specify territories">
          <PtaInput value={g(fd,'territory_custom')} onChange={ev => oc('territory_custom', ev.target.value)}
            placeholder="e.g. Ghana, Nigeria, Côte d'Ivoire" />
        </PtaField>
      )}

      <PtaField label="Field of use or permitted application" required error={e.field_of_use}
        helper="e.g. 'Commercial banking operations in Ghana only'">
        <PtaInput value={g(fd,'field_of_use')} onChange={ev => oc('field_of_use', ev.target.value)}
          placeholder="Describe the permitted use" hasError={!!e.field_of_use} />
      </PtaField>

      <PtaField label="Licence type" required error={e.license_type}>
        <PtaRadioGroup name="license_type" options={LICENSE_OPTS} variant="pill"
          value={g(fd,'license_type')} onChange={v => oc('license_type', v)}
          hasError={!!e.license_type} />
      </PtaField>

      <PtaField label="Is sub-licensing permitted?" required error={e.sublicensing_allowed}>
        <PtaRadioGroup name="sublicensing_allowed" options={SUBLICENSE_OPTS} variant="pill"
          value={sublicense} onChange={v => oc('sublicensing_allowed', v)}
          hasError={!!e.sublicensing_allowed} />
        {showSubWarn && (
          <InlineAlert variant="warning">
            Sub-licensing to unrelated parties receives heightened GIPC scrutiny. Ensure commercial justification is documented.
          </InlineAlert>
        )}
      </PtaField>

      <PtaField label="Rights to improvements">
        <PtaRadioGroup name="improvement_rights" options={IMPROVEMENT_OPTS}
          value={g(fd,'improvement_rights')} onChange={v => oc('improvement_rights', v)} />
      </PtaField>
    </div>
  )
}
