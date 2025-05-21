/**
* Créer un composant Header en React qui :
* - ✔️Affiche une barre en haut de la page.
* - ✔️Accepte une prop "title" pour afficher un titre.
* - ✔️A une couleur et une hauteur par défaut lorsque la connexion réseau est active.
* - ✔️Change de couleur et s’agrandit en hauteur automatiquement lorsque la connexion réseau est perdue (navigator.onLine).
* - ✔️Affiche un message lorsque la connexion réseau est perdue (navigator.onLine).
* - ✔️Revient à son état initial une fois la connexion rétablie.
* - ✔️L’état du réseau doit être détecté en temps réel (écoute des événements online / offline).
*/
 
 
/* Global Imports */
import React, { FC } from 'react';
 
/* Application Level Imports */
import * as Hooks from '@/hooks';
 
/* Local Imports */
import { HeaderWrapper } from './Header.styled';
 
 
interface HeaderProps {
   title:string;
}
 
/**
* USAGE: Header description to complete.
* @example
* <Header />
*/
const Header: FC<HeaderProps> = (props) => {
 
   // Hooks.useGloblaEvent('click',()=> console.log('click event'));
  
   const onlineStatus = Hooks.useOnlineStatus();
 
   return(
   <HeaderWrapper data-testid="Header" online={onlineStatus}>
     <h1>{props.title}</h1>
     {!onlineStatus && <h2>⚠️ Vous avez perdu la connexion!</h2>}
   </HeaderWrapper>
   );
 
}
 
const HeaderMemo = React.memo(Header, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
HeaderMemo.displayName = 'Header Memoized';
 
export default HeaderMemo;
 
 