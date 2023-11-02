import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Movie Ratings",
  description: "Created by Atri Hegde",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 dark">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <Providers>
            <main className="mx-auto mt-5 w-11/12 scroll-auto md:w-3/4">
              {children}
            </main>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
