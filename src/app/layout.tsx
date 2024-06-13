import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { TopNav } from "./_components/topnav";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Zorro - travel for less",
  description: "Making your money travel further",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className={`font sans ${inter.style.fontWeight}`}>
          <TopNav />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
