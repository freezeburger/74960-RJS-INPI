import React, { Suspense } from 'react';
import { PostListProps } from './PostList.types';

const LazyPostList =  React.lazy(() => import('./PostList'));

/**
 * USAGE: PostList description to complete.
 * @example
 * <PostList /> 
 */
const PostList = (props: JSX.IntrinsicAttributes & PostListProps) => (
  <Suspense fallback={null}>
    <LazyPostList {...props} />
  </Suspense>
);
PostList.displayName = 'PostList Lazy Loaded';

export default PostList;
