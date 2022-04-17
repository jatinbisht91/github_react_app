import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-10">
      <img
        src={spinner}
        width={180}
        alt="spinner"
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
