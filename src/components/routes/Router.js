import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import LoadPage from '../load/LoadPage'

import CanvasBox from '../CanvasBox'

const Router = () => {
   return (
      <BrowserRouter>
         <Route path="/" exact component={LoadPage} />
         <Route exact path="/canvas" component={CanvasBox} />
         <Route path="/canvas/:diagramId" component={CanvasBox} />
      </BrowserRouter>
   );
}

export default Router;
