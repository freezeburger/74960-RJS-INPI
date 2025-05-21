/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Home.style.css';
import { Link } from 'react-router';


interface HomeProps {}

const Home: FC<HomeProps> = () => {

   Hooks.useDocumentTitle('Home View');

   return (
   <div className="Home" data-testid="Home">
      <UI.Header title="Welcome"></UI.Header>
      <UI.Main>
         <h1>See Products</h1>
         <Link to="/products">Go to products page</Link>
         <hr />
         <h1>Last Posts</h1>
         <Features.PostList />
      </UI.Main>
      <UI.Footer />
   </div>
   )
};

export default Home;
