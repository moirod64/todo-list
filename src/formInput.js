import { Form } from "react-bootstrap";
import { useContext } from "react";
// CONTEXT
import { DispatchContext } from "./context/useTodoContext";
// HOOK
import useFormState from "./hooks/useFormState";

const FormInput = ({ id, task, editing, edit }) => {
  // props passed down from formList
  const dispatch = useContext(DispatchContext);

  const [value, handleChange, reset] = useFormState(task);

  return !editing ? (
    <Form
      className="d-flex flex-row w-75 mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "CREATE", task: value });
        reset();
      }}
    >
      <Form.Control
        id="controlIdTodo"
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter Todo"
      ></Form.Control>
    </Form>
  ) : (
    <Form
      className="d-flex flex-row w-75 mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE", id: id, newTask: value });
        edit();
        reset();
      }}
    >
      <Form.Control
        id="controlIdTodo"
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter Todo"
      ></Form.Control>
    </Form>
  );
};

export default FormInput;
