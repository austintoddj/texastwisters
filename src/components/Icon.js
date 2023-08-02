import {
  IconCalendar,
  IconCurrencyDollar,
  IconUser,
  IconBulb,
  IconChartPie,
  IconHome,
  IconSend,
  IconMail,
  IconPin,
  IconBuilding,
  IconPhone,
  IconMessages,
  IconListCheck,
  IconMeat,
  IconVirus,
  IconPhoto,
  IconArrowNarrowRight,
  IconChevronsRight,
  IconChevronRight,
  IconMapPin,
  IconMoodKid,
  IconClock,
  IconUsers,
  IconPlayerPlayFilled,
  IconStarFilled,
  IconCheck,
  IconCertificate,
  IconCoffee,
  IconPlus,
  IconChevronDown,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const iconOptions = {
  calendar: IconCalendar,
  dollar: IconCurrencyDollar,
  user: IconUser,
  bulb: IconBulb,
  ratio: IconChartPie,
  home: IconHome,
  send: IconSend,
  mail: IconMail,
  pin: IconPin,
  building: IconBuilding,
  phone: IconPhone,
  messages: IconMessages,
  listCheck: IconListCheck,
  meat: IconMeat,
  virus: IconVirus,
  photo: IconPhoto,
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
  coffee: IconCoffee,
  plus: IconPlus,
  chevronDown: IconChevronDown,
  instagram: IconBrandInstagram,
  facebook: IconBrandFacebook,
  twitter: IconBrandTwitter,
  linkedin: IconBrandLinkedin,
};

export const Icon = ({ icon, className = "", stroke = 1.5 }) => {
  const iconName = icon || Object.keys(iconOptions)[0];
  const IconSVG = iconOptions[iconName];

  return <IconSVG className={`${className}`} stroke={stroke} />;
};
