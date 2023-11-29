import { createReducer } from '@ngrx/store';
import { PostState, initialPostState } from './posts.state';

export const _postReducer = createReducer(initialPostState);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
