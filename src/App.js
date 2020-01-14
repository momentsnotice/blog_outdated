import React from 'react';
import styled from 'styled-components';

import Home from './components/home';
import Main from './components/main';
import About from './components/about';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    }
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ w: window.innerWidth });
    this.setState({ h: window.innerHeight });
  }

  render() {
    return (
      <Container w={this.state.w} h={this.state.h}>
        <Home h={this.state.h}/>
        <Main />
        <About />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: ${props => props.w};
  height: ${props => props.h}px;
  overflow-x: scroll;
  overflow-y: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none!important;
    height: 0;
    width: 0;
    background-color: transparent;
   }
`;
