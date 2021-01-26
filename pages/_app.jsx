import { GlobalStyle } from '../styles/GlobalStyle'

import Context from '../Context'

const MyApp = ({ Component, pageProps }) => {

   return (
      <>
         <GlobalStyle />
         <Context.Provider>
            <Component {...pageProps} />
         </Context.Provider>
      </>
   )
}

export default MyApp