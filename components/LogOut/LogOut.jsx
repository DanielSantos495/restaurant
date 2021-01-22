import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { Context } from '../../Context'

import { DivContainer, Button } from './style'

export const LogOut = () => {

   const { removeAuth } = useContext(Context)
   const router = useRouter()

   const handleButtonLogOut = () => {
      removeAuth()
      router.push('login')
   }
   return(
      <DivContainer>
         <Button type='button' onClick={handleButtonLogOut}>CERRAR SESIÓN</Button>
      </DivContainer>
   )
}