(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{18:function(e,n,t){e.exports=t(29)},23:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),i=t.n(o),l=(t(23),t(1)),c=t(3),s=t(4),u=t(6),f=t(5),h=t(8),m=t(7),b=t(2);function d(){var e=Object(l.a)(["\n  margin-top: -14px;\n  color: #f2f2f2aa;\n  font-size: 14px;\n  font-weight: 200;\n  margin-bottom: 26px;\n"]);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n  color: #f2f2f2;\n  font-size: 34px;\n  font-weight: 300;\n  letter-spacing: 4px;\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\n  font-size: 12px;\n  color: #f2f2f255;\n  animation: "," 2s linear 1;\n  margin-top: -10px;\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(["\n  display: flex;\n  height: 100%;\n  min-width: 100%;\n  background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);\n  color: #f2f2f2;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n"]);return w=function(){return e},e}function y(){var e=Object(l.a)(["\n  0% { color: #f2f2f200; }\n  40% { color: #f2f2f200; }\n  100% { color: #f2f2f255; }\n"]);return y=function(){return e},e}var v=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(x,null,"Moment's Notice"),r.a.createElement(k,null,"By Francis Park and Sean Rhee"),r.a.createElement(O,null,"Home =",">"," Blog =",">"," About"),r.a.createElement(O,null,"(scroll right)"))}}]),n}(r.a.Component),E=Object(b.b)(y()),j=b.a.div(w()),O=b.a.p(g(),E),x=b.a.h1(p()),k=b.a.h1(d());function z(){var e=Object(l.a)(["\n  color: #000000b5;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 26px;\n"]);return z=function(){return e},e}function S(){var e=Object(l.a)(["\n  color: black;\n  font-size: 26px;\n  font-weight: 500;\n"]);return S=function(){return e},e}function H(){var e=Object(l.a)(["\n  color: black;\n  font-size: 38px;\n  font-weight: 400;\n"]);return H=function(){return e},e}function T(){var e=Object(l.a)(["\n  color: #00000088;\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: -12px;\n  margin-bottom: 26px;\n"]);return T=function(){return e},e}function W(){var e=Object(l.a)(["\n  width: 100%;\n  display: inline-block;\n"]);return W=function(){return e},e}var C=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(R,null,"Seoul Metro System (Test Excerpt)"),r.a.createElement(I,null,"Published January 14, 2020"),r.a.createElement(q,null,"Introduction"),r.a.createElement(B,null,"Essentially, optimizing Seoul\u2019s subway system is a matter of definition. Through neuroevolution, so long as a proper fitness function is defined, a neural network can learn to output an \u201cefficient\u201d subway system based on an input of the coordinates of each station to include. Since almost all subways are fundamentally similar in their mode of operation, a method defining efficiency for Seoul\u2019s subway system can be applied to virtually any other subway system."),r.a.createElement(q,null,"Layout Efficiency"),r.a.createElement(B,null,"First, when it comes to layout efficiency, we are assuming fixed station locations (rather than optimizing the efficiency of station location and subway topology, we are only optimizing subway topology based on existing locations). Without loss of generality, we cite three primary factors of concern when it comes to layout efficiency for any given transport system: cost, time, and service potential.",r.a.createElement("br",null),r.a.createElement("br",null),"Cost is, in essence, distance. Distance matters since a technically ideal network (taking into account only cost) would be the generalized form of (a variant of) the euclidean Steiner tree problem. Therefore, making the most cost-effective system would require minimizing the total euclidean distance of the system\u2019s lines.",r.a.createElement("br",null),r.a.createElement("br",null),"Time holds importance since a primary purpose of transport is to travel between locations, and to do so quickly. In order to improve time-efficiency, the goal would be to have as direct a path as possible between any two stations. This would mean minimizing distance, number of stations, and transfers between any two stations (rather than in the system as a whole as was the case with cost-optimization).",r.a.createElement("br",null),r.a.createElement("br",null),"Service potential is a measurement of the \u201cimportance\u201d of any given station. One way of quantifying this is through traffic. Stations that have more traffic than others probably require more attention, and for general efficiency, it is necessary to balance time and distance based on where a station lies on the service potential gradient. Stations with lower service potential require more cost-optimization while stations with higher service potential require more time-optimization."))}}]),n}(r.a.Component),M=b.a.div(W()),I=b.a.h1(T()),R=b.a.h1(H()),q=b.a.h1(S()),B=b.a.h1(z());function F(){var e=Object(l.a)(["\n  border-top: 1px dashed #a5a7b0;\n  border-bottom: 0px\n  margin-top: 32px;\n"]);return F=function(){return e},e}function J(){var e=Object(l.a)(["\n  height: 30px;\n"]);return J=function(){return e},e}function A(){var e=Object(l.a)(["\n  min-width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  overflow-y: scroll;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  scrollbar-width: none;\n  background-color: #f7f6f2;\n"]);return A=function(){return e},e}var N=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=[r.a.createElement(C,{key:0})];return r.a.createElement(P,null,r.a.createElement(Y,null),e,r.a.createElement(Y,null))}}]),n}(r.a.Component),P=b.a.div(A()),Y=b.a.div(J());b.a.hr(F());function L(){var e=Object(l.a)(["\n  color: #000000b5;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 26px;\n"]);return L=function(){return e},e}function D(){var e=Object(l.a)(["\n  color: black;\n  font-size: 26px;\n  font-weight: 500;\n"]);return D=function(){return e},e}function U(){var e=Object(l.a)(["\n  color: black;\n  font-size: 38px;\n  font-weight: 400;\n"]);return U=function(){return e},e}function $(){var e=Object(l.a)(["\n  height: 30px;\n"]);return $=function(){return e},e}function G(){var e=Object(l.a)(["\n  min-width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  overflow-y: scroll;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  scrollbar-width: none;\n  background: linear-gradient(90deg, rgba(165,167,176,1) 0%, rgba(247,246,242,1) 0.1%, rgba(247,246,242,1) 100%);;\n"]);return G=function(){return e},e}var K=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(V,null),r.a.createElement(X,null,"About This Blog"),r.a.createElement(Z,null,"Authors"),r.a.createElement(_,null,"Moment's Notice has two authors: Sean Rhee and Francis Park.",r.a.createElement("br",null),r.a.createElement("br",null),"Sean is a senior at the Yongsan International School of Seoul (YISS). He has an interest in a wide range of subjects from computer science, to physics, to international relations, to engineering, to music theory/composition. He likes running and is on both cross country and track and field at YISS.",r.a.createElement("br",null),r.a.createElement("br",null),"Francis is also a senior at YISS. He is an avid Jazz & Hip-Hop listener. He enjoys playing (right-bench or the occasional start) for his school's varsity boys soccer team. Francis' interests include mathematics (number theory, discrete mathematics, time series), atmospheric sciences, unsupervised learning, and writing short stories. His friends refer to him as 'chunky'."),r.a.createElement("br",null),r.a.createElement(Z,null,'"Moment\'s Notice"'),r.a.createElement(_,null,"This blog's title was inspired by John Coltrane's ",r.a.createElement("i",null,"Moment's Notice"),". As it suggests, the title for this blog was thought of on a moment's notice. Similarly, we plan on posting whenever we feel is suitable on topics that capture our curiosity. This is a relatively STEM-oriented blog, but its contents won't necessarily be limited to STEM."),r.a.createElement("br",null),r.a.createElement(Z,null,"Purpose"),r.a.createElement(_,null,"While the purpose of this blog is to act as a forum for sharing ideas (and getting feedback regarding these ideas), it's also just for fun. We hope other people find the concepts and areas we explore to be interesting and worth delving further into."),r.a.createElement("br",null),r.a.createElement(Z,null,"Contact"),r.a.createElement(_,null,"email: momentsnoticecontact@gmail.com",r.a.createElement("br",null),r.a.createElement("br",null),"**We'll try to respond to everything, but unless this blog by some miracle takes off, chances are we won't be checking this inbox super often."),r.a.createElement(V,null))}}]),n}(r.a.Component),Q=b.a.div(G()),V=b.a.div($()),X=b.a.h1(U()),Z=b.a.h1(D()),_=b.a.h1(L());function ee(){var e=Object(l.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  width: ",";\n  height: ","px;\n  overflow-x: scroll;\n  overflow-y: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  ::-webkit-scrollbar {\n    display: none!important;\n    height: 0;\n    width: 0;\n    background-color: transparent;\n   }\n"]);return ee=function(){return e},e}var ne=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(f.a)(n).call(this,e))).handleResize=function(){t.setState({w:window.innerWidth}),t.setState({h:window.innerHeight})},t.state={w:window.innerWidth,h:window.innerHeight},t.handleResize=t.handleResize.bind(Object(h.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return r.a.createElement(te,{w:this.state.w,h:this.state.h},r.a.createElement(v,{h:this.state.h}),r.a.createElement(N,null),r.a.createElement(K,null))}}]),n}(r.a.Component),te=b.a.div(ee(),(function(e){return e.w}),(function(e){return e.h}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9c3e614a.chunk.js.map