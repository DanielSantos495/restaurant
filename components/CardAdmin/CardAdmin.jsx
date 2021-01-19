import React from 'react'

import { Product } from '@/components/Product/Product'
import { Manage } from '@/components/Manage/Manage'
import { Modal } from '@/components/Modal/Modal'

import { Section, Article, BebidasContainer, ContainerTitle, Button  } from './style'
export const CardAdmin = (props) => {

   const { products } = props;

   return(
      <Section>
         <Article>
            <ContainerTitle>
               <h2>SUSHI</h2>
            </ContainerTitle>
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
         </Article>
         <Article>
            <BebidasContainer>
            <ContainerTitle>
               <h2>BEBIDAS</h2>
            </ContainerTitle>
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
            </BebidasContainer>
            <div>
               <ContainerTitle>
                  <h2>POSTRES</h2>
               </ContainerTitle>
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
            </div>
         </Article>
         <Manage />
      </Section>
   )
}