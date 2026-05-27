import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    template: "%s | CarplayGO",
    default: "CarplayGO — CarPlay sans fil pour votre voiture",
  },
  description:
    "Transformez votre CarPlay filaire en CarPlay sans fil en 30 secondes. Plug & play. Compatible iPhone. Livraison 24h.",
  keywords: [
    "carplay",
    "sans fil",
    "adaptateur",
    "iphone",
    "voiture",
    "apple carplay",
    "wireless carplay",
    "adaptateur carplay",
  ],
  authors: [{ name: "CarplayGO" }],
  creator: "CarplayGO",
  publisher: "CarplayGO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CarplayGO",
    title: "CarplayGO — CarPlay sans fil pour votre voiture",
    description:
      "Transformez votre CarPlay filaire en CarPlay sans fil en 30 secondes. Plug & play.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CarplayGO — Adaptateur CarPlay sans fil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarplayGO — CarPlay sans fil",
    description: "Transformez votre CarPlay filaire en sans fil en 30 secondes.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CarplayGO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
