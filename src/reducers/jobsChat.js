const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const jobsChat = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_JOBS_CHAT":
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
export default jobsChat;
