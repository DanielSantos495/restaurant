import styled from 'styled-components'

import { buttons } from '@/styles/mixins'
import { fontSizeMiddle } from '@/styles/variables'

// PanelAddProduct
export const ContainerPanel = styled.div`
   display: flex;
   justify-content: space-evenly;
   width: 100%;
`

// SelectAdd
export const PanelTypes = styled.div`
   display: flex;
   flex-direction: column;
   height: 180px;
   justify-content: space-evenly;
   width: 100%;
`
export const ButtonBack = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 25px 0;
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 15px 0;
`