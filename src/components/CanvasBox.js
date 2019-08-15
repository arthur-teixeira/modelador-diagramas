import React from 'react';
import { Button, Container } from './styled'
import SideMenu from './SideMenu'
import Toggle from './Toggle'
import Diagram from './Diagram'
import { Link } from 'react-router-dom'
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
               {/* <Button onClick={toggle}>{on ? 'fechar' : 'abrir'} menu</Button>
               <Button><Link to="/">Voltar ao início</Link></Button> */}
            </>
         )} />
         <Diagram />
      </Container>
   )
}