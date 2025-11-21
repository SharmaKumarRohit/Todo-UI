import { useState, useEffect } from "react";
import Model from "./Model";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import NoMoreTask from "./NoMoreTask";

function Todos({
  todos,
  handleToggle,
  handleDelete,
  handleEdit,
  filterOption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    todoData: { title: "", description: "" },
  });
  useEffect(() => {
    if (isOpen) document.documentElement.style.overflowY = "hidden";
    else document.documentElement.style.overflowY = "auto";
  }, [isOpen]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      todoData: { ...prevData.todoData, [id]: value },
    }));
  };
  function isModelOpen() {
    setIsOpen(true);
  }
  function isModelClose() {
    setIsOpen(false);
  }
  return (
    <>
      {todos.length !== 0 ? (
        <>
          <div>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                setEditData={setEditData}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                modelOpen={isModelOpen}
                filterOption={filterOption}
              />
            ))}
          </div>
          {isOpen && (
            <Model modelClose={isModelClose}>
              <EditTodo
                editData={editData}
                handleChange={handleChange}
                handleEdit={handleEdit}
                modelClose={isModelClose}
              />
            </Model>
          )}
        </>
      ) : (
        <NoMoreTask />
      )}
    </>
  );
}

export default Todos;
