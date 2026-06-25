import {
  personal,
  aboutHighlights,
  experience,
  enterprisePlatforms,
  additionalProjects,
  systemCapabilities,
  skillCategories,
  achievements,
  technologies,
  testimonials,
} from '../data/portfolio'
import { getTranslations } from '../i18n/content'
import {
  platformsAr,
  additionalProjectsAr,
  capabilityItemsAr,
  categoryLabelsAr,
} from '../i18n/portfolioAr'

function translatePeriod(period, presentLabel) {
  return period.replace(/\bPresent\b/g, presentLabel)
}

export function buildPortfolioData(lang = 'en') {
  const t = getTranslations(lang)
  const isAr = lang === 'ar'

  return {
    personal: {
      ...personal,
      location: t.location,
      cvUrl: '/Hassan adnan.pdf',
    },
    NAV_LINKS: t.nav,
    ROLES: t.roles,
    HERO_STATS: achievements.slice(0, 4).map((a, i) => ({
      value: a.value,
      label: t.achievements[i] || a.label,
    })),
    ABOUT_HIGHLIGHTS: aboutHighlights.map((item, i) => ({
      ...item,
      label: t.highlights[i] || item.label,
    })),
    TIMELINE: experience.map((item, i) => ({
      period: translatePeriod(item.period, t.experience.present),
      role: isAr ? t.experience.roles[i] : item.role,
      company: item.company,
      location: t.location,
      desc: t.experience.items[i] || item.description,
      tags: [isAr ? t.experience.roles[i] : item.role, item.company],
    })),
    PLATFORMS: enterprisePlatforms.map((p, i) => {
      const ar = isAr ? platformsAr[p.id] : null
      return {
        num: String(i + 1).padStart(2, '0'),
        name: p.title,
        full: ar?.subtitle ?? p.subtitle,
        featured: p.featured,
        role: ar?.role ?? p.role,
        description: ar?.description ?? p.description,
        contributions: ar?.contributions ?? p.contributions,
        features: ar?.features ?? p.features,
        tech: p.technologies,
        url: p.url || p.links?.[0]?.url,
      }
    }),
    ADD_PROJECTS: additionalProjects.map((p, i) => {
      const ar = isAr ? additionalProjectsAr[i] : null
      return {
        name: p.title,
        description: ar?.subtitle ?? p.subtitle,
        tech: ar?.features ?? p.features,
        url: p.url,
        category: isAr ? (categoryLabelsAr[p.category] ?? p.category) : p.category,
      }
    }),
    CAPABILITIES: systemCapabilities.map((c, i) => ({
      ...c,
      title: t.capabilities.titles[i] || c.title,
      items: isAr ? capabilityItemsAr[i] : c.items,
    })),
    TECH_STACK: skillCategories.map((s, i) => ({
      category: t.stack.categories[i] || s.title,
      items: s.skills,
    })),
    ACHIEVEMENTS_DISPLAY: [
      { value: achievements[0].value, label: t.achievements[0], sub: t.impact.subs[0] },
      { value: achievements[1].value, label: t.achievements[1], sub: t.impact.subs[1] },
      { value: achievements[3].value, label: t.achievements[2], sub: t.impact.subs[2] },
      { value: achievements[4].value, label: t.achievements[3], sub: t.impact.subs[3] },
    ],
    TECH_MARQUEE: technologies,
    TESTIMONIALS_DISPLAY: testimonials.map((item, i) => ({
      quote: t.testimonials.items[i]?.quote || item.quote,
      name: t.testimonials.items[i]?.author || item.author,
      role: t.testimonials.items[i]?.role || item.role,
      initials: (t.testimonials.items[i]?.author || item.author)
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
    })),
  }
}

// Legacy exports for any old components
const defaultData = buildPortfolioData('en')
export const {
  personal: legacyPersonal,
  NAV_LINKS,
  ROLES,
  HERO_STATS,
  ABOUT_HIGHLIGHTS,
  TIMELINE,
  PLATFORMS,
  ADD_PROJECTS,
  CAPABILITIES,
  TECH_STACK,
  ACHIEVEMENTS_DISPLAY,
  TECH_MARQUEE,
  TESTIMONIALS_DISPLAY,
} = defaultData
export { legacyPersonal as personal }
