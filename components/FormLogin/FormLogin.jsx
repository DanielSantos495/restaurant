import React from 'react'
import { Form, H2, Input, Button, ContainerInputs, Alert } from './style';

export const FormLogin = (props) => {

   const {
      form,
      usernameValidate,
      passwordValidate,
      loader,
      handleInput,
      handleSubmit
   } = props;

   return(
      <Form onSubmit={handleSubmit}>
         <H2>Iniciar Sesión</H2>
         <ContainerInputs>
            <label htmlFor='username'>
               <Input
                  type='text'
                  value={form.username}
                  name='username'
                  placeholder='Nombre de usuario'
                  onChange={handleInput}
                  disabled={loader}
               />
               {usernameValidate &&
                  <Alert>Se te olvido el Username</Alert>
               }
            </label>
            <label htmlFor='password'>
               <Input
                  type='password'
                  value={form.password}
                  name='password'
                  placeholder='Contraseña'
                  onChange={handleInput}
                  disabled={loader}
               />
               {passwordValidate &&
                  <Alert>Se te olvido la Contraseña</Alert>
               }
            </label>
         </ContainerInputs>
            {loader && <Loader>Cargando...</Loader>}
         <Button type='submit' disabled={loader}>Iniciar Sesión</Button>
      </Form>
   )
}