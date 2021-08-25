import axios from "axios";
import history from "../../history";
export const send_register_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/register", formData);

      const { error, response } = await data;

      if (Object.keys(error).length != 0) {
        dispatch(register_failed(error));
        return;
      }

      dispatch(register_successful(response));
      history.push("/");
      return;
    } catch (err) {
      console.log(err.response.data?.error);
      dispatch(register_failed(err?.response?.data?.error));
    }
  };
};

const register_successful = (data) => {
  return {
    type: "REGISTER_SUCCESSFUL",
    payload: data,
  };
};

const register_failed = (error) => {
  return {
    type: "REGISTER_FAILED",
    payload: error,
  };
};

export const send_login_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/login", formData);
      const { error, response } = await data;

      if (Object.keys(error).length != 0) {
        dispatch(login_failed(error));
        return;
      }

      dispatch(login_successful(response));

      history.push("/");
    } catch (err) {
      console.log(err.response.data?.error);
      dispatch(login_failed(err?.response?.data?.error));
    }
  };
};

const login_successful = (data) => {
  return {
    type: "LOGIN_SUCCESSFUL",
    payload: data,
  };
};

const login_failed = (error) => {
  return {
    type: "LOGIN_FAILED",
    payload: error,
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post("/user/logout");
      let { error, response } = data;
      if (Object.keys(error).length !== 0) {
        dispatch({
          type: "LOGOUT_FAILED",
          payload: error,
        });
        return;
      }

      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: response,
      });
      history.push("/login");
    } catch (err) {
      dispatch({
        type: "LOGOUT_FAILED",
        payload: err?.response?.data?.error,
      });
    }
  };
};
