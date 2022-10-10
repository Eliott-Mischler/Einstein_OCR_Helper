var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/modals/docs.mdx.js"]=function(e){function t(t){for(var o,s,l=t[0],r=t[1],d=t[2],h=0,u=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},i={49:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=r;return n.push([691,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},691:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return y})),a.d(t,"getContents",(function(){return w}));var o=a(0),i=a(4),n=a(22),s=a(2),l=a(39),r=a(1),d=a(37),c=i.c.a,h=i.c.code,u=i.c.h2,m=i.c.h3,p=i.c.h4,f=i.c.li,b=i.c.p,g=i.c.ul,y=function(){return Object(o.createElement)(i.b,{},Object(o.createElement)("div",{className:"doc lead"},"Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards."),Object(o.createElement)(s.a,{exampleOnly:!0,isViewport:!0,demoStyles:Object(r.e)(n.f)},Object(r.f)(n.f)),u({id:"About-Modals"},"About Modals"),b({},"Default modals are used in the vast majority of cases. They are as wide as 50% of the viewport, but include a minimum and maximum width to avoid going too narrow or too wide."),b({},"Modals always have an equal amount of space at the top and bottom to account for the height of the close button."),b({},"Modals grow according to how much content is within, but once the modal full height (including the previously mentioned space on top and bottom), the content area will begin to scroll. (This scrolling is currently not available in Salesforce1 Mobile.)"),b({},"Modals can have a tagline in the header, simply by adding a paragraph after the heading."),b({},"By default, the content area of the modal does not have spacing. This allows for content such as Tables to be full-width to the modal. To get spacing when you need it, apply a padding utility (",h({},".slds-p-around_medium"),")."),b({},"Modal headers can also have taglines, if you need to provide additional context. This tagline can also contain links, or the whole thing could be a link in and of itself."),b({},"Large modals call for large amounts of content. The height follows the same behavior and styles of other modals. The width changes to 90% of the viewport, and uses a wider minimum width and no maximum width."),b({},"These are modals that require a linearly directional paradigm of navigation (“Next” and “Back”, etc.) — the actionable buttons in the modal footer live on the left and right, rather than all on the right. These can either be within a large or default modal, depending on the use case."),b({},"If you're using a Modal for a system alert that the user must acknowledge, consider using a ",c({href:"/components/prompt"},"Prompt"),"."),m({id:"Accessibility"},"Accessibility"),b({},"Modals, by definition, trap focus. This means that if a user presses Tab or Shift+Tab while their keyboard focus is in the modal, their focus should stay in and cycle through the modal’s content. Focus shouldn’t return to the underlying page until the user presses the Esc key, presses an explicit “Cancel” or “Close” button in the modal, or performs another action that closes the modal."),p({id:"Expected-markup"},"Expected markup"),g({},f({},"Modal has ",h({},'role="dialog"')),f({},"When the modal is open, everything behind it has HTML attribute ",h({},'aria-hidden="true"'),", so assistive technology won't read out the underlying page. The best way to do this is to give the modal and the page separate wrapper elements and toggle ",h({},'aria-hidden="true"'),"/",h({},'aria-hidden="false"')," on the main page's wrapper depending on whether or not the modal is open."),f({},"Modal contains an HTML heading. This is an ",h({},"h1")," tag by default but should update according to the surrounding DOM structure. While a semantic heading tag is preferable, if necessary applying ",h({},"role=”heading”")," and ",h({},"aria-level")," to a more generic element is acceptable."),f({},"Modal has an ",h({},"aria-labelledby")," attribute whose value is the id of the modal’s heading"),f({},"Modal has an optional ",h({},"aria-describedby")," attribute whose value is the id of the modal's content. This should not be used for all modals, but in instances where the modal is being used as an analog to a javascript ",h({},"confirm()")," or ",h({},"alert()")," dialog to deliver a short prompt that can be responded to with a confirm/cancel button set (eg: ",c({href:"/components/prompt/"},"Prompt"),")."),f({},"Buttons which close the modal should have the same accessible text per ",c({href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"},"WCAG guidelines"),".")),p({id:"Expected-keyboard-interactions"},"Expected keyboard interactions"),g({},f({},"Esc key closes the modal and moves focus to whatever triggered the modal to open"),f({},"Tab key at bottom of modal cycles focus back to first focusable element at top of modal"),f({},"Shift+Tab keys at top of modal cycle focus back to last focusable element at bottom of modal"),f({},"Enter key submits modal’s form data, if applicable")),p({id:"Focus-guidelines"},"Focus guidelines"),g({},f({},"Focus for modals must follow the guidelines described in the ",c({href:"/accessibility/guidelines/global-focus/#dialogs"},"Accessibility Guidelines for Dialogs"),". Pay special attention to where focus is set when the modal opens."),f({},"If no interactive element exists to set focus when the modal opens, add the appropriate ",h({},"tabindex"),' attribute to the header to allow for programmatic focus (see "Footless" example, below).')),m({id:"Mobile"},"Mobile"),Object(o.createElement)(d.a,{patternSpecificText:"modals will have buttons of increased size to accommodate tapping with a finger instead of the more precise mouse cursor"}),Object(o.createElement)(s.a,{frameOnly:!0,frameStyles:{height:"640px"},frameTitle:"Example mobile styles for modals"},Object(r.f)(n.f)),u({id:"Base"},"Base"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.f)},Object(r.f)(n.f)),u({id:"Examples"},"Examples"),m({id:"Taglines"},"Taglines"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"taglines")},Object(r.f)(n.g,"taglines")),m({id:"Headless"},"Headless"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"headless")},Object(r.f)(n.g,"headless")),m({id:"Footless"},"Footless"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"footless")},Object(r.f)(n.g,"footless")),m({id:"Directional"},"Directional"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"directional")},Object(r.f)(n.g,"directional")),m({id:"Small-Modal"},"Small Modal"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"small")},Object(r.f)(n.g,"small")),m({id:"Medium-Modal"},"Medium Modal"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"medium")},Object(r.f)(n.g,"medium")),m({id:"Large-Modal"},"Large Modal"),Object(o.createElement)(s.a,{isViewport:!0,demoStyles:Object(r.e)(n.g,"large")},Object(r.f)(n.g,"large")),u({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(o.createElement)(l.a,{name:"modals",type:"component"}))},w=function(){return Object(i.a)(y())}}});