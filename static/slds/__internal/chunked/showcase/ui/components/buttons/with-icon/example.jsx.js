var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/buttons/with-icon/example.jsx.js"]=function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(c&&c(e);f.length;)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={27:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},l=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=i;return l.push([653,0]),n()}({0:function(t,e){t.exports=React},16:function(t,e){t.exports=ReactDOM},653:function(t,e,n){"use strict";n.r(e),n.d(e,"states",(function(){return u})),n.d(e,"examples",(function(){return i}));var r=n(0),o=n.n(r),l=n(9),a=n(13);e.default=[{id:"default",label:"Default",element:o.a.createElement(a.Button,{isNeutral:!0},o.a.createElement(l.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"download"}),"Button Neutral")}];var u=[{id:"disabled",label:"Disabled",element:o.a.createElement(a.Button,{isNeutral:!0,disabled:!0},o.a.createElement(l.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"download"}),"Button Neutral")}],i=[{id:"with-icon-right",label:"With right icon",element:o.a.createElement(a.Button,{isNeutral:!0},"Button Neutral",o.a.createElement(l.a,{className:"slds-button__icon slds-button__icon_right",sprite:"utility",symbol:"download"}))}]}});