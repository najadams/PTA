'use client'
import { PtaField }    from '../shared/PtaField'
import { PtaInput }    from '../shared/PtaInput'
import { PtaSelect }   from '../shared/PtaSelect'
import { PtaTextarea } from '../shared/PtaTextarea'
import { ENTITY_TYPES, type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string

export function Step2Transferee({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const entityType    = g(fd, 'transferee_entity_type')
  const isOtherEntity = entityType === 'Other'
  const isRelated     = g(fd, 'related_party_type') === 'related'

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Ghanaian entity / transferee name" required error={e.transferee_name}>
          <PtaInput
            value={g(fd, 'transferee_name')}
            onChange={ev => oc('transferee_name', ev.target.value)}
            placeholder="e.g. Acme Ghana Ltd"
            hasError={!!e.transferee_name}
          />
        </PtaField>
        <PtaField label="Ghana registration number (RGD)" required error={e.transferee_ghana_reg}>
          <PtaInput
            value={g(fd, 'transferee_ghana_reg')}
            onChange={ev => oc('transferee_ghana_reg', ev.target.value)}
            placeholder="e.g. CS00123456"
            hasError={!!e.transferee_ghana_reg}
          />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Entity type" required error={e.transferee_entity_type}>
          <PtaSelect
            value={entityType}
            onChange={ev => {
              oc('transferee_entity_type', ev.target.value)
              if (ev.target.value !== 'Other') oc('transferee_entity_type_other', '')
            }}
            hasError={!!e.transferee_entity_type}
            placeholder="Select entity type"
          >
            {ENTITY_TYPES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </PtaSelect>
        </PtaField>
        <PtaField label="Principal business activity" required error={e.transferee_business_activity}>
          <PtaInput
            value={g(fd, 'transferee_business_activity')}
            onChange={ev => oc('transferee_business_activity', ev.target.value)}
            placeholder="e.g. Retail banking"
            hasError={!!e.transferee_business_activity}
          />
        </PtaField>
      </div>

      {isOtherEntity && (
        <PtaField label="Please specify entity type" required error={e.transferee_entity_type_other}>
          <PtaInput
            value={g(fd, 'transferee_entity_type_other')}
            onChange={ev => oc('transferee_entity_type_other', ev.target.value)}
            placeholder="e.g. Joint Venture, Cooperative, State Enterprise"
            hasError={!!e.transferee_entity_type_other}
            style={{ maxWidth: '50%' }}
          />
        </PtaField>
      )}

      <PtaField label="Registered address in Ghana" required error={e.transferee_address}>
        <PtaTextarea
          value={g(fd, 'transferee_address')}
          onChange={ev => oc('transferee_address', ev.target.value)}
          placeholder="Full registered address in Ghana"
          hasError={!!e.transferee_address}
          rows={3}
        />
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Primary contact name" required error={e.transferee_contact_name}>
          <PtaInput
            value={g(fd, 'transferee_contact_name')}
            onChange={ev => oc('transferee_contact_name', ev.target.value)}
            placeholder="Full name"
            hasError={!!e.transferee_contact_name}
          />
        </PtaField>
        <PtaField label="Contact email" required error={e.transferee_contact_email}>
          <PtaInput
            type="email"
            value={g(fd, 'transferee_contact_email')}
            onChange={ev => oc('transferee_contact_email', ev.target.value)}
            placeholder="name@company.com"
            hasError={!!e.transferee_contact_email}
          />
        </PtaField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Contact phone">
          <PtaInput
            value={g(fd, 'transferee_contact_phone')}
            onChange={ev => oc('transferee_contact_phone', ev.target.value)}
            placeholder="+233 55 000 0000"
          />
        </PtaField>
        <PtaField label="Authorised signatory name and title" required error={e.transferee_signatory}>
          <PtaInput
            value={g(fd, 'transferee_signatory')}
            onChange={ev => oc('transferee_signatory', ev.target.value)}
            placeholder="e.g. Kwame Asante, MD"
            hasError={!!e.transferee_signatory}
          />
        </PtaField>
      </div>

      <PtaField
        label="Relationship between parties"
        required
        error={e.related_party_type}
        helper="This affects how GIPC reviews the fee structure"
      >
        <PtaSelect
          value={g(fd, 'related_party_type')}
          onChange={ev => {
            oc('related_party_type', ev.target.value)
            if (ev.target.value !== 'related') {
              oc('relationship_subtype', '')
              oc('related_party_shareholding', '')
            }
          }}
          hasError={!!e.related_party_type}
          placeholder="Select relationship"
          style={{ maxWidth: '50%' }}
        >
          <option value="related">Related Party</option>
          <option value="unrelated">Unrelated Third Party</option>
        </PtaSelect>
      </PtaField>

      <div style={{
        overflow: 'hidden',
        maxHeight: isRelated ? '180px' : '0',
        opacity:   isRelated ? 1 : 0,
        transition: 'max-height 300ms ease, opacity 200ms ease',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
          <PtaField label="Relationship type" required={isRelated} error={e.relationship_subtype}>
            <PtaSelect
              value={g(fd, 'relationship_subtype')}
              onChange={ev => oc('relationship_subtype', ev.target.value)}
              hasError={!!e.relationship_subtype}
              placeholder="Select type"
            >
              <option value="parent_subsidiary">Parent–Subsidiary</option>
              <option value="affiliate">Affiliate (common ownership)</option>
            </PtaSelect>
          </PtaField>

          <PtaField
            label="Shareholding ratio (%)"
            required={isRelated}
            error={e.related_party_shareholding}
            helper="Enter the percentage of shares held by the foreign party"
          >
            <PtaInput
              type="number"
              min={1}
              max={100}
              step={1}
              value={g(fd, 'related_party_shareholding')}
              onChange={ev => oc('related_party_shareholding', ev.target.value)}
              placeholder="e.g. 51"
              hasError={!!e.related_party_shareholding}
            />
          </PtaField>
        </div>
      </div>
    </div>
  )
}
