import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  let clsname = todo.remember ? "reminder" : "";

  return (
    <div className={"todo " + clsname}>
      <h3>
        {todo.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(todo.id)}
        />
      </h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
