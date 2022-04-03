const initialState = {
  user: "",
  logStatus: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNED_IN":
      return {
        ...state,
        logStatus: true,
      };
    case "SIGNED_OUT":
      return {
        ...state,
        logStatus: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
