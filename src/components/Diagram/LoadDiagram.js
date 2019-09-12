import React, { Component } from 'react'
import api from '../../api/axios'
import { Textarea, Button } from '../styled'

import DiagramContext from './DiagramContext'



export default class LoadDiagram extends Component {
   state = {
      diagramData: {},
      showData: false,
      dataToShow: ""
   }

   static contextType = DiagramContext

   saveChangesToState = e => {
      this.setState({ diagramData: e.target.value })
   }

   saveChangesToDatabase = async e => {
      const data = await api.put("1", {
         data: this.state.diagramData
      })
      if (data.status === 200) console.log("sucesso")
   }

   async componentDidMount() {
      const response = await api.get("1");
      const diagramData = response.data
      this.setState({ diagramData, showData: true })
   }

   render() {
      return (
         <>
            <Button onClick={this.saveChangesToDatabase}>Salvar alterações</Button>
            {this.state.showData && (
               <Textarea onChange={this.saveChangesToState} defaultValue={JSON.stringify(this.state.diagramData)} />
            )}
         </>
      )
   }

}
