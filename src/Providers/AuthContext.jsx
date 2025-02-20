import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const MainContext = createContext();
const Authcontext = ({ children }) => {
  //   TODU:
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  // log in func
  const handelLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google log in
  const provider = new GoogleAuthProvider();
  const handelGoogleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };
  //   handel sing up
  const handelSingUp = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   handel log out
  const handelLogOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  // on Auth state change user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (courenUser) => {
      if (courenUser) {
        // console.log(courenUser);
        setUser(courenUser);
      }
      setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  //   TODU:

  const data = {
    name: "Robiul",
    user,
    setUser,
    loding,
    setLoding,
    handelSingUp,
    handelLogin,
    handelGoogleLogin,
    handelLogOut,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default Authcontext;
