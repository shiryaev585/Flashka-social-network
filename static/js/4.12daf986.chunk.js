(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{296:function(e,s,a){"use strict";a.d(s,"a",(function(){return j}));var t=a(3),i=a(36),n=a(37),c=a(40),o=a(39),g=a(1),r=a.n(g),l=a(19),d=a(12),u=a(0),m=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var s=function(s){Object(c.a)(g,s);var a=Object(o.a)(g);function g(){return Object(i.a)(this,g),a.apply(this,arguments)}return Object(n.a)(g,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(t.a)({},this.props)):Object(u.jsx)(d.a,{to:"/login"})}}]),g}(r.a.Component);return Object(l.b)(m)(s)}},297:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2gmOe",dialogs__items:"Dialogs_dialogs__items__3uuV9",active:"Dialogs_active__20y3y",dialogs__messages:"Dialogs_dialogs__messages__3SUC7",formWrapper:"Dialogs_formWrapper__1qFgF",input:"Dialogs_input__3rX1v"}},299:function(e,s,a){e.exports={dialog:"DialogItem_dialog__GF6VR",dialog__img:"DialogItem_dialog__img__3I80H"}},304:function(e,s,a){"use strict";a.r(s);var t=a(133),i=(a(1),a(13)),n=a(299),c=a.n(n),o=a(0),g=function(e){var s="/dialogs/"+e.id;return Object(o.jsxs)("div",{className:c.a.dialog+" "+c.a.active,children:[Object(o.jsx)("img",{className:c.a.dialog__img,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yQruEZozdBpH--2cCH9jQzkgVcEplyfOGg&usqp=CAU",alt:"img"}),Object(o.jsx)(i.b,{to:s,children:e.name})]})},r=function(e){return Object(o.jsx)("div",{children:e.message})},l=a(297),d=a.n(l),u=a(12),m=a(94),j=a(134),f=a(42),b=a(70),p=a(51),A=Object(b.a)(100),O=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,className:d.a.formWrapper,children:[Object(o.jsx)(m.a,{component:f.a,validate:[A],placeholder:"Send message...",name:"newMessageText",className:d.a.input}),Object(o.jsx)(p.a,{children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"message-icon"})})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e,s){return Object(o.jsx)(g,{name:e.name,id:e.id},s)})),t=s.messages.map((function(e,s){return Object(o.jsx)(r,{message:e.message},s)}));return e.isAuth?Object(o.jsxs)("div",{className:d.a.dialogs,children:[Object(o.jsx)("div",{className:d.a.dialogs__items,children:a}),Object(o.jsxs)("div",{className:d.a.dialogs__messages,children:[Object(o.jsx)("div",{children:t}),Object(o.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageText)}})]})]}):Object(o.jsx)(u.a,{to:"/login"})},v=a(19),x=a(296),D=a(11);s.default=Object(D.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),x.a)(h)}}]);
//# sourceMappingURL=4.12daf986.chunk.js.map