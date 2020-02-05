import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
          Making the Seoul Metro (or any metro) Better || Part 1
        </EntryTitle>
        <Date>
          Written by Sean Rhee || January 14, 2020
        </Date>
        <Image src={require('./subway_map.jpeg')}/>
        <Caption>
          Photo: Seoul Metropolitan Subway Map (Credit: Seoul Metro)
        </Caption>
        <Subtitle>
        </Subtitle>
        <MainText>
          The Seoul metro is considered one of the best in the world. Despite this, it still has various inefficiencies. For me, this is best exemplified by the fact that I can jog home from school faster than if I took subway. Maybe I'm just unlucky, but as great as Seoul's metro is, I can't help but feel like it could be better. But how exactly could one go about improving the metro's efficiency?
        </MainText>
        <MainText>
          First and foremost, there is no concrete definition of what makes a system like a subway efficient. For example, if we represent our subway graphically by creating a vertex for each station, both a complete graph and minimum spanning tree could be argued to be an optimally efficient layout. This is because there are various aspects of a transport network that can determine efficiency with some of these factors being at odds with one another. With that in mind, let's continue.
        </MainText>
        <MainText>
          As far as our definition of efficiency is concerned, there are three primary factors of importance: distance, commuter time, and service potential (which I'll explain).
        </MainText>
        <MainText>
          Distance is obviously important because it wouldn't be feasible to build and maintain lines to and from every station in a system (unless there are like, four stations in total). Thinking back, a distance-optimized topology would resemble a minimum spanning tree.
        </MainText>
        <MainText>
          Commuter time is also obviously important since the reason we use transport in the first place is to get to and from places quickly. Again, thinking back, a commuter time–optimized topology would resemble a complete graph.
        </MainText>
        <MainText>
          Unfortunately, as alluded to earlier, the two metrics of distance and commuter time are essentially in opposition: one can only be improved at the expense of the other. So how can these be balanced? Service potential (as subjectively defined by the user/designer).
        </MainText>
        <MainText>
          Service potential is, in essence, the "importance" of a station. Although this can be determined many ways, the way that we'll be determining this is by creating a list of the average traffic values of every station and normalizing them across some range. The higher the service potential, the more time-optimized that station will be. The lower the service potential, the more distance-optimized that station will be.
        </MainText>
        <MainText>
          Assigning a metro system an efficiency ultimately comes down to relating these three values of distance, commuter time, and service potential in a reasonable, quantifiable way. Using this newly derived efficiency value, we can then train a machine learning algorithm to output metro layouts and grade their fitness. Ultimately, this should result in us receiving a theoretically better map for the Seoul metro. I say theoretically because while improving Seoul's subway is a long-term goal, for the purposes of this post, I'll be focusing more on the methodology and verification of its validity.
        </MainText>
        <Subtitle>
          Method and Reasoning
        </Subtitle>
        <MainText>
          Since a neural network will be the one generating our subway maps, it doesn't matter if we use efficiency or inefficiency when defining fitness for training (maximizing efficiency and minimizing inefficiency should technically be identical). Because of this, we're going to be using an inefficiency metric that our machine learning algorithm will try to minimize for (since it's more intuitive to implement).
        </MainText>
        <MainText>
          To abstractly represent our subway systems, we will be using graphs. Essentially, each graph will be composed of multiple "chains". Each chain will represent an individual subway line. Each vertex in each chain will represent a certain station. The edge connecting any two vertices in a chain  will be weighted according to the real-life euclidean distance between the two stations the vertices represent plus some intermediate node penalty (INP). If the same station is in two or more chains, it will be connected to each of its counterparts via a transfer edge. These transfer edges will be weighted according to some necessary transfer penalty (NTP). INPs and NTPs are assigned in order to incentivize the use of shorter or more time-optimized routes that avoid unnecessary stops and transfers.
        </MainText>
        <SmallImg src={require('./graph_visual.png')}/>
        <Caption>
          A Basic Visualization of How this Graphical Representation Works
        </Caption>
        <MainText>
          Using this graphical representation of a subway system, we can finally obtain our inefficiency metric by iterating through each vertex, weighting the INP and NTP by our vertex's service potential, summing the minimum distances from each node to every other node using an SPF algorithm (such as Dijkstra's algorithm or the Floyd Warshall algorithm), re-weighting each sum based on the start node's service potential, and averaging these weighted sums.
        </MainText>
        <MainText>
          Initially, this entire methodology may seem somewhat contrived, but with some thought, it should actually make a lot of intuitive sense. First, by using a station's traffic as its service potential, we can ensure that "more important" stations are more commuter time–optimized and are more prioritized while the "less important" stations are more distance-optimized and are less prioritized. This is because by weighting INPs and NTPs by service potential, a high service potential would result in the incentivization of visiting fewer stops and making fewer transfers. Additionally, by weighting our sum by service potential, minimizing our weighted sum for "more important" stations will matter more (which makes sense). The opposite applies for stations with low service potential. Also, the reason our abstracted chain representation even works to begin with is because a) if you imagine that our INPs and NTPs in the figure above were of length 0, our chain model would resemble its real-life counterpart and b) if you think about it, the reason it's annoying to have lots of stops or transfers is because in that time, you could otherwise be travelling toward your destination meaning that having a stop or transfer is like having to travel extra distance which is why it makes sense to utilize INPs and NTPs at all. Finally, the reason we average our weighted sum at the end instead of something analogous such as summing our sums is because even though this would have a virtually identical result for our algorithm, by averaging our sums, it could give us a more normalized value across different subway systems (not just Seoul's).
        </MainText>
        <MainText>
          One major problem is it's difficult to analyze the actual importance of certain routes. For example, even though some station, A, and another station, B, might both draw heavy traffic, this doesn't necessitate heavy traffic between A and B. A and B could be two hubs, so to speak, each with their own relatively contained subsystems. Unfortunately, since it's difficult to find data about the importance of actual routes themselves (unless we were to track people individually as they move around in a subway), the next best thing, if you ask me, is to just use station importance based on general traffic.
        </MainText>
        <MainText>
          To summarize, the metric we're using is far from perfect, but its hard to make a perfect metric (and get data required for a perfect metric). Regardless, the method that has been devised to evaluate inefficiency should still be relatively effective as it can account for both distance and commuter time while providing a reasonable way to determine which to give more importance to.
        </MainText>
        <Subtitle>
          Testing
        </Subtitle>
        <MainText>
          To test, I essentially created a random map containing 10 "stations." Each station was then turned into a vertex for a graph of the system. This was a dynamic graph on which a feed-forward NEAT network added edges that it also assigned to a certain line. I limited it's choice in lines to 5 options. This was honestly an arbitrary number; however, based on intuition, I don't think that 6+ lines would add any extra value to a system that only has 10 nodes (the Seoul Metro, with 434 stations, has 9 lines).
        </MainText>
        <Subtitle>
          Data Collection (so far)
        </Subtitle>
        <MainText>
          TL;DR: This is kinda a supplementary addition to this post regarding progress so far in applying this method to the Seoul Metro itself. Data collection regarding the Seoul Metro hasn't been completed yet. Furthermore, a more efficient architecture has to be devised for the neural net due to computational and hardware limitations.
        </MainText>
        <MainText>
          To create a proper layout for a new Seoul subway system, we first need to find the actual locations of each station. It's entirely true that for a fully optimized system, it's also important to consider changing station locations; however, for our purposes, we'll just assume that it's only the paths that will be needing changing.
        </MainText>
        <MainText>
          First, we defined the scope of what constituted the "Seoul subway system." Although it was a somewhat arbitrary decision, we limited what we considered "Seoul's subway" to just lines 1~9.
        </MainText>
        <MainText>
          Following this, drawing from a list of each station in each line on Wikipedia, the latitude and longitude was found for each station with the help of Google Maps. This was compiled into a .csv file which we then converted into {'<'}x, y{'>'} coordinates via the Universal Transverse Mercator coordinate system. All of South Korea is within one UTM zone, so I hope that distortion is minimal (although there will, of course, be distortion). Either way, each station's new coordinates were compiled into a list and normalized within the range [0, 1].
        </MainText>
        <SmallImg src={require('./utm_map.png')}/>
        <Caption>
          Using the coordinates we obtained, this is what we ended up with.
        </Caption>
        <MainText>
          The other information that is necessary to create an efficient layout is to know each station's individual "importance." We were able to find an official spreadsheet with the average throughput of each stations per hour throughout the year; however, we haven't scraped the data yet, but that's okay, because for now, we aren't going to be actually working with the Seoul Metro (maybe that'll be in a part 2 or 3).
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
  font-size: 30px;
  font-weight: 500;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
`;

const Caption = styled.p`
  color: #000000b5;
  font-size: 12px;
  font-weight: 200;
  margin-top: 5px;
  text-align: center;
`;

const MainText = styled.h1`
  color: #000000b5;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-left: 10%;
  margin-right: 10%;
`;
