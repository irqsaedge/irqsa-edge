import { o as __toESM } from "../_runtime.mjs";
import { b as cn } from "./router-C_aHWzU0.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useReducedMotion, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-LoSZXcgc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Scroll-triggered fade + rise. Respects reduced-motion preferences. */
function Reveal({ children, delay = 0, y = 18, className, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-12% 0px -8% 0px"
	});
	const reduce = useReducedMotion();
	const MotionTag = motion[as];
	const hidden = reduce ? {
		opacity: 1,
		y: 0
	} : {
		opacity: 0,
		y
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		ref,
		initial: hidden,
		animate: inView ? {
			opacity: 1,
			y: 0
		} : hidden,
		transition: {
			duration: .28,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: cn(className),
		children
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-1.5 rounded-full bg-primary",
			"aria-hidden": "true"
		}), children]
	});
}
function SectionHeading({ eyebrow, title, description, align = "center", as: Tag = "h2", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("flex flex-col gap-4", align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: cn("text-balance font-semibold text-foreground", Tag === "h1" ? "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl" : "text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]"),
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
function Section({ children, className, id, muted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28", muted && "bg-secondary/40", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
//#endregion
export { SectionHeading as i, Reveal as n, Section as r, Eyebrow as t };
