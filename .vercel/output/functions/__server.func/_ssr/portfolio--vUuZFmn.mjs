import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { n as PortfolioSection, t as CtaBand } from "./Shared-C6zTnhJZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio--vUuZFmn.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Portfolio",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Different projects, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "different industries"
			})] }),
			description: "A representative showcase of the types of websites, stores, landing pages, AI work and graphics we can build. These are service examples, not fabricated client testimonials."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto flex max-w-4xl flex-wrap justify-center gap-2",
				children: [
					"Business",
					"Landing Pages",
					"E-Commerce",
					"Shopify",
					"Restaurants",
					"AI",
					"Graphics"
				].map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-soft",
					children: category
				}, category))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { PortfolioPage as component };
