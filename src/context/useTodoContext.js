import { createContext } from "react";
import { todos } from "../assets/todos";
import reducer from "../reducers/useTodoReducer";
import useLocalStorage from "../reducers/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const ContextProvider = (props) => {
  const [todosList, dispatch] = useLocalStorage("todos", todos, reducer);

  return (
    <TodosContext.Provider value={todosList}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
