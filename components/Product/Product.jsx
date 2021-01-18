import React from 'react';

const Product = (props) => {

   const {
      name,
      price,
      description
   } = props;
   return (
      <div>
         <h3>{name}</h3>
         <h4>{price}</h4>
         <p>{description}</p>
      </div>
   )
}

export default Product;