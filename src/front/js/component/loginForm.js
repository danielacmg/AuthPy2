import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  function handleClick(e) {
    e.preventDefault();
    if (actions.createToken(email, password)) {
      // alert("login success");
      resetForm();
    }
  }

  return (
    <div className="dropdown d-flex  text-secondary  m-2">
      {/*dropstart*/}
      <button
        className="btn bg-pink dropdown-toggle me-2 text-white"
        type="button"
        data-bs-toggle="dropdown"
        data-toggle-second="tooltip"
        title="Sign in/Register"
        aria-expanded="false"
      >
        <i className="fa-solid fa-circle-user"></i> Sign in
        {/* <img src="./gear.png" width="30" /> */}
      </button>

      <div className="dropdown-menu dropdown-menu-end">
        {" "}
        <form className="px-4 py-3">
          <div className="form-group pink row mb-2">
            <label htmlFor="user_email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group pink row mb-4">
            <label htmlFor="user_password">Password</label>
            <input
              type="password"
              className="form-control"
              id="user_password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck"
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
              Remember me
            </label>
          </div> */}
          <div className="row mt-2">
            <button
              type="submit"
              className="btn btn-secondary text-white"
              onClick={(e) => handleClick(e)}
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          New around here? <span className="pink">Sign up</span>
        </a>
        <a className="dropdown-item" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
