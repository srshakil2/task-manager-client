import { useContext } from "react";
import { MainContext } from "../Providers/AuthContext";
import Navber from "./Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Home = () => {
  const { user } = useContext(MainContext);
  console.log(user);
  return (
    <div>
      <div>
        <Navber></Navber>
      </div>
      <div className="min-h-screen -mt-16">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
