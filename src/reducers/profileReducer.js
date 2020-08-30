const initialState = {
  items: null,
  isReady: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FRIENDS":
      return {
        isReady: true,
        items: action.payload,
      };


    default:
      return state;
  }
};
export default profileReducer;
