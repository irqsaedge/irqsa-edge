import { i as company } from "./router-C_aHWzU0.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CkE0jekm.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		h: "Information we collect",
		p: "We collect only the details you submit through our contact form or send us directly: your name, email address, phone number, company name and project description. We also collect anonymous analytics about how visitors use this website."
	},
	{
		h: "How we use your information",
		p: "Your details are used to reply to your enquiry, prepare proposals, deliver the services you engage us for, and — only with your consent — send occasional updates about our work."
	},
	{
		h: "Sharing and third parties",
		p: "We never sell your data. We share information only with the service providers required to operate our business (for example hosting, email and analytics providers), and only to the extent necessary."
	},
	{
		h: "Data retention",
		p: "Enquiry records are kept for as long as needed for our business relationship and legal obligations. You can ask us to delete your data at any time."
	},
	{
		h: "Your rights",
		p: "You may request access to, correction of, or deletion of your personal data, and you may withdraw consent for marketing at any time."
	},
	{
		h: "Cookies",
		p: "This website uses essential cookies plus optional analytics cookies to understand aggregate usage. You can block cookies in your browser settings."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		description: "This is placeholder legal copy you should review with a qualified professional before publishing."
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
				"Questions about this policy? Email us at",
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
export { PrivacyPage as component };
