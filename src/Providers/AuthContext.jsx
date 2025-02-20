import { createContext } from "react";

export const MainContext = createContext();
const Authcontext = ({ children }) => {
  const data = {
    name: "Robiul",
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default Authcontext;
