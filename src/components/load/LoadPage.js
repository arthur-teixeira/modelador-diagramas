import React, { Component } from 'react'
import api from '../../api/axios'
import { Card, GridWrapper, Container, Button } from '../styled'
import LoadHeader from './LoadHeader'
import { Link } from 'react-router-dom'


export default class LoadPage extends Component {

   state = {
      data: []
   }

   async getStateFromAPI() {
      const response = await api.get("listar")
      const data = response.data
      this.setState({ data });
   }

   async componentDidMount() {
      await this.getStateFromAPI()
   }

   handleDelete = async id => {
      const data = await api.delete(`remover/${id}`);
      await this.getStateFromAPI();
   }

   render() {
      return (
         <Container>
            <LoadHeader />
            <GridWrapper>
               {this.state.data.map((item) => (
                  <>
                     <Card>
                        <Link key={item._id} to={`/canvas/${item._id}`}>
                           <h3>Diagrama</h3>
                        </Link>
                        <Button onClick={() => this.handleDelete(item._id)}>Deletar</Button>
                     </Card>
                  </>
               ))}
            </GridWrapper>
         </Container>
      )
   }
}
