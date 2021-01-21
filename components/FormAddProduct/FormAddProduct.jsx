import React from 'react'

import { Product } from '@/components/Product/Product'
import { Section, Form, TemplateAddProduct, H2, Input, Button, ProductContainer, ContainerTitleType } from './style'
import { Alert } from '@/styles/mixins'

export const FormAddProduct = (props) => {

   const {
      form,
      loader,
      nameValidate,
      priceValidate,
      descriptionValidate,
      typeProductSelection,
      handleInput,
      handleSubmit
   } = props
   console.log(typeProductSelection);
   return(
      <Section>
         <TemplateAddProduct>
            <Form onSubmit={handleSubmit}>
               <H2>Crear Producto</H2>
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
                  <Input
                     type='text'
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
               <Button type='submit' disabled={loader}>Crear</Button>
            </Form>
            <ProductContainer>
            {
               typeProductSelection &&
               <ContainerTitleType>
                  <h2>{typeProductSelection}</h2>
               </ContainerTitleType>
            }
               <Product
                  name={form.name}
                  price={form.price}
                  description={form.description}
               />
            </ProductContainer>
         </TemplateAddProduct>
      </Section>
   )
}