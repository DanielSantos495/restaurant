import React, { createContext, useState } from 'react'

export const Context = createContext();

const Provider = ({ children }) => {

   const windowNotUndefined = (typeof window !== 'undefined')
   // Estado
   const [isAuth, setIsAuth] = useState(() => {
      return windowNotUndefined && window.sessionStorage.getItem('token')
   })
   const [typeProductSelectionValidate, setTypeProductSelectionValidate] = useState(false)

   // Value del Provider
   const value = {
      isAuth,
      activeAuth: token => {
         setIsAuth(true)
         windowNotUndefined && window.sessionStorage.setItem('token', token)
      },
      typeProductSelectionValidate,
      choiseType: choise => {
         setTypeProductSelectionValidate(choise)
      },
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