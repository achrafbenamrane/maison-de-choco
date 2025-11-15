import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "maison du choco🍫",
  description: "Chocolat prestige • Gâteau prestige • Dattes fourrées",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
