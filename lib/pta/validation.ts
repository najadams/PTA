export function getStepErrors(
  step: number,
  fd: Record<string, unknown>
): Record<string, string> {
  const e: Record<string, string> = {}

  const req = (field: string, label: string) => {
    const v = fd[field]
    if (v === undefined || v === null || v === '' || (typeof v === 'string' && !v.trim())) {
      e[field] = `${label} is required`
    }
  }
  const reqArr = (field: string, label: string) => {
    if (!Array.isArray(fd[field]) || (fd[field] as unknown[]).length === 0)
      e[field] = `${label} is required`
  }
  const validEmail = (field: string) => {
    if (fd[field] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd[field] as string))
      e[field] = 'Invalid email address'
  }

  switch (step) {
    case 1:
      req('transferor_name', 'Entity name')
      req('transferor_country', 'Country of incorporation')
      req('transferor_entity_type', 'Entity type')
      if (fd.transferor_entity_type === 'Other')
        req('transferor_entity_type_other', 'Entity type specification')
      req('transferor_address', 'Registered address')
      req('transferor_contact_name', 'Contact name')
      req('transferor_contact_email', 'Contact email')
      req('transferor_signatory', 'Authorised signatory')
      validEmail('transferor_contact_email')
      break

    case 2:
      req('transferee_name', 'Entity name')
      req('transferee_entity_type', 'Entity type')
      if (fd.transferee_entity_type === 'Other')
        req('transferee_entity_type_other', 'Entity type specification')
      req('transferee_ghana_reg', 'Ghana registration number')
      req('transferee_business_activity', 'Business activity')
      req('transferee_address', 'Registered address')
      req('transferee_contact_name', 'Contact name')
      req('transferee_contact_email', 'Contact email')
      req('transferee_signatory', 'Authorised signatory')
      req('related_party_type', 'Relationship between parties')
      validEmail('transferee_contact_email')
      break

    case 3:
      if (!fd.technology_description || (fd.technology_description as string).trim().length < 80)
        e.technology_description = 'Description must be at least 80 characters'
      reqArr('technology_categories', 'At least one technology category')
      req('ip_type', 'IP type')
      req('sector', 'Sector')
      req('implementation_status', 'Implementation status')
      req('existing_payments_made', 'Payment history')
      break

    case 4:
      req('territory', 'Territory')
      req('field_of_use', 'Field of use')
      req('license_type', 'Licence type')
      req('sublicensing_allowed', 'Sub-licensing permission')
      break

    case 5:
      req('fee_type', 'Fee type')
      req('fee_currency', 'Currency')
      req('payment_frequency', 'Payment frequency')
      req('renewal_option', 'Renewal option')
      req('payment_routing', 'Payment routing')
      req('expected_annual_value', 'Estimated annual value')
      if (!fd.agreement_duration_months || Number(fd.agreement_duration_months) <= 0)
        e.agreement_duration_months = 'Duration is required'
      break

    case 6:
      req('ongoing_support', 'Ongoing support')
      break

    case 7:
      if (!fd.confidentiality_duration_years || Number(fd.confidentiality_duration_years) <= 0)
        e.confidentiality_duration_years = 'Duration is required'
      req('return_of_materials', 'Return of materials')
      break

    case 8:
      if (!fd.notice_days || Number(fd.notice_days) <= 0)
        e.notice_days = 'Notice period is required'
      req('termination_for_convenience', 'Termination for convenience')
      break

    case 9:
      req('governing_law', 'Governing law')
      req('arbitration_rules', 'Arbitration rules')
      break

    case 10:
      if (fd.confirm_accuracy !== true)        e.confirm_accuracy        = 'This confirmation is required'
      if (fd.confirm_authority !== true)       e.confirm_authority       = 'This confirmation is required'
      if (fd.confirm_confidentiality !== true) e.confirm_confidentiality = 'This confirmation is required'
      if (fd.confirm_engagement !== true)      e.confirm_engagement      = 'This confirmation is required'
      break
  }

  return e
}
