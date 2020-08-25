const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const marketingChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_MARKETING_CHAT":
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
export default marketingChat;
