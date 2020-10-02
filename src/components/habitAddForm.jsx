import React, { createRef, memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const newHabit = inputRef.current.value;
    console.log(newHabit);
    newHabit && props.onAdd(newHabit);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
