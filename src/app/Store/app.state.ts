import { counterState } from '../Counter/State/counter.state';
import { PostState } from '../posts/post-list/state/posts.state';

export interface AppState {
  count: counterState;
  posts: PostState;
}
