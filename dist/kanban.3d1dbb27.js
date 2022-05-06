// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1W0ds":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "c65067373d1dbb27";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fuzMm":[function(require,module,exports) {
var _jkanbanMinJs = require("../public/libraries/jkanban.min.js");
let tasks = Object.entries(localStorage);
console.log(JSON.parse(tasks[0][1]).task.taskDescription);
//for (let i = 0; i < tasks; i++) {
//   console.log(JSON.parse(tasks[i][i]).task.taskDescription);
//}
//for loop .. 0 until length of array !
var kanban = new jKanban({
    element: '#kanban_container',
    gutter: '15px',
    widthBoard: '250px',
    responsivePercentage: false,
    dragItems: true,
    boards: [
        {
            id: 'toDo',
            title: "To Do",
            item: [],
            color: "#178bff",
            order: 1
        },
        {
            id: 'inProgress',
            title: "In Progress",
            item: [],
            color: "#3dd66b",
            order: 2
        },
        {
            id: 'done',
            title: "Done",
            item: [],
            color: "#3dd66b",
            order: 3
        }
    ],
    dragBoards: false,
    itemAddOptions: {
        enabled: false,
        content: '+',
        class: 'kanban-title-button btn btn-default btn-xs',
        footer: false // position the button on footer
    },
    itemHandleOptions: {
        enabled: false,
        handleClass: "item_handle",
        customCssHandler: "drag_handler",
        customCssIconHandler: "drag_handler_icon",
        customHandler: "<span class='item_handle'>+</span> %title% " // your entirely customized handler. Use %title% to position item title 
    },
    click: function(el) {
    },
    context: function(el, event) {
    },
    dragEl: function(el, source) {
    },
    dragendEl: function(el) {
    },
    dropEl: function(el, target, source, sibling) {
    },
    dragBoard: function(el, source) {
    },
    dragendBoard: function(el) {
    },
    buttonClick: function(el, boardId) {
    },
    propagationHandlers: []
});

},{"../public/libraries/jkanban.min.js":"9f6WW"}],"9f6WW":[function(require,module,exports) {
var global = arguments[3];
(function() {
    return function e(t, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var d = "function" == typeof require && undefined;
                    if (!c && d) return d(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s;
                }
                var l = n[a] = {
                    exports: {
                    }
                };
                t[a][0].call(l.exports, function(e1) {
                    return i(t[a][1][e1] || e1);
                }, l, l.exports, e, t, n, o);
            }
            return n[a].exports;
        }
        for(var r = "function" == typeof require && undefined, a = 0; a < o.length; a++)i(o[a]);
        return i;
    };
})()({
    1: [
        function(e, t, n) {
            var o = e("dragula");
            !function() {
                this.jKanban = function() {
                    var e1 = this, t1 = {
                        enabled: !1
                    }, n1 = {
                        enabled: !1
                    };
                    this._disallowedItemProperties = [
                        "id",
                        "title",
                        "click",
                        "context",
                        "drag",
                        "dragend",
                        "drop",
                        "order"
                    ], this.element = "", this.container = "", this.boardContainer = [], this.handlers = [], this.dragula = o, this.drake = "", this.drakeBoard = "", this.itemAddOptions = n1, this.itemHandleOptions = t1;
                    var i = {
                        element: "",
                        gutter: "15px",
                        widthBoard: "250px",
                        responsive: "700",
                        responsivePercentage: !1,
                        boards: [],
                        dragBoards: !0,
                        dragItems: !0,
                        itemAddOptions: n1,
                        itemHandleOptions: t1,
                        dragEl: function(e2, t2) {
                        },
                        dragendEl: function(e2) {
                        },
                        dropEl: function(e2, t2, n2, o1) {
                        },
                        dragBoard: function(e2, t2) {
                        },
                        dragendBoard: function(e2) {
                        },
                        dropBoard: function(e2, t2, n2, o1) {
                        },
                        click: function(e2) {
                        },
                        context: function(e2, t2) {
                        },
                        buttonClick: function(e2, t2) {
                        }
                    };
                    function r(t2, n2) {
                        t2.addEventListener("click", function(t3) {
                            t3.preventDefault(), e1.options.click(this), "function" == typeof this.clickfn && this.clickfn(this);
                        });
                    }
                    function a(t2, n2) {
                        t2.addEventListener ? t2.addEventListener("contextmenu", function(t3) {
                            t3.preventDefault(), e1.options.context(this, t3), "function" == typeof this.contextfn && this.contextfn(this, t3);
                        }, !1) : t2.attachEvent("oncontextmenu", function() {
                            e1.options.context(this), "function" == typeof this.contextfn && this.contextfn(this), window.event.returnValue = !1;
                        });
                    }
                    function c(t2, n2) {
                        t2.addEventListener("click", function(t3) {
                            t3.preventDefault(), e1.options.buttonClick(this, n2);
                        });
                    }
                    function d(t2) {
                        var n2 = [];
                        return e1.options.boards.map(function(e2) {
                            if (e2.id === t2) return n2.push(e2);
                        }), n2[0];
                    }
                    function s(t2, n2) {
                        for(var o1 in n2)e1._disallowedItemProperties.indexOf(o1) > -1 || t2.setAttribute("data-" + o1, n2[o1]);
                    }
                    function l(t2) {
                        var n2 = "title" in t2 ? t2.title : "";
                        if (e1.options.itemHandleOptions.enabled) {
                            if ((void 0) !== (e1.options.itemHandleOptions.customHandler || void 0)) return n2 = "<div> " + e1.options.itemHandleOptions.customHandler.replace(/%([^%]+)%/g, (e2, n3)=>(void 0) !== t2[n3] ? t2[n3] : ""
                            ) + " </div>";
                            var o1 = e1.options.itemHandleOptions.customCssHandler, i1 = e1.options.itemHandleOptions.customCssIconHandler, r1 = e1.options.itemHandleOptions.customItemLayout;
                            (void 0) === (o1 || void 0) && (o1 = "drag_handler"), (void 0) === (i1 || void 0) && (i1 = o1 + "_icon"), (void 0) === (r1 || void 0) && (r1 = ""), n2 = "<div class='item_handle " + o1 + "'><i class='item_handle " + i1 + "'></i></div><div>" + n2 + "</div>";
                        }
                        return n2;
                    }
                    arguments[0] && "object" == typeof arguments[0] && (this.options = (function(e2, t2) {
                        var n2;
                        for(n2 in t2)t2.hasOwnProperty(n2) && (e2[n2] = t2[n2]);
                        return e2;
                    })(i, arguments[0])), this.__getCanMove = function(t2) {
                        return e1.options.itemHandleOptions.enabled ? e1.options.itemHandleOptions.handleClass ? t2.classList.contains(e1.options.itemHandleOptions.handleClass) : t2.classList.contains("item_handle") : !!e1.options.dragItems;
                    }, this.init = function() {
                        !function() {
                            e1.element = document.querySelector(e1.options.element);
                            var t2 = document.createElement("div");
                            t2.classList.add("kanban-container"), e1.container = t2, document.querySelector(e1.options.element).dataset.hasOwnProperty("board") ? (url = document.querySelector(e1.options.element).dataset.board, window.fetch(url, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then((t3)=>{
                                t3.json().then(function(t4) {
                                    e1.options.boards = t4, e1.addBoards(e1.options.boards, !0);
                                });
                            }).catch((e2)=>{
                                console.log("Error: ", e2);
                            })) : e1.addBoards(e1.options.boards, !0);
                            e1.element.appendChild(e1.container);
                        }(), window.innerWidth > e1.options.responsive && (e1.drakeBoard = e1.dragula([
                            e1.container
                        ], {
                            moves: function(t2, n2, o2, i2) {
                                return !!e1.options.dragBoards && (o2.classList.contains("kanban-board-header") || o2.classList.contains("kanban-title-board"));
                            },
                            accepts: function(e2, t2, n2, o2) {
                                return t2.classList.contains("kanban-container");
                            },
                            revertOnSpill: !0,
                            direction: "horizontal"
                        }).on("drag", function(t2, n2) {
                            t2.classList.add("is-moving"), e1.options.dragBoard(t2, n2), "function" == typeof t2.dragfn && t2.dragfn(t2, n2);
                        }).on("dragend", function(t2) {
                            !function() {
                                for(var t3 = 1, n2 = 0; n2 < e1.container.childNodes.length; n2++)e1.container.childNodes[n2].dataset.order = t3++;
                            }(), t2.classList.remove("is-moving"), e1.options.dragendBoard(t2), "function" == typeof t2.dragendfn && t2.dragendfn(t2);
                        }).on("drop", function(t2, n2, o2, i2) {
                            t2.classList.remove("is-moving"), e1.options.dropBoard(t2, n2, o2, i2), "function" == typeof t2.dropfn && t2.dropfn(t2, n2, o2, i2);
                        }), e1.drake = e1.dragula(e1.boardContainer, {
                            moves: function(t2, n2, o2, i2) {
                                return e1.__getCanMove(o2);
                            },
                            revertOnSpill: !0
                        }).on("cancel", function(t2, n2, o2) {
                            e1.enableAllBoards();
                        }).on("drag", function(t2, n2) {
                            var o2 = t2.getAttribute("class");
                            if ("" !== o2 && o2.indexOf("not-draggable") > -1) e1.drake.cancel(!0);
                            else {
                                t2.classList.add("is-moving"), e1.options.dragEl(t2, n2);
                                var i2 = d(n2.parentNode.dataset.id);
                                (void 0) !== i2.dragTo && e1.options.boards.map(function(t3) {
                                    -1 === i2.dragTo.indexOf(t3.id) && t3.id !== n2.parentNode.dataset.id && e1.findBoard(t3.id).classList.add("disabled-board");
                                }), null !== t2 && "function" == typeof t2.dragfn && t2.dragfn(t2, n2);
                            }
                        }).on("dragend", function(t2) {
                            e1.options.dragendEl(t2), null !== t2 && "function" == typeof t2.dragendfn && t2.dragendfn(t2);
                        }).on("drop", function(t2, n2, o2, i3) {
                            e1.enableAllBoards();
                            var r2 = d(o2.parentNode.dataset.id);
                            ((void 0) !== r2.dragTo && -1 === r2.dragTo.indexOf(n2.parentNode.dataset.id) && n2.parentNode.dataset.id !== o2.parentNode.dataset.id && e1.drake.cancel(!0), null !== t2) && (!1 === e1.options.dropEl(t2, n2, o2, i3) && e1.drake.cancel(!0), t2.classList.remove("is-moving"), "function" == typeof t2.dropfn && t2.dropfn(t2, n2, o2, i3));
                        }));
                    }, this.enableAllBoards = function() {
                        var e2 = document.querySelectorAll(".kanban-board");
                        if (e2.length > 0 && (void 0) !== e2) for(var t2 = 0; t2 < e2.length; t2++)e2[t2].classList.remove("disabled-board");
                    }, this.addElement = function(t2, n2) {
                        var o2 = e1.element.querySelector('[data-id="' + t2 + '"] .kanban-drag'), i3 = document.createElement("div");
                        return i3.classList.add("kanban-item"), (void 0) !== n2.id && "" !== n2.id && i3.setAttribute("data-eid", n2.id), n2.class && Array.isArray(n2.class) && n2.class.forEach(function(e2) {
                            i3.classList.add(e2);
                        }), i3.innerHTML = l(n2), i3.clickfn = n2.click, i3.contextfn = n2.context, i3.dragfn = n2.drag, i3.dragendfn = n2.dragend, i3.dropfn = n2.drop, s(i3, n2), r(i3), a(i3), e1.options.itemHandleOptions.enabled && (i3.style.cursor = "default"), o2.appendChild(i3), e1;
                    }, this.addForm = function(t2, n2) {
                        var o2 = e1.element.querySelector('[data-id="' + t2 + '"] .kanban-drag'), i3 = n2.getAttribute("class");
                        return n2.setAttribute("class", i3 + " not-draggable"), o2.appendChild(n2), e1;
                    }, this.addBoards = function(t2, n2) {
                        if (e1.options.responsivePercentage) {
                            if (e1.container.style.width = "100%", e1.options.gutter = "1%", window.innerWidth > e1.options.responsive) var o2 = (100 - 2 * t2.length) / t2.length;
                            else o2 = 100 - 2 * t2.length;
                        } else o2 = e1.options.widthBoard;
                        var i3 = e1.options.itemAddOptions.enabled, d1 = e1.options.itemAddOptions.content, u = e1.options.itemAddOptions.class, f = e1.options.itemAddOptions.footer;
                        for(var p in t2){
                            var v = t2[p];
                            n2 || e1.options.boards.push(v), e1.options.responsivePercentage || ("" === e1.container.style.width ? e1.container.style.width = parseInt(o2) + 2 * parseInt(e1.options.gutter) + "px" : e1.container.style.width = parseInt(e1.container.style.width) + parseInt(o2) + 2 * parseInt(e1.options.gutter) + "px");
                            var m = document.createElement("div");
                            m.dataset.id = v.id, m.dataset.order = e1.container.childNodes.length + 1, m.classList.add("kanban-board"), e1.options.responsivePercentage ? m.style.width = o2 + "%" : m.style.width = o2, m.style.marginLeft = e1.options.gutter, m.style.marginRight = e1.options.gutter;
                            var h = document.createElement("header");
                            if ("" !== v.class && (void 0) !== v.class) var g = v.class.split(",");
                            else g = [];
                            h.classList.add("kanban-board-header"), g.map(function(e2) {
                                e2 = e2.replace(/^[ ]+/g, ""), h.classList.add(e2);
                            }), h.innerHTML = '<div class="kanban-title-board">' + v.title + "</div>";
                            var y = document.createElement("main");
                            if (y.classList.add("kanban-drag"), "" !== v.bodyClass && (void 0) !== v.bodyClass) var b = v.bodyClass.split(",");
                            else b = [];
                            for(var w in b.map(function(e2) {
                                y.classList.add(e2);
                            }), e1.boardContainer.push(y), v.item){
                                var E = v.item[w], T = document.createElement("div");
                                T.classList.add("kanban-item"), E.id && (T.dataset.eid = E.id), E.class && Array.isArray(E.class) && E.class.forEach(function(e2) {
                                    T.classList.add(e2);
                                }), T.innerHTML = l(E), T.clickfn = E.click, T.contextfn = E.context, T.dragfn = E.drag, T.dragendfn = E.dragend, T.dropfn = E.drop, s(T, E), r(T), a(T), e1.options.itemHandleOptions.enabled && (T.style.cursor = "default"), y.appendChild(T);
                            }
                            var x = document.createElement("footer");
                            if (i3) {
                                var C = document.createElement("BUTTON"), O = document.createTextNode(d1 || "+");
                                C.setAttribute("class", u || "kanban-title-button btn btn-default btn-xs"), C.appendChild(O), f ? x.appendChild(C) : h.appendChild(C), c(C, v.id);
                            }
                            m.appendChild(h), m.appendChild(y), m.appendChild(x), e1.container.appendChild(m);
                        }
                        return e1;
                    }, this.findBoard = function(t2) {
                        return e1.element.querySelector('[data-id="' + t2 + '"]');
                    }, this.getParentBoardID = function(t2) {
                        return "string" == typeof t2 && (t2 = e1.element.querySelector('[data-eid="' + t2 + '"]')), null === t2 ? null : t2.parentNode.parentNode.dataset.id;
                    }, this.moveElement = function(e2, t2, n2) {
                        if (e2 !== this.getParentBoardID(t2)) return this.removeElement(t2), this.addElement(e2, n2);
                    }, this.replaceElement = function(t2, n2) {
                        var o3 = t2;
                        return "string" == typeof o3 && (o3 = e1.element.querySelector('[data-eid="' + t2 + '"]')), o3.innerHTML = l(n2), o3.clickfn = n2.click, o3.contextfn = n2.context, o3.dragfn = n2.drag, o3.dragendfn = n2.dragend, o3.dropfn = n2.drop, s(o3, n2), r(o3), a(o3), e1;
                    }, this.findElement = function(t2) {
                        return e1.element.querySelector('[data-eid="' + t2 + '"]');
                    }, this.getBoardElements = function(t2) {
                        return e1.element.querySelector('[data-id="' + t2 + '"] .kanban-drag').childNodes;
                    }, this.removeElement = function(t2) {
                        return "string" == typeof t2 && (t2 = e1.element.querySelector('[data-eid="' + t2 + '"]')), null !== t2 && ("function" == typeof t2.remove ? t2.remove() : t2.parentNode.removeChild(t2)), e1;
                    }, this.removeBoard = function(t2) {
                        var n2 = null;
                        "string" == typeof t2 && (n2 = e1.element.querySelector('[data-id="' + t2 + '"]')), null !== n2 && ("function" == typeof n2.remove ? n2.remove() : n2.parentNode.removeChild(n2));
                        for(var o3 = 0; o3 < e1.options.boards.length; o3++)if (e1.options.boards[o3].id === t2) {
                            e1.options.boards.splice(o3, 1);
                            break;
                        }
                        return e1;
                    }, this.onButtonClick = function(e2) {
                    }, this.init();
                };
            }();
        },
        {
            dragula: 9
        }
    ],
    2: [
        function(e, t, n) {
            t.exports = function(e1, t1) {
                return Array.prototype.slice.call(e1, t1);
            };
        },
        {
        }
    ],
    3: [
        function(e, t, n) {
            "use strict";
            var o3 = e("ticky");
            t.exports = function(e1, t1, n1) {
                e1 && o3(function() {
                    e1.apply(n1 || null, t1 || []);
                });
            };
        },
        {
            ticky: 11
        }
    ],
    4: [
        function(e, t, n) {
            "use strict";
            var o3 = e("atoa"), i3 = e("./debounce");
            t.exports = function(e1, t1) {
                var n1 = t1 || {
                }, r2 = {
                };
                return (void 0) === e1 && (e1 = {
                }), e1.on = function(t2, n2) {
                    return r2[t2] ? r2[t2].push(n2) : r2[t2] = [
                        n2
                    ], e1;
                }, e1.once = function(t2, n2) {
                    return n2._once = !0, e1.on(t2, n2), e1;
                }, e1.off = function(t2, n2) {
                    var o4 = arguments.length;
                    if (1 === o4) delete r2[t2];
                    else if (0 === o4) r2 = {
                    };
                    else {
                        var i4 = r2[t2];
                        if (!i4) return e1;
                        i4.splice(i4.indexOf(n2), 1);
                    }
                    return e1;
                }, e1.emit = function() {
                    var t2 = o3(arguments);
                    return e1.emitterSnapshot(t2.shift()).apply(this, t2);
                }, e1.emitterSnapshot = function(t2) {
                    var a = (r2[t2] || []).slice(0);
                    return function() {
                        var r3 = o3(arguments), c = this || e1;
                        if ("error" === t2 && !1 !== n1.throws && !a.length) throw 1 === r3.length ? r3[0] : r3;
                        return a.forEach(function(o4) {
                            n1.async ? i3(o4, r3, c) : o4.apply(c, r3), o4._once && e1.off(t2, o4);
                        }), e1;
                    };
                }, e1;
            };
        },
        {
            "./debounce": 3,
            atoa: 2
        }
    ],
    5: [
        function(e, t, n) {
            (function(n1) {
                (function() {
                    var o3 = e("custom-event"), i3 = e("./eventmap"), r2 = n1.document, a = function(e1, t1, n2, o4) {
                        return e1.addEventListener(t1, n2, o4);
                    }, c = function(e1, t1, n2, o4) {
                        return e1.removeEventListener(t1, n2, o4);
                    }, d = [];
                    function s(e1, t1, n2) {
                        var o4 = function(e2, t2, n3) {
                            var o5, i5;
                            for(o5 = 0; o5 < d.length; o5++)if ((i5 = d[o5]).element === e2 && i5.type === t2 && i5.fn === n3) return o5;
                        }(e1, t1, n2);
                        if (o4) {
                            var i5 = d[o4].wrapper;
                            return d.splice(o4, 1), i5;
                        }
                    }
                    n1.addEventListener || (a = function(e1, t1, o4) {
                        return e1.attachEvent("on" + t1, function(e2, t2, o5) {
                            var i6 = s(e2, t2, o5) || function(e3, t3, o6) {
                                return function(t4) {
                                    var i7 = t4 || n1.event;
                                    i7.target = i7.target || i7.srcElement, i7.preventDefault = i7.preventDefault || function() {
                                        i7.returnValue = !1;
                                    }, i7.stopPropagation = i7.stopPropagation || function() {
                                        i7.cancelBubble = !0;
                                    }, i7.which = i7.which || i7.keyCode, o6.call(e3, i7);
                                };
                            }(e2, 0, o5);
                            return d.push({
                                wrapper: i6,
                                element: e2,
                                type: t2,
                                fn: o5
                            }), i6;
                        }(e1, t1, o4));
                    }, c = function(e1, t1, n2) {
                        var o4 = s(e1, t1, n2);
                        if (o4) return e1.detachEvent("on" + t1, o4);
                    }), t.exports = {
                        add: a,
                        remove: c,
                        fabricate: function(e1, t1, n2) {
                            var a1 = -1 === i3.indexOf(t1) ? new o3(t1, {
                                detail: n2
                            }) : function() {
                                var e2;
                                r2.createEvent ? (e2 = r2.createEvent("Event")).initEvent(t1, !0, !0) : r2.createEventObject && (e2 = r2.createEventObject());
                                return e2;
                            }();
                            e1.dispatchEvent ? e1.dispatchEvent(a1) : e1.fireEvent("on" + t1, a1);
                        }
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {
            });
        },
        {
            "./eventmap": 6,
            "custom-event": 7
        }
    ],
    6: [
        function(e, t, n) {
            (function(e1) {
                (function() {
                    var n1 = [], o3 = "", i3 = /^on/;
                    for(o3 in e1)i3.test(o3) && n1.push(o3.slice(2));
                    t.exports = n1;
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {
            });
        },
        {
        }
    ],
    7: [
        function(e, t, n) {
            (function(e1) {
                (function() {
                    var n1 = e1.CustomEvent;
                    t.exports = (function() {
                        try {
                            var e2 = new n1("cat", {
                                detail: {
                                    foo: "bar"
                                }
                            });
                            return "cat" === e2.type && "bar" === e2.detail.foo;
                        } catch (e3) {
                        }
                        return !1;
                    })() ? n1 : "undefined" != typeof document && "function" == typeof document.createEvent ? function(e2, t1) {
                        var n2 = document.createEvent("CustomEvent");
                        return t1 ? n2.initCustomEvent(e2, t1.bubbles, t1.cancelable, t1.detail) : n2.initCustomEvent(e2, !1, !1, void 0), n2;
                    } : function(e2, t1) {
                        var n2 = document.createEventObject();
                        return n2.type = e2, t1 ? (n2.bubbles = Boolean(t1.bubbles), n2.cancelable = Boolean(t1.cancelable), n2.detail = t1.detail) : (n2.bubbles = !1, n2.cancelable = !1, n2.detail = void 0), n2;
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {
            });
        },
        {
        }
    ],
    8: [
        function(e, t, n) {
            "use strict";
            var o3 = {
            }, i3 = "(?:^|\\s)", r2 = "(?:\\s|$)";
            function a(e1) {
                var t1 = o3[e1];
                return t1 ? t1.lastIndex = 0 : o3[e1] = t1 = new RegExp(i3 + e1 + r2, "g"), t1;
            }
            t.exports = {
                add: function(e1, t1) {
                    var n1 = e1.className;
                    n1.length ? a(t1).test(n1) || (e1.className += " " + t1) : e1.className = t1;
                },
                rm: function(e1, t1) {
                    e1.className = e1.className.replace(a(t1), " ").trim();
                }
            };
        },
        {
        }
    ],
    9: [
        function(e, t, n) {
            (function(n1) {
                (function() {
                    var o3 = e("contra/emitter"), i3 = e("crossvent"), r2 = e("./classes"), a2 = document, c = a2.documentElement;
                    function d(e1, t1, o4, r3) {
                        n1.navigator.pointerEnabled ? i3[t1](e1, {
                            mouseup: "pointerup",
                            mousedown: "pointerdown",
                            mousemove: "pointermove"
                        }[o4], r3) : n1.navigator.msPointerEnabled ? i3[t1](e1, {
                            mouseup: "MSPointerUp",
                            mousedown: "MSPointerDown",
                            mousemove: "MSPointerMove"
                        }[o4], r3) : (i3[t1](e1, {
                            mouseup: "touchend",
                            mousedown: "touchstart",
                            mousemove: "touchmove"
                        }[o4], r3), i3[t1](e1, o4, r3));
                    }
                    function s(e1) {
                        if ((void 0) !== e1.touches) return e1.touches.length;
                        if ((void 0) !== e1.which && 0 !== e1.which) return e1.which;
                        if ((void 0) !== e1.buttons) return e1.buttons;
                        var t1 = e1.button;
                        return (void 0) !== t1 ? 1 & t1 ? 1 : 2 & t1 ? 3 : 4 & t1 ? 2 : 0 : void 0;
                    }
                    function l(e1, t1) {
                        return (void 0) !== n1[t1] ? n1[t1] : c.clientHeight ? c[e1] : a2.body[e1];
                    }
                    function u(e1, t1, n2) {
                        var o4, i6 = (e1 = e1 || {
                        }).className || "";
                        return e1.className += " gu-hide", o4 = a2.elementFromPoint(t1, n2), e1.className = i6, o4;
                    }
                    function f() {
                        return !1;
                    }
                    function p() {
                        return !0;
                    }
                    function v1(e1) {
                        return e1.width || e1.right - e1.left;
                    }
                    function m(e1) {
                        return e1.height || e1.bottom - e1.top;
                    }
                    function h(e1) {
                        return e1.parentNode === a2 ? null : e1.parentNode;
                    }
                    function g(e1) {
                        return "INPUT" === e1.tagName || "TEXTAREA" === e1.tagName || "SELECT" === e1.tagName || (function e2(t1) {
                            if (!t1) return !1;
                            if ("false" === t1.contentEditable) return !1;
                            if ("true" === t1.contentEditable) return !0;
                            return e2(h(t1));
                        })(e1);
                    }
                    function y(e1) {
                        return e1.nextElementSibling || (function() {
                            var t1 = e1;
                            do t1 = t1.nextSibling;
                            while (t1 && 1 !== t1.nodeType)
                            return t1;
                        })();
                    }
                    function b(e1, t1) {
                        var n2 = function(e2) {
                            return e2.targetTouches && e2.targetTouches.length ? e2.targetTouches[0] : e2.changedTouches && e2.changedTouches.length ? e2.changedTouches[0] : e2;
                        }(t1), o4 = {
                            pageX: "clientX",
                            pageY: "clientY"
                        };
                        return e1 in o4 && !(e1 in n2) && o4[e1] in n2 && (e1 = o4[e1]), n2[e1];
                    }
                    t.exports = function(e1, t1) {
                        var n2, w, E, T, x, C, O, k, S, L, B;
                        1 === arguments.length && !1 === Array.isArray(e1) && (t1 = e1, e1 = []);
                        var N, I = null, A = t1 || {
                        };
                        (void 0) === A.moves && (A.moves = p), (void 0) === A.accepts && (A.accepts = p), (void 0) === A.invalid && (A.invalid = function() {
                            return !1;
                        }), (void 0) === A.containers && (A.containers = e1 || []), (void 0) === A.isContainer && (A.isContainer = f), (void 0) === A.copy && (A.copy = !1), (void 0) === A.copySortSource && (A.copySortSource = !1), (void 0) === A.revertOnSpill && (A.revertOnSpill = !1), (void 0) === A.removeOnSpill && (A.removeOnSpill = !1), (void 0) === A.direction && (A.direction = "vertical"), (void 0) === A.ignoreInputTextSelection && (A.ignoreInputTextSelection = !0), (void 0) === A.mirrorContainer && (A.mirrorContainer = a2.body);
                        var _ = o3({
                            containers: A.containers,
                            start: function(e2) {
                                var t2 = j(e2);
                                t2 && F(t2);
                            },
                            end: R,
                            cancel: W,
                            remove: V,
                            destroy: function() {
                                P(!0), K({
                                });
                            },
                            canMove: function(e2) {
                                return !!j(e2);
                            },
                            dragging: !1
                        });
                        function H(e2) {
                            return -1 !== _.containers.indexOf(e2) || A.isContainer(e2);
                        }
                        function P(e2) {
                            var t2 = e2 ? "remove" : "add";
                            d(c, t2, "mousedown", X), d(c, t2, "mouseup", K);
                        }
                        function q(e2) {
                            d(c, e2 ? "remove" : "add", "mousemove", Y);
                        }
                        function M(e2) {
                            var t2 = e2 ? "remove" : "add";
                            i3[t2](c, "selectstart", D), i3[t2](c, "click", D);
                        }
                        function D(e2) {
                            N && e2.preventDefault();
                        }
                        function X(e2) {
                            if (C = e2.clientX, O = e2.clientY, 1 === s(e2) && !e2.metaKey && !e2.ctrlKey) {
                                var t2 = e2.target, n3 = j(t2);
                                n3 && (N = n3, q(), "mousedown" === e2.type && (g(t2) ? t2.focus() : e2.preventDefault()));
                            }
                        }
                        function Y(e2) {
                            if (N) {
                                if (0 !== s(e2)) {
                                    if (!((void 0) !== e2.clientX && Math.abs(e2.clientX - C) <= (A.slideFactorX || 0) && (void 0) !== e2.clientY && Math.abs(e2.clientY - O) <= (A.slideFactorY || 0))) {
                                        if (A.ignoreInputTextSelection) {
                                            var t3 = b("clientX", e2) || 0, o4 = b("clientY", e2) || 0;
                                            if (g(a2.elementFromPoint(t3, o4))) return;
                                        }
                                        var i6 = N;
                                        q(!0), M(), R(), F(i6);
                                        var u1, f1 = {
                                            left: (u1 = E.getBoundingClientRect()).left + l("scrollLeft", "pageXOffset"),
                                            top: u1.top + l("scrollTop", "pageYOffset")
                                        };
                                        T = b("pageX", e2) - f1.left, x = b("pageY", e2) - f1.top, r2.add(L || E, "gu-transit"), (function() {
                                            if (!n2) {
                                                var e3 = E.getBoundingClientRect();
                                                (n2 = E.cloneNode(!0)).style.width = v1(e3) + "px", n2.style.height = m(e3) + "px", r2.rm(n2, "gu-transit"), r2.add(n2, "gu-mirror"), A.mirrorContainer.appendChild(n2), d(c, "add", "mousemove", Q), r2.add(A.mirrorContainer, "gu-unselectable"), _.emit("cloned", n2, E, "mirror");
                                            }
                                        })(), Q(e2);
                                    }
                                } else K({
                                });
                            }
                        }
                        function j(e2) {
                            if (!(_.dragging && n2 || H(e2))) {
                                for(var t4 = e2; h(e2) && !1 === H(h(e2));){
                                    if (A.invalid(e2, t4)) return;
                                    if (!(e2 = h(e2))) return;
                                }
                                var o5 = h(e2);
                                if (o5 && !A.invalid(e2, t4) && A.moves(e2, o5, t4, y(e2))) return {
                                    item: e2,
                                    source: o5
                                };
                            }
                        }
                        function F(e2) {
                            var t5, n4;
                            t5 = e2.item, n4 = e2.source, ("boolean" == typeof A.copy ? A.copy : A.copy(t5, n4)) && (L = e2.item.cloneNode(!0), _.emit("cloned", L, e2.item, "copy")), w = e2.source, E = e2.item, k = S = y(e2.item), _.dragging = !0, _.emit("drag", E, w);
                        }
                        function R() {
                            if (_.dragging) {
                                var e2 = L || E;
                                z(e2, h(e2));
                            }
                        }
                        function U() {
                            N = !1, q(!0), M(!0);
                        }
                        function K(e4) {
                            if (U(), _.dragging) {
                                var t5 = L || E, o6 = b("clientX", e4) || 0, i7 = b("clientY", e4) || 0, r3 = J(u(n2, o6, i7), o6, i7);
                                r3 && (L && A.copySortSource || !L || r3 !== w) ? z(t5, r3) : A.removeOnSpill ? V() : W();
                            }
                        }
                        function z(e4, t6) {
                            var n4 = h(e4);
                            L && A.copySortSource && t6 === w && n4.removeChild(E), $(t6) ? _.emit("cancel", e4, w, w) : _.emit("drop", e4, t6, w, S), G();
                        }
                        function V() {
                            if (_.dragging) {
                                var e4 = L || E, t6 = h(e4);
                                t6 && t6.removeChild(e4), _.emit(L ? "cancel" : "remove", e4, t6, w), G();
                            }
                        }
                        function W(e5) {
                            if (_.dragging) {
                                var t7 = arguments.length > 0 ? e5 : A.revertOnSpill, n4 = L || E, o7 = h(n4), i8 = $(o7);
                                !1 === i8 && t7 && (L ? o7 && o7.removeChild(L) : w.insertBefore(n4, k)), i8 || t7 ? _.emit("cancel", n4, w, w) : _.emit("drop", n4, o7, w, S), G();
                            }
                        }
                        function G() {
                            var e5 = L || E;
                            U(), n2 && (r2.rm(A.mirrorContainer, "gu-unselectable"), d(c, "remove", "mousemove", Q), h(n2).removeChild(n2), n2 = null), e5 && r2.rm(e5, "gu-transit"), B && clearTimeout(B), _.dragging = !1, I && _.emit("out", e5, I, w), _.emit("dragend", e5), w = E = L = k = S = B = I = null;
                        }
                        function $(e5, t8) {
                            var o8;
                            return o8 = (void 0) !== t8 ? t8 : n2 ? S : y(L || E), e5 === w && o8 === k;
                        }
                        function J(e5, t8, n5) {
                            for(var o8 = e5; o8 && !i9();)o8 = h(o8);
                            return o8;
                            function i9() {
                                if (!1 === H(o8)) return !1;
                                var i10 = Z(o8, e5), r4 = ee(o8, i10, t8, n5);
                                return !!$(o8, r4) || A.accepts(E, o8, w, r4);
                            }
                        }
                        function Q(e5) {
                            if (n2) {
                                e5.preventDefault();
                                var t8 = b("clientX", e5) || 0, o8 = b("clientY", e5) || 0, i9 = t8 - T, r4 = o8 - x;
                                n2.style.left = i9 + "px", n2.style.top = r4 + "px";
                                var a1 = L || E, c1 = u(n2, t8, o8), d1 = J(c1, t8, o8), s1 = null !== d1 && d1 !== I;
                                (s1 || null === d1) && (I && v2("out"), I = d1, s1 && v2("over"));
                                var l1 = h(a1);
                                if (d1 !== w || !L || A.copySortSource) {
                                    var f2, p1 = Z(d1, c1);
                                    if (null !== p1) f2 = ee(d1, p1, t8, o8);
                                    else {
                                        if (!0 !== A.revertOnSpill || L) return void (L && l1 && l1.removeChild(a1));
                                        f2 = k, d1 = w;
                                    }
                                    (null === f2 && s1 || f2 !== a1 && f2 !== y(a1)) && (S = f2, d1.insertBefore(a1, f2), _.emit("shadow", a1, d1, w));
                                } else l1 && l1.removeChild(a1);
                            }
                            function v2(e6) {
                                _.emit(e6, a1, I, w);
                            }
                        }
                        function Z(e5, t9) {
                            for(var n5 = t9; n5 !== e5 && h(n5) !== e5;)n5 = h(n5);
                            return n5 === c ? null : n5;
                        }
                        function ee(e5, t9, n5, o9) {
                            var i10, r5 = "horizontal" === A.direction;
                            return t9 !== e5 ? (i10 = t9.getBoundingClientRect(), a3(r5 ? n5 > i10.left + v1(i10) / 2 : o9 > i10.top + m(i10) / 2)) : (function() {
                                var t10, i11, a3, c2 = e5.children.length;
                                for(t10 = 0; t10 < c2; t10++){
                                    if (i11 = e5.children[t10], a3 = i11.getBoundingClientRect(), r5 && a3.left + a3.width / 2 > n5) return i11;
                                    if (!r5 && a3.top + a3.height / 2 > o9) return i11;
                                }
                                return null;
                            })();
                            function a3(e6) {
                                return e6 ? y(t9) : t9;
                            }
                        }
                        return !0 === A.removeOnSpill && _.on("over", function(e5) {
                            r2.rm(e5, "gu-hide");
                        }).on("out", function(e5) {
                            _.dragging && r2.add(e5, "gu-hide");
                        }), P(), _;
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {
            });
        },
        {
            "./classes": 8,
            "contra/emitter": 4,
            crossvent: 5
        }
    ],
    10: [
        function(e1, t1, n1) {
            var o3, i3, r2 = t1.exports = {
            };
            function a2() {
                throw new Error("setTimeout has not been defined");
            }
            function c2() {
                throw new Error("clearTimeout has not been defined");
            }
            function d2(e5) {
                if (o3 === setTimeout) return setTimeout(e5, 0);
                if ((o3 === a2 || !o3) && setTimeout) return o3 = setTimeout, setTimeout(e5, 0);
                try {
                    return o3(e5, 0);
                } catch (t9) {
                    try {
                        return o3.call(null, e5, 0);
                    } catch (t10) {
                        return o3.call(this, e5, 0);
                    }
                }
            }
            !function() {
                try {
                    o3 = "function" == typeof setTimeout ? setTimeout : a2;
                } catch (e5) {
                    o3 = a2;
                }
                try {
                    i3 = "function" == typeof clearTimeout ? clearTimeout : c2;
                } catch (e5) {
                    i3 = c2;
                }
            }();
            var s2, l2 = [], u2 = !1, f3 = -1;
            function p2() {
                u2 && s2 && (u2 = !1, s2.length ? l2 = s2.concat(l2) : f3 = -1, l2.length && v());
            }
            function v() {
                if (!u2) {
                    var e5 = d2(p2);
                    u2 = !0;
                    for(var t9 = l2.length; t9;){
                        for(s2 = l2, l2 = []; (++f3) < t9;)s2 && s2[f3].run();
                        f3 = -1, t9 = l2.length;
                    }
                    s2 = null, u2 = !1, (function(e6) {
                        if (i3 === clearTimeout) return clearTimeout(e6);
                        if ((i3 === c2 || !i3) && clearTimeout) return i3 = clearTimeout, clearTimeout(e6);
                        try {
                            i3(e6);
                        } catch (t10) {
                            try {
                                return i3.call(null, e6);
                            } catch (t11) {
                                return i3.call(this, e6);
                            }
                        }
                    })(e5);
                }
            }
            function m(e6, t10) {
                this.fun = e6, this.array = t10;
            }
            function h() {
            }
            r2.nextTick = function(e6) {
                var t10 = new Array(arguments.length - 1);
                if (arguments.length > 1) for(var n2 = 1; n2 < arguments.length; n2++)t10[n2 - 1] = arguments[n2];
                l2.push(new m(e6, t10)), 1 !== l2.length || u2 || d2(v);
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, r2.title = "browser", r2.browser = !0, r2.env = {
            }, r2.argv = [], r2.version = "", r2.versions = {
            }, r2.on = h, r2.addListener = h, r2.once = h, r2.off = h, r2.removeListener = h, r2.removeAllListeners = h, r2.emit = h, r2.prependListener = h, r2.prependOnceListener = h, r2.listeners = function(e6) {
                return [];
            }, r2.binding = function(e6) {
                throw new Error("process.binding is not supported");
            }, r2.cwd = function() {
                return "/";
            }, r2.chdir = function(e6) {
                throw new Error("process.chdir is not supported");
            }, r2.umask = function() {
                return 0;
            };
        },
        {
        }
    ],
    11: [
        function(e1, t1, n1) {
            (function(e6) {
                (function() {
                    var n2;
                    n2 = "function" == typeof e6 ? function(t10) {
                        e6(t10);
                    } : function(e7) {
                        setTimeout(e7, 0);
                    }, t1.exports = n2;
                }).call(this);
            }).call(this, e1("timers").setImmediate);
        },
        {
            timers: 12
        }
    ],
    12: [
        function(e1, t1, n1) {
            (function(t10, o3) {
                (function() {
                    var i3 = e1("process/browser.js").nextTick, r2 = Function.prototype.apply, a2 = Array.prototype.slice, c2 = {
                    }, d2 = 0;
                    function s2(e6, t11) {
                        this._id = e6, this._clearFn = t11;
                    }
                    n1.setTimeout = function() {
                        return new s2(r2.call(setTimeout, window, arguments), clearTimeout);
                    }, n1.setInterval = function() {
                        return new s2(r2.call(setInterval, window, arguments), clearInterval);
                    }, n1.clearTimeout = n1.clearInterval = function(e6) {
                        e6.close();
                    }, s2.prototype.unref = s2.prototype.ref = function() {
                    }, s2.prototype.close = function() {
                        this._clearFn.call(window, this._id);
                    }, n1.enroll = function(e6, t11) {
                        clearTimeout(e6._idleTimeoutId), e6._idleTimeout = t11;
                    }, n1.unenroll = function(e6) {
                        clearTimeout(e6._idleTimeoutId), e6._idleTimeout = -1;
                    }, n1._unrefActive = n1.active = function(e6) {
                        clearTimeout(e6._idleTimeoutId);
                        var t11 = e6._idleTimeout;
                        t11 >= 0 && (e6._idleTimeoutId = setTimeout(function() {
                            e6._onTimeout && e6._onTimeout();
                        }, t11));
                    }, n1.setImmediate = "function" == typeof t10 ? t10 : function(e6) {
                        var t11 = d2++, o9 = !(arguments.length < 2) && a2.call(arguments, 1);
                        return c2[t11] = !0, i3(function() {
                            c2[t11] && (o9 ? e6.apply(null, o9) : e6.call(null), n1.clearImmediate(t11));
                        }), t11;
                    }, n1.clearImmediate = "function" == typeof o3 ? o3 : function(e6) {
                        delete c2[e6];
                    };
                }).call(this);
            }).call(this, e1("timers").setImmediate, e1("timers").clearImmediate);
        },
        {
            "process/browser.js": 10,
            timers: 12
        }
    ]
}, {
}, [
    1
]);

},{}]},["1W0ds","fuzMm"], "fuzMm", "parcelRequire48b2")

//# sourceMappingURL=kanban.3d1dbb27.js.map
