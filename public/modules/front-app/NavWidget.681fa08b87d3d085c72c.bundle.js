(self.webpackChunk=self.webpackChunk||[]).push([[7396],{41788:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(14665);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}},32465:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},1866:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r,o,a,i=n(96156),s=n(6610),l=n(5991),c=n(10379),u=n(46070),p=n(77608),d=n(22122),m=n(32465),h=n(71893),f="#eee",v=h.ZP.span(o||(o=(0,m.Z)(["\n  animation: "," 1.2s ease-in-out infinite;\n  background-color: ",";\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(90deg, ",");\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n"])),(function(e,t){return(0,h.F4)(r||(r=(0,m.Z)(["\n  0% {\n    background-position: -200px 0;\n  }\n  ","\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"])),t>0?"".concat(Math.floor(1/(e+t)*e*100),"% {\n    background-position: calc(200px + 100%) 0;\n  }"):void 0)}),(function(e){var t=e.color;return"".concat(t||f)}),(function(e){var t=e.highlightColor,n=e.color;return"".concat(n||f,", ").concat(t||"#f5f5f5",", ").concat(n||f)})),g=function(e){return React.createElement("div",{className:e.className},React.createElement(v,(0,d.Z)({},e,{className:"altrp-skeleton__span"})))},w=n(76593),y=h.ZP.div(a||(a=(0,m.Z)(["& {\n  position: relative;\n  max-width: 100%;\n  overflow: hidden;\n  width:",";\n","\n\n  background-color: ",";\n}\n&::before{\n  display: block;\n  content: '';\n  width: 100%;\n",";\n}\n&& .altrp-skeleton,\n&& .altrp-image{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  height:100%;\n  width:100%;\n}\n"])),(function(e){return _.isNumber(e.width)?e.width+"px":e.width?e.width:"100%"}),(function(e){var t=e.settings,n=(0,w.getResponsiveSetting)(t,"aspect_ratio_size");return 0!==Number(n)&&"custom"===n||Number(n)?"height:auto;":e.height&&-1===e.height.indexOf("%")?"height:".concat(e.height?e.height:"auto",";"):"height:auto;"}),(function(e){return e.color?e.color:"#fff"}),(function(e){var t=e.settings,n=e.height,r="",o=(0,w.getResponsiveSetting)(t,"aspect_ratio_size");if(0!==Number(o)){if("custom"===o){var a=(0,w.getResponsiveSetting)(t,"custom_aspect");a=Number(a)||100,r+="padding-top:".concat(a,"%;")}else Number(o)&&(r+="padding-top:".concat(o,"%;"));return r}return n&&_.isString(n)&&-1===n.indexOf("%")||Number(e.mediaWidth)&&Number(e.mediaHeight)&&(r+="padding-top:".concat(e.mediaHeight/e.mediaWidth*100,"%;")),r})),b=n(29459);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=window.altrpHelpers,E=Z.isEditor,S=Z.isSSR,O=Z.renderAsset,N=function(e){(0,c.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,p.Z)(t);if(n){var o=(0,p.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function o(e){var t,n,a;(0,s.Z)(this,o),(a=r.call(this,e)).imageRef=React.createRef();var i=!0;return(!S()||null!==(t=e.element)&&void 0!==t&&t.getResponsiveSetting("lazyload_disable"))&&(E()||!1===e.lazy||!window.altrpImageLazy||"none"===window.altrpImageLazy||!e.element||null!==(n=e.element)&&void 0!==n&&n.getResponsiveSetting("lazyload_disable"))||(i=!1),a.state={visible:i,update:0},a.timeoutId=setTimeout((function(){return a.setState((function(e){return R(R({},e),{},{update:e.update++})}))}),500),a}return(0,l.Z)(o,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"componentDidUpdate",value:function(e,t){var n,r,o;if(this.state.visible&&clearTimeout(this.timeoutId),!this.state.visible&&this.imageRef.current&&(null!==(n=this.props)&&void 0!==n&&null!==(r=n.element)&&void 0!==r&&null!==(o=r.getRoot())&&void 0!==o&&o.popupGUID&&this.props.element.getRoot().popupGUID===this.props.popupTrigger.popupID&&this.setState((function(e){return R(R({},e),{},{visible:!0})})),e.scrollPosition!==this.props.scrollPosition||t.update!==this.state.update)){var a=window.mainScrollbars;a||(a=document.querySelector(".front-app-content")),a||(a=document.querySelector(".front-app")),this.imageRef.current&&(0,b.nX)(this.imageRef.current,a)&&(clearTimeout(this.timeoutId),this.setState((function(e){return R(R({},e),{},{visible:!0})})))}}},{key:"render",value:function(){var e,t=R({},this.props.image),n=this.state.visible,r=this.props.noDefault||!1,o={},a=this.props.width,i=this.props.height;if(!S()&&this.props.image instanceof File)t=this.props.image;else if(this.props.default)0===Object.keys(t).length&&(t=this.props.default);else{if(r)return"";t.url=t.url||"/img/nullImage.png",t.name=t.name||"null",t.assetType=t.assetType||void 0}var s=O(t);(n||"skeleton"===window.altrpImageLazy)&&(o.background="transparent");var l=React.createElement(y,{color:t.main_color,className:"altrp-image-placeholder ",ref:this.imageRef,settings:(null===(e=this.props.element)||void 0===e?void 0:e.getSettings())||{},height:i,width:a,style:o,mediaWidth:t.width||100,mediaHeight:t.height||75},"skeleton"===window.altrpImageLazy&&!n&&React.createElement(g,{className:"altrp-skeleton",color:window.altrpSkeletonColor,highlightColor:window.altrpSkeletonHighlightColor}),n&&React.cloneElement(s,{className:this.props.className,id:this.props.id||null,style:this.props.style}));return React.createElement(React.Fragment,null,l)}}]),o}(Component),I=E()?N:window.reactRedux.connect((function(e){return{scrollPosition:e.scrollPosition,popupTrigger:e.popupTrigger}}))(N)},69764:function(e,t,n){"use strict";var r=n(6610),o=n(5991),a=n(10379),i=n(46070),s=n(77608),l=n(12519),c=n(76593),u=n(67294);var p=function(e){(0,a.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function d(){return(0,r.Z)(this,d),p.apply(this,arguments)}return(0,o.Z)(d,[{key:"render",value:function(){var e=this.props,t=e.defaultChildren,n=e.link,r=e.modelId,o=e.modelData,a=e.children,i=e.className,s=u.cloneElement(t,{},a);if(n){var p={rel:n.noFollow?"nofollow":null,href:n.url,dangerouslySetInnerHTMLCondition:!1,className:i};p.tag=n.tag||"a",n.openInNew&&(p.target="_black"),"Link"!==n.tag||(0,c.isEditor)()||(p.to=n.url.replace(":id",r||""),p.href=n.url.replace(":id",r||"")),_.isObject(this.props.modelData)&&(p.to=(0,c.parseURLTemplate)(n.url,o),p.href=(0,c.parseURLTemplate)(n.url,o)),s=u.createElement(l.Z,p,a)}return s}}]),d}(u.Component);t.Z=p},98927:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(6610),o=n(5991),a=n(63349),i=n(10379),s=n(46070),l=n(77608),c=n(96156),u=n(92137),p=n(87757),d=n.n(p),m=n(67294),h=n(1866),f=(n(12519),n(69764));var v=function(e){(0,i.Z)(u,e);var t,n,c=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),(t=c.call(this,e)).state={show:!1,list:[]},t.changeShow=t.changeShow.bind((0,a.Z)(t)),t.setList=t.setList.bind((0,a.Z)(t)),t}return(0,o.Z)(u,[{key:"setList",value:function(){var e=this,t=[];this.props.li.children&&this.props.list.forEach((function(n){e.props.li.children.forEach((function(e){n.id===e&&t.push(n)}))})),this.setState({list:t})}},{key:"componentDidMount",value:function(){this.setList()}},{key:"componentDidUpdate",value:function(e,t){e.list!==this.props.list&&this.setList()}},{key:"changeShow",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"render",value:function(){var e=this;return m.createElement("div",{className:"altrp-nav-menu-dropdown-sub"},m.createElement("div",{className:"altrp-nav-menu-li-link-dropdown altrp-nav-menu-dropdown-sub-label",onClick:this.changeShow},m.createElement("span",null,this.props.li.label_repeater_menu_layout),m.createElement(h.Z,{image:this.props.settings.chevron_dropdown_menu_section,element:this.props.element,default:{assetType:"icon",name:"chevron",iconComponent:iconsManager.renderIcon("chevron")},className:"altrp-nav-menu-li-link-chevron-dropdown"+(this.state.show?" altrp-nav-menu-li-link-active-chevron-dropdown":"")})),m.createElement("div",{className:"altrp-nav-menu-dropdown-sub-content altrp-nav-menu-ul-wrapper-dropdown altrp-nav-menu-dropdown-content"+(this.state.show?" altrp-nav-menu-dropdown-content-show":" altrp-nav-menu-dropdown-content-hide")},m.createElement("ul",{className:"altrp-nav-menu-ul-dropdown"},this.state.list.map((function(t,n){var r=m.createElement(f.Z,{defaultChildren:m.createElement("div",{className:"altrp-nav-menu-li-link-dropdown altrp-nav-menu-li-link-label-dropdown"}),modelData:e.props.modelData,modelId:e.props.modelId||null,link:t.link_repeater_menu_layout,className:"altrp-nav-menu-li-link-dropdown altrp-nav-menu-li-link-label-dropdown"},t.label_repeater_menu_layout);return m.createElement("li",{className:"altrp-nav-menu-li-dropdown",key:n},t.id_repeater_menu_layout?m.createElement(u,{settings:e.props.settings,divider:!1,list:e.props.list,li:t}):m.createElement(m.Fragment,null,r,e.props.settings.divider_switch_dropdown_menu_section?m.createElement("div",{className:"altrp-nav-menu-dropdown-s-content-divider"}):""))})))))}}]),u}(m.Component);var g=function(e){(0,i.Z)(u,e);var t,n,c=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),(t=c.call(this,e)).state={show:!1,list:[]},t.changeShow=t.changeShow.bind((0,a.Z)(t)),t.setStateList=t.setStateList.bind((0,a.Z)(t)),t}return(0,o.Z)(u,[{key:"changeShow",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"componentDidMount",value:function(){this.setStateList()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.settings.repeater_menu_layout;t.list!==n&&this.setStateList()}},{key:"setStateList",value:function(){var e=this.props.settings.repeater_menu_layout;e.forEach((function(t){if(t.id_repeater_menu_layout){var n=[];e.forEach((function(r){if(t.id!==r.id&&r.parent_id_repeater_menu_layout&&r.parent_id_repeater_menu_layout===t.id_repeater_menu_layout){var o=e.findIndex((function(e){return e.id==r.id}));e[o]&&(e[o].childrenParent=!0),n.push(r.id)}}));var r=t.id_repeater_menu_layout,o=e.findIndex((function(e){return e.id_repeater_menu_layout==r}));e[o]&&(e[o].children=n)}})),this.setState({list:e})}},{key:"render",value:function(){var e,t,n=this,r=this.state.list,o="altrp-nav-menu-dropdown";switch(this.props.settings.align_dropdown_menu_layout){case"left":o+=" altrp-nav-menu-dropdown-left";break;case"center":o+=" altrp-nav-menu-dropdown-center";break;case"right":o+=" altrp-nav-menu-dropdown-right"}var a=null===(e=this.props.element)||void 0===e?void 0:e.getResponsiveSetting("icon_dropdown_menu_layout"),i=null===(t=this.props.element)||void 0===t?void 0:t.getResponsiveSetting("icon_dropdown_menu_layout"),s=m.createElement(h.Z,{image:a,element:this.props.element,default:{name:"in_width",assetType:"icon",iconComponent:iconsManager.renderIcon("in_width")},className:"altrp-nav-menu-dropdown-button-icon"});return this.state.show&&i&&(s=m.createElement(h.Z,{image:i,element:this.props.element,default:{name:"add",assetType:"icon",iconComponent:iconsManager.renderIcon("add")},className:"altrp-nav-menu-dropdown-button-icon altrp-nav-menu-dropdown-button-icon-close"})),m.createElement("div",{className:o},m.createElement("div",{className:"altrp-nav-menu-dropdown-wrapper"},m.createElement("div",{className:"altrp-nav-menu-dropdown-button",onClick:this.changeShow},s)),m.createElement("div",{className:"altrp-nav-menu-ul-wrapper-dropdown altrp-nav-menu-dropdown-content"+(this.state.show?" altrp-nav-menu-dropdown-content-show":"")},m.createElement("ul",{className:"altrp-nav-menu-ul-dropdown"},r.map((function(e,t){var r=m.createElement(f.Z,{defaultChildren:m.createElement("div",{className:"altrp-nav-menu-li-link-dropdown altrp-nav-menu-li-link-label-dropdown"}),modelData:n.props.modelData,modelId:n.props.modelId||null,link:e.link_repeater_menu_layout,className:"altrp-nav-menu-li-link-dropdown altrp-nav-menu-li-link-label-dropdown"},e.label_repeater_menu_layout);return e.id_repeater_menu_layout?null!=e&&e.childrenParent?"":m.createElement("li",{className:"altrp-nav-menu-li-dropdown altrp-nav-menu-li-sub",key:t},m.createElement(v,{settings:n.props.settings,list:n.state.list,li:e,modelData:n.props.modelData,modelId:n.props.modelId})):null!=e&&e.childrenParent?"":m.createElement("li",{className:"altrp-nav-menu-li-dropdown",key:t},r,n.props.settings.divider_switch_dropdown_menu_section?m.createElement("div",{className:"altrp-nav-menu-dropdown-s-content-divider"}):"")})))))}}]),u}(m.Component),w=n(76593);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.e(5690).then(n.bind(n,55690));var _=function(e){(0,i.Z)(f,e);var t,c,p,h=(c=f,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,l.Z)(c);if(p){var n=(0,l.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),(t=h.call(this,e)).state={settings:e.element.getSettings()},e.element.component=(0,a.Z)(t),window.elementDecorator&&window.elementDecorator((0,a.Z)(t)),t}return(0,o.Z)(f,[{key:"_componentDidMount",value:(t=(0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5718).then(n.bind(n,93676));case 2:t=e.sent.default,this.setState((function(e){return b(b({},e),{},{HorizontalVerticalMenu:t})}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=m.createElement("div",null,(0,w.isEditor)()?"create menu":""),t=this.state.settings.menu_layout,n={},r=this.state.settings.breakpoint_dropdown_menu_layout;switch(r){case"never":n={type:"never",size:0};break;case"mobile":n={type:"mobile",size:768};break;case"tablet":n={type:"tablet",size:1025}}if("never"!==r){var o=document.body.offsetWidth;(0,w.isEditor)()&&(o=document.getElementById("editorWindow").offsetWidth),o<=n.size&&(t="dropdown")}return this.state.settings.repeater_menu_layout&&this.state.HorizontalVerticalMenu&&(e="dropdown"!==t?m.createElement(this.state.HorizontalVerticalMenu,{modelId:this.props.modelId,currentScreen:this.props.currentScreen,modelData:this.props.modelData,settings:this.props.element.getSettings(),element:this.props.element,idElement:this.props.element.getId()}):m.createElement(g,{modelId:this.props.modelId,modelData:this.props.modelData,settings:this.state.settings,idElement:this.props.element.getId()})),m.createElement("div",{className:"altrp-nav-menu"},e)}}]),f}(m.Component),k=n(5977);n.e(6981).then(n.bind(n,16981));var R=function(e){(0,i.Z)(c,e);var t,n,a=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function c(e){return(0,r.Z)(this,c),a.call(this,e)}return(0,o.Z)(c,[{key:"render",value:function(){var e=[],t=(0,w.isEditor)()?[{title:"this",id:1,path:"/thisSiteIsWonderful",parent_page_id:null},{title:"site",id:2,path:"/thisSiteIsWonderful",parent_page_id:1},{title:"is",id:3,path:"/thisSiteIsWonderful",parent_page_id:2},{title:"wonderful",id:4,path:"/thisSiteIsWonderful",parent_page_id:3}]:appStore.getState().appRoutes.routes,n=(0,w.isEditor)()?4:window.currentPageId;if(n!==t[0].id){var r=0;t.forEach((function(e,t){n===e.id&&(r=t)}));var o=[];o.push(t[r]),t[r].parent_page_id&&function e(n){t.forEach((function(t){t.id===n&&(o.push(t),t.parent_page_id&&e(t.parent_page_id))}))}(t[r].parent_page_id),e=o.reverse()}else e.push(t[0]);var a=this.props.element.getContent("breadcrumbs_type_separator","default"),i="altrp-nav-breadcrumbs-separator",s="-";switch(a){case"text":var l=this.props.element.getContent("breadcrumbs_separator_text",">");i+=" altrp-nav-breadcrumbs-separator-text",s=l;break;case"icon":var c=this.props.element.getContent("breadcrumbs_separator_icon",{});i+=" altrp-nav-breadcrumbs-separator-icon",s=React.createElement(h.Z,{image:c,element:this.props.element,default:{assetType:"icon",name:"star",iconComponent:iconsManager.renderIcon("star")}});break;default:i+=" altrp-nav-breadcrumbs-separator-default"}return React.createElement("ul",{className:"altrp-nav-breadcrumbs"},e.map((function(t,r){var o=t.path,a=t.title;return a=(0,w.replaceContentWithData)(a),React.createElement("li",{className:"altrp-nav-breadcrumbs-li",key:r},t.id!==n?React.createElement(window.Link,{to:o,onClick:(0,w.isEditor)()?function(e){return e.preventDefault()}:null,className:"altrp-nav-breadcrumbs-label altrp-nav-breadcrumbs-link"},a):React.createElement("div",{className:"altrp-nav-breadcrumbs-label altrp-nav-breadcrumbs-current"},a),r!==e.length-1?React.createElement("span",{className:i},s):"")})))}}]),c}(Component),Z=window["h-altrp"]?R:(0,k.EN)(R);var E=function(e){(0,i.Z)(u,e);var t,n,c=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),(t=c.call(this,e)).state={settings:e.element.getSettings()},e.element.component=(0,a.Z)(t),window.elementDecorator&&window.elementDecorator((0,a.Z)(t)),e.baseRender&&(t.render=e.baseRender((0,a.Z)(t))),t}return(0,o.Z)(u,[{key:"render",value:function(){var e,t=this.props.element.hasCardModel()?this.props.element.getCardModel().getData():this.props.currentModel.getData();switch(this.props.element.getContent("type_type","menu")){case"menu":e=React.createElement(_,{modelData:t,currentScreen:this.props.currentScreen,modelId:this.getModelId(),element:this.props.element});break;case"breadCrumbs":e=React.createElement(Z,{element:this.props.element})}return e||""}}]),u}(Component)}}]);
//# sourceMappingURL=NavWidget.681fa08b87d3d085c72c.bundle.js.map