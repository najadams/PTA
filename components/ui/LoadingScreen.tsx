'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  loading: boolean
}

// ── Compass geometry ──────────────────────────────────────────────
const CX = 70
const CY = 70
const R_OUTER   = 62   // outer static ring
const R_MID     = 52   // slow clockwise dashed ring
const R_INNER   = 42   // counter-clockwise ring
const R_SWEEP   = 47   // progress arc
const R_TICK    = 62   // tick marks land on outer ring
const SWEEP_C   = 2 * Math.PI * R_SWEEP  // circumference ≈ 295

// ── Tick mark positions (8 cardinal + intercardinal) ─────────────
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

// ── Needle settle — realistic overshoot spring sequence ───────────
// Goes: start offset → overshoot past north → bounce back → settle
const NEEDLE_SEQUENCE = {
  rotate: [160, -25, 12, -6, 3, 0],
  // timing for each keyframe (seconds from start)
  times:  [0,  0.45, 0.65, 0.78, 0.88, 1.0],
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true)
  const needleControls = useAnimation()
  const sweepControls  = useAnimation()

  // ── Visibility sync ──────────────────────────────────────────────
  useEffect(() => {
    if (loading) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [loading])

  // ── Needle + sweep animation loop ────────────────────────────────
  useEffect(() => {
    if (!visible) return

    async function runLoop() {
      while (true) {
        // Reset needle off-screen south-east
        await needleControls.set({ rotate: 160 })
        // Reset sweep arc to empty
        await sweepControls.set({ strokeDashoffset: SWEEP_C })

        // Needle settles to north with spring physics
        needleControls.start({
          rotate: NEEDLE_SEQUENCE.rotate,
          transition: {
            duration: 1.6,
            times: NEEDLE_SEQUENCE.times,
            ease: 'easeOut',
          },
        })

        // Sweep arc fills while needle settles
        await sweepControls.start({
          strokeDashoffset: SWEEP_C * 0.08,
          transition: { duration: 1.4, ease: [0.32, 0, 0.18, 1] },
        })

        // Hold settled for a beat
        await new Promise(r => setTimeout(r, 900))

        // Sweep arc drains out
        await sweepControls.start({
          strokeDashoffset: SWEEP_C,
          transition: { duration: 0.6, ease: 'easeIn' },
        })

        // Short pause before next cycle
        await new Promise(r => setTimeout(r, 300))
      }
    }

    runLoop()
  }, [visible, needleControls, sweepControls])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          style={{
            position:        'fixed',
            inset:           0,
            background:      '#0A0C10',
            zIndex:          9999,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            flexDirection:   'column',
            gap:             '36px',
          }}
        >

          {/* ── Corner bracket marks ─────────────────────────────── */}
          {(['tl','tr','bl','br'] as const).map(pos => (
            <motion.div
              key={pos}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                position: 'absolute',
                width: '20px', height: '20px',
                ...(pos === 'tl' ? { top: '40px',    left:  '40px',  borderTop:    '0.5px solid rgba(201,168,76,0.3)', borderLeft:  '0.5px solid rgba(201,168,76,0.3)' } : {}),
                ...(pos === 'tr' ? { top: '40px',    right: '40px',  borderTop:    '0.5px solid rgba(201,168,76,0.3)', borderRight: '0.5px solid rgba(201,168,76,0.3)' } : {}),
                ...(pos === 'bl' ? { bottom: '40px', left:  '40px',  borderBottom: '0.5px solid rgba(201,168,76,0.3)', borderLeft:  '0.5px solid rgba(201,168,76,0.3)' } : {}),
                ...(pos === 'br' ? { bottom: '40px', right: '40px',  borderBottom: '0.5px solid rgba(201,168,76,0.3)', borderRight: '0.5px solid rgba(201,168,76,0.3)' } : {}),
              }}
            />
          ))}

          {/* ── Compass SVG ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              width="140" height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* ── Outer static ring ────────────────────────────── */}
              <circle
                cx={CX} cy={CY} r={R_OUTER}
                stroke="#C9A84C"
                strokeWidth="0.8"
                opacity="0.9"
              />

              {/* ── Tick marks on outer ring ─────────────────────── */}
              {TICKS.map(({ angle, major }) => {
                const outer = polarToXY(CX, CY, R_TICK,       angle)
                const inner = polarToXY(CX, CY, R_TICK - (major ? 10 : 6), angle)
                return (
                  <line
                    key={angle}
                    x1={outer.x} y1={outer.y}
                    x2={inner.x} y2={inner.y}
                    stroke="#C9A84C"
                    strokeWidth={major ? 1.2 : 0.6}
                    opacity={major ? 0.9 : 0.45}
                  />
                )
              })}

              {/* ── Mid ring — slow clockwise dashed ─────────────── */}
              <motion.circle
                cx={CX} cy={CY} r={R_MID}
                stroke="#C9A84C"
                strokeWidth="0.5"
                strokeDasharray="3 9"
                opacity="0.5"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />

              {/* ── Inner ring — counter-clockwise ───────────────── */}
              <motion.circle
                cx={CX} cy={CY} r={R_INNER}
                stroke="#C9A84C"
                strokeWidth="0.4"
                strokeDasharray="2 6"
                opacity="0.35"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6.5, ease: 'linear' }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />

              {/* ── Cross-hair lines ─────────────────────────────── */}
              <line
                x1={CX - R_OUTER} y1={CY}
                x2={CX + R_OUTER} y2={CY}
                stroke="#C9A84C" strokeWidth="0.3" opacity="0.15"
              />
              <line
                x1={CX} y1={CY - R_OUTER}
                x2={CX} y2={CY + R_OUTER}
                stroke="#C9A84C" strokeWidth="0.3" opacity="0.15"
              />

              {/* ── Sweep arc — progress indicator ───────────────── */}
              <g style={{ transform: `rotate(-90deg)`, transformOrigin: `${CX}px ${CY}px` }}>
                <motion.circle
                  cx={CX} cy={CY} r={R_SWEEP}
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={SWEEP_C}
                  initial={{ strokeDashoffset: SWEEP_C }}
                  animate={sweepControls}
                />
              </g>

              {/* ── Needle group — spring settle animation ────────── */}
              <motion.g
                animate={needleControls}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              >
                {/* North — gold filled */}
                <path
                  d={`M${CX},${CY - R_OUTER + 10} L${CX + 5},${CY} L${CX},${CY - 8} L${CX - 5},${CY} Z`}
                  fill="#C9A84C"
                  opacity="0.95"
                />
                {/* South — ghost */}
                <path
                  d={`M${CX},${CY + R_OUTER - 10} L${CX + 5},${CY} L${CX},${CY + 8} L${CX - 5},${CY} Z`}
                  fill="#C9A84C"
                  opacity="0.18"
                />
              </motion.g>

              {/* ── Pivot jewel ───────────────────────────────────── */}
              <circle
                cx={CX} cy={CY} r={7}
                stroke="#C9A84C" strokeWidth="0.6"
                fill="#0A0C10"
              />
              <motion.circle
                cx={CX} cy={CY} r={3}
                fill="#C9A84C"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.75, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />

            </svg>
          </motion.div>

          {/* ── Wordmark ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontFamily:    'var(--font-display, "Cormorant Garamond", Georgia, serif)',
              fontSize:      '24px',
              fontWeight:    300,
              letterSpacing: '0.04em',
              color:         '#EDE8DF',
              lineHeight:    1.1,
              margin:        0,
            }}>
              P<span style={{ color: '#C9A84C' }}>&amp;</span>T Advisory
            </p>
            <p style={{
              fontFamily:    'var(--font-body, "DM Sans", sans-serif)',
              fontSize:      '8px',
              fontWeight:    300,
              letterSpacing: '0.28em',
              color:         '#8A6E2F',
              textTransform: 'uppercase',
              marginTop:     '8px',
              marginBottom:  0,
            }}>
              Protocol &amp; Transfer
            </p>
          </motion.div>

          {/* ── Progress bar ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ width: '120px' }}
          >
            <div style={{
              width:      '100%',
              height:     '0.5px',
              background: 'rgba(255,255,255,0.06)',
              position:   'relative',
              overflow:   'hidden',
            }}>
              <motion.div
                style={{
                  position:   'absolute',
                  top: 0, bottom: 0, left: 0,
                  width:      '45%',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                }}
                animate={{ x: ['-100%', '280%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', repeatDelay: 0.4 }}
              />
            </div>
            <p style={{
              fontFamily:    'var(--font-body, "DM Sans", sans-serif)',
              fontSize:      '8px',
              letterSpacing: '0.28em',
              color:         '#6B6660',
              textAlign:     'center',
              marginTop:     '10px',
              marginBottom:  0,
            }}>
              LOADING
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}