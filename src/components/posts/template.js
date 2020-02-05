import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
        </EntryTitle>
        <Date>
        </Date>
        <MainText>
        </MainText>
      </Post>
    );
  }
}

export default App;

const Post = styled.div`
  width: 100%;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SmallImg = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Date = styled.h1`
  color: #00000088;
  font-size: 12px;
  font-weight: 300;
  margin-top: -12px;
  margin-bottom: 26px;
`;

const EntryTitle = styled.h1`
  color: black;
  font-size: 38px;
  font-weight: 400;
`;

const Subtitle = styled.h1`
  color: black;
  font-size: 26px;
  font-weight: 500;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
`;

const Caption = styled.p`
  color: #000000b5;
  font-size: 12px;
  font-weight: 200;
  margin-top: 0px;
  text-align: center;
`;

const MainText = styled.h1`
  color: #000000b5;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-left: 10%;
  margin-right: 10%;
`;
