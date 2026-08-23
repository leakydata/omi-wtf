import type { Metadata } from "next";
import "./globals.css";

const title = "Omi Pricing Record: The deal changed before delivery";
const description = "Omi pages advertised $199 per year and 1,200 free minutes. Before one customer's hardware arrived, the app showed $269.91. See the receipts.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omi.wtf"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://omi.wtf",
    images: [{ url: "https://omi.wtf/og.png", width: 1731, height: 909, alt: "Omi Pricing Record: Omi advertised $199; the app showed $269.91" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://omi.wtf/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
