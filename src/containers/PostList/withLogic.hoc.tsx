/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// Add any necessary imports here

/* Local Imports */
import { PostListProps } from './PostList.types';
import { useLogic } from "./useLogic.hook";

export const withLogic = (Component:FC<PostListProps>) => {

    return (props:object) => {
        const logic = useLogic();
        return <Component logic={logic} {...props}/>
    }
}