"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{877:function(r,e,t){t.d(e,{Df:function(){return s},IQ:function(){return f},Jh:function(){return h},TP:function(){return p},z1:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="ff637f30e47aba984ca1bbe10eb189d9",s=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching cast details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},946:function(r,e,t){t.r(e),t.d(e,{default:function(){return p}});var n=t(439),c=t(791),a=t(689),u=t(877),o="Reviews_authorName__-1OEg",s="Reviews_errorHeading__Q8i8T",i=t(184),p=function(){var r=(0,c.useState)(null),e=(0,n.Z)(r,2),t=e[0],p=e[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.Jh)(f).then(p)}),[f]),null===t?(0,i.jsx)("p",{children:"Loading reviews..."}):(0,i.jsx)("div",{children:t.length>0?(0,i.jsx)("ul",{children:t.map((function(r){return r?(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{className:o,children:["Author: ",r.author]}),(0,i.jsx)("p",{children:r.content})]},r.id):null}))}):(0,i.jsx)("p",{className:s,children:"There are no reviews for this film."})})}}}]);
//# sourceMappingURL=168.dc46faeb.chunk.js.map