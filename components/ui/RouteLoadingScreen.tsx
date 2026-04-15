'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import LoadingScreen from './LoadingScreen'

/**
 * Mounts the LoadingScreen overlay and drives its visibility:
 * - Initial page load: shown for 1 500 ms then fades out
 * - Route transitions: shown for 650 ms on each pathname change
 */
export default function RouteLoadingScreen() {
  const pathname    = usePathname()
  const [loading, setLoading] = useState(true)
  const isFirst     = useRef(true)

  // Initial page-load display
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  // Route-transition display
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [pathname])

  return <LoadingScreen loading={loading} />
}
