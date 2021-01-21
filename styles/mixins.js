import styled from 'styled-components'
import { colorPrimary, fontFamiliyContent, fontSizeTitle, fontSizeSmall, fontSizeContent } from './variables'

export const productsCenter = `
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const buttons = (fontsize, height, width, background = colorPrimary) => `
   background-color: ${background};
   border: none;
   border-radius: 2px;
   color: #fff;
   font-family: ${fontFamiliyContent};
   font-size: ${fontsize};
   font-weight: 700;
   height: ${height};
   width: ${width};
   outline-color: ${colorPrimary};
   cursor: pointer;
   &:hover {
      opacity: .8;
   }
   &:active {
      transform: scale(.99);
   }
`

export const titles = (height, width) => `
   align-items: center;
   background: ${colorPrimary};
   border-radius: 5px;
   display: flex;
   height: ${height};
   justify-content: center;
   margin: 0 0 30px 0;
   width: ${width};
   h2 {
      color: #fff;
      font-family: ${fontFamiliyContent};
      font-size: ${fontSizeTitle};
      font-weight: 700;
   }
`
// Inputs requeridos
export const Alert = styled.p`
   color: red;
   font-family: ${fontFamiliyContent};
   font-size: ${fontSizeSmall};
   margin: 10px 0 0 0;
`

export const input = width => `
   border: none;
   border-bottom: 1px solid grey;
   height: 20px;
   width: ${width};
   ::placeholder {
      font-size: ${fontSizeContent};
   }
`
// Pdte por crear Loader para formularios
export const Loader = styled.div`

`