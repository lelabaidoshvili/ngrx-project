import {createAction, props} from "@ngrx/store";
import {Todo} from "./todo.reducer";

export const getTodos = createAction('[Todo] Get Todos');
export const getTodosSuccess = createAction('[Todo] Get Todos Success',
  props<{todos: Todo[]}>()
  );

export const getTodo = createAction(
  '[Todo] Get Todo',
  props<{id: number}>()
)
