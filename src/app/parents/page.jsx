import { ParentsHero } from "@/components/ParentsHero";
import { Events } from "@/components/Events";
import { Newsletter } from "@/components/Newsletter";

export const metadata = {
  title: "Parent information - Bright",
  description:
    "Stay connected with Bright Preschool & Elementary through our Parents Portal - your go-to source for school news, events, and updates.",
};

export default function ParentsPage() {
  return (
    <>
      <ParentsHero />
      <Events />
      <Newsletter />
    </>
  );
}
