import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [remind, setRemind] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!Text) {
      alert("Please add something todo");
      return;
    }

    onAdd({ text, date, remind });

    setText("");
    setDate("");
    setRemind(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Todo</label>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Date</label>
        <input
          type="text"
          placeholder="Set Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Notification?</label>
        <input
          type="checkbox"
          checked={remind}
          value={remind}
          onChange={(e) => setRemind(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Todo" className="btn button btn-block" />
    </form>
  );
};

export default AddTodo;
