import React, { useContext } from "react";
import AlertContext from "../Context/AlertContext/AlertContextProvider";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <div
      style={{ visibility: alert ? "visible" : "hidden" }}
      className="mb-8 ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
    >
     <strong className="alert alert-error"> {alert?.msg}</strong>
    </div>
  );
}

export default Alert;
