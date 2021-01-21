import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../Context'

import { CardAdmin } from './CardAdmin'

export const CardAdminContainer = () => {

   const [products, setProducts] = useState([])
   const [confirmationDelete, setConfirmationDelete] = useState(false)
   const [productId, setProductId] = useState('')
   const [deleted, setDeleted] = useState(false);
   const { manageAction } = useContext(Context)
   const token = (typeof window !== 'undefined') && window.sessionStorage.getItem('token')
   const router = useRouter()

   const handleButtonIcon = id => {
      if (manageAction === 'ELIMINAR') {
         setProductId(id)
         setConfirmationDelete(true)
      } else if (manageAction === 'EDITAR') {
         // EDITAMOS
      }
   }

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
   }, [deleted])

   const handleSubmitDelete = e => {
      e.preventDefault()

      const postDelete = async () => {
         try {
            const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
               method: 'DELETE',
               headers:{
                  'Authorization': `Bearer ${token}`
               }
            })
            if(response.status === 401 && response.statusText === 'Unauthorized') {
               // No esta logeado
               router.push('login')
            }

            const { data, message} = await response.json()

            if (data && message === 'Product delete') {
               setConfirmationDelete(false)
               // Recargar el componente cada vez que se elimna un producto
               setDeleted(deleted ? false : true)
               // Se eliminó existosamente
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