import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sifat | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sifat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative">
          <div className="w-full min-h-screen rounded-2xl backdrop-blur-xl bg-white/10 shadow-xl border border-white/10 p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}