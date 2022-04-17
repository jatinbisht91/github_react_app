const gitReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_USERS":
      return { ...state, users: action.payload, loading: false };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    case "GET_USER_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
};

export default gitReducer;
