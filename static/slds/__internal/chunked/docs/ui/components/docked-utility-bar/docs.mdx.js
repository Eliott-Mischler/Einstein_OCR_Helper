var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/docked-utility-bar/docs.mdx.js"]=function(e){function t(t){for(var l,i,o=t[0],c=t[1],r=t[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(m&&m(t);u.length;)u.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(l=!1)}l&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},n={29:0},s=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var m=c;return s.push([757,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},757:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return x})),a.d(t,"getContents",(function(){return j}));var l=a(0),n=a.n(l),s=a(4),i=a(2),o=(a(28),a(45),a(14),a(1)),c=a(10),r=a(7),m=a(5),d=a.n(m),u="\n  height: 540px;\n  overflow: hidden;\n\n  .slds-utility-bar_container {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  .slds-utility-bar,\n  .slds-utility-panel {\n    position: absolute;\n  }\n",p=function(e){return n.a.createElement("div",{className:d()("slds-utility-panel slds-grid slds-grid_vertical",e.className),role:"dialog","aria-labelledby":"panel-heading-01"},n.a.createElement("div",{className:"slds-utility-panel__header slds-grid slds-shrink-none"},n.a.createElement("div",{className:"slds-media slds-media_center"},n.a.createElement("div",{className:"slds-media__figure slds-m-right_x-small"},n.a.createElement("span",{className:"slds-icon_container"},n.a.createElement(c.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"call"}))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:"panel-heading-01"},e.header||"Header"))),n.a.createElement("div",{className:"slds-col_bump-left slds-shrink-none"},n.a.createElement(r.b,{className:"slds-button_icon",symbol:"minimize_window",assistiveText:"Close Panel",title:"Close Panel"}))),n.a.createElement("div",{className:"slds-utility-panel__body"},e.children))},b=function(e){return n.a.createElement("li",{className:d()("slds-utility-bar__item",{"slds-has-notification":e.notification,"slds-utility-bar__item_pop-out":e.hasPopOut},e.className)},n.a.createElement("button",{className:d()("slds-button slds-utility-bar__action",{"slds-is-active":e.active}),"aria-pressed":!!e.active},e.notification?n.a.createElement("abbr",{className:"slds-indicator_unread",title:"Unread Item","aria-label":"Unread Item"},n.a.createElement("span",{className:"slds-assistive-text"},"●")):null,n.a.createElement(c.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:e.symbol}),n.a.createElement("span",{className:"slds-utility-bar__text"},e.children),e.hasPopOut&&n.a.createElement("span",{className:"slds-assistive-text"},": is popped out in new window")))},y=function(e){return n.a.createElement("footer",{className:"slds-utility-bar_container","aria-label":"Utility Bar"},n.a.createElement("h2",{className:"slds-assistive-text"},"Utility Bar"),n.a.createElement("ul",{className:d()("slds-utility-bar",e.className)},e.children),e.panel)},f=n.a.createElement(p,{className:"slds-is-open",header:"Call"},n.a.createElement("div",{className:"slds-align_absolute-center"},"Utility Panel Body")),h=n.a.createElement(y,{panel:n.a.createElement(p,{header:"Call"},n.a.createElement("div",{className:"slds-align_absolute-center"},"Utility Panel Body"))},n.a.createElement(b,{symbol:"call"},"Call"),n.a.createElement(b,{symbol:"clock"},"History"),n.a.createElement(b,{symbol:"note"},"Notes"),n.a.createElement(b,{symbol:"omni_channel"},n.a.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),n.a.createElement("span",null,"Omni-Channel"))),_=[{id:"default",label:"Default",demoStyles:u,element:h},{id:"open",label:"Panel Open",demoStyles:u,element:n.a.createElement(y,{panel:f},n.a.createElement(b,{symbol:"call",active:!0},"Call"),n.a.createElement(b,{symbol:"clock"},"History"),n.a.createElement(b,{symbol:"note"},"Notes"),n.a.createElement(b,{symbol:"omni_channel"},n.a.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),n.a.createElement("span",null,"Omni-Channel")))},{id:"notification",label:"Item has notification",demoStyles:u,element:n.a.createElement(y,null,n.a.createElement(b,{symbol:"call"},"Call"),n.a.createElement(b,{symbol:"clock"},"History"),n.a.createElement(b,{symbol:"note"},"Notes"),n.a.createElement(b,{symbol:"omni_channel",notification:!0},n.a.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),n.a.createElement("span",null,"Omni-Channel")))},{id:"pop-out",label:"Item has popout",demoStyles:u,element:n.a.createElement(y,null,n.a.createElement(b,{symbol:"call"},"Call"),n.a.createElement(b,{hasPopOut:!0,active:!0,symbol:"clock"},"History"),n.a.createElement(b,{symbol:"note"},"Notes"),n.a.createElement(b,{symbol:"omni_channel"},n.a.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),n.a.createElement("span",null,"Omni-Channel")))}],E=s.c.code,O=s.c.h2,v=s.c.h3,N=s.c.p,x=function(){return Object(l.createElement)(s.b,{},Object(l.createElement)("div",{className:"doc lead"},"Docked utility bar is a persistent bar that allows a user to continually use the app to complete tasks while expanding/collapsing utility panels."),Object(l.createElement)(i.a,{isViewport:!0,exampleOnly:!0,demoStyles:Object(o.e)(_,"open")},Object(o.f)(_,"open")),O({id:"About-Docked-Utility-Bar"},"About Docked Utility Bar"),N({},"Fixed bar at the bottom of viewport, that contains items."),O({id:"Base"},"Base"),Object(l.createElement)(i.a,{isViewport:!0,demoStyles:Object(o.e)(_,"default")},Object(o.f)(_,"default")),O({id:"States"},"States"),v({id:"Panel-open"},"Panel open"),Object(l.createElement)(i.a,{isViewport:!0,demoStyles:Object(o.e)(_,"open")},Object(o.f)(_,"open")),v({id:"Item-has-notification"},"Item has notification"),Object(l.createElement)(i.a,{isViewport:!0,demoStyles:Object(o.e)(_,"notification")},Object(o.f)(_,"notification")),v({id:"Item-has-popout"},"Item has popout"),N({},"If the utility bar item is active and its panel is popped open in a new window, use ",E({},".slds-utility-bar__item_pop-out")," on the ",E({},".slds-utility-bar__item"),". This will add a visual indicator to communicate that the panel is opened in a new window."),Object(l.createElement)(i.a,{isViewport:!0,demoStyles:Object(o.e)(_,"pop-out")},Object(o.f)(_,"pop-out")))},j=function(){return Object(s.a)(x())}}});