import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Holder>
        <Stopper />
        <Title>
          About Moment's Notice
        </Title>
        <About>
          This is a blog about stuff we (Francis and Sean) find interesting. At the moment, we're both seniors at the Yongsan International School of Seoul, but soon at least one of us is going to be college-bound.
        </About>
        <Stopper />
      </Holder>
    );
  }
}

export default App;

const Holder = styled.div`
  min-height: 100vh;
  min-width: 80vw;
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

const Title = styled.h1`
  color: black;
  font-size: 38px;
  font-weight: 400;
`;

const About = styled.h1`
  color: #000000b5;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;
