import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import PropTypes from "prop-types";
import auth from "./firebase.cofig";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current value of the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUsers, signInUser, logOut, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    // <div>{children}</div>
  );
};

export default AuthProvider;

// AuthProvider.PropTypes = {
//   childern: PropTypes.node,
// };

/*
 * 1.create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in0 the middle of the Provider.
 *
 *
 * If I simplified it then it will be three step:
 *  1. Create Context.
 *  2. Wrap child with the context using provider
 *  3. State access useContext Hook..
 */
