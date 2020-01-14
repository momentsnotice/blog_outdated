import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
          Seoul Metro System (Test Excerpt)
        </EntryTitle>
        <Date>
          Publishing Date: Jan. 14, 2020
        </Date>
        <Subtitle>
          Introduction
        </Subtitle>
        <MainText>
          Essentially, optimizing Seoul’s subway system is a matter of definition. Through neuroevolution, so long as a proper fitness function is defined, a neural network can learn to output an “efficient” subway system based on an input of the coordinates of each station to include. Since almost all subways are fundamentally similar in their mode of operation, a method defining efficiency for Seoul’s subway system can be applied to virtually any other subway system.
        </MainText>
        <Subtitle>
          Layout Efficiency
        </Subtitle>
        <MainText>
          First, when it comes to layout efficiency, we are assuming fixed station locations (rather than optimizing the efficiency of station location and subway topology, we are only optimizing subway topology based on existing locations). Without loss of generality, we cite three primary factors of concern when it comes to layout efficiency for any given transport system: cost, time, and service potential.
          <br /><br />
          Cost is, in essence, distance. Distance matters since a technically ideal network (taking into account only cost) would be the generalized form of (a variant of) the euclidean Steiner tree problem. Therefore, making the most cost-effective system would require minimizing the total euclidean distance of the system’s lines.
          <br /><br />
          Time holds importance since a primary purpose of transport is to travel between locations, and to do so quickly. In order to improve time-efficiency, the goal would be to have as direct a path as possible between any two stations. This would mean minimizing distance, number of stations, and transfers between any two stations (rather than in the system as a whole as was the case with cost-optimization).
          <br /><br />
          Service potential is a measurement of the “importance” of any given station. One way of quantifying this is through traffic. Stations that have more traffic than others probably require more attention, and for general efficiency, it is necessary to balance time and distance based on where a station lies on the service potential gradient. Stations with lower service potential require more cost-optimization while stations with higher service potential require more time-optimization.
        </MainText>
      </Post>
    );
  }
}

export default App;

const Post = styled.div`
  width: 80vw;
  display: inline-block;
`;

const Date = styled.h1`
  color: #00000088;
  font-size: 12px;
  font-weight: 300;
  margin-top: -8px;
  margin-bottom: 20px;
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
`;

const MainText = styled.h1`
  color: #000000b5;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;
