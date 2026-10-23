import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
  width: "device-width",
  initialScale: 1,
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Glow Unisex Salon, Rajouri Garden",
    default: "Glow Unisex Salon | Rajouri Garden, New Delhi",
  },
  description:
    "Official website for Glow Unisex Salon in Rajouri Garden, New Delhi. Discover professional hair styling, bridal makeup, and bespoke skincare services.",
  keywords: [
    "Glow Unisex Salon",
    "Salon in Rajouri Garden",
    "Hair Salon Rajouri Garden",
    "Bridal Makeup New Delhi",
    "Unisex Salon Delhi",
  ],
  authors: [{ name: "Glow Unisex Salon" }],
  openGraph: {
    title: "Glow Unisex Salon | Rajouri Garden, New Delhi",
    description:
      "Official website for Glow Unisex Salon in Rajouri Garden, New Delhi. Professional hair, skin, and bridal services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
