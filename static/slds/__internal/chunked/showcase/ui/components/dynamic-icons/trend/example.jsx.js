var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/dynamic-icons/trend/example.jsx.js"]=function(e){function t(t){for(var r,i,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={69:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;return s.push([720,0]),n()}({0:function(e,t){e.exports=React},720:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return m}));var r=n(0),a=n.n(r),s=n(1),i=n.n(s),l=n(2),o=n.n(l),c=["assistiveText"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.assistiveText,n=d(e,c);return a.a.createElement("span",u({},n,{className:o()("slds-icon-trend",e.className)}),a.a.createElement("svg",{viewBox:"0 0 16 16","aria-hidden":"true"},a.a.createElement("path",{className:"slds-icon-trend__arrow",d:"M.75 8H11M8 4.5L11.5 8 8 11.5"}),a.a.createElement("circle",{className:"slds-icon-trend__circle",cy:"8",cx:"8",r:"7.375",transform:"rotate(-28 8 8) scale(-1 1) translate(-16 0)"})),a.a.createElement("span",{className:"slds-assistive-text"},t))};p.propTypes={title:i.a.string.isRequired,assistiveText:i.a.string.isRequired};var f=p,m=(t.default=[{id:"default",label:"Trend – default",element:a.a.createElement(f,{"data-slds-trend":"neutral",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"})}],[{id:"down",label:"Trend - Down",element:a.a.createElement(f,{"data-slds-trend":"down",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"up",label:"Trend - Up",element:a.a.createElement(f,{"data-slds-trend":"up",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"static",label:"Trend - Static (no animation)",element:a.a.createElement(f,{"data-slds-trend":"up",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"paused",label:"Trend - Paused",element:a.a.createElement(f,{"data-slds-trend":"up",className:"slds-is-animated slds-is-paused",title:"Description of the icon",assistiveText:"Text alternative"})}])}});