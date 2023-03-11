import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Components/NavBar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const Auth = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="container relative z-40 mx-auto p-4">
          <NavBar />
        </div>
        {/* <Login /> */}
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
