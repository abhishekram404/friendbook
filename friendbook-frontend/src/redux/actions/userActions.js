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
