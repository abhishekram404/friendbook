export const userReducer = (initialState = { error: {}, data: {} }, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESSFUL":
      return {
        ...initialState,
        error: {},
        data: action.payload,
      };
    case "REGISTER_FAILED":
      return {
        ...initialState,
        data: {},
        error: action.payload,
      };
    case "LOGIN_SUCCESSFUL":
      return {
        ...initialState,
        error: {},
        data: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...initialState,
        data: {},
        error: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
        error: {},
        data: action.payload,
      };
    case "LOGOUT_FAILED":
      return {
        data: {},
        error: action.payload,
      };

    case "LOGGED_IN":
      return {
        data: {
          ...initialState.data,
          isUserLoggedIn: true,
        },
        error: {},
      };
    case "NOT_LOGGED_IN":
      return {
        data: {
          ...initialState.data,
          isUserLoggedIn: false,
        },
        error: {},
      };

    default:
      return initialState;
  }
};
