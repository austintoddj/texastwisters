import { HomeHero } from "@/components/HomeHero";
import { HomeFeatureBlocks } from "@/components/HomeFeatureBlocks";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { StaffHiring } from "@/components/StaffHiring";
import { Testimonials } from "@/components/Testimonials";
import { Faqs } from "@/components/Faqs";

import { getAllItems } from "@/lib/getItems";

export const metadata = {
  title: "Bright - Creating a brighter future for your child",
  description:
    "At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.",
};

export default function HomePage() {
  const faqs = getAllItems("faqs");

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100" />

      <HomeFeatureBlocks />
      <StaffHiring />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  );
}
