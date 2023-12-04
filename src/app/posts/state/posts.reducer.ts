import { createReducer, on } from '@ngrx/store';
import { DELETE_DATA, POST_DATA, UPDATE_DATA } from './posts.action';
import { initialPostState } from './posts.state';

export const _postReducer = createReducer(
  initialPostState,
  on(POST_DATA, (state, action) => {
    // Create a new post object with the id property
    const post = {
      ...action.postData,
      id: state.Posts.length + 1,
    };
    return {
      ...state,
      Posts: [...state.Posts, post],
    };
  }),
  on(UPDATE_DATA, (state, action) => {
    const updatedPost = state.Posts.map((post) => {
      return post.id === action.updatedPost.id ? action.updatedPost : post;
    });
    return {
      ...state,
      Posts: updatedPost,
    };
  }),
  on(DELETE_DATA, (state, action) => {
    let posts = state.Posts;
    posts = posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      Posts: posts,
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
