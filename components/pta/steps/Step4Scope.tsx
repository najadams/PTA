'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
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

export function Step4Scope({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const territory   = g(fd, 'territory')
  const sublicense  = g(fd, 'sublicensing_allowed')
  const relatedType = g(fd, 'related_party_type')
  const showSubWarn = sublicense === 'yes' && relatedType === 'unrelated'

  return (
    <div>
      <PtaField label="Territory" required error={e.territory}>
        <PtaSelect value={territory} onChange={ev => oc('territory', ev.target.value)}
          placeholder="Select territory" hasError={!!e.territory}>
          {['Ghana only','West Africa','Africa-wide','Worldwide','Custom'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
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
        <PtaRadioGroup name="license_type" options={LICENSE_OPTS}
          value={g(fd,'license_type')} onChange={v => oc('license_type', v)}
          hasError={!!e.license_type} />
      </PtaField>

      <PtaField label="Is sub-licensing permitted?" required error={e.sublicensing_allowed}>
        <PtaRadioGroup name="sublicensing_allowed" options={SUBLICENSE_OPTS}
          value={sublicense} onChange={v => oc('sublicensing_allowed', v)}
          hasError={!!e.sublicensing_allowed} />
        {showSubWarn && (
          <InlineAlert variant="warning">
            Sub-licensing to unrelated parties receives heightened GIPC scrutiny. Ensure commercial justification is documented.
          </InlineAlert>
        )}
      </PtaField>

      <PtaField label="Rights to improvements">
        <PtaSelect value={g(fd,'improvement_rights')} onChange={ev => oc('improvement_rights', ev.target.value)}
          placeholder="Select (optional)">
          {['Licensor retains all rights','Licensee acquires rights to improvements','Joint ownership of improvements','Not applicable'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>
    </div>
  )
}
