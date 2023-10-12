import Navigation from "@/components/Navigation";
import { SidebarProvider } from "../context/sidebar-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SidebarProvider>
          <Navigation />
          <main className="flex-grow p-4">{children}</main>
        </SidebarProvider>
      </div>
    </div>
  );
}
