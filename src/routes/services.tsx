import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/Services";
import { CtaBand, ProcessSection } from "@/components/sections/Shared";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { serviceGroups } from "@/data/site";

const title = "Services — Websites, SEO, E-Commerce, AI & IT | Irqsa Edge";
const description =
  "Website development, Shopify, e-commerce, SEO, digital marketing, graphics, AI, business email, DNS, Cloudflare, hosting and $20 IT consultation from Irqsa Edge.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>One place for your <span className="text-gradient">web & digital needs</span></>}
        description="From a simple landing page to a business website, Shopify store, SEO setup, business mailbox, DNS configuration or practical IT help — we keep the process straightforward."
      />

      <ServicesSection detailed showAll />

      <Section muted>
        <SectionHeading
          eyebrow="Why these services work together"
          title={<>From domain to <span className="text-gradient">finished website</span></>}
          description="You can use one service or combine several. For example: domain + DNS + business email + website + SEO, all handled as one practical setup."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Website + domain + hosting",
            "Shopify + products + store setup",
            "Business email + MX/SPF/DKIM/DMARC",
            "Website + SEO + digital marketing",
            "Brand graphics + social media assets",
            "Website + AI features + automation",
          ].map((item, index) => (
            <Reveal key={item} delay={(index % 3) * 0.06} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <Check className="size-5 text-primary" />
              <p className="mt-3 text-sm font-medium text-foreground">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <ProcessSection />

      <Section>
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 shadow-card sm:p-10">
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">IT Help</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">Need technical help? $20 consultation.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Get focused help with hosting, domains, DNS, Cloudflare, business email, website issues and other practical digital/IT problems.
              </p>
            </div>
            <Button asChild variant="premium" size="lg" className="shrink-0">
              <Link to="/contact">Get IT Help <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
