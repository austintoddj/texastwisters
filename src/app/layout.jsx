import "@/styles/tailwind.css";
import clsx from "clsx";
import { Roboto_Flex } from "next/font/google";

import { Header } from "@/components/Header";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

import { getAllItems, getItemData } from "@/lib/getItems";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Bright School - Creating a brighter future for your child",
  description:
    "At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.",
};

export default function RootLayout({ children }) {
  const programs = getAllItems("programs");
  const contact = getItemData("contact", "global");

  return (
    <html lang="en">
      <body className={clsx("font-sans", roboto.variable)}>
        <Header programs={programs} contact={contact} />
        {children}
        <CallToAction />
        <Footer programs={programs} contact={contact} />
        <Analytics />
      </body>
    </html>
  );
}
