import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Restricted = () => {
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
    <div className="text-secondary text-center mt-5 ">
      <h3>This content is restricted </h3>
      <p>
        <button
          className="btn btn-danger collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span>Do not open</span>
          <b>Please close</b>
        </button>
      </p>
      <div className="collapse align-items-center " id="collapseExample">
        <div
          className="card card-body"
          style={{ maxWidth: 500, margin: "auto" }}
        >
          <b>This should be restricted 🫣</b>
          {/* <i className="fa-solid fa-face-hand-peeking"></i> */}
          <img
            src="https://i.gifer.com/7CRL.gif"
            className="img-thumbnail center"
            alt="...no comments"
            style={{ maxWidth: 500 }}
          ></img>
        </div>
      </div>
    </div>
  );
};
