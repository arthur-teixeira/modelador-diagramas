import React from 'react'

const Context = React.createContext();

export default Context
export const DiagramProvider = Context.Provider
export const DiagramConsumer = Context.Consumer