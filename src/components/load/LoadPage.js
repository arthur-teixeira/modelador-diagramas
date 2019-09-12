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
      const response = await api.get()
      const data = response.data
      this.setState({ data });
      console.log(this.state.data)
   }

   render() {
      return (
         <Container>
            <LoadHeader />
            <GridWrapper>
               {this.state.data.map((item) => (
                  <Link key={item.id} to={`/canvas/${item.id}`}>
                     <Card>
                        <h3>{item.title}</h3>
                     </Card>
                  </Link>
               ))}
            </GridWrapper>
         </Container>
      )
   }
}
