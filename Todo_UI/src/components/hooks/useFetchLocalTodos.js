function useFetchLocalTodos() {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  return localTodos && localTodos.length > 0
    ? localTodos
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
export default useFetchLocalTodos;
