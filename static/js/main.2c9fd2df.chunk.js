(this["webpackJsonpapp-for-hometasks"]=this["webpackJsonpapp-for-hometasks"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__1HVzc",rows:"Affairs_rows__2Ldd9",high:"Affairs_high__17LNk",middle:"Affairs_middle__eFolA",low:"Affairs_low__1Fi0s",button:"Affairs_button__1BWte",superButton:"Affairs_superButton__30ofc"}},function(e,t,n){e.exports={nav:"Header_nav__2d_f2",itemN:"Header_itemN__1jcOa",itemA:"Header_itemA__3D-B4"}},,,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__27pi_",errorInput:"SuperInputText_errorInput__3FcDc",error:"SuperInputText_error__3-x1y"}},function(e,t,n){e.exports={error:"Error_error__GZlw9",number:"Error_number__2VJEP",text:"Error_text__3bey8",smile:"Error_smile__30SyC"}},,,,function(e,t,n){e.exports={default:"SuperButton_default__1Te0F",red:"SuperButton_red__38pff"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__3bY38",error:"Greeting_error__2qGGF",errorMessage:"Greeting_errorMessage__3xlCU"}},function(e,t,n){e.exports={blue:"HW4_blue__1ioMV",column:"HW4_column__3Mopg",testSpanError:"HW4_testSpanError__3oA96"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1dDaS",spanClassName:"SuperCheckbox_spanClassName__10JD5"}},,,function(e,t,n){e.exports={App:"App_App__hSf1L"}},,,,function(e,t,n){e.exports={span:"SuperEditableSpan_span__1q0SY"}},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,o,j=n(1),l=n.n(j),u=n(24),b=n.n(u),d=(n(35),n(25)),h=n.n(d),x=n(9),O=n(2),p=n(10),m=n(11),f=n(0);var v=function(e){return Object(f.jsxs)(C,{children:[Object(f.jsx)(_,{textavatar:e.avatar}),Object(f.jsx)(g,{textname:e.name,textmessege:e.message,texttime:e.time})]})};function _(e){return Object(f.jsx)(w,{src:e.textavatar})}function g(e){return Object(f.jsxs)(k,{children:[Object(f.jsx)(N,{children:e.textname}),Object(f.jsx)(y,{children:e.textmessege}),Object(f.jsx)(S,{children:e.texttime})]})}var C=m.a.div(r||(r=Object(p.a)(["\n  background-color: aqua;\n  width: 400px;\n  height: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-end;\n  margin: 10px;\n"]))),k=m.a.div(a||(a=Object(p.a)(["\n  background-color: green;\n  height: 65px;\n  margin: 10px;\n  border-radius: 10px;\n"]))),N=m.a.div(c||(c=Object(p.a)(["\n    font-weight: bold;\n    margin-left: 10px;\n    color: red;\n"]))),y=m.a.div(s||(s=Object(p.a)(["\n    margin-left: 10px;\n"]))),S=m.a.div(i||(i=Object(p.a)(["\n    margin-right: 10px;\n    margin-left: 250px;\n"]))),w=m.a.img(o||(o=Object(p.a)(["\n  width: 50px;\n  border-radius: 30px;\n  margin-top: 20px;\n"]))),A="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",F="Some Name",E="some text",B="22:00";var T=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(f.jsx)(v,{avatar:A,name:F,message:E,time:B}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},I=n(3),P=n(6),H=n(5),J=n(19),W=n.n(J),D=function(e){var t=e.red,n=e.className,r=Object(H.a)(e,["red","className"]),a="".concat(t?W.a.red:W.a.default," ").concat(n);return Object(f.jsx)("button",Object(P.a)({className:a},r))},G=n(7),M=n.n(G);var U=function(e){var t="high"===e.affair.priority?M.a.high:"middle"===e.affair.priority?M.a.middle:"low"===e.affair.priority?M.a.low:"";return Object(f.jsxs)("div",{className:M.a.rows,children:[Object(f.jsx)("p",{children:e.affair.name}),"  ",Object(f.jsx)("p",{className:t,children:e.affair.priority}),Object(f.jsx)(D,{className:M.a.button,red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var L=function(e){var t=e.data.map((function(t){return Object(f.jsx)(U,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(f.jsxs)("div",{children:[t,Object(f.jsx)(D,{className:M.a.superButton,onClick:function(){return e.setFilter("all")},children:"All"}),Object(f.jsx)(D,{className:M.a.superButton,onClick:function(){return e.setFilter("high")},children:"High"}),Object(f.jsx)(D,{className:M.a.superButton,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(f.jsx)(D,{className:M.a.superButton,onClick:function(){return e.setFilter("low")},children:"Low"})]})},q=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var K=function(){var e=Object(j.useState)(q),t=Object(I.a)(e,2),n=t[0],r=t[1],a=Object(j.useState)("all"),c=Object(I.a)(a,2),s=c[0],i=c[1],o=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,s);return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 2",Object(f.jsx)(L,{data:o,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},V=n(30),Y=n(20),z=n.n(Y),X=n(14),Z=n.n(X),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(Z.a.error," ").concat(s||""),j="".concat(Z.a.superInput," ").concat(c?Z.a.errorInput:Z.a.superInput);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},i)),c&&Object(f.jsx)("span",{className:o,children:c})]})},$=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?z.a.error:"";return Object(f.jsxs)("div",{children:[Object(f.jsx)(R,{value:t,onChange:n,className:s}),a&&Object(f.jsx)("span",{className:z.a.errorMessage,children:"Are you stupid?"}),Object(f.jsx)(D,{onClick:r,children:"Add"}),Object(f.jsx)("span",{children:c})]})},Q=function(e){var t=e.users,n=e.addUserCallback,r=Object(j.useState)(""),a=Object(I.a)(r,2),c=a[0],s=a[1],i=Object(j.useState)(!1),o=Object(I.a)(i,2),l=o[0],u=o[1],b=t.length;return Object(f.jsx)($,{name:c,setNameCallback:function(e){s(e.currentTarget.value),u(!1)},addUser:function(){""!==c.trim()?(n(c),s(""),u(!1),alert("Hello "+c+"!")):(s(""),u(!0))},error:l,totalUsers:b})},ee=n(41);var te=function(){var e=Object(j.useState)([]),t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 3",Object(f.jsx)(Q,{users:n,addUserCallback:function(e){var t={_id:Object(ee.a)(),name:e};r([].concat(Object(V.a)(n),[t]))}}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},ne=n(21),re=n.n(ne),ae=n(22),ce=n.n(ae),se=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ce.a.checkbox," ").concat(r||"");return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(f.jsx)("span",{className:ce.a.spanClassName,children:a})]})};var ie=function(){var e=Object(j.useState)(""),t=Object(I.a)(e,2),n=t[0],r=t[1],a=n?"":"error",c=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},s=Object(j.useState)(!1),i=Object(I.a)(s,2),o=i[0],l=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 4",Object(f.jsxs)("div",{className:re.a.column,children:[Object(f.jsx)(R,{value:n,onChangeText:r,onEnter:c,error:a}),Object(f.jsx)(R,{className:re.a.blue}),Object(f.jsx)(D,{children:"default"}),Object(f.jsx)(D,{red:!0,onClick:c,children:"delete "}),Object(f.jsx)(D,{disabled:!0,children:"disabled"}),Object(f.jsx)(se,{checked:o,onChangeChecked:l,children:"some text "}),Object(f.jsx)(se,{checked:o,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})},oe=n(29),je=n.n(oe),le=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),c=Object(j.useState)(!1),s=Object(I.a)(c,2),i=s[0],o=s[1],l=r||{},u=l.children,b=l.onDoubleClick,d=l.className,h=Object(H.a)(l,["children","onDoubleClick","className"]),x="".concat(je.a.span," ").concat(d);return Object(f.jsx)(f.Fragment,{children:i?Object(f.jsx)(R,Object(P.a)({autoFocus:!0,onBlur:function(e){o(!1),t&&t(e)},onEnter:function(){o(!1),n&&n()}},a)):Object(f.jsxs)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){o(!0),b&&b(e)},className:x},h),{},{children:["\u2712",u||a.value]}))})};function ue(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function be(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ue("test",{x:"A",y:1});be("test",{x:"",y:0});var de=function(){var e=Object(j.useState)(""),t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 6",Object(f.jsx)("div",{children:Object(f.jsx)(le,{value:n,onChangeText:r,spanProps:{children:n?void 0:" enter text..."}})}),Object(f.jsx)(D,{onClick:function(){ue("editable-span-value",n)},children:"save"}),Object(f.jsx)(D,{onClick:function(){var e=be("editable-span-value","");r(e)},children:"restore"}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})};var he=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(T,{}),Object(f.jsx)(K,{}),Object(f.jsx)(te,{}),Object(f.jsx)(ie,{}),Object(f.jsx)(de,{})]})},xe=n(15),Oe=n.n(xe);var pe=function(){return Object(f.jsxs)("div",{className:Oe.a.error,children:[Object(f.jsx)("div",{className:Oe.a.number,children:"404"}),Object(f.jsx)("div",{className:Oe.a.text,children:"Page not found!"}),Object(f.jsx)("div",{className:Oe.a.smile,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},me=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(H.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(f.jsx)("select",Object(P.a)(Object(P.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},fe=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:t,checked:e===r,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(f.jsx)(f.Fragment,{children:i})},ve=["x","y","z"];var _e=function(){var e=Object(j.useState)(ve[1]),t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{}),"homeworks 7",Object(f.jsx)("div",{children:Object(f.jsx)(me,{options:ve,value:n,onChangeOption:r})}),Object(f.jsx)("div",{children:Object(f.jsx)(fe,{name:"radio",options:ve,value:n,onChangeOption:r})}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{})]})};var ge=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(_e,{})})};var Ce=function(){return Object(f.jsx)("div",{children:"HomeTask For JuniorPlus Level"})},ke="/pre-junior",Ne="/junior",ye="/junior-plus";var Se=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(O.c,{children:[Object(f.jsx)(O.a,{path:"/",element:Object(f.jsx)(he,{})}),Object(f.jsx)(O.a,{path:ke,element:Object(f.jsx)(he,{})}),Object(f.jsx)(O.a,{path:Ne,element:Object(f.jsx)(ge,{})}),Object(f.jsx)(O.a,{path:ye,element:Object(f.jsx)(Ce,{})}),Object(f.jsx)(O.a,{path:"*",element:Object(f.jsx)(pe,{})})]})})},we=n(8),Ae=n.n(we);var Fe=function(){return Object(f.jsxs)("div",{className:Ae.a.nav,children:[Object(f.jsx)(x.b,{className:function(e){return e.isActive?Ae.a.itemA:Ae.a.itemN},to:ke,children:"Pre-Junior"}),Object(f.jsx)(x.b,{className:function(e){return e.isActive?Ae.a.itemA:Ae.a.itemN},to:Ne,children:"Junior"}),Object(f.jsx)(x.b,{className:function(e){return e.isActive?Ae.a.itemA:Ae.a.itemN},to:ye,children:"Junior-Plus"})]})};var Ee=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(Fe,{}),Object(f.jsx)(Se,{})]})})};var Be=function(){return Object(f.jsxs)("div",{className:h.a.App,children:[Object(f.jsx)("div",{children:"react homeworks:"}),Object(f.jsx)(Ee,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(Be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.2c9fd2df.chunk.js.map