import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  const todoArr = [
    {
      id: 1,
      text: "Todo 1",
      day: "Aug 18th at 8:35pm",
      remember: true,
    },
    {
      id: 2,
      text: "Todo 2",
      day: "Aug 19th at 9:35pm",
      remember: true,
    },
    {
      id: 3,
      text: "Todo 3",
      day: "Aug 20th at 10:35pm",
      remember: false,
    },
    {
      id: 4,
      text: "Todo 4",
      day: "Aug 21th at 11:35pm",
      remember: true,
    },
  ];

  const [todos, setTodos] = useState(todoArr);

  //Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  //Delete Task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app_box">
      <Header
        title={"Todo List"}
        onAdd={() => setShowAddTodo(!showAddTodo)}
        showAdd={showAddTodo}
      />

      {showAddTodo && <AddTodo onAdd={addTodo} />}

      <Todos todos={todos} onDelete={deleteTodo} />

      {todos.length === 0 && "Nothing Todo"}
    </div>
  );
}

export default App;
