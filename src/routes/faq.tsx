import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/Shared";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/site";

const title = "FAQ — Websites, SEO, Shopify, Email & IT | Irqsa Edge";
const description =
  "Answers about website types, Shopify, SEO, redesigns, business email, DNS, AI services, pricing and $20 IT consultation.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Straight answers before you <span className="text-gradient">start a project</span></>}
        description="Find quick answers about websites, Shopify, e-commerce, SEO, business email, DNS, AI services, pricing and technical support."
      />
      <FaqSection />
      <Section muted>
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10">
          <h2 className="text-2xl font-semibold text-foreground">Still have a question?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Send the details. If it is a website, digital, email, DNS or practical IT problem, we will tell you what can be done and what it should cost.</p>
          <Button asChild variant="premium" size="lg" className="mt-6"><Link to="/contact">Ask us directly <ArrowRight className="size-4" /></Link></Button>
        </Reveal>
      </Section>
      <CtaBand />
    </>
  );
}
