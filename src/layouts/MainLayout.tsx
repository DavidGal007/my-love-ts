import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";

const MainLayout: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <div className="fm-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
