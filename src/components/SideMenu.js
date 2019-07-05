import React from 'react'
import { listItem } from './styled'

const SideMenu = props => {
   const menuItems = ['node in', 'node out']

   return (
      <div>
         <ul>
            {menuItems.map((item, index) => (
               <li key={index}>
                  {item}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SideMenu
