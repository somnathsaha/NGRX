import { counterReducer } from '../Counter/State/counter.reducer';
import { postReducer } from '../posts/post-list/state/posts.reducer';

export const appReducer = {
  count: counterReducer,
  posts: postReducer,
};
