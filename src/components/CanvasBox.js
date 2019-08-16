import React from 'react';
import { Container } from './styled'
import SideMenu from './SideMenu'
import Toggle from './Toggle'
import Diagram from './Diagram'
import NavbarComponent from './load/Navbar'


export default () => {
   return (
      <Container>
         <Toggle render={({ on, toggle }) => (
            <>
               <NavbarComponent toggle={toggle} buttonName={on ? "fechar menu" : "abrir menu"} />
               {on && (
                  <SideMenu />
               )}
            </>
         )} />
         <Diagram />
      </Container>
   )
}