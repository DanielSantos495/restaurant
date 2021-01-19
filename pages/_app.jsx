import { GlobalStyle } from '../styles/GlobalStyle'

const MyApp = ({ Component, pagesProps }) => {


   return (
      <>
         <GlobalStyle />
            <Component {...pagesProps} />
      </>
   )
}

export default MyApp