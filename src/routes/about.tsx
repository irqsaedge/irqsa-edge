import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { AboutSection } from "@/components/sections/About";
import { CtaBand, ProcessSection, WhyChooseUs } from "@/components/sections/Shared";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/site";

const title = "About Irqsa Edge — Web, Digital & IT Services";
const description =
  "Learn about Irqsa Edge, a small digital services provider with 5+ years of practical experience in websites, SEO, e-commerce, graphics, AI, business email, DNS and IT support.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Irqsa Edge"
        title={
          <>
            Small team. Practical skills. <span className="text-gradient">Real digital work.</span>
          </>
        }
        description="Irqsa Edge is a small but capable digital services provider with 5+ years of practical experience. We build websites, online stores and digital assets, and also handle SEO, marketing, business email, DNS, AI services and IT consultation."
      />

      <AboutSection withCta={false} />

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Who we work with"
            title={<>Web solutions for <span className="text-gradient">different needs</span></>}
            description="You do not need to be a large company to get a professional digital presence. We work on focused projects for businesses, professionals, organizations and individuals."
          />
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-soft">
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                {industry}
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <WhyChooseUs />
      <ProcessSection />

      <Section>
        <Reveal className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Need something specific?</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">Tell us the job, not the technical jargon.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Whether it is a new website, Shopify store, DNS issue, business mailbox, SEO task or another digital problem, we can first understand what you need and then suggest the simplest practical solution.
              </p>
            </div>
            <Button asChild variant="premium" size="lg" className="shrink-0">
              <Link to="/contact">Talk to us <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
