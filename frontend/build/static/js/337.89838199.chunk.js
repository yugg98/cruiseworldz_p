/*! For license information please see 337.89838199.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[337],{5003:function(t,e,r){var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(1637),s=r(9434),u=r(7689),l=r(1087),h=r(1243),f=r(3430),d=r(7106),p=r(184);e.Z=function(){var t=(0,s.I0)(),e=(0,u.s0)(),r=(0,a.useState)([]),v=(0,i.Z)(r,2),y=v[0],m=v[1],g=(0,a.useState)(!1),x=(0,i.Z)(g,2),w=x[0],b=x[1],j=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,h.Z.get("/cruise/get2");case 4:e=t.sent,m(e.data.data),b(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),b(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){j()}),[]),(0,p.jsx)("section",{className:"cards",id:"service",children:(0,p.jsxs)("div",{className:"wrap",children:[(0,p.jsxs)("div",{className:"top",children:[(0,p.jsx)("h2",{children:"Available Listings"}),(0,p.jsx)("hr",{}),(0,p.jsx)("p",{children:"Travel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through the web."})]}),(0,p.jsx)("div",{className:"collect",children:w?(0,p.jsxs)("div",{className:"col text-center p-5",style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,p.jsx)("img",{src:c,alt:"img",className:"anim",style:{width:"200px",height:"200px"}}),(0,p.jsx)("div",{children:(0,p.jsxs)("b",{children:["Welcome to ",(0,p.jsx)(d.Z,{})," Cruise World"]})})]}):null===y||void 0===y?void 0:y.map((function(r,n){return(0,p.jsxs)(f.E.div,{initial:{x:0,y:-50,opacity:0},whileInView:{x:0,y:0,opacity:1},viewport:{once:!1},transition:{type:"spring",bounce:.2,duration:.5},className:"card",onClick:function(){return function(r){t({type:"card",payload:r}),e("/detail")}(r)},children:[(0,p.jsx)("div",{className:"img",children:(0,p.jsx)("img",{src:null===r||void 0===r?void 0:r.SomeMoreImages[0],alt:"img"})}),(0,p.jsxs)("h4",{children:[null===r||void 0===r?void 0:r.name.substring(20,[0]),"...",(0,p.jsxs)("span",{children:["4.5 ",(0,p.jsx)("i",{class:"bx bxs-star"})]})]}),(0,p.jsxs)("p",{children:[null===r||void 0===r?void 0:r.description.substring(60,[0])," ..."]}),(0,p.jsxs)("div",{className:"avr",children:[(0,p.jsx)("i",{class:"bx bx-comment-dots"}),(0,p.jsxs)("p",{className:"sp",children:["+2 Reviews"," ",(0,p.jsx)("a",{href:"https://wa.me/9442038894",children:(0,p.jsx)("i",{class:"bx bxl-whatsapp"})})]})]})]},n)}))}),(0,p.jsx)("center",{children:(0,p.jsx)(l.rU,{to:"/view",style:{textDecoration:"none",cursor:"pointer"},children:(0,p.jsxs)("button",{className:"vm",style:{cursor:"pointer"},children:["ViewMore ",(0,p.jsx)("i",{class:"bx bx-chevrons-right"})]})})})]})})}},5313:function(t,e,r){r.r(e);r(2791);var n=r(5003),o=r(184);e.default=function(){return(0,o.jsx)("div",{className:"list",children:(0,o.jsx)(n.Z,{})})}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},6459:function(t,e,r){function n(t){if(null==t)throw new TypeError("Cannot destructure "+t)}r.d(e,{Z:function(){return n}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new _(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=h;var d={};function p(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==e&&r.call(x,c)&&(m=x);var w=y.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=337.89838199.chunk.js.map