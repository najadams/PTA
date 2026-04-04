'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaTextarea }   from '../shared/PtaTextarea'
import { ENTITY_TYPES, type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

export function Step1Transferor({ formData: fd, onChange: oc, errors: e }: StepProps) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Foreign entity / licensor name" required error={e.transferor_name}>
          <PtaInput value={g(fd,'transferor_name')} onChange={ev => oc('transferor_name', ev.target.value)}
            placeholder="e.g. Acme Technologies Ltd" hasError={!!e.transferor_name} />
        </PtaField>
        <PtaField label="Country of incorporation" required error={e.transferor_country}>
          <PtaInput value={g(fd,'transferor_country')} onChange={ev => oc('transferor_country', ev.target.value)}
            placeholder="e.g. United Kingdom" hasError={!!e.transferor_country} />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Entity type" required error={e.transferor_entity_type}>
          <PtaSelect value={g(fd,'transferor_entity_type')} onChange={ev => oc('transferor_entity_type', ev.target.value)}
            placeholder="Select type" hasError={!!e.transferor_entity_type}>
            {ENTITY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </PtaSelect>
        </PtaField>
        <PtaField label="Registration or company number">
          <PtaInput value={g(fd,'transferor_reg_number')} onChange={ev => oc('transferor_reg_number', ev.target.value)}
            placeholder="e.g. 12345678" />
        </PtaField>
      </div>

      <PtaField label="Registered address" required error={e.transferor_address}>
        <PtaTextarea value={g(fd,'transferor_address')} onChange={ev => oc('transferor_address', ev.target.value)}
          placeholder="Full registered address including country" hasError={!!e.transferor_address} rows={3} />
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Primary contact name" required error={e.transferor_contact_name}>
          <PtaInput value={g(fd,'transferor_contact_name')} onChange={ev => oc('transferor_contact_name', ev.target.value)}
            placeholder="Full name" hasError={!!e.transferor_contact_name} />
        </PtaField>
        <PtaField label="Contact email" required error={e.transferor_contact_email}>
          <PtaInput type="email" value={g(fd,'transferor_contact_email')} onChange={ev => oc('transferor_contact_email', ev.target.value)}
            placeholder="name@company.com" hasError={!!e.transferor_contact_email} />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Contact phone">
          <PtaInput value={g(fd,'transferor_contact_phone')} onChange={ev => oc('transferor_contact_phone', ev.target.value)}
            placeholder="+1 555 000 0000" />
        </PtaField>
        <PtaField label="Authorised signatory name and title" required error={e.transferor_signatory}
          helper="The person who will sign the agreement on behalf of this entity">
          <PtaInput value={g(fd,'transferor_signatory')} onChange={ev => oc('transferor_signatory', ev.target.value)}
            placeholder="e.g. Jane Smith, CEO" hasError={!!e.transferor_signatory} />
        </PtaField>
      </div>
    </div>
  )
}
