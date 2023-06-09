// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"qgk6":[function(require,module,exports) {
window.addEventListener('load', function () {
  var params = new URL(document.location).searchParams;
  var calendar = params.get('calendarTest');
  //const name = params.get("name");
  //const select = (localStorage.getItem("testselectname")) ? localStorage.getItem("testselectname") : null;
  var barber = params.get("testselectname");
  var service = params.get("testselectservice");
  var test = "";
  if (barber == "MATIAS PEREIRA") {
    test = 'barber2.23340dd5.png';
  } else if (barber == "SIDD DULAL") {
    test = '../images/barber1.png';
  } else if (barber == "SID SUBRA") {
    test = 'barber3.d9d4c6ef.png';
  } else if (barber == "ABTIN NEGINI") {
    test = 'barber4.d7a28c4b.png';
  }
  var dateArray = calendar.split('T');
  var date = new Date(dateArray[0]);
  document.getElementById('calendar').innerHTML = date.toDateString();
  document.getElementById('time').innerHTML = dateArray[1];
  document.getElementById('barber').innerHTML = barber;
  document.getElementById('service').innerHTML = service;
  document.getElementsByName('barbertest')[0].src = test;
  window.localStorage.setItem("barber", barber);
  window.localStorage.setItem("service", service);
  window.localStorage.setItem("calendar", date.toDateString());
  window.localStorage.setItem("time", dateArray[1]);
  window.localStorage.setItem("time", dateArray[1]);
  window.localStorage.setItem("barbertest", test);
});
},{}]},{},["qgk6"], null)
//# sourceMappingURL=confirm.3b4f6408.js.map