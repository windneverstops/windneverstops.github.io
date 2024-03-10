import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Hong - Software Engineering student",
  description: "Daniel's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
