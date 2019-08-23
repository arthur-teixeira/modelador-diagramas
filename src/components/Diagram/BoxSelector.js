import React from 'react'
import CanvasBox from './CanvasBox'
import Diagram from './Diagram'
import LoadDiagram from './LoadDiagram'
import { DiagramProvider } from './DiagramContext'

export const Canvas = () => {
   return (
      <CanvasBox>
         <Diagram />
      </CanvasBox>
   )
}

export const loadCanvas = props => {
   return (
      <CanvasBox>
         <DiagramProvider value={props.match.params}>
            <LoadDiagram />
         </DiagramProvider>
      </CanvasBox>
   )
}


