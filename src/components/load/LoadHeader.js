import React from 'react'
import { Header, FlexWrapper, FlexLi } from '../styled'
import Navbar from './Navbar'

export default () => {
   return (
      <>
         <Navbar />
         <Header>
            <h1>Bem vindo, (username)</h1>
            <br />
            <h2>Seus diagramas</h2>
         </Header>
      </>
   )
}