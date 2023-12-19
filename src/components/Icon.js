import {
  IconArrowNarrowRight,
  IconArticle,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBulb,
  IconCalendar,
  IconCertificate,
  IconChartPie,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconChevronsRight,
  IconClock,
  IconExternalLink,
  IconHelpCircle,
  IconLifebuoy,
  IconMail,
  IconMapPin,
  IconMoodKid,
  IconPhone,
  IconPlayerPlayFilled,
  IconPlus,
  IconStarFilled,
  IconUser,
  IconUsers,
    IconPhoto
} from '@tabler/icons-react'

const iconOptions = {
  calendar: IconCalendar,
  externalLink: IconExternalLink,
  user: IconUser,
  bulb: IconBulb,
  ratio: IconChartPie,
  mail: IconMail,
  phone: IconPhone,
  arrowNarrowRight: IconArrowNarrowRight,
  chevronsRight: IconChevronsRight,
  chevronRight: IconChevronRight,
  mapPin: IconMapPin,
  moodKid: IconMoodKid,
  clock: IconClock,
  users: IconUsers,
  playFilled: IconPlayerPlayFilled,
  starFilled: IconStarFilled,
  check: IconCheck,
  certificate: IconCertificate,
  plus: IconPlus,
  chevronDown: IconChevronDown,
  instagram: IconBrandInstagram,
  facebook: IconBrandFacebook,
  x: IconBrandX,
  linkedin: IconBrandLinkedin,
  tiktok: IconBrandTiktok,
  lifeBuoy: IconLifebuoy,
  help: IconHelpCircle,
  article: IconArticle,
    photo: IconPhoto
}

export const Icon = ({ icon, className = '', stroke = 1.5 }) => {
  const iconName = icon || Object.keys(iconOptions)[0]
  const IconSVG = iconOptions[iconName]

  return <IconSVG className={`${className}`} stroke={stroke} />
}
