const initialState = {
  account: null,
  isReady: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        isReady: true,
        account: action.payload,
      };

    default:
      return state;
  }
};
export default accountReducer;
