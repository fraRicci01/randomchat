import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./css/form.css"

const SignIn = () => {
  const [err, setErr] = useState(false);
  const [pasErr, setPasErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const repeatPassword = e.target[2].value;

    console.log(e.target[0].value)

    try {
      //Create user
      if (repeatPassword === password){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            console.log(error)
            setErr(true);
        });
      }
      else {
        setPasErr(true);
      }

      //Create a unique image name
      /*const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //error cach
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });*/
      navigate("/")
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="container-form">
      <h2 className="title">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input required class="form-control" type="email" placeholder="email" />
        <label for="exampleInputEmail1" class="form-label">Password</label>
        <input required class="form-control" type="password" placeholder="password" />
        <label for="exampleInputEmail1" class="form-label">Repeat Password</label>
        <input required class="form-control" type="password" placeholder="password" />
        {pasErr && <span class="error">le password non combaciano</span>}
        <button type="submit" class="btn btn-primary" disabled={loading}>Sign up</button>
        {err && <span class="error">Something went wrong</span>}
      </form>
      <p>
        You do have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignIn;