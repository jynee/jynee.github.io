(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JYtQ:function(e,t,n){},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"l/wD":function(e,t,n){},uP4m:function(e,t,n){"use strict";var r=n("q1tI"),a=n("Wbzz"),l=n("LvDl"),u=(n("l/wD"),Object(r.memo)((function(e){var t=e.posts,n=Object(r.useState)(10),u=n[0],i=n[1],o=Object(r.useCallback)(Object(l.throttle)((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&i((function(e){return e>=t.length?e:e+10}))}),250),[]);Object(r.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),t.sort((function(e,t){var n=e.node.frontmatter,r=t.node.frontmatter,a=new Date(n.update.includes("0001")?n.date:n.update),l=new Date(r.update.includes("0001")?r.date:r.update);return a<l?1:a>l?-1:0}));var c=t.map((function(e,t){var n=e.node,l=n.excerpt,i=n.fields,o=n.frontmatter,c=i.slug,f=o.date,s=o.title,d=o.tags,m=o.update;1===Number(m.split(",")[1])&&(m=null);var p=d.map((function(e){if("undefined"!==e)return r.createElement("div",{key:c+"-"+e,className:"tag"},r.createElement("span",null,r.createElement(a.Link,{to:"/tags#"+e},"#"+e)))}));return r.createElement("li",{key:c,className:"post "+(t<u?"show":"hide")},r.createElement("article",null,r.createElement("h2",{className:"title"},r.createElement(a.Link,{to:c},s)),r.createElement("div",{className:"info"},r.createElement("div",{className:"date-wrap"},r.createElement("span",{className:"date"},f),m?r.createElement("span",{className:"update"}," ","(Updated: "+m+")"):null),d.length&&"undefined"!==d[0]?r.createElement("span",{className:"info-dot"},"·"):null,r.createElement("ul",{className:"tag-list"},p)),r.createElement("span",{className:"excerpt"},r.createElement(a.Link,{to:c},l))))}));return r.createElement("div",{className:"post-list"},r.createElement("ul",null,c))})));t.a=u},xSjX:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var r=n("q1tI"),a=n("VXBa"),l=n("H8eV"),u=(n("JYtQ"),n("uP4m"));function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c="3726754810";t.default=function(e){var t=e.data.allMarkdownRemark.group,n=Object(r.useState)(0),o=n[0],c=n[1],f=Object(r.useState)("undefined"),s=f[0],d=f[1];t.sort((function(e,t){var n=e.fieldValue.toLocaleLowerCase(),r=t.fieldValue.toLocaleLowerCase();return n<r?-1:r<n?1:0}));var m=t.map((function(e){var t;return r.createElement("li",{key:e.fieldValue},r.createElement("span",{className:"tag-text",style:{fontSize:"undefined"!==e.fieldValue?(t=Math.round(50/(o/e.totalCount)).toString(),t.length<=1&&(t="0"+t),Number(t)/100+.9+"rem"):"0.9rem",opacity:e.fieldValue===s?"0.9":"0.5",fontWeight:e.fieldValue===s?"bold":"normal"},onClick:function(){d(e.fieldValue)}},r.createElement("a",{href:"#"+e.fieldValue},e.fieldValue)))}));m.sort((function(e){return"undefined"===e.key?-1:0}));return Object(r.useEffect)((function(){for(var e,n=0,r=i(t);!(e=r()).done;){var a=e.value;"undefined"!==a.fieldValue&&a.totalCount>n&&(n=a.totalCount)}return c(n),function(){}}),[t]),Object(r.useEffect)((function(){return location.hash&&d(location.hash.split("#")[1]),function(){}}),[]),r.createElement(a.a,null,r.createElement(l.a,{title:"Tags"}),r.createElement("div",{id:"tags"},r.createElement("div",{className:"tag-list-wrap"},r.createElement("ul",null,m)),r.createElement(u.a,{posts:t.filter((function(e){return e.fieldValue===s})).length?t.filter((function(e){return e.fieldValue===s}))[0].edges:t.filter((function(e){return"undefined"===e.fieldValue})).length?t.filter((function(e){return"undefined"===e.fieldValue}))[0].edges:[]})))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-aa8b2918548d2bbb5c31.js.map