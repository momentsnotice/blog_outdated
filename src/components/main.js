import React from 'react';
import styled from 'styled-components';
import Post0 from './posts/0';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
    console.log('hi')
  }

  render() {
    var entries = [
      // <Post0 />,
      // <StyledDivider />,
      <Post0 />
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

const StyledDivider = styled.hr`
  border-top: 1px dashed #a5a7b0;
  border-bottom: 0px
  margin-top: 32px;
`;
