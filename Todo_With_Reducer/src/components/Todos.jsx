import { useTodos } from "../contexts/TodosProvider";
import Todo from "./Todo";
import Model from "./Model";
import EditForm from "./EditForm";
import NoTodo from "./NoTodo";

function Todos() {
  const { todos, isOpen } = useTodos();
  return (
    <>
      {todos && todos.length === 0 ? (
        <NoTodo />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {todos.map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </div>
          {isOpen && (
            <Model>
              <EditForm />
            </Model>
          )}
        </>
      )}
    </>
  );
}

export default Todos;
