(self.webpackChunk=self.webpackChunk||[]).push([[961],{38835:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return be}});var n=r(6610),a=r(5991),o=r(3925),i=r(24402),c=r(14890),u="CHANGE_APP_ROUTES";function s(e){return{type:u,routes:e}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=[];if(window.altrpPages){var d,f=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(window.altrpPages);try{for(f.s();!(d=f.n()).done;){var w=d.value;p.push(i.Z.routeFabric(w))}}catch(e){f.e(e)}finally{f.f()}}var E={routes:p},y=r(96156),v=r(97239);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}_.isArray(window.model_data)&&(window.model_data=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},window.model_data));var A=window.model_data||{};window.model_data&&(A.altrpModelUpdated=!0);var m={},g=r(40148),b=r(5298),O={},T="SET_SCROLL_TOP",R={},S="TRIGGER_POPUP",D={popupID:null},P=r(87329),N=[],C="TOGGLE_TRIGGER",L="SET_DEFAULT_TRIGGERS",G=[],I={};"undefined"==typeof _&&(r.g._=r(96486));var Z={},j="REPLACE_ALTRP_META",M="REPLACE_ALTRP_META_FROM_LOCAL_STORAGE",U=window.altrpHelpers,k=U.AltrpModel,H=U.setAltrpIndex,F=U.saveDataToLocalStorage,V=U.isSSR,x=V()?{}:window.altrpHelpers.getDataFromLocalStorage("altrpmeta",{});V()||window.addEventListener("storage",(function(){var e=window.altrpHelpers.getDataFromLocalStorage("altrpmeta",{});void 0!==e&&_.isObject(e)&&appStore.dispatch(function(e){return{type:arguments.length>1&&void 0!==arguments[1]&&arguments[1]?M:j,metaValue:e}}(e,!0))}));var J={},B="ADD_FONT",Q="REMOVE_FONT",Y=new v.Z({}),$={element:"test"},X={},q=r(58962);"undefined"==typeof window&&(r.g.window={});var z=q.Z.SCREENS.find((function(e){var t;if(!e.fullMediaQuery)return!1;var r=e.fullMediaQuery;return r=r.replace("@media",""),void 0!==window.matchMedia&&(null===(t=window)||void 0===t?void 0:t.matchMedia(r).matches)}))||q.Z.SCREENS[0];window.altrpHelpers.isEditor()||window.Cookies.set("__altrp_current_device",z.name);var K;"undefined"==typeof document&&(r.g.document={});var W,ee,te,re=(null===(K=document)||void 0===K?void 0:K.title)||"";"undefined"==typeof location&&(r.g.location={});var ne={url:(null===(W=location)||void 0===W?void 0:W.href)||"",title:(null===(ee=window)||void 0===ee||null===(te=ee.currentPage)||void 0===te?void 0:te.title)||""},ae="ADD_MENU",oe=window.altrpMenus||[],ie=r(69852),ce=r.n(ie);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={},pe=r(29941),de=[];window["h-altrp"]&&(de=window.page_areas.map((function(e){return new window.altrpHelpers.Area.areaFactory(e)})));var fe="ADD_IMAGE",_e="REMOVE_IMAGE",we={},Ee=(0,c.UY)({appRoutes:function(e,t){switch(e=e||E,t.type){case u:e={routes:t.routes}}return e},currentModel:function(e,t){switch(e=e||A,t.type){case"CHANGE_CURRENT_MODEL":e=t.model}return e instanceof v.Z?e:new v.Z(e)},formsStore:function(e,t){var r=t.type,n=t.formId,a=t.fieldName,o=t.value,i=t.changedField;switch(e=e||m,r){case"CHANGE_FORM_FIELD_VALUE":_.get(e,[n,a])!==o&&((e=_.cloneDeep(e)).changedField=i,_.set(e,[n,a],o));break;case"CHANGE_FORM_FIELD_VALUE":n?(e=_.cloneDeep(e),_.set(e,[n],{})):e={}}return e},currentUser:g.r,currentDataStorage:function(e,t){switch(e=e||new v.Z(O),t.type){case"CHANGE_CURRENT_DATASOURCE":var r=t.data;_.isArray(r)&&(0,b.Js)(r),(e=_.cloneDeep(e)).setProperty(t.dataStorageName,r);break;case"CLEAR_CURRENT_DATASOURCE":(e=new v.Z({})).setProperty("currentDataStorageLoaded",!1);break;case"SET_CURRENT_DATASOURCE_LOADED":(e=_.cloneDeep(e)).setProperty("currentDataStorageLoaded",!0);break;case"SET_CURRENT_DATASOURCE_LOADING":(e=_.cloneDeep(e)).setProperty("currentDataStorageLoaded",!1)}return e instanceof v.Z?e:new v.Z(e)},scrollPosition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case T:return n;default:return e}},popupTrigger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case S:return{popupID:e.popupID===n?null:n};default:return e}},elements:function(e,t){switch(e=e||N,t.type){case"CLEAR_ELEMENTS":e=N;break;case"ADD_ELEMENT":_.isArray(e)||(e=N),e.push(t.elementComponent),e=(0,P.Z)(e)}return e},hideTriggers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case C:return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,P.Z)(e),[n]);case L:return e.concat(n);default:return e}},altrpresponses:function(e,t){switch(e=e||new v.Z(I),t.type){case"ADD_RESPONSE_DATA":var r=t.data;_.isArray(r)&&(0,b.Js)(r),(e=_.cloneDeep(e)).setProperty(t.formId,r);break;case"CLEAR_ALL_RESPONSE_DATA":e=new v.Z({})}return e instanceof v.Z?e:new v.Z(e)},editElement:function(e,t){e=e||Z;var r=_.cloneDeep(t.payload);switch(t.type){case"EDIT_ELEMENT":e=r}return e},altrpMeta:function(e,t){switch(e=e||new k(x),t.type){case"CHANGE_ALTRP_META":var r=t.metaValue,n=t.metaName;e=_.cloneDeep(e),_.isArray(r)&&H(r),e.setProperty(n,r),F("altrpmeta",e.getData());break;case j:var a=t.metaValue;e=new k(a),_.isArray(a)&&H(a),F("altrpmeta",e.getData());break;case M:var o=t.metaValue;e=new k(o),_.isArray(o)&&H(o)}return e instanceof k?e:new k(e)},altrpPageState:function(e,t){switch(e=e||new v.Z(J),t.type){case"CHANGE_PAGE_STATE":var r=t.stateValue;e=_.cloneDeep(e),_.isArray(r)&&(0,b.Js)(r),e.setProperty(t.stateName,r);break;case"CLEAR_PAGE_STATE":e=new v.Z(J)}return e instanceof v.Z?e:new v.Z(e)},altrpFonts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var r=t.elementId,n=t.controllerName,a=t.fontName;e.setProperty("".concat(r,"_").concat(n),a),e=_.clone(e);break;case Q:var o=t.elementId,i=t.controllerName;e.unsetProperty("".concat(o,"_").concat(i)),e=_.clone(e)}return e},userLocalStorage:function(e,t){var r=e||$;switch(t.type){case"CHANGE_USER_LOCAL_STORAGE":r=e}return r},exportDashboard:function(e,t){e=e||X;var r=_.cloneDeep(t.payload);switch(t.type){case"DASHBOARD_EXPORT":e=r}return e},currentScreen:function(e,t){switch(e=e||z,t.type){case"SET_CURRENT_SCREEN":window.Cookies.set("__altrp_current_device",t.screen.name,{expires:365}),e=t.screen}return e},currentTitle:function(e,t){switch(e=e||re,t.type){case"CHANGE_CURRENT_TITLE":e=t.title}return e},currentEmailTemplate:function(e,t){switch(e=e||null,t.type){case"CHANGE_CURRENT_EMAIL_TEMPLATE":e=t.template}return e},altrpPage:function(e,t){switch(e=e||ne,t.type){case"CHANGE_CURRENT_PAGE":e=t.page;break;case"CHANGE_CURRENT_PAGE_PROPERTY":(e=_.clone(e)).setProperty(t.propertyName,t.value)}return e instanceof v.Z?e:new v.Z(e)},altrpMenus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:if(e.find((function(e){return e.guid===t.menu.guid})))return e;(e=(0,P.Z)(e)).push(t.menu)}return e},elementsSettings:function(e,t){switch(e=e||le,t.type){case"CHANGE_SETTINGS":e[t.elementId]&&ce().delete(e,t.elementId),e=ce().set(e,t.elementId,{settings:se({},t.settings),name:t.elementName,childrenLength:t.childrenLength});break;case"REPLACE_SETTINGS":e=t.settings}return e},areas:function(e,t){switch(e=e||de,t.type){case pe.D:e=t.areas}return e},lightboxImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.image,a=t.storeName;switch(_.isNumber(a)&&(a+=""),r){case fe:var o=e[a]||[];o.find((function(e){return n===e}))||(o.push(n),o=(0,P.Z)(o),e=ce().set(e,a,o));break;case _e:var i=e[a]||[];i.find((function(e){return n===e}))&&(i=i.filter((function(e){return n!==e})),i=(0,P.Z)(i),e=ce().set(e,a,i))}return e}}),ye=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var ve=(0,c.MT)(Ee,ye);if(window.appStore=ve,window.ALTRP_DEBUG){var he=ve.dispatch;ve.dispatch=function(e){console.trace(e),he.bind(ve)(e)}}var Ae=ve;function me(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ge(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var be=new(function(){function e(){(0,n.Z)(this,e),this.resource=new o.default({route:"/ajax/routes"}),this.loadRoutes()}return(0,a.Z)(e,[{key:"loadRoutes",value:function(){if(window.altrpPages){var e,t=[],r=me(window.altrpPages);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push(i.Z.routeFabric(n))}}catch(e){r.e(e)}finally{r.f()}Ae.dispatch(s(t))}else this.resource.getAll().then((function(e){var t,r=[],n=me(e.pages);try{for(n.s();!(t=n.n()).done;){var a=t.value;r.push(i.Z.routeFabric(a))}}catch(e){n.e(e)}finally{n.f()}Ae.dispatch(s(r))})).catch((function(e){console.error(e)}))}}]),e}())}}]);
//# sourceMappingURL=961.admin.js.map