import styled from 'styled-components'

import { buttons } from '@/styles/mixins'
import { fontSizeMiddle } from '@/styles/variables'

export const DivContainer = styled.div`
   margin:  0 0 40px 0;
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 15px 0;
`