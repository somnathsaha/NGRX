import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './posts.state';

export const selectPostFeature = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(selectPostFeature, (state: PostState) => {
  return state.Posts;
});

export const getPostById = createSelector(
  selectPostFeature,
  (state: PostState, props: any) => {
    return state.Posts.find((post) => post.id === +props.id);
  }
);
