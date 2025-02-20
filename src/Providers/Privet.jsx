/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "./AuthContext";

const Privet = ({ children }) => {
  const { user, loding } = useContext(MainContext);
  if (loding) {
    return (
      <div className="text-2xl text-red-300 text-center mt-20">Loading...</div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default Privet;
