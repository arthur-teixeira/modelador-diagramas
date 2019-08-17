import React from 'react'
import { Header } from '../styled'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default () => {
   return (
      <>
         <Navbar />
         <Header>
            <h1>Bem vindo, (username)</h1>
            <br />
            <Link to="/canvas">
               Novo diagrama
            </Link>
            <br />
            <h2>Seus diagramas</h2>
         </Header>
      </>
   )
}