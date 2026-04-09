'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX  = 0
    let ringY  = 0
    let rafId  = 0
    let ringSize = 32

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX - 4}px`
      dot.style.top  = `${mouseY - 4}px`
    }

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.dataset['cursor'] === 'expand'
      ) {
        ringSize = 48
        ring.style.width  = '48px'
        ring.style.height = '48px'
      }
    }

    const onMouseLeave = () => {
      ringSize = 32
      ring.style.width  = '32px'
      ring.style.height = '32px'
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.left = `${ringX - ringSize / 2}px`
      ring.style.top  = `${ringY - ringSize / 2}px`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter, true)
    document.addEventListener('mouseleave', onMouseLeave, true)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter, true)
      document.removeEventListener('mouseleave', onMouseLeave, true)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width:      '8px',
          height:     '8px',
          background: 'var(--gold)',
          top:        0,
          left:       0,
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width:        '32px',
          height:       '32px',
          border:       '1px solid rgba(201,168,76,0.4)',
          top:          0,
          left:         0,
          zIndex:       9998,
          transition:   'width 0.2s ease, height 0.2s ease',
        }}
      />
    </>
  )
}
