
import {createReducer, on} from "@ngrx/store";
import {increment, reset} from "./counter.actions";
import {decrement} from "./counter.actions";


export interface CounterStoreModel {
  count: number;
}
export const initialState: CounterStoreModel = {
  count: 0
}
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => ({ count: state.count +action.amount})),
  on(decrement, (state, action) => ({ count: state.count -action.amount})),
  on(reset, (state) => ({ count: 0})),

)
