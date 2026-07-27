"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth/auth-shell";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";

const appearance = { variables: { colorPrimary: "#b9b5ff", colorBackground: "#202129", colorInputBackground: "#191a22", colorInputText: "#f1eef6", colorText: "#f1eef6", colorTextSecondary: "#cbc8d4", colorDanger: "#ffacb9", borderRadius: "0.56rem" }, elements: { rootBox: "auth-clerk", card: "auth-clerk-card", header: "auth-clerk-header", footer: "auth-clerk-footer" } };

export function AuthPage({ mode }: Readonly<{ mode: "signin" | "signup" }>) {
  useAuthRedirect();
  return <AuthShell mode={mode}>{mode === "signin" ? <SignIn appearance={appearance} routing="hash" signUpUrl="/signup" fallbackRedirectUrl="/dashboard" /> : <SignUp appearance={appearance} routing="hash" signInUrl="/signin" fallbackRedirectUrl="/dashboard" />}</AuthShell>;
}
