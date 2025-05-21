/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './PostList.style.css';
import { PostListProps } from './PostList.types';


const PostList: FC<PostListProps> = ({logic}) => {

   return (
      <>
         <div className="PostList" data-testid="PostList">
            
            PostList Component
            <hr />
            <button onClick={logic?.previous}>Previous</button>
            <button onClick={logic?.next}>Next</button>
            <h1>{logic?.value?.title}</h1>
            <p>{logic?.value?.body}</p>
         </div>
      </>
   )
};

export default PostList;
