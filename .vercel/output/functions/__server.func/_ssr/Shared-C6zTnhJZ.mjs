import { o as __toESM } from "../_runtime.mjs";
import { d as projects, g as technologies, h as stats, t as Button, u as processSteps, y as whyChooseUs } from "./router-C_aHWzU0.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight, M as BriefcaseBusiness, N as Boxes, S as Headphones, b as Layers, j as Check, n as Workflow } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shared-C6zTnhJZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Counts up to `value` the first time it scrolls into view. */
function Counter({ value, suffix = "", duration = 480 }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setDisplay(value);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (!entries[0]?.isIntersecting || started.current) return;
			started.current = true;
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - p, 3);
				setDisplay(Math.round(value * eased));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [value, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [display, suffix]
	});
}
function StatsBand() {
	const icons = [
		BriefcaseBusiness,
		Boxes,
		Layers,
		Workflow,
		Headphones
	];
	const iconTones = [
		"text-primary",
		"text-emerald-400",
		"text-amber-400",
		"text-violet-400",
		"text-cyan-400"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "-mt-2 py-10 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[1.7rem] border border-border bg-card/90 px-4 py-5 shadow-card backdrop-blur sm:px-6 lg:px-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-hero-glow opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative grid grid-cols-2 divide-x divide-border/80 sm:grid-cols-3 lg:grid-cols-5",
				children: stats.map((s, i) => {
					const Icon = icons[i] ?? BriefcaseBusiness;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .05,
						className: "group min-w-0 px-4 py-3 text-center sm:px-5 lg:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mx-auto grid size-12 place-items-center rounded-full border border-border/80 bg-background/60 ${iconTones[i]} shadow-soft transition-transform duration-300 group-hover:scale-110`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6",
									strokeWidth: 1.8
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-[2.35rem]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix,
									duration: 420
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground sm:text-sm",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto mt-4 block h-1 w-16 overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-full w-3/5 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-full" })
							})
						]
					}, s.label);
				})
			})]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		muted: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why Irqsa Edge",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Why businesses choose ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "Irqsa Edge"
			})] }),
			description: "We're small enough to care about every detail and structured enough to deliver on schedule."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: whyChooseUs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: i % 3 * .06,
				className: "card-rim group rounded-2xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-full bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-base font-semibold text-foreground",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
						children: item.body
					})
				]
			}, item.title))
		})]
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
		eyebrow: "Working Process",
		title: "A clear process with no surprises",
		description: "You always know what's happening, what's next, and what we need from you."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
		children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "li",
			delay: i % 4 * .07,
			className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl font-semibold text-primary-soft transition-colors duration-500 group-hover:text-primary",
					children: step.step
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-lg font-semibold text-foreground",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
					children: step.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" })
			]
		}, step.step))
	})] });
}
function TechMarquee() {
	const row = [...technologies, ...technologies];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		muted: true,
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Technologies",
			title: "A modern stack, chosen per project",
			description: "We pick the tools that fit your goals and budget — never the other way around."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "marquee-track flex w-max items-center gap-3",
				children: row.map((tech, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-soft",
					children: tech
				}, `${tech}-${i}`))
			})
		})]
	});
}
function PortfolioSection({ limit }) {
	const items = limit ? projects.slice(0, limit) : projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Portfolio",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Selected work across ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "industries"
			})] }),
			description: "Representative project types showing the range of websites, stores, landing pages, AI work and graphics we can create."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 sm:grid-cols-2",
			children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "article",
				delay: i % 2 * .08,
				className: "card-rim group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: `${p.title} — ${p.category} project by Irqsa Edge`,
						loading: "lazy",
						width: 1024,
						height: 768,
						className: "size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-full bg-surface-strong px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground backdrop-blur",
						children: p.category
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border/70 px-2.5 py-1 text-[0.7rem] text-muted-foreground",
								children: t
							}, t))
						})
					]
				})]
			}, p.title))
		}),
		limit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-12 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portfolio",
					children: ["View full portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		}) : null
	] });
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center shadow-card sm:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-hero-glow pointer-events-none absolute inset-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl",
					children: "Ready to get your digital work done?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground",
					children: "Tell us what you need and we'll come back with a clear scope, timeline and price."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "premium",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Start Your Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							children: "See pricing"
						})
					})]
				})
			]
		})]
	}) });
}
//#endregion
export { TechMarquee as a, StatsBand as i, PortfolioSection as n, WhyChooseUs as o, ProcessSection as r, CtaBand as t };
