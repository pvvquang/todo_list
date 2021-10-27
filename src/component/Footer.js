import { useDispatch, useSelector } from "react-redux";
import { filters, setFilter } from "../sliceReducers/filterSlice";
import { clearTodoCompleted } from "../sliceReducers/todoSlice";
import "./Footer.scss";

function Footer(props) {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const listFilters = Object.keys(filters);

  if (todos.length <= 0) return null;
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>
          {todos.filter((todo) => todo.isCompleted === false).length}
        </strong>{" "}
        item left
      </span>
      <ul className="filters">
        {listFilters.map((item, index) => (
          <li key={index}>
            <a
              className={item === filter ? "selected" : ""}
              href="#/"
              onClick={() => dispatch(setFilter(item))}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(clearTodoCompleted())}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
