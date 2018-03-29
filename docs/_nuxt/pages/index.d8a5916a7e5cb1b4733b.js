/*! For license information please see LICENSES */
webpackJsonp([0],{"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("42H9"),r=n("fwGk"),i=!1;var a=function(t){i||n("n1rD")},s=n("VU/8")(o.a,r.a,!1,a,"data-v-2a183b29",null);s.options.__file="pages/index.vue",e.default=s.exports},"/p0H":function(t,e,n){"use strict";var o=n("Lmhy"),r=n("vQWW"),i=!1;var a=function(t){i||n("mvAu")},s=n("VU/8")(o.a,r.a,!1,a,"data-v-284906eb",null);s.options.__file="components/now.vue",e.a=s.exports},"3MF1":function(t,e,n){"use strict";var o=n("OApx"),r=n("AGG3"),i=!1;var a=function(t){i||n("D5R3")},s=n("VU/8")(o.a,r.a,!1,a,"data-v-f46bf560",null);s.options.__file="components/serverStatus.vue",e.a=s.exports},"42H9":function(t,e,n){"use strict";var o=n("/p0H");e.a={components:{now:o.a}}},"4KSW":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".title[data-v-2a183b29]{font-family:bold;display:block;font-size:6.5em;color:#000;letter-spacing:1px}.subtitle[data-v-2a183b29]{font-weight:300;font-size:2.5em;color:#666;word-spacing:5px;padding-bottom:30px}",""])},AGG3:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{attrs:{id:"beforeAxios"}},[t._v(t._s(t.status))]),n("p",{attrs:{id:"afterAxios"}},[t._v("now playing "+t._s(t.online)+"/"+t._s(t.max)+". "+t._s(t.players))])])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r},D5R3:function(t,e,n){var o=n("DtQR");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("0c31a308",o,!1,{sourceMap:!1})},DtQR:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"p[data-v-f46bf560]{margin-top:4px}.d-n[data-v-f46bf560]{display:none}",""])},Lmhy:function(t,e,n){"use strict";var o=n("TQvf"),r=n.n(o),i=n("3MF1");e.a={data:function(){return{Address:"0.tcp.ngrok.io",port:"18883",message:"please click to copy:"}},mounted:function(){var t=this;new r.a("#address").on("success",function(e){t.message="copied!",setTimeout(function(){t.message="please click to copy:"},2e3)})},components:{serverStatus:i.a}}},OApx:function(t,e,n){"use strict";var o=n("mtWM"),r=n.n(o);e.a={data:function(){return{status:"getting server status...",max:0,online:0,players:""}},mounted:function(){var t=this;document.getElementById("afterAxios").className="d-n",r.a.get("https://api.minetools.eu/ping/0.tcp.ngrok.io/18883").then(function(e){0==e.data.players.max&&(t.status="API Call Error...(AdBlock?)"),t.max=e.data.players.max,t.online=e.data.players.online,0!=t.online&&(t.players+="member: ",e.data.players.sample.forEach(function(n,o){0!=o&&(t.players+=", "),t.players+=e.data.players.sample[o].name})),document.getElementById("afterAxios").className="",document.getElementById("beforeAxios").className="d-n"}).catch(function(e){t.status="Server is closing now...",document.getElementById("afterAxios").className="",document.getElementById("beforeAxios").className="d-n"})}}},TQvf:function(t,e,n){var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var o,r,i,a;a=function(t,e){"use strict";var n,o=(n=e)&&n.__esModule?n:{default:n};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a},r=[t,n(7)],void 0===(i="function"==typeof(o=a)?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(6),r=n(5);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i,a;a=function(t,e,n,o){"use strict";var r=s(e),i=s(n),a=s(o);function s(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),l(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return f("action",t)}},{key:"defaultTarget",value:function(t){var e=f("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return f("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function f(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=u},r=[t,n(0),n(2),n(1)],void 0===(i="function"==typeof(o=a)?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){var o=n(4);function r(t,e,n,r,i){var a=function(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,o,i)}))}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}}])},t.exports=o()},fwGk:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("TSURAIMEU Server")]),e("h2",{staticClass:"subtitle"},[this._v("sK's minecraft server's infomations")]),e("now")],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r},hJwl:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'#info[data-v-284906eb]{color:#666}#address[data-v-284906eb]{font-size:1.5em;background-color:#111;color:#eee;height:1.5em;line-height:1.5em;padding-top:.25em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#address[data-v-284906eb]:before{content:"now Address: ";font-family:light,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;margin-right:.2em}',""])},mvAu:function(t,e,n){var o=n("hJwl");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("5f1c9e02",o,!1,{sourceMap:!1})},n1rD:function(t,e,n){var o=n("4KSW");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("7796245a",o,!1,{sourceMap:!1})},vQWW:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nowAddress"},[n("p",{attrs:{id:"info"}},[t._v(t._s(t.message))]),n("p",{attrs:{id:"address","data-clipboard-text":t.Address+":"+t.port}},[t._v(t._s(t.Address+":"+t.port))]),n("serverStatus")],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r}});