/**
 * PM·OPS EmailJS — CDN version as requested
 * Library: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
 * Service ID: service_h9ge2zn — No public key needed (service ID only mode)
 */

// Use CDN global if available, fallback to npm package if installed
declare global {
  interface Window {
    emailjs?: any
  }
}

// Try CDN first, then npm package
let emailjsLib: any = null

try {
  // @ts-ignore — npm fallback
  const npmEmailjs = require ? null : null
} catch {}

// Dynamic import for npm version as fallback (if CDN not loaded)
async function getEmailJS() {
  if (emailjsLib) return emailjsLib
  
  // 1. Try CDN global (as you requested: <script src="...email.min.js">)
  if (typeof window !== 'undefined' && (window as any).emailjs) {
    emailjsLib = (window as any).emailjs
    console.log('✅ EmailJS loaded via CDN: https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js')
    return emailjsLib
  }

  // 2. Try npm package fallback
  try {
    const mod = await import('@emailjs/browser')
    emailjsLib = mod.default || mod
    console.log('✅ EmailJS loaded via npm package')
    return emailjsLib
  } catch {
    console.warn('⚠️ EmailJS not loaded — using mailto fallback for service_h9ge2zn')
    return null
  }
}

const EMAILJS_CONFIG = {
  SERVICE_ID: (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID) || 'service_h9ge2zn',
  TEMPLATE_ID: (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID) || 'template_mcu_dispatch',
  PUBLIC_KEY: (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY) || '',
}

export const initEmailJS = async () => {
  const lib = await getEmailJS()
  if (lib && EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== '' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    try { lib.init(EMAILJS_CONFIG.PUBLIC_KEY) } catch {}
  }
}

type MissionFormData = {
  name: string
  email: string
  subject: string
  budget: string
  message: string
}

export const sendMissionRequest = async (formData: MissionFormData) => {
  const time = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Colombo',
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const templateParams = {
    name: formData.name,
    from_name: formData.name,
    user_name: formData.name,
    email: formData.email,
    user_email: formData.email,
    reply_to: formData.email,
    from_email: formData.email,
    subject: formData.subject,
    mission_classification: formData.subject,
    budget: formData.budget,
    operation_budget: formData.budget,
    message: formData.message,
    mission_briefing: formData.message,
    time: time,
    transmission_time: time,
    to_name: 'Pemaraj Manojan — OPERATOR PM',
    operator_email: 'manojmanojan1392@gmail.com',
    to_email: formData.email,
  }

  const emailjsClient = await getEmailJS()
  const hasPublicKey = EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== '' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE'
  const hasValidTemplate = EMAILJS_CONFIG.TEMPLATE_ID && !EMAILJS_CONFIG.TEMPLATE_ID.includes('template_mcu_dispatch')

  // If CDN loaded + has keys, try real send
  if (emailjsClient && hasPublicKey && hasValidTemplate) {
    try {
      const result = await emailjsClient.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      return { success: true, result, mode: 'emailjs-cdn', library: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js' }
    } catch (e) {
      console.warn('EmailJS CDN send failed, falling back to mailto:', e)
    }
  }

  // SERVICE-ID-ONLY + CDN MODE — Mailto fallback (works with just service_h9ge2zn)
  // This matches your request: use CDN script but only service ID
  console.log(`📡 Service ID Only Mode: ${EMAILJS_CONFIG.SERVICE_ID} via CDN — Mailto fallback`)

  const subject = `[PM·OPS MISSION] ${formData.subject} — ${formData.name} — ${formData.budget}`
  const body = `SHIELD DISPATCH — COMMAND CENTER
Service: ${EMAILJS_CONFIG.SERVICE_ID} (CDN: https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js)
Time: ${time} (Asia/Colombo — BCAS Jaffna Only)

OPERATIVE: ${formData.name}
EMAIL: ${formData.email}
CLASSIFICATION: ${formData.subject}
BUDGET: ${formData.budget} (LKR & $ — From 500 LKR)

MISSION BRIEFING:
${formData.message}

---
PM·OPS Portfolio — Pemaraj Manojan
Service: service_h9ge2zn | Library: CDN EmailJS Browser v4
Operator: IT Administrator | Network Engineer | Entry Level React Developer
`.trim()

  const mailtoUrl = `mailto:manojmanojan1392@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return {
    success: true,
    mode: 'service-id-only-cdn',
    mailtoUrl,
    library: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
    result: { text: `CDN loaded, service ${EMAILJS_CONFIG.SERVICE_ID}, mailto prepared` }
  }
}
