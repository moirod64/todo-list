import { useContext } from "react";
// CONTEXT
import { DispatchContext } from "./context/useTodoContext";
// COMPONENTS
import ItemEdit from "./formItemEdit";
import ItemDelete from "./formItemDelete";
// BOOTSTRAP
import { ListGroup } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
//HOOKS
import useToggleState from "./hooks/useToggleState";
import FormInput from "./formInput";

const FormItem = ({ id, task, completed }) => {
  // props passed down from formList
  // USING CONTEXT TO DISPLAY TASKS
  const dispatch = useContext(DispatchContext);

  const [editing, setEditing] = useToggleState();

  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <FormCheckInput
          className="justify-content-start"
          checked={completed}
          onClick={() => dispatch({ type: "COMPLETE", id: id })}
        />
        {!editing ? (
          <span
            className="justify-content-center"
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </span>
        ) : (
          <FormInput id={id} task={task} editing={editing} edit={setEditing} />
        )}
        <span className="d-flex justify-content-end">
          <ItemEdit edit={setEditing} />
          <ItemDelete id={id} />
        </span>
      </ListGroup.Item>
    </>
  );
};

export default FormItem;
