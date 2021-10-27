import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleAll } from "../sliceReducers/todoSlice";
import "./Header.scss";

function Header() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleAddTodo() {
    if (input) {
      let newId = todos.length;
      while (todos.some((todo) => todo.id === newId)) {
        newId++;
      }
      dispatch(
        addTodo({
          id: newId,
          name: input,
          isCompleted: false,
        })
      );
      setInput("");
    }
  }

  return (
    <div className="header">
      <h1>todoList</h1>
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        checked={todos.every((todo) => todo.isCompleted === true)}
        onChange={({ target }) => dispatch(toggleAll(target.checked))}
      />
      <label htmlFor="toggle-all">
        <FontAwesomeIcon icon={faChevronDown} />
      </label>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={input}
        onChange={handleChange}
        onKeyUp={(event) => event.keyCode === 13 && handleAddTodo()}
      />
      <button type="button" className="btn" onClick={handleAddTodo}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Header;
