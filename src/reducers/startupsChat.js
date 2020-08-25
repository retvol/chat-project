const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const startupsChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_STARTUPS_CHAT":
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
export default startupsChat;
