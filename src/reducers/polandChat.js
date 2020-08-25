const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const polandChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_POLAND_CHAT":
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
export default polandChat;
