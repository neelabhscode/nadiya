import { Cormorant, Geist } from "next/font/google";
import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Starter Template",
  description: "A minimal Next.js starter for iterative development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${cormorant.variable} min-h-dvh bg-stone-50 text-stone-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
