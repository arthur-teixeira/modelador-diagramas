import styled from 'styled-components'

export const Button = styled.button`
   padding: 5px;
   background-color: #3c3c3c;
   border-radius: 2px;
   margin: 5px;
   color: white;
`

export const Container = styled.div`
   background-color:#1e1e1e;
   color: white;
   padding-top:10px;
   margin: auto;
`

export const DiagramContainer = styled(Container)`
   height:90vh;
`


export const Card = styled.div`
   background:#3c3c3c;
   padding: 1%;
   border-radius: 5px;
   &:hover {
      transform: scale(1.02);
      transition: 0.2s;
   }
`

export const Grid = styled.div`
   display:grid;
   grid-auto-rows: minmax(10vh, auto);
   
`
export const GridWrapper = styled(Grid)`
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 1rem;
   padding: 1rem;
`

export const FlexWrapper = styled.ul`
   display:flex;
   align-items: center;
   justify-content: center;
   justify-self: flex-end;
`

export const FlexLi = styled.li`
   padding: 1.2rem
`

export const Header = styled.div`
   padding: 10%;
   display:flex;
   flex-direction: column;
   align-items:center;  
   background: #3c3c3c;
`
export const Navbar = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width: 80%;
   margin: auto;
`