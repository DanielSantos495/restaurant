import React from 'react'
import { useRouter } from 'next/router'


import { Article, ContainerTitle, Button } from './style'
// import deleteIcon from 'public/icons/delete.png'

export const Manage = () => {

   const router = useRouter()
   const handleButton = () => {
      router.push('/admin/manage/add')
   }

   return(
      <Article>
         <ContainerTitle>
         <h2>MANEJADOR</h2>
         </ContainerTitle>
         <Button type='button' onClick={handleButton}>
            AGREGAR
         </Button>
         <Button type='button'>
            EDITAR
         </Button>
         <Button type='button'>
            ELIMINAR
         </Button>
      </Article>
   )
}