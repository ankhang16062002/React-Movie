(this.webpackJsonpmovie_first=this.webpackJsonpmovie_first||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(39),s=c.n(a),i=(c(48),c(49),c(4)),o=c(7),l=c(5),j=c.n(l),u=c(10),d=c(28),b={baseUrl:"https://api.themoviedb.org/3",api_key:"6f746fe9f5a61f46cd2c3a33cd3f27d1",originalImg:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Img:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},h=c(40),O=c.n(h),m=c(41),x=c.n(m),v=O.a.create({baseURL:b.baseUrl,headers:{"content-type":"appication/json"},paramsSerializer:function(e){return x.a.stringify(Object(d.a)(Object(d.a)({},e),{},{api_key:b.api_key}))}});v.interceptors.request.use(function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var p=v,f="movie",g="tv",_="trending",y="airing_today",k="on_the_air",w="now_playing",N="popular",T="all",S="week",C={getMovies:function(e,t){var c="/movie/".concat(e);return p.get(c,{params:t})},getTvs:function(e,t){var c="/tv/".concat(e);return p.get(c,{params:t})},getTrendings:function(e,t){var c="/trending/".concat(e,"/").concat(t);return p.get(c,{params:{}})},getCredits:function(e,t){var c="/".concat(e,"/").concat(t,"/credits");return p.get(c,{params:{}})},getDetails:function(e,t,c){var n="/".concat(e,"/").concat(t);return p.get(n,{params:c})},getVideos:function(e,t){var c="/".concat(e,"/").concat(t,"/videos");return p.get(c,{params:{}})},getSimilars:function(e,t,c){var n="/".concat(e,"/").concat(t,"/similar");return p.get(n,{params:c})},search:function(e,t){var c="/search/".concat(e);return p.get(c,{params:t})}},I=c.p+"static/media/tmovie.67797e94.png",E=(c(83),c(0)),M=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"header",children:[Object(E.jsxs)("div",{className:"header__logo",children:[Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("img",{src:I,alt:"Logo Movies"})}),Object(E.jsx)("h3",{children:"Tmovies"})]}),Object(E.jsx)("div",{className:"header__nav",children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)(i.b,{to:"/",children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)(i.b,{to:"/".concat(_),children:"Trendings"})}),Object(E.jsx)("li",{children:Object(E.jsx)(i.b,{to:"/".concat(f),children:"Movies"})}),Object(E.jsx)("li",{children:Object(E.jsx)(i.b,{to:"/".concat(g),children:"Tvs"})})]})})]})})},V=(c(93),c.p+"static/media/footer-bg.67e95f05.jpg"),q=function(){return Object(E.jsxs)("div",{className:"footer",style:{backgroundImage:"url(".concat(V,")")},children:[Object(E.jsxs)("div",{className:"logo",children:[Object(E.jsx)("img",{src:I,alt:""}),Object(E.jsx)("h3",{children:"tMovies"})]}),Object(E.jsxs)("div",{className:"menu-footer",children:[Object(E.jsxs)("ul",{className:"list",children:[Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Home"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Contact us"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Term of services"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"About us"})})]}),Object(E.jsxs)("ul",{className:"list",children:[Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Live"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"FAQ"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Premium"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Privacy policy"})})]}),Object(E.jsxs)("ul",{className:"list",children:[Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"You must watch"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Recent release"})}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("li",{children:"Top IMDB"})})]})]})]})},F=c(9),L=(c(94),c(106)),W=c(104),A=c(107),B=c(105),P=(c(95),function(e){return Object(E.jsx)("button",{className:"btn outline",onClick:e.onClick,children:e.children})}),D=function(e){return Object(E.jsx)("button",{className:"btn",onClick:e.onClick,children:e.children})},H=(c(96),function(e){var t=e.children,c=e.onClose;return Object(E.jsxs)("div",{className:"modal__content",children:[Object(E.jsxs)("div",{className:"modal__content__out",onClick:c,children:[Object(E.jsx)("div",{className:"modal__content__out-above"}),Object(E.jsx)("div",{className:"modal__content__out-under"})]}),t]})}),R=function(e){var t=e.id,c=e.active,r=e.children,a=Object(n.useState)(!1),s=Object(F.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){o(c)}),[c]),Object(E.jsx)("div",{id:t,className:"modal ".concat(i?"active":""),children:r})};function U(e){var t=e.item,c=e.className,r=Object(n.useRef)(null),a=b.originalImg(t.backdrop_path),s=Object(o.f)();Object(n.useEffect)((function(){r.current.style.backgroundImage="url(".concat(a,")")}));return Object(E.jsxs)("div",{className:"slider-home__item ".concat(c),ref:r,children:[Object(E.jsxs)("div",{className:"slider-home__item__info",children:[Object(E.jsx)("h3",{children:t.title}),Object(E.jsx)("p",{children:t.overview}),Object(E.jsxs)("div",{className:"slider-home__item__info__button",children:[Object(E.jsx)(P,{onClick:function(){return s.push("/movie/".concat(t.id))},children:"Watch Now"}),Object(E.jsx)(D,{onClick:function(){var e=document.querySelector("#modal__".concat(t.id)),c=function(){var c=Object(u.a)(j.a.mark((function c(){var n,r,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,C.getVideos(f,t.id);case 3:(n=c.sent).results.length>0?(r=n.results[0].key,a="https://youtube.com/embed/".concat(r),e.querySelector(".modal__content iframe").setAttribute("src",a)):e.querySelector("modal__content").innerHTML="No Trailer",c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}}();c(),e.classList.add("active")},children:"Watch Trailer"})]})]}),Object(E.jsx)("div",{className:"slider-home__item__poster",children:Object(E.jsx)("img",{src:b.w500Img(t.poster_path),alt:""})})]})}function J(e){var t=e.item;return Object(E.jsx)(R,{active:!1,id:"modal__".concat(t.id),children:Object(E.jsx)(H,{item:t,onClose:function(){var e=document.querySelector("#modal__".concat(t.id));e.classList.remove("active"),e.querySelector("iframe").setAttribute("src","")},children:Object(E.jsx)("iframe",{src:"",title:"videos"})})})}var z=function(){L.a.use([W.a]);var e=Object(n.useState)([]),t=Object(F.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,C.getMovies(N,t);case 4:c=e.sent,r(c.results.slice(10,15)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(E.jsx)(E.Fragment,{children:c&&Object(E.jsxs)("div",{className:"slider-home",children:[Object(E.jsx)(A.a,{spaceBetween:0,modules:[W.a],grabCursor:!0,slidesPerView:1,children:c.map((function(e,t){return Object(E.jsx)(B.a,{children:function(t){var c=t.isActive;return Object(E.jsx)(U,{item:e,className:c?"active":""})}},t)}))}),c.map((function(e,t){return Object(E.jsx)(J,{item:e},t)}))]})})},Q=(c(97),function(e){var t=e.item,c=b.w500Img(t.poster_path?t.poster_path:t.backdrop_path);return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(i.b,{to:"/".concat(e.category,"/").concat(t.id),children:Object(E.jsxs)("div",{className:"cart-item",style:{backgroundImage:"url(".concat(c,")")},children:[Object(E.jsxs)("div",{className:"cart-item__footer",children:[Object(E.jsx)("h4",{children:t.name?t.name:t.title}),Object(E.jsx)("p",{children:t.overview})]}),Object(E.jsx)("span",{className:"ribbon",children:"HD Vietsub"}),Object(E.jsx)("div",{className:"icon-youtube",children:Object(E.jsx)("i",{className:"bx bxl-youtube"})})]})})})}),Y=(c(98),function(e){var t=Object(n.useState)([]),c=Object(F.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var c,n,r,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mediaType||!e.timeWindow){t.next=7;break}return t.next=3,C.getTrendings(e.mediaType,e.timeWindow);case 3:c=t.sent,a(c.results),t.next=20;break;case 7:if("movie"!==e.category){t.next=15;break}return n={},t.next=11,C.getMovies(e.type,n);case 11:r=t.sent,a(r.results),t.next=20;break;case 15:return s={},t.next=18,C.getTvs(e.type,s);case 18:i=t.sent,a(i.results);case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,e.type,e.mediaType,e.timeWindow]),Object(E.jsx)("div",{className:"list-item",children:Object(E.jsx)(A.a,{grabCursor:!0,speed:500,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(E.jsx)(B.a,{children:Object(E.jsx)(Q,{item:t,category:e.category})},c)}))})})}),G=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"home",children:[Object(E.jsx)(z,{}),Object(E.jsxs)("div",{className:"container-list",children:[Object(E.jsxs)("div",{className:"container-list__header",children:[Object(E.jsx)("h3",{children:"Trendings"}),Object(E.jsx)(P,{children:Object(E.jsx)(i.b,{to:"/".concat(_),children:"View more"})})]}),Object(E.jsx)(Y,{category:_,mediaType:T,timeWindow:S})]}),Object(E.jsxs)("div",{className:"container-list",children:[Object(E.jsxs)("div",{className:"container-list__header",children:[Object(E.jsx)("h3",{children:"Movies"}),Object(E.jsx)(P,{children:Object(E.jsx)(i.b,{to:"/".concat(f),children:"View more"})})]}),Object(E.jsx)(Y,{category:f,type:w})]}),Object(E.jsxs)("div",{className:"container-list",children:[Object(E.jsxs)("div",{className:"container-list__header",children:[Object(E.jsx)("h3",{children:"Tvs"}),Object(E.jsx)(P,{children:Object(E.jsx)(i.b,{to:"/".concat(g),children:"View more"})})]}),Object(E.jsx)(Y,{category:g,type:k})]})]})})},K=c(15),X=(c(99),c(100),function(e){return Object(E.jsx)("div",{className:"input",children:Object(E.jsx)("input",{type:"text",placeholder:e.placeholder,value:e.value,onChange:e.onChange})})}),Z=function(e){var t=Object(n.useState)([]),c=Object(F.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(1),i=Object(F.a)(s,2),l=i[0],d=i[1],b=Object(n.useState)(1),h=Object(F.a)(b,2),O=h[0],m=h[1],x=Object(n.useState)(""),v=Object(F.a)(x,2),p=v[0],f=v[1],g=Object(o.f)(),_=Object(o.g)().keyword;Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var c,n,r,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_){t.next=33;break}t.prev=1,c={},t.t0=e.category,t.next="movie"===t.t0?6:"tv"===t.t0?12:"trending"===t.t0?18:25;break;case 6:return t.next=8,C.getMovies(N,c);case 8:return n=t.sent,a(n.results),m(n.total_pages),t.abrupt("break",26);case 12:return t.next=14,C.getTvs(y,c);case 14:return n=t.sent,a(n.results),m(n.total_pages),t.abrupt("break",26);case 18:return t.next=20,C.getTrendings(T,S);case 20:return n=t.sent,console.log(n),a(n.results),m(n.total_pages),t.abrupt("break",26);case 25:throw new Error("".concat(e.category," is not exit"));case 26:t.next=31;break;case 28:t.prev=28,t.t1=t.catch(1),console.log(t.t1);case 31:t.next=45;break;case 33:return r={query:_},t.prev=34,t.next=37,C.search(e.category,r);case 37:s=t.sent,a(s.results),m(s.total_pages),t.next=45;break;case 42:t.prev=42,t.t2=t.catch(34),console.log(t.t2);case 45:case"end":return t.stop()}}),t,null,[[1,28],[34,42]])})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,_]);var k=function(){var t=Object(u.a)(j.a.mark((function t(){var c,n,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_){t.next=32;break}t.prev=1,c={page:l+1},t.t0=e.category,t.next="movie"===t.t0?6:"tv"===t.t0?12:"trending"===t.t0?18:24;break;case 6:return t.next=8,C.getMovies(N,c);case 8:return n=t.sent,a([].concat(Object(K.a)(r),Object(K.a)(n.results))),d(l+1),t.abrupt("break",25);case 12:return t.next=14,C.getTvs(y,c);case 14:return n=t.sent,a([].concat(Object(K.a)(r),Object(K.a)(n.results))),d(l+1),t.abrupt("break",25);case 18:return t.next=20,C.getTrendings(T,S);case 20:return n=t.sent,a([].concat(Object(K.a)(r),Object(K.a)(n.results))),m(l+1),t.abrupt("break",25);case 24:throw new Error("".concat(e.category," is not exit"));case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(1),console.log(t.t1);case 30:t.next=44;break;case 32:return s={query:_,page:l+1},t.prev=33,t.next=36,C.search(e.category,s);case 36:i=t.sent,a([].concat(Object(K.a)(r),Object(K.a)(i.results))),d(l+1),t.next=44;break;case 41:t.prev=41,t.t2=t.catch(33),console.log(t.t2);case 44:case"end":return t.stop()}}),t,null,[[1,27],[33,41]])})));return function(){return t.apply(this,arguments)}}();return Object(E.jsxs)("div",{className:"movie-grid",children:[Object(E.jsxs)("div",{className:"movie-grid__search",children:[Object(E.jsx)(X,{onChange:function(e){return f(e.target.value)},value:p,placeholder:"Type to text"}),Object(E.jsx)(P,{onClick:function(){g.push("/search/".concat(e.category,"/").concat(p)),d(1)},children:"Search"})]}),Object(E.jsx)("div",{className:"movie-grid__list",children:r.map((function(t,c){return Object(E.jsx)(Q,{item:t,category:e.category},c)}))}),l<=O?Object(E.jsx)(P,{onClick:k,children:"Load more"}):""]})},$=function(){var e=Object(o.g)().category;return Object(n.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})})),Object(E.jsxs)("div",{className:"catalog",children:[Object(E.jsx)("div",{className:"catalog__title",children:Object(E.jsx)("h3",{children:"movie"===e?"Movies":"tv"===e?"Tvs":"Trendings"})}),Object(E.jsx)("div",{className:"catolog__body",children:Object(E.jsx)(Z,{category:e})})]})},ee=(c(101),c(102),function(e){var t=Object(n.useState)([]),c=Object(F.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.getCredits(e.category,e.id);case 3:c=t.sent,a(c.cast.slice(0,5)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,e.id]),Object(E.jsx)("div",{className:"authers-cast",children:r.map((function(e,t){return Object(E.jsx)("div",{className:"authers-cast__item",style:{backgroundImage:"url(".concat(b.w500Img(e.profile_path),")")},children:Object(E.jsx)("span",{children:e.name})},t)}))})}),te=function(e){var t=e.video,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(E.jsxs)("div",{className:"detail__videos__item",children:[Object(E.jsx)("h3",{children:t.name}),Object(E.jsx)("iframe",{src:"https://youtube.com/embed/".concat(t.key),title:"video_item",ref:c})]})},ce=function(e){var t=Object(n.useState)([]),c=Object(F.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.getVideos(e.category,e.id);case 3:c=t.sent,a(c.results.slice(0,4)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e.id,e.category]),Object(E.jsx)(E.Fragment,{children:r.map((function(e,t){return Object(E.jsx)(te,{video:e},t)}))})},ne=function(e){var t=Object(n.useState)([]),c=Object(F.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={},t.prev=1,t.next=4,C.getSimilars(e.category,e.id,c);case 4:n=t.sent,a(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e.id,e.category]),Object(E.jsx)("div",{className:"similar-item",children:Object(E.jsx)(A.a,{grabCursor:!0,speed:500,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(E.jsx)(B.a,{children:Object(E.jsx)(Q,{item:t,category:e.category})},c)}))})})},re=function(){var e=Object(n.useState)(),t=Object(F.a)(e,2),c=t[0],r=t[1],a=Object(o.g)(),s=a.category,i=a.id;return Object(n.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})})),Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,C.getDetails("trending"===s?"movie":s,i,t);case 4:c=e.sent,console.log(c),r(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,i]),Object(E.jsx)(E.Fragment,{children:c&&Object(E.jsxs)("div",{className:"detail",children:[Object(E.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(b.originalImg(c.backdrop_path||c.poster_path),")")}}),Object(E.jsxs)("div",{className:"detail__info",children:[Object(E.jsx)("div",{className:"detail__info__img",style:{backgroundImage:"url(".concat(b.w500Img(c.poster_path||c.backdrop_path),")")}}),Object(E.jsxs)("div",{className:"detail__info__credits",children:[Object(E.jsx)("h2",{children:c.title||c.name}),Object(E.jsx)("div",{className:"detail__info__credits__select",children:c.genres.slice(0,5).map((function(e,t){return Object(E.jsx)(P,{children:e.name},t)}))}),Object(E.jsx)("p",{className:"detail__info__credits__overview",children:c.overview}),Object(E.jsxs)("div",{className:"detail__info__credits__authors",children:[Object(E.jsx)("h5",{children:"Casts"}),Object(E.jsx)(ee,{id:i,category:"trending"===s?"movie":s})]})]})]}),Object(E.jsx)("div",{className:"detail__videos",children:Object(E.jsx)(ce,{id:i,category:"trending"===s?"movie":s})}),Object(E.jsxs)("div",{className:"detail__similars",children:[Object(E.jsx)("h3",{children:"Similars"}),Object(E.jsx)(ne,{id:i,category:"trending"===s?"movie":s})]})]})})};var ae=function(){return Object(E.jsxs)(o.c,{children:[Object(E.jsx)(o.a,{path:"/search/:category/:keyword",component:$}),Object(E.jsx)(o.a,{path:"/:category/:id",component:re}),Object(E.jsx)(o.a,{path:"/:category",component:$}),Object(E.jsx)(o.a,{path:"/",component:G,exact:!0})]})};var se=function(){return Object(E.jsx)(i.a,{children:Object(E.jsx)("div",{className:"container",children:Object(E.jsx)(o.a,{render:function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(M,{}),Object(E.jsx)(ae,{}),Object(E.jsx)(q,{})]})}})})})};s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(se,{})}),document.getElementById("root"))},49:function(e,t,c){},83:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.0e618125.chunk.js.map