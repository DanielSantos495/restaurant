import React, { useEffect, useState } from 'react'

export const Modal = (props) => {

   const { isActive } = props;

   if (!isActive) return null

   return(
      <div>
         <h1>Modal</h1>
      </div>
   )
}