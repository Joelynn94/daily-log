"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSidebar } from "@/app/context/sidebar-context";

export default function Navigation() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
