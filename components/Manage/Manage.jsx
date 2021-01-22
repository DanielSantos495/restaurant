import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { Context } from '../../Context'

import { LogOut } from '@/components/LogOut/LogOut'

import { Article, ContainerTitle, Button } from './style'

export const Manage = () => {

   const router = useRouter()
   const { setManageAction, manageAction } = useContext(Context)

   const handleButton = e => {

      const action = e.target.innerText

      if (action === 'AGREGAR') {
         router.push('/admin/manage/add')
         setManageAction(action)
      }
      if (action === 'EDITAR')  {
         setManageAction(action)
      }
      if (action === 'ELIMINAR') {
         setManageAction(action)
      }
      if (action === manageAction) {
         setManageAction(null)
      }
   }

   return(
      <Article>
         <LogOut />
         <ContainerTitle>
            <h2>MANEJADOR</h2>
         </ContainerTitle>
         <Button type='button' onClick={handleButton}>
            AGREGAR
         </Button>
         <Button type='button' onClick={handleButton}>
            EDITAR
         </Button>
         <Button type='button' onClick={handleButton}>
            ELIMINAR
         </Button>
      </Article>
   )
}