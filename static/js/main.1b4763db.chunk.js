(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{133:function(e,t,n){e.exports=n(255)},144:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);n(134);var r,a,o,i=n(0),c=n.n(i),s=n(30),u=n(28),l=n(42),m=n(112),p=n(22),g=n(258),f=n(261),b=Object(f.a)("USERS_REGISTER_REQUEST"),E=Object(f.a)("USERS_REGISTER_SUCCESS"),O=Object(f.a)("USERS_REGISTER_FAILURE"),h=Object(f.a)("USERS_LOGIN_REQUEST"),d=Object(f.a)("USERS_LOGIN_SUCCESS"),j=Object(f.a)("USERS_LOGIN_FAILURE"),v=Object(f.a)("USERS_LOGOUT"),S=Object(f.a)("ALERT_SUCCESS"),y=Object(f.a)("ALERT_ERROR"),w=Object(f.a)("ALERT_CLEAR"),I=JSON.parse(localStorage.getItem("user")),R=I?{loggedIn:!0,user:I}:{},_=Object(g.a)((r={},Object(p.a)(r,h,(function(){return{loggingIn:!0}})),Object(p.a)(r,d,(function(e,t){return{loggingIn:!0,user:t.payload}})),Object(p.a)(r,j,(function(){return{loggingIn:!1}})),Object(p.a)(r,v,(function(){return{loggingIn:!1}})),r),R),C=Object(g.a)((a={},Object(p.a)(a,b,(function(){return{registering:!0}})),Object(p.a)(a,E,(function(){return{}})),Object(p.a)(a,O,(function(){return{}})),a),{}),U=Object(g.a)((o={},Object(p.a)(o,S,(function(e,t){return{type:"success",message:t.payload}})),Object(p.a)(o,y,(function(e,t){return{type:"error",message:t.payload}})),Object(p.a)(o,w,(function(){return{}})),o),{}),T=Object(l.c)({authentication:_,registration:C,alert:U}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,N=[m.a],P=Object(l.e)(T,L(l.a.apply(void 0,N))),k=n(66),x=n(67),A=n(78),F=n(77),G=n(37),J=n(8),q=n(260),H=n(132);var D=Object(u.b)((function(e){return{privateKey:e.authentication.user}}))((function(e){var t=e.component,n=e.privateKey,r=Object(H.a)(e,["component","privateKey"]);return c.a.createElement(J.b,Object.assign({},r,{render:function(e){return n?c.a.createElement(t,e):c.a.createElement(J.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}));var K=Object(u.b)((function(e){return e.authentication.user}))((function(e){var t=e.user;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Hi ",t.username,"!"),c.a.createElement("p",null,c.a.createElement(G.b,{to:"/login"},"Logout")))})),B=n(256),M=n(259),Q=n(91),W=n(58),X=n.n(W),V=n(88),$={routHome:"/",routLogin:"/login",routSignUp:"/signup",login:"".concat("https://conduit.productionready.io/api/","users/login"),register:"".concat("https://conduit.productionready.io/api/","users")};function z(){localStorage.removeItem("user")}var Y=function(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){if(401===e.status&&z(),n&&n.errors){var r=Object.keys(n.errors).reduce((function(e,t){var r=n.errors[t].join(", ");return"".concat(e," ").concat(t," ").concat(r,"; ")}),"").trim();return Promise.reject(r)}if(e.statusText)return Promise.reject(e.statusText)}return n}))};var Z={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e.toLowerCase(),password:t}})};return fetch($.login,n).then(Y).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:z,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e}),redirect:"follow"};return fetch($.register,t).then(Y)}},ee={login:function(e,t,n){return function(){var r=Object(V.a)(X.a.mark((function r(a){var o;return X.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(h()),r.prev=1,r.next=4,Z.login(e,t);case 4:o=r.sent,a(d(o)),n(),a(w()),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),a(j(r.t0)),a(y(r.t0));case 14:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()},logout:function(){return function(e){Z.logout(),e(v()),e(w())}},register:function(e,t){return function(){var n=Object(V.a)(X.a.mark((function n(r){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(e)),n.prev=1,n.next=4,Z.register(e);case 4:r(E()),t(),r(S("Registration successful")),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),r(O(n.t0)),r(y(n.t0));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}},te=(n(144),{labelCol:{span:8},wrapperCol:{span:8}}),ne={wrapperCol:{offset:8,span:8}},re=function(e){return function(){return e.push($.routHome)}},ae=function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onFinish=function(t){var n=t.email,r=t.password,a=e.props,o=a.login,i=a.history;o(n,r,re(i))},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.logout)()}},{key:"render",value:function(){var e=this.props.loggingIn;return c.a.createElement(B.a,Object.assign({},te,{name:"basic",onFinish:this.onFinish,className:"login-form"}),c.a.createElement(B.a.Item,{name:"email",label:"Email",rules:[{type:"email",required:!0}]},c.a.createElement(M.a,null)),c.a.createElement(B.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(M.a.Password,null)),c.a.createElement(B.a.Item,ne,c.a.createElement(Q.a,{type:"primary",htmlType:"submit",loading:e},"Login"),c.a.createElement(G.b,{className:"login-form--signup",to:$.routSignUp},"Registration")))}}]),n}(c.a.PureComponent);ae.defaultProps={loggingIn:!1};var oe={login:ee.login,logout:ee.logout},ie=Object(u.b)((function(e){return{loggingIn:e.authentication.loggingIn}}),oe)(ae),ce=(n(241),{labelCol:{span:8},wrapperCol:{span:8}}),se={wrapperCol:{offset:8,span:8}},ue=function(e){var t=e.register,n=e.registering,r=e.history;return c.a.createElement(B.a,Object.assign({},ce,{name:"basic",onFinish:function(e){t(e,function(e){return function(){return e.push($.routLogin)}}(r))},className:"registration-form"}),c.a.createElement(B.a.Item,{name:"username",label:"Username",rules:[{required:!0}]},c.a.createElement(M.a,null)),c.a.createElement(B.a.Item,{name:"email",label:"Email",rules:[{type:"email",required:!0}]},c.a.createElement(M.a,null)),c.a.createElement(B.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(M.a.Password,null)),c.a.createElement(B.a.Item,se,c.a.createElement(Q.a,{type:"primary",htmlType:"submit",loading:n},"Register"),c.a.createElement(G.b,{to:"/login",className:"registration-form--signup"},"Cancel")))};ue.defaultProps={registering:!1};var le={register:ee.register},me=Object(u.b)((function(e){return{registering:e.registration.registering}}),le)(ue),pe=(n(242),function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.alert;return c.a.createElement("div",{className:"app"},e.message&&c.a.createElement(q.a,{type:e.type,message:e.message}),c.a.createElement(G.a,null,c.a.createElement(J.d,null,c.a.createElement(D,{exact:!0,path:$.routHome,component:K}),c.a.createElement(J.b,{path:$.routLogin,component:ie}),c.a.createElement(J.b,{path:$.routSignUp,component:me}))))}}]),n}(c.a.PureComponent));var ge=Object(u.b)((function(e){return{alert:e.alert}}))(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(s.render)(c.a.createElement(u.a,{store:P},c.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.1b4763db.chunk.js.map