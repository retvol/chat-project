import axios from "axios";
// export const setFriends = (friends) => ({
//   type: "SET_FRIENDS",
//   payload: friends,
// });

export const setFriends = () => {
  return (dispatch) => {
    axios.get("http://localhost:3005/friends").then((response) => {
      dispatch({
        type: "SET_FRIENDS",
        payload: response.data,
      });
    });
  };
};
