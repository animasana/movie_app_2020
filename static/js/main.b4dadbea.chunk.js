(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o),c=(a(27),a(6)),i=a(1);a(28);var l=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(14),u=a.n(m),v=a(20),p=a(9),f=a(10),d=a(12),h=a(11);a(30);var E=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"..."))))},y=(a(36),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating").then((function(e){return e.json()}));case 2:a=t.sent,n=a.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(E,{key:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(37);var g=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var _=function(){return r.a.createElement(c.a,null,r.a.createElement(g,null),r.a.createElement(i.a,{path:"/",exact:!0,component:y}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie-detail",component:b}))};s.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b4dadbea.chunk.js.map