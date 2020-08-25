const TASKS = [{ id: 1, text: "ddddd", isCompleted: false }];

const task = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case "ADD_TASK":
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
export default task;
