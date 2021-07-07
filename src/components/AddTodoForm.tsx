import { useRef } from "react";
import Todo from "../models/todo";
import { v4 } from "uuid";

type Props = {
  addTodo: (todo: Todo) => void;
};

function AddTodoForm({ addTodo }: Props) {
  const textInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();

    // we can be sure that .current will not be null at this point, so we can use '!'
    const text = textInputRef.current!.value;

    if (text.trim().length === 0) return;

    // add the new todo to the todos array
    const newTodo = { id: v4(), text };
    addTodo(newTodo);

    // reset the form
    textInputRef.current!.value = "";
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-container">
        <label className="form__label" htmlFor="text">
          Text
        </label>
        <input
          className="form__input"
          type="text"
          id="text"
          ref={textInputRef}
        />
      </div>
      <button className="btn" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
