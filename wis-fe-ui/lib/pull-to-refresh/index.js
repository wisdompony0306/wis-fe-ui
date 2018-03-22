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

// EXTERNAL MODULE: external "vue"
var external__vue_ = __webpack_require__(1);
var external__vue__default = /*#__PURE__*/__webpack_require__.n(external__vue_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pull-to-refresh/src/PullToRefresh.vue
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PullToRefresh = ({
  name: 'pull-to-refresh',
  computed: {},
  methods: {},
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-eb061980","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pull-to-refresh/src/PullToRefresh.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pull-to-refresh-material__control"},[_c('svg',{staticClass:"pull-to-refresh-material__icon",attrs:{"fill":"#03a9f4","width":"0.7rem","height":"0.7rem","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}})]),_vm._v(" "),_c('svg',{staticClass:"pull-to-refresh-material__spinner",attrs:{"width":"0.7rem","height":"0.7rem","viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"pull-to-refresh-material__path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none","stroke-width":"4","stroke-miterlimit":"10"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_PullToRefresh = (esExports);
// CONCATENATED MODULE: ./src/pull-to-refresh/src/PullToRefresh.vue
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PullToRefresh,
  src_PullToRefresh,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var pull_to_refresh_src_PullToRefresh = (Component.exports);

// EXTERNAL MODULE: ./src/pull-to-refresh/node_modules/mobile-pull-to-refresh/dist/pullToRefresh.js
var pullToRefresh = __webpack_require__(4);
var pullToRefresh_default = /*#__PURE__*/__webpack_require__.n(pullToRefresh);

// EXTERNAL MODULE: ./src/pull-to-refresh/src/animates.js
var animates = __webpack_require__(5);
var animates_default = /*#__PURE__*/__webpack_require__.n(animates);

// CONCATENATED MODULE: ./src/pull-to-refresh/src/index.js




// 原版的样式是px为单位的，不支持高清，已经做替换
// import 'mobile-pull-to-refresh/dist/styles/material/style.css';

var PullToRefreshConstructor = external__vue__default.a.extend(pull_to_refresh_src_PullToRefresh);

var initInstance = function initInstance(bottom) {
    var instance = new PullToRefreshConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

/* harmony default export */ var src = __webpack_exports__["default"] = ({
    install: function install(Vue) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$selector = _ref.selector,
            selector = _ref$selector === undefined ? 'body' : _ref$selector;

        initInstance();
        pullToRefresh_default()({
            container: document.querySelector(selector),
            animates: animates_default.a,
            // animates: ptrAnimatesMaterial2,
            // animates: ptrAnimatesIos,

            refresh: function refresh() {
                return new Promise(function (resolve) {
                    window.document.dispatchEvent(new CustomEvent('pull-to-refresh', { detail: { finish: resolve } }));
                });
            }
        });
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pullToRefresh = factory());
}(this, (function () { 'use strict';

function ontouchpan (_ref) {
  var element = _ref.element,
      onpanstart = _ref.onpanstart,
      onpanmove = _ref.onpanmove,
      onpanend = _ref.onpanend;

  var touchId = void 0,
      startX = void 0,
      startY = void 0,
      panstartCalled = void 0;

  function calcMovement(e) {
    var touch = Array.prototype.slice.call(e.changedTouches).filter(function (touch) {
      return touch.identifier === touchId;
    })[0];
    if (!touch) return false;

    e.deltaX = touch.screenX - startX;
    e.deltaY = touch.screenY - startY;
    return true;
  }

  function touchstart(e) {
    var touch = e.changedTouches[0];
    touchId = touch.identifier;
    startX = touch.screenX;
    startY = touch.screenY;
  }

  function touchmove(e) {
    if (calcMovement(e)) {
      if (onpanstart && !panstartCalled) {
        onpanstart(e);
        panstartCalled = true;
      }

      onpanmove(e);
    }
  }

  function touchend(e) {
    if (calcMovement(e)) onpanend(e);
  }

  element.addEventListener('touchstart', touchstart);
  if (onpanmove) element.addEventListener('touchmove', touchmove);
  if (onpanend) element.addEventListener('touchend', touchend);

  return function () {
    element.removeEventListener('touchstart', touchstart);
    if (onpanmove) element.removeEventListener('touchmove', touchmove);
    if (onpanend) element.removeEventListener('touchend', touchend);
  };
}

function pullToRefresh (opts) {
  opts = Object.assign({
    // https://bugs.chromium.org/p/chromium/issues/detail?id=766938
    scrollable: document.body,
    threshold: 150,
    onStateChange: function onStateChange() {/* noop */}
  }, opts);

  var _opts = opts,
      container = _opts.container,
      scrollable = _opts.scrollable,
      threshold = _opts.threshold,
      refresh = _opts.refresh,
      onStateChange = _opts.onStateChange,
      animates = _opts.animates;


  var distance = void 0,
      offset = void 0,
      state = void 0; // state: pulling, aborting, reached, refreshing, restoring

  function addClass(cls) {
    container.classList.add('pull-to-refresh--' + cls);
  }

  function removeClass(cls) {
    container.classList.remove('pull-to-refresh--' + cls);
  }

  function scrollTop() {
    if (!scrollable || [window, document, document.body, document.documentElement].includes(scrollable)) {
      return document.documentElement.scrollTop || document.body.scrollTop;
    } else {
      return scrollable.scrollTop;
    }
  }

  return ontouchpan({
    element: container,

    onpanmove: function onpanmove(e) {
      var d = e.deltaY;

      if (scrollTop() > 0 || d < 0 && !state || state in { aborting: 1, refreshing: 1, restoring: 1 }) return;

      e.preventDefault();

      if (distance == null) {
        offset = d;
        state = 'pulling';
        addClass(state);
        onStateChange(state, opts);
      }

      d = d - offset;
      if (d < 0) d = 0;
      distance = d;

      if (d >= threshold && state !== 'reached' || d < threshold && state !== 'pulling') {
        removeClass(state);
        state = state === 'reached' ? 'pulling' : 'reached';
        addClass(state);
        onStateChange(state, opts);
      }

      animates.pulling(d, opts);
    },
    onpanend: function onpanend() {
      if (state == null) return;

      if (state === 'pulling') {
        removeClass(state);
        state = 'aborting';
        onStateChange(state);
        addClass(state);
        animates.aborting(opts).then(function () {
          removeClass(state);
          distance = state = offset = null;
          onStateChange(state);
        });
      } else if (state === 'reached') {
        removeClass(state);
        state = 'refreshing';
        addClass(state);
        onStateChange(state, opts);
        animates.refreshing(opts);

        refresh().then(function () {
          removeClass(state);
          state = 'restoring';
          addClass(state);
          onStateChange(state);

          animates.restoring(opts).then(function () {
            removeClass(state);
            distance = state = offset = null;
            onStateChange(state);
          });
        });
      }
    }
  });
}

return pullToRefresh;

})));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ptrAnimatesMaterial = factory();
})(this, function () {
  'use strict';

  var animates = {
    pulling: function pulling(d, opts) {
      if (!opts.elControl) opts.elControl = opts.container.querySelector('.pull-to-refresh-material__control');

      var threshold = opts.threshold,
          elControl = opts.elControl;

      var p = d / threshold;
      if (p > 1) p = 1;else p = p * p * p;
      var y = d / 2.5;

      elControl.style.opacity = p;
      elControl.style.transform = y ? 'translate3d(-50%, ' + y / 30 + 'rem, 0) rotate(' + 360 * p + 'deg)' : '';
    },
    refreshing: function refreshing(_ref) {
      var elControl = _ref.elControl,
          threshold = _ref.threshold;

      elControl.style.transition = 'transform 0.2s';
      elControl.style.transform = 'translate3d(-50%, ' + threshold / 2.5 / 30 + 'rem, 0)';
    },
    aborting: function aborting(_ref2) {
      var elControl = _ref2.elControl;

      return new Promise(function (resolve) {
        if (elControl.style.transform) {
          elControl.style.transition = 'transform 0.3s, opacity 0.15s';
          elControl.style.transform = 'translate3d(-50%, 0, 0)';
          elControl.style.opacity = 0;
          elControl.addEventListener('transitionend', function () {
            elControl.style.transition = '';
            resolve();
          });
        } else {
          resolve();
        }
      });
    },
    restoring: function restoring(_ref3) {
      var elControl = _ref3.elControl;

      return new Promise(function (resolve) {
        elControl.style.transition = 'transform 0.3s';
        elControl.style.transform += ' scale(0.01)';
        elControl.addEventListener('transitionend', function () {
          elControl.style.transition = '';
          resolve();
        });
      });
    }
  };

  return animates;
});

/***/ })
/******/ ]);