import { t as Button, v as values } from "./router-C_aHWzU0.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/About-BKbX549g.js
var import_jsx_runtime = require_jsx_runtime();
function AboutSection({ withCta = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "About Irqsa Edge",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A practical digital service provider for",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "complete business solutions"
					})
				] }),
				description: "Irqsa Edge is a small but capable digital services company with 5+ years of practical experience. We build websites and online stores, provide SEO and digital marketing, create graphics, and handle business email, DNS, AI services and practical IT support."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: values.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i % 2 * .08,
					className: "card-rim rounded-2xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-foreground",
						children: value.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: value.body
					})]
				}, value.title))
			})]
		}), withCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					children: ["More about our studio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		}) : null]
	});
}
//#endregion
export { AboutSection as t };
