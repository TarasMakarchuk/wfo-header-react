(this["webpackJsonp01-hedaer"]=this["webpackJsonp01-hedaer"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports={NavbarWrapper:"Navbar_NavbarWrapper__2kzL7",Navbar:"Navbar_Navbar__3-yGW","fade-in":"Navbar_fade-in__2uIWJ"}},,,,,,,,,,,,,function(e,a,t){e.exports={LoginContainer:"Login_LoginContainer__1T3Iq",Authorized:"Login_Authorized__J8vx7"}},function(e,a,t){e.exports={Messages:"Messages_Messages__11H0G",MessagesForm:"Messages_MessagesForm__kBQB4"}},,,,function(e,a,t){e.exports={root:"App_root__3dYxF",App:"App_App__2PoPS"}},function(e,a,t){e.exports={Header:"Header_Header__1K5E7"}},function(e,a,t){e.exports={BurgerMenu:"Dropdown_BurgerMenu__2Q6l0","fade-in":"Dropdown_fade-in__3lIg0"}},,,function(e,a,t){e.exports={LogoContainer:"Logo_LogoContainer__3KkXg"}},function(e,a,t){e.exports={Home:"Home_Home__2FAXV"}},function(e,a,t){e.exports=t.p+"static/media/user-profile.c7dce8d0.png"},function(e,a,t){e.exports={Profile:"Profile_Profile__k5PbU"}},function(e,a,t){e.exports={Settings:"Settings_Settings__168H6"}},function(e,a,t){e.exports={About:"About_About__1xm4f"}},function(e,a,t){e.exports={Greeting:"Greeting_Greeting__gw1JG"}},function(e,a,t){e.exports={Page404:"Page404_Page404__2yAY7"}},function(e,a,t){e.exports=t(54)},,,,,function(e,a,t){},,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),s=t.n(c),l=t(16),o=t(12),m=t(13),i=t(15),u=t(14),d=t(27),p=t.n(d),E=t(28),h=t.n(E),g=t(29),v=t.n(g),N=(t(45),t(7)),f=t(9),b=t.n(f),A=t(3),_=t(4),x=function(e){return r.a.createElement("span",{onClick:function(){e.changeIsAuth(),e.clearAuthData()}},"Logout ",r.a.createElement(A.a,{icon:_.i}))},w=function(e){var a=e.isAuth?r.a.createElement(x,{changeIsAuth:e.changeIsAuth,clearAuthData:e.clearAuthData}):r.a.createElement(r.a.Fragment,null,"Login ",r.a.createElement(A.a,{icon:_.g}));return r.a.createElement("div",{className:b.a.NavbarWrapper},r.a.createElement("nav",{className:b.a.Navbar},r.a.createElement("div",null,r.a.createElement(N.b,{to:"/login",className:b.a.MenuItem},a)),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/home",className:b.a.MenuItem},"Home ",r.a.createElement(A.a,{icon:_.e}))),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/profile",className:b.a.MenuItem},"Profile ",r.a.createElement(A.a,{icon:_.j}))),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/messages",className:b.a.MenuItem},"Messages ",r.a.createElement(A.a,{icon:_.c}))),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/settings",className:b.a.MenuItem},"Settings ",r.a.createElement(A.a,{icon:_.b}))),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/about",className:b.a.MenuItem},"About ",r.a.createElement(A.a,{icon:_.f})))))},M=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isOpenMenu:!1,openMenuClass:"opened",closeMenuClass:"nav-toggle"},e.menuClickHandler=function(){e.setState(Object(l.a)({},e.state,{isOpenMenu:!e.state.isOpenMenu}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isOpenMenu?this.state.openMenuClass:this.state.closeMenuClass;return r.a.createElement("div",null,r.a.createElement("div",{className:v.a.BurgerMenu},r.a.createElement("nav",null,r.a.createElement("button",{className:e,onClick:this.menuClickHandler},r.a.createElement("span",{className:"bar-top"}," "),r.a.createElement("span",{className:"bar-mid"}," "),r.a.createElement("span",{className:"bar-bot"}," ")))),r.a.createElement("div",null,this.state.isOpenMenu&&r.a.createElement(w,{isAuth:this.props.isAuth,changeIsAuth:this.props.changeIsAuth,clearAuthData:this.props.clearAuthData})))}}]),t}(n.Component),y=t(32),D=t.n(y),I=function(){return r.a.createElement("div",{className:D.a.LogoContainer},r.a.createElement(A.a,{icon:_.d}))},O=t(10),C=t(22),L=t.n(C),P=function(e){return r.a.createElement(r.a.Fragment,null,e.isAuth?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"}),r.a.createElement("div",{className:L.a.Authorized+" col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",{className:"text-center"},"Authorized!"))))):r.a.createElement("div",{className:L.a.LoginContainer+" container"},r.a.createElement("div",{className:"card card-title"},r.a.createElement("h1",{className:"text-center"},"Login form")),r.a.createElement("form",{onClick:function(a){a.preventDefault(),"login"===a.target.value&&e.changeIsAuth()}},r.a.createElement("div",{className:"card card-body"},r.a.createElement("label",null,"login"),r.a.createElement("input",{type:"text",placeholder:"enter login",onChange:function(a){e.setLogin(a.target.value)},value:e.login}),r.a.createElement("label",null,"password"),r.a.createElement("input",{type:"password",placeholder:"enter password",onChange:function(a){e.setPassword(a.target.value)},value:e.password})),r.a.createElement("div",{className:"card card-footer"},r.a.createElement("input",{type:"button",value:"login",className:"btn btn-success"})))))},j=t(33),k=t.n(j),H=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"}),r.a.createElement("div",{className:k.a.Home+" col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",{className:"text-center"},"Home page"),r.a.createElement("span",{className:"text-center"},"used bootstrap, fontawesome, routing, redirect to homepage, page 404, responsive design")))))},U=t(34),S=t.n(U),F=t(35),G=t.n(F),W=function(){return r.a.createElement("div",{className:G.a.Profile+" container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card card-header"},r.a.createElement("div",{className:"card card-title"},r.a.createElement("h1",{className:"text-center"},"Profile")),r.a.createElement("img",{src:S.a,alt:"profile image"}),r.a.createElement("div",{className:"card card-title"},r.a.createElement("h3",{className:"text-center"},"User name"))),r.a.createElement("div",{className:"card card-body"},"CEO & Founder, Example",r.a.createElement("div",{className:"text-center"},r.a.createElement(A.a,{icon:_.h}),r.a.createElement(A.a,{icon:_.a}),r.a.createElement(A.a,{icon:_.c}),r.a.createElement(A.a,{icon:_.b}))),r.a.createElement("div",{className:"card card-footer"},r.a.createElement("button",{className:"btn btn-success"},"Edit profile"))))},B=t(23),z=t.n(B),J=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-12"}),r.a.createElement("div",{className:z.a.MessagesForm+" col-md-7 col-sm-7 col-xs-12"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",{className:"text-center"},"Messages")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:z.a.MessagesForm+" col-lg-11 col-md-11 col-sm-12 "},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control form-control-lg"})),r.a.createElement("input",{type:"submit",className:"btn btn-secondary btn-block",value:"send"})))))))},K=t(36),Q=t.n(K),X=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"}),r.a.createElement("div",{className:Q.a.Settings+" col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",{className:"text-center"},"Settings")))))},Y=t(37),q=t.n(Y),T=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"}),r.a.createElement("div",{className:q.a.About+" col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",{className:"text-center"},"About")))))},V=t(38),R=t.n(V),Z=function(e){return e.isAuth&&r.a.createElement("h2",{className:R.a.Greeting},"Hi, ",e.userName)},$=t(39),ee=t.n($),ae=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:ee.a.Page404+" text-center"},"Error: 404, page not found, something went wrong"))},te=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).LoginWrapper=function(){return r.a.createElement(P,{changeIsAuth:e.props.changeIsAuth,isAuth:e.props.isAuth,setLogin:e.props.setLogin,setPassword:e.props.setPassword,authUserData:e.props.authUserData})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.Header},r.a.createElement(I,null),r.a.createElement(Z,{userName:this.props.authUserData.login,isAuth:this.props.isAuth}),r.a.createElement(M,{isAuth:this.props.isAuth,changeIsAuth:this.props.changeIsAuth,clearAuthData:this.props.clearAuthData})),r.a.createElement("div",null,r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",render:function(){return r.a.createElement(O.a,{to:"/home"})}}),r.a.createElement(O.b,{path:"/login",component:this.LoginWrapper}),r.a.createElement(O.b,{path:"/home",component:H}),r.a.createElement(O.b,{path:"/profile",component:W}),r.a.createElement(O.b,{path:"/messages",component:J}),r.a.createElement(O.b,{path:"/settings",component:X}),r.a.createElement(O.b,{path:"/about",component:T}),r.a.createElement(O.b,{path:"*",render:function(){return r.a.createElement("div",null,r.a.createElement(ae,null))}}))))}}]),t}(n.Component),ne=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isAuth:!1,authUserData:{login:"",password:""}},e.changeIsAuth=function(){e.setState(Object(l.a)({},e.state,{isAuth:!e.state.isAuth}))},e.clearAuthData=function(){e.setState({isAuth:!1,authUserData:{login:"",password:""}})},e.setLogin=function(a){var t=e.state.authUserData.password;e.setState(Object(l.a)({},e.state,{authUserData:{login:a,password:t}}))},e.setPassword=function(a){var t=e.state.authUserData.login;e.setState(Object(l.a)({},e.state,{authUserData:{login:t,password:a}}))},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.App},r.a.createElement(te,{changeIsAuth:this.changeIsAuth,isAuth:this.state.isAuth,setLogin:this.setLogin,setPassword:this.setPassword,authUserData:this.state.authUserData,clearAuthData:this.clearAuthData}))}}]),t}(n.Component);t(53);s.a.render(r.a.createElement(N.a,null,r.a.createElement(ne,null)),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.f69243c1.chunk.js.map