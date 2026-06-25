import { useEffect } from 'react'
import { SITE_URL } from '../config/site'

const CONTACT = {
  name: 'Hassan Adnan',
  email: 'hassan.21.adnan@gmail.com',
  whatsapp: 'https://wa.me/9647803538208',
  phone: '+9647803538208',
  linkedin: 'https://www.linkedin.com/in/hassan-adnan21',
  github: 'https://github.com/hassan2-dev',
  location: 'Basra, Iraq',
  cvUrl: `${SITE_URL}/Hassan%20adnan.pdf`,
}

export default function useWebMcp() {
  useEffect(() => {
    const modelContext = navigator.modelContext
    if (!modelContext?.provideContext) return undefined

    const unregister = modelContext.provideContext({
      tools: [
        {
          name: 'get_contact_info',
          description: 'Get Hassan Adnan public contact details (email, WhatsApp, social links).',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          async execute() {
            return CONTACT
          },
        },
        {
          name: 'get_cv_url',
          description: 'Return the URL to download Hassan Adnan CV (PDF).',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          async execute() {
            return { cvUrl: CONTACT.cvUrl, format: 'application/pdf' }
          },
        },
        {
          name: 'scroll_to_section',
          description: 'Scroll the portfolio page to a section: about, experience, platforms, stack, or contact.',
          inputSchema: {
            type: 'object',
            properties: {
              section: {
                type: 'string',
                enum: ['about', 'experience', 'platforms', 'stack', 'contact'],
              },
            },
            required: ['section'],
            additionalProperties: false,
          },
          async execute({ section }) {
            const el = document.getElementById(section)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
              return { ok: true, section }
            }
            return { ok: false, section, error: 'Section not found' }
          },
        },
      ],
    })

    return () => {
      if (typeof unregister === 'function') unregister()
    }
  }, [])
}
