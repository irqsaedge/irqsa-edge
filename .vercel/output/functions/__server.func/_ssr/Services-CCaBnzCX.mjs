import { m as serviceGroups, t as Button } from "./router-B2EWUiV9.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Globe, I as ArrowRight, a as TrendingUp, c as ShoppingBag, h as Mail, s as Sparkles, u as Palette, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Services-CCaBnzCX.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	Globe,
	ShoppingBag,
	Palette,
	Sparkles,
	TrendingUp,
	LifeBuoy,
	Mail
};
function ServiceCard({ group, index, detailed = false }) {
	const Icon = icons[group.icon] ?? Globe;
	const visible = detailed ? group.items : group.items.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		as: "article",
		delay: index % 3 * .08,
		className: "card-rim group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: group.slug,
				className: "absolute -top-24",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-primary transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs tracking-[0.2em] text-muted-foreground",
					children: String(index + 1).padStart(2, "0")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xl font-semibold text-foreground",
				children: group.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
				children: group.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 flex flex-wrap gap-1.5",
				children: [visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border/70 bg-secondary/60 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground",
					children: item
				}, item)), !detailed && group.items.length > 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-full bg-primary-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-foreground",
					children: [
						"+",
						group.items.length - 6,
						" more"
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1",
					children: ["Discuss this service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function ServicesSection({ detailed = false, showAll = false }) {
	const groups = showAll ? serviceGroups : serviceGroups.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		children: [
			showAll ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Everything you need to launch, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "look sharp"
					}),
					" and scale"
				] }),
				description: "One senior team covering design, development, e-commerce, AI and marketing — so your digital presence stays consistent from first pixel to post-launch growth."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: showAll ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: groups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					group,
					index: i,
					detailed
				}, group.slug))
			}),
			!showAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-12 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						children: ["Explore all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			}) : null
		]
	});
}
//#endregion
export { ServicesSection as t };
