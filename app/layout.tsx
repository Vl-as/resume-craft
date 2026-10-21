import Header from "@/components/Header/Header";
import "./globals.css";
import { ThemeProvider } from "@teispace/next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={false}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
