import axios from "axios";
import history from "../../history";
export const send_register_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/register", formData);

      const { error, response, isUserLoggedIn } = await data;

      if (Object.keys(error).length != 0) {
        dispatch(register_failed(isUserLoggedIn, error));
        return;
      }

      dispatch(register_successful(isUserLoggedIn, response.info));
      history.push("/");
      return;
    } catch (err) {
      dispatch(
        register_failed(
          err.response.data?.isUserLoggedIn,
          err?.response?.data?.error
        )
      );
    }
  };
};

const register_successful = (isUserLoggedIn, info) => {
  return {
    type: "REGISTER_SUCCESSFUL",
    isUserLoggedIn,
    payload: info,
  };
};

const register_failed = (isUserLoggedIn, error) => {
  return {
    type: "REGISTER_FAILED",
    payload: error,
    isUserLoggedIn,
  };
};

export const send_login_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/login", formData);
      const { error, response, isUserLoggedIn } = await data;

      if (Object.keys(error).length != 0) {
        dispatch(login_failed(isUserLoggedIn, error));
        return;
      }

      dispatch(login_successful(isUserLoggedIn, response.info));
      history.push("/");
    } catch (err) {
      dispatch(
        login_failed(
          err.response.data?.isUserLoggedIn,
          err?.response?.data?.error
        )
      );
    }
  };
};

const login_successful = (isUserLoggedIn, info) => {
  return {
    type: "LOGIN_SUCCESSFUL",
    isUserLoggedIn,
    payload: info,
  };
};

const login_failed = (isUserLoggedIn, error) => {
  return {
    type: "LOGIN_FAILED",
    payload: error,
    isUserLoggedIn,
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post("/user/logout");
      let { error, response, isUserLoggedIn } = data;
      if (Object.keys(error).length !== 0) {
        dispatch({
          type: "LOGOUT_FAILED",
          payload: error,
          isUserLoggedIn,
        });
        return;
      }

      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: response,
        isUserLoggedIn,
      });

      dispatch({
        type: "CLEAR_GLOBAL_STATE",
      });

      history.push("/login");
    } catch (err) {
      dispatch({
        type: "LOGOUT_FAILED",
        payload: err?.response?.data?.error,
        isUserLoggedIn: err?.response?.data?.isUserLoggedIn,
      });
    }
  };
};

// export const check_is_logged_in = () => {
//   return async (dispatch) => {
//     try {
//       // const isUserLoggedIn = await Cookies.get("isUserLoggedIn");
//       const { data } = await axios.get("/user/");
//       const { isUserLoggedIn, info } = await data.response;

//       console.log("inside is_logged_in");

//       if (isUserLoggedIn) {
//         dispatch(user_logged_in(data.response));
//         return;
//       }
//       dispatch(user_not_logged_in(data.error));
//     } catch (err) {
//       dispatch(user_not_logged_in(err?.response?.data?.error));
//     }
//   };
// };

// const user_logged_in = () => {
//   return {
//     type: "LOGGED_IN",
//     payload: {
//       isUserLoggedIn: true,
//     },
//   };
// };

// const user_not_logged_in = () => {
//   return {
//     type: "NOT_LOGGED_IN",
//     payload: {
//       isUserLoggedIn: false,
//     },
//   };
// };

export const fetch_user_info = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/user/");
      const { error, response, isUserLoggedIn } = await data;

      if (Object.keys(error).length) {
        dispatch(user_info_not_fetched(isUserLoggedIn, error));
        return;
      }
      dispatch(user_info_fetched(isUserLoggedIn, response.info));
    } catch (err) {
      dispatch(
        user_info_not_fetched(
          err?.response?.data?.isUserLoggedIn,
          err?.response?.data?.error
        )
      );
    }
  };
};

const user_info_fetched = (isUserLoggedIn, info) => {
  return {
    type: "USER_INFO_FETCHED",
    payload: info,
    isUserLoggedIn: isUserLoggedIn,
  };
};

const user_info_not_fetched = (isUserLoggedIn, error) => {
  return {
    type: "USER_INFO_NOT_FETCHED",
    payload: error,
    isUserLoggedIn: isUserLoggedIn,
  };
};
