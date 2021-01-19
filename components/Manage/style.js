import styled from 'styled-components'

import { fontSizeMiddle } from '../../styles/variables'
import { productsCenter, titles, buttons } from '../../styles/mixins'

export const Article = styled.article`
   ${productsCenter};
   height: auto;
   width: 300px;
   div {
      ${productsCenter}
   }
`

export const ContainerTitle = styled.div`
   ${titles('40px', '160px')}
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 15px 0;
`