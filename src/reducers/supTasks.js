const TASKS = [{ id: 1, text: "aaaaa", isCompleted: false }];

const SupTasks = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "SUP_TASK":
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
export default SupTasks;
