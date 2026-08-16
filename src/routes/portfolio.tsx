import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, PortfolioSection } from "@/components/sections/Shared";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

const title = "Portfolio — Website, E-Commerce & Digital Work | Irqsa Edge";
const description =
  "Explore representative website, e-commerce, landing page, restaurant, AI and graphics work from Irqsa Edge.";

export const Route = createFileRoute("/portfolio")({
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
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Different projects, <span className="text-gradient">different industries</span></>}
        description="A representative showcase of the types of websites, stores, landing pages, AI work and graphics we can build. These are service examples, not fabricated client testimonials."
      />

      <Section className="pt-0">
        <Reveal className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {["Business", "Landing Pages", "E-Commerce", "Shopify", "Restaurants", "AI", "Graphics"].map((category) => (
            <span key={category} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-soft">
              {category}
            </span>
          ))}
        </Reveal>
      </Section>

      <PortfolioSection />
      <CtaBand />
    </>
  );
}
