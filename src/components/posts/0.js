import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
          How to make the Seoul Metropolitan Subway (or any subway at that) better (Test Excerpt)
        </EntryTitle>
        <Date>
          Published January 14, 2020
        </Date>
        <Image src={require('./subway_map.jpeg')}/>
        <Caption>
          Photo: Seoul Metropolitan Subway Map (Credit: Seoul Metro)
        </Caption>
        <Subtitle>
          Introduction
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
          Assigning a metro system an efficiency ultimately comes down to relating these three values of distance, commuter time, and service potential in a reasonable, quantifiable way. Using this newly derived efficiency value, we can then train a machine learning algorithm to output metro layouts and grade their fitness. Ultimately, this should result in us receiving a theoretically better map for the Seoul metro.
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
          Using this graphical representation of a subway system, we can finally obtain our inefficiency metric by summing the minimum distances from each node to every other node using an SPF algorithm (such as Dijkstra's algorithm or the Floyd Warshall algorithm), weighting each sum based on the start node's service potential, and averaging these weighted sums.
        </MainText>
        <MainText>
          Initially, this entire methodology may seem somewhat contrived, but with some thought, this metric should actually make a lot of intuitive sense. First of all, in the example provided above, it's easy to see how if all the vertices labeled "2" (the only transfer station depicted) were collapsed and combined our chain model would resemble its real-life counterpart. If the NTPs and INPs had weights of 0, our new chain model would result in a distance-optimized graph (and we'd have a minimum spanning tree). Likewise, if you imagine that the INPs and NTPs were far larger, it would make the extra edge weight drawn from real-life distance trivial thereby making it more important to avoid any stops/transfers than anything else leading to a commuter time–optimized graph (and we'd have a complete graph). Finally, thinking back to earlier, "the higher the service potential, the more time-optimized that station will be. The lower the service potential, the more distance-optimized that station will be." By weighting our sums based on service potential, we fulfill this goal. Imagine if station service potentials were
        </MainText>
        <MainText>
          There are a few alterations that can be made to this formula that might work better depending on the case. For instance, rather than averaging our weighted sums at the end, the sums can, themselves, be summed. To be completely honest, I don't really know which method would actually end up working better and maybe they'd both be essentially identical in effectiveness. Conceptually, there shouldn't really be much of a difference between if an average or summation is used; however, we will go with an average because an average should theoretically give a relatively normalized value across subways with different amounts of stations (at least when compared to a sum).
        </MainText>
        <MainText>
          Additionally, one major problem is it's difficult to analyze the actual importance of certain routes. For example, even though some station, A, and another station, B, might both draw heavy traffic, this doesn't necessitate heavy traffic between A and B. A and B could be two hubs, so to speak, each with their own relatively contained subsystems. Unfortunately, since it's difficult to find data about the importance of actual routes themselves (unless we were to track people individually as they move around in a subway), the next best thing, if you ask me, is to just use station importance based on general traffic.
        </MainText>
        <MainText>
          To summarize, the metric we're using is far from perfect, but its hard to make a perfect metric (and get data required for a perfect metric). Regardless, the method that has been devised to evaluate inefficiency should still be relatively effective as it can account for both distance and commuter time while providing a reasonable way to determine which to give more importance to.
        </MainText>
        <Subtitle>
          Data Collection
        </Subtitle>
        <MainText>
          To create a proper layout for a new Seoul subway system, we first need to find the actual locations of each station. It's entirely true that for a fully optimized system, it's also important to consider changing station locations; however, for our purposes, we'll just assume that it's only the paths that will be needing changing.
        </MainText>
        <MainText>
          First, we defined the scope of what constituted the "Seoul subway system." Although it was a somewhat arbitrary decision, we limited what we considered "Seoul's subway" to just lines 1~9.
        </MainText>
        <MainText>
          Following this, drawing from a list of each station in each line on Wikipedia, the latitude and longitude was found for each station with the help of Google Maps. This was compiled into a .csv file which we then converted into {'<'}x, y{'>'} coordinates via the Universal Transverse Mercator coordinate system. All of South Korea is within one UTM zone, so I hope that distortion is minimal, although there will of course be distortion. Either way, each station's new coordinates were compiled into a list and normalized within the range [0, 1].
        </MainText>
        <SmallImg src={require('./utm_map.png')}/>
        <Caption>
          Using the coordinates we obtained, this is what we ended up with.
        </Caption>
        <MainText>
          The other information that is necessary to create an efficient layout is to know each station's individual "importance." We used data regarding hourly traffic flow throughout the year at each stop in order to calculate each station's average hourly traffic. This worked as our "importance" score.
        </MainText>
        <Subtitle>
          Implementation
        </Subtitle>
        <MainText>
          Using a feed-forward NEAT algorithm, we created various "optimized" outputs. For our algorithm's input we first gave 868 "coordinate" inputs. Because we have 434 stations, to provide 2D coordinate information we added 93961 "connection" inputs which were set to 1 or 0 representing whether or not there was a connection between any two stations (93961 is ₄₃₄C₂).
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
