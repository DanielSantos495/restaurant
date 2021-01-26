import React, { createContext, useState } from 'react'

export const Context = createContext();

const Provider = ({ children }) => {

   const windowNotUndefined = (typeof window !== 'undefined')
   // Estado
   const [isAuth, setIsAuth] = useState(() => {
      return windowNotUndefined && window.sessionStorage.getItem('token')
   })
   const [typeProductSelectionValidate, setTypeProductSelectionValidate] = useState(false)
   const [manageAction, setAction] = useState('')
   const [activeEdit, setActiveEdit] = useState(false)
   const [productForEdit, setProduct] = useState('')
   const [productChange, setChange] = useState(1)



   // Value del Provider
   const value = {
      isAuth,
      activeAuth: token => {
         setIsAuth(true)
         windowNotUndefined && window.sessionStorage.setItem('token', token)
      },
      removeAuth: () => {
         setIsAuth(false)
         windowNotUndefined && window.sessionStorage.removeItem('token')
      },
      typeProductSelectionValidate,
      choiseType: choise => {
         setTypeProductSelectionValidate(choise)
      },
      manageAction,
      setManageAction: action => {
         setAction(action)
      },
      // CRUD producto
      activeEdit,
      setEdit: active => {
         setActiveEdit(active)
      },
      productForEdit,
      setProductForEdit: product =>{
         setProduct(product)
      },
      productChange,
      setProductChange: () => {
         setChange(productChange ? 0 : 1)
      }
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}

export default {
   Provider,
   Consumer: Context.Consumer
};