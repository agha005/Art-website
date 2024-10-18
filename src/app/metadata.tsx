import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artlify | Unleashing Creativity Through Digital Art and Design",
  description:
    "Artlify is your gateway to exceptional digital art and design. Explore captivating visual stories, discover unique artwork, and connect with the art community.",
  openGraph: {
    type: "website",
    url: "https://artlify.com",
    title: "Artlify | Unleashing Creativity Through Digital Art",
    description:
      "At Artlify, we empower artists and creators by showcasing innovative digital art and design. Join our community to explore creativity and get inspired.",
    siteName: "Artlify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artlify | Unleashing Creativity Through Digital Art",
    description:
      "Dive into the world of digital art and explore the works of talented artists at Artlify. Your creative journey starts here.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://artlify.com",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    robots: "index, follow",
  },
};
