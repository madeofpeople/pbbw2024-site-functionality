!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.primitives},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.keycodes},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/page-header","title":"Page Header","category":"design","collection":"site-functionality","icon":"align-wide","className":"page-header","description":"Display a cover image or video in page header.","keywords":["navigation","image banner","header"],"attributes":{},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"multiple":false},"variations":[],"styles":[],"example":{"innerBlocks":[{"name":"core/cover","attributes":{"className":"header-banner","dimRatio":0,"url":"https://ichef.bbci.co.uk/news/2048/cpsprodpb/0857/production/_107953120_mediaitem107950526.jpg"},"innerBlocks":[{"name":"core/group","attributes":{"className":"header-content"},"innerBlocks":[{"name":"core/heading","attributes":{"level":1,"placeholder":"Add Heading...","className":"header-content-title","content":"Supporting Indigenous <br>Land Defenders"}},{"name":"core/buttons","attributes":{"className":"header-content-buttons"},"innerBlocks":[{"name":"core/button","attributes":{"text":"Watch the Film","className":"header-content-button","url":"#"}}]}]}]}]},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/page-nav","title":"Page Navigation","category":"text","collection":"site-functionality","icon":"button","className":"page-nav","description":"Display an internal page navigation element.","keywords":["navigation","page menu","button"],"attributes":{},"supports":{"align":true,"anchor":true,"color":{"background":false,"text":false,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"multiple":false},"variations":[],"styles":[],"example":{},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/tout","title":"Tout","category":"touts","collection":"site-functionality","description":"Display a tout on page","keywords":["callout","tout"],"attributes":{"url":{"type":"string","default":""},"linkTarget":{"type":"string"},"rel":{"type":"string"},"className":{"type":"string","default":"tout"}},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"__experimentalStyle":false,"__experimentalBorder":false},"example":{"attributes":{"className":"tout"},"innerBlocks":[{"name":"core/heading","attributes":{"level":2,"className":"tout__heading","content":"Donate to the Uru-eu-WAU-WAU Association"}},{"name":"core/image","attributes":{"className":"tout__image","url":"https://s.w.org/images/core/5.3/MtBlanc1.jpg","sizeSlug":"full","linkDestination":"none"}},{"name":"core/paragraph","attributes":{"className":"tout__content","content":"The Uru-eu-wau-wau Association of the Jupaú people defends a critical area of over 6,000 square miles of pristine rainforest. Help support Bitaté and his community.."}}]},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e,t,n){"use strict";n.r(t),n.d(t,"registerBlocks",(function(){return V}));var o={};n.r(o),n.d(o,"name",(function(){return b})),n.d(o,"category",(function(){return g})),n.d(o,"settings",(function(){return v}));var r={};n.r(r),n.d(r,"name",(function(){return _})),n.d(r,"category",(function(){return w})),n.d(r,"settings",(function(){return O}));var a={};n.r(a),n.d(a,"name",(function(){return I})),n.d(a,"category",(function(){return T})),n.d(a,"settings",(function(){return C}));var i=n(7),c=n(1),l=n(8),s=n(0),u=n(2),d=n(4),p=n.n(d);const m=[["core/cover",{className:"header-banner",placeholder:Object(c.__)("Add Header Image...","site-functionality"),useFeaturedImage:!0,dimRatio:0},[["core/group",{className:"header-content"},[["core/heading",{level:1,className:"header-content-title",placeholder:Object(c.__)("Add Heading...","site-functionality")}],["core/buttons",{className:"header-content-buttons"},[["core/button",{className:"header-content-button",placeholder:Object(c.__)("Add Button...","site-functionality")}]]]]]]]],f=["core/cover","getwid/section","nk/awb","core/post-title","site-functionality/page-nav","core/navigation","core/navigation-link","core/buttons","core/button","core/heading","core/paragraph","core/group","core/columns","core/column","core/embed","core/video"];const{name:b,category:g}=l,v={edit:e=>{const{attributes:t,className:n,setAttributes:o}=e,r=Object(u.useBlockProps)({className:p()(n,"page-header")});return Object(s.createElement)("div",r,Object(s.createElement)(u.InnerBlocks,{allowedBlocks:f,template:m}))},save:e=>Object(s.createElement)(u.InnerBlocks.Content,null)};var y=n(9);const h=[["core/buttons",{className:"menu"},[["core/button",{placeholder:Object(c.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(c.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(c.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]]]],k=["core/buttons","core/button"];const{name:_,category:w}=y,O={edit:e=>{const{attributes:t,className:n,setAttributes:o}=e,r=Object(u.useBlockProps)({className:p()(n,"page-nav")});return Object(s.createElement)("div",r,Object(s.createElement)(u.InnerBlocks,{allowedBlocks:k,template:h}))},save:e=>Object(s.createElement)(u.InnerBlocks.Content,null)};var j=n(10),x=n(5),N=n(6),S=n(3),B=Object(s.createElement)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(S.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),E=Object(s.createElement)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(S.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));const A=[["core/heading",{placeholder:Object(c.__)("Add Heading...","site-functionality"),level:3,className:"tout__title"},[]],["core/image",{placeholder:Object(c.__)("Add image...","site-functionality"),className:"tout__image"},[]],["core/paragraph",{placeholder:Object(c.__)("Add content...","site-functionality"),className:"tout__content"},[]]],H=["core/group","core/columns","core/cover","getwid/section","nk/awb","core/heading","core/paragraph","core/image","core/buttons","core/embed","core/video"];var P=Object(s.createElement)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(S.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));const{name:I,category:T}=j,C={icon:P,edit:e=>{const{attributes:t,isSelected:n,onReplace:o,setAttributes:r,className:a}=e,{linkTarget:i,rel:l,url:d}=t,m=Object(u.useBlockProps)({className:p()(a,"tout")}),f=Object(s.useRef)(),[b,g]=Object(s.useState)(!1),v=!!d,y="_blank"===i;function h(){r({url:"",linkTarget:void 0,rel:void 0}),g(!1)}return Object(s.useEffect)(()=>{n||g(!1)},[n]),Object(s.createElement)("div",m,Object(s.createElement)(u.BlockControls,{group:"block"},!v&&Object(s.createElement)(x.ToolbarButton,{name:"link",icon:B,title:Object(c.__)("Link","site-functionality"),shortcut:N.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),g(!0)}}),v&&Object(s.createElement)(x.ToolbarButton,{name:"link",icon:E,title:Object(c.__)("Unlink","site-functionality"),shortcut:N.displayShortcut.primaryShift("k"),onClick:h,isActive:!0})),n&&(b||v)&&Object(s.createElement)(x.Popover,{position:"bottom center",onClose:()=>{g(!1)},anchorRef:null==f?void 0:f.current,focusOnMount:!!b&&"firstElement"},Object(s.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:d,opensInNewTab:y},onChange:({url:e="",opensInNewTab:t})=>{r({url:e}),y!==t&&function(e){const t=e?"_blank":void 0;let n=l;t&&!l?n="noreferrer noopener":t||"noreferrer noopener"!==l||(n=void 0),r({linkTarget:t,rel:n})}(t)},onRemove:()=>{h()},forceIsEditingLink:b})),Object(s.createElement)(u.InnerBlocks,{allowedBlocks:H,template:A}))},save:e=>Object(s.createElement)(u.InnerBlocks.Content,null)},L=[o,r,a],M=e=>{if(!e)return;const{name:t,settings:n}=e;Object(i.registerBlockType)(t,{...n})},V=()=>{L.forEach(M)};V()}]);