import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel's portfolio website",
  description: "Daniel Hong's portfolio website. Visit to view my projects, experiences and CV!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
