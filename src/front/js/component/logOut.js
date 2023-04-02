import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const LogOut = () => {
  return (
    <div className="dropdown d-flex  text-secondary  ">
      <button
        className="btn bg-pink dropdown-toggle me-2 text-white"
        type="button"
        data-bs-toggle="dropdown"
        data-toggle-second="tooltip"
        title="Log out"
        aria-expanded="false"
      >
        <i className="fa-solid fa-circle-user"></i> Log out
      </button>

      <div className="dropdown-menu dropdown-menu-end">
        {" "}
        <form className="px-4 py-3">
          <div className="form-group pink row mb-2">
            <label htmlFor="user_email">
              Are you sure you want to log out?
            </label>
          </div>

          <div className="row mt-2">
            <button type="submit" className="btn bg-pink text-white">
              Yes
            </button>
            <button type="submit" className="btn btn-secondary text-white">
              No
            </button>
          </div>
        </form>
        <div className="dropdown-divider"></div>
      </div>
    </div>
  );
};
