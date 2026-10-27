// Genera public/og.png (1200x630) para las previews de LinkedIn / WhatsApp / X.
//
// Uso:
//   bun add -d @napi-rs/canvas
//   bun run scripts/generate-og.mjs
//
// Usa las fuentes del sistema: Georgia y Consolas (Windows).
// En otro SO, cambiá las rutas de FONTS por las equivalentes.
import { createCanvas, GlobalFonts } from '@napi-rs/canvas'
import { writeFileSync } from 'node:fs'

const FONTS = 'C:/Windows/Fonts'
GlobalFonts.registerFromPath(`${FONTS}/georgia.ttf`, 'Georgia')
GlobalFonts.registerFromPath(`${FONTS}/georgiab.ttf`, 'GeorgiaBold')
GlobalFonts.registerFromPath(`${FONTS}/georgiai.ttf`, 'GeorgiaItalic')
GlobalFonts.registerFromPath(`${FONTS}/consola.ttf`, 'Consola')
GlobalFonts.registerFromPath(`${FONTS}/consolab.ttf`, 'ConsolaBold')

const W = 1200
const H = 630
const M = 78
const ACCENT = '#e58c3c'
const ACCENT_SOFT = '#f6b878'
const INK = '#f5e9d3'
const BODY = '#c3ad8d'
const MUTED = '#98866c'
const LINE = 'rgba(245,233,211,0.16)'

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// fondo
ctx.fillStyle = '#0a0705'
ctx.fillRect(0, 0, W, H)

// resplandor cálido arriba a la derecha
const glow = ctx.createRadialGradient(1010, -100, 0, 1010, -100, 820)
glow.addColorStop(0, 'rgba(229,140,60,0.24)')
glow.addColorStop(0.55, 'rgba(229,140,60,0.07)')
glow.addColorStop(1, 'rgba(229,140,60,0)')
ctx.fillStyle = glow
ctx.fillRect(0, 0, W, H)

// sol
const sun = ctx.createRadialGradient(1010, 210, 10, 1010, 210, 190)
sun.addColorStop(0, 'rgba(255,237,208,0.75)')
sun.addColorStop(0.35, 'rgba(239,162,86,0.55)')
sun.addColorStop(0.62, 'rgba(216,122,44,0.3)')
sun.addColorStop(1, 'rgba(216,122,44,0)')
ctx.fillStyle = sun
ctx.beginPath()
ctx.arc(1010, 210, 190, 0, Math.PI * 2)
ctx.fill()

ctx.strokeStyle = 'rgba(246,184,120,0.18)'
ctx.lineWidth = 1
ctx.beginPath()
ctx.arc(1010, 210, 210, 0, Math.PI * 2)
ctx.stroke()

// dunas
function dune(startY, color, ridge) {
  ctx.beginPath()
  ctx.moveTo(0, startY)
  ctx.bezierCurveTo(220, startY - 42, 340, startY + 6, 560, startY - 16)
  ctx.bezierCurveTo(780, startY - 38, 900, startY - 88, 1120, startY - 46)
  ctx.bezierCurveTo(1180, startY - 36, 1200, startY - 34, W, startY - 40)
  ctx.lineTo(W, H)
  ctx.lineTo(0, H)
  ctx.closePath()
  const fill = ctx.createLinearGradient(0, startY - 90, 0, H)
  fill.addColorStop(0, color)
  fill.addColorStop(1, '#0a0604')
  ctx.fillStyle = fill
  ctx.fill()
  if (ridge) {
    ctx.strokeStyle = ridge
    ctx.lineWidth = 1
    ctx.stroke()
  }
}

dune(578, 'rgba(74,44,20,0.9)', 'rgba(229,140,60,0.26)')
dune(604, 'rgba(36,21,11,0.95)', 'rgba(229,140,60,0.14)')
dune(622, 'rgba(22,13,7,1)', null)

function tracked(text, x, y, { font, color, tracking = 0, align = 'left' }) {
  ctx.save()
  ctx.font = font
  ctx.fillStyle = color
  const chars = [...text]
  const widths = chars.map((c) => ctx.measureText(c).width)
  const total = widths.reduce((a, b) => a + b, 0) + tracking * (chars.length - 1)
  let cursor = align === 'right' ? x - total : x
  chars.forEach((c, i) => {
    ctx.fillText(c, cursor, y)
    cursor += widths[i] + tracking
  })
  ctx.restore()
}

function text(value, x, y, { font, color, align = 'left' }) {
  ctx.save()
  ctx.font = font
  ctx.fillStyle = color
  ctx.textAlign = align
  ctx.fillText(value, x, y)
  ctx.restore()
}

// header
tracked('PEDRO.DEV', M, 96, { font: '19px GeorgiaBold', color: INK, tracking: 3.6 })
tracked('2026 · CV ES / EN', W - M, 96, { font: '13px Consola', color: MUTED, tracking: 2.2, align: 'right' })

// eyebrow
ctx.fillStyle = ACCENT
ctx.beginPath()
ctx.moveTo(M + 4, 190)
ctx.lineTo(M + 9, 195)
ctx.lineTo(M + 4, 200)
ctx.lineTo(M - 1, 195)
ctx.closePath()
ctx.fill()

tracked('FULL STACK · DESARROLLO AGÉNTICO · BUENOS AIRES', M + 22, 200, {
  font: '13px Consola',
  color: MUTED,
  tracking: 2.6,
})

// nombre
const nameGradient = ctx.createLinearGradient(M, 240, M + 640, 330)
nameGradient.addColorStop(0, '#fff0d4')
nameGradient.addColorStop(0.45, '#f7c489')
nameGradient.addColorStop(1, '#e58c3c')
ctx.fillStyle = nameGradient
ctx.font = '66px Georgia'
ctx.fillText('Pedro Espejo Pariani', M - 3, 308)

// tagline
text('Construyo cosas para la vida real.', M, 376, {
  font: '31px GeorgiaItalic',
  color: BODY,
})

// stack
ctx.fillStyle = ACCENT
ctx.save()
ctx.translate(M + 7, 438)
ctx.rotate(Math.PI / 4)
ctx.fillRect(-4, -4, 8, 8)
ctx.restore()
text('react · typescript · c# · .net · sql server', M + 30, 443, {
  font: '18px Consola',
  color: '#dcc19a',
})

// divisor
ctx.save()
const divider = ctx.createLinearGradient(M, 0, W - M, 0)
divider.addColorStop(0, 'rgba(245,233,211,0.05)')
divider.addColorStop(0.45, LINE)
divider.addColorStop(1, 'rgba(245,233,211,0.02)')
ctx.strokeStyle = divider
ctx.lineWidth = 1
ctx.beginPath()
ctx.moveTo(M, 500)
ctx.lineTo(W - M, 500)
ctx.stroke()
ctx.restore()

// footer
tracked('pedroespejo.vercel.app', M, 556, { font: '16px ConsolaBold', color: INK, tracking: 0.4 })
text('github.com/20Pep', W - M, 556, { font: '15px Consola', color: MUTED, align: 'right' })

const out = new URL('../public/og.png', import.meta.url)
const buffer = canvas.toBuffer('image/png')
writeFileSync(out, buffer)
console.log(`og.png generado (${Math.round(buffer.length / 1024)} KB)`)
