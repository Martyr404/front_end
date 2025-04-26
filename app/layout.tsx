import type { Metadata } from "next";
import localFont from 'next/font/local'
 
const Rubik = localFont({
  src: '../public/fonts/Rubik-SemiBold.woff2',
  display: 'swap',
})
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Rubik.className}
      >
        {children}
      </body>
    </html>
  );
}
