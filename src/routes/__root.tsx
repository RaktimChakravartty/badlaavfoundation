import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { Compass, Home } from "lucide-react";

function NotFoundComponent() {
  return (
    <section className="flex min-h-[70vh] items-center" style={{ backgroundColor: "var(--cream2)" }}>
      <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center lg:px-8">
        <span className="eyebrow justify-center" style={{ color: "var(--terra)" }}>
          <Compass className="h-4 w-4" strokeWidth={1.6} />
          Off the map
        </span>
        <h1 className="mt-5 font-display" style={{ color: "var(--ink)" }}>
          404
        </h1>
        <h2 className="mt-3" style={{ color: "var(--ink)" }}>
          This page is not here.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--wg)" }}>
          The page you are looking for does not exist or has moved. The work,
          though, is very much still on.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-lime">
            <Home className="h-4 w-4" strokeWidth={2} />
            Go home
          </Link>
          <Link to="/support" className="btn btn-outline">
            Support our work
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "Badlaav Foundation" },
      {
        name: "description",
        content:
          "Badlaav Foundation builds a system that helps 250+ children in Dehradun's child care institutions live with dignity and become self-reliant.",
      },
      { name: "author", content: "Badlaav Foundation" },
      { property: "og:title", content: "Badlaav Foundation" },
      {
        property: "og:description",
        content:
          "A system that helps children in care become self-reliant. Badlaav hum se hai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Badlaav Foundation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Badlaav Foundation" },
      {
        name: "twitter:description",
        content:
          "A system that helps children in care become self-reliant. Badlaav hum se hai.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1978325-f7ef-4eff-9e52-19697c503256/id-preview-56733b50--d282be0f-ba3b-4ab5-a27a-2316528932f7.lovable.app-1780217377814.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1978325-f7ef-4eff-9e52-19697c503256/id-preview-56733b50--d282be0f-ba3b-4ab5-a27a-2316528932f7.lovable.app-1780217377814.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Badlaav Foundation",
          url: "/",
          foundingDate: "2019",
          description:
            "A registered nonprofit trust in Dehradun working inside government Child Care Institutions since 2019.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dehradun",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          email: "info@badlaavfoundation.in",
          telephone: "+918630668493",
          sameAs: [
            "https://instagram.com/thebadlaavfoundation",
            "https://facebook.com/badlaavfoundation",
            "https://youtube.com/@BadlaavFoundation",
            "https://linkedin.com/company/badlaav-foundation",
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

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieNotice />
    </QueryClientProvider>
  );
}
