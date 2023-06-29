!(function (t) {
  var e = {};
  function r(o) {
    if (e[o]) return e[o].exports;
    var n = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, o) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            o,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return o;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 107));
})([function (t, e, r) {
  "use strict";
  function o(t) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  var n = TypeError,
    i = Object.getOwnPropertyDescriptor;
  if (i)
    try {
      i({}, "");
    } catch (t) {
      i = null;
    }
  var a = function () {
      throw new n();
    },
    u = i
      ? (function () {
          try {
            return a;
          } catch (t) {
            try {
              return i(arguments, "callee").get;
            } catch (t) {
              return a;
            }
          }
        })()
      : a,
    c = r(63)(),
    s =
      Object.getPrototypeOf ||
      function (t) {
        return t.__proto__;
      },
    f = void 0,
    l = "undefined" == typeof Uint8Array ? void 0 : s(Uint8Array),
    p = {
      "%Array%": Array,
      "%ArrayBuffer%":
        "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
      "%ArrayBufferPrototype%":
        "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
      "%ArrayIteratorPrototype%": c ? s([][Symbol.iterator]()) : void 0,
      "%ArrayPrototype%": Array.prototype,
      "%ArrayProto_entries%": Array.prototype.entries,
      "%ArrayProto_forEach%": Array.prototype.forEach,
      "%ArrayProto_keys%": Array.prototype.keys,
      "%ArrayProto_values%": Array.prototype.values,
      "%AsyncFromSyncIteratorPrototype%": void 0,
      "%AsyncFunction%": void 0,
      "%AsyncFunctionPrototype%": void 0,
      "%AsyncGenerator%": void 0,
      "%AsyncGeneratorFunction%": void 0,
      "%AsyncGeneratorPrototype%": void 0,
      "%AsyncIteratorPrototype%":
        f && c && Symbol.asyncIterator ? f[Symbol.asyncIterator]() : void 0,
      "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
      "%Boolean%": Boolean,
      "%BooleanPrototype%": Boolean.prototype,
      "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
      "%DataViewPrototype%":
        "undefined" == typeof DataView ? void 0 : DataView.prototype,
      "%Date%": Date,
      "%DatePrototype%": Date.prototype,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%ErrorPrototype%": Error.prototype,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%EvalErrorPrototype%": EvalError.prototype,
      "%Float32Array%":
        "undefined" == typeof Float32Array ? void 0 : Float32Array,
      "%Float32ArrayPrototype%":
        "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
      "%Float64Array%":
        "undefined" == typeof Float64Array ? void 0 : Float64Array,
      "%Float64ArrayPrototype%":
        "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
      "%Function%": Function,
      "%FunctionPrototype%": Function.prototype,
      "%Generator%": void 0,
      "%GeneratorFunction%": void 0,
      "%GeneratorPrototype%": void 0,
      "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
      "%Int8ArrayPrototype%":
        "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
      "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
      "%Int16ArrayPrototype%":
        "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
      "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
      "%Int32ArrayPrototype%":
        "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": c ? s(s([][Symbol.iterator]())) : void 0,
      "%JSON%":
        "object" === ("undefined" == typeof JSON ? "undefined" : o(JSON))
          ? JSON
          : void 0,
      "%JSONParse%":
        "object" === ("undefined" == typeof JSON ? "undefined" : o(JSON))
          ? JSON.parse
          : void 0,
      "%Map%": "undefined" == typeof Map ? void 0 : Map,
      "%MapIteratorPrototype%":
        "undefined" != typeof Map && c
          ? s(new Map()[Symbol.iterator]())
          : void 0,
      "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
      "%Math%": Math,
      "%Number%": Number,
      "%NumberPrototype%": Number.prototype,
      "%Object%": Object,
      "%ObjectPrototype%": Object.prototype,
      "%ObjProto_toString%": Object.prototype.toString,
      "%ObjProto_valueOf%": Object.prototype.valueOf,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
      "%PromisePrototype%":
        "undefined" == typeof Promise ? void 0 : Promise.prototype,
      "%PromiseProto_then%":
        "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
      "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
      "%Promise_reject%":
        "undefined" == typeof Promise ? void 0 : Promise.reject,
      "%Promise_resolve%":
        "undefined" == typeof Promise ? void 0 : Promise.resolve,
      "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
      "%RangeError%": RangeError,
      "%RangeErrorPrototype%": RangeError.prototype,
      "%ReferenceError%": ReferenceError,
      "%ReferenceErrorPrototype%": ReferenceError.prototype,
      "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
      "%RegExp%": RegExp,
      "%RegExpPrototype%": RegExp.prototype,
      "%Set%": "undefined" == typeof Set ? void 0 : Set,
      "%SetIteratorPrototype%":
        "undefined" != typeof Set && c
          ? s(new Set()[Symbol.iterator]())
          : void 0,
      "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
      "%SharedArrayBuffer%":
        "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
      "%SharedArrayBufferPrototype%":
        "undefined" == typeof SharedArrayBuffer
          ? void 0
          : SharedArrayBuffer.prototype,
      "%String%": String,
      "%StringIteratorPrototype%": c ? s(""[Symbol.iterator]()) : void 0,
      "%StringPrototype%": String.prototype,
      "%Symbol%": c ? Symbol : void 0,
      "%SymbolPrototype%": c ? Symbol.prototype : void 0,
      "%SyntaxError%": SyntaxError,
      "%SyntaxErrorPrototype%": SyntaxError.prototype,
      "%ThrowTypeError%": u,
      "%TypedArray%": l,
      "%TypedArrayPrototype%": l ? l.prototype : void 0,
      "%TypeError%": n,
      "%TypeErrorPrototype%": n.prototype,
      "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
      "%Uint8ArrayPrototype%":
        "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
      "%Uint8ClampedArray%":
        "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
      "%Uint8ClampedArrayPrototype%":
        "undefined" == typeof Uint8ClampedArray
          ? void 0
          : Uint8ClampedArray.prototype,
      "%Uint16Array%":
        "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
      "%Uint16ArrayPrototype%":
        "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
      "%Uint32Array%":
        "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
      "%Uint32ArrayPrototype%":
        "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
      "%URIError%": URIError,
      "%URIErrorPrototype%": URIError.prototype,
      "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
      "%WeakMapPrototype%":
        "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
      "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
      "%WeakSetPrototype%":
        "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype,
    },
    y = r(7).call(Function.call, String.prototype.replace),
    d =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    v = /\\(\\)?/g,
    b = function (t) {
      var e = [];
      return (
        y(t, d, function (t, r, o, n) {
          e[e.length] = o ? y(n, v, "$1") : r || t;
        }),
        e
      );
    },
    m = function (t, e) {
      if (!(t in p))
        throw new SyntaxError("intrinsic " + t + " does not exist!");
      if (void 0 === p[t] && !e)
        throw new n(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return p[t];
    };
  t.exports = function (t, e) {
    if ("string" != typeof t || 0 === t.length)
      throw new TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof e)
      throw new TypeError('"allowMissing" argument must be a boolean');
    for (
      var r = b(t), o = m("%" + (r.length > 0 ? r[0] : "") + "%", e), a = 1;
      a < r.length;
      a += 1
    )
      if (null != o)
        if (i && a + 1 >= r.length) {
          var u = i(o, r[a]);
          if (!e && !(r[a] in o))
            throw new n(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          o = u ? u.get || u.value : o[r[a]];
        } else o = o[r[a]];
    return o;
  };
},
function (t, e, r) {
  "use strict";
  function o(t) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  t.exports = function (t) {
    return null === t
      ? "Null"
      : void 0 === t
      ? "Undefined"
      : "function" == typeof t || "object" === o(t)
      ? "Object"
      : "number" == typeof t
      ? "Number"
      : "boolean" == typeof t
      ? "Boolean"
      : "string" == typeof t
      ? "String"
      : void 0;
  };
}]);
