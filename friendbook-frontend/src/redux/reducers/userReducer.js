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

    default:
      return initialState;
  }
};
