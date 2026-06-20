import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Insect Destroyer | ছারপোকা নির্মূল ফর্মুলা",
  description:
    "ছারপোকার সমস্যার স্থায়ী সমাধান | Insect Destroyer Bed Bug Killer Formula",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Insect Destroyer",
    description: "ছারপোকা নির্মূলের কার্যকর সমাধান",
    siteName: "Insect Destroyer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
