import React, { Component } from 'react';
import { Container } from './styled'
import SideMenu from './SideMenu'
import Toggle from './Toggle'
import Diagram from './Diagram'
import NavbarComponent from './load/Navbar'
import api from '../api/axios'

export default class CanvasBox extends Component {
   state = {
      diagramData: ''
   }

   async componentDidMount() {
      const { diagramId } = this.props.match.params
      if (diagramId) {
         const response = await api.post("diagrams/getOne", { diagramID: diagramId })
         this.setState({ diagramData: response.data.diagram.diagram })
      }
   }

   render() {
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
            <Diagram serial={this.state.diagramData ? this.state.diagramData : null} />
         </Container>
      )
   }
}



