import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Holder>
        <Stopper />
        <Title>
          About This Blog
        </Title>
        <Subtitle>
          Authors
        </Subtitle>
        <About>
          Moment's Notice has two authors: Sean Rhee and Francis Park.
          <br /><br />
          Sean is a senior at the Yongsan International School of Seoul (YISS). He has an interest in a wide range of subjects from computer science, to physics, to international relations, to engineering, to music theory/composition. He likes running and is on both cross country and track and field at YISS.
          <br /><br />
          Francis is also a senior at YISS. He is an avid Jazz & Hip-Hop listener. He enjoys playing (right-bench or the occasional start) for his school's varsity boys soccer team. Francis' interests include mathematics (number theory, discrete mathematics, time series), atmospheric sciences, unsupervised learning, and writing short stories. His friends refer to him as 'chunky'.
        </About>
        <br />
        <Subtitle>
          "Moment's Notice"
        </Subtitle>
        <About>
          This blog's title was inspired by John Coltrane's <i>Moment's Notice</i>. As it suggests, the title for this blog was thought of on a moment's notice. Similarly, we plan on posting whenever we feel is suitable on topics that capture our curiosity. This is a relatively STEM-oriented blog, but its contents won't necessarily be limited to STEM.
        </About>
        <br />
        <Subtitle>
          Purpose
        </Subtitle>
        <About>
          While the purpose of this blog is to act as a forum for sharing ideas (and getting feedback regarding these ideas), it's also just for fun. We hope other people find the concepts and areas we explore to be interesting and worth delving further into.
        </About>
        <br />
        <Subtitle>
          Contact
        </Subtitle>
        <About>
          email: momentsnoticecontact@gmail.com
          <br /><br />
          **We'll try to respond to everything, but unless this blog by some miracle takes off, chances are we won't be checking this inbox super often.
        </About>
        <Stopper />
      </Holder>
    );
  }
}

export default App;

const Holder = styled.div`
  min-width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  overflow-y: scroll;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scrollbar-width: none;
  background: linear-gradient(90deg, rgba(165,167,176,1) 0%, rgba(247,246,242,1) 0.1%, rgba(247,246,242,1) 100%);;
`;

const Stopper = styled.div`
  height: 30px;
`;

const Title = styled.h1`
  color: black;
  font-size: 38px;
  font-weight: 400;
`;

const Subtitle = styled.h1`
  color: black;
  font-size: 26px;
  font-weight: 500;
`;

const About = styled.h1`
  color: #000000b5;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;
