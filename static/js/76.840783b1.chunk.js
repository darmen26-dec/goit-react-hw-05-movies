"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{877:function(r,t,e){e.d(t,{Df:function(){return i},IQ:function(){return l},Jh:function(){return f},TP:function(){return p},z1:function(){return u}});var a=e(861),n=e(757),c=e.n(n),s=e(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="ff637f30e47aba984ca1bbe10eb189d9",i=function(){var r=(0,a.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("trending/movie/day?api_key=".concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(t,"?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching cast details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},76:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var a=e(861),n=e(439),c=e(757),s=e.n(c),o=e(791),i=e(689),u=e(877),p={errorHeading:"Cast_errorHeading__w7tT2",castList:"Cast_castList__ARoWn",actorWrapper:"Cast_actorWrapper__-QHN7",actorImg:"Cast_actorImg__T6qL2",actorInfo:"Cast_actorInfo__8ZWx-",actorName:"Cast_actorName__XabVA",actorCharacter:"Cast_actorCharacter__m+TBZ"},l=e(872),f=e(184),h=function(){var r=(0,i.UO)().movieId,t=(0,o.useState)(!0),e=(0,n.Z)(t,2),c=e[0],h=e[1],v=(0,o.useState)(null),d=(0,n.Z)(v,2),m=d[0],_=d[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.IQ)(r);case 3:e=t.sent,Array.isArray(e.cast)?_(e.cast):console.error("Invalid data format: cast is not an array."),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error occurred while fetching movie data:",t.t0);case 10:return t.prev=10,h(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),m&&0!==m.length?(0,f.jsx)("div",{children:c?(0,f.jsx)(l.Z,{}):(0,f.jsx)("ul",{className:p.castList,children:m.map((function(r){return(0,f.jsx)("li",{className:p.listItem,children:(0,f.jsxs)("div",{className:p.actorWrapper,children:[(0,f.jsx)("img",{className:p.actorImg,src:r.profile_path?"https://image.tmdb.org/t/p/w500".concat(r.profile_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:r.original_name}),(0,f.jsxs)("div",{className:p.actorInfo,children:[(0,f.jsx)("p",{className:p.actorName,children:(0,f.jsx)("strong",{children:r.name})}),(0,f.jsxs)("p",{className:p.actorCharacter,children:[(0,f.jsx)("strong",{children:"Character:"})," ",r.character]})]})]})},r.id)}))})}):(0,f.jsx)("div",{children:c?(0,f.jsx)(l.Z,{}):(0,f.jsx)("h1",{className:p.errorHeading,children:"Sorry, there is no cast information available!"})})}}}]);
//# sourceMappingURL=76.840783b1.chunk.js.map