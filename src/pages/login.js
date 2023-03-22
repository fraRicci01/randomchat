import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./css/form.css"

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div class="container">
      <div class="container-form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input class="form-control" type="emial" placeholder="Email" aria-label="default input example" />
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input class="form-control" type="password" placeholder="Password" aria-label="default input example" />
          <button type="button" class="btn btn-primary">Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <br/><Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Login;