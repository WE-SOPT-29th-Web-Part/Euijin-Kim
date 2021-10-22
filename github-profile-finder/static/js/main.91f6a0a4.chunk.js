(this["webpackJsonpcra-js-basic"]=this["webpackJsonpcra-js-basic"]||[]).push([[0],{36:function(n,e,t){},38:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,l,d,b,u=t(1),j=t.n(u),p=t(26),x=t.n(p),h=(t(36),t(2)),f=t(13),g=t.n(f),O=t(5),m=t(27),v=t(7),w=(t(38),t(3)),k=t(0),y=function(){return Object(k.jsx)(I,{children:"GitHub Profile Finder"})},I=w.a.h1(r||(r=Object(h.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]))),U=t(15),S=function(n){var e=n.getUserInfo,t=n.userList,r=n.setUserList;return Object(k.jsx)(L,{children:t&&t.map((function(n){return Object(k.jsxs)(F,{children:[Object(k.jsx)("span",{onClick:function(){return function(n){e(n)}(n)},children:n}),Object(k.jsx)("button",{onClick:function(){return function(n){var e=t.filter((function(e){return e!==n}));r(e),localStorage.setItem("userList",JSON.stringify(e))}(n)},children:"X"})]},n)}))})},L=w.a.ul(o||(o=Object(h.a)(["\n  width: 300px;\n  background-color: #24272b;\n  color: #e5e6e7;\n  margin-bottom: 10px;\n  position: relative;\n  top: -10px;\n"]))),F=w.a.li(i||(i=Object(h.a)(["\n  padding: 8px 16px;\n  display: flex;\n  justify-content: space-between;\n  & > button {\n    border: 0;\n    outline: 0;\n    background-color: #24272b;\n    color: white;\n    cursor: pointer;\n  }\n  & > span {\n    cursor: pointer;\n  }\n"]))),J=function(n){var e=n.getUserInfo,t=Object(u.useState)(),r=Object(v.a)(t,2),o=r[0],i=r[1],c=Object(u.useState)([]),a=Object(v.a)(c,2),s=a[0],l=a[1];return Object(u.useEffect)((function(){l(JSON.parse(localStorage.getItem("userList")))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C,{onSubmit:function(n){if(n.preventDefault(),e(o),s.includes(o))i("");else{var t=s.length>=3?[].concat(Object(U.a)(s),[o]).slice(1,4):[].concat(Object(U.a)(s),[o]);l(t),localStorage.setItem("userList",JSON.stringify(t)),i("")}},children:Object(k.jsx)(_,{type:"text",placeholder:"Github \ud504\ub85c\ud544\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",onChange:function(n){i(n.target.value)},value:o||""})}),Object(k.jsx)(S,{getUserInfo:e,userList:s,setUserList:l})]})},C=w.a.form(c||(c=Object(h.a)(["\n  /* margin-bottom: 10px; */\n"]))),_=w.a.input(a||(a=Object(h.a)(["\n  border: 8px solid rgba(105, 105, 105, 0.5);\n  outline: none;\n  border-radius: 20px;\n  width: 320px;\n  height: 57px;\n  background-color: #24272b;\n  color: #e5e6e7;\n  padding: 16px;\n"]))),z=function(n){var e=n.data,t=n.setUserInfo,r=e.avatar_url,o=e.name,i=e.login,c=e.bio,a=e.html_url,s=e.followers,l=e.following,d=e.public_repos;return Object(k.jsxs)(G,{children:[Object(k.jsx)("button",{onClick:function(){return t((function(n){return Object(O.a)(Object(O.a)({},n),{},{status:"idle",data:null})}))},children:"\ub2eb\uae30"}),Object(k.jsx)("img",{src:r,alt:""}),Object(k.jsx)("h3",{children:o}),Object(k.jsx)("h4",{children:i}),Object(k.jsx)("p",{children:c}),Object(k.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:"Visit Github"}),Object(k.jsxs)(N,{children:[Object(k.jsxs)("li",{children:[Object(k.jsx)("strong",{children:"Followers"}),s]}),Object(k.jsxs)("li",{children:[Object(k.jsx)("strong",{children:"Following"}),l]}),Object(k.jsxs)("li",{children:[Object(k.jsx)("strong",{children:"Repos"}),d]})]})]})},G=w.a.section(s||(s=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 390px;\n  background-color: #2c3035;\n  border-radius: 20px;\n  position: relative;\n  animation: showUp 500ms ease-in 0s 1 normal forwards;\n\n  @keyframes showUp {\n    0% {\n      transform: translateY(-30px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0px);\n      opacity: 1;\n    }\n  }\n  & > button {\n    color: white;\n    background-color: #24272b;\n    outline: 0;\n    border: 0;\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n\n  & > img {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin-top: 30px;\n  }\n  & > h3 {\n    margin-top: 24px;\n    font-size: 24px;\n    font-weight: bold;\n  }\n  & > h4 {\n    margin-top: 5px;\n    font-size: 14px;\n  }\n  & > p {\n    padding: 20px 45px;\n    text-align: center;\n  }\n  & > a {\n    text-decoration: none;\n    color: gold;\n    border: 1px solid gold;\n    border-radius: 4px;\n    padding: 8px;\n    &:hover {\n      background-color: gold;\n      color: black;\n    }\n  }\n"]))),N=w.a.ul(l||(l=Object(h.a)(["\n  margin-top: 25px;\n  display: flex;\n\n  & > li {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 130px;\n    height: 59px;\n    background-color: #24272b;\n    border-left: 5px solid #2c3035;\n    border-right: 5px solid #2c3035;\n    &:nth-child(1) {\n      border-left: none;\n      border-bottom-left-radius: 20px;\n    }\n    &:nth-child(3) {\n      border-right: none;\n      border-bottom-right-radius: 20px;\n    }\n    & > strong {\n      font-weight: bold;\n      margin-bottom: 10px;\n    }\n  }\n"]))),E=function(){return Object(k.jsx)(R,{})},R=w.a.div(d||(d=Object(h.a)(["\n  width: 50px;\n  height: 50px;\n  border: 8px solid #1b1d21;\n  border-radius: 50%;\n  border-right-color: white;\n  animation: spin 500ms linear 0s infinite normal none;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Y=function(){return Object(k.jsx)("div",{children:"\uc0ac\uc6a9\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})},B=function(n){var e=n.userInfo,t=n.setUserInfo;switch(e.status){case"pending":return Object(k.jsx)(E,{});case"resolved":return Object(k.jsx)(z,{data:e.data,setUserInfo:t});case"rejected":return Object(k.jsx)(Y,{});case"idle":default:return Object(k.jsx)(k.Fragment,{})}},D=t(31),H=t.n(D).a.create({baseURL:"https://api.github.com/users/"});var M=function(){var n=Object(u.useState)({status:"idle",data:null}),e=Object(v.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(m.a)(g.a.mark((function n(e){var o,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(O.a)(Object(O.a)({},t),{},{status:"pending"})),n.prev=1,n.next=4,H.get("/".concat(e));case 4:o=n.sent,i=o.data,r(Object(O.a)(Object(O.a)({},t),{},{status:"resolved",data:i})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),r(Object(O.a)(Object(O.a)({},t),{},{status:"rejected",data:null}));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(k.jsxs)(P,{children:[Object(k.jsx)(y,{}),Object(k.jsx)(J,{getUserInfo:o}),Object(k.jsx)(B,{userInfo:t,setUserInfo:r})]})},P=w.a.main(b||(b=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #1b1d21;\n  color: #e5e6e7;\n"])));x.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(M,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.91f6a0a4.chunk.js.map