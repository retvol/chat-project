const initialState = {
  items: null,
  isReady: false,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        isReady: true,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default profile;
