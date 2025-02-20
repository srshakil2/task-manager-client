import { useContext } from "react";
import { MainContext } from "../Providers/AuthContext";

const Home = () => {
  const { name } = useContext(MainContext);
  return (
    <div>
      <p className="textarea-md font-semibold text-sky-900">
        this is Home {name}
      </p>
    </div>
  );
};

export default Home;
