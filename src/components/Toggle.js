import React, { useState } from 'react';

const Toggle = props => {
   const [on, setOn] = useState(false)
   const handleToggle = () => setOn(!on)

   const { render } = props
   return (
      <>
         {render({
            on,
            toggle: handleToggle
         })}
      </>
   )

}

export default Toggle