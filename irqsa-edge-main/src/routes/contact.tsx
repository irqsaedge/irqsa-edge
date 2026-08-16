import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/site";

const title = "Contact Irqsa Edge — Start Your Project";
const description =
  "Contact Irqsa Edge for websites, SEO, e-commerce, Shopify, graphics, AI, business email, DNS and IT consultation.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const details = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Mail,
    label: "Email",
    value: company.secondaryEmail,
    href: `mailto:${company.secondaryEmail}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@irqsaedge",
    href: company.instagram,
  },
  { icon: Clock, label: "Availability", value: company.hours },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you need <span className="text-gradient">and let's get started</span>
          </>
        }
        description="Send an enquiry for a website, e-commerce store, SEO, digital marketing, graphics, AI, business email, DNS or IT consultation. We are available 24/7."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground">Contact us directly</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your enquiry form sends the submitted details to both of our email addresses.
                You can also contact us directly by email or Instagram.
              </p>

              <ul className="mt-6 flex flex-col gap-4">
                {details.map((d, index) => (
                  <li key={`${d.label}-${index}`} className="flex min-w-0 items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <d.icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {d.label}
                      </span>
                      <a
                        href={d.href ?? "#"}
                        target={d.href?.startsWith("http") ? "_blank" : undefined}
                        rel={d.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block break-words text-sm font-medium text-foreground hover:text-primary"
                      >
                        {d.value}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl border border-border bg-secondary/40 p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">IT Consultation</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">$20 consultation</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Need help with hosting, DNS, business email, Cloudflare, a website issue or
                another practical IT problem? Request a consultation through the form.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
