import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Headphones } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/Shared";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/site";
import { cn } from "@/lib/utils";

const title = "Pricing — Website & Digital Service Packages | Irqsa Edge";
const description =
  "Simple website pricing: Starter $150, Growth $499 and Custom pricing for specific requirements. IT consultation is $20.";

export const Route = createFileRoute("/pricing")({
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
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple pricing. <span className="text-gradient">No unnecessary packages.</span></>}
        description="Choose a starting package for your website, or tell us exactly what you need for a custom quote. Extra services such as SEO, marketing, graphics, email/DNS and IT help can be added separately."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              className={cn(
                "card-rim relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-transform duration-500 hover:-translate-y-1.5",
                plan.featured ? "border-primary/40 shadow-glow lg:-mt-4 lg:pb-12" : "border-border shadow-soft",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                  Most popular
                </span>
              ) : null}
              <h2 className="font-display text-lg font-semibold text-foreground">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
              <p className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold text-foreground">{plan.price}</span>
                <span className="pb-1 text-xs text-muted-foreground">{plan.cadence}</span>
              </p>
              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "premium" : "outline"} size="lg" className="mt-8 w-full">
                <Link to="/contact">{plan.cta} <ArrowRight className="size-4" /></Link>
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col gap-5 rounded-3xl border border-primary/20 bg-secondary/40 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary"><Headphones className="size-5" /></span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">IT Consultation — $20</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Focused help with hosting, DNS, Cloudflare, business email, websites and practical IT issues.</p>
            </div>
          </div>
          <Button asChild variant="outline" size="lg"><Link to="/contact">Book consultation <ArrowRight className="size-4" /></Link></Button>
        </Reveal>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Final pricing depends on the exact scope, pages, integrations, content and third-party services required. A clear quote is provided before work starts.
        </p>
      </Section>

      <FaqSection muted />
      <CtaBand />
    </>
  );
}
