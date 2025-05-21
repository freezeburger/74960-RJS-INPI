/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';
import { UIActionnable, UILevel, UISize } from '@/types';

/* Local Imports */
import { ButtonWrapper } from './Button.styled';


interface ButtonProps extends UILevel, Partial<UISize & UIActionnable> { 
   children:string;
   disabled?:boolean;
} 

const Button: FC<ButtonProps> = (props) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <ButtonWrapper 
      data-testid="Button" 
      {...props} 
      onClick={props.action}>
      {props.children}
   </ButtonWrapper>
   );

}

/**
 * USAGE: Button description to complete.
 * @example
 * <Button size="small | medium | large">TEXT</Button> 
 * <Button level="primary | optional | critical">TEXT</Button> 
 * <Button action=" () => console.log('click') ">TEXT</Button> 
 * <Button disabled>TEXT</Button> 
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
ButtonMemo.displayName = 'Button Memoized';

export default ButtonMemo;
