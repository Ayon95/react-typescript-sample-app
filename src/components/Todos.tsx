import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  handleClickDelete: (id: string | number) => void;
};

function Todos({ todos, handleClickDelete }: Props) {
  return (
    <section className="todos">
      <h2 className="todos__title">Todos</h2>
      <ul className="todos__list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default Todos;
