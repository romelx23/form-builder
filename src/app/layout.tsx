import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/toaster";
import DesignerContextProvider from "@/context/DesignerContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PageForm",
  description: "Crea tu formulario a tu medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Clerk</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Clerk</title>
                  <path
                    d="M0 0h20v20H0V0zm2 3h16v2H2V3zm0 4h16v2H2V7zm0 4h16v2H2v-2zm0 4h16v2H2v-2z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
          </nav> */}
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
          <footer className="flex items-center justify-center w-full h-24 border-t">
            <a
              className="flex items-center justify-center"
              href="https://clerk.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              Clerk
            </a>
          </footer>
        </body>
      </html >
    </ClerkProvider>
  );
}
