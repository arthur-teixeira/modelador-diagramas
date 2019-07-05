import React from 'react';
import { Button, Container } from './styled'
import SideMenu from './SideMenu'
import Toggle from './Toggle'
import Diagram from './Diagram'


export default () => {
   return (
      <Container>
         <Toggle render={({ on, toggle }) => (
            <>
               {on && (
                  <SideMenu />
               )}
               <Button onClick={toggle}>{on ? 'fechar' : 'abrir'} menu</Button>
            </>
         )} />
         <Diagram />
      </Container>
   )
}