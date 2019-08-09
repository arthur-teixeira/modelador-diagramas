import React, { Component } from 'react'
import api from '../api/axios'
import axios from 'axios'
import { Card, GridWrapper, Container } from './styled'
import LoadHeader from './LoadHeader'


export default class LoadPage extends Component {

   state = {
      data: []
   }

   async componentDidMount() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      const data = response.data
      console.log(data)
      this.setState({ data })
   }

   render() {
      return (
         <>
            <LoadHeader />
            <GridWrapper>
               {this.state.data.map(item => (
                  <Card key={item.id}>
                     <h3>{item.title}</h3 >
                     <p>{item.body}</p>
                  </Card>
               ))}
            </GridWrapper>
         </>
      )
   }
}
