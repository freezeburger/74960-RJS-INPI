/* Global Imports */
// Add any necessary imports here


/* Application Imports */
// Add any necessary imports here
import * as Hooks from '@/hooks';

/* Local Imports */
import { PostListLogic } from "./PostList.types";
import { useEffect } from 'react';

export const useLogic = ():PostListLogic => {

    const { data, act} = Hooks.useStore();

    const { value, previous, next } =  Hooks.useArrayNavigation(data.posts);

    useEffect(() => {
        setTimeout(() => act('LOAD_POSTS'));
    },[]);
    
    return {
        // Add your logic here
        posts: data.posts,
        value,
        previous,
        next,
    };
}