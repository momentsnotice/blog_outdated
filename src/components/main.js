import React from 'react';
import styled from 'styled-components';
import Post0 from './posts/0';

class App extends React.Component {
  render() {
    var entries = [
      // <Post0 />,
      // <StyledDivider />,
      <Post0 key={0}/>
    ]

    return (
      <Main>
        <Stopper />
        {entries}
        <Stopper />
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  min-width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  overflow-y: scroll;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scrollbar-width: none;
  background-color: #f7f6f2;
`;

const Stopper = styled.div`
  height: 30px;
`;

const StyledDivider = styled.hr`
  border-top: 1px dashed #a5a7b0;
  border-bottom: 0px
  margin-top: 32px;
`;
