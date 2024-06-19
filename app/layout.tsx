import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import ConvexProvider from "@/providers/convex-provider";
import { Toaster } from "@/components/ui/toaster";
import AudioProvider from "@/providers/audio-provider";

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icon/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexProvider>
      <html lang="en">
        <AudioProvider>
          <body className={inter.className}>
            {children}
            <Toaster />
          </body>
        </AudioProvider>
      </html>
    </ConvexProvider>
  );
}
