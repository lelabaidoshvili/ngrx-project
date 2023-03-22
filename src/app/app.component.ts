import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterStoreModel, increment, decrement, reset} from "./store/counter";
import {Observable} from "rxjs";
import {getTodos, TodoModel, TodoSelectors} from "./store/reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number>
  todos$ = this.store.select( TodoSelectors.todos)
constructor(
  private store: Store<{counter: CounterStoreModel, todos: TodoModel}>
) {
    this.count$ = this.store.select(state => state.counter.count)
}

  increment() {
    this.store.dispatch(increment({amount: 2}))
  }
  decrement() {
    this.store.dispatch(decrement({amount: 5}))

  }
  reset() {
    this.store.dispatch(reset())

  }
  getTodos() {
    this.store.dispatch(getTodos())
  }
  getTodo(id: number) {
    this.store.select(TodoSelectors.getTodo, id).subscribe( todo => {
      console.log(todo)
    })
  }

}
