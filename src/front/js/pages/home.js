import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let user_name = store.user;

  return (
    <div className="text-center mt-5">
      <h1 className="pink">
        Hello!! <small className="text-muted">{user_name}</small>
      </h1>
      <p>{/* <img src={rigoImageUrl} /> */}</p>
      <div className="alert alert-secondary">
        {store.message || "Loading message..."}
      </div>
    </div>
  );
};
