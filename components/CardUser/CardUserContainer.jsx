import React, { useEffect, useState } from 'react'

import { CardUser } from './CardUser'

export const CardUserContainer = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await fetch('http://localhost:3001/api/products')
            const data = await response.json()
            setProducts(data.data)
         } catch(err) {
            console.error(err)
         }
      }

      getProducts()
   }, [])

   return(
      <CardUser
         products={products}
      />
   )
}