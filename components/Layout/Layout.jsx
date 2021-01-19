import React from 'react';
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Layout = (props) => {

   const { children, logo } = props;

   return(
      <>
         <Header logo={logo}/>
            <main>
               {children}
            </main>
         <Footer/>
      </>
   )
}