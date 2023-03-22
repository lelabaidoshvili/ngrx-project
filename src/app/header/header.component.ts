import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoModel, TodoSelectors} from "../store/reducers";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  countTodos$ = this.store.select(TodoSelectors.totalTodos)

  constructor(
    private store: Store<{todos: TodoModel}>
  ) {
  }

}
