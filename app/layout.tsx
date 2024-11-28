import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "외워져라 일본어!",
  description: "외워져라 일본어!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center bg-slate-300`}>
        <div className="flex flex-col justify-between w-full bg-white lg:max-w-sm h-dvh">
          <HeaderComponent />
          <div className="flex flex-col justify-start h-full p-4">{children}</div>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
