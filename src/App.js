import "./App.css";
import { ContextProvider } from "./context/useTodoContext";
import FormInput from "./formInput";
import FormList from "./formList";

function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center display-6">TODO LIST</h1>
      <ContextProvider>
        <FormInput />
        <FormList />
      </ContextProvider>
    </>
  );
}

export default App;
