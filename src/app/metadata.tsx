import { Metadata } from "next";
import { openGraphImage } from "../Assets/images/index";

export const metadata: Metadata = {
  title:
    "Tech Tonic Solutions | Innovative Technology Solutions for Your Business",
  description:
    "Tech Tonic Solutions provides cutting-edge technology solutions to enhance your business growth with custom software, web development, and IT consulting.",
  openGraph: {
    type: "website",
    url: "https://techtonicsolutions.online",
    title: "Tech Tonic Solutions | Innovative Technology Solutions",
    description:
      "Discover top-notch technology solutions tailored to your business needs. From web development to IT consulting, we deliver expertise and results.",
    siteName: "Tech Tonic Solutions",
    images: [
      {
        url: openGraphImage.src, // Use the .src property
        width: 512,
        height: 512,
        alt: "Tech Tonic Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tonic Solutions | Innovative Technology Solutions",
    description:
      "Empowering your business with cutting-edge technology solutions.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://techtonicsolutions.online",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    robots: "index, follow",
  },
};
