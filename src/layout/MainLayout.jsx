// src/layout/MainLayout.jsx
import { Outlet } from "react-router";
import { ReactLenis } from "lenis/react";
import Navbar from "../components/Navbar";
import CursorSpotlight from "../components/CursorSpotlight";
import CustomScrollbar from "../components/CustomScrollbar";

const MainLayout = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden">
        {/* Custom Animated Right Scrollbar */}
        <CustomScrollbar />

        {/* Global Cursor Spotlight */}
        <CursorSpotlight />

        {/* Floating Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 w-full">
          <Outlet />
        </main>
      </div>
    </ReactLenis>
  );
};

export default MainLayout;
