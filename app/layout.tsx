import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNav from "./components/sidenav";

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
  title: {
    template: '%s | Task Manager',
    default: 'Task Manager'
  },
  description: "A Task Manager create to learn nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="">
            <SideNav/>
          </div>
          
          <div className="flex-grow p-6 md:p-5 pt-16 md:pt-5 md:overflow-y-auto bg-gray-700 text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
