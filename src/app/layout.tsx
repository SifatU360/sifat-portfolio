import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sifat | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sifat" }],
  openGraph: {
    title: "Sifat | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifat | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950`}
      >
        {/* Background grid pattern */}
        <div 
          className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          aria-hidden="true"
        />
        
        {/* Gradient overlay */}
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"
          aria-hidden="true"
        />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 relative">
          <div className="w-full min-h-screen rounded-2xl backdrop-blur-xl bg-white/[0.02] shadow-2xl border border-white/[0.05] p-4 md:p-6">
            {children}
          </div>
        </div>

        {/* Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}