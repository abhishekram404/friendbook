import axios from "axios";

export const fetch_user_info = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/user/");
      const { error, response } = await data;

      if (Object.keys(error).length) {
        dispatch(user_info_not_fetched(error));
        return;
      }
      const { userInfo } = await response;
      dispatch(user_info_fetched(userInfo));
    } catch (err) {
      dispatch(user_info_not_fetched(err?.response));
    }
  };
};

const user_info_fetched = (info) => {
  return {
    type: "USER_INFO_FETCHED",
    payload: info,
  };
};

const user_info_not_fetched = (error) => {
  return {
    type: "USER_INFO_NOT_FETCHED",
    payload: error,
  };
};
