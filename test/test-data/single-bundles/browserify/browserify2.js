!(function a(o, r, i) {
  function c(e, t) {
    if (!r[e]) {
      if (!o[e]) {
        var n = "function" == typeof require && require;
        if (!t && n) return n(e, !0);
        if (s) return s(e, !0);
        throw (
          (((n = new Error("Cannot find module '" + e + "'")).code =
            "MODULE_NOT_FOUND"),
          n)
        );
      }
      (n = r[e] = { exports: {} }),
        o[e][0].call(
          n.exports,
          function (t) {
            return c(o[e][1][t] || t);
          },
          n,
          n.exports,
          a,
          o,
          r,
          i
        );
    }
    return r[e].exports;
  }
  for (
    var s = "function" == typeof require && require, t = 0;
    t < i.length;
    t++
  )
    c(i[t]);
  return c;
})(
  {1: [
    function (t, e, n) {
      "use strict";
      var a, o, r;
      "document" in window.self &&
        (("classList" in document.createElement("_") &&
          (!document.createElementNS ||
            "classList" in
              document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
          (function (t) {
            if ("Element" in t) {
              var e = "classList",
                n = "prototype",
                a = t.Element[n],
                o = Object,
                r =
                  String[n].trim ||
                  function () {
                    return this.replace(/^\s+|\s+$/g, "");
                  },
                i =
                  Array[n].indexOf ||
                  function (t) {
                    for (var e = 0, n = this.length; e < n; e++)
                      if (e in this && this[e] === t) return e;
                    return -1;
                  },
                c = function (t, e) {
                  (this.name = t),
                    (this.code = DOMException[t]),
                    (this.message = e);
                },
                s = function (t, e) {
                  if ("" === e)
                    throw new c(
                      "SYNTAX_ERR",
                      "An invalid or illegal string was specified"
                    );
                  if (/\s/.test(e))
                    throw new c(
                      "INVALID_CHARACTER_ERR",
                      "String contains an invalid character"
                    );
                  return i.call(t, e);
                },
                u = function (t) {
                  for (
                    var e = r.call(t.getAttribute("class") || ""),
                      n = e ? e.split(/\s+/) : [],
                      a = 0,
                      o = n.length;
                    a < o;
                    a++
                  )
                    this.push(n[a]);
                  this._updateClassName = function () {
                    t.setAttribute("class", this.toString());
                  };
                },
                l = (u[n] = []),
                t = function () {
                  return new u(this);
                };
              if (
                ((c[n] = Error[n]),
                (l.item = function (t) {
                  return this[t] || null;
                }),
                (l.contains = function (t) {
                  return -1 !== s(this, (t += ""));
                }),
                (l.add = function () {
                  for (
                    var t, e = arguments, n = 0, a = e.length, o = !1;
                    -1 === s(this, (t = e[n] + "")) &&
                      (this.push(t), (o = !0)),
                      ++n < a;

                  );
                  o && this._updateClassName();
                }),
                (l.remove = function () {
                  var t,
                    e,
                    n = arguments,
                    a = 0,
                    o = n.length,
                    r = !1;
                  do {
                    for (e = s(this, (t = n[a] + "")); -1 !== e; )
                      this.splice(e, 1), (r = !0), (e = s(this, t));
                  } while (++a < o);
                  r && this._updateClassName();
                }),
                (l.toggle = function (t, e) {
                  t += "";
                  var n = this.contains(t),
                    a = n ? !0 !== e && "remove" : !1 !== e && "add";
                  return a && this[a](t), !0 === e || !1 === e ? e : !n;
                }),
                (l.toString = function () {
                  return this.join(" ");
                }),
                o.defineProperty)
              ) {
                var d = { get: t, enumerable: !0, configurable: !0 };
                try {
                  o.defineProperty(a, e, d);
                } catch (t) {
                  (void 0 !== t.number && -2146823252 !== t.number) ||
                    ((d.enumerable = !1), o.defineProperty(a, e, d));
                }
              } else o[n].__defineGetter__ && a.__defineGetter__(e, t);
            }
          })(window.self),
        (r = document.createElement("_")).classList.add("c1", "c2"),
        r.classList.contains("c2") ||
          ((a = function (t) {
            var a = DOMTokenList.prototype[t];
            DOMTokenList.prototype[t] = function (t) {
              for (var e = arguments.length, n = 0; n < e; n++)
                (t = arguments[n]), a.call(this, t);
            };
          })("add"),
          a("remove")),
        r.classList.toggle("c3", !1),
        r.classList.contains("c3") &&
          ((o = DOMTokenList.prototype.toggle),
          (DOMTokenList.prototype.toggle = function (t, e) {
            return 1 in arguments && !this.contains(t) == !e
              ? e
              : o.call(this, t);
          })),
        (r = null));
    },
    {},
  ],},
  {},
  [40]
);
//# sourceMappingURL=uswds.min.js.map
