"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{877:function(e,r,t){t.d(r,{Df:function(){return o},IQ:function(){return v},Jh:function(){return d},TP:function(){return l},z1:function(){return u}});var n=t(861),a=t(757),s=t.n(a),i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="ff637f30e47aba984ca1bbe10eb189d9",o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("trending/movie/day?api_key=".concat(c));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching cast details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},135:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(439),a=t(791),s=t(877),i=t(689),c=t(87),o="MovieDetails_button__uXZxd",u="MovieDetails_backButton__pPF5M",l="MovieDetails_wrapper__YMWLn",v="MovieDetails_image__c1FeV",d="MovieDetails_details__TGlfg",h="MovieDetails_heading__h+zFj",p="MovieDetails_overview__U5Vnb",f="MovieDetails_genresList__2o809",_="MovieDetails_additionalInfo__4J0eA",m="MovieDetails_list__dbNMP",x="MovieDetails_linksWrapper__eRALp",w="MovieDetails_links__EzCWB",g=t(184),j=function(){var e,r,t=(0,a.useState)(null),j=(0,n.Z)(t,2),k=j[0],b=j[1],M=(0,i.UO)().movieId,N=null!==(e=null===(r=(0,i.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";if((0,a.useEffect)((function(){(0,s.TP)(M).then(b)}),[M]),k){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:o,children:(0,g.jsxs)(c.rU,{to:N,className:u,children:["Go back"," "]})}),(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:v,src:k.poster_path?"https://www.themoviedb.org/t/p/w500/".concat(k.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"".concat(k.title)}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)("h2",{className:h,children:[k.title," (",k.release_date.slice(0,4),")"]}),(0,g.jsxs)("p",{children:["User score: ",function(e){var r=Math.round(10*e);return"".concat(r,"%")}(k.vote_average)]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{className:p,children:k.overview}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("ul",{className:f,children:k.genres.map((function(e){return(0,g.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:_,children:"Additional information"}),(0,g.jsxs)("ul",{className:m,children:[(0,g.jsx)("li",{className:x,children:(0,g.jsx)(c.rU,{to:"cast",className:w,children:"Cast"})}),(0,g.jsx)("li",{className:x,children:(0,g.jsx)(c.rU,{to:"reviews",className:w,children:"Reviews"})})]})]}),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(i.j3,{})})]})}}}}]);
//# sourceMappingURL=135.06d0615c.chunk.js.map