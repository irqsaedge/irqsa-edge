import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { ThemeProvider } from "../lib/theme";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { LoadingScreen } from "../components/layout/LoadingScreen";
import { CustomCursor } from "../components/layout/CustomCursor";
import { ScrollProgress, ScrollToTop } from "../components/layout/SiteWidgets";
import { Toaster } from "../components/ui/sonner";
import { Button } from "../components/ui/button";
import { AuthProvider } from "@/lib/auth";
import { AuthModal } from "@/components/auth/AuthModal";
import { SupportChat } from "@/components/support/SupportChat";
import { WhatsAppButton } from "@/components/support/WhatsAppButton";
import { SupportPresence } from "@/components/support/SupportPresence";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="premium" size="lg" className="mt-7">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            variant="premium"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services" },
      {
        name: "description",
        content:
          "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support.",
      },
      { name: "author", content: "Irqsa Edge" },
      { name: "theme-color", content: "#2563EB" },
      { property: "og:site_name", content: "Irqsa Edge" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services" },
      { name: "twitter:title", content: "Irqsa Edge — Websites, SEO, E-Commerce & Digital Services" },
      { property: "og:description", content: "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support." },
      { name: "twitter:description", content: "Irqsa Edge provides websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Irqsa Edge",
          url: "https://irqsaedge.pro",
          slogan: "Web, digital and IT solutions for businesses and individuals.",
          description:
            "Websites, e-commerce, SEO, digital marketing, graphics, AI services, business email, DNS and practical IT support.",
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
            "IT Consultation",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <ThemeProvider>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main key={pathname} className="min-h-screen animate-in fade-in duration-500">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
        <AuthModal />
        <SupportChat />
        <WhatsAppButton />
        <SupportPresence />
      </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
