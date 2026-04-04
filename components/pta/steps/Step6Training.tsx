'use client'
import { PtaField }      from '../shared/PtaField'
import { PtaInput }      from '../shared/PtaInput'
import { PtaTextarea }   from '../shared/PtaTextarea'
import { PtaRadioGroup } from '../shared/PtaRadioGroup'
import { InlineAlert }   from '../shared/InlineAlert'
import { type StepProps } from '../shared/portal'

const g = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const YN = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]

const LOCATION_OPTS = [
  { value: 'On-site in Ghana',          label: 'On-site in Ghana' },
  { value: "At licensor's premises",    label: "At licensor's premises" },
  { value: 'Remote / online',           label: 'Remote / online' },
  { value: 'Hybrid (on-site and remote)', label: 'Hybrid (on-site and remote)' },
  { value: 'Not yet determined',        label: 'Not yet determined' },
]
const FORMAT_OPTS = [
  { value: 'On-site', label: 'On-site' },
  { value: 'Remote',  label: 'Remote' },
  { value: 'Hybrid',  label: 'Hybrid' },
]

export function Step6Training({ formData: fd, onChange: oc, errors: e }: StepProps) {
  const trainingOverview = g(fd, 'training_overview')
  const showTrainingWarn = trainingOverview.trim().length < 20
  const hasSupport       = g(fd, 'ongoing_support') === 'yes'

  return (
    <div>
      <PtaField label="Overview of training and knowledge transfer provisions">
        <PtaTextarea value={trainingOverview} onChange={ev => oc('training_overview', ev.target.value)}
          placeholder="Describe training content, objectives, and how knowledge will be transferred to local staff..." rows={5} />
        {showTrainingWarn && (
          <InlineAlert variant="warning">
            Training provisions are required by GIPC under L.I. 1547. Leaving this blank will require completion before filing.
          </InlineAlert>
        )}
      </PtaField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <PtaField label="Training duration (weeks)">
          <PtaInput type="number" min={0} value={g(fd,'training_duration_weeks')}
            onChange={ev => oc('training_duration_weeks', ev.target.value)} placeholder="e.g. 4" />
        </PtaField>
        <PtaField label="Number of personnel to be trained">
          <PtaInput type="number" min={0} value={g(fd,'trainee_count')}
            onChange={ev => oc('trainee_count', ev.target.value)} placeholder="e.g. 12" />
        </PtaField>
      </div>

      <PtaField label="Training location">
        <PtaRadioGroup name="training_location" options={LOCATION_OPTS}
          value={g(fd,'training_location')} onChange={v => oc('training_location', v)} />
      </PtaField>

      <PtaField label="Primary training format">
        <PtaRadioGroup name="training_type" options={FORMAT_OPTS} variant="pill"
          value={g(fd,'training_type')} onChange={v => oc('training_type', v)} />
      </PtaField>

      <PtaField label="Training schedule or timeline notes"
        helper="Include proposed months, phases, or milestones where known">
        <PtaTextarea value={g(fd,'training_schedule_notes')} onChange={ev => oc('training_schedule_notes', ev.target.value)}
          placeholder="e.g. Phase 1 (technical onboarding) — Q2 2025, Phase 2 (advanced operations) — Q4 2025" rows={3} />
      </PtaField>

      <PtaField label="Does the agreement include ongoing technical support?" required error={e.ongoing_support}>
        <PtaRadioGroup name="ongoing_support" options={YN} variant="pill"
          value={g(fd,'ongoing_support')} onChange={v => oc('ongoing_support', v)}
          hasError={!!e.ongoing_support} />
      </PtaField>

      {hasSupport && (
        <PtaField label="Describe the ongoing support arrangement">
          <PtaTextarea value={g(fd,'support_terms')} onChange={ev => oc('support_terms', ev.target.value)}
            placeholder="e.g. 24/7 helpdesk access, quarterly on-site visits, designated account manager..." rows={4} />
        </PtaField>
      )}
    </div>
  )
}
