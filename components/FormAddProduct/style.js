import styled from 'styled-components'

import { fontSizeMiddle, fontFamilyCursive, fontSizeBig, fontSizeContent } from '@/styles/variables'
import { buttons, input, titles } from '@/styles/mixins'

const centerItems = `
   align-items: center;
   display: flex;
   flex-direction: column;
`

export const Section = styled.section`
   height: 500px;
   margin: 0 0 50px 0;
   width: 700px;
   ${centerItems}
`
export const TemplateAddProduct = styled.div`
   display: flex;
   padding: 50px;
`

export const Form = styled.form`
   height: 400px;
   justify-content: space-around;
   width: 400px;
   ${centerItems}
`

export const H2 = styled.h2`
   font-family: ${fontFamilyCursive};
   font-size: ${fontSizeBig};
   margin: 0 0 50px 0;
   width: auto;
`
export const Input = styled.input`
   ${input('230px')};
`
export const InputNumber = styled.input`
   &[type=number]::-webkit-inner-spin-button,
   &[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   };
   &[type=number] {
      -moz-appearance: textfield;
   }
   ${input('230px')};
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '160px' )};
   margin: 0 0 15px 0;
`

export const ProductContainer = styled.div`
   margin: 80px 0 0 0;
`

export const ContainerTitleType = styled.div`
   ${titles('40px', '120px')};
   margin: 0 auto 30px;
`

export const Success = styled.img`
   height: 40px;
   margin: 0 0 20px 0;
   width: 40px;
`