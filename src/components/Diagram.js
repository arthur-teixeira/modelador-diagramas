import {
   DiagramEngine,
   DiagramModel,
   DefaultNodeModel,
   DiagramWidget,
} from "storm-react-diagrams";
import React from 'react'

import 'storm-react-diagrams/dist/style.min.css'

export default () => {
   var engine = new DiagramEngine();
   engine.installDefaultFactories();

   var model = new DiagramModel();

   var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
   let port1 = node1.addOutPort("Out");
   node1.setPosition(100, 100);

   var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
   let port2 = node2.addInPort("In");
   node2.setPosition(400, 100);

   let link1 = port1.link(port2);
   link1.addLabel("Hello World!");

   model.addAll(node1, node2, link1);

   engine.setDiagramModel(model);

   return <DiagramWidget className="srd-canvas" diagramEngine={engine} />;
};