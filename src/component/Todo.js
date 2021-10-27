import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelTodo,
  editTodo,
  removeTodo,
  toggleTodo,
} from "../sliceReducers/todoSlice";
import { endEdit, startEdit } from "../sliceReducers/editIdSlice";

function Todo(props) {
  const editId = useSelector((state) => state.editId);
  const dispatch = useDispatch();
  const { todo } = props;

  function handleKeyUp(e, todo) {
    if (e.keyCode === 13) {
      if (e.target.value) {
        const newTodo = { ...todo, name: e.target.value };
        dispatch(editTodo(newTodo));
        dispatch(endEdit(null));
      }
    } else if (e.keyCode === 27) {
      dispatch(cancelTodo());
      dispatch(endEdit(null));
    }
  }

  function handleBlur() {
    dispatch(cancelTodo());
    dispatch(endEdit(null));
  }

  return (
    <li
      className={
        todo.isCompleted
          ? "completed"
          : "" || todo.id === editId
          ? "editing"
          : ""
      }
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={todo.isCompleted}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <label onDoubleClick={() => dispatch(startEdit(todo.id))}>
          {todo.name}
        </label>
        <button
          className="destroy"
          type="button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {todo.id === editId && (
        <input
          className="edit"
          type="text"
          defaultValue={todo.name}
          autoFocus
          onKeyUp={(e) => handleKeyUp(e, todo)}
          onBlur={handleBlur}
        />
      )}
    </li>
  );
}

export default Todo;
