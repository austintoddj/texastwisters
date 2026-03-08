// Shared TypeScript interfaces for markdown frontmatter data and component props

export interface HeroAction {
  label: string
  href: string
  icon?: boolean
}

export interface ProgramHeroData {
  headline: string
  description?: string
  text: string
  action: HeroAction
  image: { src: string }
}

export interface PrimaryCta {
  href: string
  label: string
}

export interface SecondaryCta {
  href?: string
  label?: string
  preText?: string
}

export interface ComingSoonHeroData {
  eyebrow: string
  headline: string
  text: string
  primaryCta: PrimaryCta
  secondaryCta: SecondaryCta
}

export interface InfoSection {
  headline: string
  text: string
  ages: string
  levels: string
  duration: string
  classSize: string
}

export interface DescriptionSection {
  text: string
  portraitImage: string
  squareImage1: string
  squareImage2: string
}

export interface PricingPlanFeature {
  feature: string
}

export interface PricingPlanItem {
  name: string
  badge?: string
  price: string
  interval: string
  shortDescription: string
  features: PricingPlanFeature[]
  action: HeroAction
}

export interface PricingSection {
  tagline: string
  headline: string
  text: string
  pricing: PricingPlanItem[]
}

export interface ProgramData {
  name: string
  dropdownDescription: string
  featured: boolean
  hero?: ProgramHeroData
  comingSoonHero?: ComingSoonHeroData
  infoSection?: InfoSection
  descriptionSection?: DescriptionSection
  pricingSection?: PricingSection
}

export interface SocialLink {
  name: string
  href: string
}

export interface StaffData {
  name: string
  role: string
  image: string
  priority: number
  social?: SocialLink[]
  bio?: string
}

export interface TestimonialData {
  name: string
  testimonial: string
  stars: number
  image: string
}

export interface EventData {
  name: string
  description: string
  dates: string
  image: string
  order: number
  expiresAfter: string
  href?: string
}

export interface FaqData {
  question: string
  answer: string
}

export interface PolicyData {
  order: number
  description: string
}

export interface NewsletterData {
  name: string
  description: string
  link: string
}
