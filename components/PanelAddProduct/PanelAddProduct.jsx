import React, { useState } from 'react'

import { FormAddProductContainer } from '@/components/FormAddProduct/FormAddProductContainer'
import { SelectAdd } from './SelectAdd'
import { ContainerPanel } from './style'

export const PanelAddProduct = () => {

   const [typeProductSelection, setTypeProductSelection] = useState('')

   const handleButtonType = e => {
      setTypeProductSelection(e.target.innerText)
   }

   return(
      <ContainerPanel>
         <FormAddProductContainer typeProductSelection={typeProductSelection}/>
         <SelectAdd handleButtonType={handleButtonType} />
      </ContainerPanel>
   )
}