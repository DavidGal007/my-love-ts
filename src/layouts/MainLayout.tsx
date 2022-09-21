import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="fm-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
