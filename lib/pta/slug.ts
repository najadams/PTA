/**
 * Generates a URL-safe session slug from a company name.
 * Format: "{sanitised-company-name}-{year}"
 * Example: "mtn-ghana-2025"
 */
export function generateSlug(companyName: string): string {
  const year = new Date().getFullYear()

  const base = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumeric → hyphen
    .replace(/^-+|-+$/g, '')      // trim leading/trailing hyphens
    .slice(0, 50)                  // leave room for "-YYYY"

  return `${base}-${year}`
}

// Charset excludes O, 0, I, 1 to avoid visual ambiguity
const REFERENCE_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

/**
 * Generates a unique PTA reference number.
 * Format: "PTA-XXXXXXXX" (8 chars from unambiguous charset)
 */
export function generateReference(): string {
  let suffix = ''
  for (let i = 0; i < 8; i++) {
    suffix += REFERENCE_CHARSET[Math.floor(Math.random() * REFERENCE_CHARSET.length)]
  }
  return `PTA-${suffix}`
}
