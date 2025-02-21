import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Providers/AuthContext";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Navber = () => {
  const [serverUser, setServerUser] = useState({});
  const { handelLogOut, user } = useContext(MainContext);

  // console.log(user?.photoURL);
  const handelLogOutUser = () => {
    handelLogOut();
  };

  const linkData = (
    <>
      <li className="text-white text-lg font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-white text-lg font-semibold">
        <NavLink to={""}>Task</NavLink>
      </li>
      <li className="text-white text-lg font-semibold">
        <NavLink to={""}>Add Task</NavLink>
      </li>
    </>
  );

  const userEmail = user?.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/useremail/${userEmail}`)
      .then((res) => {
        setServerUser(res.data);
      })
      .catch(() => {
        // console.log(err);
      });
  }, [userEmail]);
  return (
    <div className="navbar bg-indigo-800 px-10 ">
      {/* Small device */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white mr-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-indigo-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Small device */}
            {linkData}
          </ul>
        </div>
        {/* Logo website */}
        <Link to={"/"}>
          <div className="flex items-center justify-center">
            <img
              className="w-[50px] h-full bg-white rounded-xl"
              src="https://img.icons8.com/?size=160&id=114424&format=png"
              alt=""
            />
          </div>
        </Link>
      </div>
      {/* Larger divice */}
      {/* Larger divice */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {/* Larger divice */}
          {linkData}
        </ul>
      </div>
      {/* Login & LogOut btn */}
      <div className="navbar-end flex items-center gap-5 mr-3">
        {/* user img */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user img"
                defaultChecked
                src={serverUser?.photoUrl || user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={handelLogOutUser} className="md:text-lg">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
