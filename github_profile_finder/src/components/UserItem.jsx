import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side">
      <div className="flex-row flex">
        <div className="avatar">
          <div className="rounded-full  shadow w-20 h-20">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div className="p-4 flex flex-col ">
          <h1 className="card-title">{login}</h1>
          <Link to={`/users/${login}`} className="text-base-content text-opacity-40">Visit Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
