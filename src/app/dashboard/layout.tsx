import { DashboardProvider } from "@/features/dashboard/dashboard-context";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <DashboardProvider>{children}</DashboardProvider>; }
