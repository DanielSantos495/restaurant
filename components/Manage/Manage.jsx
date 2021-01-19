import React, { useState } from 'react'

import { SelectAdd } from './SelectAdd'

import { Article, ContainerTitle, Button  } from './style'
// import deleteIcon from 'public/icons/delete.png'

export const Manage = () => {

   const [add, setAdd] = useState(false)

   const handleButton = () => {
      if (add) {
         setAdd(false)
      } else {
         setAdd(true)
      }
   }

   return(
      <Article>
         {add
            ? <Button type='button' onClick={handleButton}> ATRAS </Button>
            : <ContainerTitle>
               <h2>MANEJADOR</h2>
               </ContainerTitle>
         }
         {add
            ? <SelectAdd />
            : <>
                  <Button type='button' onClick={handleButton}>
                     AGREGAR
                  </Button>
                  <Button type='button'>
                     EDITAR
                  </Button>
                  <Button type='button'>
                     ELIMINAR
                  </Button>
               </>
         }
      </Article>
   )
}