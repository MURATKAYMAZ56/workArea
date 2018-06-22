import React from "react";
const AddTodo = () => {
  return (
    <div>
      <form>
        Enter: <input type="text" placeholder="description:" />
        <input type="text" placeholder="Deadline:" />
        <input type="submit" name="Add" value="Add" />
      </form>
    </div>
  );
};

export default AddTodo;
