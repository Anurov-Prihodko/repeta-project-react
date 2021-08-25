(this["webpackJsonprepeta-project-react"]=this["webpackJsonprepeta-project-react"]||[]).push([[0],{11:function(t,e,o){t.exports={todoEditor:"TodoEditor_todoEditor__1Movr",textarea:"TodoEditor_textarea__2s0Tb",button:"TodoEditor_button__2bAGR"}},12:function(t,e,o){t.exports={todoList:"TodoList_todoList__34A__",item:"TodoList_item__2g0tS",completed:"TodoList_completed__1Ww1G"}},14:function(t,e,o){t.exports={label:"Filter_label__2xiUE",text:"Filter_text__378f2"}},15:function(t,e,o){t.exports={backdrop:"Modal_backdrop__3ozrw",content:"Modal_content__scuH0"}},18:function(t,e,o){t.exports={container:"Container_container__NV4a8"}},19:function(t,e,o){t.exports={icon:"IconButton_icon__2a_3O"}},26:function(t,e,o){},36:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),r=o(9),c=o.n(r),l=(o(26),o(6)),i=o(20),s=o(2),d=o(3),u=o(5),h=o(4),b=o(16),p=o.n(b),j=o(11),f=o.n(j),m=o(0),g=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={message:""},t.handleChange=function(e){t.setState({message:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return Object(d.a)(o,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:f.a.todoEditor,onSubmit:this.handleSubmit,children:[Object(m.jsx)("textarea",{value:this.state.message,onChange:this.handleChange,className:f.a.textarea}),Object(m.jsx)("button",{type:"submit",className:f.a.button,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),o}(n.Component),O=o(10),x=o(17),v=o.n(x),_=o(7),y=o.n(_),C=function(t){var e=t.text,o=t.completed,n=t.onTogleCompleted,a=t.onDelete;return Object(m.jsxs)("div",{className:y.a.item,children:[Object(m.jsx)("input",{type:"checkbox",className:y.a.checkbox,checked:o,onChange:n}),Object(m.jsx)("p",{className:y.a.text,children:e}),Object(m.jsx)("button",{type:"button",className:y.a.pug,onClick:a,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},w=o(12),k=o.n(w),T=function(t){var e=t.todos,o=t.onDeleteTodo,n=t.onTogleCompleted;return Object(m.jsx)("ul",{className:k.a.todoList,children:e.map((function(t){var e=t.id,a=t.text,r=t.completed;return Object(m.jsx)("li",{className:v()(k.a.item,Object(O.a)({},k.a.completed,r)),children:Object(m.jsx)(C,{text:a,completed:r,onTogleCompleted:function(){return n(e)},onDelete:function(){return o(e)}})},e)}))})},S=o(14),N=o.n(S),E=function(t){var e=t.value,o=t.onChange;return Object(m.jsxs)("label",{className:N.a.label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(m.jsx)("input",{type:"text",value:e,onChange:o,className:N.a.text})]})},M=o(15),L=o.n(M),D=document.getElementById("modal-root"),I=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(m.jsx)("div",{className:L.a.backdrop,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:L.a.content,children:this.props.children})}),D)}}]),o}(n.Component),B=o(18),A=o.n(B),F=function(t){var e=t.children;return Object(m.jsx)("div",{className:A.a.container,children:e})},P=o(21),J=o(19),V=o.n(J),K=["children","onClick"],U=function(t){var e=t.children,o=t.onClick,n=Object(P.a)(t,K);return Object(m.jsx)("button",Object(l.a)(Object(l.a)({type:"button",className:V.a.icon,onClick:o},n),{},{children:e}))};U.defaultProps={onClick:function(){return null},children:null};var z,G=U,H=["title","titleId"];function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function W(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}function Y(t,e){var o=t.title,a=t.titleId,r=W(t,H);return n.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:1689.333,height:1706.667,viewBox:"0 0 1267 1280",ref:e,"aria-labelledby":a},r),o?n.createElement("title",{id:a},o):null,z||(z=n.createElement("path",{d:"M617 1.1c-3 .5-9.9 1.6-15.3 2.5-27.4 4.3-50.1 15.2-68.6 32.9-21 20.1-35.5 46.6-42 76.6-4.5 21.1-4.4 17.2-5 202.4l-.6 177-177 .5c-160.2.5-177.9.7-186.7 2.3-32.8 5.6-56.4 16.3-77.5 34.9-17.8 15.6-29.6 34.7-36.8 59.4-3.1 10.6-7.5 39-7.5 49 0 6.9 2.7 27.5 5 38 7.4 33.7 29.5 66.3 58.3 85.5 14.4 9.6 27 15.3 44.2 20 20.7 5.6 8.5 5.2 200.5 5.8l177.5.6.6 176.5c.5 155.9.7 177.7 2.1 187.1 9.1 59.4 38.7 99.5 86.7 117.6 19.7 7.4 55.7 12 72.5 9.3 3.3-.5 10.7-1.7 16.4-2.6 14.1-2.1 25.9-5.7 37.9-11.4 14.1-6.7 24.1-13.8 35.3-25 22.1-22.1 36.3-51.4 41-84.5.6-4.4 1.4-9.1 1.7-10.5.4-1.4.9-82.2 1.2-179.5l.6-177 177.5-.6c124.3-.4 179.5-.9 184.3-1.7 35.3-5.8 61.8-18.5 83.2-39.8 22.3-22.2 33.2-46.2 38.5-84.9 2.2-16.7 2.5-26.2.9-36.8-4.5-31-6.6-39-13.9-54.3-7.9-16.7-16.5-28-30.8-40.7-20.9-18.4-44.1-28.9-75.7-34.4-9.1-1.6-25.1-1.8-187-2.3l-177-.5-.6-177c-.4-127.7-.9-179.1-1.7-184.5-6-38.3-18.2-64.8-40.8-88.9-21.5-22.8-45.4-34.6-81-39.7-13.3-2-33-2.6-40.4-1.3z"})))}var Z=n.forwardRef(Y),q=(o.p,function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],filter:"",showModal:!1},t.addTodo=function(e){var o={id:p.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[o].concat(Object(i.a)(e))}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.togleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}}))},t.hangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,o=e.todos,n=e.filter.toLocaleLowerCase();return o.filter((function(t){return t.text.toLocaleLowerCase().includes(n)}))},t.getCompletedTodoCount=function(){return t.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0)},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){var o=this.state.todos,n=e.todos;o!==n&&localStorage.setItem("todos",JSON.stringify(o)),o.length>n.length&&0!==n.length&&this.toggleModal()}},{key:"render",value:function(){var t=this.state,e=t.todos,o=t.filter,n=t.showModal,a=e.length,r=this.getCompletedTodoCount(),c=this.getVisibleTodos();return Object(m.jsxs)(F,{children:[Object(m.jsx)(G,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(m.jsx)(Z,{width:"30",height:"30",fill:"rgb(255, 237, 79)"})}),n&&Object(m.jsxs)(I,{onClose:this.toggleModal,children:[Object(m.jsx)(g,{onSubmit:this.addTodo}),Object(m.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Close modal"})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["\u0412\u0441\u0435\u0433\u043e: ",a]}),Object(m.jsxs)("p",{children:["\u041a\u043e-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",r," "]})]}),Object(m.jsx)(E,{value:o,onChange:this.hangeFilter}),Object(m.jsx)(T,{todos:c,onDeleteTodo:this.deleteTodo,onTogleCompleted:this.togleCompleted})]})}}]),o}(n.Component));c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root"))},7:function(t,e,o){t.exports={checkbox:"Todo_checkbox__3VT3p",text:"Todo_text__1vHxZ",pug:"Todo_pug__2v5ob",item:"Todo_item__1ImYF"}}},[[36,1,2]]]);
//# sourceMappingURL=main.6d65c6f7.chunk.js.map