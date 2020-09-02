import axios from "axios";

export const setAccount = () => {
  return (dispatch) => {
    axios.get("http://localhost:3006/account").then((response) => {
      dispatch({
        type: "SET_ACCOUNT",
        payload: response.data,
      });
    });
  };
};
