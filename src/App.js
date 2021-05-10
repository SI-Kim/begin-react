import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontsize: 24,
        padding: '1rem'
    }

  return (
      <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"></Hello>
      </Wrapper>
  );
}

export default App;