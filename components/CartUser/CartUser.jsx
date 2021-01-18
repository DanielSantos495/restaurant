import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'

const SectionTitle = styled.h2`
   color: red;
`
const CartUser = () => {

   const [products, setProducts] = useState([])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await fetch('http://localhost:3001/api/products')
            const data = await response.json()
            console.log(data.data);
            setProducts(data.data)
         } catch(err) {
            console.error(err)
         }
      }

      getProducts()
   }, [])

   return (
      <section>
         <article>
            <SectionTitle>SUSHI</SectionTitle>
            <ul>
               {
                  products.map((item, i) =>
                     item.type === 'sushi' &&
                     <li key={i}>
                        <Product {...item}/>
                     </li>
                  )
               }
            </ul>
         </article>
         <article>
            <h2>BEBIDAS</h2>
            <ul>
               {
                  products.map((item, i) =>
                     item.type === 'bebidas' &&
                     <li key={i}>
                        <Product {...item}/>
                     </li>
                  )
               }
            </ul>
         </article>
         <article>
            <h2>POSTRES</h2>
            <ul>
               {
                  products.map((item, i) =>
                     item.type === 'postres' &&
                     <li key={i}>
                        <Product {...item}/>
                     </li>
                  )
               }
            </ul>
         </article>
      </section>
   )
}

export default CartUser