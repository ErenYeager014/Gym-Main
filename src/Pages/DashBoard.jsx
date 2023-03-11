import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./Components/MainNav";
import SideBar from "./Components/SideBar";

const DashBoard = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50">
        <SideBar />
        <div className="p-4 xl:ml-80">
          <MainNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
