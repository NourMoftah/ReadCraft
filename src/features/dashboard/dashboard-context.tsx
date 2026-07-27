"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ReadmeRecord = { id: string; name: string; repository: string; updatedAt: string; markdown: string; status: "Ready" | "Draft" };
export type RepositoryRecord = { id: string; name: string; fullName: string; language: string; description: string; updatedAt: string; connected: boolean };
export type Preferences = { name: string; email: string; theme: "dark" | "system"; accent: "violet" | "green"; model: "Balanced" | "Fast" | "Detailed"; includeBadges: boolean };
type DashboardContextValue = { readmes: ReadmeRecord[]; repositories: RepositoryRecord[]; preferences: Preferences; saveReadme: (readme: ReadmeRecord) => void; deleteReadme: (id: string) => void; connectRepository: (url: string) => RepositoryRecord | null; updatePreferences: (preferences: Preferences) => void; toast: string | null; notify: (message: string) => void };

const initialRepositories: RepositoryRecord[] = [
  { id: "repo-1", name: "neuro-flux-engine", fullName: "dev-lead/neuro-flux-engine", language: "TypeScript", description: "Low-latency event streaming for distributed systems.", updatedAt: "Updated 2 hours ago", connected: true },
  { id: "repo-2", name: "orbital-ui", fullName: "dev-lead/orbital-ui", language: "React", description: "A compact component system for product teams.", updatedAt: "Updated yesterday", connected: true },
  { id: "repo-3", name: "api-gateway", fullName: "dev-lead/api-gateway", language: "Go", description: "Secure edge routing and request orchestration.", updatedAt: "Updated 4 days ago", connected: true },
];
const defaultPreferences: Preferences = { name: "Dev Lead", email: "devlead@example.com", theme: "dark", accent: "violet", model: "Balanced", includeBadges: true };
const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [readmes, setReadmes] = useState<ReadmeRecord[]>([]);
  const [repositories, setRepositories] = useState(initialRepositories);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("devreadme-state");
    if (!stored) return;
    try { const state = JSON.parse(stored) as { readmes?: ReadmeRecord[]; repositories?: RepositoryRecord[]; preferences?: Preferences }; setReadmes(state.readmes ?? []); setRepositories(state.repositories ?? initialRepositories); setPreferences(state.preferences ?? defaultPreferences); } catch { window.localStorage.removeItem("devreadme-state"); }
  }, []);
  useEffect(() => { window.localStorage.setItem("devreadme-state", JSON.stringify({ readmes, repositories, preferences })); }, [readmes, repositories, preferences]);
  function notify(message: string) { setToast(message); window.setTimeout(() => setToast(null), 3200); }
  function saveReadme(readme: ReadmeRecord) { setReadmes((current) => [readme, ...current.filter((item) => item.id !== readme.id)]); notify("README saved to your history."); }
  function deleteReadme(id: string) { setReadmes((current) => current.filter((item) => item.id !== id)); notify("README deleted."); }
  function connectRepository(url: string) { const match = /github\.com\/([^/]+)\/([^/#?]+)/i.exec(url.trim()); if (!match) return null; const name = match[2].replace(/\.git$/, ""); const repository = { id: `repo-${Date.now()}`, name, fullName: `${match[1]}/${name}`, language: "Unknown", description: "Connected repository ready for documentation.", updatedAt: "Connected just now", connected: true }; setRepositories((current) => [repository, ...current]); notify(`${name} connected.`); return repository; }
  const value = { readmes, repositories, preferences, saveReadme, deleteReadme, connectRepository, updatePreferences: setPreferences, toast, notify };
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
export function useDashboard() { const context = useContext(DashboardContext); if (!context) throw new Error("useDashboard must be used inside DashboardProvider"); return context; }
