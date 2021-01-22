import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { Context } from '../../Context'

import { ProductEdit } from './ProductEdit'

export const ProductEditContainer = () => {

   const { productForEdit, setEdit, activeEdit, setProductChange } = useContext(Context)
   const [form, setForm] = useState({
      name: productForEdit.name,
      description: productForEdit.description,
      price: productForEdit.price,
      status: true
   })
   const [loader, setLoader] = useState(false)
   const [nameValidate, setNameValidate] = useState(false)
   const [priceValidate, setPriceValidate] = useState(false)
   const [descriptionValidate, setDescriptionValidate] = useState(false)
   const [updateProduct, setUpdateProduct] = useState(false)
   const token = (typeof window !== 'undefined') && window.sessionStorage.getItem('token')
   const router = useRouter()

   const handleInput = e => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const validateForm = () => {
      let name
      let price
      let description

      if (Object.keys(form.name).length > 0) {
         name = true
         setNameValidate(false)
      } else {
         setNameValidate(true)
      }
      if (Object.keys(form.price).length > 0) {
         price = true
         setPriceValidate(false)
      } else {
         setPriceValidate(true)
      }
      if (Object.keys(form.description).length > 0) {
         description = true
         setDescriptionValidate(false)
      } else {
         setDescriptionValidate(true)
      }
      if (name && price && description) {
         return true
      }
   }

   const handleSubmit = e => {
      e.preventDefault()

      if(validateForm()) {
         const putData = async () => {
            setLoader(true)
            setUpdateProduct(false)
            try {
               const response = await fetch(`http://localhost:3001/api/products/${productForEdit._id}`, {
                  method: 'PUT',
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(form)
               })
               if (response.status === 500) {
                  router.push('login')
               }
               const { data, message } = await response.json()
               if (data && message === 'Product update') {
                  setLoader(false)
                  setUpdateProduct(true)

                  // Se actualiza el componente CardAdmin
                  setProductChange()

                  // Esperamo 1 seg para cerra el modal despues de editar exitosamente
                  const id = setTimeout(() => {
                     setEdit(false)
                  }, 1000)

                  // Si el usuario lo cierra antes limpiamos el timeout
                  if (!activeEdit) clearTimeout(id)
               }
            } catch(err) {
               console.error(err)
            }
         }
         putData()
      }
   }

   return(
      <ProductEdit
         form={form}
         loader={loader}
         nameValidate={nameValidate}
         priceValidate={priceValidate}
         descriptionValidate={descriptionValidate}
         updateProduct={updateProduct}
         handleInput={handleInput}
         handleSubmit={handleSubmit}
      />
   )
}