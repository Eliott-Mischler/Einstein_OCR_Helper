var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/radio-group/docs.mdx.js"]=function(e){function t(t){for(var o,a,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={63:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;return i.push([626,0]),n()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},626:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return p})),n.d(t,"getContents",(function(){return f}));var o=n(0),r=n(4),i=n(2),a=(n(28),n(45),n(14),n(1)),s=n(37),l=n(35),c=n(39),d=r.c.code,u=r.c.h2,h=r.c.h3,b=r.c.p,p=function(){return Object(o.createElement)(r.b,{},Object(o.createElement)("div",{className:"doc lead"},"A select list that can have a single entry checked at any one time."),Object(o.createElement)(i.a,{exampleOnly:!0},Object(a.f)(l.d)),u({id:"About-Radio-Group"},"About Radio Group"),b({},"Radio buttons are shown in a group of two or more. The user can only select one radio button at a time. You should use the same ",d({},"name")," attribute on all radio buttons in the group. This ensures that if there is more than one group in the form, each one stays associated with its own group."),b({},"The ability to style radio buttons with CSS varies across browsers. To ensure that radio buttons look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work."),h({id:"Accessibility"},"Accessibility"),b({},"Groups of radio buttons should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of radio buttons. The fieldset is placed around the whole group and the legend contains the question."),b({},"Custom radio buttons are created by applying the ",d({},".slds-radio")," class to a ",d({},"<label>")," element. To remain accessible to all user agents, place an ",d({},"<input>")," with ",d({},'type="radio"')," inside the ",d({},"<label>")," element. The ",d({},"<input>")," is then visually hidden, and the styling is placed on a span with the ",d({},".slds-radio_faux")," class. The styling of the span changes based on whether the radio button is selected or focused by using a pseudo-element. A second span with ",d({},".slds-form-element__label")," contains the label text."),b({},"When a radio group is required, the ",d({},"<fieldset>")," should receive the class ",d({},".slds-is-required"),". The ",d({},"<legend>")," should then get ",d({},'<abbr class="required" title="required">*</abbr>')," added to the DOM for visual indication that the radio group is required."),b({},"When disabling a radio button, either the entire group must be disabled or if only some radio buttons are disabled, then the checked radio button cannot be disabled."),h({id:"Mobile"},"Mobile"),Object(o.createElement)(s.a,{patternSpecificText:"radio groups will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor"}),Object(o.createElement)(i.a,{frameOnly:!0,frameTitle:"Example mobile styles for radio groups"},Object(a.f)(l.d)),u({id:"Base"},"Base"),Object(o.createElement)(i.a,null,Object(a.f)(l.d)),u({id:"States"},"States"),h({id:"Disabled"},"Disabled"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"disabled")),h({id:"Checked-and-Disabled"},"Checked and Disabled"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"checked-and-disabled")),h({id:"Required"},"Required"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"required")),h({id:"Error"},"Error"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"error")),h({id:"Required-with-Help-Text-Icon"},"Required with Help Text Icon"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"required-help-text-icon")),h({id:"Required-with-Help-Text-Icon-and-Tooltip"},"Required with Help Text Icon and Tooltip"),Object(o.createElement)(i.a,{demoStyles:Object(a.e)(l.e,"required-help-text-icon-tooltip")},Object(a.f)(l.e,"required-help-text-icon-tooltip")),h({id:"Right-to-Left"},"Right to Left"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"rtl")),h({id:"Right-to-Left-Required-with-Help-Text-Icon"},"Right to Left Required with Help Text Icon"),Object(o.createElement)(i.a,null,Object(a.f)(l.e,"rtl-required-help-text-icon")),u({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(o.createElement)(c.a,{name:"radio-group",type:"component"}))},f=function(){return Object(r.a)(p())}}});