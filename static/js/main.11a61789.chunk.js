(this["webpackJsonpapp-for-hometasks"]=this["webpackJsonpapp-for-hometasks"]||[]).push([[0],[,,,,,function(e,t,r){e.exports={someClass:"Affairs_someClass__1HVzc",rows:"Affairs_rows__2Ldd9",high:"Affairs_high__17LNk",middle:"Affairs_middle__eFolA",low:"Affairs_low__1Fi0s",button:"Affairs_button__1BWte",superButton:"Affairs_superButton__30ofc"}},function(e,t,r){e.exports={nav:"Header_nav__2d_f2",itemN:"Header_itemN__1jcOa",itemA:"Header_itemA__3D-B4"}},,,,,,,,function(e,t,r){e.exports={superInput:"SuperInputText_superInput__27pi_",errorInput:"SuperInputText_errorInput__3FcDc",error:"SuperInputText_error__3-x1y"}},function(e,t,r){e.exports={error:"Error_error__GZlw9",number:"Error_number__2VJEP",text:"Error_text__3bey8",smile:"Error_smile__30SyC"}},,,,function(e,t,r){e.exports={default:"SuperButton_default__1Te0F",red:"SuperButton_red__38pff"}},function(e,t,r){e.exports={someClass:"Greeting_someClass__3bY38",error:"Greeting_error__2qGGF",errorMessage:"Greeting_errorMessage__3xlCU"}},function(e,t,r){e.exports={blue:"HW4_blue__1ioMV",column:"HW4_column__3Mopg",testSpanError:"HW4_testSpanError__3oA96"}},function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__1dDaS",spanClassName:"SuperCheckbox_spanClassName__10JD5"}},,,function(e,t,r){e.exports={App:"App_App__hSf1L"}},,,,,,,,,function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var n,a,c,s,i,o,j=r(1),l=r.n(j),u=r(24),d=r.n(u),b=(r(34),r(25)),x=r.n(b),h=r(7),m=r(2),O=r(8),p=r(9),f=r(0);var _=function(e){return Object(f.jsxs)(C,{children:[Object(f.jsx)(v,{textavatar:e.avatar}),Object(f.jsx)(g,{textname:e.name,textmessege:e.message,texttime:e.time})]})};function v(e){return Object(f.jsx)(y,{src:e.textavatar})}function g(e){return Object(f.jsxs)(N,{children:[Object(f.jsx)(k,{children:e.textname}),Object(f.jsx)(w,{children:e.textmessege}),Object(f.jsx)(A,{children:e.texttime})]})}var C=p.a.div(n||(n=Object(O.a)(["\n  background-color: aqua;\n  width: 400px;\n  height: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-end;\n  margin: 10px;\n"]))),N=p.a.div(a||(a=Object(O.a)(["\n  background-color: green;\n  height: 65px;\n  margin: 10px;\n  border-radius: 10px;\n"]))),k=p.a.div(c||(c=Object(O.a)(["\n    font-weight: bold;\n    margin-left: 10px;\n    color: red;\n"]))),w=p.a.div(s||(s=Object(O.a)(["\n    margin-left: 10px;\n"]))),A=p.a.div(i||(i=Object(O.a)(["\n    margin-right: 10px;\n    margin-left: 250px;\n"]))),y=p.a.img(o||(o=Object(O.a)(["\n  width: 50px;\n  border-radius: 30px;\n  margin-top: 20px;\n"]))),S="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",F="Some Name",T="some text",B="22:00";var E=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(f.jsx)(_,{avatar:S,name:F,message:T,time:B}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},H=r(3),I=r(11),J=r(12),P=r(19),W=r.n(P),G=function(e){var t=e.red,r=e.className,n=Object(J.a)(e,["red","className"]),a="".concat(t?W.a.red:W.a.default," ").concat(r);return Object(f.jsx)("button",Object(I.a)({className:a},n))},M=r(5),U=r.n(M);var L=function(e){var t="high"===e.affair.priority?U.a.high:"middle"===e.affair.priority?U.a.middle:"low"===e.affair.priority?U.a.low:"";return Object(f.jsxs)("div",{className:U.a.rows,children:[Object(f.jsx)("p",{children:e.affair.name}),"  ",Object(f.jsx)("p",{className:t,children:e.affair.priority}),Object(f.jsx)(G,{className:U.a.button,red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var D=function(e){var t=e.data.map((function(t){return Object(f.jsx)(L,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(f.jsxs)("div",{children:[t,Object(f.jsx)(G,{className:U.a.superButton,onClick:function(){return e.setFilter("all")},children:"All"}),Object(f.jsx)(G,{className:U.a.superButton,onClick:function(){return e.setFilter("high")},children:"High"}),Object(f.jsx)(G,{className:U.a.superButton,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(f.jsx)(G,{className:U.a.superButton,onClick:function(){return e.setFilter("low")},children:"Low"})]})},q=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var K=function(){var e=Object(j.useState)(q),t=Object(H.a)(e,2),r=t[0],n=t[1],a=Object(j.useState)("all"),c=Object(H.a)(a,2),s=c[0],i=c[1],o=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,s);return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 2",Object(f.jsx)(D,{data:o,setFilter:i,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},V=r(29),X=r(20),Y=r.n(X),Z=r(14),z=r.n(Z),R=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(z.a.error," ").concat(s||""),j="".concat(z.a.superInput," ").concat(c?z.a.errorInput:z.a.superInput);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:j},i)),c&&Object(f.jsx)("span",{className:o,children:c})]})},$=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,c=e.totalUsers,s=a?Y.a.error:"";return Object(f.jsxs)("div",{children:[Object(f.jsx)(R,{value:t,onChange:r,className:s}),a&&Object(f.jsx)("span",{className:Y.a.errorMessage,children:"Are you stupid?"}),Object(f.jsx)(G,{onClick:n,children:"Add"}),Object(f.jsx)("span",{children:c})]})},Q=function(e){var t=e.users,r=e.addUserCallback,n=Object(j.useState)(""),a=Object(H.a)(n,2),c=a[0],s=a[1],i=Object(j.useState)(!1),o=Object(H.a)(i,2),l=o[0],u=o[1],d=t.length;return Object(f.jsx)($,{name:c,setNameCallback:function(e){s(e.currentTarget.value),u(!1)},addUser:function(){""!==c.trim()?(r(c),s(""),u(!1),alert("Hello "+c+"!")):(s(""),u(!0))},error:l,totalUsers:d})},ee=r(40);var te=function(){var e=Object(j.useState)([]),t=Object(H.a)(e,2),r=t[0],n=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 3",Object(f.jsx)(Q,{users:r,addUserCallback:function(e){var t={_id:Object(ee.a)(),name:e};n([].concat(Object(V.a)(r),[t]))}}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},re=r(21),ne=r.n(re),ae=r(22),ce=r.n(ae),se=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ce.a.checkbox," ").concat(n||"");return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:s},c)),a&&Object(f.jsx)("span",{className:ce.a.spanClassName,children:a})]})};var ie=function(){var e=Object(j.useState)(""),t=Object(H.a)(e,2),r=t[0],n=t[1],a=r?"":"error",c=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},s=Object(j.useState)(!1),i=Object(H.a)(s,2),o=i[0],l=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 4",Object(f.jsxs)("div",{className:ne.a.column,children:[Object(f.jsx)(R,{value:r,onChangeText:n,onEnter:c,error:a}),Object(f.jsx)(R,{className:ne.a.blue}),Object(f.jsx)(G,{children:"default"}),Object(f.jsx)(G,{red:!0,onClick:c,children:"delete "}),Object(f.jsx)(G,{disabled:!0,children:"disabled"}),Object(f.jsx)(se,{checked:o,onChangeChecked:l,children:"some text "}),Object(f.jsx)(se,{checked:o,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})};var oe=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(E,{}),Object(f.jsx)(K,{}),Object(f.jsx)(te,{}),Object(f.jsx)(ie,{})]})},je=r(15),le=r.n(je);var ue=function(){return Object(f.jsxs)("div",{className:le.a.error,children:[Object(f.jsx)("div",{className:le.a.number,children:"404"}),Object(f.jsx)("div",{className:le.a.text,children:"Page not found!"}),Object(f.jsx)("div",{className:le.a.smile,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var de=function(){return Object(f.jsx)("div",{children:"HomeTask For Junior Level"})};var be=function(){return Object(f.jsx)("div",{children:"HomeTask For JuniorPlus Level"})},xe="/pre-junior",he="/junior",me="/junior-plus";var Oe=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{path:"/",element:Object(f.jsx)(oe,{})}),Object(f.jsx)(m.a,{path:xe,element:Object(f.jsx)(oe,{})}),Object(f.jsx)(m.a,{path:he,element:Object(f.jsx)(de,{})}),Object(f.jsx)(m.a,{path:me,element:Object(f.jsx)(be,{})}),Object(f.jsx)(m.a,{path:"*",element:Object(f.jsx)(ue,{})})]})})},pe=r(6),fe=r.n(pe);var _e=function(){return Object(f.jsxs)("div",{className:fe.a.nav,children:[Object(f.jsx)(h.b,{className:function(e){return e.isActive?fe.a.itemA:fe.a.itemN},to:xe,children:"Pre-Junior"}),Object(f.jsx)(h.b,{className:function(e){return e.isActive?fe.a.itemA:fe.a.itemN},to:he,children:"Junior"}),Object(f.jsx)(h.b,{className:function(e){return e.isActive?fe.a.itemA:fe.a.itemN},to:me,children:"Junior-Plus"})]})};var ve=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(_e,{}),Object(f.jsx)(Oe,{})]})})};var ge=function(){return Object(f.jsxs)("div",{className:x.a.App,children:[Object(f.jsx)("div",{children:"react homeworks:"}),Object(f.jsx)(ve,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[38,1,2]]]);
//# sourceMappingURL=main.11a61789.chunk.js.map