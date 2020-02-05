(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/subway_map.6716dc71.jpeg"},30:function(e,t,n){e.exports=n.p+"static/media/graph_visual.b8b59136.png"},31:function(e,t,n){e.exports=n.p+"static/media/utm_map.ac5db505.png"},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),r=n.n(o),s=(n(23),n(1)),l=n(3),c=n(4),u=n(6),h=n(5),m=n(8),f=n(7),d=n(2);function g(){var e=Object(s.a)(["\n  margin-top: -14px;\n  color: #f2f2f2aa;\n  font-size: 14px;\n  font-weight: 200;\n  margin-bottom: 26px;\n"]);return g=function(){return e},e}function p(){var e=Object(s.a)(["\n  color: #f2f2f2;\n  font-size: 34px;\n  font-weight: 300;\n  letter-spacing: 4px;\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  font-size: 12px;\n  color: #f2f2f255;\n  animation: "," 2s linear 1;\n  margin-top: -10px;\n"]);return b=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  min-width: 100%;\n  background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);\n  color: #f2f2f2;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n"]);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n  0% { color: #f2f2f200; }\n  40% { color: #f2f2f200; }\n  100% { color: #f2f2f255; }\n"]);return y=function(){return e},e}var v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(k,null,i.a.createElement(x,null,"Moment's Notice"),i.a.createElement(O,null,"By Francis Park and Sean Rhee"),i.a.createElement(j,null,"Home =",">"," Blog =",">"," About"),i.a.createElement(j,null,"(scroll right)"))}}]),t}(i.a.Component),E=Object(d.b)(y()),k=d.a.div(w()),j=d.a.p(b(),E),x=d.a.h1(p()),O=d.a.h1(g());function z(){var e=Object(s.a)(["\n  color: #000000b5;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 26px;\n  margin-left: 10%;\n  margin-right: 10%;\n"]);return z=function(){return e},e}function S(){var e=Object(s.a)(["\n  color: #000000b5;\n  font-size: 12px;\n  font-weight: 200;\n  margin-top: 5px;\n  text-align: center;\n"]);return S=function(){return e},e}function T(){var e=Object(s.a)(["\n  color: black;\n  font-size: 30px;\n  font-weight: 500;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 30px;\n"]);return T=function(){return e},e}function I(){var e=Object(s.a)(["\n  color: black;\n  font-size: 38px;\n  font-weight: 400;\n"]);return I=function(){return e},e}function M(){var e=Object(s.a)(["\n  color: #00000088;\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: -12px;\n  margin-bottom: 26px;\n"]);return M=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 80%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]);return P=function(){return e},e}function A(){var e=Object(s.a)(["\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]);return A=function(){return e},e}function N(){var e=Object(s.a)(["\n  width: 100%;\n  display: inline-block;\n"]);return N=function(){return e},e}var F=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(W,null,i.a.createElement(C,null,"Making the Seoul Metro (or any metro) Better || Part 1"),i.a.createElement(H,null,"Written by Sean Rhee || January 14, 2020"),i.a.createElement(B,{src:n(29)}),i.a.createElement(D,null,"Photo: Seoul Metropolitan Subway Map (Credit: Seoul Metro)"),i.a.createElement(U,null),i.a.createElement(J,null,"The Seoul metro is considered one of the best in the world. Despite this, it still has various inefficiencies. For me, this is best exemplified by the fact that I can jog home from school faster than if I took subway. Maybe I'm just unlucky, but as great as Seoul's metro is, I can't help but feel like it could be better. But how exactly could one go about improving the metro's efficiency?"),i.a.createElement(J,null,"First and foremost, there is no concrete definition of what makes a system like a subway efficient. For example, if we represent our subway graphically by creating a vertex for each station, both a complete graph and minimum spanning tree could be argued to be an optimally efficient layout. This is because there are various aspects of a transport network that can determine efficiency with some of these factors being at odds with one another. With that in mind, let's continue."),i.a.createElement(J,null,"As far as our definition of efficiency is concerned, there are three primary factors of importance: distance, commuter time, and service potential (which I'll explain)."),i.a.createElement(J,null,"Distance is obviously important because it wouldn't be feasible to build and maintain lines to and from every station in a system (unless there are like, four stations in total). Thinking back, a distance-optimized topology would resemble a minimum spanning tree."),i.a.createElement(J,null,"Commuter time is also obviously important since the reason we use transport in the first place is to get to and from places quickly. Again, thinking back, a commuter time\u2013optimized topology would resemble a complete graph."),i.a.createElement(J,null,"Unfortunately, as alluded to earlier, the two metrics of distance and commuter time are essentially in opposition: one can only be improved at the expense of the other. So how can these be balanced? Service potential (as subjectively defined by the user/designer)."),i.a.createElement(J,null,'Service potential is, in essence, the "importance" of a station. Although this can be determined many ways, the way that we\'ll be determining this is by creating a list of the average traffic values of every station and normalizing them across some range. The higher the service potential, the more time-optimized that station will be. The lower the service potential, the more distance-optimized that station will be.'),i.a.createElement(J,null,"Assigning a metro system an efficiency ultimately comes down to relating these three values of distance, commuter time, and service potential in a reasonable, quantifiable way. Using this newly derived efficiency value, we can then train a machine learning algorithm to output metro layouts and grade their fitness. Ultimately, this should result in us receiving a theoretically better map for the Seoul metro. I say theoretically because while improving Seoul's subway is a long-term goal, for the purposes of this post, I'll be focusing more on the methodology and verification of its validity."),i.a.createElement(U,null,"Method and Reasoning"),i.a.createElement(J,null,"Since a neural network will be the one generating our subway maps, it doesn't matter if we use efficiency or inefficiency when defining fitness for training (maximizing efficiency and minimizing inefficiency should technically be identical). Because of this, we're going to be using an inefficiency metric that our machine learning algorithm will try to minimize for (since it's more intuitive to implement)."),i.a.createElement(J,null,'To abstractly represent our subway systems, we will be using graphs. Essentially, each graph will be composed of multiple "chains". Each chain will represent an individual subway line. Each vertex in each chain will represent a certain station. The edge connecting any two vertices in a chain  will be weighted according to the real-life euclidean distance between the two stations the vertices represent plus some intermediate node penalty (INP). If the same station is in two or more chains, it will be connected to each of its counterparts via a transfer edge. These transfer edges will be weighted according to some necessary transfer penalty (NTP). INPs and NTPs are assigned in order to incentivize the use of shorter or more time-optimized routes that avoid unnecessary stops and transfers.'),i.a.createElement(R,{src:n(30)}),i.a.createElement(D,null,"A Basic Visualization of How this Graphical Representation Works"),i.a.createElement(J,null,"Using this graphical representation of a subway system, we can finally obtain our inefficiency metric by iterating through each vertex, weighting the INP and NTP by our vertex's service potential, summing the minimum distances from each node to every other node using an SPF algorithm (such as Dijkstra's algorithm or the Floyd Warshall algorithm), re-weighting each sum based on the start node's service potential, and averaging these weighted sums."),i.a.createElement(J,null,'Initially, this entire methodology may seem somewhat contrived, but with some thought, it should actually make a lot of intuitive sense. First, by using a station\'s traffic as its service potential, we can ensure that "more important" stations are more commuter time\u2013optimized and are more prioritized while the "less important" stations are more distance-optimized and are less prioritized. This is because by weighting INPs and NTPs by service potential, a high service potential would result in the incentivization of visiting fewer stops and making fewer transfers. Additionally, by weighting our sum by service potential, minimizing our weighted sum for "more important" stations will matter more (which makes sense). The opposite applies for stations with low service potential. Also, the reason our abstracted chain representation even works to begin with is because a) if you imagine that our INPs and NTPs in the figure above were of length 0, our chain model would resemble its real-life counterpart and b) if you think about it, the reason it\'s annoying to have lots of stops or transfers is because in that time, you could otherwise be travelling toward your destination meaning that having a stop or transfer is like having to travel extra distance which is why it makes sense to utilize INPs and NTPs at all. Finally, the reason we average our weighted sum at the end instead of something analogous such as summing our sums is because even though this would have a virtually identical result for our algorithm, by averaging our sums, it could give us a more normalized value across different subway systems (not just Seoul\'s).'),i.a.createElement(J,null,"One major problem is it's difficult to analyze the actual importance of certain routes. For example, even though some station, A, and another station, B, might both draw heavy traffic, this doesn't necessitate heavy traffic between A and B. A and B could be two hubs, so to speak, each with their own relatively contained subsystems. Unfortunately, since it's difficult to find data about the importance of actual routes themselves (unless we were to track people individually as they move around in a subway), the next best thing, if you ask me, is to just use station importance based on general traffic."),i.a.createElement(J,null,"To summarize, the metric we're using is far from perfect, but its hard to make a perfect metric (and get data required for a perfect metric). Regardless, the method that has been devised to evaluate inefficiency should still be relatively effective as it can account for both distance and commuter time while providing a reasonable way to determine which to give more importance to."),i.a.createElement(U,null,"Testing"),i.a.createElement(J,null,"To test, I essentially created a random map containing 10 \"stations.\" Each station was then turned into a vertex for a graph of the system. This was a dynamic graph on which a feed-forward NEAT network added edges that it also assigned to a certain line. I limited it's choice in lines to 5 options. This was honestly an arbitrary number; however, based on intuition, I don't think that 6+ lines would add any extra value to a system that only has 10 nodes (the Seoul Metro, with 434 stations, has 9 lines)."),i.a.createElement(U,null,"Data Collection (so far)"),i.a.createElement(J,null,"TL;DR: This is kinda a supplementary addition to this post regarding progress so far in applying this method to the Seoul Metro itself. Data collection regarding the Seoul Metro hasn't been completed yet. Furthermore, a more efficient architecture has to be devised for the neural net due to computational and hardware limitations."),i.a.createElement(J,null,"To create a proper layout for a new Seoul subway system, we first need to find the actual locations of each station. It's entirely true that for a fully optimized system, it's also important to consider changing station locations; however, for our purposes, we'll just assume that it's only the paths that will be needing changing."),i.a.createElement(J,null,'First, we defined the scope of what constituted the "Seoul subway system." Although it was a somewhat arbitrary decision, we limited what we considered "Seoul\'s subway" to just lines 1~9.'),i.a.createElement(J,null,"Following this, drawing from a list of each station in each line on Wikipedia, the latitude and longitude was found for each station with the help of Google Maps. This was compiled into a\xa0.csv file which we then converted into ","<","x, y",">"," coordinates via the Universal Transverse Mercator coordinate system. All of South Korea is within one UTM zone, so I hope that distortion is minimal (although there will, of course, be distortion). Either way, each station's new coordinates were compiled into a list and normalized within the range [0, 1]."),i.a.createElement(R,{src:n(31)}),i.a.createElement(D,null,"Using the coordinates we obtained, this is what we ended up with."),i.a.createElement(J,null,"The other information that is necessary to create an efficient layout is to know each station's individual \"importance.\" We were able to find an official spreadsheet with the average throughput of each stations per hour throughout the year; however, we haven't scraped the data yet, but that's okay, because for now, we aren't going to be actually working with the Seoul Metro (maybe that'll be in a part 2 or 3)."))}}]),t}(i.a.Component),W=d.a.div(N()),B=d.a.img(A()),R=d.a.img(P()),H=d.a.h1(M()),C=d.a.h1(I()),U=d.a.h1(T()),D=d.a.p(S()),J=d.a.h1(z());function Y(){var e=Object(s.a)(["\n  border-top: 1px dashed #a5a7b0;\n  border-bottom: 0px\n  margin-top: 32px;\n"]);return Y=function(){return e},e}function q(){var e=Object(s.a)(["\n  height: 30px;\n"]);return q=function(){return e},e}function L(){var e=Object(s.a)(["\n  min-width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  overflow-y: scroll;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  scrollbar-width: none;\n  background-color: #fafafa;\n"]);return L=function(){return e},e}var _=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[i.a.createElement(F,{key:0})];return i.a.createElement(G,null,i.a.createElement(K,null),e,i.a.createElement(K,null))}}]),t}(i.a.Component),G=d.a.div(L()),K=d.a.div(q());d.a.hr(Y());function V(){var e=Object(s.a)(["\n  color: #000000b5;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 26px;\n"]);return V=function(){return e},e}function $(){var e=Object(s.a)(["\n  color: black;\n  font-size: 26px;\n  font-weight: 500;\n"]);return $=function(){return e},e}function Q(){var e=Object(s.a)(["\n  color: black;\n  font-size: 38px;\n  font-weight: 400;\n"]);return Q=function(){return e},e}function X(){var e=Object(s.a)(["\n  height: 30px;\n"]);return X=function(){return e},e}function Z(){var e=Object(s.a)(["\n  min-width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  overflow-y: scroll;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  scrollbar-width: none;\n  background: linear-gradient(90deg, #a5a7b0 0%, #fafafa 0.1%, #fafafa 100%);;\n"]);return Z=function(){return e},e}var ee=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(te,null,i.a.createElement(ne,null),i.a.createElement(ae,null,"About This Blog"),i.a.createElement(ie,null,"Authors"),i.a.createElement(oe,null,"Moment's Notice has two authors: Sean Rhee and Francis Park.",i.a.createElement("br",null),i.a.createElement("br",null),"Sean is a senior at the Yongsan International School of Seoul (YISS). He has an interest in a wide range of subjects from computer science, to physics, to international relations, to engineering, to music theory/composition. He likes running and is on both cross country and track and field at YISS.",i.a.createElement("br",null),i.a.createElement("br",null),"Francis is also a senior at YISS. He is an avid Jazz & Hip-Hop listener. He enjoys playing (right-bench or the occasional start) for his school's varsity boys soccer team. Francis' interests include mathematics (number theory, discrete mathematics, time series), atmospheric sciences, unsupervised learning, and writing short stories. His friends refer to him as 'chunky'."),i.a.createElement("br",null),i.a.createElement(ie,null,'"Moment\'s Notice"'),i.a.createElement(oe,null,"This blog's title was inspired by John Coltrane's ",i.a.createElement("i",null,"Moment's Notice"),". As it suggests, the title for this blog was thought of on a moment's notice. Similarly, we plan on posting whenever we feel is suitable on topics that capture our curiosity. This is a relatively STEM-oriented blog, but its contents won't necessarily be limited to STEM."),i.a.createElement("br",null),i.a.createElement(ie,null,"Purpose"),i.a.createElement(oe,null,"While the purpose of this blog is to act as a forum for sharing ideas (and getting feedback regarding these ideas), it's also just for fun. We hope other people find the concepts and areas we explore to be interesting and worth delving further into."),i.a.createElement("br",null),i.a.createElement(ie,null,"Contact"),i.a.createElement(oe,null,"email: momentsnoticecontact@gmail.com",i.a.createElement("br",null),i.a.createElement("br",null),"**We'll try to respond to everything, but unless this blog by some miracle takes off, chances are we won't be checking this inbox super often."),i.a.createElement(ne,null))}}]),t}(i.a.Component),te=d.a.div(Z()),ne=d.a.div(X()),ae=d.a.h1(Q()),ie=d.a.h1($()),oe=d.a.h1(V());function re(){var e=Object(s.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  width: ",";\n  height: ","px;\n  overflow-x: scroll;\n  overflow-y: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  ::-webkit-scrollbar {\n    display: none!important;\n    height: 0;\n    width: 0;\n    background-color: transparent;\n   }\n"]);return re=function(){return e},e}var se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleResize=function(){n.setState({w:window.innerWidth}),n.setState({h:window.innerHeight})},n.state={w:window.innerWidth,h:window.innerHeight},n.handleResize=n.handleResize.bind(Object(m.a)(n)),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return i.a.createElement(le,{w:this.state.w,h:this.state.h},i.a.createElement(v,{h:this.state.h}),i.a.createElement(_,null),i.a.createElement(ee,null))}}]),t}(i.a.Component),le=d.a.div(re(),(function(e){return e.w}),(function(e){return e.h}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a1858cf.chunk.js.map