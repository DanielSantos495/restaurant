import React, { useEffect, useState, useContext } from 'react'
import isoFetch from 'isomorphic-unfetch'

import { Context } from '../../../Context'

import { Layout } from '@/components/Layout/Layout'
import { CardAdminContainer } from '@/components/CardAdmin/CardAdminContainer'

const API = 'https://restaurant.danielsantos495.vercel.app'

// SSR
export const getServerSideProps = async () => {
   try {
      const response = await isoFetch(`${API}/api/products`)
      const { data: products } = await response.json()

      return {
         props: {
            products
         }
      }
   } catch(err) {
      console.error(err)
   }
}

const CardManage = (props) => {

   const { products } = props
   const { productChange } = useContext(Context)
   const [productList, setProductList] = useState(products)

   // useEffect actualizamos componente por el CRUD de productos
   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await fetch(`${API}/api/products`)
            const data = await response.json()
            setProductList(data.data)
         } catch(err) {
            console.error(err)
         }
      }
      // Los productos se actualizan 5 a los 5 segundos, por el cache de la API
      getProducts()
   }, [productChange])

   return(
      <Layout>
         <CardAdminContainer
            products={productList}
         />
      </Layout>
   )
}

export default CardManage