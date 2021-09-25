(self.webpackChunk=self.webpackChunk||[]).push([[7364],{71743:function(e,t,n){"use strict";var r=n(6610),a=n(5991),_=n(83465),l=n.n(_),i=n(29208),s=n.n(i),o=n(31468),p=n.n(o),c=n(38394),u=n.n(c),d=n(96633),f=n.n(d),b=n(99245),g=n.n(b),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,r.Z)(this,e),this.data=l()(t)}return(0,a.Z)(e,[{key:"getData",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?l()(this.data):this.data}},{key:"isEmpty",value:function(){return g()(this.data)}},{key:"getProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s()(this.data,e,t)}},{key:"hasProperty",value:function(e){return u()(this.data,e)}},{key:"setProperty",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n instanceof e&&(n=n.getData(!1)),p()(this.data,t,n)}},{key:"unsetProperty",value:function(e){return f()(this.data,e)}}]),e}();window.AltrpModel=h,t.Z=h},2056:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(85061),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(96156),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(92137),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(5991),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(63349),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77608),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(32465),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87757),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(76593),_classes_Resource__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38773),_front_app_src_js_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(48379),_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(71743),_templateObject;function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(e);if(t){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(this,n)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var moment=window.altrpHelpers.moment;(window.globalDefaults=window.globalDefaults||[]).push('\n\n.altrp-field {\n  border-style: solid;\n  width: 100%;\n}\n.altrp-field-file{\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.altrp-label-icon svg,\n.altrp-label-icon img {\n  width: 20px;\n}\n.altrp-label-icon svg{\n  height: 20px;\n}\n.altrp-field-file__field{\n  display: none;\n}\n.altrp-field-file__placeholder{\n  display: none;\n}\n.altrp-field-file_empty .altrp-field-file__placeholder{\n  display: block;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  background-color: rgb(52,59,76);\n  color: #fff;\n}\n.input-clear-btn {\n  background: transparent;\n  padding: 0;\n  position: absolute;\n  bottom: calc(50% - 7px);\n  right: 15px;\n  display: none;\n}\n.input-clear-btn:hover {\n  font-weight: bold;\n}\n.altrp-field:hover + .input-clear-btn, .input-clear-btn:hover {\n  display: block;\n}\n.altrp-input-wrapper, .altrp-field-select2 {\n  position: relative;\n  flex-grow: 1;\n}\n.altrp-field-label--required::after {\n  content: "*";\n  color: red;\n  font-size: inherit;\n  padding-left: 10px;\n}\n.altrp-field-label {\n  font-size: 16px;\n  font-family: "Open Sans";\n  line-height: 1.5;\n  letter-spacing: 0;\n}\n.altrp-field-select2__single-value, .altrp-field {\n  font-size: 16px;\n  font-family: "Open Sans";\n  line-height: 1.5;\n  letter-spacing: 0;\n}\n.altrp-field-select2__control, .altrp-field {\n  text-align: left;\n  padding-top: 2px;\n  padding-right: 2px;\n  padding-bottom: 2px;\n  padding-left: 2px;\n  border-width: 1px;\n}\n.altrp-field-select2__control:hover{\n  border-width: 1px;\n}\n.altrp-field-container {\n  margin: 0;\n}\n.altrp-field::placeholder, .altrp-field-select2__placeholder {\n  font-size: 13px;\n  font-family: "Open Sans";\n  line-height: 1.5;\n  letter-spacing: 0;\n}\n.altrp-image-select {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.altrp-image-select img {\n  flex-grow: 1;\n  object-fit: contain;\n}\n.altrp-field {\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.altrp-field.active {\n  border-color: lightcoral;\n}\n.altrp-field-label {\n  text-align: center;\n  display: block;\n}\n.altrp-pagination__select-size .altrp-field-select2__single-value {\n  font-size: 14px;\n}\n.altrp-pagination__select-size .altrp-field-select2__indicator-separator {\n  display: none;\n}\n.altrp-pagination__select-size .altrp-field-select2__indicator {\n  align-items: center;\n}\n.altrp-pagination__select-size .altrp-field-select2__control {\n  width: 100px;\n  min-height: 32px;\n  padding: 0;\n  border-radius: 0;\n  outline: none;\n  border-color: rgb(142,148,170);\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\n.altrp-pagination__select-size .altrp-field-select2__control input {\n  border: none;\n}\n.altrp-field-select2 {\n  position: relative;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n.altrp-field-select2__control {\n  webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: hsl(0,0%,100%);\n  border-color: hsl(0,0%,80%);\n  border-style: solid;\n  border-width: 1px;\n  cursor: default;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-height: 38px;\n  outline: 0 !important;\n  position: relative;\n  -webkit-transition: all 100ms;\n  transition: all 100ms;\n  box-sizing: border-box;\n}\n.altrp-field-select2__value-container {\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 2px 8px;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.altrp-field-select2__single-value {\n  color: hsl(0,0%,20%);\n  margin-left: 2px;\n  margin-right: 2px;\n  max-width: calc(100% - 8px);\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n.altrp-field-select2__indicators {\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n}\n.altrp-field-select2__indicator-separator {\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  background-color: hsl(0,0%,80%);\n  margin-bottom: 8px;\n  margin-top: 8px;\n  width: 1px;\n  box-sizing: border-box;\n}\n.altrp-field-select2__indicator {\n  color: hsl(0,0%,80%);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 8px;\n  -webkit-transition: color 150ms;\n  transition: color 150ms;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n}\n.tba-placeholder {\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.altrp-field-subgroup {\n  display: flex;\n  flex-wrap: wrap;\n}\n.altrp-field-option {\n  display: flex;\n  padding: 10px;\n}\n.altrp-field-option__label {\n  cursor: pointer;\n}\ntextarea.altrp-field {\n  display: block;\n}\n.altrp-table__filter-select .altrp-field-select2__placeholder {\n  white-space: nowrap;\n}\n.altrp-table__filter-select .altrp-field-select2__single-value {\n  font-size: 14px;\n}\n.altrp-table__filter-select .altrp-field-select2__indicator-separator {\n  display: none;\n}\n.altrp-table__filter-select .altrp-field-select2__indicator {\n  align-items: center;\n}\n.altrp-table__filter-select .altrp-field-select2__control {\n  width: 100%;\n  min-height: 19px;\n  padding: 0;\n  border-radius: 0;\n  outline: none;\n  border-color: rgb(142, 148, 170);\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\n.altrp-table__filter-select .altrp-field-select2__control input {\n  border: none;\n}\n.altrp-table__filter-select .altrp-field-select2__value-container {\n  padding-top: 0;\n  padding-bottom: 0;\n  line-height: 13px;\n}\n.altrp-field-required {\n  color: red;\n  font-size: 18px;\n  padding-left: 10px;\n}\n.altrp-field-container-label {\n  display: flex;\n  flex-direction: row;\n}\n\n.altrp-field-label-container-left {\n  display: flex;\n  align-items: center;\n}\n\n.altrp-field-label-container {\n  display: inline-flex;\n  align-items: center;\n}\n.altrp-field-select2__indicator.altrp-field-select2__dropdown-indicator {\n  padding: 0 8px;\n  max-height: 14px;\n  overflow: hidden;\n}\n.altrp-field-select2 .altrp-field-select2__value-container {\n  padding: 0px 8px;\n}\n.altrp-field-select2 .css-b8ldur-Input {\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin: 0 2px;\n}\n.altrp-field-select2 .altrp-field-select2__control {\n  min-height: 14px;\n}\n');var AltrpFieldContainer=styled.div(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n  ","\n"])),(function(e){switch(e.settings.content_label_position_type){case"left":return"display: flex";case"right":return"display:flex;flex-direction:row-reverse;justify-content:flex-end;"}return""})),InputAcceptWidget=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__.Z)(InputAcceptWidget,_Component);var _super=_createSuper(InputAcceptWidget),_updateOptions,_componentDidUpdate2,_componentDidMount2;function InputAcceptWidget(e){var t;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__.Z)(this,InputAcceptWidget),(t=_super.call(this,e)).timeInput=null,t.handleEnter=function(e){if(13===e.keyCode){e.preventDefault();var n=Array.from(document.querySelectorAll("input,select")),r=n.indexOf(e.target);if(void 0===r)return;n[r+1]&&n[r+1].focus();var a=t.props.element.getSettings(),_=a.create_allowed,l=a.create_label,i=a.create_url;_&&l&&i&&t.createItem(e)}},t.debounceDispatch=_.debounce((function(e){return t.dispatchFieldValueToStore(e,!0)}),150),t.onFocus=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(n){var r,a;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.props.element.getSettings("focus_actions"))||(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()){e.next=7;break}return e.next=4,Promise.all([__webpack_require__.e(4079),__webpack_require__.e(6593),__webpack_require__.e(2167),__webpack_require__.e(6737)]).then(__webpack_require__.bind(__webpack_require__,2167));case 4:return a=e.sent.default,e.next=7,a.callAllWidgetActions(t.props.element.getIdForAction(),"focus",r,t.props.element);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onBlur=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(n){var r,a,l=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>1&&void 0!==l[1]?l[1]:null,_.get(r,"getData")&&t.dispatchFieldValueToStore(r.getData(),!0),!t.props.element.getSettings("actions",[])||(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()){e.next=8;break}return e.next=5,Promise.all([__webpack_require__.e(4079),__webpack_require__.e(6593),__webpack_require__.e(2167),__webpack_require__.e(6737)]).then(__webpack_require__.bind(__webpack_require__,2167));case 5:return a=e.sent.default,e.next=8,a.callAllWidgetActions(t.props.element.getIdForAction(),"blur",t.props.element.getSettings("actions",[]),t.props.element);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.dispatchFieldValueToStore=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(n){var r,a,l,i,s,o=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>1&&void 0!==o[1]&&o[1],a=t.props.element.getFormId(),-1!==(l=t.props.element.getFieldId()).indexOf("{{")&&(l=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.replaceContentWithData)(l)),!(_.isObject(t.props.appStore)&&l&&a)){e.next=14;break}if(t.props.appStore.dispatch((0,_front_app_src_js_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_11__.Az)(l,n,a,r)),!r){e.next=14;break}if(!(i=t.props.element.getSettings("change_actions"))||(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()){e.next=14;break}return e.next=11,Promise.all([__webpack_require__.e(4079),__webpack_require__.e(6593),__webpack_require__.e(2167),__webpack_require__.e(6737)]).then(__webpack_require__.bind(__webpack_require__,2167));case 11:return s=e.sent.default,e.next=14,s.callAllWidgetActions(t.props.element.getIdForAction(),"change",i,t.props.element);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.createItem=function(){var e=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(n){var r,a,l,i,s,o,p,c,u,d,f,b,g;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.keyCode,a=n.target.value,13===r&&a){e.next=4;break}return e.abrupt("return");case 4:if(l=t.props.element.getSettings(),i=l.create_url,s=l.create_label,o=l.create_data,p=l.select2_multiple,s||i){e.next=7;break}return e.abrupt("return");case 7:return c=t.props.element.getCurrentModel(),(u=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseParamsFromString)(o,c,!0))[s]=a,d=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseURLTemplate)(i,c.getData()),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{isDisabled:!0})})),e.prev=12,f=new _classes_Resource__WEBPACK_IMPORTED_MODULE_5__.Z({route:d}),e.next=16,f.post(u);case 16:(b=e.sent).success&&_.get(b,"data.id")&&(g={label:a,value:_.get(b,"data.id")},t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{isDisabled:!1})}),(function(){var e=(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__.Z)(t.state.options);e.unshift(g);var n=t.state.value;p?(n=n?(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__.Z)(n):[]).push(_.get(b,"data.id")):n=_.get(b,"data.id"),t.setState((function(t){return _objectSpread(_objectSpread({},t),{},{options:e,value:n})}),(function(){var e=_.get((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__.Z)(t),"altrpSelectRef.current.selectRef.current");e&&e.setState({menuIsOpen:!1,inputValue:""})}))}))),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{isDisabled:!1})})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(12),console.error(e.t0),t.setState((function(e){return _objectSpread(_objectSpread({},e),{},{isDisabled:!1})}));case 25:case"end":return e.stop()}}),e,null,[[12,21]])})));return function(t){return e.apply(this,arguments)}}(),e.element.component=(0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__.Z)(t),window.elementDecorator&&window.elementDecorator((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__.Z)(t)),t.onChange=t.onChange.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__.Z)(t)),t.debounceDispatch=t.debounceDispatch.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__.Z)(t)),t.defaultValue=t.getContent("content_default_value")||(t.valueMustArray()?[]:""),t.valueMustArray()&&!_.isArray(t.defaultValue)&&(t.defaultValue=[]),t.state={settings:_objectSpread({},e.element.getSettings()),value:t.defaultValue,options:(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseOptionsFromSettings)(e.element.getSettings("content_options")),paramsForUpdate:null},t.altrpSelectRef=React.createRef(),t.getContent("content_default_value")&&t.dispatchFieldValueToStore(t.getContent("content_default_value")),t}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__.Z)(InputAcceptWidget,[{key:"valueMustArray",value:function(){return!1}},{key:"clearValue",value:function(){this.onChange(""),this.dispatchFieldValueToStore("",!0)}},{key:"_componentDidMount",value:(_componentDidMount2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(t,n){var r,a,l=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.element.getSettings("content_options")&&(r=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseOptionsFromSettings)(this.props.element.getSettings("content_options")),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{options:r})}))),a=this.state.value,_.get(a,"dynamic")&&this.props.currentModel.getProperty("altrpModelUpdated")&&(a=this.getContent("content_default_value")),!t||t.currentModel.getProperty("altrpModelUpdated")||!this.props.currentModel.getProperty("altrpModelUpdated")){e.next=7;break}return a=this.getContent("content_default_value"),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a,contentLoaded:!0})}),(function(){l.dispatchFieldValueToStore(a)})),e.abrupt("return");case 7:if(!this.props.currentModel.getProperty("altrpModelUpdated")||!this.props.currentDataStorage.getProperty("currentDataStorageLoaded")||this.state.contentLoaded){e.next=11;break}return a=this.getContent("content_default_value"),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a,contentLoaded:!0})}),(function(){l.dispatchFieldValueToStore(a)})),e.abrupt("return");case 11:this.state.value!==a&&this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a})}),(function(){l.dispatchFieldValueToStore(a)}));case 12:case"end":return e.stop()}}),e,this)}))),function(e,t){return _componentDidMount2.apply(this,arguments)})},{key:"getRoute",value:function(){var e=this.props.element.getSettings("model_for_options");return-1===e.indexOf("/")?"/ajax/models/".concat(e,"_options"):(-1!==e.indexOf("{{")&&(e=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.replaceContentWithData)(e)),e)}},{key:"_componentDidUpdate",value:(_componentDidUpdate2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(t,n){var r,a,l,i,s,o=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.state.settings,a=r.content_options,l=r.model_for_options,t&&!t.currentDataStorage.getProperty("currentDataStorageLoaded")&&this.props.currentDataStorage.getProperty("currentDataStorageLoaded")&&(i=this.getContent("content_default_value",this.props.element.getSettings("select2_multiple")),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:i,contentLoaded:!0})}),(function(){o.dispatchFieldValueToStore(i)}))),!_.isEqual(this.props.currentModel,t.currentModel)&&this.state.value&&this.state.value.dynamic&&this.dispatchFieldValueToStore(this.getContent("content_default_value")),this.props.formsStore===t.formsStore&&this.props.currentModel===t.currentModel&&this.props.currentDataStorage===t.currentDataStorage||this.updateOptions(),a&&!l&&(s=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseOptionsFromSettings)(a),_.isEqual(s,this.state.options)||this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{options:s})}))),this.updateValue(t);case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return _componentDidUpdate2.apply(this,arguments)})},{key:"updateValue",value:function updateValue(prevProps){var _this4=this;if(!(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()){var content_calculation=this.props.element.getSettings("content_calculation"),altrpforms=this.props.formsStore,fieldName=this.props.element.getFieldId(),formId=this.props.element.getFormId();if(content_calculation){var prevContext={},altrpdata=this.props.currentDataStorage.getData(),altrpmodel=this.props.currentModel.getData(),altrpuser=this.props.currentUser.getData(),altrppagestate=this.props.altrpPageState.getData(),altrpresponses=this.props.altrpresponses.getData(),altrpmeta=this.props.altrpMeta.getData(),context=this.props.element.getCurrentModel().getData();if(-1!==content_calculation.indexOf("altrpdata")&&(context.altrpdata=altrpdata,altrpdata.currentDataStorageLoaded?prevContext.altrpdata=prevProps.currentDataStorage.getData():prevContext.altrpdata=altrpdata),-1!==content_calculation.indexOf("altrpforms")&&(context.altrpforms=altrpforms,"".concat(formId,".").concat(fieldName)===altrpforms.changedField?prevContext.altrpforms=altrpforms:prevContext.altrpforms=prevProps.formsStore),-1!==content_calculation.indexOf("altrpmodel")&&(context.altrpmodel=altrpmodel,prevContext.altrpmodel=prevProps.currentModel.getData()),-1!==content_calculation.indexOf("altrpuser")&&(context.altrpuser=altrpuser,prevContext.altrpuser=prevProps.currentUser.getData()),-1!==content_calculation.indexOf("altrpuser")&&(context.altrpuser=altrpuser,prevContext.altrpuser=prevProps.currentUser.getData()),-1!==content_calculation.indexOf("altrppagestate")&&(context.altrppagestate=altrppagestate,prevContext.altrppagestate=prevProps.altrpPageState.getData()),-1!==content_calculation.indexOf("altrpmeta")&&(context.altrpmeta=altrpmeta,prevContext.altrpmeta=prevProps.altrpMeta.getData()),-1!==content_calculation.indexOf("altrpresponses")&&(context.altrpresponses=altrpresponses,prevContext.altrpresponses=prevProps.altrpresponses.getData()),-1!==content_calculation.indexOf("altrpstorage")&&(context.altrpstorage=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.getDataFromLocalStorage)("altrpstorage",{})),!(_.isEqual(prevProps.currentDataStorage,this.props.currentDataStorage)&&_.isEqual(prevProps.currentUser,this.props.currentUser)&&_.isEqual(prevProps.formsStore,this.props.formsStore)&&_.isEqual(prevProps.altrpPageState,this.props.altrpPageState)&&_.isEqual(prevProps.altrpMeta,this.props.altrpMeta)&&_.isEqual(prevProps.altrpresponses,this.props.altrpresponses)&&_.isEqual(prevProps.currentModel,this.props.currentModel))&&(_.isEqual(prevProps.formsStore,this.props.formsStore)||"".concat(formId,".").concat(fieldName)!==altrpforms.changedField)){var value="";try{if(content_calculation=content_calculation.replace(/}}/g,"')").replace(/{{/g,"_.get(context, '"),value=eval(content_calculation),value===this.state.value)return;this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:value})}),(function(){_this4.dispatchFieldValueToStore(value)}))}catch(e){console.error("Evaluate error in Input: '"+e.message+"'",this.props.element.getId())}}}else{var path="".concat(formId,".").concat(fieldName);this.props.formsStore!==prevProps.formsStore&&_.get(altrpforms,path)!==this.state.value&&this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:_.get(altrpforms,path)})}))}}}},{key:"updateOptions",value:(_updateOptions=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark((function e(){var t,n,r,a;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.element.getFormId(),n=this.props.element.getSettings("params_for_update"),r=_.get(this.props.formsStore,[t],{}),n=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.parseParamsFromString)(n,new _classes_AltrpModel__WEBPACK_IMPORTED_MODULE_6__.Z(r)),a=(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__.Z)(this.state.options),_.isEqual(n,this.state.paramsForUpdate)){e.next=28;break}if(_.isEmpty(n)){e.next=21;break}if(!this.props.element.getSettings("params_as_filters",!1)){e.next=14;break}return n=JSON.stringify(n),e.next=11,new _classes_Resource__WEBPACK_IMPORTED_MODULE_5__.Z({route:this.getRoute()}).getQueried({filters:n});case 11:a=e.sent,e.next=17;break;case 14:return e.next=16,new _classes_Resource__WEBPACK_IMPORTED_MODULE_5__.Z({route:this.getRoute()}).getQueried(n);case 16:a=e.sent;case 17:a=_.isArray(a)?a:a.data,a=_.isArray(a)?a:[],e.next=27;break;case 21:if(!this.state.paramsForUpdate){e.next=27;break}return e.next=24,new _classes_Resource__WEBPACK_IMPORTED_MODULE_5__.Z({route:this.getRoute()}).getAll();case 24:a=e.sent,a=_.isArray(a)?a:a.data,a=_.isArray(a)?a:[];case 27:this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{paramsForUpdate:n,options:a})}));case 28:case"end":return e.stop()}}),e,this)}))),function(){return _updateOptions.apply(this,arguments)})},{key:"onChange",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a="";if(e&&e.target){var l=e.target.checked,i=this.props.element.getSettings("accept_checked")||!0,s=this.props.element.getSettings("accept_unchecked")||!1;s=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.valueReplacement)(s),i=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.valueReplacement)(i),t=l?i:s}e&&e.value&&(a=e.value),_.get(r,"getData")&&(a='<div class="ck ck-content" style="width:100%">'.concat(r.getData(),"</div>")),_.isArray(e)&&(a=_.cloneDeep(e)),this.props.element.getSettings("content_options_nullable")&&e&&"<null>"===e.value&&(a=null),this.setState((function(e){return _objectSpread(_objectSpread({},e),{},{value:a})}),(function(){var e=n.props.element.getSettings("change_actions"),r=n.props.element.getSettings("change_change_end"),_=n.props.element.getSettings("change_change_end_delay");n.dispatchFieldValueToStore(void 0!==t?t:a,!0),!e||r||(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()||n.debounceDispatch(void 0!==t?t:a),e&&r&&!(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.isEditor)()&&(n.timeInput&&clearTimeout(n.timeInput),n.timeInput=setTimeout((function(){n.debounceDispatch(void 0!==t?t:a)}),_))}))}},{key:"getOptions",value:function(){var e=(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__.Z)(this.state.options),t=this.props.element.getDynamicSetting("content_options");return t&&(e=(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.convertData)(t,e)),this.props.element.getSettings("sort_default")||(e=_.sortBy(e,(function(e){return e&&(e.label?e.label.toString():e)}))),e}},{key:"getName",value:function(){return"".concat(this.props.element.getFormId(),"[").concat(this.props.element.getFieldId(),"]")}},{key:"render",value:function(){var e,t=this.props.element.getSettings(),n=(t.select2_multiple,t.label_icon),r=this.state.value;_.get(r,"dynamic")&&this.props.currentModel.getProperty("altrpModelUpdated")&&(r=this.getContent("content_default_value")),r&&r.dynamic&&(r="");var a="",l={},i=this.props.element.getResponsiveSetting("content_label_position_type");switch(i){case"top":l={marginBottom:this.state.settings.label_style_spacing?this.state.settings.label_style_spacing.size+this.state.settings.label_style_spacing.unit:"2px"},a="";break;case"bottom":l={marginTop:this.state.settings.label_style_spacing?this.state.settings.label_style_spacing.size+this.state.settings.label_style_spacing.unit:"2px"},a="";break;case"left":l={marginRight:this.state.settings.label_style_spacing?this.state.settings.label_style_spacing.size+this.state.settings.label_style_spacing.unit:"2px"},a="altrp-field-label-container-left";break;case"absolute":l={position:"absolute",zIndex:2},a=""}e=this.state.settings.content_label?React.createElement("div",{className:"altrp-field-label-container "+a,style:l},React.createElement("label",{className:"altrp-field-label ".concat(this.state.settings.content_required?"altrp-field-label--required":"")},this.state.settings.content_label),n&&n.assetType&&React.createElement("span",{className:"altrp-label-icon"},(0,_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_4__.renderAssetIcon)(n))):null,this.state.settings.content_autocomplete;var s=this.renderAcceptInput();return React.createElement(AltrpFieldContainer,{settings:t,className:"altrp-field-container "},"top"===i?e:"","left"===i?e:"","right"===i?e:"","absolute"===i?e:"",s,"bottom"===i?e:"")}},{key:"renderAcceptInput",value:function(){var e=this.state.value,t=this.props.element.getSettings("accept_checked")||!0,n=this.props.element.getSettings("accept_unchecked")||!1;return e===t?e=!0:e===n&&(e=!1),React.createElement("div",{className:"altrp-field-option ".concat(e?"active":"")},React.createElement("span",{className:"altrp-field-option-span"},React.createElement("input",{type:"checkbox",name:"".concat(this.props.element.getFormId(),"[").concat(this.props.element.getFieldId(),"]"),className:"altrp-field-option__input ".concat(e?"active":""),onChange:this.onChange,checked:!!e,id:"".concat(this.props.element.getFormId(),"[").concat(this.props.element.getFieldId(),"]")})))}}]),InputAcceptWidget}(Component);__webpack_exports__.default=InputAcceptWidget}}]);
//# sourceMappingURL=InputAccept.955e789bb3e0b0353b7b.bundle.js.map