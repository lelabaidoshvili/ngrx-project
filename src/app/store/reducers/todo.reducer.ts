import {createReducer, on} from "@ngrx/store";
import {getTodos, getTodosSuccess} from "./todo.actions";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;

}

export interface TodoModel {
  todos: Todo[];
}

export const initialState: TodoModel = {
  todos: []
}
export const todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, action) => ({todos: action.todos}))
)
