import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../Context'

import { CardAdmin } from './CardAdmin'

export const CardAdminContainer = (props) => {

   const { products } = props
   const [confirmationDelete, setConfirmationDelete] = useState(false)
   const [productId, setProductId] = useState('')
   const { manageAction, setEdit, setProductForEdit, setProductChange, productChange } = useContext(Context)
   const token = (typeof window !== 'undefined') && window.sessionStorage.getItem('token')
   const router = useRouter()
   const API = 'https://restaurant.danielsantos495.vercel.app'

   const handleButtonIcon = (id, i, products) => {
      if (manageAction === 'ELIMINAR') {
         setProductId(id)
         setConfirmationDelete(true)
         setEdit(false)
      } else if (manageAction === 'EDITAR') {
         setProductForEdit(products[i])
         setConfirmationDelete(false)
         setEdit(true)
      } else if (manageAction === 'AGREGAR') {
         setConfirmationDelete(false)
         setEdit(false)
      }
   }

   const handleSubmitDelete = e => {
      e.preventDefault()

      const postDelete = async () => {
         try {
            const response = await fetch(`${API}/api/products/${productId}`, {
               method: 'DELETE',
               headers: {
                  'Authorization': `Bearer ${token}`
               }
            })
            if(response.status === 401 || response.statusText === 'Unauthorized') {
               // No esta logeado
               router.push('login')
            }

            const { data, message} = await response.json()
            if (data && message === 'Product delete') {
               // Se actualiza el componente CardAdmin
               setProductChange()
               setConfirmationDelete(false)
            }
         } catch(err) {
            console.error(err)
         }
      }
      postDelete()
   }

   return(
      <CardAdmin
         confirmationDelete={confirmationDelete}
         setConfirmationDelete={setConfirmationDelete}
         products={products}
         handleButtonIcon={handleButtonIcon}
         handleSubmitDelete={handleSubmitDelete}
      />
   )
}