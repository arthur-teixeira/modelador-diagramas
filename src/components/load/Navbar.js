import React from 'react'
import { Navbar, FlexLi, FlexWrapper } from '../styled'
import { Link } from 'react-router-dom'

export default props => {
   return (
      <Navbar>
         <Link to="/" style={{ alignSelf: 'center', fontSize: "2rem", fontWeight: "bold" }}>Modelador</Link>
         <FlexWrapper>
            <FlexLi onClick={props.toggle}>
               {props.buttonName}
            </FlexLi>
            <FlexLi>
               <Link to="/canvas">
                  Novo diagrama
               </Link>
            </FlexLi>
         </FlexWrapper>
      </Navbar>
   )
}
