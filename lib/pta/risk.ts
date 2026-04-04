export type RiskScore = 'Low' | 'Medium' | 'High'

export interface RiskResult {
  score: RiskScore
  flags: string[]
}

/**
 * Scores a PTA intake submission against GIPC Act 865 risk thresholds.
 * Returns a score of Low / Medium / High and human-readable flag descriptions.
 */
export function calculateRisk(formData: Record<string, unknown>): RiskResult {
  const flags: string[] = []

  const feeRate              = Number(formData.fee_rate)
  const tsfRate              = Number(formData.tsf_rate)
  const durationMonths       = Number(formData.agreement_duration_months)
  const sublicensingAllowed  = formData.sublicensing_allowed === true
  const relatedPartyType     = formData.related_party_type as string | undefined
  const trainingOverview     = formData.training_overview as string | undefined
  const existingPaymentsMade = formData.existing_payments_made === true

  // ── HIGH triggers ──────────────────────────────────────────────────────────
  const highFlags: string[] = []

  if (!isNaN(feeRate) && feeRate > 6) {
    highFlags.push(`Royalty rate exceeds 6% GIPC threshold (submitted: ${feeRate}%)`)
  }
  if (!isNaN(tsfRate) && tsfRate > 5) {
    highFlags.push(`Technology service fee rate exceeds 5% GIPC threshold (submitted: ${tsfRate}%)`)
  }
  if (!isNaN(durationMonths) && durationMonths > 0 && durationMonths < 18) {
    highFlags.push(`Agreement duration is below 18-month minimum (submitted: ${durationMonths} months)`)
  }
  if (sublicensingAllowed && relatedPartyType === 'unrelated') {
    highFlags.push('Sublicensing permitted to unrelated third parties — heightened GIPC scrutiny likely')
  }

  if (highFlags.length > 0) {
    return { score: 'High', flags: highFlags }
  }

  // ── MEDIUM triggers ────────────────────────────────────────────────────────
  if (!isNaN(feeRate) && feeRate >= 5 && feeRate <= 6) {
    flags.push(`Royalty rate is at the upper GIPC boundary (${feeRate}%) — may require additional justification`)
  }
  const trainingText = trainingOverview?.trim() ?? ''
  if (trainingText.length < 20) {
    flags.push('Training and technology transfer description is insufficient — GIPC expects substantive detail')
  }
  if (existingPaymentsMade) {
    flags.push('Payments already made under the agreement — retroactive compliance registration required')
  }

  if (flags.length > 0) {
    return { score: 'Medium', flags }
  }

  // ── LOW ───────────────────────────────────────────────────────────────────
  return { score: 'Low', flags: [] }
}
