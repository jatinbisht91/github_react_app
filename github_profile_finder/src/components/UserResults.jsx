import React, { useContext } from "react";
import GithubContext from "../Context/GithubContext/GithubContextProvider";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-10 container mx-auto" 
      >
        {users.map((user)=>(<UserItem key={user.id} user={user}/>))}  
      </div>
    );
  }
};

export default UserResults;
