(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(6),a=c(4),r=c(5),l=c(8),i=c(7),d=c(1),u=c.n(d),h=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.changeGoods=function(t){e.setState((function(e){var c=e.selectedGood;return{selectedGood:[].concat(Object(s.a)(c),[t])}}))},e.removeGoods=function(t){e.setState((function(e){var c=e.selectedGood,n=c.indexOf(t);return c.splice(n,1),{selectedGood:c}}))},e.clearGoods=function(){e.setState({selectedGood:[]})},e.getText=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e[0]," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App__head",children:this.getText(t)}),Object(h.jsx)("ul",{className:"list",children:b.map((function(c){var n=t.includes(c);return Object(h.jsxs)("li",{className:"list__item",children:[c,Object(h.jsx)("button",{type:"button",className:"button__item",onClick:n?function(){return e.removeGoods(c)}:function(){return e.changeGoods(c)},children:n?"Remove":"Select"})]},c)}))}),Object(h.jsx)("button",{className:"button\n          ".concat(0===t.length&&"button--hide"),type:"button",onClick:this.clearGoods,children:"Clear"})]})}}]),c}(u.a.Component),m=j;o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.01e26cc9.chunk.js.map