import styled from 'styled-components'
import { fontFamiliyContent, fontSizeContent, fontSizeTitle, fontSizeMiddle } from '../../styles/variables'

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