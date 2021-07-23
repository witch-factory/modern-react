import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from "./components/Button";

const AppBlock=styled.div`
  width:512px;
  margin:0 auto;
  margin-top:4rem;
  border:1px solid black;
  padding:1rem;
`;

const ButtonGroup=styled.div`
  &+&{
    margin-top:1rem;
  }
`

function App(){
  return (
    <ThemeProvider
      theme={{
        palette:{
          blue:'blue',
          gray:'gray',
          pink:'pink'
        }
      }}
      >
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>

  )
}

export default App;