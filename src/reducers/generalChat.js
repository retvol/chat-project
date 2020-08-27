const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const generalChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_GENERAL_CHAT":
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
export default generalChat;
