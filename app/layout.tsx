import "./globals.css";
import type { Metadata } from "next";
import { NavBar, Footer } from "@/components";
export const metadata: Metadata = {
  title: "Charrua",
  description: "Rent-a-car app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
