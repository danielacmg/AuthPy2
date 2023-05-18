import React from "react";
import imgNotFound from "../../img/error404.jpg";

export const NotFound = () => {
  return (
    <div className="text-center">
      <h3 className="text-center text-secondary mt-3">
        is not Restricted, but lost
      </h3>
      <figure className="text-center col-6 mx-auto">
        <img
          src={imgNotFound}
          alt="Page not found - Lost in space picture"
          width="100%"
        />
        <figcaption>404 Lost in space picture - by freePik</figcaption>
      </figure>
    </div>
  );
};
