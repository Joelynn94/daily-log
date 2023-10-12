"use client";

import React from "react";

const SidebarContext = React.createContext<{
  isOpen: boolean;
  mainContentClasses: string;
  toggleSidebar: () => void;
}>({
  isOpen: false,
  mainContentClasses: "p-4 h-auto pt-20",
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const mainContentClasses = isOpen
    ? "p-4 ml-64 h-auto pt-20"
    : "p-4 h-auto pt-20";

  const contextValue = {
    isOpen,
    mainContentClasses,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
