import React from 'react';
import styled, { keyframes } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <TopBar>
        <BlogTitle>
          Moment's Notice
        </BlogTitle>
        <Author>
          By Francis Park and Sean Rhee
        </Author>
        <Note>
          Home ={'>'} Blog ={'>'} About
        </Note>
        <Note>
          (scroll right)
        </Note>
      </TopBar>
    );
  }
}

export default App;

const Fade = keyframes`
  0% { color: #f2f2f200; }
  40% { color: #f2f2f200; }
  100% { color: #f2f2f255; }
`;

const TopBar = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);
  color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Note = styled.p`
  font-size: 12px;
  color: #f2f2f255;
  animation: ${Fade} 2s linear 1;
  margin-top: -10px;
`;

const BlogTitle = styled.h1`
  color: #f2f2f2;
  font-size: 34px;
  font-weight: 300;
  letter-spacing: 4px;
`;

const Author = styled.h1`
  margin-top: -14px;
  color: #f2f2f2aa;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 26px;
`;

/*
const Menu = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.a`
  padding-top: 9px;
  flex: 1;
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  vertical-align: center;
  text-decoration: none;
`;

const Filler = styled.div`
  flex: 4;
`;

const Everything = styled.div`
  width: 80vw;
  padding-left: 10%;
`;
*/
