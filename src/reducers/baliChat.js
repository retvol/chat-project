const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const baliChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_BALI_CHAT":
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
export default baliChat;
