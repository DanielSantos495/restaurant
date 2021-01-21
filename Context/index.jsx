import React, { createContext, useState } from 'react'

export const Context = createContext();

const Provider = ({ children }) => {
   // Estado
   const [typeProductSelectionValidate, setTypeProductSelectionValidate] = useState(false)

   // Value del Provider
   const value = {
      typeProductSelectionValidate,
      choiseType: choise => {
         setTypeProductSelectionValidate(choise)
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