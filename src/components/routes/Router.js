import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import LoadPage from '../load/LoadPage'

import { Canvas, loadCanvas } from '../Diagram/BoxSelector'

const Router = () => {
   return (
      <BrowserRouter>
         <Route path="/" exact component={LoadPage} />
         <Route exact path="/newCanvas" component={Canvas} />
         <Route path="/canvas/:diagramId" component={loadCanvas} />
      </BrowserRouter>
   );
}

export default Router;
