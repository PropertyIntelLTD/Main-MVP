import React, { Suspense } from "react";
import Footer from "@/components/Footer";

const Navbar = React.lazy(() => import("@/components/Navbar"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <Navbar />
      </Suspense>
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
