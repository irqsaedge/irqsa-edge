import { i as company } from "./router-B2EWUiV9.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-nBV-8wSm.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		h: "Quotes and scope",
		p: "Every project begins with a written scope and fixed quote. Work outside that scope is quoted separately before it starts."
	},
	{
		h: "Payments",
		p: "Projects typically require an advance to begin, with the balance due before final delivery or go-live. Retainers are billed monthly in advance."
	},
	{
		h: "Revisions",
		p: "Each package includes a defined number of revision rounds. Additional rounds are available at our standard hourly rate."
	},
	{
		h: "Timelines",
		p: "Delivery dates assume timely feedback and content from your side. Delays in approvals may shift the schedule accordingly."
	},
	{
		h: "Ownership",
		p: "On final payment, you own the delivered designs and custom code. Third-party licences, themes, plugins and stock assets remain subject to their own terms."
	},
	{
		h: "Support and maintenance",
		p: "Post-launch support periods are stated in your package. Ongoing maintenance, monitoring and updates are available as a monthly plan."
	},
	{
		h: "Liability",
		p: "We deliver our services with professional care, but we are not liable for indirect or consequential losses, or for downtime caused by third-party providers."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Terms of Service",
		description: "Placeholder terms provided as a starting point — have them reviewed by a legal professional before publishing."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mb-9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold text-foreground",
				children: s.h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: s.p
			})]
		}, s.h)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Need clarification? Contact",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${company.email}`,
					className: "text-primary hover:underline",
					children: company.email
				}),
				"."
			]
		})]
	}) })] });
}
//#endregion
export { TermsPage as component };
