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

export const NAV_LINKS = ['About', 'Experience', 'Platforms', 'Stack', 'Contact']

export { personal }

export const ROLES = personal.titles

export const HERO_STATS = achievements.slice(0, 4).map((a) => ({
  value: a.value,
  label: a.label,
}))

export const ABOUT_HIGHLIGHTS = aboutHighlights

export const TIMELINE = experience.map((item) => ({
  period: item.period,
  role: item.role,
  company: item.company,
  location: personal.location,
  desc: item.description,
  tags: [item.role.split(' ')[0], item.company],
}))

export const PLATFORMS = enterprisePlatforms.map((p, i) => ({
  num: String(i + 1).padStart(2, '0'),
  name: p.title,
  full: p.subtitle,
  featured: p.featured,
  role: p.role,
  description: p.description,
  contributions: p.contributions,
  features: p.features,
  tech: p.technologies,
  url: p.url || p.links?.[0]?.url,
}))

export const ADD_PROJECTS = additionalProjects.map((p) => ({
  name: p.title,
  description: p.subtitle,
  tech: p.features,
  url: p.url,
  category: p.category,
}))

export const CAPABILITIES = systemCapabilities

export const TECH_STACK = skillCategories.map((s) => ({
  category: s.title,
  items: s.skills,
}))

export const ACHIEVEMENTS_DISPLAY = [
  { value: achievements[0].value, label: achievements[0].label, sub: 'live in production' },
  { value: achievements[1].value, label: achievements[1].label, sub: 'shipped end-to-end' },
  { value: achievements[3].value, label: achievements[3].label, sub: 'REST & integrations' },
  { value: achievements[4].value, label: achievements[4].label, sub: 'software engineering' },
]

export const TECH_MARQUEE = technologies

export const TESTIMONIALS_DISPLAY = testimonials.map((t) => ({
  quote: t.quote,
  name: t.author,
  role: t.role,
  initials: t.author
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
}))
