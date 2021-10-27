import "./TodoList.scss";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { filters } from "../sliceReducers/filterSlice";

function TodoList(props) {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  if (todos.length <= 0) return null;
  return (
    <div className="main">
      <ul className="todo-list">
        {todos.filter(filters[filter]).map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
