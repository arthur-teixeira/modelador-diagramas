import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import LoadPage from '../load/LoadPage'

import CanvasBox from '../CanvasBox'

const Router = () => {
   return (
      <BrowserRouter>
         <Route path="/" exact component={LoadPage} />
         <Route path="/canvas" component={CanvasBox} />
      </BrowserRouter>
   );
}

export default Router;
