import React from 'react'
import { Header, Navbar, FlexWrapper, FlexLi } from '../styled'

export default () => {
   return (
      <>
         <Navbar>
            <h1 style={{ alignSelf: 'center' }}>Modelador</h1>
            <FlexWrapper>
               <FlexLi>
                  Logout
               </FlexLi>
               <FlexLi>
                  Novo diagrama
               </FlexLi>
            </FlexWrapper>
         </Navbar>
         <Header>
            <h1>Bem vindo, (username)</h1>
            <br />
            <h2>Seus diagramas</h2>
         </Header>
      </>
   )
}