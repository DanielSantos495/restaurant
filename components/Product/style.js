import styled from 'styled-components'

import {
   fontFamiliyContent,
   fontFamilyCursive,
   fontSizeContent,
   fontSizeTitle,
   fontSizeMiddle,
   fontSizeBig
} from '../../styles/variables'
import { input, buttons, titles } from '@/styles/mixins'

const centerItems = `
   align-items: center;
   display: flex;
   flex-direction: column;
`

export const Container = styled.div`
   /* border: 1px solid red; */
   font-family: ${fontFamiliyContent};
   margin: 0 0 30px 0;
   text-align: center;
`

export const ProductName = styled.h3`
   font-weight: 700;
   font-size: ${fontSizeTitle};
   margin: 0 0 10px 0;
`

export const ProductPrice = styled.p`
   font-weight: 700;
   font-size: ${fontSizeMiddle};
   margin: 0 0 10px 0;
`

export const ProductDescription = styled.p`
   display: block;
   font-size: ${fontSizeContent};
   word-wrap: break-word;
   width: 300px;
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

export const Section = styled.section`
   background-color: #fff;
   height: 580px;
   margin: 60px auto 0;
   width: 750px;
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

export const ContainerButton = styled.div`
   display: flex;
   justify-content: space-between;
   width: 230px;
`

export const Button = styled.button`
   ${buttons(fontSizeMiddle, '40px', '100px' )};
`

export const ProductContainer = styled.div`
   margin: 140px 0 0 0;
`

export const ContainerTitleType = styled.div`
   ${titles('40px', '120px')};
   margin: 0 auto 30px;
`

export const Success = styled.img`
   height: 40px;
   position: relative;
   top: -20px;
   width: 40px;
`