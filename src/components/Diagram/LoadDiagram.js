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

export default class LoadDiagram extends Component {

   state = {
      diagramData: {},
      shouldRedirect : false
   }

   async componentDidMount() {
      const response = await api.post("diagrams/getOne", { diagramID: "diagramId" })
      console.log(response)
      if (response.data.erro || !response)
         this.setState({shouldRedirect: true})
      else
         this.setState({ diagramData: response.data.diagram.diagram })
         
      this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());

      this.engine.registerInstanceFactory(new DefaultNodeInstanceFactory());
		this.engine.registerInstanceFactory(new LinkInstanceFactory());
		this.engine.registerInstanceFactory(new DefaultPortInstanceFactory());
      
      const model = new DiagramModel();
      model.deSerializeDiagram(this.state.diagramData, this.engine)
      
      this.engine.setDiagramModel(model);
   }

   render() {
      return (
         <>
            {this.state.shouldRedirect ? <Redirect to="/"/> : <DiagramWidget diagramEngine={this.engine}/>}
         </>
      )
   }
}
