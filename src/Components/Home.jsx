import Navber from "./Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 opacity-95">
        <Navber></Navber>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
