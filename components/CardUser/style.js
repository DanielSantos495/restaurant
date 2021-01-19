import styled from 'styled-components'
import { colorPrimary, fontFamiliyContent, fontSizeTitle } from '../../styles/variables'
import { productsCenter } from '../../styles/mixins'



export const Section = styled.section`
   display: flex;
   justify-content: space-evenly;
   width: 100%;
`

export const Article = styled.article`
   ${productsCenter}
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
   align-items: center;
   background: ${colorPrimary};
   border-radius: 5px;
   display: flex;
   height: 40px;
   justify-content: center;
   margin: 0 0 30px 0;
   width: 120px;
   h2 {
      color: #fff;
      font-family: ${fontFamiliyContent};
      font-size: ${fontSizeTitle};
      font-weight: 700;
   }
`
