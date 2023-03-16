import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    auth?.currentUser?.displayName
  );

  const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setCurrentUser(result.user.displayName);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signWithGithub = (navigate) => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setCurrentUser(result.user.displayName);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    auth.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) =>
      setCurrentUser(currentUser?.displayName)
    );
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    signUpProvider,
    logOut,
    signWithGithub,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
