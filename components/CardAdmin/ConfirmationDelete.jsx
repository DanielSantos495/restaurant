import React from 'react'

import { Button, ModalOverlay, Form, ButtonsWrapper } from './style'

export const ConfirmationDelete = (props) => {

   const {
      setConfirmationDelete,
      handleSubmit
   } = props

   return(
      <ModalOverlay>
         <Form onSubmit={handleSubmit}>
            <h2>Deseas eliminar este producto</h2>
            <ButtonsWrapper>
               <Button type='submit'>Aceptar</Button>
               <Button type='button' onClick={() => setConfirmationDelete(false)}>Cancelar</Button>
            </ButtonsWrapper>
         </Form>
      </ModalOverlay>
   )
}