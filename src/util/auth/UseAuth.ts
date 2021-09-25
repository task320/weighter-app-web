import React, { useState, useEffect, useContext, createContext } from "react";

// Provider hook that creates auth object and handles state
export default function UseAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    /*
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
    */
  };
  const signup = (email: string, password: string) => {
    /*
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
    */
  };
  const signout = () => {
    /*
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
    */
  };
  const sendPasswordResetEmail = (email: string) => {
    /*
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
    */
  };
  const confirmPasswordReset = (code: string, password: string) => {
    /*
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
    */
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    /*
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
    */
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}