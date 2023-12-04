import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';

export const POST_DATA = createAction(
  '[Post Component] Post Data',
  props<{ postData: Post }>()
);

export const UPDATE_DATA = createAction(
  '[Post Component] Update Data',
  props<{ updatedPost: Post }>()
);

export const DELETE_DATA = createAction(
  '[Delete] Delete Data',
  props<{ id: number }>()
);
