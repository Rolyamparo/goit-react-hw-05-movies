"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{713:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return s},uV:function(){return f},wr:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(759);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"5ec0eb1a9463cef3b44b4ee158df711b"};var i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},217:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),s=r(689),o=r(713),f=r(184),p=function(t){var e=t.profilePath,r=t.originalName,n=t.name;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{width:"200",height:"300",src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:r}),(0,f.jsx)("p",{children:n})]})},v=function(){var t=(0,s.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),u=r[0],v=r[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(t);case 3:r=e.sent,v(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsx)(f.Fragment,{children:0!==u.length?(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Movie Cast"}),(0,f.jsx)("ul",{children:u.map((function(t){var e=t.id,r=t.profile_path,n=t.original_name,a=t.name;return(0,f.jsx)(p,{id:e,profilePath:r,originalName:n,name:a},e)}))})]}):(0,f.jsx)("div",{children:"We don't have any cast for this movie."})})}}}]);
//# sourceMappingURL=217.ecbe38e8.chunk.js.map