import {
  IconAlertCircleFilled,
  IconArrowNarrowRight,
  IconArticle,
  IconBell,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBulb,
  IconCalendar,
  IconCarambola,
  IconCertificate,
  IconChartPie,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconChevronsRight,
  IconChristmasTree,
  IconClock,
  IconExternalLink,
  IconFileCertificate,
  IconFlag,
  IconGymnastics,
  IconHelpCircle,
  IconInfoCircleFilled,
  IconLifebuoy,
  IconLinkOff,
  IconMail,
  IconMapPin,
  IconMoodKid,
  IconOlympics,
  IconPhone,
  IconPhoto,
  IconPlayerPlayFilled,
  IconPlus,
  IconRun,
  IconSignature,
  IconSparkles,
  IconStarFilled,
  IconStarHalfFilled,
  IconStars,
  IconSunHigh,
  IconTent,
  IconUser,
  IconUsers,
  IconX
} from '@tabler/icons-react'

const iconOptions = {
  alertCircleFilled: IconAlertCircleFilled,
  calendar: IconCalendar,
  externalLink: IconExternalLink,
  user: IconUser,
  bulb: IconBulb,
  bell: IconBell,
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
  starHalfFilled: IconStarHalfFilled,
  check: IconCheck,
  certificate: IconCertificate,
  fileCertificate: IconFileCertificate,
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
  photo: IconPhoto,
  signature: IconSignature,
  stars: IconStars,
  star: IconCarambola,
  close: IconX,
  linkOff: IconLinkOff,
  tree: IconChristmasTree,
  run: IconRun,
  olympics: IconOlympics,
  tent: IconTent,
  sunHigh: IconSunHigh,
  flag: IconFlag,
  sparkles: IconSparkles,
  youtube: IconBrandYoutube,
  gymnastics: IconGymnastics,
  info: IconInfoCircleFilled
}

type IconName = keyof typeof iconOptions

interface IconProps {
  icon?: IconName | string
  className?: string
  stroke?: number
}

export const Icon = ({ icon, className = '', stroke = 1.5 }: IconProps) => {
  const iconName = icon || Object.keys(iconOptions)[0]
  const IconSVG =
    iconOptions[iconName as IconName] || iconOptions.alertCircleFilled

  return <IconSVG className={`${className}`} stroke={stroke} />
}
