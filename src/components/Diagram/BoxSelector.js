import React from 'react'
import CanvasBox from './CanvasBox'
import Diagram from './Diagram'
import LoadDiagram from './LoadDiagram'

export const Canvas = () => {
   return (
      <CanvasBox>
         <Diagram />
      </CanvasBox>
   )
}

export const loadCanvas = () => {
   return (
      <CanvasBox>
         <LoadDiagram />
      </CanvasBox>
   )
}


