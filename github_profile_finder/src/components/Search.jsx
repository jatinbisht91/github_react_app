import React, { useState, useContext } from "react";
import AlertContext from "../Context/AlertContext/AlertContextProvider";
import GithubContext from "../Context/GithubContext/GithubContextProvider";
import { setUsers } from "../Context/GithubContext/GithubAction";

export default function Search() {
  const [text, setText] = useState("");
  const { setAlert } = useContext(AlertContext);
  const { dispatch, users } = useContext(GithubContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter a value", "error");
    } else {
      dispatch({ type: "SET_LOADING" });

      const users = await setUsers(text);
      dispatch({ type: "SET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className="grid  grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8">
      <div className="mx-5">
        <form onSubmit={handleSubmit}>
          <div className="form-control ">
            <div className="relative ">
              <input
                type="text"
                value={text}
                placeholder="SEARCH USER..."
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="input pr-40 input-lg w-full bg-grey-700 text-black"
                style={{ textAlign: "center" }}
                autoFocus
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 btn btn-lg rounded-1-none"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_USERS" });
            }}
            className="btn btn-ghost btn-lg"
          >
            clear
          </button>
        </div>
      )}
    </div>
  );
}
