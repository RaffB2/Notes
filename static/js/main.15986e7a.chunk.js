(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(7),i=n.n(s),r=(n(13),n(14),n(2)),l=n(5),j=function(e){return Object(c.jsx)("button",{className:e.className,color:"primary",onClick:function(){e.eventHandler(e.doWhat)},children:e.btnName})},u=(n(15),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",className:"input",onChange:function(e){s(e.target.value)}}),Object(c.jsx)(j,{className:"button button2",btnName:"Add",doWhat:o,eventHandler:e.addNewNote})]})}),b=(n(16),function(e){return e.data.map((function(t,n){return Object(c.jsxs)("div",{className:"wrap",children:[Object(c.jsxs)("div",{className:"horizontal",children:[Object(c.jsx)(j,{className:"btn",eventHandler:e.moveUp,doWhat:n,btnName:"Up"}),Object(c.jsx)(j,{className:"btn",eventHandler:e.moveDown,doWhat:n,btnName:"Down"})]}),Object(c.jsxs)("div",{className:"list",children:[Object(c.jsx)("div",{className:"container"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){e.editNote(n,t.target.value)}}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-minus-circle",onClick:function(){e.deleteNote(n)}})})]})]})]},n)}))}),d=function(e,t,n){var c=e[t];e[t]=e[n],e[n]=c},f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("saved-notes");e&&o(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("saved-notes",JSON.stringify(n))}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Your notes"}),Object(c.jsx)(u,{addNewNote:function(e){0!==e.length&&e.trim()?o(Object(r.a)(n.concat(e))):window.alert("Note cannot be empty")}}),Object(c.jsx)(b,{data:n,deleteNote:function(e){var t=Object(r.a)(n);t.splice(e,1),o(t)},moveUp:function(e){if(e>0){var t=Object(r.a)(n);d(t,e-1,e),o(t)}},moveDown:function(e){if(e+1<n.length){var t=Object(r.a)(n);d(t,e+1,e),o(t)}},editNote:function(e,t){var c=Object(r.a)(n);c[e]=t,0!==t.length&&t.trim()||(c[e]="Do not leave blank!"),o(c)}})]})};var O=function(){return console.log("Edit notes by typing, do not leave blank"),Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.15986e7a.chunk.js.map