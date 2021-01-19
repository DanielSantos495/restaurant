import React, { useEffect, useState } from 'react'

import { CardAdmin } from './CardAdmin'

export const CardAdminContainer = () => {

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

   return(
      <CardAdmin
         products={products}
      />
   )
}