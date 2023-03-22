import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [logedin, setLogedin] = useState(false);

  const auth = getAuth

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user)
      setCurrentUser = user
      setLogedin = true
    } else {
      setLogedin = false
    }
  });

  const final = [logedin, currentUser]

  return(
    final
  )
};