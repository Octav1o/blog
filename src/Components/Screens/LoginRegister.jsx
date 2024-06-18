import React, { useState, useEffect } from "react";
import "../styles/LoginRegister.css";
import { CiMail, CiUser, CiLock } from "react-icons/ci";
import { Login } from "../../api_consume/login";
import { Register } from "../../api_consume/register";
import { useNavigate } from "react-router-dom";

export const LoginRegister = () => {
  const [action, setAction] = useState("");

  const [mail, setMail] = useState([]);
  const [password, setPassword] = useState([]);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!mail || !password) {
      alert();
      return;
    }

    try {
      const token = await Login(mail, password);
      // console.log(token);
      if (token.accessToken) {
        localStorage.setItem("accessToken", token.accessToken);
        navigate("/HomePage");
      } else {
        console.log("Accesstoken not found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!name || !lastname || !registerMail || !registerPassword) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const data = await Register(
        name,
        lastname,
        registerMail,
        registerPassword
      );
      console.log("User registered successfully:", data);
      alert("User registered successfully");
      setAction(""); // Switch back to login view after successful registration
    } catch (err) {
      console.error("Error registering user:", err);
      alert("Error registering user");
    }
  };

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className="general-wrapper">
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="mail"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <CiMail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CiLock className="icon" />
            </div>

            <div className="remeber-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit"> Login </button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegister} action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CiUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <CiUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="mail"
                required
                value={registerMail}
                onChange={(e) => setRegisterMail(e.target.value)}
              />
              <CiMail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                required
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <CiLock className="icon" />
            </div>

            <div className="remeber-forgot">
              <label>
                <input type="checkbox" />I agree to terms & conditions
              </label>
            </div>
            <button type="submit"> Register </button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
