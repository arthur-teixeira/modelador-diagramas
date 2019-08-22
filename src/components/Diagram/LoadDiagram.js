import React, { Component } from 'react'
import api from '../../api/axios'
import { Redirect } from 'react-router-dom'

export default class LoadDiagram extends Component {

   state = {
      diagramData: {}
   }

   async componentDidMount() {
      const response = await api.post("diagrams/getOne", { diagramID: "diagramId" })
      if (response.data.erro)
         console.log("erro")
      else
         this.setState({ diagramData: response.data.diagram.diagram })
   }

   render() {
      return (
         <div>
            aaaaaaaaa
         </div>
      )
   }
}
