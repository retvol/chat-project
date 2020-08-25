const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const freelanceChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_FREELANCE_CHAT":
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
export default freelanceChat;
