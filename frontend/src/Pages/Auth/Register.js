import React from "react";

import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./auth.css";

function Register() {
  const [email, setemail] = useState("");

  const history = useHistory();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const config = {
      url: "https://mbm-backends.herokuapp.com/register/complate",
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is send to ${email}. Click on the link to complate your registation`
    );

    window.localStorage.setItem("emailForRegister", email);
    setemail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Your email"
        autoFocus
        onChange={(e) => setemail(e.target.value)}
        className="form-control"
      />
      <br />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div>
        <h2 id="auth-head">Register</h2>
        <div id="auth-form">
          <div>
            <img
              src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
              alt="register page"
              style={{ height: "70vh",  width: "70vh" }}
            />
          </div>
          {registerForm()}
        </div>
      </div>
    </div>
  );
}

export default Register;