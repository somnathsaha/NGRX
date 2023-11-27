import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter component]  Increament');
export const decrement = createAction('[counter component]  Decrement');
export const reset = createAction('[counter component]  Reset');
export const customIncrement = createAction(
  '[counter component] Custom Increment',
  props<{ customdata: number }>()
);
export const changeChannelName = createAction(
  '[counter component] Change Channel Name'
);
