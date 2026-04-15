'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

const SESSION_KEY = 'pta-intro-shown'

export default function RouteLoadingScreen() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    sessionStorage.setItem(SESSION_KEY, '1')
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(t)
  }, [])

  return <LoadingScreen loading={loading} />
}
