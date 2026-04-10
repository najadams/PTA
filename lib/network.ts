export interface NetworkSection {
  label: string
  items: string[]
}

export interface Partner {
  badge:    string
  name:     string
  tagline:  string
  sections: NetworkSection[]
}

export const partners: Partner[] = [
  {
    badge:   'COMPLIANCE & RESEARCH PARTNER',
    name:    'Firmus Advisory',
    tagline: "Ghana's Number One Business Consultancy",
    sections: [
      {
        label: 'BUSINESS REGISTRATION & SECRETARIAL',
        items: [
          'Company incorporation — all entity types',
          'Company secretarial services',
          'GIPC registration including TTA filings',
          'Ghana Free Zones Authority licensing',
        ],
      },
      {
        label: 'SECTOR LICENSING',
        items: [
          'FDA product registration',
          'EPA environmental permits',
          'Minerals Commission, Gaming Commission, Bank of Ghana',
        ],
      },
      {
        label: 'MARKET RESEARCH & TRADE',
        items: [
          'Market & social research (quantitative & qualitative)',
          'Customer satisfaction & brand health tracking',
          'Trade missions & partner search',
          'Export market development & feasibility studies',
        ],
      },
    ],
  },
  {
    badge:   'LEGAL & IMMIGRATION PARTNER',
    name:    'Globetrotters Legal Africa',
    tagline: 'A Leading Immigration & Corporate Law Firm, Accra',
    sections: [
      {
        label: 'CORPORATE IMMIGRATION',
        items: [
          'Work & residence permit acquisition and renewals',
          'Specialised sector work authorisations',
          'Visa acquisition, extensions & re-entry visas',
          'Immigration compliance audits & annual returns',
        ],
      },
      {
        label: 'CITIZENSHIP & RESIDENCY',
        items: [
          'Citizenship by investment & dual citizenship',
          'Permanent residency & right of abode',
          'Consular advisory & diaspora engagement',
        ],
      },
      {
        label: 'CORPORATE & LEGAL ADVISORY',
        items: [
          'Investment advisory & early-stage representation',
          'Business & corporate services',
          'Civil & commercial litigation',
          'Document procurement & legalisation',
          'Employment law, tax advisory & HR outsourcing',
        ],
      },
    ],
  },
]
