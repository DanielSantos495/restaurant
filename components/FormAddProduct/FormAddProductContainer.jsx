import React, { useState, useContext } from 'react'

import { FormAddProduct } from './FormAddProduct'

import { Context } from '../../Context'

export const FormAddProductContainer = (props) => {

   const {
      typeProductSelection
   } = props
   const [form, setForm] = useState({
      name: '',
      price: '',
      description: '',
      type: typeProductSelection
   })
   const [loader, setLoader] = useState(false)
   const [nameValidate, setNameValidate] = useState(false)
   const [priceValidate, setPriceValidate] = useState(false)
   const [descriptionValidate, setDescriptionValidate] = useState(false)
   const [typeProductSelectionValidate, setTypeProductSelectionValidate] = useState(false)
   const { choiseType } = useContext(Context)

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
   // console.log(validateForm())
   const handleSubmit = e => {
      e.preventDefault()

      if(validateForm()) {
         const postData = async () => {
            setLoader(true)
            try {
               const response = await fetch('', {
                  method: 'POST',
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                  }
               })
               console.log(response)
               const data = await response.json()
               setLoader(false)
               console.log(data)
            } catch(err) {
               console.error(err)
            }
            postData()
         }
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
         handleInput={handleInput}
         handleSubmit={handleSubmit}
      />
   )
}