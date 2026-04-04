'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaSelect }     from '../shared/PtaSelect'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const n = (v: unknown) => (v ? Number(v) : NaN)

const YN = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]

export function Step5Commercial({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const feeType   = g(fd, 'fee_type')
  const feeRate   = n(fd.fee_rate)
  const tsfRate   = n(fd.tsf_rate)
  const duration  = n(fd.agreement_duration_months)
  const routing   = g(fd, 'payment_routing')
  const renewal   = g(fd, 'renewal_option')
  const hasRoy    = feeType.includes('royalty') || feeType.includes('Hybrid')
  const hasLump   = feeType.includes('Lump') || feeType.includes('Hybrid')

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <PtaField label="Fee type" required error={e.fee_type}>
          <PtaSelect value={feeType} onChange={ev => oc('fee_type', ev.target.value)}
            placeholder="Select fee type" hasError={!!e.fee_type}>
            {['Running royalty (% of revenue)','Fixed annual fee','Lump sum (one-time)','Hybrid (royalty + fixed)','Management service fee'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
        <PtaField label="Currency" required error={e.fee_currency}>
          <PtaSelect value={g(fd,'fee_currency')} onChange={ev => oc('fee_currency', ev.target.value)}
            placeholder="Select" hasError={!!e.fee_currency}>
            {['USD','GHS','EUR','GBP','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
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
          <PtaSelect value={g(fd,'royalty_base')} onChange={ev => oc('royalty_base', ev.target.value)} placeholder="Select (optional)">
            {['Net sales','Gross revenue','Net profit','Per unit/transaction','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
      )}

      {hasLump && (
        <PtaField label="Lump sum or upfront amount">
          <PtaInput value={g(fd,'lump_sum_amount')} onChange={ev => oc('lump_sum_amount', ev.target.value)} placeholder="e.g. USD 250,000" />
        </PtaField>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <PtaField label="Minimum annual royalty (if applicable)">
          <PtaInput value={g(fd,'minimum_royalty')} onChange={ev => oc('minimum_royalty', ev.target.value)} placeholder="e.g. USD 50,000" />
        </PtaField>
        <PtaField label="Payment frequency" required error={e.payment_frequency}>
          <PtaSelect value={g(fd,'payment_frequency')} onChange={ev => oc('payment_frequency', ev.target.value)} placeholder="Select" hasError={!!e.payment_frequency}>
            {['Monthly','Quarterly','Semi-annually','Annually','One-time'].map(o => <option key={o} value={o}>{o}</option>)}
          </PtaSelect>
        </PtaField>
      </div>

      <PtaField label="Technical service fee rate (% of revenue), if applicable" helper="GIPC standard maximum: 5%">
        <PtaInput type="number" min={0} step={0.1} value={g(fd,'tsf_rate')} onChange={ev => oc('tsf_rate', ev.target.value)} placeholder="e.g. 3" />
        {!isNaN(tsfRate) && tsfRate > 5 && <InlineAlert variant="warning">TSF rate exceeds standard GIPC threshold.</InlineAlert>}
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <PtaField label="Agreement duration (months)" required error={e.agreement_duration_months}>
          <PtaInput type="number" min={1} value={g(fd,'agreement_duration_months')} onChange={ev => oc('agreement_duration_months', ev.target.value)} placeholder="e.g. 60" hasError={!!e.agreement_duration_months} />
          {!isNaN(duration) && duration > 0 && duration < 18 && <InlineAlert variant="warning">GIPC typically requires a minimum term of 18 months for TTA approval.</InlineAlert>}
        </PtaField>
        <PtaField label="Existing GIPC registration number (if renewing or amending)">
          <PtaInput value={g(fd,'prior_gipc_number')} onChange={ev => oc('prior_gipc_number', ev.target.value)} placeholder="e.g. GIPC/TTA/2022/0001" />
        </PtaField>
      </div>

      <PtaField label="Does the agreement include renewal provisions?" required error={e.renewal_option}>
        <PtaRadioGroup name="renewal_option" options={YN} value={renewal} onChange={v => oc('renewal_option', v)} hasError={!!e.renewal_option} />
      </PtaField>

      {renewal === 'yes' && (
        <PtaField label="Describe renewal terms">
          <PtaInput value={g(fd,'renewal_terms')} onChange={ev => oc('renewal_terms', ev.target.value)} placeholder="e.g. Auto-renews for 2-year periods unless 90 days notice given" />
        </PtaField>
      )}

      <PtaField label="How will fees be remitted to the licensor?" required error={e.payment_routing}>
        <PtaSelect value={routing} onChange={ev => oc('payment_routing', ev.target.value)} placeholder="Select" hasError={!!e.payment_routing}>
          {['From local GHS revenue','From offshore/foreign currency revenue','Mixed (local and offshore)','Not yet determined'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>

      {routing && routing !== 'Not yet determined' && (
        <PtaField label="Is Bank of Ghana approval anticipated for remittance?">
          <PtaRadioGroup name="bank_of_ghana_approval" options={[...YN, { value: 'unsure', label: 'Unsure' }]}
            value={g(fd,'bank_of_ghana_approval')} onChange={v => oc('bank_of_ghana_approval', v)} />
        </PtaField>
      )}

      <PtaField label="Estimated total annual payment value" required error={e.expected_annual_value}>
        <PtaSelect value={g(fd,'expected_annual_value')} onChange={ev => oc('expected_annual_value', ev.target.value)} placeholder="Select range" hasError={!!e.expected_annual_value}>
          {['Under $500,000','$500,000 – $2,000,000','$2,000,000 – $10,000,000','Over $10,000,000'].map(o => <option key={o} value={o}>{o}</option>)}
        </PtaSelect>
      </PtaField>
    </div>
  )
}
