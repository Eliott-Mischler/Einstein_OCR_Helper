var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/progress-bar/docs.mdx.js"]=function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],m=0,p=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&p.push(l[a][0]),l[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);p.length;)p.shift()();return n.push.apply(n,s||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],r=!0,o=1;o<c.length;o++){var i=c[o];0!==l[i]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=c[0]))}return e}var r={},l={57:0},n=[];function a(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=r,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;return n.push([750,0]),c()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},750:function(e,t,c){"use strict";c.r(t),c.d(t,"getElement",(function(){return O})),c.d(t,"getContents",(function(){return j}));var r=c(0),l=c.n(r),n=c(4),a=c(2),o=c(28),i=c(45),s=(c(14),c(1)),u=c(72),m=c(60),p=l.a.createElement(m.a,{value:"25",isVertical:!0}),b=[{id:"zero",label:"0% complete",element:l.a.createElement(m.a,{value:"0",isVertical:!0})},{id:"25",label:"25% complete",element:l.a.createElement(m.a,{value:"25",isVertical:!0})},{id:"50",label:"50% complete",element:l.a.createElement(m.a,{value:"50",isVertical:!0})},{id:"75",label:"75% complete",element:l.a.createElement(m.a,{value:"75",isVertical:!0})},{id:"100",label:"100% complete",element:l.a.createElement(m.a,{value:"100",isVertical:!0})}],d=n.c.h2,f=n.c.h3,O=function(){return Object(r.createElement)(n.b,{},Object(r.createElement)("div",{className:"doc lead"},"A progress bar component communicates to the user the progress of a particular process."),Object(r.createElement)(a.a,{exampleOnly:!0},Object(s.f)(u.c,"progress-bar-descriptive")),d({id:"About-Progress-Bar"},"About Progress Bar"),d({id:"Base"},"Base"),Object(r.createElement)(a.a,null,Object(s.f)(u.b)),f({id:"States"},"States"),f({id:"0percent-complete"},"0% complete"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"zero")),f({id:"25percent-complete"},"25% complete"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"25")),f({id:"50percent-complete"},"50% complete"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"50")),f({id:"75percent-complete"},"75% complete"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"75")),f({id:"100percent-complete"},"100% complete"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"100")),f({id:"Success-Color"},"Success Color"),Object(r.createElement)(a.a,null,Object(s.f)(u.d,"success")),d({id:"Examples"},"Examples"),f({id:"Descriptive-Progress-Bar"},"Descriptive Progress Bar"),Object(r.createElement)(a.a,null,Object(s.f)(u.c,"progress-bar-descriptive")),d({id:"Vertical"},"Vertical"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(p)),d({id:"States-2"},"States"),f({id:"0percent-complete-2"},"0% complete"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(b,"zero")),f({id:"25percent-complete-2"},"25% complete"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(b,"25")),f({id:"50percent-complete-2"},"50% complete"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(b,"50")),f({id:"75percent-complete-2"},"75% complete"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(b,"75")),f({id:"100percent-complete-2"},"100% complete"),Object(r.createElement)(a.a,{demoStyles:"height: 200px;"},Object(s.f)(b,"100")),d({id:"Modifiers"},"Modifiers"),f({id:"Radius"},"Radius"),Object(r.createElement)(a.a,null,Object(s.f)(u.c,"circular")),f({id:"Thickness"},"Thickness"),Object(r.createElement)(i.a,null,Object(r.createElement)(o.a,null,Object(r.createElement)("strong",null,"X-Small"),Object(r.createElement)(a.a,{toggleCode:!1},Object(s.f)(u.c,"thickness-x-small"))),Object(r.createElement)(o.a,null,Object(r.createElement)("strong",null,"Small"),Object(r.createElement)(a.a,{toggleCode:!1},Object(s.f)(u.c,"thickness-small"))),Object(r.createElement)(o.a,null,Object(r.createElement)("strong",null,"Medium"),Object(r.createElement)(a.a,{toggleCode:!1},Object(s.f)(u.c,"thickness-medium"))),Object(r.createElement)(o.a,null,Object(r.createElement)("strong",null,"Large"),Object(r.createElement)(a.a,{toggleCode:!1},Object(s.f)(u.c,"thickness-large")))))},j=function(){return Object(n.a)(O())}}});