import { b as cn, l as pricingPlans, t as Button } from "./router-C_aHWzU0.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight, S as Headphones, j as Check } from "../_libs/lucide-react.mjs";
import { n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { t as CtaBand } from "./Shared-C6zTnhJZ.mjs";
import { t as FaqSection } from "./Faq-jkfblQr7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-BV4O3yhV.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Pricing",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Simple pricing. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "No unnecessary packages."
			})] }),
			description: "Choose a starting package for your website, or tell us exactly what you need for a custom quote. Extra services such as SEO, marketing, graphics, email/DNS and IT help can be added separately."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: pricingPlans.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .08,
					className: cn("card-rim relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-transform duration-500 hover:-translate-y-1.5", plan.featured ? "border-primary/40 shadow-glow lg:-mt-4 lg:pb-12" : "border-border shadow-soft"),
					children: [
						plan.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground",
							children: "Most popular"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-foreground",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: plan.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 flex items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-semibold text-foreground",
								children: plan.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pb-1 text-xs text-muted-foreground",
								children: plan.cadence
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 flex flex-1 flex-col gap-3",
							children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), feature]
							}, feature))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: plan.featured ? "premium" : "outline",
							size: "lg",
							className: "mt-8 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: [
									plan.cta,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						})
					]
				}, plan.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-8 flex flex-col gap-5 rounded-3xl border border-primary/20 bg-secondary/40 p-7 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold text-foreground",
						children: "IT Consultation — $20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted-foreground",
						children: "Focused help with hosting, DNS, Cloudflare, business email, websites and practical IT issues."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Book consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center text-xs leading-relaxed text-muted-foreground",
				children: "Final pricing depends on the exact scope, pages, integrations, content and third-party services required. A clear quote is provided before work starts."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { muted: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { PricingPage as component };
