import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const LogOut = () => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    actions.removeToken();
  }
  function doNothing(e) {
    e.preventDefault();
  }
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
          <div className="form-group text-secondary row mb-2">
            <label htmlFor="user_email">
              Are you sure you want to log out?
            </label>
          </div>

          <div className="btn-toolbar mb-3" role="toolbar">
            <div className="btn-group mr-2" role="group">
              <button
                type="submit"
                className="btn bg-pink text-white"
                onClick={(e) => handleClick(e)}
              >
                Yes
              </button>
            </div>
            <div className="btn-group mr-2" role="group">
              {" "}
            </div>
            <div className="btn-group mr-2" role="group">
              <button
                className="btn btn-secondary text-white"
                onClick={(e) => doNothing(e)}
              >
                No
              </button>
            </div>
          </div>
        </form>
        {/* <div className="dropdown-divider"></div> */}
      </div>
    </div>
  );
};
