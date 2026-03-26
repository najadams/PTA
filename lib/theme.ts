export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'pta-theme'

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getSavedTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'dark' || saved === 'light' ? saved : null
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
}

export function getActiveTheme(): Theme {
  return getSavedTheme() ?? getSystemTheme()
}
