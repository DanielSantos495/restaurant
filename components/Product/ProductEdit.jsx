import React,{ useContext } from 'react'

import { Context } from '../../Context'

import { Product} from '@/components/Product/Product'

import { Loader, Alert } from '@/styles/mixins'

import {
   Section,
   ModalOverlay,
   Form,
   TemplateAddProduct,
   H2,
   Input,
   InputNumber,
   ContainerButton,
   Button,
   ProductContainer,
   ContainerTitleType,
   Success,
} from './style'


export const ProductEdit = (props) => {

   const {
      form,
      loader,
      nameValidate,
      priceValidate,
      descriptionValidate,
      updateProduct,
      handleInput,
      handleSubmit
   } = props
   const successIcon = '/icons/checked.png'
   const { setEdit } = useContext(Context)

   return(
      <ModalOverlay>
         <Section>
            <TemplateAddProduct>
               <Form onSubmit={handleSubmit}>
                  <H2>Editar Producto</H2>
                  <label htmlFor='name'>
                     <Input
                        type='text'
                        value={form.name}
                        name='name'
                        placeholder='Nombre'
                        onChange={handleInput}
                        disabled={loader}
                     />
                     {nameValidate &&
                        <Alert>Se te olvido el nombre</Alert>}
                  </label>
                  <label htmlFor='price'>
                     <InputNumber
                        type='number'
                        min='0'
                        value={form.price}
                        name='price'
                        placeholder='Precio'
                        onChange={handleInput}
                        disabled={loader}
                     />
                     {priceValidate &&
                        <Alert>Se te olvido el precio</Alert>}
                  </label>
                  <label htmlFor='description'>
                     <Input
                        type='text'
                        value={form.description}
                        name='description'
                        placeholder='Descripción'
                        onChange={handleInput}
                        disabled={loader}
                     />
                     {descriptionValidate &&
                        <Alert>Se te olvido el descripción</Alert>}
                  </label>
                  {loader && <Loader>Cargando...</Loader>}
                  <ContainerButton>
                     <Button type='submit' disabled={loader}>Editar</Button>
                     <Button type='button' onClick={ () => setEdit(false)}>Cancelar</Button>
                  </ContainerButton>

               </Form>
               <ProductContainer>
                  <Product
                     name={form.name}
                     price={form.price}
                     description={form.description}
                  />
               </ProductContainer>
            </TemplateAddProduct>
            {updateProduct && <Success src={successIcon} />}
         </Section>
      </ModalOverlay>
   )
}