module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_jsonp__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_jsonp__);
 // https://www.npmjs.com/package/vue-jsonp

/* harmony default export */ __webpack_exports__["default"] = ({
    install: function install(Vue) {
        Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_jsonp___default.a);
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Index = factory();
  }
}(this, function() {
/**
 * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
 * # Carry Your World #
 *
 * @author: LancerComet
 * @license: MIT
 */

var _timeout = null

var vueJsonp = {
  install: function (Vue, options) {
    Vue.jsonp = jsonp
    Vue.prototype.$jsonp = jsonp

    if (typeof options === 'number') {
      _timeout = options
    }
  }
}

/**
 * JSONP function.
 * @param { String } url Target URL address.
 * @param { Object } params Querying params object.
 * @param { Number } timeout Timeout setting (ms).
 *
 * @example
 *   Vue.jsonp('/url', {
 *     callbackQuery: ''
 *     callbackName: '',
 *     name: 'LancerComet',
 *     age: 26
 *   }, 1000)
 */
function jsonp (url, params, timeout) {
  params = params || {}
  timeout = timeout || _timeout

  return new Promise(function (resolve, reject) {
    if (typeof url !== 'string') {
      throw new Error('[Vue.jsonp] Type of param "url" is not string.')
    }

    var callbackQuery = params.callbackQuery || 'callback'
    var callbackName = params.callbackName || 'jsonp_' + randomStr()

    params[callbackQuery] = callbackName

    // Remove callbackQuery and callbackName.
    delete params.callbackQuery
    delete params.callbackName

    // Convert params to querying str.
    var queryStrs = []
    Object.keys(params).forEach(function (queryName) {
      queryStrs = queryStrs.concat(formatParams(queryName, params[queryName]))
    })

    var queryStr = flatten(queryStrs).join('&')

    // Timeout timer.
    var timeoutTimer = null

    // Setup timeout.
    if (typeof timeout === 'number') {
      timeoutTimer = setTimeout(function () {
        removeErrorListener()
        headNode.removeChild(paddingScript)
        delete window[callbackName]
        reject({ statusText: 'Request Timeout', status: 408 })
      }, timeout)
    }

    // Create global function.
    window[callbackName] = function (json) {
      clearTimeout(timeoutTimer)
      removeErrorListener()
      headNode.removeChild(paddingScript)
      resolve(json)
      delete window[callbackName]
    }

    // Create script element.
    var headNode = document.querySelector('head')
    var paddingScript = document.createElement('script')

    // Add error listener.
    paddingScript.addEventListener('error', onError)

    // Append to head element.
    paddingScript.src = url + (/\?/.test(url) ? '&' : '?') + queryStr
    headNode.appendChild(paddingScript)

    /**
     * Padding script on-error event.
     * @param {Event} event
     */
    function onError (event) {
      removeErrorListener()
      clearTimeout(timeoutTimer)
      reject({
        status: 400,
        statusText: 'Bad Request'
      })
    }

    /**
     * Remove on-error event listener.
     */
    function removeErrorListener () {
      paddingScript.removeEventListener('error', onError)
    }
  })

}

/**
 * Generate random string.
 * @return { String }
 */
function randomStr () {
  return (Math.floor(Math.random() * 100000) * Date.now()).toString(16)
}

/**
 * Format params into querying string.
 * @param {{}}
 * @return {string[]}
 */
function formatParams (queryName, value) {
  queryName = queryName.replace(/=/g, '')
  var result = []

  switch (value.constructor) {
    case String:
    case Number:
    case Boolean:
      result.push(encodeURIComponent(queryName) + '=' + encodeURIComponent(value))
      break

    case Array:
      value.forEach(function (item) {
        result = result.concat(formatParams(queryName + '[]=', item))
      })
      break

    case Object:
      Object.keys(value).forEach(function (key) {
        var item = value[key]
        result = result.concat(formatParams(queryName + '[' + key + ']', item))
      })
      break
  }

  return result
}

/**
 * Flat querys.
 *
 * @param {any} array
 * @returns
 */
function flatten (array) {
  var querys = []
  array.forEach(function (item) {
    if (typeof item === 'string') {
      querys.push(item)
    } else {
      querys = querys.concat(flatten(item))
    }
  })
  return querys
}

return vueJsonp;
}));


/***/ })
/******/ ]);