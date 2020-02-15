import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Post>
        <EntryTitle>
		       Subway Enhancement Network Analysis – Part one
        </EntryTitle>
        <Date>
		      Written By Francis Park || Published Feb. 2020
        </Date>
      	<Subtitle>
      		Introduction
      	</Subtitle>
        <MainText>
      		Seoul’s Metro system is often praised for its level of convenience, but, as Sean said before, it does not mean that it is perfect by all means. I’ll be taking a different approach from Sean; instead of making efforts to directly produce a network that is improved, I made efforts to create an index that could encapsulate both robustness and efficiency of a metro-network. I titled the cumulative index the <i>Park-Rhee Power Rating</i>, where “power” is a function of <i>robustness</i> and <i>efficiency</i> — more precisely the scaled, gradient sum. This way, the index may guide future topological efforts. The intrinsic value in this is that it seeks to reconcile the often inverse relation between the latter two quantities — as presented in many forms of literature (i.e Peng et al. 2016). 
        </MainText>
      	<MainText>
      	Also, it is important for me to address the fact that I wish to introduce a methodology where one can construct his/her indices for robustness and efficiency after metrics introduced in the standard literature and use it for analysis. Nothing I introduce here is an “answer” to anything, at least not yet, but rather a novel approach. 
      	</MainText>
      	<Subtitle>
      		Terminology
      	</Subtitle>
      	<MainText>
      		I guess, for clarification, I’ll lay out some terminology. 
      	</MainText>
      	<MainText>
      		We denote an arbitrary graph <i>G</i> that consists of <i>N</i> nodes and <i>L</i>  links. In other words, we can conceptualize <i>N</i> as the set of stations (in the Seoul Metro network) and <i>L</i> as the total number of paths or routes.  
      	</MainText>
      	<MainText>
      		It is also important to note we will be dealing with a graph that is undirected and unweighted for the time being.  
      	</MainText>
      	<MainText>
      		We define the <i>Adjacency Matrix</i> as the square n by n matrix (with node set <i>V(G)</i> = {"{"}1,.......n{"}"}) where A<i><sub>ij</sub></i>  = A<i><sub>ij</sub></i>  — indices are “1” when there exists a link between arbitrary nodes i and j and indices are “0” otherwise.
      	</MainText>
      	<MainText>
      		The <i>Eigenvector</i> of matrix A is the vector that remains parallel amidst a span. Mathematically, 
      	</MainText>
          <Eq src={require('./equationsP1/eigen1.svg')} />
      	<MainText>
      		,where lambda is the associated <i>Eigenvalue</i>. After factoring and tracing, the statement below follows
      	</MainText>
      		<Eq src={require('./equationsP1/eigen2.svg')} />
      	<MainText>
      In this document (and others in relation to this post), we will refer to the tracing <i>(tr)</i> as <i>diagonalization</i>. Mathematically,
      	</MainText>
		<Eq src={require('./equationsP1/eigen3.svg')} />
	<MainText>
		<i>tr(A)</i> computes the sum of the eigenvalues of <i>A</i>, each taking multiplicity (divisible power) from roots of <i>det(A - Iv)</i> = 0. 
	</MainText>
	<MainText>
	Lastly, the <i>Laplacian Matrix</i>. But since Laplacian involves the degree matrix, we will first define “degree”. A <i>degree</i> of a node <i>i</i> simply refers to the number of edges incident to that node (number of connections).
	</MainText>
	<MainText>
	Put simply, the Laplacian Matrix <i>L(G) = D(G) - A(G)</i>, where <i>D(G)</i> refers to the degree matrix and <i>A(G)</i> refers to the adjacency matrix of network <i>G</i>.
          </MainText>
          <MainText>
	Another important graphical metric I want to introduce is hop count. In this document, we will refer to the hop count as the minimum value within the set that contains all possible link paths that connect two stations (nodes). 
	</MainText>
          <MainText>
	All denotations of <i>N</i> refer to a metro system’s total number of stations. We make this mention now as it is often involved (in the denominator) for the normalization of our chosen metrics. Also, all denotations of <i>L</i> refer to a metro system’s total pathways (links).
	</MainText>
	<Subtitle>
		Robustness
	</Subtitle>
	<MainText>
	What exactly is robustness? To deem something “robust” is often hard to define axiomatically (especially in academia); let alone grasp it. Yet, I believe, in context, it is rather intuitive.
	</MainText>
	<MainText>
	In a metro-transport network, we can equate robustness to resilience — we wish to assess a topology’s ability to cope with worms, service faults, and other challenges. 
	</MainText>
	<MainText>
	To wit, we want to capture how well a graph can cope when routes (links) or stations (nodes) fail. For example, when one link fails, a graph is deemed more robust according to the number of alternative routes it has to the given node. 
	</MainText>
	<MainText>
	It is also important to note that this is a custom construction. Say, for example, we wished to assess the robustness of an epidemiological network (something I probably will post later). The metrics involved within its cumulative robustness, I presume, will differ slightly, maybe even completely, from the one below. 
	</MainText>
		<Eq src={require('./equationsP1/Robustness.svg')} />
	<MainText>
	That being said, our cumulative measure of Robustness, as displayed above, is the sum of three components. We wanted to make sure that our index could capture the proper tolerance of any metro-network, which should assess the “survivability” and the disruption tolerance of the topology itself. 
	</MainText>
		<Eq src={require('./equationsP1/avgDegree.svg')} />
	<MainText>
	E*[D] denotes the average (normalized) degree of node (in this case station) <i>s<sub>i</sub></i>. A higher average degree implies more connections — implying a network that is more robust. Another alternative degree related examination involves degree distribution analysis. For example, if a network’s degree distribution resembles that of the power law it shows great resilience against random node failures (Cohen et. al 2001). Likewise, networks with many “influencers” (nodes with high rich club coefficient values) are extremely vulnerable to targeted attacks. A user of this methodology should take this into account upon personal construction.
	</MainText>
		<Eq src={require('./equationsP1/algConnect.svg')} />
	<MainText>
	The next metric is <i>Algebraic Connectivity</i>. Given that <i>μ<sub>i</sub></i>…..<i>μ<sub>N</sub></i> is the list of ordered eigenvalues of an arbitrary network, algebraic connectivity is the second smallest of those values — denoted by <i>μ<sub>N-1</sub></i> above. We used connectivity as a means of grasping the disruption tolerance of the network. Connectivity usually involves constraints involving node or link removal and is currently established as a reliable, orthodox form of network resilience. Algebraic connectivity is 0 for disconnected graphs and > 0 when mildly or fully connected. Consider <i>K<sub>N</sub>(G)</i> and <i>K<sub>L</sub>(G)</i>, where they denote the minimum number of nodes and links respectively that lead to network disconnection (Meigham et. al 2011).
	</MainText>
		<Eq src={require('./equationsP1/ineq.svg')} />
	<MainText>
		Hence, higher the algebraic connectivity, higher the level of disruption tolerance for the network. In other words, the higher the algebraic connectivity, the harder it is for break or cut the network into discrete pieces. Yet, because this value for complex networks is not very sensitive. Though extremely useful, some studies have referred to it as rather “coarse” and “binary” when analyzing complex networks (Jun et al. 2010). We seek to complement this value with <i>Natural Connectivity</i> . 
	</MainText>
		<Eq src={require('./equationsP1/natConnect1.svg')} />
		<Eq src={require('./equationsP1/natConnect2.svg')} />
	<MainText>
		where <i>λ<sub>i</sub></i> denotes eigenvalues of the adjacency matrix. The last metric is <i>Natural Connectivity</i>. It is much more sensitive to singular node attacks and is useful for expressing robustness in terms of alternate routings and pathways. Furthermore, it is a function of monotonic nature (Wang et al. 2016); the value shifts with the (singular) removal or addition of links. 
	</MainText>
	<Subtitle>
		Efficiency
	</Subtitle>
	<MainText>
		Efficiency, like our previous metric, is not completely objective.
	</MainText>
	<MainText>
		For a complex (metro) network, we deem a network efficient when it diffuses information quickly, has minimal hop count, and minimal information delay. The latter component, however, is impossible to implement logistically as it is too computational expensive and impractical. I do not believe Seoul Metropolitan collects data on how long passengers must wait (metro delay time). 
	</MainText>
	<MainText>
		Literature in China (Leng et. al 2016) reveals distinctions between passengers that care about sheer hop-count and euclidean distance when choosing their respective forms of transport or routing methods. We took that account when constructing the index. 
	</MainText>
		<Eq src={require('./equationsP1/e.svg')} />
	<MainText>
		Efficiency, like our previous metric, is not completely objective.
	</MainText>
		<Eq src={require('./equationsP1/avgHopCount.svg')} />
	<MainText>
		where <i>H<sub>ij</sub></i> denotes the hop count between stations <i>i</i> and <i>j</i>. E*[1/H] is the normalized reciprocal average hop count. The reciprocal was taken because it expands the criterion to one of global scale (Wang et. al 2016). 
	</MainText>
	<MainText>
		E*[1/M] is the normalized reciprocal euclidean distance count. This is formalized exactly the same way average hop count besides replacing hop count with the sheer euclidean distance between the arbitrary stations and by adjusting the normalization process (denominated against largest service distance a pair of stations <i>i</i> and <i>j</i>). 
	</MainText>
		<Eq src={require('./equationsP1/assortivity.svg')} />
	<MainText>
	 where <i>d<sub>i</sub></i> and <i>d<sub>j</sub></i> denote the degrees of arbitrary stations. The last metric I want to introduce is assortativity. Though largely contrived and determined, experimentation (Ishikura et. al 2016) showed that assortativity values ranging from [-0.67, 0.58] lowered hop count and provided further “efficiency” enhancing benefits to a single network (I’ll for sure have to generate metro networks and analytically determine the associativity bounds myself later). To allow for some standardization, I had to choose whether our metric with reward assortativity, or its contrapositive, dissassortivity. It turns out that dissassortivity generally increases robustness and leads to poor network efficiency. So, for the integrity of our metric, I took absolute value into account and subtracted 0.5 (instead of 0.6 or 0.7 because that would then favor the lower bound) afterwards to appeal to the positive bound. 
	</MainText>
	<MainText>
		Also, the subtraction (from 3) involved was to account for the fact that the metrics were dealing with a level of inefficiency. In other words, if something is not inefficient what so ever, it is optimally efficient. 
	</MainText>
	<Subtitle>
		Power?
	</Subtitle>
	<MainText>
		Now that we have finished going over our robustness and efficiency metrics, we will now look into power. Note that I added the question mark because I am not sure what to call this yet. 
	</MainText>
	<MainText>
		The power is the sum of robustness and efficiency. It is bounded between [0, 6]. 
	</MainText>
	<MainText>
		The index, which is to be described in the next section, rewards the maximum value and punishes the minimum value of power. A value of 3 is well received as it may imply perfection (or something near it) for one of power’s components. 
	</MainText>
	<Subtitle>
		The Index — Park-Rhee Power Rating
	</Subtitle>
		<Eq src={require('./equationsP1/INDEX.svg')} />
	<MainText>
		where <i>p</i> denotes the value of the power rating, where <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i>, <i>f</i>, <i>g</i>, denote 0.325, 6, 0.9, 1.3, 3, and 1 respectively. The index essentially is a function of power that scales the values from [0,1]. It is essentially a bijection. 
	</MainText>
	<MainText>
		As mentioned before, a value of 6 is rewarded with an index value of 1; a value of 3 is rewarded with a value of 0.5.  
	</MainText>
	<MainText>
		A higher value means the network is healthy. Likewise, a lower value means the network is in poor condition.
	</MainText>
	<MainText>
		One may notice that the curvature resembles that of a normal curve. That is because its sensitivity rewards ideals and punishes mediocrity. However (as mentioned in the conclusion), this may seem too strict and may need adjusting as our system is currently still rather tertiary (only 3 layers). Also, our current model (gradient function) rewards robustness more than efficiency due to the function’s sheer nature.
	</MainText>
	<Subtitle>
		Conclusion
	</Subtitle>
	<MainText>
		In conclusion, I want to further this study by looking more into the individual metrics and then weighting them. With weighted coefficients, for example, one can weight the importance of say natural connectivity over that of algebraic connectivity. Of course, the prior conditionals are wholly subjective. To wit, if we create a weighted average system (similar in form to that of the “center of mass” formulation) for efficiency and robustness, we may receive more dynamic, modeled results. That would entail significant modifications to the index function, albeit modification is needed regardless due to its strained-sensitivity and mediocrity-punishing flaws. 
	</MainText>
	<MainText>
		After this, I hope to reduce the previous indices into a data frame or equation that is inexpensive for Sean to use as a fitness function for breeding. Another application of this index can be to apply it and see for myself the values of the index for multiple other country metro-networks and give suggestions for improvement respectively. I think I'll compare the metros purely numerically as radial diagrams or geometrical formulations can't account for the goal differences between effiency and robustness. For the numerical analysis itself, I’ll conduct join analysis using <i>Gephi</i>, <i>Rstudio</i> and perhaps <i>MatSim</i>.
	</MainText>
	<MainText>
		I’ll be taking a break from the mentioned steps and start looking into epidemiological modeling or the N-Body problem for the next post. Feedback and critique are much appreciated.
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

const Eq = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
  margin-bottom: 14px;
`;
