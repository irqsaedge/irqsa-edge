import { o as __toESM } from "../_runtime.mjs";
import { _ as useAuth, a as db, b as cn, i as company, m as serviceGroups, n as Input, r as Label, t as Button } from "./router-ELYMG1et.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ChevronDown, E as Clock, h as Mail, j as Check, k as ChevronUp, l as Send, p as MessageCircle, t as X, x as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/firebase.mjs";
import { i as collection, s as serverTimestamp, t as addDoc } from "../_libs/@firebase/firestore+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Reveal, r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dg6v4DnI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var budgets = [
	"Under $500",
	"$500 – $1,500",
	"$1,500 – $5,000",
	"$5,000+",
	"Not sure yet"
];
var whatsappNumber = "923396450615";
var instagramUrl = "https://www.instagram.com/irqsaedge";
function buildDetails(data) {
	return [
		"IRQSA EDGE — PROJECT ENQUIRY",
		"",
		`Name: ${data.name}`,
		`Email: ${data.email}`,
		`Company: ${data.company || "Not provided"}`,
		`Phone: ${data.phone || "Not provided"}`,
		`Service: ${data.service || "Not selected"}`,
		`Budget: ${data.budget || "Not selected"}`,
		"",
		"Project details:",
		data.message,
		"",
		"Sent from irqsaedge.pro"
	].join("\n");
}
function ContactForm() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [service, setService] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const [savedEnquiry, setSavedEnquiry] = (0, import_react.useState)(null);
	const [channelOpen, setChannelOpen] = (0, import_react.useState)(false);
	const { user, openAuth } = useAuth();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!user) {
			openAuth("login");
			toast.info("Please sign in to send your project enquiry.");
			return;
		}
		const formData = new FormData(form);
		const enquiry = {
			name: String(formData.get("name") || "").trim(),
			email: String(formData.get("email") || "").trim(),
			company: String(formData.get("company") || "").trim(),
			phone: String(formData.get("phone") || "").trim(),
			service,
			budget,
			message: String(formData.get("message") || "").trim()
		};
		if (!enquiry.name || !enquiry.email || !enquiry.message) {
			toast.error("Please complete your name, email and project details.");
			return;
		}
		setSubmitting(true);
		try {
			await addDoc(collection(db, "contactRequests"), {
				userId: user.uid,
				...enquiry,
				status: "new",
				createdAt: serverTimestamp()
			});
			setSavedEnquiry(enquiry);
			setChannelOpen(true);
			toast.success("Enquiry saved successfully.", { description: "Choose how you want to send the same details to Irqsa Edge." });
		} catch {
			toast.error("We could not save your enquiry. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	const sendVia = async (channel) => {
		if (!savedEnquiry) return;
		const details = buildDetails(savedEnquiry);
		try {
			if (channel === "whatsapp") window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Irqsa Edge, I would like to discuss a project.\n\n${details}`)}`, "_blank", "noopener,noreferrer");
			else if (channel === "email") {
				const subject = `Project enquiry — ${savedEnquiry.name}`;
				window.location.href = `mailto:info@irqsaedge.pro?cc=${encodeURIComponent("irqsaedge@gmail.com")}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
			} else {
				await navigator.clipboard?.writeText(details);
				window.open(instagramUrl, "_blank", "noopener,noreferrer");
				toast.success("Enquiry details copied.", { description: "Paste them into your Irqsa Edge Instagram DM. Instagram does not allow websites to pre-fill a DM." });
			}
		} catch {
			toast.error("Could not open the selected channel. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "card-rim rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
					children: "Project enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold text-foreground",
					children: "Tell us about your project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Fill this form once. After saving, choose WhatsApp, Email or Instagram — your details will be carried over automatically."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-secondary/50 px-3 py-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block size-2 rounded-full bg-emerald-500" }), "Available 24/7"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "mt-7 grid gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							placeholder: "Your name",
							autoComplete: "name"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							placeholder: "you@example.com",
							autoComplete: "email"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "company",
							children: "Company (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "company",
							name: "company",
							placeholder: "Company name",
							autoComplete: "organization"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							placeholder: "+92...",
							autoComplete: "tel"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "service",
							children: "Service needed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: service,
							onValueChange: setService,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "service",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a service" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: serviceGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: g.title,
								children: g.title
							}, g.slug)) })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "budget",
							children: "Estimated budget"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: budget,
							onValueChange: setBudget,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "budget",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a range" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: b,
								children: b
							}, b)) })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: "Project details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						required: true,
						rows: 5,
						placeholder: "Tell us what you need and any useful details."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					variant: "premium",
					size: "xl",
					disabled: submitting,
					className: "w-full",
					children: [
						submitting ? "Saving enquiry…" : "Send enquiry",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground",
					children: "Your enquiry is saved to your client account first. You then choose your preferred contact channel."
				})
			]
		})]
	}), channelOpen && savedEnquiry ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[120] grid place-items-center bg-black/70 p-4 backdrop-blur-md",
		onMouseDown: (event) => event.target === event.currentTarget && setChannelOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Choose a channel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl font-semibold text-foreground",
							children: "Where should we continue?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Your enquiry is already saved. Pick one option and we will use the exact details you just entered."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setChannelOpen(false),
						"aria-label": "Close",
						className: "rounded-full border border-border p-2 text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void sendVia("whatsapp"),
							className: "group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-foreground",
										children: "Continue on WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Opens a ready-to-send WhatsApp message"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-muted-foreground group-hover:text-emerald-500" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void sendVia("email"),
							className: "group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-foreground",
										children: "Continue by Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Opens an email with all fields filled in"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-muted-foreground group-hover:text-primary" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void sendVia("instagram"),
							className: "group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-500/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-foreground",
										children: "Continue on Instagram"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Copies the enquiry and opens @irqsaedge"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-muted-foreground group-hover:text-pink-500" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-center text-[11px] leading-relaxed text-muted-foreground",
					children: "Instagram does not provide a secure public URL for pre-filled DMs, so we copy your enquiry before opening our profile. WhatsApp and Email can be pre-filled automatically."
				})
			]
		})
	}) : null] });
}
var details = [
	{
		icon: Mail,
		label: "Email",
		value: company.email,
		href: `mailto:${company.email}`
	},
	{
		icon: Mail,
		label: "Email",
		value: company.secondaryEmail,
		href: `mailto:${company.secondaryEmail}`
	},
	{
		icon: Instagram,
		label: "Instagram",
		value: "@irqsaedge",
		href: company.instagram
	},
	{
		icon: Clock,
		label: "Availability",
		value: company.hours
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Tell us what you need ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "and let's get started"
		})] }),
		description: "Send an enquiry for a website, e-commerce store, SEO, digital marketing, graphics, AI, business email, DNS or IT consultation. We are available 24/7."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold text-foreground",
						children: "Contact us directly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Your enquiry form sends the submitted details to both of our email addresses. You can also contact us directly by email or Instagram."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-col gap-4",
						children: details.map((d, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 items-start gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-[0.14em] text-muted-foreground",
									children: d.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: d.href ?? "#",
									target: d.href?.startsWith("http") ? "_blank" : void 0,
									rel: d.href?.startsWith("http") ? "noopener noreferrer" : void 0,
									className: "block break-words text-sm font-medium text-foreground hover:text-primary",
									children: d.value
								})]
							})]
						}, `${d.label}-${index}`))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				className: "rounded-3xl border border-border bg-secondary/40 p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-primary",
						children: "IT Consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold text-foreground",
						children: "$20 consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Need help with hosting, DNS, business email, Cloudflare, a website issue or another practical IT problem? Request a consultation through the form."
					})
				]
			})]
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
