import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { FaqSection } from "@/components/sections/Faq";
import {
  CtaBand,
  StatsBand,
  PortfolioSection,
  ProcessSection,
  TechMarquee,
  WhyChooseUs,
} from "@/components/sections/Shared";

const title = "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services";
const description =
  "Irqsa Edge provides websites, Shopify and e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TechMarquee />
      <PortfolioSection limit={4} />
      <FaqSection />
      <CtaBand />
    </>
  );
}
