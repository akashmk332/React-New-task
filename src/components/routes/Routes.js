import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Table from "../table/Table";
import Registration from "../registration/Registration";
import ForgotPassword from "../login/ForgotPassword";
import Customer from "../customer/Customers";
const appRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/table" element={<Table />}></Route>
      <Route path="/customer" element={<Customer />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />}>
        {" "}
      </Route>
    </Routes>
  );
};

export default appRoutes;
