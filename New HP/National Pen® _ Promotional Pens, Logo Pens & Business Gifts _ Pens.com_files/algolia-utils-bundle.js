function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).AlgoliaAnalytics={})}(this,function(e){"use strict";var t,r,n,o,i=function(e){return void 0===e},a=function(e){return"string"==typeof e},s=function(e){return"number"==typeof e},c=function(e){return"function"==typeof e},l="insights-js (2.0.0)",u=["de","us"];Object.keys||(Object.keys=(t=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),o=(n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(e){if("function"!=typeof e&&("object"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var i,a,s=[];for(i in e)t.call(e,i)&&s.push(i);if(r)for(a=0;a<o;a++)t.call(e,n[a])&&s.push(n[a]);return s})),"function"!=typeof Object.assign&&(Object.assign=function(e,t){var r=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=r[o];if(null!=i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n});var d=function(e){var t=e.requestFn;this._ua="",this._uaURIEncoded="",this.version="2.0.0",this._hasCredentials=!1,this.sendEvent=function(e){return function(t,r){if(!this._userHasOptedOut){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(""===r.userToken||""===this._userToken)throw new Error("`userToken` cannot be an empty string.");var n=r.userToken||this._userToken;if(i(n))throw new Error("Before calling any methods on the analytics, you first need to call 'setUserToken' function or include 'userToken' in the event payload.");if(!a(r.index))throw new TypeError("expected required parameter `index` to be a string");if(!a(r.eventName))throw new TypeError("expected required parameter `eventName` to be a string");if(!i(r.userToken)&&!a(r.userToken))throw new TypeError("expected optional parameter `userToken` to be a string");var o={eventType:t,eventName:r.eventName,userToken:n,index:r.index};if(!i(r.timestamp)){if(!s(r.timestamp))throw new TypeError("expected optional parameter `timestamp` to be a number");o.timestamp=r.timestamp}if(!i(r.queryID)){if(!a(r.queryID))throw new TypeError("expected optional parameter `queryID` to be a string");o.queryID=r.queryID}if(!i(r.objectIDs)){if(!Array.isArray(r.objectIDs))throw new TypeError("expected optional parameter `objectIDs` to be an array");o.objectIDs=r.objectIDs}if(!i(r.positions)){if(!Array.isArray(r.positions))throw new TypeError("expected optional parameter `positions` to be an array");if(i(r.objectIDs))throw new Error("cannot use `positions` without providing `objectIDs`");if(r.objectIDs.length!==r.positions.length)throw new Error("objectIDs and positions need to be of the same size");o.positions=r.positions}if(!i(r.filters)){if(!i(r.objectIDs))throw new Error("cannot use `objectIDs` and `filters` for the same event");if(!Array.isArray(r.filters))throw new TypeError("expected optional parameter `filters` to be an array");o.filters=r.filters}if(i(r.objectIDs)&&i(r.filters))throw new Error("expected either `objectIDs` or `filters` to be provided");return function(e,t,r,n,i,a){return e(i+"/1/events?X-Algolia-Application-Id="+t+"&X-Algolia-API-Key="+r+"&X-Algolia-Agent="+n,{events:[o]})}(e,this._appId,this._apiKey,this._uaURIEncoded,this._endpointOrigin)}}}(t).bind(this),this.init=function(e){var t;if(!e)throw new Error("Init function should be called with an object argument containing your apiKey and appId");if(i(e.apiKey)||!a(e.apiKey))throw new Error("apiKey is missing, please provide it so we can authenticate the application");if(i(e.appId)||!a(e.appId))throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");if(!i(e.region)&&-1===u.indexOf(e.region))throw new Error("optional region is incorrect, please provide either one of: "+u.join(", ")+".");if(!(i(e.cookieDuration)||s(e.cookieDuration)&&isFinite(e.cookieDuration)&&Math.floor(e.cookieDuration)===e.cookieDuration))throw new Error("optional cookieDuration is incorrect, expected an integer.");this._apiKey=e.apiKey,this._appId=e.appId,this._userHasOptedOut=!!e.userHasOptedOut,this._region=e.region,this._endpointOrigin=e.region?"https://insights."+e.region+".algolia.io":"https://insights.algolia.io",this._useCookie=null!==(t=e.useCookie)&&void 0!==t&&t,this._cookieDuration=e.cookieDuration?e.cookieDuration:15552e6,this._hasCredentials=!0,this._ua=l,this._uaURIEncoded=encodeURIComponent(l),e.userToken?this.setUserToken(e.userToken):this._userToken||this._userHasOptedOut||!this._useCookie||this.setAnonymousUserToken()}.bind(this),this.initSearch=function(e){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(!e)throw new Error("initSearch function requires an argument with getQueryID and hitsContainer arguments");if(!e.getQueryID||"function"!=typeof e.getQueryID)throw new Error("getQueryID must be a function that returns the queryID of the last search operation");this.getQueryID=e.getQueryID}.bind(this),this.addAlgoliaAgent=function(e){-1===this._ua.indexOf("; "+e)&&(this._ua+="; "+e,this._uaURIEncoded=encodeURIComponent(this._ua))}.bind(this),this.setUserToken=function(e){this._userToken=e,c(this._onUserTokenChangeCallback)&&this._onUserTokenChangeCallback(this._userToken)}.bind(this),this.setAnonymousUserToken=function(){if(function(){try{return Boolean(navigator.cookieEnabled)}catch(e){return!1}}()){var e=function(e){for(var t="_ALGOLIA=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""}();e&&""!==e&&0===e.indexOf("anonymous-")?this.setUserToken(e):(this.setUserToken("anonymous-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),function(e,t,r){var n=new Date;n.setTime(n.getTime()+r);var o="expires="+n.toUTCString();document.cookie="_ALGOLIA="+t+";"+o+";path=/"}(0,this._userToken,this._cookieDuration))}}.bind(this),this.getUserToken=function(e,t){return c(t)&&t(null,this._userToken),this._userToken}.bind(this),this.onUserTokenChange=function(e,t){this._onUserTokenChangeCallback=e,t&&t.immediate&&c(this._onUserTokenChangeCallback)&&this._onUserTokenChangeCallback(this._userToken)}.bind(this),this.clickedObjectIDsAfterSearch=function(e){if(!e)throw new Error("No params were sent to clickedObjectIDsAfterSearch function, please provide `queryID`,  `objectIDs` and `positions` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, click event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, click event can not be properly sent without");if(!e.positions)throw new Error("required positions parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.clickedObjectIDs=function(e){if(!e)throw new Error("No params were sent to clickedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required `objectIDs` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.clickedFilters=function(e){if(!e)throw new Error("No params were sent to clickedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required `filters` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.convertedObjectIDsAfterSearch=function(e){if(!e)throw new Error("No params were sent to convertedObjectIDsAfterSearch function, please provide `queryID` and `objectIDs` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, conversion event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.convertedObjectIDs=function(e){if(!e)throw new Error("No params were sent to convertedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.convertedFilters=function(e){if(!e)throw new Error("No params were sent to convertedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.viewedObjectIDs=function(e){if(!e)throw new Error("No params were sent to viewedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}.bind(this),this.viewedFilters=function(e){if(!e)throw new Error("No params were sent to viewedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}.bind(this),this.getVersion=function(e){c(e)&&e(this.version)}.bind(this)},f=function(e,t){var r=JSON.stringify(t);navigator.sendBeacon(e,r)},p=function(e,t){var r=JSON.stringify(t),n=new XMLHttpRequest;n.open("POST",e),n.send(r)};function h(e){var t=new d({requestFn:e});return"undefined"!=typeof window&&function(e){var t,r=e.AlgoliaAnalyticsObject;if(r){var n=(t=this,function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];e&&c(t[e])?t[e].apply(t,r):console.warn("The method `"+e+"` doesn't exist.")}),o=e[r];o.queue=o.queue||[];var i=o.queue;i.forEach(function(e){var t=[].slice.call(e),r=t[0],o=t.slice(1);n.apply(void 0,[r].concat(o))}),i.push=function(e){var t=[].slice.call(e),r=t[0],o=t.slice(1);n.apply(void 0,[r].concat(o))}}}.call(t,window),t}var w=h(function(){if(function(){try{return Boolean(navigator.sendBeacon)}catch(e){return!1}}())return f;if(function(){try{return Boolean(XMLHttpRequest)}catch(e){return!1}}())return p;throw new Error("Could not find a supported HTTP request client in this environment.")}());e.createInsightsClient=h,e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}),function(){window.algolia={};var e=AlgoliaAnalytics.default,t="prd"==window.ENV&&"true"!=Cookies.get("fake");function r(e){return sessionStorage&&null!==sessionStorage.getItem("algProductInfo")?JSON.parse(sessionStorage.getItem("algProductInfo"))[e]:""}t&&e.init({appId:Config.ALGOLIA_CONFIG.appId,apiKey:Config.ALGOLIA_CONFIG.apiKey}),window.algolia.sendAlgoliaInsightsEvent=function(r,n){t&&e[r](n)},window.algolia.productAddedToCart=function(e,t){var n="search"==t?"Search Result Added To Cart":"Product Added To Cart",o="search"==t?"convertedObjectIDsAfterSearch":"convertedObjectIDs",i={userToken:window.user_id,index:r("index"),eventName:n,objectIDs:e};"search"==t&&(i.queryID=r("queryId")),("category"==t||"search"==t&&i.queryID)&&window.algolia.sendAlgoliaInsightsEvent(o,i)},window.algolia.deleteLineItem=function(e){var t=[];localStorage&&localStorage.getItem("algCartInfo")&&JSON.parse(localStorage.getItem("algCartInfo")).forEach(function(r){r.lineItemId!=e&&t.push(r)}),localStorage&&localStorage.setItem("algCartInfo",JSON.stringify(t))},window.algolia.updateCartSession=function(e,t,n,o){var i=[{productId:e,cartType:t,productKey:n,index:r("index"),queryId:r("queryId"),lineItemId:o.lineItemId,lineItemType:o.lineItemType}];localStorage&&localStorage.getItem("algCartInfo")&&JSON.parse(localStorage.getItem("algCartInfo")).forEach(function(e){i.push(e)}),localStorage&&localStorage.setItem("algCartInfo",JSON.stringify(i))},window.algolia.updateAlgoliaCartInfo=function(e){var t=r("index"),n=r("queryId"),o=sessionStorage&&"true"==sessionStorage.getItem("alg_search")?"search":"category",i=[];if(localStorage&&localStorage.getItem("algCartInfo")&&(i=JSON.parse(localStorage.getItem("algCartInfo"))),e&&e.length){var a,s=_createForOfIteratorHelper(e);try{for(s.s();!(a=s.n()).done;){var c=a.value,l=c.productId,u=c.productKey,d=c.id,f=c.custom;if(f&&f.fields&&"mainItem"===f.fields.lineItemType){var p={productId:l,cartType:o,productKey:u,index:t,queryId:n,lineItemId:d,lineItemType:f.fields.lineItemType};i.push(p)}}}catch(e){s.e(e)}finally{s.f()}}localStorage&&localStorage.setItem("algCartInfo",JSON.stringify(i))},window.algolia.productPurchased=function(){if(localStorage&&localStorage.getItem("algCartInfo")){var e=JSON.parse(localStorage.getItem("algCartInfo"));if(e&&e.length>0){var t=e.filter(function(e){return"category"==e.cartType})||[],r=e.filter(function(e){return"search"==e.cartType})||[];if(t.length>0){var n=function(e,t){for(var r={},n=0;n<e.length;n++){var o=e[n].index;r[o]||(r[o]=[]),r[o].push(e[n])}return r}(t);for(var o in n){var i={userToken:window.user_id,index:o,eventName:"Product Purchased",objectIDs:n[o].map(function(e){return e.productKey})};window.algolia.sendAlgoliaInsightsEvent("convertedObjectIDs",i)}}r.length>0&&r.forEach(function(e){var t={userToken:window.user_id,eventName:"Search Result Purchased",index:e.index,queryID:e.queryId,objectIDs:[e.productKey]};window.algolia.sendAlgoliaInsightsEvent("convertedObjectIDsAfterSearch",t)}),localStorage.removeItem("algCartInfo")}}},window.algolia.sendCategoryPageViewEvent=function(e,t,r){return window.algolia.sendAlgoliaInsightsEvent("viewedFilters",{userToken:t,index:e,eventName:"Category Page Viewed",filters:["category:".concat(r)]})},window.algolia.sendProductClickedEvent=function(e,t,r){return window.algolia.sendAlgoliaInsightsEvent("clickedObjectIDs",{userToken:t,index:e,eventName:"Product Clicked",objectIDs:[r]})},window.algolia.sendSearchResultClickedEvent=function(e,t,r,n,o){return window.algolia.sendAlgoliaInsightsEvent("clickedObjectIDsAfterSearch",{userToken:t,index:e,eventName:"Search Result Clicked",objectIDs:[r],queryID:n,positions:[o]})},window.algolia.sendProductViewedEvent=function(e,t,r){return window.algolia.sendAlgoliaInsightsEvent("viewedObjectIDs",{userToken:t,index:e,eventName:"Product Viewed",objectIDs:[r]})},window.algolia.sendFilterClickEvent=function(e,t,r){return window.algolia.sendAlgoliaInsightsEvent("clickedFilters",{userToken:t,index:e,eventName:"Filter Clicked",filters:[r]})}}();