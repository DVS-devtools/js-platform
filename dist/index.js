// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.JsPlatform = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class JsPlatform
 * @description JsPlatform is a library that allow you to get platform wherever you are
 * (iphone, ipad, android or desktop);
 * @param {String} uaString user agent string
 *
 * @example
 * const Platform = new JsPlatform();
 *
 * switch(Platform.OS){
 *  case 'android':
 *      console.log("I'm an android! ");
 *      break;
 *  case 'ios':
 *      console.log("I'm an ios! ");
 *      break;
 *  case 'desktop':
 *      console.log("I'm a desktop! ");
 *      break;
 * }
 */
var JsPlatform =
/*#__PURE__*/
function () {
  function JsPlatform() {
    var uaString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;

    _classCallCheck(this, JsPlatform);

    this.uaString = uaString;
  }
  /**
   * Get the user agent string
   * @return {String} user agent string.
   * @example
   * const myUserAgent = JsPlatform.OS;
   */


  _createClass(JsPlatform, [{
    key: "OS",
    get: function get() {
      var IS_IPAD = /iPad/i.test(this.uaString);
      var IS_ANDROID = /Android/i.test(this.uaString); // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
      // to identify iPhones, we need to exclude iPads.
      // http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

      var IS_IPHONE = /iPhone/i.test(this.uaString) && !IS_IPAD;
      var IS_IPOD = /iPod/i.test(this.uaString);
      var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
      var platform = '';

      switch (true) {
        case IS_ANDROID:
          platform = 'android';
          return platform;

        case IS_IOS:
          platform = 'ios';
          return platform;

        default:
          platform = 'desktop';
          return platform;
      }
    }
  }]);

  return JsPlatform;
}();

exports.JsPlatform = JsPlatform;

var _default = new JsPlatform();

exports.default = _default;
},{}]},{},["Focm"], null)