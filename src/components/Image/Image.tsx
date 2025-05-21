/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';
import { Generics } from '@/types';

/* Local Imports */
import { ImageWrapper } from './Image.styled';


interface ImageProps {
   source: Generics.ImageUrl
}


const Image: FC<ImageProps> = (props) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return (
      <ImageWrapper data-testid="Image" src={props.source}/>
   );

}

/**
 * USAGE: Image description to complete.
 * @example
 * <Image /> 
 */
const ImageMemo = React.memo(Image, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
ImageMemo.displayName = 'Image Memoized';

export default ImageMemo;
