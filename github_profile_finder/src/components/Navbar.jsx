import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto ">
        <div className="px-3 flex-none ">
          <FaGithub className="inline pr-3 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="px-3 mx-3 flex-1">
          <div className="flex justify-end">
            <Link to="/about" className=" btn btn-ghost btn-sm rounded-btn ">
              About
            </Link>
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "GITHUB FINDER",
};

Navbar.propTypes={
    title:PropTypes.string,
}

export default Navbar;