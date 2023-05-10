import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              task: action.newTask,
            }
          : todo,
      );
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      );
    default:
      return state;
  }
};

export default reducer;
