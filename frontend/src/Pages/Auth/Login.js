import React from "react";

import { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { create0update } from "../../Function/auth";

import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import "./auth.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const rolebasedRedirect = (res) => {
    if (res.data.role === "admin") {
      history.push("/admin/dashboard");
    } else {
      history.push("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      create0update(idTokenResult.token)
        .then(
          (res) => (
            rolebasedRedirect(res),
            dispatch({
              type: "LOGIN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            })
          )
        )
        .catch((err) => console.log("ERROR", err));

      // history.push('/')
    } catch (error) {
      setloading(false);
      toast.error(error.message);
    }
  };

  const googleSubmit = async () => {
    auth.signInWithPopup(googleProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      create0update(idTokenResult.token)
        .then(
          (res) => (
            dispatch({
              type: "LOGIN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            }),
            rolebasedRedirect(res)
          )
        )
        .catch((err) => console.log("ERROR", err));

      // history.push('/')
    });
  };

  const LoginForm = () => (
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

      <input
        type="password"
        value={password}
        placeholder="Your password"
        onChange={(e) => setpassword(e.target.value)}
        className="form-control"
      />
      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        icon={<MailOutlined />}
        block
        shape="round"
        size="large"
        disabled={!email || password.length < 6}
        className="mb-3"
      >
        Login with Email/Password
      </Button>

      <Button
        onClick={googleSubmit}
        type="danger"
        icon={<GoogleOutlined />}
        block
        shape="round"
        size="large"
      >
        Login with Google
      </Button>

      <Link className="float-right text-danger mt-3" to="/forgot/password">
        Forgot password
      </Link>
    </form>
  );

  return (
    <div className="container p-5">
      <div>
        {loading ? (
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        ) : (
          <h2 id="auth-head">Login Page</h2>
        )}
        <div id="auth-form">
          <div className>
            <img
            height="400px"
              src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
              alt="login page"
            />
          </div>
          <div>{LoginForm()}</div>
        </div>
      </div>
    </div>
  );
}

export default Login;