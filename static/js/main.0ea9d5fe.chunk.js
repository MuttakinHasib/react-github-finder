(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/spinner.4c140210.gif"},32:function(e,a,t){e.exports=t(62)},37:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),s=(t(37),t(5)),o=t(8),m=function(e){var a=e.icon,t=e.title;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{to:"/react-github-finder",className:"navbar-brand"},r.a.createElement("i",{className:a}),"\xa0 ",t),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/react-github-finder",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/about",className:"nav-link"},"About"))))))};m.defaultProps={title:"Github Finder",icon:"fab fa-github"};var i=m,u=Object(n.createContext)(),d=function(){var e=Object(n.useContext)(u).alert;return null!==e&&r.a.createElement("div",{className:"alert alert-".concat(e.type)},r.a.createElement("i",{className:"fas fa-info-circle"})," ",e.msg)},E=t(31),p=t.n(E),b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:p.a,alt:"Loading...",style:{width:"500px",marginTop:"1rem",display:"block",margin:"auto"}}))},f=function(e){var a=e.repo;return r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h5",null,r.a.createElement("a",{href:a.html_url},a.name))))},g=function(e){return e.repos.map((function(e){return r.a.createElement(f,{repo:e,key:e.id})}))},v=Object(n.createContext)(),h=function(e){var a=e.match,t=Object(n.useContext)(v),c=t.getUserRepos,l=t.repos,o=t.getUser,m=t.loading,i=t.user;Object(n.useEffect)((function(){o(a.params.login),c(a.params.login)}),[]);var u=i.name,d=i.company,E=i.avatar_url,p=i.location,f=i.bio,h=i.blog,N=i.login,_=i.html_url,y=i.followers,T=i.following,O=i.public_repos,S=i.public_gists,C=i.hireable;return m?r.a.createElement(b,null):r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn border btn-light mr-2"},r.a.createElement("i",{className:"fas fa-reply"}),"\xa0\xa0 Back to search"),"Hireable:","  ",C?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"}),r.a.createElement("div",{className:"card mt-3 card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 my-3"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:E,alt:"",className:"rounded-circle",style:{width:"150px"}}),r.a.createElement("h2",{className:"mt-2 font-weight-bold"},u),r.a.createElement("p",null,"Location: ",p))),r.a.createElement("div",{className:"col-md-6 my-3"},f&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("p",null,f)),r.a.createElement("a",{href:_,className:"btn btn-dark my-1"},"Visit GitHub Profile"),r.a.createElement("ul",{className:"navbar-nav mt-2"},N&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("strong",null,"Username: \xa0"),N),d&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("strong",null,"Company: \xa0"),d),h&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("strong",null,"Website: \xa0"),r.a.createElement("a",{href:h,rel:"noopener noreferrer",target:"_blank"},h))))),r.a.createElement("div",{className:"my-3 text-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary m-1"},"Followers \xa0"," ",r.a.createElement("span",{className:"badge badge-light"},y)),r.a.createElement("button",{type:"button",className:"btn m-1 btn-success"},"Following \xa0"," ",r.a.createElement("span",{className:"badge badge-light"},T)),r.a.createElement("button",{type:"button",className:"btn m-1 btn-light border text-dark"},"Public Repos \xa0"," ",r.a.createElement("span",{className:"badge badge-dark"},O)),r.a.createElement("button",{type:"button",className:"btn m-1 btn-dark"},"Public Gists \xa0"," ",r.a.createElement("span",{className:"badge badge-light"},S)))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement(g,{repos:l})))},N=t(11),_=function(){var e=Object(n.useContext)(v),a=Object(n.useContext)(u).showAlert,t=Object(n.useState)(""),c=Object(N.a)(t,2),l=c[0],s=c[1];return r.a.createElement("div",{className:"row align-items-center mb-3"},r.a.createElement("div",{className:"col-10 my-3"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""===l?a("Please enter something","danger"):(e.searchUsers(l),s(""))},className:"form"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col my-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Here...",value:l,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"col-sm-2 my-3"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-secondary"}))))),e.users.length>0&&r.a.createElement("div",{className:"col-sm"},r.a.createElement("button",{className:"btn btn-danger",onClick:e.clearUsers},"Clear")))},y=function(e){var a=e.user,t=a.login,n=a.avatar_url;a.html_url;return r.a.createElement("div",{className:"card card-body text-center"},r.a.createElement("img",{src:n,alt:"",style:{width:"100px"},className:"rounded d-block m-auto"}),r.a.createElement("h3",{className:"py-2"},t),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(t),className:"btn btn-dark btn-small"},"More")))},T=t(7),O=t.n(T),S=function(){var e=Object(n.useContext)(v),a=e.users;return e.loading?r.a.createElement(b,null):r.a.createElement("div",{style:x},a.map((function(e){return r.a.createElement(y,{key:e.id,user:e})})))};S.propsTypes={users:O.a.array.isRequired,loading:O.a.bool.isRequired};var C,R,x={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"1rem"},A=S,U=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement(A,null))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About this App"),r.a.createElement("p",null,"App to search Github Users"))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-1 text-center"},"Page Not Found"))},w=t(10),P=t.n(w),I=t(13),L=t(14),G=t.n(L),H=t(12),D=function(e,a){switch(a.type){case"SEARCH_USERS":return Object(H.a)({},e,{users:a.payload,loading:!1});case"GET_USER":return Object(H.a)({},e,{user:a.payload,loading:!1});case"GET_REPOS":return Object(H.a)({},e,{repos:a.payload,loading:!1});case"CLEAR_USERS":return Object(H.a)({},e,{users:[],loading:!1});case"SET_LOADING":return Object(H.a)({},e,{loading:!0});default:return e}};C=Object({NODE_ENV:"production",PUBLIC_URL:"/react-github-finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"9b362418a39de03e92e5",REACT_APP_GITHUB_CLIENT_SECRET:"60435d367d616dd9cd7b7e58acf94f689ba09648"}).GITHUB_CLIENT_ID,R=Object({NODE_ENV:"production",PUBLIC_URL:"/react-github-finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_CLIENT_ID:"9b362418a39de03e92e5",REACT_APP_GITHUB_CLIENT_SECRET:"60435d367d616dd9cd7b7e58acf94f689ba09648"}).GITHUB_CLIENT_SECRET;var B=function(e){var a=Object(n.useReducer)(D,{users:[],user:{},repos:[],loading:!1}),t=Object(N.a)(a,2),c=t[0],l=t[1],s=function(){var e=Object(I.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,G.a.get("https://api.github.com/search/users?q=".concat(a,"&client_id=").concat(C,"&").concat(R));case 4:t=e.sent,l({type:"SEARCH_USERS",payload:t.data.items}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),o=function(){var e=Object(I.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,G.a.get("https://api.github.com/users/".concat(a,"?client_id=").concat(C,"&").concat(R));case 4:t=e.sent,l({type:"GET_USER",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),m=function(){var e=Object(I.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,G.a.get("https://api.github.com/users/".concat(a,"/repos?per_page=5&sort=created:asc&client_id=").concat(C,"&").concat(R));case 4:t=e.sent,l({type:"GET_REPOS",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),i=function(){return l({type:"SET_LOADING"})};return r.a.createElement(v.Provider,{value:{users:c.users,user:c.user,repos:c.repos,loading:c.loading,searchUsers:s,clearUsers:function(){return l({type:"CLEAR_USERS"})},getUser:o,getUserRepos:m}},e.children)},F=function(e,a){switch(a.type){case"SET_ALERT":return a.payload;case"REMOVE_ALERT":return null;default:return e}},W=function(e){var a=Object(n.useReducer)(F,null),t=Object(N.a)(a,2),c=t[0],l=t[1];return r.a.createElement(u.Provider,{value:{alert:c,showAlert:function(e,a){l({type:"SET_ALERT",payload:{msg:e,type:a}}),setTimeout((function(){return l({type:"REMOVE_ALERT"})}),5e3)}}},e.children)},K=(t(61),function(){return r.a.createElement(B,null,r.a.createElement(W,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(d,{alert:alert}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/react-github-finder",component:U}),r.a.createElement(o.a,{exact:!0,path:"/about",component:k}),r.a.createElement(o.a,{exact:!0,path:"/user/:login",component:h}),r.a.createElement(o.a,{component:j})))))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0ea9d5fe.chunk.js.map