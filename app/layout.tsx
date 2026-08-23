import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers(); const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "omi.wtf"; const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https"); const origin = `${protocol}://${host}`;
  const title = "Omi Pricing Record — Documented Customer Evidence"; const description = "An independent record of Omi subscription pricing, free-tier changes, correspondence, and consumer resources.";
  return { metadataBase: new URL(origin), title, description, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }, openGraph: { title, description, type: "website", url: origin, images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "Omi Pricing Record: Omi advertised $199; the app showed $269.91" }] }, twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] } };
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
