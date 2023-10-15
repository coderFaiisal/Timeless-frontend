import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/lib/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeless Jewellery",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} max-w-7xl mx-auto`}>
          <SessionProvider session={session}> {children}</SessionProvider>
        </body>
      </html>
    </Providers>
  );
}
