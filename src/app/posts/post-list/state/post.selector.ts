import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './posts.state';

export const selectPostFeature = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(selectPostFeature, (state: PostState) => {
  return state.Posts;
});
