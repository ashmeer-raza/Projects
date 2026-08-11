// src/layout/MainLayout.js
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Added pt-24 or pt-28 to clear the fixed navbar */}
      <main className="pt-24"> 
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;