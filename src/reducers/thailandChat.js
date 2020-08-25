const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const thailandChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_THAILAND_CHAT":
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];

    default:
      return state;
  }
};
export default thailandChat;
