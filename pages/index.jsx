import React from 'react';
import { CardUserContainer } from '@/components/CardUser/CardUserContainer'
import { Layout } from '@/components/Layout/Layout'

const HomePage = () => {

   const logoUser = 'https://i.imgur.com/QVzPw2n.png'

   return (
      <Layout logo={logoUser}>
         <CardUserContainer />
      </Layout>
   )
}

export default HomePage;