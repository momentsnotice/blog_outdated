import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
          Improving Subway Efficiency—Part One (Draft/Test Excerpt)
        </EntryTitle>
        <Date>
          Written By Sean Rhee || Published Jan. 2020
        </Date>
        <Image src={require('./subway_map.jpeg')} />
        <Caption>
          Photo: Seoul Metropolitan Subway Map (Credit: Seoul Metro)
        </Caption>
        <Subtitle>
          Introduction
        </Subtitle>
        <MainText>
          The Seoul metro is considered one of the best in the world. Despite this, it still has various inefficiencies. For me, this is best seen in the fact that I can jog home from school faster than if I took subway. Maybe I'm just unlucky, but as great as Seoul's metro is, I feel like it can definitely be improved.
        </MainText>
        <MainText>
          So that's essentially the background of this series. The goal is simple: make a better subway layout. Both Francis (co-contributor to Moment's Notice) and I will be trying to tackle this issue (each from a different angle). Personally, I hope to utilize machine learning to generate new maps (whereas Francis will be using a more purely mathematical approach). In this installment, I hope to outline the general methodology through which I will be approaching the problem. And with that, I'd now like to answer the fundamental question of how exactly someone could go about improving the Seoul metro's efficiency (although, as will become clear, this can be applied to all subways more generally).
        </MainText>
        <Subtitle>
          "Efficiency"
        </Subtitle>
        <MainText>
          First and foremost, I think it has to be made clear that there is no concrete definition of what makes a system like a subway necessarily efficient. For example, if we represent our subway graphically by assigning a vertex to each station, both a complete graph and minimum spanning tree could be argued to be an optimally efficient layout. This is because there are various aspects of a transport network that can determine efficiency with some of these factors being at odds with one another. With that in mind, let's look at efficiency a bit more closely.
        </MainText>
        <MainText>
          As far as I'm concerned, there are three primary factors of importance when it comes to efficiency for our subway network: distance, commuter time, and service potential (which I'll explain).
        </MainText>
        <MainText>
          Distance is obviously important because it wouldn't be feasible to build and maintain lines to and from every station in a system (unless there are like, four stations in total). Thinking back, a distance-optimized topology would resemble a minimum spanning tree.
        </MainText>
        <MainText>
          Commuter time is also obviously important since the reason anyone uses transport in the first place is to get to and from places quickly. Again, thinking back, a commuter time–optimized topology would resemble a complete graph.
        </MainText>
        <MainText>
          Unfortunately, as alluded to earlier, the two metrics of distance and commuter time are essentially in opposition: one can only be improved at the expense of the other. So how can these be balanced? Our answer comes in the form of service potential (as subjectively defined by the user/designer).
        </MainText>
        <MainText>
          Service potential is, in essence, the "importance" of a station. Although this can be determined many ways, the way that I've decided to define this is through the creation of a list of the average traffic values of every station and normalizing them across some (arbitrary) range. The higher the service potential, the more time-optimized that station will be. The lower the service potential, the more distance-optimized that station will be.
        </MainText>
        <MainText>
          Assigning a metro system an efficiency ultimately comes down to relating these three values (distance, commuter time, and service potential) in a reasonable, quantifiable, consistent, and repeatable way. We can then train a machine learning algorithm to output metro layouts and grade their fitness by using this newly derived efficiency value. Ultimately, this should result in us receiving a theoretically better map for the Seoul metro.
        </MainText>
        <Subtitle>
          Method and Reasoning
        </Subtitle>
        <MainText>
          Since a neural network will be the one generating our subway maps, it doesn't matter if we use efficiency or inefficiency when defining fitness for training (maximizing efficiency and minimizing inefficiency should be effectively identical). Because of this, an inefficiency metric will be used for the fitness function (since it's more intuitive to implement) with the goal being to minimize this function.
        </MainText>
        <MainText>
          To abstractly represent our subway systems, we will be using weighted undirected graphs, but each graph won't be a direct analogue to the "real-life" layout. Essentially, each graph will be composed of multiple "chains," so to speak. Each chain will represent an individual subway line with each vertex in each chain representing a certain station. The edge connecting any two vertices in a chain will be weighted according to the real-life euclidean distance between the two stations represented by those vertices plus some intermediate node penalty (INP). If the same station is in two or more chains, those chains will be connected at the shared station via a transfer edge. These transfer edges will be weighted according to some necessary transfer penalty (NTP). INPs and NTPs are assigned in order to incentivize the use of shorter or more time-optimized routes that avoid unnecessary stops and transfers.
        </MainText>
        <SmallImg src={require('./graph_visual.png')} />
        <Caption>
          A Basic Visualization of How this Graphical Representation Works
        </Caption>
        <MainText>
          Using this graphical representation of any given subway system, we can finally obtain an inefficiency metric by iterating through each vertex, weighting the INP and NTP by our vertex's service potential (which, yes, means that the graph's edge weights will change as we iterate through stations), summing the minimum distances (found with a shortest path first, or SPF, algorithm such as Dijkstra's algorithm) from the current node to every other node, re-weighting each sum based on the start node's service potential, and averaging these weighted sums.
        </MainText>
        <MainText>
          In English, this is all a bit hard to follow, so to imagine this mathematically, assuming you have <i>s</i> amount of stations with <i>V<sub>i</sub></i> and <i>V<sub>j</sub></i> representing the vertices (or stations) <i>i</i> and <i>j</i> respectively, by using <i>λ<sub>i</sub></i> for the service potential of <i>V<sub>i</sub></i> and some SPF algorithm <i>d(x, y)</i> to find the shortest path between x and y, this formula relates the information from the preceding paragraph:
        </MainText>
        <Eq src={require('./inefficiency_fitness_eq.svg')} />
        <MainText>
          Initially, this entire methodology may seem somewhat contrived, but with some thought, it should actually make a lot of intuitive sense. First, by using a station's traffic as its service potential, we can ensure that "more important" stations are more commuter time–optimized and are more prioritized while the "less important" stations are more distance-optimized and are less prioritized. This is because by weighting INPs and NTPs by service potential, a high service potential would result in the incentivization of visiting fewer stops and making fewer transfers. Additionally, by weighting our sum by service potential, minimizing our weighted sum for "more important" stations will matter more (which makes sense). The opposite applies for stations with low service potential. Also, the reason our abstracted chain representation even works to begin with is because a) if you imagine that our INPs and NTPs in the figure above (which visualizes our graphical representation) were of length 0, our chain model would resemble its real-life counterpart and b) if you think about it, the reason it's annoying to have lots of stops or transfers is because in that time, you could otherwise be travelling toward your destination meaning that having a stop or transfer is like having to travel extra distance which is why it makes sense to utilize INPs and NTPs at all. Finally, the reason we average our weighted sum at the end instead of something analogous such as summing our sums is because even though this would/should have a virtually identical effect on our machine learning algorithm, by averaging our sums, I'd assume that we'd have more normalized (and therefore comparable) values across multiple different subway systems.
        </MainText>
        <MainText>
          One major problem is it's difficult to analyze the actual importance of certain routes. For example, even though some station, A, and another station, B, might both draw heavy traffic, this doesn't necessitate heavy traffic between A and B. A and B could be two hubs, so to speak, each with their own relatively contained subsystems. Unfortunately, since it's difficult to find data about the importance of actual routes themselves (unless we were to track people individually as they move around in a subway), the next best thing, if you ask me, is to just use station importance based on general traffic.
        </MainText>
        <MainText>
          To summarize, the metric we're using is far from perfect, but its hard to make a perfect metric (and get data required for a perfect metric). Regardless, the method that has been devised to evaluate inefficiency should still be relatively effective as it can account for both distance and commuter time while providing a reasonable way to determine which to give more importance to.
        </MainText>
        <Subtitle>
          Summary
        </Subtitle>
        <MainText>
          From what I can tell, Seoul's metro topology isn't fully optimized. With Seoul having one of the best metro systems in the world, I'd assume that a similar statement could be said about almost every other metro system in the world. Because of this, I think it would make sense to devise a way to improve metro topology in general. To do this, I hope to train a machine learning algorithm to minimize an inefficiency metric that accounts for distance, commuter time, and service potential. Although there are certain drawbacks to the method proposed, it should still work relatively well (admittedly, this statement is backed by intuition rather than data). In future installments of this series, I hope to a) test our inefficiency metric on small, randomly generated "subway maps" b) scale this implementation for the actual Seoul Metro c) perhaps input data for other famous metro systems and compare generated maps and (in)efficiencies.
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

const Eq = styled.img`
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  margin-bottom: 8px;
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

const MiniTitle = styled.h1`
  color: black;
  font-size: 26px;
  font-weight: 500;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 30px;
`;

const SuppText = styled.h1`
  color: #000000b5;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-left: 12%;
  margin-right: 13%;
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
