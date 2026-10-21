// Genera public/og.png (1200x630) para las previews de LinkedIn / WhatsApp / X.
//
// Uso:
//   bun add -d @napi-rs/canvas
//   bun run scripts/generate-og.mjs
//
// Usa las fuentes del sistema: Segoe UI y Consolas (Windows).
// En otro SO, cambiá las rutas de FONTS por las equivalentes.
import { createCanvas, GlobalFonts } from '@napi-rs/canvas'
import { writeFileSync } from 'node:fs'

const FONTS = 'C:/Windows/Fonts'
GlobalFonts.registerFromPath(`${FONTS}/segoeui.ttf`, 'SegoeUI')
GlobalFonts.registerFromPath(`${FONTS}/seguisb.ttf`, 'SegoeUISemi')
GlobalFonts.registerFromPath(`${FONTS}/segoeuib.ttf`, 'SegoeUIBold')
GlobalFonts.registerFromPath(`${FONTS}/consola.ttf`, 'Consola')
GlobalFonts.registerFromPath(`${FONTS}/consolab.ttf`, 'ConsolaBold')

const W = 1200
const H = 630
const M = 72
const ACCENT = '#4ade80'
const INK = '#e8ede9'
const BODY = '#a4aea8'
const MUTED = '#7b857f'
const LINE = 'rgba(232,237,233,0.14)'

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// fondo
ctx.fillStyle = '#080a09'
ctx.fillRect(0, 0, W, H)

// glow verde arriba a la derecha
const glow = ctx.createRadialGradient(1010, -60, 0, 1010, -60, 760)
glow.addColorStop(0, 'rgba(74,222,128,0.17)')
glow.addColorStop(0.55, 'rgba(74,222,128,0.05)')
glow.addColorStop(1, 'rgba(74,222,128,0)')
ctx.fillStyle = glow
ctx.fillRect(0, 0, W, H)

// monograma de fondo
ctx.save()
ctx.globalAlpha = 0.055
ctx.fillStyle = ACCENT
ctx.font = '400px SegoeUIBold'
ctx.textAlign = 'right'
ctx.fillText('P.', 1150, 470)
ctx.restore()

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
text('$', M, 96, { font: '20px ConsolaBold', color: ACCENT })
text('pedro.dev', M + 26, 96, { font: '20px ConsolaBold', color: INK })
tracked('2026 · CV ES / EN', W - M, 96, { font: '13px Consola', color: MUTED, tracking: 2.2, align: 'right' })

// eyebrow
tracked('FULL STACK · DESARROLLO AGÉNTICO · BUENOS AIRES', M, 196, {
  font: '13px Consola',
  color: MUTED,
  tracking: 2.6,
})

// nombre, tagline y stack
text('Pedro Espejo Pariani', M, 292, { font: '68px SegoeUISemi', color: INK })
text('Construyo cosas para la vida real.', M, 356, { font: '30px SegoeUI', color: BODY })
text('>', M, 420, { font: '19px ConsolaBold', color: ACCENT })
text('react · typescript · c# · .net · sql server', M + 26, 420, { font: '19px Consola', color: '#b9c3bc' })

// divisor
ctx.save()
ctx.strokeStyle = LINE
ctx.lineWidth = 1
ctx.beginPath()
ctx.moveTo(M, 494)
ctx.lineTo(W - M, 494)
ctx.stroke()
ctx.restore()

// footer
text('pedroespejo.vercel.app', M, 546, { font: '16px ConsolaBold', color: INK })
text('github.com/20Pep', W - M, 546, { font: '15px Consola', color: MUTED, align: 'right' })

const out = new URL('../public/og.png', import.meta.url)
const buffer = canvas.toBuffer('image/png')
writeFileSync(out, buffer)
console.log(`og.png generado (${Math.round(buffer.length / 1024)} KB)`)
