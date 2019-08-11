import {
   DiagramWidget,
   DiagramEngine,
   DefaultNodeFactory,
   DefaultLinkFactory,
   DefaultNodeModel,
   DefaultPortModel
} from 'storm-react-diagrams';
import React, { Component } from 'react'
import Lodash from 'lodash'

import 'storm-react-diagrams/dist/style.min.css'

class Diagram extends Component {
   componentWillMount() {
      this.engine = new DiagramEngine();
      this.engine.registerNodeFactory(new DefaultNodeFactory());
      this.engine.registerLinkFactory(new DefaultLinkFactory());
   }
   render() {
      return (
         <div className="content">
            <div
               className="diagram-layer"
               onDrop={event => {
                  let data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
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
                  let points = this.engine.getRelativeMousePoint(event);
                  node.x = points.x;
                  node.y = points.y;
                  this.engine.getDiagramModel().addNode(node);
                  this.forceUpdate();
               }}
               onDragOver={e => {
                  e.preventDefault();
               }}
            >
               <DiagramWidget className="srd-canvas" diagramEngine={this.engine} />
            </div>
         </div>
      );
   }
}

export default Diagram