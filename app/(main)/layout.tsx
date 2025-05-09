import type { Metadata } from "next";
import "@/app/globals.css";
import "@/public/assets/css/style.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/Header";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "800", "900"],
//   variable: "--font-inter",
// });

export const metadata: Metadata = {
  title: "Ardu Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="container-lg">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
