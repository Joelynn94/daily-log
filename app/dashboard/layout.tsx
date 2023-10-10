import Link from "next/link";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
