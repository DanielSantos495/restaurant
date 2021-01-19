import { colorPrimary, fontFamiliyContent, fontSizeTitle } from './variables'

export const productsCenter = `
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const buttons = (fontsize, height, width) => `
   background-color: ${colorPrimary};
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