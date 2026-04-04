'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaTextarea }   from '../shared/PtaTextarea'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { ENTITY_TYPES, type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

const RELATIONSHIP_OPTIONS = [
  { value: 'parent_subsidiary',  label: 'Parent–Subsidiary' },
  { value: 'affiliate',          label: 'Affiliate (common ownership)' },
  { value: 'unrelated',          label: 'Unrelated third party' },
]

export function Step2Transferee({ formData: fd, onChange: oc, errors: e }: StepProps) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Ghanaian entity / licensee name" required error={e.transferee_name}>
          <PtaInput value={g(fd,'transferee_name')} onChange={ev => oc('transferee_name', ev.target.value)}
            placeholder="e.g. Acme Ghana Ltd" hasError={!!e.transferee_name} />
        </PtaField>
        <PtaField label="Ghana registration number (RGD)" required error={e.transferee_ghana_reg}>
          <PtaInput value={g(fd,'transferee_ghana_reg')} onChange={ev => oc('transferee_ghana_reg', ev.target.value)}
            placeholder="e.g. CS00123456" hasError={!!e.transferee_ghana_reg} />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Entity type" required error={e.transferee_entity_type}>
          <PtaRadioGroup 
            name="transferee_entity_type"
            value={g(fd,'transferee_entity_type')} 
            onChange={val => oc('transferee_entity_type', val)}
            hasError={!!e.transferee_entity_type}
            options={ENTITY_TYPES.map(t => ({ label: t, value: t }))}
          />
        </PtaField>
        <PtaField label="Principal business activity" required error={e.transferee_business_activity}>
          <PtaInput value={g(fd,'transferee_business_activity')} onChange={ev => oc('transferee_business_activity', ev.target.value)}
            placeholder="e.g. Retail banking" hasError={!!e.transferee_business_activity} />
        </PtaField>
      </div>

      <PtaField label="Registered address in Ghana" required error={e.transferee_address}>
        <PtaTextarea value={g(fd,'transferee_address')} onChange={ev => oc('transferee_address', ev.target.value)}
          placeholder="Full registered address in Ghana" hasError={!!e.transferee_address} rows={3} />
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Primary contact name" required error={e.transferee_contact_name}>
          <PtaInput value={g(fd,'transferee_contact_name')} onChange={ev => oc('transferee_contact_name', ev.target.value)}
            placeholder="Full name" hasError={!!e.transferee_contact_name} />
        </PtaField>
        <PtaField label="Contact email" required error={e.transferee_contact_email}>
          <PtaInput type="email" value={g(fd,'transferee_contact_email')} onChange={ev => oc('transferee_contact_email', ev.target.value)}
            placeholder="name@company.com" hasError={!!e.transferee_contact_email} />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Contact phone">
          <PtaInput value={g(fd,'transferee_contact_phone')} onChange={ev => oc('transferee_contact_phone', ev.target.value)}
            placeholder="+233 55 000 0000" />
        </PtaField>
        <PtaField label="Authorised signatory name and title" required error={e.transferee_signatory}>
          <PtaInput value={g(fd,'transferee_signatory')} onChange={ev => oc('transferee_signatory', ev.target.value)}
            placeholder="e.g. Kwame Asante, MD" hasError={!!e.transferee_signatory} />
        </PtaField>
      </div>

      <PtaField label="Relationship between parties" required error={e.related_party_type}
        helper="This affects how GIPC reviews the fee structure">
        <PtaRadioGroup name="related_party_type" options={RELATIONSHIP_OPTIONS}
          value={g(fd,'related_party_type')} onChange={v => oc('related_party_type', v)}
          hasError={!!e.related_party_type} />
      </PtaField>
    </div>
  )
}
