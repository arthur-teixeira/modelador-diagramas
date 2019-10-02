import {
   DiagramWidget,
   DiagramEngine,
   DefaultNodeFactory,
   DefaultLinkFactory,
   DefaultNodeModel,
   DefaultPortModel,
} from 'storm-react-diagrams';
import React, { Component } from 'react'
import Lodash from 'lodash';
import api from '../../api/axios'
import { Button } from '../styled'


import 'storm-react-diagrams/dist/style.min.css'

class Diagram extends Component {
   componentWillMount() {
      this.engine = new DiagramEngine();
      this.engine.registerNodeFactory(new DefaultNodeFactory());
      this.engine.registerLinkFactory(new DefaultLinkFactory());
   }

   state = {
      serial: {},
      shouldUpdateDiagram: false
   }

   saveDiagram = async e => {
      const data = this.engine.getDiagramModel().serializeDiagram();
      if (this.state.shouldUpdateDiagram) {
         return await api.put('atualizar?update=true', {
            data,
            name: "diagrama"
         })
      }
      await api.post('inserir', {
         data,
         name: "diagrama"
      });
      this.setState({ shouldUpdateDiagram: true })
   }

   handleDrop = e => {
      let data = JSON.parse(e.dataTransfer.getData('storm-diagram-node'));
      let nodesCount = Lodash.keys(this.engine.getDiagramModel().getNodes()).length + 1;
      let node = null;
      if (data.type === 'in') {
         node = new DefaultNodeModel('Node ' + (nodesCount++), '#00c0ff');
         node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
      } else if (data.type === 'out') {
         node = new DefaultNodeModel('Node ' + (nodesCount++), '#c0ff00');
         node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
      } else if (data.type === 'in/out') {
         node = new DefaultNodeModel('Node ' + (nodesCount++), '#c000ff');
         node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
         node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
      }
      let points = this.engine.getRelativeMousePoint(e);
      node.x = points.x;
      node.y = points.y;
      this.engine.getDiagramModel().addNode(node);
      this.forceUpdate();
   }


   render() {
      return (
         <>
            <Button onClick={this.saveDiagram}>Salvar diagrama</Button>
            <div className="content">
               <div
                  className="diagram-layer"
                  onDrop={this.handleDrop}
                  onDragOver={e => {
                     e.preventDefault();
                  }}>
                  <DiagramWidget className="srd-canvas" diagramEngine={this.engine} />
               </div>
            </div>

         </>
      );
   }
}

export default Diagram