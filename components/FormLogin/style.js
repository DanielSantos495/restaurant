import styled from 'styled-components'
import {
   fontFamilyCursive,
   fontSizeBig,
   fontFamiliyContent,
   fontSizeMiddle,
   fontSizeSmall,
} from '../../styles/variables'
import { buttons, input } from '../../styles/mixins'

export const Form = styled.form`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 350px;
   justify-content: space-around;
   margin: 50px auto 0;
   width: 400px;
`

export const H2 = styled.h2`
   font-family: ${fontFamilyCursive};
   font-size: ${fontSizeBig};
   text-align: center;
`
export const ContainerInputs = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 200px;
   justify-content: space-evenly;
   margin: 0 auto;
   width: 100%;
`
export const Input = styled.input`
   ${input('230px')}
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '45px', '170px')}
`

export const Alert = styled.p`
   color: red;
   font-family: ${fontFamiliyContent};
   font-size: ${fontSizeSmall};
   margin: 10px 0 0 0;
`