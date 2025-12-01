function initialTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos && todos.length > 0
    ? todos
    : [
        {
          id: "1dfc",
          title: "Design frontend layout",
          description: "Create the dashboard UI with responsive design.",
          completed: false,
        },
        {
          id: "2hcf",
          title: "Integrate database",
          description: "Connect MongoDB and define schema for users and tasks.",
          completed: true,
        },
        {
          id: "3kfg",
          title: "Implement JWT authentication",
          description: "Secure routes using JSON Web Tokens for user sessions.",
          completed: false,
        },
      ];
}

export default initialTodos;
