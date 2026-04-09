export interface Sector {
  name:   string
  detail: string
  icon:   string  // SVG path data
}

export const sectors: Sector[] = [
  {
    name:   'Telecommunications',
    detail: 'TTA registration, GIPC compliance, expatriate quotas, spectrum licensing advisory',
    icon:   'rect',
  },
  {
    name:   'FMCG & Consumer Goods',
    detail: 'FDA product registration, trade development, distribution partner identification',
    icon:   'fmcg',
  },
  {
    name:   'Banking & Finance',
    detail: 'Bank of Ghana licensing, TTA & fintech compliance, employment law',
    icon:   'banking',
  },
  {
    name:   'Mining & Resources',
    detail: 'Minerals Commission licensing, environmental permits, rotator permit authorisations',
    icon:   'mining',
  },
  {
    name:   'Technology & Software',
    detail: 'TTA structuring, IP registration, work permits, market entry strategy',
    icon:   'tech',
  },
  {
    name:   'Logistics & Mobility',
    detail: 'GIPC investor registration, corporate immigration, local content advisory',
    icon:   'logistics',
  },
]
