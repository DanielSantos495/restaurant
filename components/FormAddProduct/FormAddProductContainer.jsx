import React, { useState, useContext } from 'react'

import { FormAddProduct } from './FormAddProduct'

import { Context } from '../../Context'

export const FormAddProductContainer = (props) => {

   const { typeProductSelection } = props
   const [form, setForm] = useState({
      name: '',
      description: '',
      price: '',
      status: true
   })
   const windowNotUndefined = (typeof window !== 'undefined')
   const [loader, setLoader] = useState(false)
   const [nameValidate, setNameValidate] = useState(false)
   const [priceValidate, setPriceValidate] = useState(false)
   const [descriptionValidate, setDescriptionValidate] = useState(false)
   const [typeProductSelectionValidate, setTypeProductSelectionValidate] = useState(false)
   const [createProuct, setCreatedProduct] = useState(false)
   const { choiseType } = useContext(Context)
   const token = windowNotUndefined && window.sessionStorage.getItem('token')

   const handleInput = e => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const formWithType = () => {
      form.type = typeProductSelection.toLowerCase()
   }

   const validateForm = () => {
      let name
      let price
      let description
      let type

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
      if (Object.keys(form.type).length > 0) {
         type = true
         setTypeProductSelectionValidate(false)
         choiseType(false)
      } else {
         setTypeProductSelectionValidate(true)
         choiseType(true)
      }
      if (name && price && description && type) {
         return true
      }
   }
   console.log(form, 'form')
   const handleSubmit = e => {
      // Agregamos el type a form para la creación del producto
      e.preventDefault()
      formWithType()
      if(validateForm()) {
         const postData = async () => {
            console.log('dentro de post data')
            setLoader(true)
            setCreatedProduct(false)
            try {
               const response = await fetch('http://localhost:3001/api/products', {
                  method: 'POST',
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(form)
               })
               const { data, message } = await response.json()
               if (message === 'Product created') {
                  setLoader(false)
                  setCreatedProduct(true)
               }
            } catch(err) {
               console.error(err)
            }
         }
         postData()
      }
   }

   return(
      <FormAddProduct
         form={form}
         loader={loader}
         nameValidate={nameValidate}
         priceValidate={priceValidate}
         descriptionValidate={descriptionValidate}
         typeProductSelectionValidate={typeProductSelectionValidate}
         typeProductSelection={typeProductSelection}
         createProuct={createProuct}
         handleInput={handleInput}
         handleSubmit={handleSubmit}
      />
   )
}