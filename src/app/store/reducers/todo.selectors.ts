import {TodoModel} from "./todo.reducer";
import {Observable} from "rxjs";

const todos = (state: {todos: TodoModel})=> {
  return state.todos.todos.map(todo => {
    return {
      ...todo,
      title: todo.title.toUpperCase()
    }
  });
};

const totalTodos = (state: {todos: TodoModel})=> {
    return state.todos.todos.length;
}

const getTodo = (state: {todos: TodoModel}, id: number) => {
  return state.todos.todos.find(todo => todo.id == id)
}

export const TodoSelectors = {
  todos,
  totalTodos,
  getTodo
}
