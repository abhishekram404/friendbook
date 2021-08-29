export const userReducer = (
  initialState = { isUserLoggedIn: false, error: {}, info: {} },
  action
) => {
  switch (action.type) {
    case "REGISTER_SUCCESSFUL":
      return {
        ...initialState,
        error: {},
        info: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    case "REGISTER_FAILED":
      return {
        ...initialState,
        info: {},
        error: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    case "LOGIN_SUCCESSFUL":
      return {
        ...initialState,
        error: {},
        info: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    case "LOGIN_FAILED":
      return {
        ...initialState,
        info: {},
        error: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
        error: {},
        info: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    case "LOGOUT_FAILED":
      return {
        info: {},
        error: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
      };

    case "LOGGED_IN":
      return {
        info: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
        error: {},
      };
    case "NOT_LOGGED_IN":
      return {
        info: action.payload,
        isUserLoggedIn: action.isUserLoggedIn,
        error: { message: "User not logged in." },
      };

    case "USER_INFO_FETCHED":
      return {
        isUserLoggedIn: action.isUserLoggedIn,
        info: action.payload,
        error: {},
      };
    case "USER_INFO_NOT_FETCHED":
      return {
        ...initialState,
        isUserLoggedIn: action.isUserLoggedIn,
        info: {},
        error: action.payload,
      };

    case "CLEAR_GLOBAL_STATE":
      return {
        info: {},
        isUserLoggedIn: false,
        error: {},
      };

    default:
      return initialState;
  }
};
