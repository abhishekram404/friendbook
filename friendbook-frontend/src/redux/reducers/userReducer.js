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
        error: { message: "User not logged in." },
      };

    case "CLEAR_GLOBAL_STATE":
      return {
        data: { isUserLoggedIn: false },
        error: {},
      };

    default:
      return initialState;
  }
};

export const userInfoReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "USER_INFO_FETCHED":
      return {
        ...initialState,
        info: action.payload,
        error: {},
      };
    case "USER_INFO_NOT_FETCHED":
      return {
        ...initialState,
        info: {},
        error: action.payload,
      };
    case "CLEAR_GLOBAL_STATE":
      return {
        info: {},
        error: {},
      };
    default:
      return initialState;
  }
};
