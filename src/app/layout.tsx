import localFont from "next/font/local";
import "./globals.css";
import { metadata as siteMetadata } from './metadata'; // Import metadata from your file
import Navbar from "./components/layout/Navbar/page";
import Footer from "./components/layout/Footer/page";

// Font configuration
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata will be automatically injected by Next.js
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{typeof metadata.title === 'string' ? metadata.title : 'Default Title'}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`} // Add fallback fonts if needed
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
