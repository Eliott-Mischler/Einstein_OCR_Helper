var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/illustration/docs.mdx.js"]=function(e){function t(t){for(var a,o,r=t[0],i=t[1],s=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(m&&m(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==l[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={43:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var m=i;return c.push([625,0]),n()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},625:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return y})),n.d(t,"getContents",(function(){return L}));var a=n(0),l=n(4),c=n(2),o=n(26),r=(n(15),n(14)),i=n(65),s=n(153),m=n(136),u=n(95),d=n(84),b=n(32),O=l.c.code,h=l.c.h2,j=l.c.h3,E=l.c.li,p=l.c.p,g=l.c.strong,f=l.c.ul,y=function(){return Object(a.createElement)(l.b,{},Object(a.createElement)("div",{className:"doc lead"},"An illustration is an image and inline text that work in tandem to communicate a state in a more friendly way."),Object(a.createElement)(c.a,{exampleOnly:!0},Object(a.createElement)(b.a,null,Object(a.createElement)(m.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"About-Illustration"},"About Illustration"),p({},"Illustrations should be used within other components, such as cards, to express the state of the component. An illustration image must be accompanied with heading text inline."),j({id:"Accessibility"},"Accessibility"),p({},"Each SVG tag requires an ",O({},'aria-hidden="true"')," attribute."),Object(a.createElement)(o.a,{toggleCode:!1},Object(a.createElement)("svg",{viewBox:"0 0 483 218","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg"},"...")),h({id:"Base"},"Base"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"Using-Empty-States"},"Using Empty States"),p({},"Empty states are used when an element doesn’t have content to display to the user. An empty state is an opportunity to engage and delight users. The empty state should tell users what it’s for and why they’re seeing it. Effective empty states also tell users what they can do next.  Illustrations should show data or system state (empty for instance), but not user input validation messaging."),p({},"Empty states have many causes, such as:"),f({},E({},"There’s ",g({},"no data")," the user can see."),E({},"A feature hasn’t been ",g({},"configured yet"),"."),E({},"There’s been an ",g({},"error"),"."),E({},"Empty area of the screen intentionally ",g({},"left blank"),".")),p({},"Use empty states to:"),f({},E({},"Prevent the application from feeling lifeless and empty."),E({},"Help users onboard an application and/or motivate them to interact with the application."),E({},"Warn the user when data is unavailable (because of a system error or otherwise).")),h({id:"With-Message-Body"},"With Message Body"),p({},"Illustrations can include message body text below the heading to further communicate the state of the component. However, illustrations cannot have a message body without heading text."),Object(a.createElement)(r.a,{type:"note",header:"Design Note"},Object(a.createElement)("p",null,"To ensure the readability of your text, we recommend limiting each line to 66 characters.")),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur"}))),h({id:"Large-Illustrations"},"Large Illustrations"),p({},"The base illustration component is typically used within smaller components and has a ",O({},"max-width")," of ",O({},"300px")," and a ",O({},"max-height")," of ",O({},"200px"),". However, there are some cases where it can be used in a larger context."),p({},"For these situations, utilize the modifier ",O({},".slds-illustration_large"),". This will increase the ",O({},"max-width")," of the image to ",O({},"600px")," and the ",O({},"max-height")," to ",O({},"400px"),"."),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,{large:!0},Object(a.createElement)(i.a,null),Object(a.createElement)("h3",{className:"slds-illustration__header slds-text-heading_medium"},"Lorem ipsum dolor"),Object(a.createElement)("p",{className:"slds-text-body_regular"},"Lorem ipsum dolor sit amet, consectetur"))),h({id:"Informational"},"Informational"),p({},"Common Scenarios:"),f({},E({},"Setup needed"),E({},"Maintenance")),j({id:"Going-Camping"},"Going Camping"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(s.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Maintenance"},"Maintenance"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(s.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"No-Data"},"No Data"),p({},"Common Scenarios:"),f({},E({},"No data/information"),E({},"No history/feeds")),j({id:"Desert"},"Desert"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(m.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Open-Road"},"Open Road"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(m.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"Error"},"Error"),p({},"Common Scenarios:"),f({},E({},"No access to a page"),E({},"No connection"),E({},"Page not available in Lightning"),E({},"Page not available"),E({},"Walkthrough not available")),j({id:"No-Access"},"No Access"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(u.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Connection"},"No Connection"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(u.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Not-Available-In-Lightning"},"Not Available In Lightning"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(u.c,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Page-Not-Available"},"Page Not Available"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(u.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Walkthrough-Not-Available"},"Walkthrough Not Available"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(u.e,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"Custom"},"Custom"),j({id:"Fishing-Deals"},"Fishing Deals"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Lake-Mountain"},"Lake Mountain"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Events"},"No Events"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.c,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Task"},"No Task"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Setup"},"Setup"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(i.e,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"Miscellaneous"},"Miscellaneous"),j({id:"Gone-Fishing"},"Gone Fishing"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.a,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Access-2"},"No Access 2"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.b,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Content"},"No Content"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.c,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"No-Preview"},"No Preview"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Preview"},"Preview"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.e,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Research"},"Research"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(d.f,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),h({id:"With-Call-to-Action"},"With Call to Action"),p({},"A call to action may be used to help users move from an empty state to a situation where the page, component, or element is now useful to them."),p({},"In most cases, one call to action will be enough. When using one call to action, place the call to action below the message text."),j({id:"One-Call-to-Action-Link"},"One Call to Action - Link"),Object(a.createElement)(c.a,{demoStyles:"width: 400px;"},Object(a.createElement)(b.b,{link:!0},Object(a.createElement)(b.a,null,Object(a.createElement)(i.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur"})))),j({id:"One-Call-to-Action-Button"},"One Call to Action - Button"),Object(a.createElement)(c.a,{demoStyles:"width: 400px;"},Object(a.createElement)(b.b,{button:"slds-button"},Object(a.createElement)(b.a,null,Object(a.createElement)(i.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur"})))),j({id:"One-Call-to-Action-Button-Brand"},"One Call to Action - Button Brand"),Object(a.createElement)(c.a,{demoStyles:"width: 400px;"},Object(a.createElement)(b.b,{button:"slds-button slds-button_brand"},Object(a.createElement)(b.a,null,Object(a.createElement)(i.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur"})))),j({id:"Two-Calls-to-Action"},"Two Calls to Action"),Object(a.createElement)(c.a,{demoStyles:"width: 400px;"},Object(a.createElement)(b.b,{link:!0},Object(a.createElement)(b.a,null,Object(a.createElement)(i.d,null),Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur",secondaryCTA:"Learn More"})))),h({id:"Text-Only"},"Text Only"),p({},"In certain use cases, it may be appropriate to just use text to communicate states."),j({id:"Heading-and-Message"},"Heading and Message"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor",message:"Lorem ipsum dolor sit amet, consectetur"}))),j({id:"Heading-Only"},"Heading Only"),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(b.c,{heading:"Lorem ipsum dolor"}))),j({id:"Message-Only"},"Message Only"),p({},"When an image is not present, a message only variant may be used."),Object(a.createElement)(c.a,null,Object(a.createElement)(b.a,null,Object(a.createElement)(b.c,{message:"Lorem ipsum dolor sit amet, consectetur"}))))},L=function(){return Object(l.a)(y())}}});