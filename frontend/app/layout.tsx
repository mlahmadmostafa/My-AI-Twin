import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Mostafa's AI Digital Twin",
  description: "Chat with my AI digital twin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
