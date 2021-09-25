(self.webpackChunk=self.webpackChunk||[]).push([[5248],{63349:function(n,t,e){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,{Z:function(){return r}})},77608:function(n,t,e){"use strict";function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e.d(t,{Z:function(){return r}})},10379:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(14665);function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&(0,r.Z)(n,t)}},46070:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(90484),o=e(63349);function i(n,t){return!t||"object"!==(0,r.Z)(t)&&"function"!=typeof t?(0,o.Z)(n):t}},14665:function(n,t,e){"use strict";function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}e.d(t,{Z:function(){return r}})},90484:function(n,t,e){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}e.d(t,{Z:function(){return r}})},58642:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return v}});var r=e(6610),o=e(5991),i=e(63349),a=e(10379),u=e(46070),c=e(77608),l=e(92137),p=e(28481),s=e(87757),f=e.n(s),d=e(67294),g=e(9669),b=e.n(g),y=e(14494),m=e(76593),x=e(14452),h=function(n){var t=n.settings,e=n.id,r=(0,d.useState)(!1),o=(0,p.Z)(r,2),i=o[0],a=o[1],u=(0,d.useState)({}),c=(0,p.Z)(u,2),s=c[0],g=c[1],h=t.editable,v=t.canvas,k=t.zoom,w=t.lat,Z=t.lng,C=t.latDs,D=t.lngDs,O=t.centerByDatasource,S=void 0!==O&&O,P=t.style_height,B=void 0===P?{}:P,j=t.style_margin,R=void 0===j?{}:j,E=t.objects,z=void 0===E?{}:E,F=t.url,N=t.field_id,K=t.url_connect,M=void 0===K?null:K,A=t.field_first_connect,H=void 0===A?null:A,L=t.field_second_connect,G=void 0===L?null:L,J=t.onlyDatasource,T=void 0!==J&&J,I=t.parameters,q=w,Q=Z,U=(0,y.useSelector)((function(n){return n.currentDataStorage.data}));S&&(q=(0,m.getDataByPath)(C,50.7496449),Q=(0,m.getDataByPath)(D,86.1250068));var V=(0,d.useMemo)((0,l.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b().get(F);case 2:return t=n.sent,e=t.data.data.map((function(n){var t=_.get(n,"id"),e=JSON.parse(_.get(n,N));return e.dbID=t,e})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)}))),[F,N]),W=(0,d.useMemo)((function(){if(_.keys(z).length>0)return z.map((function(n){var t,e=(0,m.getDataByPath)(n.path,[]);return Array.isArray(e)?e.map((function(t){var e;return{type:"Feature",geometry:{type:"Point",coordinates:[Number(_.get(t,n.latitude)),Number(_.get(t,n.longitude))]},id:t.id,inCluster:(null==n?void 0:n.useCluster)||!1,properties:{fillOpacity:1,icon:n.icon||"GoogleMarker",tooltip:n.tooltipByKeyboard?n.tooltip:_.get(t,n.tooltip)||"",popup:n.popupByKeyboard?n.popup:_.get(t,n.popup)||"",fillColor:(null===(e=n.color)||void 0===e?void 0:e.colorPickedHex)||"#3388ff"}}})):{type:"Feature",geometry:{type:"Point",coordinates:[Number(_.get(e,n.latitude)),Number(_.get(e,n.longitude))]},id:e.id,inCluster:(null==n?void 0:n.useCluster)||!1,properties:{fillOpacity:1,icon:n.icon||"GoogleMarker",tooltip:n.tooltipByKeyboard?n.tooltip:_.get(e,n.tooltip)||"",popup:n.popupByKeyboard?n.popup:_.get(e,n.popup)||"",fillColor:(null===(t=n.color)||void 0===t?void 0:t.colorPickedHex)||"#3388ff"}}})).flat()}),[z,U]),X=(0,d.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(t,e){var r,o,i,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!T){n.next=6;break}g({type:"FeatureCollection",features:e}),a(!1),n.next=19;break;case 6:return n.prev=6,a(!0),n.next=10,b()("/ajax/maps/".concat(t));case 10:200===(r=n.sent).status&&(o=_.cloneDeep(r.data),i=[],u=o.features,_.keys(e).length>0&&(i=u.concat(e)),r.data.features=i.length>0?i:u,g(r.data),a(!1)),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(6),g({type:"FeatureCollection",features:e}),a(!1);case 19:case"end":return n.stop()}}),n,null,[[6,14]])})));return function(t,e){return n.apply(this,arguments)}}(),[e]),Y=(0,d.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(t,e){var r,o,i;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===F){n.next=17;break}return n.prev=1,a(!0),n.next=5,t;case 5:r=n.sent,o=e,i=(i=r).concat(o).filter((function(n){return void 0!==n})),g({type:"FeatureCollection",features:i}),a(!1),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(1);case 15:n.next=18;break;case 17:return n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t,e){return n.apply(this,arguments)}}(),[F]);return(0,d.useEffect)((function(){void 0!==F&&""!=F&&null!==F?Y(V,W):X(e,W)}),[e,W]),d.createElement(d.Suspense,{fallback:"Loading"},d.createElement(x.Z,{data:s,saveData:function(n){T||null==F&&b().post("/ajax/maps/".concat(e),{data:JSON.stringify({type:"FeatureCollection",features:n.features.filter((function(n){return void 0!==n.id}))})})},isLoading:i,id:e,settings:t,url_connect:M,field_first_connect:H,field_second_connect:G,style:{height:B.size+B.unit,marginTop:R.top+R.unit,marginBottom:R.bottom+R.unit,marginLeft:R.left+R.unit,marginRight:R.right+R.unit},isEditable:h,preferCanvas:v,zoom:+k,url:F,field_id:N,center:[q||50.7496449,Q||86.1250068],parameters:I}))};e.e(8155).then(e.bind(e,8155)),(window.globalDefaults=window.globalDefaults||[]).push('\n  .altrp-map {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    &__preloader {\n      position: absolute;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(255, 255, 255, 0.6);\n      z-index: 9999;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      img {\n        display: inline-block;\n        width: 64px;\n        height: 64px;\n      }\n    }\n\n    &__container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n    }\n\n    &__paint {\n      background-color: #fff;\n      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n      border-radius: 4px;\n      text-align: center;\n      button {\n        margin-top: 3px;\n        background: none;\n        border: 0;\n        cursor: pointer;\n        padding: 3px 6px;\n      }\n    }\n\n    &__modal {\n      .modal {\n        &__body {\n          position: absolute;\n          display: none;\n          width: 100%;\n          height: 100%;\n          overflow: auto;\n          left: 0;\n          top: 0;\n          background-color: #fff;\n          z-index: 9999;\n          box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.1);\n          border-radius: 4px;\n          padding: 20px;\n          &.open {\n            display: block;\n          }\n          .close {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            padding: 5px 7px;\n            border: 0;\n          }\n          &-color {\n            button {\n              border: 0;\n              width: 30px;\n              height: 30px;\n              background: none;\n              margin: 10px 10px 20px 0;\n              cursor: pointer;\n              &.active {\n                background-image: url("../svgs/correct.png");\n                background-position: center center;\n                background-repeat: no-repeat;\n              }\n            }\n          }\n          &-text {\n            label {\n              //color: #919191;\n              //display: flex;\n              //flex-direction: column;\n              //font-size: 0.9rem;\n              textarea,\n              input {\n                margin: 10px 0 20px;\n                padding: 5px;\n                border: 1px solid #919191;\n                font-family: Arial, Helvetica, sans-serif;\n              }\n              input[type="range"] {\n                padding: 0;\n              }\n            }\n          }\n          &-icon {\n            margin: 10px 0 20px;\n            button {\n              background-color: #fff;\n              border: 0;\n              padding: 5px 8px;\n              cursor: pointer;\n              border-radius: 3px;\n              &.active {\n                border: 1px solid #343a40;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  .leaflet-marker-icon {\n    &.leaflet-div-icon:not(.leaflet-editing-icon) {\n      background: transparent;\n      border: none;\n    }\n  }\n\n  .leaflet-bottom.leaflet-right {\n    display: none;\n  }\n\n');var v=function(n){(0,a.Z)(p,n);var t,e,l=(t=p,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,c.Z)(t);if(e){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)});function p(n){var t;return(0,r.Z)(this,p),(t=l.call(this,n)).state={settings:n.element.getSettings()},n.element.component=(0,i.Z)(t),window.elementDecorator&&window.elementDecorator((0,i.Z)(t)),n.baseRender&&(t.render=n.baseRender((0,i.Z)(t))),t}return(0,o.Z)(p,[{key:"render",value:function(){return React.createElement(h,{settings:this.state.settings,id:this.props.element.id})}}]),p}(Component)}}]);
//# sourceMappingURL=MapConstructorWidget.aca1176dc88a51caf851.bundle.js.map