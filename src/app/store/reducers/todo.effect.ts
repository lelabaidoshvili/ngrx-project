import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "./todo.service";
import {getTodos, getTodosSuccess} from "./todo.actions";
import {map, switchMap} from "rxjs";

@Injectable()
export class TodoEffect {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
  }
fetchTodos$ = createEffect( () => this.actions$.pipe(
  ofType(getTodos),
  switchMap( () => this.todoService.getTodos()
    .pipe(
      map(todos => getTodosSuccess({todos}))
    )
  )
))

}
