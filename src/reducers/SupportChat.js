const TASKS = [{ id: 1, text: "aaaaa", isCompleted: false }];

const SupportChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_SUPPORT_CHAT":
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
export default SupportChat;
