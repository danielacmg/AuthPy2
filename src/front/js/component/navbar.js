import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { LoginForm } from "./loginForm";
import { LogOut } from "./logOut";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = store.token;

  return (
    <nav className="navbar navbar-expand-lg bg-secondary d-flex">
      <div className="container-fluid">
        <div className="mr-auto p-2 pink-brand">
          <Link to={"/"} className="navbar-brand pink-brand">
            JWT Authentication
          </Link>
        </div>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {token && token !== "" && token !== undefined ? (
              <div className="collapse navbar-collapse">
                <Link to={"/restricted"}>
                  <button className="btn btn-danger m-2" type="button">
                    {/* <i className="fa-solid fa-do-not-enter text-white"></i>
                    <i className="fa-regular fa-do-not-enter"></i> */}
                    <i className="fa-solid fa-ban m-1"></i> Restricted
                  </button>
                </Link>

                <LogOut />
              </div>
            ) : (
              <LoginForm />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
