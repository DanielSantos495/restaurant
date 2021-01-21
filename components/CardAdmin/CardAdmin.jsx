import React, { useContext } from 'react'

import { Product } from '@/components/Product/Product'
import { Manage } from '@/components/Manage/Manage'
import { ConfirmationDelete } from './ConfirmationDelete'

import { Context } from '../../Context'
import { Section, Article, BebidasContainer, ContainerTitle, ButtonIcon  } from './style'

export const CardAdmin = (props) => {

   const {
      confirmationDelete,
      setConfirmationDelete,
      products,
      handleButtonIcon,
      handleSubmitDelete
   } = props;
   const iconEdit = '/icons/edit.png'
   const iconDelete = '/icons/delete.png'
   const { manageAction } = useContext(Context)
   const editProduct = manageAction === 'EDITAR'
   const deleteProduct = manageAction === 'ELIMINAR'

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
                     {editProduct || deleteProduct ?
                        <ButtonIcon type='button' onClick={e => handleButtonIcon(item._id)}>
                           <img
                              src={editProduct && iconEdit || deleteProduct && iconDelete}
                              alt={editProduct && 'Editar' || deleteProduct && 'Eliminar'}
                           />
                        </ButtonIcon>
                        : null
                     }
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
                        {editProduct || deleteProduct ?
                           <ButtonIcon type='button' onClick={e => handleButtonIcon(item._id)}>
                              <img src={editProduct && iconEdit || deleteProduct && iconDelete} />
                           </ButtonIcon>
                           : null
                        }
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
                        {editProduct || deleteProduct ?
                           <ButtonIcon type='button' onClick={e => handleButtonIcon(item._id)}>
                              <img src={editProduct && iconEdit || deleteProduct && iconDelete} />
                           </ButtonIcon>
                           : null
                        }
                           <Product {...item}/>
                        </li>
                     )
                  }
               </ul>
            </div>
         </Article>
         <Manage />
         {confirmationDelete &&
            <ConfirmationDelete
               setConfirmationDelete={setConfirmationDelete}
               handleSubmit={handleSubmitDelete}
            />
         }
      </Section>
   )
}