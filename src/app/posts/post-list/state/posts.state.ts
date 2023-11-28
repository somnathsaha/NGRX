import { Post } from 'src/app/model/post.model';

export interface PostState {
  Posts: Post[];
}

export const initialPostState: PostState = {
  Posts: [
    {
      id: '1',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      id: '2',
      title: 'Title 2',
      description: 'Description 2',
    },
  ],
};
