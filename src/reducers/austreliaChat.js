const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const austreliaChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_AUSTRELIA_CHAT":
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
export default austreliaChat;
