import React, { Component } from 'react'
import api from '../../api/axios'
import { Card, GridWrapper, Container, Button } from '../styled'
import LoadHeader from './LoadHeader'
import { Link } from 'react-router-dom'


export default class LoadPage extends Component {

   state = {
      data: []
   }

   async componentDidMount() {
      const response = await api.get("listar")
      const data = response.data
      this.setState({ data });
      console.log(this.state.data)
   }

   handleDelete = async (id, e) => {
      const data = await api.delete(`remover/${id}`);
      console.log(data)
   }

   render() {
      return (
         <Container>
            <LoadHeader />
            <GridWrapper>
               {this.state.data.map((item) => (
               <>
                  <Link key={item._id} to={`/canvas/${item._id}`}>
                     <Card>
                        <h3>{item.nome}</h3>
                     </Card>
                  </Link>
                  <Button onClick={e => this.handleDelete(item._id, e)}>Deletar</Button>
               
               </>
               ))}
            </GridWrapper>
         </Container>
      )
   }
}
