'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const n = (v: unknown) => (v ? Number(v) : NaN)

const YN           = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
const FEE_TYPES    = [
  { value: 'Running royalty (% of revenue)', label: 'Running royalty (% of revenue)' },
  { value: 'Fixed annual fee',               label: 'Fixed annual fee' },
  { value: 'Lump sum (one-time)',            label: 'Lump sum (one-time)' },
  { value: 'Hybrid (royalty + fixed)',       label: 'Hybrid (royalty + fixed)' },
  { value: 'Management service fee',         label: 'Management service fee' },
]
const CURRENCIES   = [{ value: 'USD', label: 'USD' }, { value: 'GHS', label: 'GHS' }, { value: 'EUR', label: 'EUR' }, { value: 'GBP', label: 'GBP' }, { value: 'Other', label: 'Other' }]
const FREQ_OPTS    = [{ value: 'Monthly', label: 'Monthly' }, { value: 'Quarterly', label: 'Quarterly' }, { value: 'Semi-annually', label: 'Semi-annually' }, { value: 'Annually', label: 'Annually' }, { value: 'One-time', label: 'One-time' }]
const ROUTING_OPTS = [
  { value: 'From local GHS revenue',                  label: 'From local GHS revenue' },
  { value: 'From offshore/foreign currency revenue',  label: 'From offshore/foreign currency revenue' },
  { value: 'Mixed (local and offshore)',               label: 'Mixed (local and offshore)' },
  { value: 'Not yet determined',                       label: 'Not yet determined' },
]
const VALUE_OPTS   = [
  { value: 'Under $500,000',            label: 'Under $500,000' },
  { value: '$500,000 – $2,000,000',     label: '$500,000 – $2,000,000' },
  { value: '$2,000,000 – $10,000,000',  label: '$2,000,000 – $10,000,000' },
  { value: 'Over $10,000,000',          label: 'Over $10,000,000' },
]

