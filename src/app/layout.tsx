import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "DevReadme AI | Professional GitHub READMEs",
  description: "Generate professional GitHub README files with AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning><ClerkProvider signInUrl="/signin" signUpUrl="/signup" afterSignOutUrl="/"><>{children}</></ClerkProvider></body>
    </html>
  );
}
