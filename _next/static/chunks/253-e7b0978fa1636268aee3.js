(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),u=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||u()}},3665:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}n.d(t,{p:function(){return U}});var i,c,l,s=n(7294);function f(e,t){if(e in t){for(var n=t[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof n?n.apply(void 0,o):n}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,f),u}function d(e){var t=e.props,n=e.slot,a=e.defaultTag,u=e.features,l=e.visible,s=void 0===l||l,d=e.name;if(s)return p(t,n,a,d);var v=null!=u?u:i.None;if(v&i.Static){var m=t.static,y=void 0!==m&&m,h=o(t,["static"]);if(y)return p(h,n,a,d)}if(v&i.RenderStrategy){var g,b=t.unmount,w=void 0===b||b,k=o(t,["unmount"]);return f(w?c.Unmount:c.Hidden,((g={})[c.Unmount]=function(){return null},g[c.Hidden]=function(){return p(r({},k,{hidden:!0,style:{display:"none"}}),n,a,d)},g))}return p(t,n,a,d)}function p(e,t,n,r){var a;void 0===t&&(t={});var i=m(e,["unmount","static"]),c=i.as,l=void 0===c?n:c,f=i.children,d=i.refName,p=void 0===d?"ref":d,v=o(i,["as","children","refName"]),y=void 0!==e.ref?((a={})[p]=e.ref,a):{},h="function"===typeof f?f(t):f;if(v.className&&"function"===typeof v.className&&(v.className=v.className(t)),l===s.Fragment&&Object.keys(v).length>0){if(!(0,s.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(h,Object.assign({},function(e,t,n){for(var r,o=Object.assign({},e),a=function(){var n,a=r.value;void 0!==e[a]&&void 0!==t[a]&&Object.assign(o,((n={})[a]=function(n){n.defaultPrevented||e[a](n),n.defaultPrevented||t[a](n)},n))},i=u(n);!(r=i()).done;)a();return o}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(m(v,["ref"])),h.props,["onClick"]),y))}return(0,s.createElement)(l,Object.assign({},m(v,["ref"]),l!==s.Fragment&&y),h)}function v(e){var t;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=u(t);!(n=o()).done;){var a=n.value;a in r&&delete r[a]}return r}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,s.useRef)(t);return(0,s.useEffect)((function(){r.current=t}),[t]),(0,s.useCallback)((function(e){for(var t,n=u(r.current);!(t=n()).done;){var o=t.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function h(e){for(var t,n,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!a||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(i||(i={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(c||(c={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(l||(l={}));var g="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,b={serverHandoffComplete:!1};var w=0;function k(){return++w}function E(){var e=function(){var e=(0,s.useState)(b.serverHandoffComplete),t=e[0],n=e[1];return(0,s.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,s.useEffect)((function(){!1===b.serverHandoffComplete&&(b.serverHandoffComplete=!0)}),[]),t}(),t=(0,s.useState)(e?k:null),n=t[0],r=t[1];return g((function(){null===n&&r(k())}),[n]),null!=n?""+n:void 0}var C,O,S,P,M=(0,s.createContext)(null);function I(e){var t=e.value,n=e.children;return s.createElement(M.Provider,{value:t},n)}function j(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"===typeof n&&"button"===n.toLowerCase()?"button":void 0}M.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(C||(C={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(S||(S={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(P||(P={}));var x=((O={})[P.ToggleDisclosure]=function(e){var t;return r({},e,{disclosureState:f(e.disclosureState,(t={},t[S.Open]=S.Closed,t[S.Closed]=S.Open,t))})},O[P.CloseDisclosure]=function(e){return e.disclosureState===S.Closed?e:r({},e,{disclosureState:S.Closed})},O[P.LinkPanel]=function(e){return!0===e.linkedPanel?e:r({},e,{linkedPanel:!0})},O[P.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:r({},e,{linkedPanel:!1})},O[P.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:r({},e,{buttonId:t.buttonId})},O[P.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:r({},e,{panelId:t.panelId})},O),D=(0,s.createContext)(null);function A(e){var t=(0,s.useContext)(D);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+U.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}return t}D.displayName="DisclosureContext";var L=(0,s.createContext)(null);function T(e){var t=(0,s.useContext)(L);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+U.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,T),n}return t}L.displayName="DisclosureAPIContext";var H=(0,s.createContext)(null);function _(e,t){return f(t.type,x,e,t)}H.displayName="DisclosurePanelContext";var R=s.Fragment;function U(e){var t,n=e.defaultOpen,r=void 0!==n&&n,a=o(e,["defaultOpen"]),u="headlessui-disclosure-button-"+E(),i="headlessui-disclosure-panel-"+E(),c=(0,s.useReducer)(_,{disclosureState:r?S.Open:S.Closed,linkedPanel:!1,buttonId:u,panelId:i}),l=c[0].disclosureState,p=c[1];(0,s.useEffect)((function(){return p({type:P.SetButtonId,buttonId:u})}),[u,p]),(0,s.useEffect)((function(){return p({type:P.SetPanelId,panelId:i})}),[i,p]);var v=(0,s.useCallback)((function(e){p({type:P.CloseDisclosure});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(u):document.getElementById(u);null==t||t.focus()}),[p,u]),m=(0,s.useMemo)((function(){return{close:v}}),[v]),y=(0,s.useMemo)((function(){return{open:l===S.Open,close:v}}),[l,v]);return s.createElement(D.Provider,{value:c},s.createElement(L.Provider,{value:m},s.createElement(I,{value:f(l,(t={},t[S.Open]=C.Open,t[S.Closed]=C.Closed,t))},d({props:a,slot:y,defaultTag:R,name:"Disclosure"}))))}var N=v((function e(t,n){var o=A([U.name,e.name].join(".")),a=o[0],u=o[1],i=(0,s.useRef)(null),c=y(i,n),f=(0,s.useContext)(H),p=null!==f&&f===a.panelId,v=(0,s.useCallback)((function(e){var t;if(p){if(a.disclosureState===S.Closed)return;switch(e.key){case l.Space:case l.Enter:e.preventDefault(),e.stopPropagation(),u({type:P.ToggleDisclosure}),null==(t=document.getElementById(a.buttonId))||t.focus()}}else switch(e.key){case l.Space:case l.Enter:e.preventDefault(),e.stopPropagation(),u({type:P.ToggleDisclosure})}}),[u,p,a.disclosureState]),m=(0,s.useCallback)((function(e){switch(e.key){case l.Space:e.preventDefault()}}),[]),b=(0,s.useCallback)((function(e){var n;h(e.currentTarget)||(t.disabled||(p?(u({type:P.ToggleDisclosure}),null==(n=document.getElementById(a.buttonId))||n.focus()):u({type:P.ToggleDisclosure})))}),[u,t.disabled,a.buttonId,p]),w=(0,s.useMemo)((function(){return{open:a.disclosureState===S.Open}}),[a]),k=function(e,t){var n=(0,s.useState)((function(){return j(e)})),r=n[0],o=n[1];return g((function(){o(j(e))}),[e.type,e.as]),g((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[r,t]),r}(t,i);return d({props:r({},t,p?{ref:c,type:k,onKeyDown:v,onClick:b}:{ref:c,id:a.buttonId,type:k,"aria-expanded":t.disabled?void 0:a.disclosureState===S.Open,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:v,onKeyUp:m,onClick:b}),slot:w,defaultTag:"button",name:"Disclosure.Button"})})),B=i.RenderStrategy|i.Static,F=v((function e(t,n){var o=A([U.name,e.name].join(".")),a=o[0],u=o[1],i=T([U.name,e.name].join(".")).close,c=y(n,(function(){a.linkedPanel||u({type:P.LinkPanel})})),l=(0,s.useContext)(M),f=null!==l?l===C.Open:a.disclosureState===S.Open;(0,s.useEffect)((function(){return function(){return u({type:P.UnlinkPanel})}}),[u]),(0,s.useEffect)((function(){var e;a.disclosureState!==S.Closed||null!=(e=t.unmount)&&!e||u({type:P.UnlinkPanel})}),[a.disclosureState,t.unmount,u]);var p=(0,s.useMemo)((function(){return{open:a.disclosureState===S.Open,close:i}}),[a,i]),v={ref:c,id:a.panelId},m=t;return s.createElement(H.Provider,{value:a.panelId},d({props:r({},m,v),slot:p,defaultTag:"div",features:B,visible:f,name:"Disclosure.Panel"}))}));U.Button=N,U.Panel=F},6049:function(e,t,n){"use strict";n.d(t,{Oqj:function(){return o},b0D:function(){return a}});var r=n(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),u=n(9414),i=n(4651),c=n(7426),l={};function s(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,i.useRouter)(),f=a.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,y=e.shallow,h=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.Children.only(v))&&"object"===typeof t&&t.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),k=r(w,2),E=k[0],C=k[1],O=a.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,a.useEffect)((function(){var e=C&&n&&(0,u.isLocalURL)(d),t="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,C,g,n,o]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,m,y,h,g)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&(0,u.getDomainLocale)(p,P,o&&o.locales,o&&o.domainLocales);S.href=M||(0,u.addBasePath)((0,u.addLocale)(p,P,o&&o.defaultLocale))}return a.default.cloneElement(t,S)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!u&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},2775:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(a=n(3244))&&a.__esModule?a:{default:a},c=n(3398),l=n(1165),s=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var v=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=v.length;c<l;c++){var s=v[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],d=r[s]||new Set;"name"===s&&u||!d.has(f)?(d.add(f),r[s]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,u.default.cloneElement(e,i)}return u.default.cloneElement(e,{key:a})}))}var y=function(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(l.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};t.default=y},3244:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),u=(n(1506),n(2205)),i=n(8585),c=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),f=function(e){u(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},9008:function(e,t,n){e.exports=n(2775)},1664:function(e,t,n){e.exports=n(2167)}}]);