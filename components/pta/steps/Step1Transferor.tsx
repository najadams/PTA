'use client'
import { PtaField }    from '../shared/PtaField'
import { PtaInput }    from '../shared/PtaInput'
import { PtaSelect }   from '../shared/PtaSelect'
import { PtaTextarea } from '../shared/PtaTextarea'
import { C, ENTITY_TYPES, type StepProps } from '../shared/portal'
import { COUNTRIES } from '@/lib/pta/countries'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

export function Step1Transferor({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const entityType      = g(fd, 'transferor_entity_type')
  const isOtherEntity   = entityType === 'Other'

  return (
    <div>
      <div className="pta-form-grid-2">
        <PtaField label="Foreign entity / Transferor name" required error={e.transferor_name}>
          <PtaInput
            value={g(fd, 'transferor_name')}
            onChange={ev => oc('transferor_name', ev.target.value)}
            placeholder="e.g. Acme Technologies Ltd"
            hasError={!!e.transferor_name}
          />
        </PtaField>

        <PtaField label="Country of incorporation" required error={e.transferor_country}>
          <PtaSelect
            value={g(fd, 'transferor_country')}
            onChange={ev => oc('transferor_country', ev.target.value)}
            hasError={!!e.transferor_country}
            placeholder="Select country"
          >
            {COUNTRIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </PtaSelect>
        </PtaField>
      </div>

      <div className="pta-form-grid-2">
        <PtaField label="Entity type" required error={e.transferor_entity_type}>
          <PtaSelect
            value={entityType}
            onChange={ev => {
              oc('transferor_entity_type', ev.target.value)
              if (ev.target.value !== 'Other') oc('transferor_entity_type_other', '')
            }}
            hasError={!!e.transferor_entity_type}
            placeholder="Select entity type"
          >
            {ENTITY_TYPES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </PtaSelect>
        </PtaField>

        <PtaField label="Registration or company number">
          <PtaInput
            value={g(fd, 'transferor_reg_number')}
            onChange={ev => oc('transferor_reg_number', ev.target.value)}
            placeholder="e.g. 12345678"
          />
        </PtaField>
      </div>

      {isOtherEntity && (
        <PtaField label="Please specify entity type" required error={e.transferor_entity_type_other}>
          <PtaInput
            value={g(fd, 'transferor_entity_type_other')}
            onChange={ev => oc('transferor_entity_type_other', ev.target.value)}
            placeholder="e.g. Joint Venture, Cooperative, State Enterprise"
            hasError={!!e.transferor_entity_type_other}
            style={{ maxWidth: '50%' }}
          />
        </PtaField>
      )}

      <PtaField label="Registered address" required error={e.transferor_address}>
        <PtaTextarea
          value={g(fd, 'transferor_address')}
          onChange={ev => oc('transferor_address', ev.target.value)}
          placeholder="Full registered address including country"
          hasError={!!e.transferor_address}
          rows={3}
        />
      </PtaField>

      <div className="pta-form-grid-2">
        <PtaField label="Primary contact name" required error={e.transferor_contact_name}>
          <PtaInput
            value={g(fd, 'transferor_contact_name')}
            onChange={ev => oc('transferor_contact_name', ev.target.value)}
            placeholder="Full name"
            hasError={!!e.transferor_contact_name}
          />
        </PtaField>
        <PtaField label="Contact email" required error={e.transferor_contact_email}>
          <PtaInput
            type="email"
            value={g(fd, 'transferor_contact_email')}
            onChange={ev => oc('transferor_contact_email', ev.target.value)}
            placeholder="name@company.com"
            hasError={!!e.transferor_contact_email}
          />
        </PtaField>
      </div>

      <div className="pta-form-grid-2">
        <PtaField label="Contact phone">
          <PtaInput
            value={g(fd, 'transferor_contact_phone')}
            onChange={ev => oc('transferor_contact_phone', ev.target.value)}
            placeholder="+1 555 000 0000"
          />
        </PtaField>
        <PtaField
          label="Authorised signatory name and title"
          required
          error={e.transferor_signatory}
          helper="The person who will sign the agreement on behalf of this entity"
        >
          <PtaInput
            value={g(fd, 'transferor_signatory')}
            onChange={ev => oc('transferor_signatory', ev.target.value)}
            placeholder="e.g. Jane Smith, CEO"
            hasError={!!e.transferor_signatory}
          />
        </PtaField>
      </div>
    </div>
  )
}
