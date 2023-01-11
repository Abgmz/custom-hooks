import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_NEW_TODO",
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "REMOVE_TODO",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "TOGGLE_TODO",
      payload: id,
    };

    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
