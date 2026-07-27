"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Braces, FileText, FolderKanban, Grid2X2, LogOut, Search, Settings, Sparkles, UserRound } from "lucide-react";
import { type ReactNode } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/features/dashboard/dashboard-context";

const navigation = [{ label: "Overview", href: "/dashboard", icon: Grid2X2 }, { label: "Generator", href: "/dashboard/generate", icon: Sparkles }, { label: "My READMEs", href: "/dashboard/readmes", icon: FileText }, { label: "Repositories", href: "/dashboard/repositories", icon: FolderKanban }, { label: "Settings", href: "/dashboard/settings", icon: Settings }];
export function DashboardShell({ children, title }: Readonly<{ children: ReactNode; title: string }>) {
  const pathname = usePathname(); const router = useRouter(); const { preferences, toast, notify } = useDashboard(); const { signOut } = useClerk(); const { user } = useUser();
  const displayName = user?.fullName || user?.primaryEmailAddress?.emailAddress || preferences.name;
  return <main className="dashboard-shell"><aside className="dashboard-sidebar"><Link className="dashboard-brand" href="/"><span className="dashboard-brand-mark"><Braces size={16} /></span><span>DevReadme AI</span></Link><nav className="dashboard-nav" aria-label="Dashboard navigation">{navigation.map(({ label, href, icon: Icon }) => <Link className={pathname === href ? "dashboard-nav-item dashboard-nav-item--active" : "dashboard-nav-item"} href={href} key={href}><Icon />{label}</Link>)}</nav><button aria-label="Sign out" className="dashboard-account" onClick={() => void signOut(() => router.replace("/"))}><span className="account-icon"><UserRound size={24} /></span><div><strong>{displayName}</strong><small>PRO ACCOUNT</small></div><LogOut size={20} /></button></aside><div className="dashboard-workspace"><header className="dashboard-topbar"><div className="dashboard-crumb"><button aria-label="Search" className="topbar-search" onClick={() => notify("Search is available on READMEs and Repositories.")}><Search size={20} /></button><span>Dashboard / <strong>{title}</strong></span></div><div className="topbar-actions"><button className="icon-button" aria-label="Notifications" onClick={() => notify("You’re all caught up.")}><Bell size={20} /></button><Button className="new-project" onClick={() => router.push("/dashboard/generate")}>NEW PROJECT</Button></div></header>{children}</div>{toast && <div className="toast" role="status">{toast}</div>}</main>;
}
