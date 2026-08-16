import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRouteWithContext, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { E as Clock, F as ArrowUpRight, O as Chromium, P as ArrowUp, S as Headphones, T as EyeOff, _ as LogIn, f as Moon, h as Mail, i as UserRound, l as Send, m as Menu, o as Sun, p as MessageCircle, r as Wifi, t as X, v as LockKeyhole, w as Eye, x as Instagram } from "../_libs/lucide-react.mjs";
import { o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as sendPasswordResetEmail, c as signOut, i as onAuthStateChanged, l as updateProfile, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword, r as getAuth, s as signInWithPopup, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as doc, n as getDoc, o as getFirestore, r as setDoc, s as serverTimestamp } from "../_libs/@firebase/firestore+[...].mjs";
import { a as ref, i as push, n as onDisconnect, o as serverTimestamp$1, r as onValue, s as set, t as getDatabase } from "../_libs/@firebase/database+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Bbdran_A.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-ELYMG1et.js
var router_ELYMG1et_exports = /* @__PURE__ */ __exportAll$1({
	_: () => values,
	a: () => db,
	c: () => company,
	d: () => pricingPlans,
	default: () => router,
	f: () => processSteps,
	g: () => technologies,
	getRouter: () => getRouter,
	h: () => stats,
	i: () => useAuth,
	l: () => faqs,
	m: () => serviceGroups,
	n: () => Label,
	o: () => realtimeDb,
	p: () => projects,
	r: () => Input,
	router: () => router,
	s: () => Button,
	t: () => router_exports,
	u: () => industries,
	v: () => whyChooseUs,
	y: () => irqsa_logo_jpeg_asset_default
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-BYW37dOc.css";
var ThemeContext = (0, import_react.createContext)({
	theme: "dark",
	toggle: () => {}
});
var STORAGE_KEY = "irqsa-theme";
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		setTheme(stored ?? system);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.colorScheme = theme;
	}, [theme]);
	const toggle = (0, import_react.useCallback)(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			window.localStorage.setItem(STORAGE_KEY, next);
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
function useTheme() {
	return (0, import_react.useContext)(ThemeContext);
}
var irqsa_logo_jpeg_asset_default = { url: "/favicon.ico" };
var work_business_default = "/assets/work-business-CcHkz-v4.jpg";
var work_shopify_default = "/assets/work-shopify-D1Z5Rdkd.jpg";
var work_restaurant_default = "/assets/work-restaurant-DaT0wZ33.jpg";
var work_ai_default = "/assets/work-ai-Bak0LEV6.jpg";
var work_brand_default = "/assets/work-brand-D2G-pwaJ.jpg";
var work_landing_default = "/assets/work-landing-BaZyuTRp.jpg";
/**
* Central, editable site content for Irqsa Edge.
*/
var company = {
	name: "Irqsa Edge",
	domain: "irqsaedge.pro",
	url: "https://irqsaedge.pro",
	tagline: "Web, digital and IT solutions for businesses and individuals.",
	email: "info@irqsaedge.pro",
	secondaryEmail: "irqsaedge@gmail.com",
	hours: "Available 24/7",
	consultationPrice: "$20",
	instagram: "https://www.instagram.com/irqsaedge",
	social: [
		{
			label: "Instagram",
			href: "https://www.instagram.com/irqsaedge"
		},
		{
			label: "WhatsApp",
			href: "https://wa.me/923396450615?text=Hi%20Irqsa%20Edge%2C%20I%20would%20like%20to%20discuss%20a%20project."
		},
		{
			label: "Email",
			href: "mailto:info@irqsaedge.pro"
		}
	]
};
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Portfolio",
		to: "/portfolio"
	},
	{
		label: "Pricing",
		to: "/pricing"
	},
	{
		label: "FAQ",
		to: "/faq"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var stats = [
	{
		value: 5,
		suffix: "+",
		label: "Years of experience"
	},
	{
		value: 7,
		suffix: "+",
		label: "Service categories"
	},
	{
		value: 6,
		suffix: "",
		label: "Step delivery process"
	},
	{
		value: 24,
		suffix: "/7",
		label: "Availability"
	},
	{
		value: 1,
		suffix: ":1",
		label: "Direct support"
	}
];
var values = [
	{
		title: "Practical Solutions",
		body: "Useful digital services focused on what your business actually needs."
	},
	{
		title: "Affordable Pricing",
		body: "Straightforward packages and custom quotes without unnecessary complexity."
	},
	{
		title: "Quality Work",
		body: "Clean, responsive websites and digital assets built with attention to detail."
	},
	{
		title: "Direct Communication",
		body: "Clear communication from the first enquiry through delivery and support."
	},
	{
		title: "Flexible Services",
		body: "From a small landing page to a complete e-commerce or business setup."
	},
	{
		title: "Long-Term Support",
		body: "Help with maintenance, domains, hosting, DNS, email and ongoing digital needs."
	}
];
var serviceGroups = [
	{
		slug: "website-development",
		title: "Website Development",
		summary: "Professional websites for almost any business, organization or personal project.",
		icon: "Globe",
		items: [
			"Business Website",
			"Company Website",
			"Portfolio Website",
			"Landing Page",
			"School Website",
			"College Website",
			"Restaurant Website",
			"Beauty Salon Website",
			"Hotel Website",
			"Real Estate Website",
			"Travel Website",
			"Booking Website",
			"NGO Website",
			"Blog Website",
			"Website Redesign",
			"Website Maintenance"
		]
	},
	{
		slug: "ecommerce",
		title: "E-Commerce",
		summary: "Online stores and product-selling websites built around your business model.",
		icon: "ShoppingBag",
		items: [
			"E-Commerce Website",
			"Shopify Store",
			"WordPress / WooCommerce",
			"Product Setup",
			"Store Customization",
			"Payment Setup Assistance",
			"Shipping Setup Assistance",
			"Store Redesign"
		]
	},
	{
		slug: "seo-marketing",
		title: "SEO & Digital Marketing",
		summary: "Practical search and marketing support to improve your online visibility.",
		icon: "TrendingUp",
		items: [
			"SEO",
			"On-Page SEO",
			"Technical SEO",
			"Local SEO",
			"Google Business Setup",
			"Social Media Marketing",
			"Content Support",
			"Digital Marketing"
		]
	},
	{
		slug: "graphic-design",
		title: "Graphics & Branding",
		summary: "Useful visual design for websites, social media, businesses and marketing.",
		icon: "Palette",
		items: [
			"Logo Design",
			"Business Graphics",
			"Social Media Posts",
			"Facebook Ads",
			"Instagram Posts",
			"YouTube Thumbnail",
			"Flyer",
			"Brochure",
			"Poster",
			"CV / Resume",
			"Presentation",
			"Certificates",
			"Menu Design",
			"Basic Branding"
		]
	},
	{
		slug: "ai-services",
		title: "AI Services",
		summary: "AI-powered features, integrations and automations for practical business use.",
		icon: "Sparkles",
		items: [
			"AI Chatbots",
			"AI Assistants",
			"AI Automation",
			"OpenAI Integration",
			"Gemini Integration",
			"AI Website Features",
			"Workflow Automation",
			"Business AI Solutions"
		]
	},
	{
		slug: "business-email-dns",
		title: "Business Email & DNS",
		summary: "Domain, email and DNS configuration so your business services work correctly.",
		icon: "Mail",
		items: [
			"Business Email Setup",
			"Mailbox Setup",
			"Domain Setup",
			"MX Records",
			"SPF",
			"DKIM",
			"DMARC",
			"Cloudflare DNS",
			"Hosting DNS",
			"Email Troubleshooting"
		]
	},
	{
		slug: "other-services",
		title: "Other Digital & IT Services",
		summary: "Technical help for hosting, deployment, websites and everyday digital needs.",
		icon: "LifeBuoy",
		items: [
			"Domain Registration Assistance",
			"Hosting Setup",
			"SSL Setup",
			"Cloudflare Setup",
			"Website Deployment",
			"Website Speed Optimization",
			"Bug Fixing",
			"Website Maintenance",
			"Technical Support",
			"IT Consultation"
		]
	}
];
var whyChooseUs = [
	{
		title: "5+ Years Experience",
		body: "Practical experience across websites, digital services and technical setup."
	},
	{
		title: "Affordable Pricing",
		body: "Simple packages for individuals, startups and small businesses."
	},
	{
		title: "Wide Range of Websites",
		body: "Business, school, restaurant, salon, portfolio, landing page and e-commerce websites."
	},
	{
		title: "Direct Communication",
		body: "Clear communication without unnecessary layers or complicated processes."
	},
	{
		title: "24/7 Availability",
		body: "Digital and IT help is available around the clock when you need it."
	},
	{
		title: "End-to-End Setup",
		body: "From domain and DNS to website, email, deployment and ongoing support."
	}
];
var processSteps = [
	{
		step: "01",
		title: "Tell Us What You Need",
		body: "Send an enquiry with your idea, requirements or technical problem."
	},
	{
		step: "02",
		title: "Plan",
		body: "We clarify the scope, pages, features, timeline and expected cost."
	},
	{
		step: "03",
		title: "Build",
		body: "Your website, store, graphics or digital setup is developed and reviewed."
	},
	{
		step: "04",
		title: "Test",
		body: "We check responsiveness, links, forms, performance and important details."
	},
	{
		step: "05",
		title: "Launch",
		body: "Domain, hosting, SSL, DNS and deployment are handled where required."
	},
	{
		step: "06",
		title: "Support",
		body: "Get help with updates, maintenance, email, DNS and other digital needs."
	}
];
var technologies = [
	"WordPress",
	"Shopify",
	"React",
	"Next.js",
	"Node.js",
	"PHP",
	"Python",
	"JavaScript",
	"TypeScript",
	"Tailwind CSS",
	"Firebase",
	"OpenAI",
	"Gemini",
	"Cloudflare"
];
var projects = [
	{
		title: "Business Website",
		category: "Business Website",
		blurb: "A professional business website structure designed to explain services and generate enquiries.",
		image: work_business_default,
		tags: [
			"Business",
			"Responsive",
			"SEO"
		]
	},
	{
		title: "Shopify Store",
		category: "E-Commerce",
		blurb: "A clean online store concept for products, collections and customer purchases.",
		image: work_shopify_default,
		tags: [
			"Shopify",
			"E-Commerce",
			"Store"
		]
	},
	{
		title: "Restaurant Website",
		category: "Restaurant",
		blurb: "A restaurant website concept with menu, business information and enquiry-focused sections.",
		image: work_restaurant_default,
		tags: [
			"Restaurant",
			"Menu",
			"Mobile"
		]
	},
	{
		title: "Service Landing Page",
		category: "Landing Page",
		blurb: "A focused landing page layout for promoting a service, offer or campaign.",
		image: work_landing_default,
		tags: [
			"Landing Page",
			"CTA",
			"SEO"
		]
	},
	{
		title: "AI Service Website",
		category: "AI Services",
		blurb: "An AI-focused website concept for explaining tools, features and business use cases.",
		image: work_ai_default,
		tags: [
			"AI",
			"Web",
			"Automation"
		]
	},
	{
		title: "Brand Graphics",
		category: "Graphics & Branding",
		blurb: "A visual branding and marketing graphics concept for a growing business.",
		image: work_brand_default,
		tags: [
			"Graphics",
			"Branding",
			"Social"
		]
	}
];
var pricingPlans = [
	{
		name: "Starter",
		price: "$150",
		cadence: "per project",
		tagline: "For a simple, professional online presence.",
		features: [
			"Up to 5 essential pages",
			"Responsive website",
			"Basic on-page SEO",
			"Contact form",
			"Mobile-friendly setup",
			"Basic post-launch support"
		],
		cta: "Start with Starter",
		featured: false
	},
	{
		name: "Growth",
		price: "$499",
		cadence: "per project",
		tagline: "For businesses that need a stronger online presence.",
		features: [
			"More complete multi-page website",
			"Professional responsive design",
			"SEO basics",
			"Business integrations",
			"E-commerce or Shopify options",
			"More revisions and support"
		],
		cta: "Choose Growth",
		featured: true
	},
	{
		name: "Custom",
		price: "Custom",
		cadence: "scoped per project",
		tagline: "For specific websites, stores and digital requirements.",
		features: [
			"Custom website requirements",
			"E-commerce and Shopify",
			"SEO and digital marketing",
			"AI features and integrations",
			"Business email / DNS setup",
			"Custom technical support"
		],
		cta: "Request a Custom Quote",
		featured: false
	}
];
var faqs = [
	{
		q: "What types of websites do you build?",
		a: "Almost any type of website, including business websites, portfolios, landing pages, school websites, restaurant websites, beauty salon websites, blogs, service websites and e-commerce stores."
	},
	{
		q: "Do you build Shopify stores?",
		a: "Yes. We can set up and customize Shopify stores, including store structure, product setup and relevant integrations."
	},
	{
		q: "Do you provide SEO?",
		a: "Yes. Services include basic on-page SEO, technical SEO, local SEO and practical digital marketing support."
	},
	{
		q: "Can you redesign my existing website?",
		a: "Yes. We can improve the design, responsiveness, structure, performance and content presentation of an existing website."
	},
	{
		q: "Can you setup business email?",
		a: "Yes. We can help with mailbox setup, domain email, MX, SPF, DKIM, DMARC, DNS and common email configuration issues."
	},
	{
		q: "Do you provide Cloudflare and DNS setup?",
		a: "Yes. We can configure domains, DNS records, Cloudflare, SSL and related hosting or email records."
	},
	{
		q: "Do you provide AI services?",
		a: "Yes. We can help with AI chatbots, assistants, integrations, AI website features and practical business automation."
	},
	{
		q: "How much does a website cost?",
		a: "Starter websites begin at $150. A more complete Growth package is $499, while custom requirements are quoted according to scope."
	},
	{
		q: "Do you provide IT consultation?",
		a: "Yes. IT consultation is available for $20 and can cover website, hosting, DNS, email and other practical digital or IT issues."
	},
	{
		q: "Are you available outside normal business hours?",
		a: "Yes. IRQSA Edge is available 24/7 for enquiries and digital/IT support requests."
	}
];
var industries = [
	"Small Businesses",
	"Startups",
	"Schools",
	"Restaurants",
	"Beauty Salons",
	"Real Estate",
	"E-Commerce",
	"Local Businesses",
	"Professionals",
	"Organizations"
];
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": `${company.name} home`,
		className: cn("group flex min-w-0 items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: irqsa_logo_jpeg_asset_default.url,
			alt: `${company.name} logo`,
			width: 44,
			height: 44,
			className: "size-12 shrink-0 rounded-xl object-cover ring-1 ring-primary/40 shadow-soft transition-transform duration-300 group-hover:scale-105"
		}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "truncate font-display text-[1.25rem] font-semibold tracking-tight text-foreground",
				children: ["Irqsa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "Edge"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 truncate text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground",
				children: company.domain
			})]
		})]
	});
}
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
		className: "group relative inline-flex h-10 w-[4.5rem] items-center rounded-full border border-border bg-secondary/70 p-1 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-1 size-8 rounded-full bg-brand-gradient shadow-glow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
				style: { transform: isDark ? "translateX(2.15rem)" : "translateX(0)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 grid size-8 place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `size-4 transition-colors ${isDark ? "text-muted-foreground" : "text-primary-foreground"}` })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10 grid size-8 place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `size-4 transition-colors ${isDark ? "text-primary-foreground" : "text-muted-foreground"}` })
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
			premium: "bg-brand-gradient text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-110",
			outline: "border border-border bg-background/60 backdrop-blur hover:border-primary/50 hover:bg-accent hover:text-accent-foreground",
			subtle: "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-9 px-4 text-xs",
			lg: "h-12 px-7 text-base",
			xl: "h-14 px-8 text-base",
			icon: "size-10 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var firebaseConfig = {
	apiKey: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_API_KEY"] || "AIzaSyAuFhdQm3SXcE3fofMw904Fe-LIqFONW3Q",
	authDomain: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_AUTH_DOMAIN"] || "irqsaedge-911e1.firebaseapp.com",
	projectId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_PROJECT_ID"] || "irqsaedge-911e1",
	storageBucket: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_STORAGE_BUCKET"] || "irqsaedge-911e1.firebasestorage.app",
	messagingSenderId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_MESSAGING_SENDER_ID"] || "201285358560",
	appId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_APP_ID"] || "1:201285358560:web:4f6aef1c88fbee897ed185",
	measurementId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_FIREBASE_MEASUREMENT_ID"] || "G-M3QH4KH02J"
};
var firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
var auth = getAuth(firebaseApp);
var db = getFirestore(firebaseApp);
var realtimeDb = getDatabase(firebaseApp, {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_FIREBASE_DATABASE_URL"] || "https://irqsaedge-911e1-default-rtdb.firebaseio.com/");
firebaseConfig.projectId;
var AuthContext = (0, import_react.createContext)(null);
function friendlyAuthError(error) {
	return {
		"auth/invalid-credential": "Email or password is incorrect.",
		"auth/invalid-email": "Please enter a valid email address.",
		"auth/email-already-in-use": "An account already exists with this email.",
		"auth/weak-password": "Use a stronger password (at least 6 characters).",
		"auth/popup-closed-by-user": "Google sign-in was cancelled.",
		"auth/popup-blocked": "Your browser blocked the sign-in popup. Please allow popups and try again.",
		"auth/operation-not-allowed": "This sign-in method is not enabled in Firebase yet.",
		"auth/unauthorized-domain": "This website domain is not authorized in Firebase Authentication. Add the current Vercel domain in Firebase Authentication → Settings → Authorized domains.",
		"auth/network-request-failed": "Network error while contacting Firebase. Check your internet connection and try again.",
		"auth/user-disabled": "This Firebase account has been disabled.",
		"auth/user-not-found": "No account was found with this email.",
		"auth/wrong-password": "Email or password is incorrect.",
		"auth/configuration-not-found": "Firebase Authentication is not configured correctly for this project.",
		"auth/internal-error": "Firebase returned an internal authentication error. Please try again."
	}[error?.code || ""] || "Something went wrong while signing you in. Please try again.";
}
async function syncUser(user) {
	const ref = doc(db, "users", user.uid);
	const existing = await getDoc(ref);
	await setDoc(ref, {
		uid: user.uid,
		name: user.displayName || "",
		email: user.email || "",
		photoURL: user.photoURL || "",
		provider: user.providerData[0]?.providerId || "password",
		updatedAt: serverTimestamp(),
		...existing.exists() ? {} : { createdAt: serverTimestamp() }
	}, { merge: true });
}
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [authOpen, setAuthOpen] = (0, import_react.useState)(false);
	const [authMode, setAuthMode] = (0, import_react.useState)("login");
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		return onAuthStateChanged(auth, (nextUser) => {
			(async () => {
				setUser(nextUser);
				setLoading(false);
				if (!nextUser) {
					setIsAdmin(false);
					return;
				}
				try {
					await syncUser(nextUser);
					const adminDoc = await getDoc(doc(db, "admins", nextUser.uid));
					setIsAdmin(adminDoc.exists() && adminDoc.data()?.["active"] !== false);
				} catch {
					setIsAdmin(false);
				}
			})();
		});
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		user,
		loading,
		isAdmin,
		authMode,
		setAuthMode,
		authOpen,
		openAuth: (mode = "login") => {
			setAuthMode(mode);
			setAuthOpen(true);
		},
		closeAuth: () => setAuthOpen(false),
		loginWithGoogle: async () => {
			try {
				const result = await signInWithPopup(auth, new GoogleAuthProvider());
				setUser(result.user);
				setAuthOpen(false);
				syncUser(result.user).catch(() => void 0);
			} catch (error) {
				throw new Error(friendlyAuthError(error));
			}
		},
		loginWithEmail: async (email, password) => {
			try {
				const result = await signInWithEmailAndPassword(auth, email, password);
				setUser(result.user);
				setAuthOpen(false);
				syncUser(result.user).catch(() => void 0);
			} catch (error) {
				throw new Error(friendlyAuthError(error));
			}
		},
		resetPassword: async (email) => {
			try {
				await sendPasswordResetEmail(auth, email);
			} catch (error) {
				throw new Error(friendlyAuthError(error));
			}
		},
		signupWithEmail: async (name, email, password) => {
			try {
				const result = await createUserWithEmailAndPassword(auth, email, password);
				if (name.trim()) await updateProfile(result.user, { displayName: name.trim() });
				setUser(result.user);
				setAuthOpen(false);
				syncUser(result.user).catch(() => void 0);
			} catch (error) {
				throw new Error(friendlyAuthError(error));
			}
		},
		logout: () => signOut(auth)
	}), [
		authMode,
		authOpen,
		isAdmin,
		loading,
		user
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const value = (0, import_react.useContext)(AuthContext);
	if (!value) throw new Error("useAuth must be used inside AuthProvider");
	return value;
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { user, openAuth } = useAuth();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "glass-strong py-2" : "border-b border-transparent py-4"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main navigation",
			className: "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mr-2 hidden items-center gap-1 lg:flex",
						children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeOptions: { exact: link.to === "/" },
							activeProps: { className: "text-foreground after:scale-x-100" },
							inactiveProps: { className: "text-muted-foreground" },
							className: "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gradient after:transition-transform after:duration-300 hover:after:scale-x-100",
							children: link.label
						}) }, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.dispatchEvent(new Event("irqsa-open-support")),
						className: "hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary sm:inline-flex",
						"aria-label": "Open live support",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Support" })]
					}),
					user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), " Account"]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						className: "hidden sm:inline-flex",
						onClick: () => openAuth("login"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "size-4" }), " Sign in"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "premium",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Start Project"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "grid size-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/60 text-foreground lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-5 mt-3 overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-card lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						activeOptions: { exact: link.to === "/" },
						activeProps: { className: "bg-accent text-accent-foreground" },
						className: "block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
						children: link.label
					}) }, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => window.dispatchEvent(new Event("irqsa-open-support")),
					className: "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-4 text-primary" }), " Open Live Support"]
				}),
				user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					className: "mt-3 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), " My Account"]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "lg",
					className: "mt-3 w-full",
					onClick: () => openAuth("login"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "size-4" }), " Sign in"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "premium",
					size: "lg",
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Start Project"
					})
				})
			]
		}) : null]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative overflow-hidden border-t border-border bg-secondary/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
									children: [company.tagline, " Website development, e-commerce, SEO, digital marketing, graphics, AI, business email, DNS and practical IT support."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-wrap gap-2",
									children: company.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: s.href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
										children: [s.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
									}) }, s.label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Quick links",
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								children: "Quick Links"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									className: "text-sm text-muted-foreground transition-colors hover:text-primary",
									children: l.label
								}) }, l.to))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								children: "Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: serviceGroups.slice(0, 6).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									hash: g.slug,
									className: "text-sm text-muted-foreground transition-colors hover:text-primary",
									children: g.title
								}) }, g.slug))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								children: "Get in touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-w-0 items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${company.email}`,
											className: "break-words hover:text-primary",
											children: company.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-w-0 items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${company.secondaryEmail}`,
											className: "break-words hover:text-primary",
											children: company.secondaryEmail
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-w-0 items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: company.instagram,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "hover:text-primary",
											children: "@irqsaedge"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-w-0 items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://wa.me/923396450615?text=Hi%20Irqsa%20Edge%2C%20I%20would%20like%20to%20discuss%20a%20project.",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "hover:text-primary",
											children: "WhatsApp · +92 339 6450615"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-w-0 items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.hours })]
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "divider-glow my-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						year,
						" ",
						company.name,
						" · All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-primary",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-primary",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://${company.domain}`,
								className: "hover:text-primary",
								children: company.domain
							})
						]
					})]
				})
			]
		})
	});
}
/** Brief branded intro overlay shown once on first paint. */
function LoadingScreen() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setDone(true), 900);
		return () => window.clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `pointer-events-none fixed inset-0 z-[70] grid place-items-center bg-background transition-opacity duration-700 ${done ? "opacity-0" : "opacity-100"}`,
		style: { visibility: done ? "hidden" : "visible" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: irqsa_logo_jpeg_asset_default.url,
				alt: "",
				width: 72,
				height: 72,
				className: "size-16 animate-pulse rounded-2xl ring-1 ring-border"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-32 overflow-hidden rounded-full bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-1/2 bg-brand-gradient marquee-track" })
			})]
		})
	});
}
/** Premium pointer treatment for desktop; disabled on touch/reduced-motion devices. */
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(false);
	const [clicking, setClicking] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setEnabled(finePointer.matches && !reduced.matches);
		update();
		finePointer.addEventListener("change", update);
		reduced.addEventListener("change", update);
		return () => {
			finePointer.removeEventListener("change", update);
			reduced.removeEventListener("change", update);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		let ringX = window.innerWidth / 2;
		let ringY = window.innerHeight / 2;
		let targetX = ringX;
		let targetY = ringY;
		let frame = 0;
		const move = (event) => {
			targetX = event.clientX;
			targetY = event.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
		};
		const hover = (event) => {
			const target = event.target;
			setActive(Boolean(target?.closest("a,button,[role='button'],input,textarea,select")));
		};
		const click = () => {
			setClicking(true);
			window.setTimeout(() => setClicking(false), 120);
		};
		const animate = () => {
			ringX += (targetX - ringX) * .55;
			ringY += (targetY - ringY) * .28;
			if (ring.current) ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
			frame = requestAnimationFrame(animate);
		};
		window.addEventListener("mousemove", move, { passive: true });
		window.addEventListener("mouseover", hover, { passive: true });
		window.addEventListener("mousedown", click, { passive: true });
		frame = requestAnimationFrame(animate);
		return () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseover", hover);
			window.removeEventListener("mousedown", click);
			cancelAnimationFrame(frame);
		};
	}, [enabled]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "custom-cursor-dot",
		ref: dot,
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `custom-cursor-ring ${active ? "is-active" : ""} ${clicking ? "is-clicking" : ""}`,
		ref: ring,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
	})] });
}
/** Thin brand-gradient reading-progress bar pinned to the top of the viewport. */
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-brand-gradient transition-[width] duration-150 ease-out",
			style: { width: `${progress}%` }
		})
	});
}
function ScrollToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 700);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Scroll back to top",
		className: `fixed bottom-6 left-6 z-50 grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function AuthModal() {
	const { authOpen, closeAuth, authMode, setAuthMode, loginWithGoogle, loginWithEmail, resetPassword, signupWithEmail } = useAuth();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!authOpen) return;
		const onKey = (event) => event.key === "Escape" && closeAuth();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [authOpen, closeAuth]);
	if (!authOpen) return null;
	const submit = async (event) => {
		event.preventDefault();
		setBusy(true);
		try {
			if (authMode === "signup") await signupWithEmail(name, email, password);
			else await loginWithEmail(email, password);
			toast.success(authMode === "signup" ? "Account created successfully." : "Welcome back to Irqsa Edge.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Authentication failed.");
		} finally {
			setBusy(false);
		}
	};
	const google = async () => {
		setBusy(true);
		try {
			await loginWithGoogle();
			toast.success("Google sign-in successful.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Google sign-in failed.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-md",
		onMouseDown: (e) => e.target === e.currentTarget && closeAuth(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Irqsa Edge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-semibold text-foreground",
							children: authMode === "signup" ? "Create your account" : "Welcome back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Sign in when you are ready to message us, send an enquiry, or manage your projects."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: closeAuth,
						"aria-label": "Close",
						className: "rounded-full border border-border p-2 text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "lg",
					className: "mt-6 w-full",
					onClick: google,
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "size-4" }), " Continue with Google"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						"OR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "grid gap-4",
					children: [
						authMode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "auth-name",
								children: "Full name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "auth-name",
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "pl-9",
									required: true,
									placeholder: "Your name"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "auth-email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "auth-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: "pl-9",
									required: true,
									placeholder: "you@example.com"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "auth-password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "auth-password",
										type: showPassword ? "text" : "password",
										minLength: 6,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "pl-9 pr-10",
										required: true,
										placeholder: "At least 6 characters"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword((v) => !v),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "premium",
							size: "lg",
							className: "w-full",
							disabled: busy,
							children: busy ? "Please wait…" : authMode === "signup" ? "Create account" : "Sign in"
						})
					]
				}),
				authMode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 w-full text-center text-xs font-medium text-primary hover:underline",
					onClick: async () => {
						if (!email) {
							toast.info("Enter your email first.");
							return;
						}
						try {
							await resetPassword(email);
							toast.success("Password reset email sent.");
						} catch (error) {
							toast.error(error instanceof Error ? error.message : "Could not send reset email.");
						}
					},
					children: "Forgot password?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-center text-sm text-muted-foreground",
					children: [
						authMode === "signup" ? "Already have an account?" : "New to Irqsa Edge?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAuthMode(authMode === "signup" ? "login" : "signup"),
							className: "font-semibold text-primary hover:underline",
							children: authMode === "signup" ? "Sign in" : "Create one"
						})
					]
				})
			]
		})
	});
}
function SupportPresence() {
	const { user, isAdmin } = useAuth();
	(0, import_react.useEffect)(() => {
		if (!user || !isAdmin) return;
		const presenceRef = ref(realtimeDb, "support/presence");
		set(presenceRef, {
			online: true,
			uid: user.uid,
			updatedAt: Date.now()
		});
		onDisconnect(presenceRef).set({
			online: false,
			uid: user.uid,
			updatedAt: Date.now()
		});
		return () => {
			set(presenceRef, {
				online: false,
				uid: user.uid,
				updatedAt: Date.now()
			});
		};
	}, [isAdmin, user]);
	return null;
}
function useSupportOnline() {
	const [online, setOnline] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => onValue(ref(realtimeDb, "support/presence"), (snapshot) => setOnline(snapshot.val()?.online === true)), []);
	return online;
}
function conversationId(uid) {
	return `client_${uid}`;
}
function SupportChat() {
	const { user, openAuth } = useAuth();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const online = useSupportOnline();
	const [messages, setMessages] = (0, import_react.useState)([]);
	const id = (0, import_react.useMemo)(() => user ? conversationId(user.uid) : "", [user]);
	(0, import_react.useEffect)(() => {
		const handler = () => {
			if (!user) {
				openAuth("login");
				return;
			}
			setOpen(true);
		};
		window.addEventListener("irqsa-open-support", handler);
		return () => window.removeEventListener("irqsa-open-support", handler);
	}, [openAuth, user]);
	(0, import_react.useEffect)(() => {
		if (!user || !open) return;
		const messagesRef = ref(realtimeDb, `conversations/${id}/messages`);
		return onValue(messagesRef, (snapshot) => {
			const data = snapshot.val() || {};
			const next = Object.entries(data).map(([key, value]) => {
				const item = value;
				return {
					id: key,
					text: item.text || "",
					uid: item.uid || "",
					createdAt: Number(item.createdAt || 0)
				};
			}).sort((a, b) => a.createdAt - b.createdAt);
			setMessages(next);
		});
	}, [
		id,
		open,
		user
	]);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		set(ref(realtimeDb, `conversations/${id}/members/${user.uid}`), true).catch(() => void 0);
	}, [id, user]);
	const send = async (event) => {
		event.preventDefault();
		const text = message.trim();
		if (!text) return;
		if (!user) {
			openAuth("login");
			return;
		}
		try {
			const newMessage = push(ref(realtimeDb, `conversations/${id}/messages`));
			await set(newMessage, {
				uid: user.uid,
				text,
				createdAt: serverTimestamp$1()
			});
			await set(ref(realtimeDb, `conversations/${id}/meta`), {
				clientUid: user.uid,
				clientName: user.displayName || "Client",
				clientEmail: user.email || "",
				lastMessage: text,
				updatedAt: serverTimestamp$1()
			});
			setMessage("");
		} catch {
			toast.error("Could not send your message. Please check Firebase Realtime Database rules.");
		}
	};
	const openChat = () => {
		if (!user) {
			openAuth("login");
			return;
		}
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [open && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-4 z-[90] w-[min(94vw,410px)] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-black/20 sm:right-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-secondary/60 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-card ${online ? "bg-emerald-500" : "bg-muted-foreground"}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "Irqsa Edge Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-3" }), online ? "Live support is online" : "Leave a message — we will reply"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-80 space-y-3 overflow-y-auto bg-background/30 p-4",
				children: messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-secondary/60 p-4 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "Welcome to Irqsa Edge Support 👋"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "Send your question here. When our team is online, you can chat with us live."
					})]
				}) : messages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${item.uid === user.uid ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`,
					children: item.text
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: send,
				className: "flex gap-2 border-t border-border bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "Write a message…",
					autoComplete: "off"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					variant: "premium",
					"aria-label": "Send message",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				})]
			})
		]
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: openChat,
		className: "group fixed bottom-5 right-5 z-[80] flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
		"aria-label": user ? "Open live support chat" : "Sign in to chat with support",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative grid size-9 place-items-center rounded-full bg-primary-foreground/15",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-primary ${online ? "bg-emerald-400" : "bg-muted-foreground"}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden text-sm font-semibold sm:block",
			children: online ? "Live Support" : "Support"
		})]
	})] });
}
var whatsappNumber = "923396450615";
var message = encodeURIComponent("Hi Irqsa Edge, I would like to discuss a project.");
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/${whatsappNumber}?text=${message}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with Irqsa Edge on WhatsApp",
		className: "group fixed bottom-5 left-5 z-[80] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 place-items-center rounded-full bg-white/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden text-sm font-semibold sm:block",
			children: "WhatsApp us"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-7xl font-semibold text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-2xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "premium",
					size: "lg",
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "premium",
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Go home"
						})
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services" },
			{
				name: "description",
				content: "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support."
			},
			{
				name: "author",
				content: "Irqsa Edge"
			},
			{
				name: "theme-color",
				content: "#2563EB"
			},
			{
				property: "og:site_name",
				content: "Irqsa Edge"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services"
			},
			{
				name: "twitter:title",
				content: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services"
			},
			{
				property: "og:description",
				content: "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support."
			},
			{
				name: "twitter:description",
				content: "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfessionalService",
				name: "Irqsa Edge",
				url: "https://irqsaedge.pro",
				slogan: "Web, digital and IT solutions for businesses and individuals.",
				description: "Websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support.",
				email: "info@irqsaedge.pro",
				areaServed: "Worldwide",
				serviceType: [
					"Website Development",
					"E-Commerce Development",
					"Shopify",
					"SEO",
					"Digital Marketing",
					"Graphic Design",
					"AI Services",
					"Business Email Setup",
					"DNS Configuration",
					"IT Consultation"
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen animate-in fade-in duration-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}, pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportChat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportPresence, {})
		] }) })
	});
}
var $$splitComponentImporter$10 = () => import("./routes-DtR2WErg.mjs");
var title$8 = "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services";
var description$8 = "Irqsa Edge provides websites, Shopify and e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support.";
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$8 },
		{
			name: "description",
			content: description$8
		},
		{
			property: "og:title",
			content: title$8
		},
		{
			property: "og:description",
			content: description$8
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-BTZnQyAZ.mjs");
var title$7 = "About Irqsa Edge — Web, Digital & IT Services";
var description$7 = "Learn about Irqsa Edge, a small digital services provider with 5+ years of practical experience in websites, SEO, e-commerce, graphics, AI, business email, DNS and IT support.";
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: title$7 },
		{
			name: "description",
			content: description$7
		},
		{
			property: "og:title",
			content: title$7
		},
		{
			property: "og:description",
			content: description$7
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-Dg6v4DnI.mjs");
var title$6 = "Contact Irqsa Edge — Start Your Project";
var description$6 = "Contact Irqsa Edge for websites, SEO, e-commerce, Shopify, graphics, AI, business email, DNS and IT consultation.";
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard-D76h6Zkg.mjs");
var Route$7 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./faq-BPiq7jjh.mjs");
var title$5 = "FAQ — Websites, SEO, Shopify, Email & IT | Irqsa Edge";
var description$5 = "Answers about website types, Shopify, SEO, redesigns, business email, DNS, AI services, pricing and $20 IT consultation.";
var Route$6 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./portfolio-Ci4qOpx_.mjs");
var title$4 = "Portfolio — Website, E-Commerce & Digital Work | Irqsa Edge";
var description$4 = "Explore representative website, e-commerce, landing page, restaurant, AI and graphics work from Irqsa Edge.";
var Route$5 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./pricing-BEBDe28B.mjs");
var title$3 = "Pricing — Website & Digital Service Packages | Irqsa Edge";
var description$3 = "Simple website pricing: Starter $150, Growth $499 and Custom pricing for specific requirements. IT consultation is $20.";
var Route$4 = createFileRoute("/pricing")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-CiQFIyGy.mjs");
var title$2 = "Privacy Policy — Irqsa Edge";
var description$2 = "How Irqsa Edge collects, uses and protects the information you share through our website and project enquiries.";
var Route$3 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-oJKbH0i4.mjs");
var title$1 = "Services — Websites, SEO, E-Commerce, AI & IT | Irqsa Edge";
var description$1 = "Website development, Shopify, e-commerce, SEO, digital marketing, graphics, AI, business email, DNS, Cloudflare, hosting and $20 IT consultation from Irqsa Edge.";
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-CTL3rmll.mjs");
var title = "Terms of Service — Irqsa Edge";
var description = "The terms that apply to projects, quotes, payments, revisions, ownership and support when working with Irqsa Edge.";
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.inbox-BR_Azxue.mjs");
var Route = createFileRoute("/admin/inbox")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	DashboardRoute: Route$7.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$11
	}),
	FaqRoute: Route$6.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$11
	}),
	PortfolioRoute: Route$5.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$11
	}),
	PricingRoute: Route$4.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$11
	}),
	PrivacyRoute: Route$3.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$11
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$11
	}),
	TermsRoute: Route$1.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$11
	}),
	AdminInboxRoute: Route.update({
		id: "/admin/inbox",
		path: "/admin/inbox",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({
	default: () => router,
	getRouter: () => getRouter,
	router: () => router
});
var queryClient = new QueryClient();
var router = createRouter({
	routeTree,
	context: { queryClient },
	scrollRestoration: true,
	defaultPreloadStaleTime: 0
});
var getRouter = () => router;
//#endregion
export { useAuth as _, db as a, cn as b, irqsa_logo_jpeg_asset_default as c, projects as d, realtimeDb as f, technologies as g, stats as h, company as i, pricingPlans as l, serviceGroups as m, Input as n, faqs as o, router_ELYMG1et_exports as p, Label as r, industries as s, Button as t, processSteps as u, values as v, whyChooseUs as y };
