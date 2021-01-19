import React from 'react'

import { DecorationPoint, HeaderTag, Img, H1 } from './style'

// import LogoRestaurant from '../../public/images/logo-restaurant.png'
// https://i.imgur.com/QVzPw2n.png
export const Header = (props) => {

   const { logo = 'https://i.imgur.com/ql8I9gG.png' } = props;
   return(
      <HeaderTag>
         <DecorationPoint />
         <H1>
            <Img src={logo}/>
            {/* // <Image src='https://i.imgur.com/QVzPw2n.png' alt='Logo'/> */}
         </H1>
      </HeaderTag>
   )
}