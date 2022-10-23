import React, { useState, useEffect, useRef, useMemo } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    //TODO: Use external library instead
    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };

  return (
    <form onSubmit={HandleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Updatee your item"
            value={input}
            onChange={HandleSubmit}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={HandleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
