import React, { useEffect, useState } from 'react';
import isoFetch from 'isomorphic-unfetch'

import { CardUser } from '@/components/CardUser/CardUser'
import { Layout } from '@/components/Layout/Layout'

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

const HomePage = (props) => {

   const { products } = props;
   const logoUser = 'https://i.imgur.com/QVzPw2n.png'

   return (
      <Layout logo={logoUser}>
         <CardUser
            products={products}
         />
      </Layout>
   )
}

export default HomePage;