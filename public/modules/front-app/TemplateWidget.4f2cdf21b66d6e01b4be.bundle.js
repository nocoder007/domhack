(self.webpackChunk=self.webpackChunk||[]).push([[9515],{81352:function(e,t,n){"use strict";n.r(t),n.d(t,{TemplateLoader:function(){return p}});var r=n(92137),a=n(6610),o=n(5991),s=n(87757),i=n.n(s),c=n(38773),l=n(71743),u=n(85009),p=function(){function e(){(0,a.Z)(this,e),this.resource=new c.Z({route:"/ajax/templates"}),this.templatesCache=new l.Z(_.get(window.__altrp_settings__,"templates_data",{}))}var t,n;return(0,o.Z)(e,[{key:"loadTemplate",value:(n=(0,r.Z)(i().mark((function t(n){var r,a,o,s=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=s.length>1&&void 0!==s[1]&&s[1],a=r,n=Number(n)?Number(n):n,a||(a=!this.templatesCache.hasProperty(n)),"loading"!==_.get(e,"statuses.".concat(n))){t.next=6;break}return t.abrupt("return",new Promise((function(t,r){e.pendingCallbacks[n]=e.pendingCallbacks[n]||[],e.pendingCallbacks[n].push(t)})));case 6:if(e.statuses[n]="loading",t.prev=7,o=null,!a){t.next=16;break}return t.next=12,this.resource.get(n);case 12:o=t.sent,this.templatesCache.setProperty(n,o),t.next=17;break;case 16:o=this.templatesCache.getProperty(n);case 17:return _.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(o)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",o);case 23:return t.prev=23,t.t0=t.catch(7),_.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(null)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",null);case 29:case"end":return t.stop()}}),t,this,[[7,23]])}))),function(e){return n.apply(this,arguments)})},{key:"loadParsedTemplate",value:(t=(0,r.Z)(i().mark((function e(t){var n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],t){e.next=3;break}return e.abrupt("return",null);case 3:return t=Number(t)?Number(t):t,e.t0=_,e.next=7,this.loadTemplate(t,n);case 7:return e.t1=e.sent,r=e.t0.get.call(e.t0,e.t1,"data"),r=JSON.parse(r),e.abrupt("return",u.default.parseData(r));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"mbGetParsedTemplate",value:function(e){if(!this.templatesCache.hasProperty(e))return null;var t=_.get(this.templatesCache.getProperty(e),"data");return t=JSON.parse(t),u.default.parseData(t)}}]),e}();p.statuses={},p.pendingCallbacks={},window.templateLoader=new p,t.default=window.templateLoader},55022:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(6610),a=n(5991),o=n(63349),s=n(10379),i=n(46070),c=n(77608),l=n(96156),u=n(92137),p=n(87757),f=n.n(p),d=(n(81352),n(90234)),m=n(85009);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){(0,s.Z)(p,e);var t,n,o,l=(n=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(o){var r=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function p(e){var t;(0,r.Z)(this,p),t=l.call(this,e);var n=window.templateLoader.mbGetParsedTemplate(t.props.settings.template);return n&&(n=m.default.cloneElement(n)),t.state={template:n,templateGUID:t.props.settings.template},t.template=n,t}return(0,a.Z)(p,[{key:"componentDidMount",value:function(){this.updateTemplate()}},{key:"componentDidUpdate",value:function(){this.updateTemplate()}},{key:"updateTemplate",value:(t=(0,u.Z)(f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.props.settings.template)===this.state.templateGUID&&(this.state.template||this.loading)){e.next=13;break}if(t){e.next=6;break}return e.abrupt("return");case 6:return this.loading=!0,e.next=9,window.templateLoader.loadParsedTemplate(t);case 9:n=e.sent,this.loading=!1,this.template=null;case 12:this.setState((function(e){return y(y({},e),{},{template:n,templateGUID:t})}));case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){if(!this.props.settings.template)return null;if(_.get(this.state,"template.componentClass")){var e=this.template||m.default.cloneElement(this.state.template);return this.template=e,React.createElement("div",{className:"altrp-posts"},React.createElement("div",{className:"altrp-post"},React.createElement(e.componentClass,{element:e,ElementWrapper:d.default,children:e.children})))}return null}}]),p}(Component);var v=function(e){(0,s.Z)(u,e);var t,n,l=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),(t=l.call(this,e)).state={templateGUID:t.props.element.getSettings("template")},window.elementDecorator&&window.elementDecorator((0,o.Z)(t)),e.baseRender&&(t.render=e.baseRender((0,o.Z)(t))),t}return(0,a.Z)(u,[{key:"render",value:function(){return React.createElement(b,{settings:this.props.element.getSettings()||{}})}}]),u}(Component)},85009:function(e,t,n){"use strict";n.r(t);var r=n(96156),a=n(6610),o=n(5991),s=n(67576);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"parseData",value:function(e,t,n,r){var a=[],o=new s.default(e);if(n&&o.addModelInfo({modelName:"page",modelId:n}),_.isArray(r)){var i,u=l(r);try{for(u.s();!(i=u.n()).done;){var p=i.value;o.addModelInfo(c({},p))}}catch(e){u.e(e)}finally{u.f()}}if(e.children&&e.children.length){var f,d=l(e.children);try{for(d.s();!(f=d.n()).done;){var m=f.value;window.frontElementsManager.checkElementExists(m.name)&&a.push(this.parseData(m,o))}}catch(e){d.e(e)}finally{d.f()}}return o.id=e.id,o.lastElement=e.lastElement,o.children=a,o.settings=e.settings,o.name=e.name,o.type=e.type,o.dynamicContentSettings=e.dynamicContentSettings,t&&o.setParent(t),o.update(),o}},{key:"cloneElement",value:function(e){if(!e)return null;var t=_.cloneDeep(e);return this.updateParents(t),t}},{key:"updateParents",value:function(e){var t=this;_.isArray(e.children)&&e.children.forEach((function(n){n.setParent(e),t.updateParents(n)}))}}]),e}();window.frontElementsFabric=new p,t.default=window.frontElementsFabric}}]);
//# sourceMappingURL=TemplateWidget.4f2cdf21b66d6e01b4be.bundle.js.map