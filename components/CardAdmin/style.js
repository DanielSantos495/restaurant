import styled from 'styled-components'
import { fontSizeMiddle } from 'styles/variables'
import { productsCenter, titles, buttons } from '../../styles/mixins'



export const Section = styled.section`
   display: flex;
   justify-content: space-evenly;
   width: 100%;
`

export const Article = styled.article`
   ${productsCenter};
   height: auto;
   width: 300px;
   div {
      ${productsCenter}
   }
`

export const BebidasContainer = styled.div`
   margin: 0 0 50px 0;
`

export const ContainerTitle = styled.div`
   ${titles('40px', '120px')};
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 15px 0;
`

