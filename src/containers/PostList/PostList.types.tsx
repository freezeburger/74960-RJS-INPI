import * as Types from '@/types'

export interface PostListProps {
   logic?: PostListLogic;
}

export interface PostListLogic {
  // Add your logic here
  posts: Types.Posts.Post[];
  value: Types.Posts.Post | null;
  next: () => void;
  previous: () => void;
}