'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  loading: boolean
}

// ── Compass geometry ──────────────────────────────────────────────
const CX = 70
const CY = 70
const R_OUTER = 62
const R_MID   = 52
const R_INNER = 42
const R_SWEEP = 47
const R_TICK  = 62
const SWEEP_C = 2 * Math.PI * R_SWEEP

const TICKS = [
  { angle: 0,   major: true  },
  { angle: 45,  major: false },
  { angle: 90,  major: true  },
  { angle: 135, major: false },
  { angle: 180, major: true  },
  { angle: 225, major: false },
  { angle: 270, major: true  },
  { angle: 315, major: false },
]

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const NEEDLE_SEQUENCE = {
  rotate: [160, -25, 12, -6, 3, 0],
  times:  [0, 0.45, 0.65, 0.78, 0.88, 1.0],
}

// Corner bracket border styles per position
const BRACKET_STYLES: Record<string, React.CSSProperties> = {
  tl: { top: '40px',    left:  '40px',  borderTop:    '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)', borderLeft:  '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)' },
  tr: { top: '40px',    right: '40px',  borderTop:    '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)', borderRight: '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)' },
  bl: { bottom: '40px', left:  '40px',  borderBottom: '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)', borderLeft:  '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)' },
  br: { bottom: '40px', right: '40px',  borderBottom: '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)', borderRight: '0.5px solid color-mix(in srgb, var(--color-gold) 30%, transparent)' },
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  const [visible, setVisible]   = useState(true)
  const needleControls          = useAnimation()
  const sweepControls           = useAnimation()

  useEffect(() => {
    setVisible(loading)
  }, [loading])

  useEffect(() => {
    if (!visible) return
    let active = true

    async function runLoop() {
      while (active) {
        await needleControls.set({ rotate: 160 })
        await sweepControls.set({ strokeDashoffset: SWEEP_C })
        needleControls.start({
          rotate: NEEDLE_SEQUENCE.rotate,
          transition: { duration: 1.6, times: NEEDLE_SEQUENCE.times, ease: 'easeOut' },
        })
        await sweepControls.start({
          strokeDashoffset: SWEEP_C * 0.08,
          transition: { duration: 1.4, ease: [0.32, 0, 0.18, 1] },
        })
        await new Promise(r => setTimeout(r, 900))
        await sweepControls.start({
          strokeDashoffset: SWEEP_C,
          transition: { duration: 0.6, ease: 'easeIn' },
        })
        await new Promise(r => setTimeout(r, 300))
      }
    }

    runLoop()
    return () => { active = false }
  }, [visible, needleControls, sweepControls])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          style={{
            position: 'fixed', inset: 0,
            background: 'var(--color-base)',
            zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '36px',
          }}
        >

          {/* Corner brackets */}
          {(['tl','tr','bl','br'] as const).map(pos => (
            <motion.div key={pos}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'absolute', width: '20px', height: '20px', ...BRACKET_STYLES[pos] }}
            />
          ))}

          {/* Compass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">

              {/* Outer static ring */}
              <circle cx={CX} cy={CY} r={R_OUTER}
                style={{ stroke: 'var(--color-gold)', opacity: 0.9 }} strokeWidth="0.8" />

              {/* Tick marks */}
              {TICKS.map(({ angle, major }) => {
                const outer = polarToXY(CX, CY, R_TICK, angle)
                const inner = polarToXY(CX, CY, R_TICK - (major ? 10 : 6), angle)
                return (
                  <line key={angle} x1={outer.x} y1={outer.y} x2={inner.x} y2={inner.y}
                    style={{ stroke: 'var(--color-gold)' }}
                    strokeWidth={major ? 1.2 : 0.6} opacity={major ? 0.9 : 0.45} />
                )
              })}

              {/* Mid ring — slow clockwise */}
              <motion.circle cx={CX} cy={CY} r={R_MID}
                style={{ stroke: 'var(--color-gold)', opacity: 0.5, transformOrigin: `${CX}px ${CY}px` }}
                strokeWidth="0.5" strokeDasharray="3 9"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              />

              {/* Inner ring — counter-clockwise */}
              <motion.circle cx={CX} cy={CY} r={R_INNER}
                style={{ stroke: 'var(--color-gold)', opacity: 0.35, transformOrigin: `${CX}px ${CY}px` }}
                strokeWidth="0.4" strokeDasharray="2 6"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6.5, ease: 'linear' }}
              />

              {/* Cross-hair lines */}
              <line x1={CX - R_OUTER} y1={CY} x2={CX + R_OUTER} y2={CY}
                style={{ stroke: 'var(--color-gold)' }} strokeWidth="0.3" opacity="0.15" />
              <line x1={CX} y1={CY - R_OUTER} x2={CX} y2={CY + R_OUTER}
                style={{ stroke: 'var(--color-gold)' }} strokeWidth="0.3" opacity="0.15" />

              {/* Sweep arc */}
              <g style={{ transform: 'rotate(-90deg)', transformOrigin: `${CX}px ${CY}px` }}>
                <motion.circle cx={CX} cy={CY} r={R_SWEEP}
                  style={{ stroke: 'var(--color-gold)' }}
                  strokeWidth="1.5" strokeLinecap="round"
                  strokeDasharray={SWEEP_C}
                  initial={{ strokeDashoffset: SWEEP_C }}
                  animate={sweepControls}
                />
              </g>

              {/* Needle */}
              <motion.g animate={needleControls} style={{ transformOrigin: `${CX}px ${CY}px` }}>
                <path d={`M${CX},${CY - R_OUTER + 10} L${CX + 5},${CY} L${CX},${CY - 8} L${CX - 5},${CY} Z`}
                  style={{ fill: 'var(--color-gold)' }} opacity="0.95" />
                <path d={`M${CX},${CY + R_OUTER - 10} L${CX + 5},${CY} L${CX},${CY + 8} L${CX - 5},${CY} Z`}
                  style={{ fill: 'var(--color-gold)' }} opacity="0.18" />
              </motion.g>

              {/* Pivot jewel */}
              <circle cx={CX} cy={CY} r={7}
                style={{ stroke: 'var(--color-gold)', fill: 'var(--color-base)' }} strokeWidth="0.6" />
              <motion.circle cx={CX} cy={CY} r={3}
                style={{ fill: 'var(--color-gold)', transformOrigin: `${CX}px ${CY}px` }}
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.75, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />

            </svg>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontFamily: 'var(--font-display, "Cormorant Garamond", Georgia, serif)',
              fontSize: '24px', fontWeight: 300, letterSpacing: '0.04em',
              color: 'var(--color-text-primary)', lineHeight: 1.1, margin: 0,
            }}>
              P<span style={{ color: 'var(--color-gold)' }}>&amp;</span>T Advisory
            </p>
            <p style={{
              fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
              fontSize: '8px', fontWeight: 300, letterSpacing: '0.28em',
              color: 'var(--color-gold-muted)', textTransform: 'uppercase',
              marginTop: '8px', marginBottom: 0,
            }}>
              Protocol &amp; Transfer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ width: '120px' }}
          >
            <div style={{
              width: '100%', height: '0.5px',
              background: 'var(--color-border-faint)',
              position: 'relative', overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0,
                  width: '45%',
                  background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                }}
                animate={{ x: ['-100%', '280%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', repeatDelay: 0.4 }}
              />
            </div>
            <p style={{
              fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
              fontSize: '8px', letterSpacing: '0.28em',
              color: 'var(--color-text-tertiary)',
              textAlign: 'center', marginTop: '10px', marginBottom: 0,
            }}>
              LOADING
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
