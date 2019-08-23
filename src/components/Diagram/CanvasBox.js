import React from 'react';
import { Container } from '../styled'
import SideMenu from '../SideMenu'
import Toggle from '../Toggle'
import NavbarComponent from '../load/Navbar'
// import api from '../../api/axios'

export default props => {
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
         {props.children}
      </Container>
   )

}



