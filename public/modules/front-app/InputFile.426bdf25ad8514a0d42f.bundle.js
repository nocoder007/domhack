(self.webpackChunk=self.webpackChunk||[]).push([[4233],{63349:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},96156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},77608:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,{Z:function(){return n}})},10379:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(14665);function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,n.Z)(e,t)}},46070:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(90484),a=r(63349);function o(e,t){return!t||"object"!==(0,n.Z)(t)&&"function"!=typeof t?(0,a.Z)(e):t}},14665:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return n}})},90484:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return n}})},12270:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(22122),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(96156),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(92137),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5991),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(63349),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77608),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(87757),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_front_app_src_js_classes_AltrpFile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(91072),_front_app_src_js_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(48379);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(e);if(t){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(this,r)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var _window$altrpHelpers=window.altrpHelpers,isEditor=_window$altrpHelpers.isEditor,parseOptionsFromSettings=_window$altrpHelpers.parseOptionsFromSettings,replaceContentWithData=_window$altrpHelpers.replaceContentWithData,getDataFromLocalStorage=_window$altrpHelpers.getDataFromLocalStorage,FileInput=window.altrpLibs.Blueprint.FileInput;(window.globalDefaults=window.globalDefaults||[]).push("\n.altrp-widget_input-file .bp3-file-upload-input::after{\n  width: auto;\n  min-width: 0;\n}\n.bp3-file-input_preview.bp3-file-input_preview{\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  width: 100px;\n  height: 100px;\n}\n");var InputFileWidget=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(InputFileWidget,_Component);var _super=_createSuper(InputFileWidget),_componentDidUpdate2,_componentDidMount2;function InputFileWidget(e){var t;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(this,InputFileWidget),(t=_super.call(this,e)).getValue=function(){var e=t.props.element.getFormId(),r=t.props.element.getFieldId();return isEditor()?t.state.value:_.get(appStore.getState(),"formsStore.".concat(e,".").concat(r),"")},t.onChange=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(r){var n,a,o,i;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{notActive:!0})})),n=t.state.filesStorage,e.prev=2,!_.isArray(n)){e.next=6;break}return e.next=6,Promise.all(n.map(function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(t){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteFileFromStorage();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:if(a=r.target.files,o=t.props.element.getResponsiveSetting("limit"),!t.props.element.getResponsiveSetting("multiple")){e.next=28;break}return i=_.map(a,(function(e,t){return new _front_app_src_js_classes_AltrpFile__WEBPACK_IMPORTED_MODULE_4__.Z(e)})),o&&(i=i.slice(0,o)),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{filesStorage:i})})),e.prev=17,e.next=20,Promise.all(i.map(function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(t){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.storeFile();case 2:return e.abrupt("return",e.sent.getProperty("media.id"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 20:i=e.sent,e.next=26;break;case 23:e.prev=23,e.t1=e.catch(17),console.error(e.t1);case 26:e.next=39;break;case 28:return i=new _front_app_src_js_classes_AltrpFile__WEBPACK_IMPORTED_MODULE_4__.Z(a[0]),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{filesStorage:[i]})})),e.prev=30,e.next=33,i.storeFile();case 33:i=e.sent.getProperty("media.id"),e.next=39;break;case 36:e.prev=36,e.t2=e.catch(30),console.error(e.t2);case 39:isEditor()?t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:i})})):t.dispatchFieldValueToStore(i,!0),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{key:Math.random()})}));try{_.forEach(a,(function(e,r){if(!(o&&r>=o)){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.setState((function(e){return e["imageUrls_".concat(r)]=n.result,_objectSpread({},e)}))}}}))}catch(e){console.error(e)}t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{notActive:!1})}));case 43:case"end":return e.stop()}}),e,null,[[2,8],[17,23],[30,36]])})));return function(t){return e.apply(this,arguments)}}(),t.dispatchFieldValueToStore=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(r){var n,a,o,i,s,p=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]&&p[1],a=t.props.element.getFormId(),-1!==(o=t.props.element.getFieldId()).indexOf("{{")&&(o=replaceContentWithData(o)),!(_.isObject(t.props.appStore)&&o&&a)){e.next=14;break}if(t.props.appStore.dispatch((0,_front_app_src_js_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_8__.Az)(o,r,a,n)),!n){e.next=14;break}if(!(i=t.props.element.getSettings("change_actions"))||isEditor()){e.next=14;break}return e.next=11,Promise.all([__webpack_require__.e(4079),__webpack_require__.e(6593),__webpack_require__.e(2167),__webpack_require__.e(6737)]).then(__webpack_require__.bind(__webpack_require__,2167));case 11:return s=e.sent.default,e.next=14,s.callAllWidgetActions(t.props.element.getIdForAction(),"change",i,t.props.element);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.element.component=(0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__.Z)(t),window.elementDecorator&&window.elementDecorator((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__.Z)(t)),t.wrapperRef=React.createRef(),t.defaultValue=t.getContent("content_default_value"),t.state={settings:_objectSpread({},e.element.getSettings()),value:t.defaultValue,imageUrls_0:_.get(e.element.getResponsiveSetting("preview_placeholder"),"url")},t.altrpSelectRef=React.createRef(),t.getContent("content_default_value")&&t.dispatchFieldValueToStore(t.defaultValue),t}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.Z)(InputFileWidget,[{key:"clearValue",value:function(){this.onChange(null),this.dispatchFieldValueToStore(null,!0)}},{key:"_componentDidMount",value:(_componentDidMount2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(t,r){var n,a,o=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.element.getSettings("content_options")&&(n=parseOptionsFromSettings(this.props.element.getSettings("content_options")),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{options:n})}))),a=this.state.value,_.get(a,"dynamic")&&this.props.currentModel.getProperty("altrpModelUpdated")&&(a=this.getContent("content_default_value")),!t||t.currentModel.getProperty("altrpModelUpdated")||!this.props.currentModel.getProperty("altrpModelUpdated")){e.next=7;break}return a=this.getContent("content_default_value"),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a,contentLoaded:!0})}),(function(){o.dispatchFieldValueToStore(a)})),e.abrupt("return");case 7:if(!this.props.currentModel.getProperty("altrpModelUpdated")||!this.props.currentDataStorage.getProperty("currentDataStorageLoaded")||this.state.contentLoaded){e.next=11;break}return a=this.getContent("content_default_value"),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a,contentLoaded:!0})}),(function(){o.dispatchFieldValueToStore(a)})),e.abrupt("return");case 11:this.state.value!==a&&this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a})}),(function(){o.dispatchFieldValueToStore(a)}));case 12:case"end":return e.stop()}}),e,this)}))),function(e,t){return _componentDidMount2.apply(this,arguments)})},{key:"_componentDidUpdate",value:(_componentDidUpdate2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(t,r){var n,a,o,i,s,p=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.settings,a=n.content_options,o=n.model_for_options,this.getValue()||this.state.imageUrls_0===_.get(this.props.element.getResponsiveSetting("preview_placeholder"),"url")||this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{imageUrls_0:_.get(p.props.element.getResponsiveSetting("preview_placeholder"),"url")})})),t&&!t.currentDataStorage.getProperty("currentDataStorageLoaded")&&this.props.currentDataStorage.getProperty("currentDataStorageLoaded")&&(i=this.getContent("content_default_value",this.props.element.getSettings("select2_multiple")),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:i,contentLoaded:!0})}),(function(){p.dispatchFieldValueToStore(i)}))),!_.isEqual(this.props.currentModel,t.currentModel)&&this.state.value&&this.state.value.dynamic&&this.dispatchFieldValueToStore(this.getContent("content_default_value")),a&&!o&&(s=parseOptionsFromSettings(a),_.isEqual(s,this.state.options)||this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{options:s})}))),this.updateValue(t);case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return _componentDidUpdate2.apply(this,arguments)})},{key:"updateValue",value:function updateValue(prevProps){var _this4=this;if(!isEditor()){var content_calculation=this.props.element.getSettings("content_calculation"),altrpforms=this.props.formsStore,fieldName=this.props.element.getFieldId(),formId=this.props.element.getFormId();if(content_calculation){var prevContext={},altrpdata=this.props.currentDataStorage.getData(),altrpmodel=this.props.currentModel.getData(),altrpuser=this.props.currentUser.getData(),altrppagestate=this.props.altrpPageState.getData(),altrpresponses=this.props.altrpresponses.getData(),altrpmeta=this.props.altrpMeta.getData(),context=this.props.element.getCurrentModel().getData();if(-1!==content_calculation.indexOf("altrpdata")&&(context.altrpdata=altrpdata,altrpdata.currentDataStorageLoaded?prevContext.altrpdata=prevProps.currentDataStorage.getData():prevContext.altrpdata=altrpdata),-1!==content_calculation.indexOf("altrpforms")&&(context.altrpforms=altrpforms,"".concat(formId,".").concat(fieldName)===altrpforms.changedField?prevContext.altrpforms=altrpforms:prevContext.altrpforms=prevProps.formsStore),-1!==content_calculation.indexOf("altrpmodel")&&(context.altrpmodel=altrpmodel,prevContext.altrpmodel=prevProps.currentModel.getData()),-1!==content_calculation.indexOf("altrpuser")&&(context.altrpuser=altrpuser,prevContext.altrpuser=prevProps.currentUser.getData()),-1!==content_calculation.indexOf("altrpuser")&&(context.altrpuser=altrpuser,prevContext.altrpuser=prevProps.currentUser.getData()),-1!==content_calculation.indexOf("altrppagestate")&&(context.altrppagestate=altrppagestate,prevContext.altrppagestate=prevProps.altrpPageState.getData()),-1!==content_calculation.indexOf("altrpmeta")&&(context.altrpmeta=altrpmeta,prevContext.altrpmeta=prevProps.altrpMeta.getData()),-1!==content_calculation.indexOf("altrpresponses")&&(context.altrpresponses=altrpresponses,prevContext.altrpresponses=prevProps.altrpresponses.getData()),-1!==content_calculation.indexOf("altrpstorage")&&(context.altrpstorage=getDataFromLocalStorage("altrpstorage",{})),!(_.isEqual(prevProps.currentDataStorage,this.props.currentDataStorage)&&_.isEqual(prevProps.currentUser,this.props.currentUser)&&_.isEqual(prevProps.formsStore,this.props.formsStore)&&_.isEqual(prevProps.altrpPageState,this.props.altrpPageState)&&_.isEqual(prevProps.altrpMeta,this.props.altrpMeta)&&_.isEqual(prevProps.altrpresponses,this.props.altrpresponses)&&_.isEqual(prevProps.currentModel,this.props.currentModel))&&(_.isEqual(prevProps.formsStore,this.props.formsStore)||"".concat(formId,".").concat(fieldName)!==altrpforms.changedField)){var value="";try{if(content_calculation=content_calculation.replace(/}}/g,"')").replace(/{{/g,"_.get(context, '"),value=eval(content_calculation),value===this.state.value)return;this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:value})}),(function(){_this4.dispatchFieldValueToStore(value)}))}catch(e){console.error("Evaluate error in Input: '"+e.message+"'",this.props.element.getId())}}}else{var path="".concat(formId,".").concat(fieldName);this.props.formsStore!==prevProps.formsStore&&_.get(altrpforms,path)!==this.state.value&&this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:_.get(altrpforms,path)})}))}}}},{key:"getName",value:function(){return"".concat(this.props.element.getFormId(),"[").concat(this.props.element.getFieldId(),"]")}},{key:"render",value:function(){var e,t=this.props.element,r=t.getResponsiveSetting("readonly"),n={name:this.getName(),accept:t.getResponsiveSetting("accept"),multiple:t.getResponsiveSetting("multiple")},a=this.state,o=a.filesStorage,i=a.notActive;e=_.isArray(o)?o.map((function(e){return e.getFileName()})).join(", "):o instanceof _front_app_src_js_classes_AltrpFile__WEBPACK_IMPORTED_MODULE_4__.Z?o.getFileName():replaceContentWithData(t.getResponsiveSetting("placeholder"),t.getCurrentModel().getData());var s={disabled:r,key:this.state.key,inputProps:n,text:e,className:"".concat(i?"pointer-event-none":""),buttonText:replaceContentWithData(t.getResponsiveSetting("button_text"),t.getCurrentModel().getData()),onInputChange:this.onChange};return t.getResponsiveSetting("preview")&&(s.style={backgroundImage:"url(".concat(this.state.imageUrls_0,")"),pointerEvents:i?"none":""},s.className="bp3-file-input_preview"),React.createElement(FileInput,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11__.Z)({},s,{ref:this.wrapperRef}))}}]),InputFileWidget}(Component);__webpack_exports__.default=InputFileWidget},91072:function(e,t,r){"use strict";var n=r(92137),a=r(6610),o=r(5991),_=r(10379),i=r(46070),s=r(77608),p=r(87757),l=r.n(p);var c=function(e){(0,_.Z)(f,e);var t,r,p,c,u=(p=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,s.Z)(p);if(c){var r=(0,s.Z)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;if((0,a.Z)(this,f),e instanceof File&&(e={file:e}),!e.file instanceof File)throw new Error("Need a File instance in AltrpFile Constructor");if(t=u.call(this,e),e.file.type.indexOf("image")>=0){var r=new FileReader;r.onload=function(){t.setProperty("dataAsUrl",r.result)},r.readAsDataURL(e.file)}return t}return(0,o.Z)(f,[{key:"storeFile",value:(r=(0,n.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getResource().postFiles([this.getFile()]);case 3:t=e.sent,this.setProperty("media",t[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.abrupt("return",this);case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return r.apply(this,arguments)})},{key:"deleteFileFromStorage",value:(t=(0,n.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getProperty("media.id")){e.next=3;break}return e.abrupt("return",this);case 3:return e.prev=3,e.next=6,f.getResource().delete(t);case 6:e.sent,this.setProperty("media",null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:return e.abrupt("return",this);case 14:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"getFile",value:function(){return this.getProperty("file")}},{key:"getFileName",value:function(){var e;return(null===(e=this.getFile())||void 0===e?void 0:e.name)||""}},{key:"toString",value:function(){return this.getFileName()}}],[{key:"getResource",value:function(){return f.resource||(f.resource=new window.altrpHelpers.Resource({route:"/ajax/media"})),f.resource}}]),f}(AltrpModel);t.Z=c},48379:function(e,t,r){"use strict";r.d(t,{sc:function(){return n},Yw:function(){return a},Az:function(){return o}});var n="CHANGE_FORM_FIELD_VALUE",a="CHANGE_FORM_FIELD_VALUE";function o(e,t,r,a){return{type:n,fieldName:e,value:t,formId:r,changedField:a?"".concat(r,".").concat(e):null}}}}]);
//# sourceMappingURL=InputFile.426bdf25ad8514a0d42f.bundle.js.map