import styled from 'styled-components'
import { colorPrimary, fontFamilyCursive, fontSizeBig } from '../../styles/variables'

export const FooterTag = styled.footer`
   align-items: center;
   background-color: ${colorPrimary};
   display: flex;
   height: 80px;
   justify-content: center;
   margin: 40px 0 0 0;
   width: 100%;
   h2 {
      color: #fff;
      font-family: ${fontFamilyCursive};
      font-size: ${fontSizeBig};
   }
`