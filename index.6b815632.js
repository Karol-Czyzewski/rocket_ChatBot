// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eFQHZ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
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
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"kuM8f":[function(require,module,exports) {
// - [ ] Głównym zadaniem jest stworzenie gotowego elementu UI (buttona), który po kliknięciu ma otwierać okno chatbota
// * Okno ma nie zajmować więcej niż 25% ekranu +
// * Kliknięcie poza obszar chatbota powoduje jego zamknięcie
// - [ ] Po otwarciu okna ma pojawic się kilka opcji predefiniowanych, po kliknięciu w które pojawia się odpowiedź w dymku, a zaraz poniżej po raz kolejny wszystkie opcje predefiniowane
// - [ ] Pole tekstowe ma być aktywne, a bot ma przeszukiwać wpisany tekst pod względem słowa-kluczy i zwracać prawdopodobne odpowiedzi z opcji predefiniowanych
// - [ ] Jeśli żadne ze słów-kluczy nie pasuje, bot informuje że żaden z konsultantów nie jest podłączony, nie może odpowiedzieć na pytanie, i pokazuje opcje predefiniowane
var _styleScss = require("./style.scss");
var _chatbot = require("./scripts/Chatbot");
// import { Chatbot } from './scripts/ChatbotAll';
const chatbot = new _chatbot.Chatbot();

},{"./style.scss":"81Z0h","./scripts/Chatbot":"9gmKC"}],"81Z0h":[function() {},{}],"9gmKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chatbot", ()=>Chatbot
);
var _chatbotController = require("./ChatbotController");
class Chatbot {
    // chatbotStorage: ChatbotStorage;
    constructor(){
        const messagesData = localStorage.getItem("messages");
        this.messagesList = messagesData === null ? [] : JSON.parse(messagesData);
        this.chatbotController = new _chatbotController.ChatbotController(this.messagesList);
    // this.chatbotStorage = new ChatbotStorage(this.messagesList, this.chatbotController.messageContainer);
    }
}

},{"./ChatbotController":"eTNHm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTNHm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatbotController", ()=>ChatbotController
);
var _chatbotHelpers = require("./ChatbotHelpers");
var _chatbotStorage = require("./ChatbotStorage");
var _chatbotApi = require("./ChatbotApi");
var _questions = require("./questions");
class ChatbotController {
    constructor(messagesList){
        this.chatbotOpenButton = _chatbotHelpers.createElement('button');
        this.chatbotCloseButton = _chatbotHelpers.createElement('button');
        this.chatbotContainer = _chatbotHelpers.createElement('div');
        this.messageContainer = _chatbotHelpers.createElement('div', 'msgArea');
        this.chatbotStorage = new _chatbotStorage.ChatbotStorage(messagesList, this.messageContainer);
        this.chatbotApi = new _chatbotApi.ChatbotApi();
        this.messagesList = messagesList;
        this.init();
    }
    init() {
        this.getMessageFromStorage();
        this.createChatbot();
        this.createGreetings();
    }
    createChatbot() {
        this.renderBotHeading();
        this.renderMessageArea();
        this.createInputField();
        this.chatbotContainer.classList.add("chatbotContainer");
        this.chatbotOpenButton.classList.add("chatbotOpenButton");
        this.chatbotOpenButton.addEventListener('click', ()=>this.chatbotContainer.classList.add("open")
        );
        this.chatbotCloseButton.addEventListener('click', ()=>this.chatbotContainer.classList.remove("open")
        );
        const body = _chatbotHelpers.getHtmlElement('body');
        body.appendChild(this.chatbotOpenButton);
        body.appendChild(this.chatbotContainer);
    }
    getMessageFromStorage() {
        this.messagesList.forEach((item)=>this.renderMessage(item.value, item.type)
        );
    }
    createGreetings() {
        this.createMessage("Helllo in rocket_Bot! There are some info about SpaceX Corporation.", "bot-welcome");
        const questionsList = _chatbotHelpers.createElement('ul', 'list');
        this.messageContainer.appendChild(questionsList);
        _questions.questions.forEach((item)=>{
            const li = _chatbotHelpers.createElement('li', 'list-element', item.question);
            questionsList.appendChild(li);
            li.addEventListener('click', ()=>this.createMessage(item.anwser, "bot")
            );
        });
    }
    renderMessageArea() {
        this.chatbotContainer.appendChild(this.messageContainer);
    }
    renderBotHeading() {
        const headingOfBot = _chatbotHelpers.createElement('div', 'headingOfBot');
        const welcomeHeader = _chatbotHelpers.createElement('div', 'welcomeHeader', 'rocket_Bot');
        headingOfBot.appendChild(welcomeHeader);
        headingOfBot.appendChild(this.chatbotCloseButton);
        this.chatbotContainer.appendChild(headingOfBot);
    }
    createInputField() {
        const formContainer = _chatbotHelpers.createElement('div', 'formContainer');
        this.chatbotContainer.appendChild(formContainer);
        const formElement = _chatbotHelpers.createElement('form');
        formContainer.appendChild(formElement);
        const label = _chatbotHelpers.createElement('label');
        formElement.appendChild(label);
        const input = _chatbotHelpers.createElement('input');
        const inputSubmit = _chatbotHelpers.createElement('input');
        inputSubmit.type = "submit";
        inputSubmit.value = "";
        const btnContainer = _chatbotHelpers.createElement('div', "buttons-container");
        formContainer.appendChild(btnContainer);
        const clearStorageBtn = _chatbotHelpers.createElement('button', "null", 'Clear');
        clearStorageBtn.addEventListener('click', ()=>{
            this.chatbotStorage.removeMessagesFromStorage();
            this.createGreetings();
        });
        const aboutBtn = _chatbotHelpers.createElement('button');
        aboutBtn.textContent = "Info launch";
        aboutBtn.addEventListener('click', ()=>this.createMessage(`List of commands:
            1. @next - next launch
            2. @latest - latest launch`, "bot")
        );
        btnContainer.appendChild(clearStorageBtn);
        btnContainer.appendChild(aboutBtn);
        label.appendChild(input);
        formElement.appendChild(inputSubmit);
        formElement.addEventListener('submit', (e)=>this.logSubmit(e, input)
        );
    }
    logSubmit(e, input) {
        e.preventDefault();
        if (input.value === '') return;
        this.createMessage(input.value, "user");
        const command = input.value;
        this.runCommand(command);
        input.value = "";
    }
    createMessage(text, user) {
        this.renderMessage(text, user);
        this.chatbotStorage.setMessageInStorage(text, user);
    }
    renderMessage(text, writer) {
        const msg = _chatbotHelpers.createElement('div', 'message', text);
        msg.classList.add(`message--${writer}`);
        this.messageContainer.appendChild(msg);
    }
    runCommand(inputValue) {
        if (!_chatbotHelpers.commandRegExp.test(inputValue)) return;
        this.createMessage('Loading data...', "bot");
        switch(inputValue){
            case "@next":
                this.renderSpaceXData("next");
                break;
            case "@latest":
                this.renderSpaceXData("latest");
                break;
            default:
                this.createMessage("Uncorrect command, please check -> Info launch", "bot");
        }
    }
    async renderSpaceXData(query) {
        const data = await this.chatbotApi.getSpaceXData(query);
        this.createMessage(`${query} rocket launch:
        rocket name: ${data.name}
        launch date: ${data.date_utc}`, "bot");
    }
}

},{"./ChatbotHelpers":"7zG4c","./ChatbotStorage":"8UM4D","./ChatbotApi":"lazJ2","./questions":"kVkqn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7zG4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement
);
parcelHelpers.export(exports, "getHtmlElement", ()=>getHtmlElement
);
parcelHelpers.export(exports, "commandRegExp", ()=>commandRegExp
);
const createElement = (type, cssClass = "null", textContent)=>{
    const element = document.createElement(type);
    element.textContent = textContent || '';
    element.classList.add(cssClass);
    return element;
};
const getHtmlElement = (element)=>{
    const htmlElement = document.querySelector(element);
    if (htmlElement === null) throw new Error(`${element} HTML element dosent exist`);
    return htmlElement;
};
const commandRegExp = new RegExp(/(@[a-z])\w+/, 'g');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8UM4D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatbotStorage", ()=>ChatbotStorage
);
class ChatbotStorage {
    constructor(messagesList, messageContainer){
        this.messagesList = messagesList;
        this.messageContainer = messageContainer;
    }
    setMessageInStorage(value, type) {
        this.messagesList.push({
            value: value,
            type: type
        });
        localStorage.setItem('messages', JSON.stringify(this.messagesList));
    }
    removeMessagesFromStorage() {
        this.messagesList.splice(0);
        localStorage.removeItem('messages');
        this.messageContainer.textContent = "";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lazJ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatbotApi", ()=>ChatbotApi
);
class ChatbotApi {
    async getSpaceXData(query) {
        try {
            const response = await fetch(`https://api.spacexdata.com/v4/launches/${query}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const spaceXData = await response.json();
            return spaceXData;
        } catch (err) {
            throw err;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVkqn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "questions", ()=>questions
);
const questions = [
    {
        question: "name of company",
        anwser: "SpaceX"
    },
    {
        question: "founder",
        anwser: "Elon Musk"
    },
    {
        question: "website",
        anwser: "https://www.spacex.com/"
    },
    {
        question: "employees",
        anwser: "8000 people"
    },
    {
        question: "headquarters",
        anwser: "city: Hawthorne, state: California"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eFQHZ","kuM8f"], "kuM8f", "parcelRequire8566")

//# sourceMappingURL=index.6b815632.js.map
