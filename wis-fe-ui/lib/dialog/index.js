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

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/dialog/src/Dialog.vue
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


/* harmony default export */ var Dialog = ({
    name: 'app',
    data: function data() {
        return {
            show: false,
            title: '',
            content: '',
            confirmBtn: '',
            cancelBtn: '',
            confirmCallback: function confirmCallback() {},
            cancelCallback: function cancelCallback() {},
            longContent: false
        };
    },
    mounted: function mounted() {},

    computed: {
        output: function output() {
            if (typeof this.content == 'string') {
                return [this.content];
            } else {
                return this.content;
            }
        }
    },
    methods: {
        btnClick: function btnClick(btnType) {
            this.show = false;
            this[btnType + 'Callback']();
        }
    },
    watch: {
        content: function content() {
            var _this = this;

            this.$nextTick().then(function () {
                var contents = _this.$refs.content;
                if (contents.length == 1) {
                    var item = contents[0];
                    var pWidth = item.offsetWidth;
                    var pHeight = item.offsetHeight;
                    var rate = pHeight / pWidth;
                    if (rate > 0.079) {
                        _this.longContent = true;
                    } else {
                        _this.longContent = false;
                    }
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-b2b9bd50","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/dialog/src/Dialog.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"dialogMask"},[_c('div',{staticClass:"dialog"},[(_vm.title)?_c('p',{staticClass:"dialog-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),_vm._l((_vm.output),function(item){return _c('p',{key:item,ref:"content",refInFor:true,staticClass:"dialog-content",class:{left:_vm.longContent}},[_vm._v(_vm._s(item))])}),_vm._v(" "),_c('div',{staticClass:"btn-container",class:{double:_vm.cancelBtn}},[(_vm.cancelBtn)?_c('div',{on:{"click":function($event){_vm.btnClick('cancel')}}},[_vm._v(_vm._s(_vm.cancelBtn))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"confirmBtn",on:{"click":function($event){_vm.btnClick('confirm')}}},[_vm._v(_vm._s(_vm.confirmBtn))])])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_Dialog = (esExports);
// CONCATENATED MODULE: ./src/dialog/src/Dialog.vue
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
  Dialog,
  src_Dialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var dialog_src_Dialog = (Component.exports);

// CONCATENATED MODULE: ./src/dialog/src/index.js



var instance = void 0;
var DialogConstructor = external__vue__default.a.extend(dialog_src_Dialog);

var initInstance = function initInstance(bottom) {
    instance = new DialogConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var dialog = function dialog() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title,
        _ref$content = _ref.content,
        content = _ref$content === undefined ? '' : _ref$content,
        _ref$confirmBtn = _ref.confirmBtn,
        confirmBtn = _ref$confirmBtn === undefined ? '确定' : _ref$confirmBtn,
        _ref$cancelBtn = _ref.cancelBtn,
        cancelBtn = _ref$cancelBtn === undefined ? '' : _ref$cancelBtn,
        _ref$confirmCallback = _ref.confirmCallback,
        confirmCallback = _ref$confirmCallback === undefined ? function () {} : _ref$confirmCallback,
        _ref$cancelCallback = _ref.cancelCallback,
        cancelCallback = _ref$cancelCallback === undefined ? function () {} : _ref$cancelCallback;

    instance.title = title;
    instance.content = content;
    instance.confirmCallback = confirmCallback;
    instance.cancelCallback = cancelCallback;
    instance.confirmBtn = confirmBtn;
    instance.cancelBtn = cancelBtn;
    instance.show = true;
};
/* harmony default export */ var src = __webpack_exports__["default"] = ({
    install: function install(Vue, options) {
        initInstance();
        Vue.prototype.$dialog = dialog;
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


/***/ })
/******/ ]);