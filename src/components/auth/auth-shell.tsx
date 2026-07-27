import Link from "next/link";
import { LockKeyhole, Terminal } from "lucide-react";
import type { ReactNode } from "react";

export function AuthShell({ children, mode }: Readonly<{ children: ReactNode; mode: "signin" | "signup" }>) {
  const title = mode === "signin" ? "Sign in to your workspace" : "Create your workspace";
  return <main className="auth-page"><div className="auth-intro"><span><Terminal size={22} /></span><h1>DevReadme <em>AI</em></h1><p>{title}<br />and document projects in seconds.</p></div><section className="auth-card"><div className="auth-card-header"><h2>{mode === "signin" ? "Welcome back" : "Get started for free"}</h2><p>{mode === "signin" ? "Use your account to continue." : "Create an account to generate your first README."}</p></div>{children}<small><LockKeyhole size={12} /> SECURE END-TO-END AUTHENTICATION</small></section><footer><Link href="/">Privacy</Link><Link href="/">Terms</Link><Link href="/">Security</Link></footer></main>;
}