export function Step5Commercial({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const feeType  = g(fd, 'fee_type')
  const feeRate  = n(fd.fee_rate)
  const tsfRate  = n(fd.tsf_rate)
  const duration = n(fd.agreement_duration_months)
  const routing  = g(fd, 'payment_routing')
  const renewal  = g(fd, 'renewal_option')
  const hasRoy   = feeType.includes('royalty') || feeType.includes('Hybrid')
  const hasLump  = feeType.includes('Lump') || feeType.includes('Hybrid')

  return (
    <div>
      <PtaField label="Fee type" required error={e.fee_type}>
        <PtaRadioGroup name="fee_type" options={FEE_TYPES}
          value={feeType} onChange={v => oc('fee_type', v)} hasError={!!e.fee_type} />
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Currency" required error={e.fee_currency}>
          <PtaRadioGroup name="fee_currency" options={CURRENCIES} variant="pill"
            value={g(fd,'fee_currency')} onChange={v => oc('fee_currency', v)} hasError={!!e.fee_currency} />
        </PtaField>
        <PtaField label="Payment frequency" required error={e.payment_frequency}>
          <PtaRadioGroup name="payment_frequency" options={FREQ_OPTS} variant="pill"
            value={g(fd,'payment_frequency')} onChange={v => oc('payment_frequency', v)} hasError={!!e.payment_frequency} />
        </PtaField>
      </div>

      {hasRoy && (
        <PtaField label="Royalty or fee rate (%)" helper="GIPC standard range: 0 – 6% of net sales">
          <PtaInput type="number" min={0} step={0.1} value={g(fd,'fee_rate')} onChange={ev => oc('fee_rate', ev.target.value)} placeholder="e.g. 4.5" />
          {!isNaN(feeRate) && feeRate > 6 && <InlineAlert variant="warning">This rate exceeds the standard GIPC threshold. Ensure supporting justification is available.</InlineAlert>}
        </PtaField>
      )}

      {hasRoy && (
        <PtaField label="Royalty calculation basis">
          <PtaRadioGroup 
            name="royalty_base"
            value={g(fd,'royalty_base')} 
            onChange={val => oc('royalty_base', val)}
            options={['Net sales','Gross revenue','Net profit','Per unit/transaction','Other'].map(o => ({ label: o, value: o }))}
          />
        </PtaField>
      )}

      {hasLump && (
        <PtaField label="Lump sum or upfront amount">
          <PtaInput value={g(fd,'lump_sum_amount')} onChange={ev => oc('lump_sum_amount', ev.target.value)} placeholder="e.g. USD 250,000" />
        </PtaField>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Minimum annual royalty (if applicable)">
          <PtaInput value={g(fd,'minimum_royalty')} onChange={ev => oc('minimum_royalty', ev.target.value)} placeholder="e.g. USD 50,000" />
        </PtaField>
        <PtaField label="Agreement duration (months)" required error={e.agreement_duration_months}>
          <PtaInput type="number" min={1} value={g(fd,'agreement_duration_months')} onChange={ev => oc('agreement_duration_months', ev.target.value)} placeholder="e.g. 60" hasError={!!e.agreement_duration_months} />
          {!isNaN(duration) && duration > 0 && duration < 18 && <InlineAlert variant="warning">GIPC typically requires a minimum term of 18 months for TTA approval.</InlineAlert>}
        </PtaField>
      </div>

      <PtaField label="Technical service fee rate (% of revenue), if applicable" helper="GIPC standard maximum: 5%">
        <PtaInput type="number" min={0} step={0.1} value={g(fd,'tsf_rate')} onChange={ev => oc('tsf_rate', ev.target.value)} placeholder="e.g. 3" />
        {!isNaN(tsfRate) && tsfRate > 5 && <InlineAlert variant="warning">TSF rate exceeds standard GIPC threshold.</InlineAlert>}
      </PtaField>

      <PtaField label="Existing GIPC registration number (if renewing or amending)">
        <PtaInput value={g(fd,'prior_gipc_number')} onChange={ev => oc('prior_gipc_number', ev.target.value)} placeholder="e.g. GIPC/TTA/2022/0001" />
      </PtaField>

      <PtaField label="Does the agreement include renewal provisions?" required error={e.renewal_option}>
        <PtaRadioGroup name="renewal_option" options={YN} variant="pill"
          value={renewal} onChange={v => oc('renewal_option', v)} hasError={!!e.renewal_option} />
      </PtaField>

      {renewal === 'yes' && (
        <PtaField label="Describe renewal terms">
          <PtaInput value={g(fd,'renewal_terms')} onChange={ev => oc('renewal_terms', ev.target.value)} placeholder="e.g. Auto-renews for 2-year periods unless 90 days notice given" />
        </PtaField>
      )}

      <PtaField label="How will fees be remitted to the licensor?" required error={e.payment_routing}>
        <PtaRadioGroup name="payment_routing" options={ROUTING_OPTS}
          value={routing} onChange={v => oc('payment_routing', v)} hasError={!!e.payment_routing} />
      </PtaField>

      {routing && routing !== 'Not yet determined' && (
        <PtaField label="Is Bank of Ghana approval anticipated for remittance?">
          <PtaRadioGroup name="bank_of_ghana_approval" options={[...YN, { value: 'unsure', label: 'Unsure' }]} variant="pill"
            value={g(fd,'bank_of_ghana_approval')} onChange={v => oc('bank_of_ghana_approval', v)} />
        </PtaField>
      )}

      <PtaField label="Estimated total annual payment value" required error={e.expected_annual_value}>
        <PtaRadioGroup name="expected_annual_value" options={VALUE_OPTS}
          value={g(fd,'expected_annual_value')} onChange={v => oc('expected_annual_value', v)} hasError={!!e.expected_annual_value} />
      </PtaField>
    </div>
  )
}
