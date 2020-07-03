module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(0),r=n.n(o);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}function d(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(s,t);var e,n,o,i=c(s);function s(){var t,e,n,o,r;a(this,s);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return m(f(r=i.call.apply(i,[this].concat(u))),"moving",!1),m(f(r),"initX",0),m(f(r),"initY",0),m(f(r),"lastX",0),m(f(r),"lastY",0),m(f(r),"state",{x:0,y:0,zoom:1,rotate:0,current:null!==(t=null===(e=r.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!!(null===(n=r.props)||void 0===n||null===(o=n.images)||void 0===o?void 0:o.length)}),m(f(r),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),m(f(r),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(r),"preventDefault",(function(t){return t.preventDefault()})),m(f(r),"getCurrentImage",(function(t,e){var n,o,r,i,a;return t.multi?null!==(o=null!==(r=null===(i=e.images[t.current])||void 0===i?void 0:i.url)&&void 0!==r?r:null===(a=e.images)||void 0===a?void 0:a[t.current])&&void 0!==o?o:"":null!==(n=e.image)&&void 0!==n?n:""})),m(f(r),"getCurrentTitle",(function(t,e){var n,o,r,i;return t.multi?null!==(o=null===(r=e.images)||void 0===r||null===(i=r[t.current])||void 0===i?void 0:i.title)&&void 0!==o?o:"":null!==(n=e.title)&&void 0!==n?n:""})),m(f(r),"navigateImage",(function(t,e){r.stopSideEffect(e);var n=0;switch(t){case"next":n=r.state.current+1;break;case"prev":n=r.state.current-1;break;default:console.error("Illegal Invocation")}n>=r.props.images.length?n=0:n<0&&(n=r.props.images.length-1),r.setState({current:n,x:0,y:0,zoom:1,rotate:0})})),m(f(r),"startMove",(function(t){if(r.state.zoom<=1)return!1;r.moving=!0,r.preventDefault(t);var e=v(t);r.initX=e.x-r.lastX,r.initY=e.y-r.lastY})),m(f(r),"duringMove",(function(t){if(!r.moving)return!1;r.preventDefault(t);var e=v(t);r.lastX=e.x-r.initX,r.lastY=e.y-r.initY,r.setState({x:e.x-r.initX,y:e.y-r.initY})})),m(f(r),"endMove",(function(t){r.preventDefault(t),r.moving=!1})),m(f(r),"applyZoom",(function(t){var e=r.props.zoomStep,n=void 0===e?.3:e;switch(t){case"in":r.setState({zoom:r.state.zoom+n});break;case"out":r.state.zoom>1?r.setState({zoom:r.state.zoom-n}):r.setState({x:0,y:0});break;default:console.error("Wrong function invocation")}})),m(f(r),"applyRotate",(function(t){switch(t){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90});break;default:console.error("Wrong function invocation")}})),m(f(r),"reset",(function(t){r.stopSideEffect(t),r.setState({x:0,y:0,zoom:1,rotate:0})})),m(f(r),"exit",(function(t){if("function"==typeof r.props.onClose)return r.props.onClose(t);console.warn("No Exit function passed on props: onClose")})),m(f(r),"canvasClick",(function(t){var e=r.props.clickOutsideToExit;if(void 0===e||e)return r.exit(t)})),r}return e=s,(n=[{key:"componentWillMount",value:function(){document.body.classList.add("lb-open-lightbox")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox")}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props),o=this.props,i=o.allowZoom,a=void 0===i||i,l=o.allowRotate,u=void 0===l||l,c=o.allowReset,s=void 0===c||c,f=o.buttonAlign,p=void 0===f?"flex-end":f,m=o.showTitle,v=void 0===m||m,b=this.state,y=b.x,g=b.y,h=b.zoom,x=b.rotate;return e?r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:p}},r.a.createElement(d,{condition:v&&n},r.a.createElement("div",{className:"lb-title",style:{display:"center"===p?"none":"flex",order:"flex-start"===p?"1":"unset"}},r.a.createElement("span",{title:n,style:{textAlign:"flex-start"===p?"right":"left"}},n))),r.a.createElement(d,{condition:this.state.multi},r.a.createElement("div",{title:"Previous",className:"lb-button prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(d,{condition:a},r.a.createElement("div",{title:"Zoom In",className:"lb-button zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button zoomout",onClick:function(){return t.applyZoom("out")}})),r.a.createElement(d,{condition:u},r.a.createElement("div",{title:"Rotate left",className:"lb-button rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button rotater",onClick:function(){return t.applyRotate("cw")}})),s?r.a.createElement("div",{title:"Reset",className:"lb-button lb-hide-mobile reload",onClick:this.reset}):null,r.a.createElement("div",{title:"Close",className:"lb-button close",style:{order:"flex-start"===p?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas",onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(y,g,h,x),cursor:this.state.zoom>1?"grab":"unset"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},className:"lb-img",title:n,src:e,alt:n}),r.a.createElement(d,{condition:this.state.multi},r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},r.a.createElement("div",{title:"Previous",className:"lb-button prev",onClick:function(e){return t.navigateImage("prev",e)}}),s?r.a.createElement("div",{title:"Reset",className:"lb-button reload",onClick:this.reset}):null,r.a.createElement("div",{title:"Next",className:"lb-button next",onClick:function(e){return t.navigateImage("next",e)}}))))):(console.warn("Not showing lightbox because no image(s) was supplied"),null)}}])&&l(e.prototype,n),o&&l(e,o),s}(r.a.Component)}]);