import { GlobalStyle } from '../styles/GlobalStyle'

import { Context } from '../Context'

const MyApp = ({ Component, pagesProps }) => {

   return (
      <>
         <GlobalStyle />
         <Context.Provider>
            <Component {...pagesProps} />
         </Context.Provider>
      </>
   )
}

export default MyApp