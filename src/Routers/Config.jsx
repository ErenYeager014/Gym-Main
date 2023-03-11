import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../Auth";
import DashBoard from "../Pages/DashBoard";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Components/Home";
import Profile from "../Pages/Components/Profile";
import Allmembers from "../Pages/Components/Allmembers";
import Membership from "../Pages/Components/Membership";
import AddMembership from "../Pages/Components/AddMembership";
import EditMemebers from "../Pages/Components/EditMemebers";
const Config = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/allmembers" element={<Allmembers />} />
          <Route path="/dashboard/membership/:id" element={<Membership />} />
          <Route
            path="/dashboard/Addmembership/:id"
            element={<AddMembership />}
          />
          <Route path="/dashboard/EditMember/:id" element={<EditMemebers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Config;
