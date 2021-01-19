import styled from 'styled-components'
import { colorPrimary } from '../../styles/variables'

export const HeaderTag = styled.header`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 180px;
   justify-content: center;
   margin: 0 0 30px 0;
   width: 100%;
`

export const DecorationPoint = styled.div`
   border-bottom: 10px dotted ${colorPrimary};
   position: relative;
   width: 100%;
`

export const Img = styled.img`
   height: 320px;
   width: 400px;
`
export const H1 = styled.h1`
   position: absolute;
   top: -60px;
`