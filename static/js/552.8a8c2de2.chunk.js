"use strict";(self.webpackChunkpokeapp=self.webpackChunkpokeapp||[]).push([[552,273],{552:function(t,e,n){n.r(e),n.d(e,{default:function(){return gt}});var r,i,a,l,o,d,s,c,u=n(1413),p=n(168),f=n(2791),h=n(1087),x=n(7689),m=n(2273),g=n(9779),v=n(9086),j=n(6260),w=n(5940),b=n(6797),y=n(4306),E=n(7884),_={hp:"Hp",defense:"Defense",attack:"Attack",speed:"Speed","special-attack":"Sp.Attack","special-defense":"Sp.Defence"},O=n(184),k=E.ZP.div(r||(r=(0,p.Z)(["\n\theight: 6px;\n\tbackground-color: #EEEEEE;\n\tborder-radius: 4px;\n"]))),Z=E.ZP.div(i||(i=(0,p.Z)(["\n\twidth: ","%;\n\theight: 6px;\n\tbackground-color: ",";\n\tborder-radius: 4px;\n"])),(function(t){return t.$width}),(function(t){return t.theme.stat.progressBar})),$=E.ZP.span(a||(a=(0,p.Z)(["\n\tcolor: ",";\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 24px;\n"])),(function(t){return t.theme.stat.text})),S=E.ZP.span(l||(l=(0,p.Z)(["\n\tcolor: ",";\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tline-height: 24px;\n"])),(function(t){return t.theme.stat.text})),B=function(t){var e=t.name,n=t.value,r=100*n/255,i=_[e];return(0,O.jsxs)(g.X2,{children:[(0,O.jsxs)(g.X2,{$width:"100%",$justifyContent:"space-between",children:[(0,O.jsx)($,{children:i}),(0,O.jsx)(S,{children:n})]}),(0,O.jsx)(g.JX,{$margin:"2px 0 0 0",$width:"100%",children:(0,O.jsx)(k,{children:(0,O.jsx)(Z,{$width:r})})})]})},X=n(6424),C=n(8433),P=E.ZP.div(o||(o=(0,p.Z)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 16px;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 16px;\n\tborder-radius: 16px;\n\tbackground-color: ",";\n\ttext-decoration: none;\n\tbox-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n\n\t.name {\n\t\tfont-size: 32px;\n\t\ttext-transform: capitalize;\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tline-height: 32px;\n\t\tcolor: ",";\n\t\tpadding-bottom: 8px;\n\t}\n\n\t.stat-item {\n\t\tmargin: 0 4px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t.value {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"])),(function(t){return t.theme.card.bg}),(function(t){return t.theme.card.title}),(function(t){return t.theme.card.stat})),F=(0,E.ZP)(g.JX)(d||(d=(0,p.Z)(["\n\twidth: 50%;\n\tpadding: 16px 6px 0;\n\n\t"," {\n\t\twidth: 100%;\n\t}\n"])),(0,C.B)("mobile")),A=function(t){var e,n=t.id,r=t.name,i=t.height,a=t.weight,l=t.sprites,o=void 0===l?{}:l,d=t.types,s=void 0===d?[]:d,c=t.stats,u=void 0===c?[]:c,p=null===o||void 0===o||null===(e=o.other)||void 0===e?void 0:e.dream_world.front_default,f=(0,X.O$)(n);return(0,O.jsxs)(P,{children:[(0,O.jsx)(g.X2,{$margin:"0 -2px 56px",children:s.map((function(t){return(0,O.jsx)(j.Z,{name:t.type.name},t.type.name)}))}),(0,O.jsx)(y.Z,{$src:p,$pokemonId:f}),(0,O.jsxs)(g.X2,{$justifyContent:"space-between",$margin:"16px -4px",$width:"100%",children:[(0,O.jsxs)("div",{className:"stat-item",children:[(0,O.jsx)(b.Z,{}),(0,O.jsx)("span",{"data-testid":"pokemon-weight",className:"value",children:a})]}),(0,O.jsxs)("div",{className:"stat-item",children:[(0,O.jsx)(w.Z,{}),(0,O.jsx)("span",{"data-testid":"pokemon-height",className:"value",children:i})]})]}),(0,O.jsx)(g.X2,{$justifyContent:"center",$margin:"0 0 16px 0",children:(0,O.jsx)("h2",{className:"name","data-testid":"pokemon-name",children:r})}),(0,O.jsx)(g.X2,{$margin:"-16px -6px 0",children:u.map((function(t){return(0,O.jsx)(F,{children:(0,O.jsx)(B,{name:t.stat.name,value:t.base_stat})},t.stat.name)}))})]})},I=n(7762),J=n(3433),z=n(5645),G=n(5505),M=["title","titleId"];function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N.apply(this,arguments)}function L(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function D(t,e){var n=t.title,r=t.titleId,i=L(t,M);return f.createElement("svg",N({width:169,height:169,viewBox:"0 0 169 169",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,s||(s=f.createElement("g",{filter:"url(#filter0_dd_69_6756)"},f.createElement("circle",{cx:83,cy:83,r:64,fill:"#EFEFEF"}))),c||(c=f.createElement("defs",null,f.createElement("filter",{id:"filter0_dd_69_6756",x:.538461,y:.538461,width:168,height:168,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},f.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dx:-6.15385,dy:-6.15385}),f.createElement("feGaussianBlur",{stdDeviation:6.15385}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"}),f.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_69_6756"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dx:6.15385,dy:6.15385}),f.createElement("feGaussianBlur",{stdDeviation:7.69231}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.4 0"}),f.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow_69_6756",result:"effect2_dropShadow_69_6756"}),f.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_69_6756",result:"shape"})))))}var U,R,T=f.forwardRef(D),W=(n.p,["title","titleId"]);function H(){return H=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H.apply(this,arguments)}function V(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function q(t,e){var n=t.title,r=t.titleId,i=V(t,W);return f.createElement("svg",H({width:193,height:193,viewBox:"0 0 193 193",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,U||(U=f.createElement("g",{filter:"url(#filter0_dd_69_7055)"},f.createElement("circle",{cx:94,cy:94,r:64,fill:"#EFEFEF"}),f.createElement("path",{d:"M51.7878 56.9682C51.7878 56.9682 56.7601 52.9193 59.3927 49.9113C59.9893 49.2296 60.651 48.6458 60.8745 48.1344C61.281 47.2041 58.9051 47.9665 57.8619 48.3858C53.9187 49.9706 50.0257 53.3795 48.8865 57.0513C48.5757 58.053 48.6364 58.9162 49.4345 58.8496C49.9807 58.8041 51.7878 56.9682 51.7878 56.9682Z",fill:"white",fillOpacity:.8}))),R||(R=f.createElement("defs",null,f.createElement("filter",{id:"filter0_dd_69_7055",x:0,y:0,width:193,height:193,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},f.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dx:-10,dy:-10}),f.createElement("feGaussianBlur",{stdDeviation:10}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 1 0"}),f.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_69_7055"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dx:10,dy:10}),f.createElement("feGaussianBlur",{stdDeviation:12.5}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.0666667 0 0 0 0.4 0"}),f.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow_69_7055",result:"effect2_dropShadow_69_7055"}),f.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_69_7055",result:"shape"})))))}var K,Q,Y,tt,et,nt,rt,it,at=f.forwardRef(q),lt=(n.p,E.ZP.div(K||(K=(0,p.Z)(['\n\tposition: relative;\n\twidth: 128px;\n\theight: 128px;\n\tmargin-bottom: 40px;\n\n\t&:after {\n\t\tcontent: "";\n\t\tdisplay: block;\n\t\twidth: 68%;\n\t\theight: 68%;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tbackground-image: url(',");\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbackground-position: center;\n\t\tz-index: 1;\n\t}\n\n\tsvg {\n\t\tposition: absolute;\n\t\twidth: 132%;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.name {\n\t\tposition: absolute;\n\t\tbottom: -8px;\n\t\tleft: 50%;\n\t\ttext-transform: capitalize;\n\t\ttransform: translate(-50%, 100%);\n\t\tfont-size: 24px;\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tline-height: 32px;\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.$url}),(function(t){return t.theme.evoText}))),ot=function(t){var e,n=t.name,r="light"===(0,f.useContext)(G.t).currentTheme,i=(0,z.i_)(n),a=i.data,l=void 0===a?{}:a,o=i.isLoading,d=i.error,s=null===l||void 0===l||null===(e=l.sprites)||void 0===e?void 0:e.other.dream_world.front_default;return o||d?null:(0,O.jsxs)(lt,{$url:s,children:[r?(0,O.jsx)(T,{}):(0,O.jsx)(at,{}),(0,O.jsx)("div",{className:"name",children:n})]})},dt=function(t){var e=t.url,n=(0,z.U0)(e),r=n.data,i=void 0===r?{}:r,a=n.isLoading,l=n.error,o=i.chain,d=void 0===o?{}:o;if(a)return null;if(l)return(0,O.jsxs)("div",{children:["Error: ",l.message]});var s=function(t){var e=[];return function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=n.species,a=n.evolves_to,l=[].concat((0,J.Z)(r),[i.name]);if(0!==a.length){var o,d=(0,I.Z)(a);try{for(d.s();!(o=d.n()).done;)t(o.value,l)}catch(s){d.e(s)}finally{d.f()}}else e.push(l)}(t),e}(d);return(0,O.jsx)(f.Fragment,{children:s.map((function(t){var e=t.join("-");return(0,O.jsx)(g.X2,{$flexWrap:"nowrap",$overflow:"auto",children:t.map((function(t){return(0,O.jsx)(g.JX,{$padding:"24px 20px 0",children:(0,O.jsx)(ot,{name:t})},t)}))},e)}))})},st=(0,E.ZP)(g.X2)(Q||(Q=(0,p.Z)(["\n\tpadding: 16px 32px;\n\tflex-direction: column;\n\tbackground-color: ",";\n\n\t&:nth-child(2n) {\n\t\tbackground-color: ",";\n\t}\n\n\t"," {\n\t\tpadding: 16px;\n\t}\n"])),(function(t){return t.theme.table.bgFirst}),(function(t){return t.theme.table.bgSecond}),(0,C.B)("tablet")),ct=(0,E.ZP)(g.JX)(Y||(Y=(0,p.Z)(["\n\tcolor: ",";\n\tfont-size: 24px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 32px;\n\tpadding-bottom: 16px;\n"])),(function(t){return t.theme.table.title})),ut=(0,E.ZP)(g.JX)(tt||(tt=(0,p.Z)(["\n\tcolor: ",";\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 24px;\n\tmax-width: 100%;\n"])),(function(t){return t.theme.table.value})),pt=function(t){var e=t.title,n=t.children;return(0,O.jsxs)(st,{children:[(0,O.jsx)(ct,{children:e}),(0,O.jsx)(ut,{children:n})]})},ft=(0,E.ZP)(g.JX)(et||(et=(0,p.Z)(["\n\twidth: 100%;\n\tmax-width: 342px;\n\tmin-width: 288px;\n\tmargin: 0 16px 0 0;\n\n\t"," {\n\t\tmargin: 0 0 16px 0;\n\t\tmax-width: 100%;\n\t}\n"])),(0,C.B)(768)),ht=(0,E.ZP)(g.JX)(nt||(nt=(0,p.Z)(["\n\tflex: 1 1 .01%;\n\twidth: auto;\n\toverflow: hidden;\n\tborder-radius: 16px;\n"]))),xt=(0,E.ZP)(v.W)(rt||(rt=(0,p.Z)(["\n\tjustify-content: center;\n\tpadding-top: 16px;\n\tmin-width: 100%;\n\twidth: auto;\n\n\t"," {\n\t\torder: -1;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 16px;\n\t}\n\n\tbutton {\n\t\tflex: 1 1 auto;\n\t\tmargin:  0 8px;\n\t}\n"])),(0,C.B)(768)),mt=(0,E.ZP)(h.OL)(it||(it=(0,p.Z)(["\n\ttext-decoration: none;\n"]))),gt=function(){var t=(0,x.UO)().pokemonName,e=(0,z.eG)(t),n=e.data,r=void 0===n?{}:n,i=e.isLoading,a=e.error;if(i)return(0,O.jsx)("div",{children:"Loading..."});if(a)return 404===a.code?(0,O.jsx)(m.default,{}):(0,O.jsxs)("div",{children:["Error: ",a.message]});var l=r.details,o=r.species,d=l.id,s=l.abilities,c=void 0===s?[]:s,p=o.varieties,f=o.capture_rate,j=o.evolution_chain,w=void 0===j?{}:j,b=o.egg_groups,y=void 0===b?[]:b,E=o.flavor_text_entries,_=void 0===E?[]:E,k=d-1,Z=(0,X.O$)(k),$=d+1,S=(0,X.O$)($),B=k>0,C=(0,X.Eb)(_),P=(100*f/255).toFixed(1);return(0,O.jsxs)(g.X2,{children:[(0,O.jsx)(ft,{children:(0,O.jsxs)(g.X2,{children:[(0,O.jsx)(A,(0,u.Z)({},l)),(0,O.jsxs)(xt,{children:[B&&(0,O.jsx)(v.Z,{withLeftArrow:!0,children:(0,O.jsxs)(mt,{to:"/pokemon/".concat(k,"/"),children:["Back #",Z]})}),(0,O.jsx)(v.Z,{withRightArrow:!0,children:(0,O.jsxs)(mt,{to:"/pokemon/".concat($,"/"),children:["Next #",S]})})]})]})}),(0,O.jsxs)(ht,{children:[(0,O.jsx)(pt,{title:"Versions",children:(0,O.jsx)(g.X2,{$margin:"0 -16px",children:p.map((function(t){return(0,O.jsx)(g.JX,{$padding:"0 16px",children:(0,O.jsx)(h.OL,{to:"/pokemon/".concat(t.pokemon.name),children:t.pokemon.name})},t.pokemon.name)}))})}),(0,O.jsx)(pt,{title:"Story",children:C}),(0,O.jsx)(pt,{title:"Abilities",children:(0,O.jsx)(g.X2,{$margin:"0 -4px",children:c.map((function(t){return(0,O.jsx)(g.JX,{$padding:"0 4px","data-testid":"ability",children:t.ability.name},t.ability.name)}))})}),(0,O.jsxs)(pt,{title:"Catch rate",children:[P,"%"]}),(0,O.jsx)(pt,{title:"Egg group",children:(0,O.jsx)(g.X2,{$margin:"0 -4px",children:y.map((function(t){return(0,O.jsx)(g.JX,{$padding:"0 4px",children:t.name},t.name)}))})}),(0,O.jsx)(pt,{title:"Evolution",children:(0,O.jsx)(g.JX,{$margin:"-24px -20px 0",children:w.url&&(0,O.jsx)(dt,{url:w.url})})})]})]})}},2273:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});n(2791);var r=n(184),i=function(){return(0,r.jsx)("div",{children:"Not found"})}}}]);
//# sourceMappingURL=552.8a8c2de2.chunk.js.map