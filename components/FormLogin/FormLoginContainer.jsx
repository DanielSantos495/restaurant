import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import btoa from 'btoa'

import { FormLogin } from './FormLogin'
import { Context } from '../../Context'

export const FormLoginContainer = () => {

   const [form, setForm] = useState({
      username: '',
      password: ''
   })
   const [loader, setLoader] = useState(false)
   const [usernameValidate, setUsernameValidate] = useState(false)
   const [passwordValidate, setPasswordValidate] = useState(false)
   const { activeAuth } = useContext(Context)
   const router = useRouter()
   const dataLogin = btoa(`${form.username}:${form.password}`);

   const handleInput = e => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const validateForm = () => {
      let email
      let password

      if (Object.keys(form.username).length > 0) {
         email = true
         setUsernameValidate(false)
      } else {
         setUsernameValidate(true)
      }
      if (Object.keys(form.password).length > 0) {
         password = true
         setPasswordValidate(false)
      } else {
         setPasswordValidate(true)
      }
      if (email && password) {
         return true
      }
   }

   const handleSubmit = e => {
      e.preventDefault()
      if(validateForm()) {
         const postData = async () => {
            try {
               setLoader(true)
               const response = await fetch('http://localhost:3001/api/auth/login', {
                  method: 'POST',
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization': `Basic ${dataLogin}`
                  }
               })
               const { data, message } = await response.json()
               setLoader(false)
               if (response.status === 500) {
                  setLoader(false)
                  console.log('resvisar credenciales pdte loader')
               } else if (response.status === 201 && message === 'User logged in') {
                  setLoader(false)
                  activeAuth(data)
                  router.push('/admin/manage')
               }

            } catch(err) {
               console.error(err)
            }
         }

         postData()
      }
   }

   return(
      <FormLogin
         form={form}
         usernameValidate={usernameValidate}
         passwordValidate={passwordValidate}
         loader={loader}
         handleInput={handleInput}
         handleSubmit={handleSubmit}
      />
   )
}