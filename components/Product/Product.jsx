import React from 'react';

import { Container, ProductName, ProductPrice, ProductDescription } from './style'

export const Product = (props) => {

   const {
      name,
      price,
      description,
   } = props;
   return (
      <Container>
         <ProductName>{name}</ProductName>
         <ProductPrice>{price.length > 0 ? `$${price}` : ''}</ProductPrice>
         <ProductDescription>{description}</ProductDescription>
      </Container>
   )
}