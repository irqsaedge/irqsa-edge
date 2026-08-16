import { t as Button } from "./router-C_aHWzU0.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight, j as Check } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { r as ProcessSection, t as CtaBand } from "./Shared-C6zTnhJZ.mjs";
import { t as ServicesSection } from "./Services-BMYu1-rV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BLPtpN4c.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["One place for your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "web & digital needs"
			})] }),
			description: "From a simple landing page to a business website, Shopify store, SEO setup, business mailbox, DNS configuration or practical IT help — we keep the process straightforward."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {
			detailed: true,
			showAll: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			muted: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why these services work together",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["From domain to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "finished website"
				})] }),
				description: "You can use one service or combine several. For example: domain + DNS + business email + website + SEO, all handled as one practical setup."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					"Website + domain + hosting",
					"Shopify + products + store setup",
					"Business email + MX/SPF/DKIM/DMARC",
					"Website + SEO + digital marketing",
					"Brand graphics + social media assets",
					"Website + AI features + automation"
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: index % 3 * .06,
					className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-medium text-foreground",
						children: item
					})]
				}, item))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 shadow-card sm:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-primary",
						children: "IT Help"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold text-foreground",
						children: "Need technical help? $20 consultation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "Get focused help with hosting, domains, DNS, Cloudflare, business email, website issues and other practical digital/IT problems."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "premium",
					size: "lg",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Get IT Help ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ServicesPage as component };
