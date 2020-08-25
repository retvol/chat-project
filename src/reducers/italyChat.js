const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const italyChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_ITALY_CHAT":
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
export default italyChat;
