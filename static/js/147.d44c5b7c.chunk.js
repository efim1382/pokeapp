/*! For license information please see 147.d44c5b7c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpokeapp=self.webpackChunkpokeapp||[]).push([[147,273],{6424:function(t,e,r){r.d(e,{H:function(){return n}});var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(t){return"en"===t.language.name})).flavor_text}},7001:function(t,e,r){r.d(e,{U0:function(){return y},eG:function(){return v},cO:function(){return p}});var n=r(1933),o=r(1002);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(P([])));x&&x!==e&&r.call(x,c)&&(g=x);var j=y.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function i(n,a,c,u){var s=h(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,o.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}throw new TypeError((0,o.Z)(t)+" is not iterable")}return v.prototype=y,n(j,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,u,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}var a=r(4942);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var l="https://pokeapi.co/api/v2",f={"Content-Type":"application/json"},h=function(t){var e=l;return t.startsWith("https://")?t:"".concat(e).concat(t)},d=function(){var t=f,e={},r=function(){var r,n=(r=i().mark((function r(n){var o,a,c;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=h(n),r.next=3,fetch(o,u({headers:t},e));case 3:if((a=r.sent).ok){r.next=10;break}return r.next=7,a.text();case 7:throw c=r.sent,{code:a.status,message:c};case 10:return r.next=12,a.json();case 12:return r.abrupt("return",r.sent);case 13:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();return{get:r}}(),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.limit,r=t.offset;return(0,n.useQuery)(["pokemon-list",r],(function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.offset,r=void 0===e?0:e,n=t.limit,o=void 0===n?12:n;return d.get("/pokemon/?limit=".concat(o,"&offset=").concat(r))}({offset:r,limit:e})}))},v=function(t){var e=(0,n.useQuery)(["pokemon",t],(function(){return function(t){return d.get("/pokemon/".concat(t,"/"))}(t)})),r=e.data,o=void 0===r?{}:r,i=e.isLoading,a=e.error,c=(0,n.useQuery)(["pokemon-species",t],(function(){return function(t){return d.get("/pokemon-species/".concat(t,"/"))}(t)})),u=c.data,s=void 0===u?{}:u,l=c.isLoading,f=c.error;return{data:{details:o,species:s},isLoading:i||l,error:a||f}},y=function(t){return(0,n.useQuery)(["pokemon-custom-request",t],(function(){return d.get(t)}))}},9147:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});r(2791);var n,o,i=r(7689),a=r(1087),c=r(2273),u=r(7762),s=r(3433),l=r(7001),f=r(184),h=function(t){var e=t.url,r=(0,l.U0)(e),n=r.data,o=void 0===n?{}:n,i=r.isLoading,a=r.error,c=o.chain,h=void 0===c?{}:c;if(i)return(0,f.jsx)("div",{children:"Loading chain..."});if(a)return(0,f.jsxs)("div",{children:["Error: ",a.message]});var d=function(t){var e=[];return function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=r.species,i=r.evolves_to,a=[].concat((0,s.Z)(n),[o.name]);if(0!==i.length){var c,l=(0,u.Z)(i);try{for(l.s();!(c=l.n()).done;)t(c.value,a)}catch(f){l.e(f)}finally{l.f()}}else e.push(a)}(t),e}(h);return(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Evolution"}),d.map((function(t){var e=t.join("-");return(0,f.jsx)("div",{children:t.map((function(t){return(0,f.jsx)("span",{children:t},t)}))},e)}))]})},d=r(168),p=r(7884),v=p.ZP.div(n||(n=(0,d.Z)(["\n\twidth: 148px;\n\theight: 6px;\n\tbackground-color: gray;\n"]))),y=p.ZP.div(o||(o=(0,d.Z)(["\n\twidth: ","%;\n\theight: 6px;\n\tbackground-color: red;\n"])),(function(t){return t.$width})),g=function(t){var e=t.name,r=t.value,n=100*r/255;return(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:e}),(0,f.jsx)("span",{children:r}),(0,f.jsx)(v,{children:(0,f.jsx)(y,{$width:n})})]})},m=r(6424),x=function(){var t=(0,i.UO)().pokemonName,e=(0,l.eG)(t),r=e.data,n=void 0===r?{}:r,o=e.isLoading,u=e.error;if(o)return(0,f.jsx)("div",{children:"Loading..."});if(u)return 404===u.code?(0,f.jsx)(c.default,{}):(0,f.jsxs)("div",{children:["Error: ",u.message]});var s=n.details,d=n.species,p=s.id,v=s.name,y=s.weight,x=s.sprites,j=void 0===x?{}:x,w=s.types,b=void 0===w?[]:w,L=s.stats,k=void 0===L?[]:L,O=s.abilities,E=void 0===O?[]:O,_=d.varieties,P=d.capture_rate,S=d.evolution_chain,N=void 0===S?{}:S,G=d.egg_groups,Z=void 0===G?[]:G,T=d.flavor_text_entries,F=void 0===T?[]:T,C=p-1,D=String(C).padStart(4,0),Q=p+1,A=String(Q).padStart(4,0),I=C>0,U=(0,m.H)(F),H=(100*P/255).toFixed(1);return(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{width:"300",src:j.other.dream_world.front_default,alt:t}),(0,f.jsxs)("div",{children:["Name: ",v]}),(0,f.jsxs)("div",{"data-testid":"pokemon-weight",children:["Weight: ",y]}),b.map((function(t){return(0,f.jsx)("span",{children:t.type.name},t.slot)})),k.map((function(t){return(0,f.jsx)(g,{name:t.stat.name,value:t.base_stat},t.stat.name)})),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Versions"}),(0,f.jsx)("div",{children:_.map((function(t){return(0,f.jsx)("div",{children:(0,f.jsx)(a.OL,{to:"/pokemon/".concat(t.pokemon.name),children:t.pokemon.name})},t.pokemon.name)}))})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Story"}),(0,f.jsx)("p",{children:U})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Abilities"}),(0,f.jsx)("div",{children:E.map((function(t){return(0,f.jsx)("span",{children:t.ability.name},t.ability.name)}))})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Catch rate"}),(0,f.jsxs)("p",{children:[H,"%"]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Egg group"}),(0,f.jsx)("div",{children:Z.map((function(t){return(0,f.jsx)("span",{children:t.name},t.name)}))})]}),I&&(0,f.jsxs)(a.OL,{to:"/pokemon/".concat(C,"/"),children:["prev #",D]}),(0,f.jsxs)(a.OL,{to:"/pokemon/".concat(Q,"/"),children:["next #",A]}),N.url&&(0,f.jsx)(h,{url:N.url})]})}},2273:function(t,e,r){r.r(e),r.d(e,{default:function(){return o}});r(2791);var n=r(184),o=function(){return(0,n.jsx)("div",{children:"Not found"})}}}]);
//# sourceMappingURL=147.d44c5b7c.chunk.js.map