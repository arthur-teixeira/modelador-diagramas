import styled from 'styled-components'

export const Button = styled.button`
   padding: 5px;
   background-color: #3c3c3c;
   border-radius: 2px;
   margin: 5px;
   color: white;
`

export const Container = styled.div`
   background-color: #1e1e1e;
   height:100vh;
`

export const Card = styled.div`
   background:#3c3c3c;
   color: white;
   padding: 1%;
   border-radius: 5px;
   &:hover {
      transform: scale(1.02);
      transition: 0.2s;
   }
   
   
`

export const GridWrapper = styled.div`
   display:grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 1rem;
   grid-auto-rows: minmax(10vh, auto);
   background: #1e1e1e;
   padding: 1rem;
   
`
