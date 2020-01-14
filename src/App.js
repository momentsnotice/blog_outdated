import React from 'react';
import styled from 'styled-components';

import Home from './components/home';
import Main from './components/main';
import About from './components/about';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <About />
          <Home />
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none!important;
    height: 0;
    width: 0;
    background-color: transparent;
   }
`;
