export interface ServicePanelData {
  id:          string
  eyebrow:     string
  title:       string
  titleItalic: string
  description: string
  items:       string[]
  note?: {
    label: string
    body:  string
  }
}

export const panels: ServicePanelData[] = [
  {
    id:          'tta',
    eyebrow:     'FLAGSHIP SERVICE',
    title:       'TTA & GIPC',
    titleItalic: 'Advisory',
    description: "Ghana's GIPC Act 865 requires all technology licensing arrangements between foreign and local entities to be registered as Technology Transfer Agreements. Non-compliance puts your entire remittance structure at risk. This is where PTA began, and where we are unmatched.",
    items: [
      'Technology Transfer Agreement registration & compliance',
      'TTA drafting, review & structuring',
      'GIPC investor registration (new & renewal)',
      'GIPC compliance audits & gap analysis',
      'Automatic immigrant quota acquisition',
      'Duty exemption applications',
      'GIPC Bill 2025 readiness advisory',
      'Transfer pricing guidance',
      'Royalty & fee structuring advisory',
      'Re-registration & rectification of rejected TTAs',
      'Annual TTA renewal management',
      'Ongoing TTA compliance monitoring',
    ],
    note: {
      label: 'GIPC BILL 2025',
      body:  'New obligations are imminent. Companies that have not reviewed their TTA registration status face significant exposure. Contact us now for a free compliance check before the window closes.',
    },
  },
  {
    id:          'immigration',
    eyebrow:     'IMMIGRATION',
    title:       'Corporate',
    titleItalic: 'Immigration',
    description: 'End-to-end immigration management for multinational employers in Ghana — from work permits and residence to citizenship advisory and annual compliance filings.',
    items: [
      'Work & residence permit acquisition and renewals',
      'End-of-assignment departure formalities',
      'GIPC automatic quota & replacement',
      'Immigration compliance audits',
      'Specialised sector work authorisations (Rotator Permit)',
      'Entry visas & emergency visas on arrival',
      'Visa extensions & re-entry visas',
      'Citizenship law & dual citizenship advisory',
      'Citizenship by investment',
      'Permanent residency & right of abode',
      'Diaspora engagement advisory',
      'Annual immigration returns filing',
    ],
  },
  {
    id:          'corporate',
    eyebrow:     'CORPORATE & BUSINESS',
    title:       'Corporate &',
    titleItalic: 'Business Services',
    description: 'Incorporation, secretarial compliance, tax registrations, and corporate transactions — everything required to establish and maintain a legally sound business presence in Ghana.',
    items: [
      'Business incorporation — all entity structures',
      'Company secretarial services (retainer)',
      'Annual returns filing (Registrar General)',
      'Registration with regulatory bodies',
      'VAT & income tax registrations',
      'Monthly & annual GRA filings',
      'Intellectual property registration',
      'Corporate & commercial transactions',
      'Cross-border transactions & expansions',
      'Pre-investment & acquisition due diligence',
      'Document procurement & legalisation',
      'Translation & certification of official documents',
    ],
  },
  {
    id:          'regulatory',
    eyebrow:     'REGULATORY COMPLIANCE',
    title:       'Regulatory',
    titleItalic: 'Compliance',
    description: 'Sector-specific licensing and statutory compliance across every major regulatory body in Ghana — so your operations remain fully authorised at all times.',
    items: [
      'Ghana Free Zones Authority registration & exemptions',
      'FDA product registration — food, pharma, cosmetics, medical devices',
      'EPA environmental permit applications',
      'Petroleum Commission registration & licensing',
      'Minerals Commission licensing',
      'Bank of Ghana licensing (fintech, remittance, non-banking)',
      'Gaming Commission licensing',
      'Ghana Standards Authority certification',
      'Collective bargaining agreements',
      'HR & employee outsourcing management',
      'Local content & labour localisation advisory',
      'Tax law & advisory services',
    ],
  },
  {
    id:          'market',
    eyebrow:     'MARKET INTELLIGENCE',
    title:       'Market &',
    titleItalic: 'Social Research',
    description: 'Evidence-based intelligence for businesses entering or expanding in Ghana and West Africa. We are your eyes on the ground — delivering the insights you need to make confident decisions.',
    items: [
      'Market & sector insight reports',
      'Customer satisfaction surveys',
      'Brand health tracking & competitive analysis',
      'Data collection & field research',
      'Quantitative & qualitative market research',
      'Participant & event feedback surveys',
      'Feasibility studies',
      'Sector-specific intelligence briefings',
    ],
  },
  {
    id:          'trade',
    eyebrow:     'TRADE & MARKET ENTRY',
    title:       'Trade Development &',
    titleItalic: 'Market Entry',
    description: 'Strategic market entry support for companies entering Ghana and West Africa — from partner identification and trade missions to feasibility studies and in-market representation.',
    items: [
      'Export market development',
      'Distributor, agent & importer identification',
      'Business partner search & vetting',
      'Trade mission planning & coordination',
      'Business meeting & company visit organisation',
      'Networking events & business conferences',
      'In-market meeting setup & follow-up',
      'Market plans & feasibility studies',
      'Programme facilitation & evaluation',
      'Strategic briefing reports',
    ],
  },
]
