import styled from 'styled-components'
import { fontFamiliyContent, fontFamilyCursive, fontSizeBig, fontSizeMiddle, fontSizeTitle } from 'styles/variables'
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


export const ButtonIcon = styled.button`
   margin: 0 0 0 calc(100% - 40px);
   img {
      height: 30px;
      width: 30px;
   }
   outline: none;
   ${buttons(fontSizeMiddle, '30px', '30px', 'none')}
`

// Modal

export const ModalOverlay = styled.div`
   background-color: rgba(0, 0, 0, .5);
   bottom: 0;
   position: fixed;
   right: 0;
   left: 0;
   top: 0;
`

export const Form = styled.form`
   align-items: center;
   background-color: #fff;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   height: 190px;
   justify-content: space-around;
   margin: 200px auto 0;
   width: 400px;
   h2 {
      font-family: ${fontFamiliyContent};
      font-size: ${fontSizeTitle};
   }
`

export const ButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 280px;
`
export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '120px' )};
   margin: 0 0 15px 0;
`