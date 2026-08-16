import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import logo from "@/assets/irqsa-logo.jpeg.asset.json";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/common/Section";
import { industries } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* Animated ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-hero-glow absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="animate-float absolute -left-20 top-10 size-72 rounded-full bg-primary/20 blur-[90px]" />
        <div className="animate-float-delayed absolute -right-16 top-40 size-80 rounded-full bg-primary-glow/25 blur-[110px]" />
        <div className="animate-float absolute bottom-0 left-1/3 size-64 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <Reveal>
            <Eyebrow>Web · Digital · IT Services</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.6rem]">
              We build websites and digital solutions{" "}
              <span className="text-gradient">for almost every kind of business.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Irqsa Edge builds business websites, portfolios, landing pages, school and restaurant
              websites, e-commerce stores, Shopify projects and more. We also provide SEO, digital
              marketing, graphics, AI services, business email, DNS and practical IT support.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mb-7 flex items-center gap-4">
              <img
                src={logo.url}
                alt="Irqsa Edge"
                width={104}
                height={104}
                className="size-[5.25rem] rounded-2xl object-cover ring-1 ring-primary/40 shadow-glow sm:size-24"
              />
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]">Irqsa <span className="text-primary">Edge</span></p>
                <p className="mt-1.5 text-sm uppercase tracking-[0.12em] text-muted-foreground">5+ years of practical experience</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="xl">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">5+ years experience</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>Available 24/7</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>Websites for almost any industry</span>
            </div>
          </Reveal>
        </div>

        {/* Hero logo visual */}
        <Reveal delay={0.12} className="relative min-w-0">
          <div className="hero-logo-stage relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center">
            <div className="absolute inset-[10%] rounded-full border border-primary/25" />
            <div className="absolute inset-[16%] rounded-full border border-primary/20 [animation:spin_18s_linear_infinite]" />
            <div className="absolute inset-[23%] rounded-full bg-primary/10 blur-3xl" />
            <div className="hero-orbit absolute inset-[7%] rounded-full border border-primary/30" />
            <div className="hero-logo-glow absolute size-[78%] rounded-full" />
            <img
              src={logo.url}
              alt="Irqsa Edge logo"
              width={720}
              height={720}
              className="hero-main-logo relative z-10 size-[68%] rounded-full object-cover ring-2 ring-primary/60 shadow-glow"
            />
            <div className="hero-pointer absolute right-[12%] top-[48%] z-20" aria-hidden="true">
              <span className="hero-pointer-dot" />
              <span className="hero-pointer-trail" />
              <span className="hero-pointer-arrow">↖</span>
            </div>
            <div className="glass absolute bottom-[3%] left-[10%] right-[10%] rounded-2xl px-5 py-3 text-center shadow-card">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Digital solutions</p>
              <p className="mt-1 text-sm font-medium text-foreground">Websites · SEO · E-Commerce · Digital Services</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Industry strip */}
      <Reveal
        delay={0.4}
        className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across industries
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {industry}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
