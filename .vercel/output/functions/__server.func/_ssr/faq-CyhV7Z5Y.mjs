import { t as Button } from "./router-B2EWUiV9.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { t as CtaBand } from "./Shared-B52xO4hc.mjs";
import { t as FaqSection } from "./Faq-D_TtbHRo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CyhV7Z5Y.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "FAQ",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Straight answers before you ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "start a project"
			})] }),
			description: "Find quick answers about websites, Shopify, e-commerce, SEO, business email, DNS, AI services, pricing and technical support."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold text-foreground",
						children: "Still have a question?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Send the details. If it is a website, digital, email, DNS or practical IT problem, we will tell you what can be done and what it should cost."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "premium",
						size: "lg",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Ask us directly ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { FaqPage as component };
