import Todo from "../models/todo";
import { FaTrashAlt } from "react-icons/fa";

type Props = { todo: Todo; handleClickDelete: (id: string | number) => void };

function TodoItem({ todo, handleClickDelete }: Props) {
  return (
    <li className="todos__todo">
      <p>{todo.text}</p>
      <FaTrashAlt
        className="todos__icon todos__icon--delete"
        title="Delete"
        onClick={() => handleClickDelete(todo.id)}
      />
    </li>
  );
}

export default TodoItem;
