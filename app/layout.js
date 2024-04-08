import { Inter } from "next/font/google";
import "./globals.css";
import { Asap } from "next/font/google";


const mainFont = Asap({
  subsets: ["latin"],
})

const inter = Inter({
  subsets:["latin"]
})


export const metadata = {
  title: "Daniel Hong - Penultimate Software Engineering Student at Monash University",
  description: "Daniel Hong's portfolio website. Visit to view my projects, experiences and CV!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
