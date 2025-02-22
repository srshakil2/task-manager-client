import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="relative">
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
      <div className="h-screen bg-black">
        <img
          className="h-full w-full object-cover opacity-70"
          src="https://i.ibb.co.com/39WmBBvJ/eden-constantino-i-Jg1-Yzs-Efqo-unsplash.jpg"
          alt="banner task"
        />
      </div>
      <h1 className="absolute text-5xl font-bold md:top-1/4 top-20 text-white left-16">
        Our task management <br /> system add quickly
      </h1>
      <div className="absolute md:top-1/2 top-72 left-16">
        <Link
          to={"/addtask"}
          className="btn text-3xl font-bold text-white bg-purple-800 hover:bg-purple-900 p-6"
        >
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
