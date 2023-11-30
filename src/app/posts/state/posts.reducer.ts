import { createReducer, on } from '@ngrx/store';
import { POST_DATA } from './posts.action';
import { initialPostState } from './posts.state';

export const _postReducer = createReducer(
  initialPostState,
  on(POST_DATA, (state, action) => {
    return {
      ...state,
      Posts: [...state.Posts, action.postData],
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
