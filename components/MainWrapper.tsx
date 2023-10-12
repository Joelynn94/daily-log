"use client";
import { useSidebar } from "@/app/context/sidebar-context";

type Props = {
  children: React.ReactNode;
};

export default function MainWrapper({ children }: Props) {
  const { mainContentClasses } = useSidebar();

  return <div className={mainContentClasses}>{children}</div>;
}
