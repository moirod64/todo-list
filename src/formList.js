import ListGroup from "react-bootstrap/ListGroup";
import FormItem from "./formItem";
import { useContext } from "react";
import { TodosContext } from "./context/useTodoContext";

const FormList = () => {
  const todosList = useContext(TodosContext);
  return (
    <div>
      <ListGroup className="d-flex w-75 mx-auto mt-4">
        {todosList.map((e) => (
          <FormItem {...e} />
        ))}
      </ListGroup>
    </div>
  );
};

export default FormList;
