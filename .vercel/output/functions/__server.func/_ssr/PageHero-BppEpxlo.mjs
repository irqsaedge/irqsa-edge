import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal, t as Eyebrow } from "./Section-LoSZXcgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BppEpxlo.js
var import_jsx_runtime = require_jsx_runtime();
/** Compact hero used at the top of every inner page. */
function PageHero({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-hero-glow absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines absolute inset-0 opacity-30" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-balance text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.25rem]",
						children: title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .16,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: description
					})
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
