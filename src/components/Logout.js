import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
};

export default Logout;
