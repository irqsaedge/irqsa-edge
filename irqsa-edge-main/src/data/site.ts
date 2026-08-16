/**
 * Central, editable site content for Irqsa Edge.
 */

import workBusiness from "@/assets/work-business.jpg";
import workShopify from "@/assets/work-shopify.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workAi from "@/assets/work-ai.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workLanding from "@/assets/work-landing.jpg";

export const company = {
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
    { label: "Instagram", href: "https://www.instagram.com/irqsaedge" },
    { label: "Email", href: "mailto:info@irqsaedge.pro" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 7, suffix: "+", label: "Service categories" },
  { value: 6, suffix: "", label: "Step delivery process" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 1, suffix: ":1", label: "Direct support" },
];

export const values = [
  {
    title: "Practical Solutions",
    body: "Useful digital services focused on what your business actually needs.",
  },
  {
    title: "Affordable Pricing",
    body: "Straightforward packages and custom quotes without unnecessary complexity.",
  },
  {
    title: "Quality Work",
    body: "Clean, responsive websites and digital assets built with attention to detail.",
  },
  {
    title: "Direct Communication",
    body: "Clear communication from the first enquiry through delivery and support.",
  },
  {
    title: "Flexible Services",
    body: "From a small landing page to a complete e-commerce or business setup.",
  },
  {
    title: "Long-Term Support",
    body: "Help with maintenance, domains, hosting, DNS, email and ongoing digital needs.",
  },
];

export type ServiceGroup = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
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
      "Website Maintenance",
    ],
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
      "Store Redesign",
    ],
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
      "Digital Marketing",
    ],
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
      "Basic Branding",
    ],
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
      "Business AI Solutions",
    ],
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
      "Email Troubleshooting",
    ],
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
      "IT Consultation",
    ],
  },
];

export const whyChooseUs = [
  { title: "5+ Years Experience", body: "Practical experience across websites, digital services and technical setup." },
  { title: "Affordable Pricing", body: "Simple packages for individuals, startups and small businesses." },
  { title: "Wide Range of Websites", body: "Business, school, restaurant, salon, portfolio, landing page and e-commerce websites." },
  { title: "Direct Communication", body: "Clear communication without unnecessary layers or complicated processes." },
  { title: "24/7 Availability", body: "Digital and IT help is available around the clock when you need it." },
  { title: "End-to-End Setup", body: "From domain and DNS to website, email, deployment and ongoing support." },
];

export const processSteps = [
  { step: "01", title: "Tell Us What You Need", body: "Send an enquiry with your idea, requirements or technical problem." },
  { step: "02", title: "Plan", body: "We clarify the scope, pages, features, timeline and expected cost." },
  { step: "03", title: "Build", body: "Your website, store, graphics or digital setup is developed and reviewed." },
  { step: "04", title: "Test", body: "We check responsiveness, links, forms, performance and important details." },
  { step: "05", title: "Launch", body: "Domain, hosting, SSL, DNS and deployment are handled where required." },
  { step: "06", title: "Support", body: "Get help with updates, maintenance, email, DNS and other digital needs." },
];

export const technologies = [
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
  "Cloudflare",
];

export type Project = {
  title: string;
  category: string;
  blurb: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Business Website",
    category: "Business Website",
    blurb: "A professional business website structure designed to explain services and generate enquiries.",
    image: workBusiness,
    tags: ["Business", "Responsive", "SEO"],
  },
  {
    title: "Shopify Store",
    category: "E-Commerce",
    blurb: "A clean online store concept for products, collections and customer purchases.",
    image: workShopify,
    tags: ["Shopify", "E-Commerce", "Store"],
  },
  {
    title: "Restaurant Website",
    category: "Restaurant",
    blurb: "A restaurant website concept with menu, business information and enquiry-focused sections.",
    image: workRestaurant,
    tags: ["Restaurant", "Menu", "Mobile"],
  },
  {
    title: "Service Landing Page",
    category: "Landing Page",
    blurb: "A focused landing page layout for promoting a service, offer or campaign.",
    image: workLanding,
    tags: ["Landing Page", "CTA", "SEO"],
  },
  {
    title: "AI Service Website",
    category: "AI Services",
    blurb: "An AI-focused website concept for explaining tools, features and business use cases.",
    image: workAi,
    tags: ["AI", "Web", "Automation"],
  },
  {
    title: "Brand Graphics",
    category: "Graphics & Branding",
    blurb: "A visual branding and marketing graphics concept for a growing business.",
    image: workBrand,
    tags: ["Graphics", "Branding", "Social"],
  },
];

export const pricingPlans = [
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
      "Basic post-launch support",
    ],
    cta: "Start with Starter",
    featured: false,
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
      "More revisions and support",
    ],
    cta: "Choose Growth",
    featured: true,
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
      "Custom technical support",
    ],
    cta: "Request a Custom Quote",
    featured: false,
  },
];

export const faqs = [
  {
    q: "What types of websites do you build?",
    a: "Almost any type of website, including business websites, portfolios, landing pages, school websites, restaurant websites, beauty salon websites, blogs, service websites and e-commerce stores.",
  },
  {
    q: "Do you build Shopify stores?",
    a: "Yes. We can set up and customize Shopify stores, including store structure, product setup and relevant integrations.",
  },
  {
    q: "Do you provide SEO?",
    a: "Yes. Services include basic on-page SEO, technical SEO, local SEO and practical digital marketing support.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can improve the design, responsiveness, structure, performance and content presentation of an existing website.",
  },
  {
    q: "Can you setup business email?",
    a: "Yes. We can help with mailbox setup, domain email, MX, SPF, DKIM, DMARC, DNS and common email configuration issues.",
  },
  {
    q: "Do you provide Cloudflare and DNS setup?",
    a: "Yes. We can configure domains, DNS records, Cloudflare, SSL and related hosting or email records.",
  },
  {
    q: "Do you provide AI services?",
    a: "Yes. We can help with AI chatbots, assistants, integrations, AI website features and practical business automation.",
  },
  {
    q: "How much does a website cost?",
    a: "Starter websites begin at $150. A more complete Growth package is $499, while custom requirements are quoted according to scope.",
  },
  {
    q: "Do you provide IT consultation?",
    a: "Yes. IT consultation is available for $20 and can cover website, hosting, DNS, email and other practical digital or IT issues.",
  },
  {
    q: "Are you available outside normal business hours?",
    a: "Yes. IRQSA Edge is available 24/7 for enquiries and digital/IT support requests.",
  },
];

export const industries = [
  "Small Businesses",
  "Startups",
  "Schools",
  "Restaurants",
  "Beauty Salons",
  "Real Estate",
  "E-Commerce",
  "Local Businesses",
  "Professionals",
  "Organizations",
];
