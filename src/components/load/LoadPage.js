import React, { Component } from 'react'
import api from '../../api/axios'
import { Card, GridWrapper, Container } from '../styled'
import LoadHeader from './LoadHeader'
import { Link } from 'react-router-dom'


export default class LoadPage extends Component {

   state = {
      data: []
   }

   async componentDidMount() {
      const response = await api.get('diagrams')
      const data = response.data
      console.log(data)
      this.setState({ data })
   }

   render() {
      return (
         <Container>
            <LoadHeader />
            <GridWrapper>
               {this.state.data.map((item, i) => (
                  <Link to="/canvas">
                     <Card key={i}>
                        <h3>{item.diagram.name}</h3 >
                     </Card>
                  </Link>
               ))}
            </GridWrapper>
         </Container>
      )
   }
}
