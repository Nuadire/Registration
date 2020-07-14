(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{135:function(e,t,a){e.exports=a(256)},146:function(e,t,a){},243:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);a(136);var n,r,o,c=a(0),i=a.n(c),s=a(29),l=a(33),u=a(108),m=Object(u.a)(),g=a(46),p=a(109),f=a(110),b=a(22),E=a(258),O=a(262),d=Object(O.a)("USERS_REGISTER_REQUEST"),j=Object(O.a)("USERS_REGISTER_SUCCESS"),h=Object(O.a)("USERS_REGISTER_FAILURE"),S=Object(O.a)("USERS_LOGIN_REQUEST"),v=Object(O.a)("USERS_LOGIN_SUCCESS"),y=Object(O.a)("USERS_LOGIN_FAILURE"),R=Object(O.a)("USERS_LOGOUT"),w=Object(O.a)("ALERT_SUCCESS"),I=Object(O.a)("ALERT_ERROR"),C=Object(O.a)("ALERT_CLEAR"),T=JSON.parse(localStorage.getItem("user")),U=T?{loggedIn:!0,user:T}:{},_=Object(E.a)((n={},Object(b.a)(n,y,(function(e,t){return{loggingIn:!0,user:t.payload}})),Object(b.a)(n,S,(function(e,t){return{loggingIn:!0,user:t.payload}})),Object(b.a)(n,v,(function(){return{}})),Object(b.a)(n,R,(function(){return{}})),n),U),L=Object(E.a)((r={},Object(b.a)(r,d,(function(){return{registering:!0}})),Object(b.a)(r,j,(function(){return{}})),Object(b.a)(r,h,(function(){return{}})),r),{}),N=Object(E.a)((o={},Object(b.a)(o,w,(function(e,t){return{type:"success",message:t.payload}})),Object(b.a)(o,I,(function(e,t){var a=t.payload;return{type:"error",message:Object.keys(a).reduce((function(e,t){var n=a[t].join(", ");return"".concat(e," ").concat(t," ").concat(n,"\n")}),"").trim()}})),Object(b.a)(o,C,(function(){return{}})),o),{}),k=Object(g.c)({authentication:_,registration:L,alert:N}),x=Object(f.createLogger)(),P=Object(g.d)(k,Object(g.a)(p.a,x)),A=a(111),G=a(112),J=a(133),q=a(130),F=a(8),B=a(261),Q=a(134),W=function(e){var t=e.component,a=Object(Q.a)(e,["component"]);return i.a.createElement(F.b,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?i.a.createElement(t,e):i.a.createElement(F.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},H=a(39);var $=Object(l.b)((function(e){return e.authentication.user}))((function(e){var t=e.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Hi ",t.username,"!"),i.a.createElement("p",null,i.a.createElement(H.a,{to:"/login"},"Logout")))})),z=a(257),D=a(260),K=a(87),M=a(58),V=a.n(M),X=a(84);function Y(){localStorage.removeItem("user")}var Z=function(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(Y(),window.location.reload(!0));var n=a&&a.errors||e.statusText;return Promise.reject(n)}return a}))};var ee={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e.toLowerCase(),password:t}})};return fetch("".concat("https://conduit.productionready.io/api/","users/login"),a).then(Z).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:Y,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),redirect:"follow"};return fetch("".concat("https://conduit.productionready.io/api/","users"),t).then(Z)}},te={login:function(e,t){return function(){var a=Object(X.a)(V.a.mark((function a(n){var r;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d()),a.prev=1,a.next=4,ee.login(e,t);case 4:r=a.sent,n(j(r)),m.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),n(h(a.t0)),n(I(a.t0));case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},logout:function(){return ee.logout(),R()},register:function(e){return function(){var t=Object(X.a)(V.a.mark((function t(a){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(y(e)),t.prev=1,t.next=4,ee.register(e);case 4:a(S(e)),m.push("/login"),a(w("Registration successful")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a(v(t.t0)),a(I(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},ae=(a(146),{labelCol:{span:8},wrapperCol:{span:8}}),ne={wrapperCol:{offset:8,span:8}};var re={login:te.login,logout:te.logout},oe=Object(l.b)((function(e){return{loggingIn:e.authentication.loggingIn}}),re)((function(e){var t=e.login;return i.a.createElement(z.a,Object.assign({},ae,{name:"basic",onFinish:function(e){var a=e.email,n=e.password;t(a,n)},className:"login-form"}),i.a.createElement(z.a.Item,{name:"email",label:"Email",rules:[{type:"email",required:!0}]},i.a.createElement(D.a,null)),i.a.createElement(z.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}]},i.a.createElement(D.a.Password,null)),i.a.createElement(z.a.Item,ne,i.a.createElement(K.a,{type:"primary",htmlType:"submit"},"Login"),i.a.createElement(H.a,{className:"login-form--signup",to:"/signup"},"Registration")))})),ce=(a(243),{labelCol:{span:8},wrapperCol:{span:8}}),ie={wrapperCol:{offset:8,span:8}},se=function(e){var t=e.register,a=e.registering;return i.a.createElement(z.a,Object.assign({},ce,{name:"basic",onFinish:function(e){t({user:e})},className:"registration-form"}),i.a.createElement(z.a.Item,{name:"username",label:"Username",rules:[{required:!0}]},i.a.createElement(D.a,null)),i.a.createElement(z.a.Item,{name:"email",label:"Email",rules:[{type:"email",required:!0}]},i.a.createElement(D.a,null)),i.a.createElement(z.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}]},i.a.createElement(D.a.Password,null)),i.a.createElement(z.a.Item,ie,i.a.createElement(K.a,{type:"primary",htmlType:"submit",loading:a},"Register"),i.a.createElement(H.a,{to:"/login",className:"registration-form--signup"},"Cancel")))};se.defaultProps={registering:!1};var le={register:te.register},ue=Object(l.b)((function(e){return{registering:e.registration.registering}}),le)(se),me=function(e){Object(J.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(A.a)(this,a),n=t.call(this,e),m.listen((function(){n.props.clearAlerts()})),n}return Object(G.a)(a,[{key:"render",value:function(){var e=this.props.alert;return i.a.createElement("div",{className:"app"},e.message&&i.a.createElement(B.a,{type:e.type,message:e.message}),i.a.createElement(F.c,{history:m},i.a.createElement(F.d,null,i.a.createElement(W,{exact:!0,path:"/Registration/",component:$}),i.a.createElement(F.b,{path:"/Registration/login",component:oe}),i.a.createElement(F.b,{path:"/Registration/signup",component:ue}),i.a.createElement(F.a,{from:"*",to:"/Registration/"}))))}}]),a}(i.a.Component);var ge={clearAlerts:C},pe=Object(l.b)((function(e){return{alert:e.alert}}),ge)(me);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(s.render)(i.a.createElement(l.a,{store:P},i.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.2eaefb23.chunk.js.map