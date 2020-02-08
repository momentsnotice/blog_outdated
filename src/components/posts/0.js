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
        <Subtitle>
          What To Expect:
        </Subtitle>
        <SuppText>
          TL;DR: This is kinda a supplementary addition to this post regarding progress so far in terms of actual implementation. I guess you can think of it as a sneak-peek so to speak as well as a behind-the-scenes.
        </SuppText>
        <SuppText>
          (just as a disclaimer, things might get very, perhaps overly, detailed)
        </SuppText>
        <MiniTitle>
          Machine Learning
        </MiniTitle>
        <SuppText>
          I've mentioned "machine learning algorithms" multiple times, but this is extremely broad and not very detailed. To be more specific, I want use a NEAT genetic algorithm. NEAT, or NeuroEvolution of Augmenting Topologies, is an extremely interesting genetic algorithm implementation. Skipping over the details, NEAT can help our genetic algorithm find the (locally) ideal neural network topology for the problem at hand through the use of a clever system of topological evolution, classification, and record keeping. Because of this, NEAT usually learns faster than a standard genetic algorithm.
        </SuppText>
        <SuppText>
          Regardless of what form of machine learning we're talking about, there are certain implementation details that are important. For me, I've found that it's usually important to start small and build up. Because of this, rather than immediately trying to tackle the Seoul Metro as a whole, I'm testing with small, fixed maps with random initialization. This will then be used for scaling up to the Seoul Metro.
        </SuppText>
        <MiniTitle>
          Data Encoding
        </MiniTitle>
        <SuppText>
          For my NEAT algorithm to work at all, it of course has to have a set of inputs and outputs. Regarding inputs, I've decided to, at least in initial testing, feed in what is effectively an adjacency matrix on top of information denoting the "current station" and "current line" as well as a bias node. What may initially seem like a glaring oversight is that there is absolutely no input data regarding the actual coordinates of the stations; however, this isn't necessary. Because the algorithm will only ever work with a single map in any given training session, the station locations will always be the same. That means that this information will, in a round-about way, be implicitly conveyed via fitness results. In terms of outputs, the algorithm will return a choice for the destination station and a decision on whether or not to start drawing the next line (once the line count, not to be confused with connection/edge count, reaches a cap, the graph will be evaluated). This should result in our algorithm outputting a subway system with multiple subway lines.
        </SuppText>
        <SuppText>
          Feeding in an adjacency matrix as a part of the input is a bit troublesome. The Seoul Metro (which in terms of my data collection is limited to lines 1~9) has 434 stations. That means that if the adjacency matrix is flattened into an array for input, it'll result in a 434<sup>2</sup> + 2 (with the +2 representing current node and current line) or 188,359 dimensional problem which would therefore ideally have a generational population size of 1,883,590. That's an absurdly large number that would be very hard to work with. Furthermore, based on cursory tests, python (and/or my computer itself) seemed to be computationally overloaded when trying to generate a network that could take 188,359 inputs. Furthermore, for the output, the network has to choose which node to travel to next, so it would have to have 434 + 1 (with the +1 representing the boolean switch for moving to the next line) or 435 outputs. Not only would such a massive network be difficult to generate, but it would be even harder to fire the network and breed/mutate it. To cut down size, since an adjacency matrix is symmetrical, by removing redundancies as well as self-connections, we can go from representing our connection input data as 434<sup>2</sup> to <sub>434</sub>C<sub>2</sub>, or 188,359 to 93,961. This is still huge and computationally impossible for me to work with. Despite that, this idea can be applied to my small-scale tests involving 10 inputs rather than 434. For 434 inputs, I think a possible idea would be to give the coordinates for the current node as well as the coordinates for the n closest nodes and have it choose which node to move to. Although this wouldn't necessarily result in a globally optimal outcome, some effectivity has to be traded in order to make this problem computable in an efficient manner. Ideally, however, I'll find some more compact way to encode data for a graph with 434 vertices so that I can have a better solution.
        </SuppText>
        <MiniTitle>
          Small-Scale Tests
        </MiniTitle>
        <SuppText>
          Regarding initial testing, I decided to go with a map containing 10 points with random (but fixed) coordinates that have components distributed in the range [0, 1]. Furthermore, in terms of maximum lines, although the theoretical maximum line count for 10 stations is <sub>10</sub>C<sub>2</sub> or 45, that would mean that every single station has a unique line meant solely for connecting to every other station (a complete graph where each edge is its own line). Despite this, (what I'm considering to be) the Seoul Metro has 434 stops and 9 lines. 9:434 is a way smaller ratio than 45:10. Because of this, I decided to (somewhat arbitrarily) set a maximum line count of 5 for my 10 station system (and honestly, a 5:10 ratio is still extremely generous).
        </SuppText>
        <SuppText>
          In terms of determining the INP and NTP values for my small map, I worked with a series of assumptions. First, although INP and NTP fluctuate with station service potential, there has to be some base INP and base NTP value to scale. There were a few steps involved in determining these base values (and as a fair warning, I completely ignoring sig figs). Based on cursory research, the average subway car operates at 50 kmph. If I assume that each intermediate station slows down a trip between stations a and b by 40 seconds and that each transfer slows down the same trip by 3 minutes, that means that using our 50 kmph value, a reasonable base INP should be equivalent to 0.6 km and that a reasonable base NTP should be equivalent to 2.5 km. However, with the test stations being imaginary, when they had coordinates initialized in the range [0, 1], there was no context for the scale of the map. This means that we can't just have an INP of 0.6 and NTP of 2.5 because 1 unit in our map isn't equivalent to 1 km. To solve this, I (somewhat boldly) assumed that each station serviced a similarly sized area on average. Assuming that the distance covered by the initialization range of 0 to 1 along either the horizontal or vertical axis is equal to some distance <i>u</i>, the total area of the map would equal to <i>u<sup>2</sup></i>. This means that the average area serviced by any given station would be <i>u<sup>2</sup>/10</i>. That means that if we were to arrange our stations in a lattice, the average distance from one station to the immediately surrounding stations would equal <i>(u/(10**0.5)) + (u/(5**0.5))/2</i>. In the Seoul Metro, it takes an average of ~2.5 minutes to get from one station to its neighbor. Working with previous numbers, this means that the average distance between any two neighboring stations is ~2.08 km. Setting <i>(u/(10**0.5)) + (u/(5**0.5))/2</i> equal to 2.08 km, we can see that u is ~ 5.5 km. Therefore, our INP and NTP get scaled accordingly resulting in an INP of 0.1 and NTP of 0.45. Maybe it doesn't make sense to use the value of 2.5 minutes between neighboring stations (and therefore 0.1 for our INP and 0.45 for our NTP) because our test metro might not have the same density as Seoul's metro. However, these values are good enough and using an average time of 2.5 minutes anchors our imaginary maps, at least somewhat, in reality.
        </SuppText>
        <SuppText>
          Far more arbitrarily, the service potentials assigned to each of the 10 stations were randomly sampled from a normal distribution where μ was set to 0.75 and σ was set to 0.15. This could probably use fine-tuning at some other point in time (which would probably be important considering that it really is this service potential value that shapes the ultimate characteristics of our output graph).
        </SuppText>
        <MiniTitle>
          Seoul Metro Data Collection
        </MiniTitle>
        <SuppText>
          In the long run, data regarding Seoul's metro is required so that initial tests can be applied with real data for a real system. To create a proper layout for a new Seoul subway system, the actual locations of each station had to be found. It's entirely true that for a fully optimized system, the actual locations of stations themselves should be moved as well, but for our purposes, we'll just assume that it's only the paths that will be needing changing.
        </SuppText>
        <SuppText>
          Since it's only lines 1~9 that concern this project, by drawing from a list of stations in those lines on Wikipedia, each station's latitude and longitude was found with the help of Google Maps. This was compiled into a .csv file which we then converted into {'<'}x, y{'>'} coordinates via the Universal Transverse Mercator coordinate system. All of South Korea is within one UTM zone, so I hope that distortion is minimal (although there will, of course, be distortion). Either way, each station's new coordinates were compiled into a list and normalized within the range [0, 1].
        </SuppText>
        <SmallImg src={require('./utm_map.png')} />
        <Caption>
          Using the coordinates we obtained, this is what we ended up with.
        </Caption>
        <SuppText>
          The other information that is necessary to create an efficient layout is to know each station's individual "importance." I was able to find an official spreadsheet with the average throughput of each station each hour throughout the year; however, the data hasn't been scraped yet.
        </SuppText>
        <SuppText>
          That concludes all the progress so far in terms of actual implementation. Any and all suggestions are welcome. I hope you found this at least somewhat interesting, and stay tuned for the next installment of this series.
        </SuppText>
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
