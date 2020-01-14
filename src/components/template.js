import React from 'react';
import styled, { keyframes } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Main>
        <EntryTitle>
          Title
        </EntryTitle>
        <MainText>
          Contents
        </MainText>
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  min-height: 100vh;
  min-width: 80vw;
  padding-left: 10%;
  padding-right: 10%;
  overflow-y: scroll;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scrollbar-width: none;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const EntryTitle = styled.h1`
  color: black;
  font-size: 38px;
  font-weight: 400;
`;

const MainText = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 200;
`;
