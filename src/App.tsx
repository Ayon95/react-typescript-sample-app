import Todos from "./components/Todos";
import Todo from "./models/todo";
import AddTodoForm from "./components/AddTodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn TypeScript" },
  ]);

  function addTodo(newTodo: Todo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleClickDelete(id: string | number) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (!shouldDelete) return;
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1 className="app-title">Learning TypeScript With React</h1>
      <AddTodoForm addTodo={addTodo} />
      <Todos todos={todos} handleClickDelete={handleClickDelete} />
    </div>
  );
}

export default App;
