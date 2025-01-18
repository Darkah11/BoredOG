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

export const metadata = {
  title: "Bored OG",
  description: "The “Bored Office Guy” is the memecoin for anyone who has ever stared at the clock, praying for it to hit 5 PM. Our mission is to embody the despair, exhaustion, and dark humor of office life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
