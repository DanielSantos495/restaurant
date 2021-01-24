import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { Context } from '../../Context'

import { Alert } from '@/styles/mixins'

import { Button, ButtonBack, PanelTypes } from './style'

export const SelectAdd = (props) => {

   const {
      handleButtonType
   } = props
   const router = useRouter()
   const { typeProductSelectionValidate } = useContext(Context)

   const handleButton = () => {
      router.back()
   }

   return(
      <section>
         <ButtonBack type='button' onClick={handleButton}> ATRAS </ButtonBack>
         <PanelTypes>
            <Button type='button' onClick={handleButtonType}>
               SUSHI
            </Button>
            <Button type='button' onClick={handleButtonType}>
               BEBIDAS
            </Button>
            <Button type='button' onClick={handleButtonType}>
               POSTRES
            </Button>
         </PanelTypes>
         {typeProductSelectionValidate && <Alert>Tienes que escoger la sección</Alert>}
      </section>
   )
}