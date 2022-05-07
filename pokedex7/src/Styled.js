import styled, { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const MainDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  width: 100vw;
  /* background-color: #323232; */
  background: rgb(50,50,50);
  background: linear-gradient(180deg, rgba(50,50,50,1) 41%, rgba(122,122,122,1) 100%);
`

export const StyledPokedexEmpty = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: red;
`

export const StyledDivHome = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  min-height: 100vh;
  background-color: white;
`

export const StyledDivCard = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  width: 60%;
  min-height: 100vh;
`