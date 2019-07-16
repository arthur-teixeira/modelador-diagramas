import React, { useState } from 'react'
import TrayWidget from './tray/TrayWidget'
import TrayItemWidget from './tray/TrayItemWidget'

const SideMenu = props => {

   const [TrayItems] = useState(
      [
         {
            name: 'Node In',
            type: 'in'
         },
         {
            name: 'Node Out',
            type: 'out'
         },
         {
            name: 'Node In/Out',
            type: 'in/out'
         }
      ]
   )

   return (
      <TrayWidget>
         {TrayItems.map((item, index) => (
            <TrayItemWidget model={{ type: item.type }} name={item.name} key={index} />
         ))}
      </TrayWidget>

   )
}



export default SideMenu

