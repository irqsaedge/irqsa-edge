import { s as industries, t as Button } from "./router-ELYMG1et.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as CircleCheck, I as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { t as AboutSection } from "./About-80jKW5HO.mjs";
import { o as WhyChooseUs, r as ProcessSection, t as CtaBand } from "./Shared-BGdT0mYD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BTZnQyAZ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Irqsa Edge",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Small team. Practical skills. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "Real digital work."
			})] }),
			description: "Irqsa Edge is a small but capable digital services provider with 5+ years of practical experience. We build websites, online stores and digital assets, and also handle SEO, marketing, business email, DNS, AI services and IT consultation."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, { withCta: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Who we work with",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Web solutions for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "different needs"
					})] }),
					description: "You do not need to be a large company to get a professional digital presence. We work on focused projects for businesses, professionals, organizations and individuals."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: industries.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 text-primary" }), industry]
					}, industry))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-primary",
						children: "Need something specific?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold text-foreground",
						children: "Tell us the job, not the technical jargon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "Whether it is a new website, Shopify store, DNS issue, business mailbox, SEO task or another digital problem, we can first understand what you need and then suggest the simplest practical solution."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "premium",
					size: "lg",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Talk to us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
