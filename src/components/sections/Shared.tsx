import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, BriefcaseBusiness, Boxes, Headphones, Layers3, Workflow } from "lucide-react";

import { Counter } from "@/components/common/Counter";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { processSteps, projects, stats, technologies, whyChooseUs } from "@/data/site";

export function StatsBand() {
  const icons = [BriefcaseBusiness, Boxes, Layers3, Workflow, Headphones];
  const iconTones = ["text-primary", "text-emerald-400", "text-amber-400", "text-violet-400", "text-cyan-400"];

  return (
    <Section className="-mt-2 py-10 sm:py-12">
      <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-card/90 px-4 py-5 shadow-card backdrop-blur sm:px-6 lg:px-7">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-40" />
        <div className="relative grid grid-cols-2 divide-x divide-border/80 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => {
            const Icon = icons[i] ?? BriefcaseBusiness;
            return (
              <Reveal key={s.label} delay={i * 0.05} className="group min-w-0 px-4 py-3 text-center sm:px-5 lg:px-6">
                <div className={`mx-auto grid size-12 place-items-center rounded-full border border-border/80 bg-background/60 ${iconTones[i]} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="size-6" strokeWidth={1.8} />
                </div>
                <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-[2.35rem]">
                  <Counter value={s.value} suffix={s.suffix} duration={420} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                <span className="mx-auto mt-4 block h-1 w-16 overflow-hidden rounded-full bg-secondary">
                  <span className="block h-full w-3/5 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-full" />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Why Irqsa Edge"
        title={
          <>
            Why businesses choose <span className="text-gradient">Irqsa Edge</span>
          </>
        }
        description="We're small enough to care about every detail and structured enough to deliver on schedule."
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 0.06}
            className="card-rim group rounded-2xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="grid size-8 place-items-center rounded-full bg-primary-soft text-primary">
              <Check className="size-4" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Working Process"
        title="A clear process with no surprises"
        description="You always know what's happening, what's next, and what we need from you."
      />

      <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.step}
            delay={(i % 4) * 0.07}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="font-display text-4xl font-semibold text-primary-soft transition-colors duration-500 group-hover:text-primary">
              {step.step}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function TechMarquee() {
  const row = [...technologies, ...technologies];

  return (
    <Section muted className="overflow-hidden">
      <SectionHeading
        eyebrow="Technologies"
        title="A modern stack, chosen per project"
        description="We pick the tools that fit your goals and budget — never the other way around."
      />

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-3">
          {row.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function PortfolioSection({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <Section>
      <SectionHeading
        eyebrow="Portfolio"
        title={
          <>
            Selected work across <span className="text-gradient">industries</span>
          </>
        }
        description="Representative project types showing the range of websites, stores, landing pages, AI work and graphics we can create."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 2) * 0.08}
            className="card-rim group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project by Irqsa Edge`}
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface-strong px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border/70 px-2.5 py-1 text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {limit ? (
        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              View full portfolio <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}

export function CtaBand() {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center shadow-card sm:px-12">
        <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Ready to get your digital work done?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Tell us what you need and we'll come back with a clear scope, timeline and price.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="premium" size="xl">
              <Link to="/contact">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
