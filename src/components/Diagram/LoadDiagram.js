import React, { Component } from 'react'
import api from '../../api/axios'
import { Redirect } from 'react-router-dom'
import {
   DiagramWidget,
   DiagramEngine,
   DefaultNodeFactory,
   DefaultLinkFactory,
   DiagramModel,
   DefaultNodeInstanceFactory,
   DefaultPortInstanceFactory,
   LinkInstanceFactory
} from 'storm-react-diagrams';
import DiagramContext from './DiagramContext'

export default class LoadDiagram extends Component {
   state = {
      diagramData: {},
      shouldRedirect: false
   }

   static contextType = DiagramContext



   async componentWillMount() {
      const response = await api.post("diagrams/getOne", { diagramID: this.context.diagramId })
      const diagramData = response.data.diagram.diagram.data
      this.setState({ diagramData })
      console.log(this.state.diagramData)

      this.engine = new DiagramEngine();
      this.engine.registerNodeFactory(new DefaultNodeFactory());
      this.engine.registerLinkFactory(new DefaultLinkFactory());

      this.engine.registerInstanceFactory(new DefaultNodeInstanceFactory());
      this.engine.registerInstanceFactory(new DefaultPortInstanceFactory());
      this.engine.registerInstanceFactory(new LinkInstanceFactory());

      //deserialize the model
      var model2 = new DiagramModel();
      model2.deSerializeDiagram(JSON.parse(diagramData), this.engine);
      this.engine.setDiagramModel(model2);
   }

   render() {
      return (
         <>
            {this.state.shouldRedirect ? <Redirect to="/" /> : <DiagramWidget diagramEngine={this.engine} />}
         </>
      )
   }
}
