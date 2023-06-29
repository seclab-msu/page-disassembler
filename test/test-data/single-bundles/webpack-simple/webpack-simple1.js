/*! Copyright 2021 Cyber Skyline Inc. All rights reserved. */ !(function () {
  "use strict";
  var e,
    t = {90216: function (e, t, a) {
        var n = a(45697),
          r = a(67294),
          i = a(95318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var l = i(a(67154)),
          o = i(a(6479)),
          s = i(a(34575)),
          c = i(a(93913)),
          d = i(a(81506)),
          u = i(a(2205)),
          m = i(a(78585)),
          p = i(a(29754)),
          f = a(32630),
          h = ["children", "onOnScreen"];
        function g(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var a,
              n = (0, p.default)(e);
            if (t) {
              var r = (0, p.default)(this).constructor;
              a = Reflect.construct(n, arguments, r);
            } else a = n.apply(this, arguments);
            return (0, m.default)(this, a);
          };
        }
        var y = n,
          v = y.node,
          b = y.func,
          E = (function (e) {
            (0, u.default)(a, e);
            var t = g(a);
            function a(e) {
              var n;
              return (
                (0, s.default)(this, a),
                ((n = t.call(this, e)).state = { show: !1 }),
                (n.onOnScreen = n.onOnScreen.bind((0, d.default)(n))),
                n
              );
            }
            return (
              (0, c.default)(a, [
                {
                  key: "onOnScreen",
                  value: function () {
                    this.setState({ show: !0 }), this.props.onOnScreen();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      a = (e.onOnScreen, (0, o.default)(e, h));
                    return this.state.show
                      ? t
                      : r.createElement(
                          f.Visibility,
                          (0, l.default)(
                            { fireOnMount: !0, onOnScreen: this.onOnScreen },
                            a
                          )
                        );
                  },
                },
              ]),
              a
            );
          })(r.PureComponent);
        (t.default = E),
          (E.propTypes = { children: v, onOnScreen: b }),
          (E.defaultProps = { onOnScreen: Function.prototype }),
          (E.displayName = "LazyLoader"),
          (e.exports = t.default);
      },
      53602: function (e, t, a) {
        var n = a(45697),
          r = a(67294),
          i = a(96486),
          l = a(6275),
          o = a(95318);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f);
        var s = o(a(90165)),
          c = o(a(12978)),
          d = n,
          u = d.string,
          m = d.object,
          p = {
            border: {
              backgroundColor: s.default.WHITE.GAINSBORO,
              borderRadius: 6,
              borderWidth: 4,
              borderColor: s.default.WHITE.GAINSBORO,
              borderStyle: "solid",
              width: "100%",
              height: "auto",
              boxShadow:
                "0 1px 5px 0 rgba(0,0,0,.07), 0 7px 17px 0 rgba(0,0,0,.1)",
            },
            img: {
              overflow: "hidden",
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              cursor: "pointer",
            },
            navbar: {
              marginBottom: "calc(0.18% + 4px)",
              marginLeft: "calc(0.3% + 2px)",
              marginRight: "calc(0.05% + 1px)",
            },
          };
        function f(e) {
          var t = e.src,
            a = e.alt,
            n = e.style;
          return r.createElement(
            "div",
            { style: i.assign({}, p.border, n) },
            r.createElement("img", {
              style: p.navbar,
              src: l.url.media("/img/navbar.svg"),
              alt: "",
            }),
            r.createElement(c.default, {
              src: t,
              alt: a,
              trigger: r.createElement(
                "div",
                null,
                r.createElement("img", {
                  className: "ui image",
                  style: p.img,
                  src: t,
                  alt: a,
                })
              ),
            })
          );
        }
        (f.propTypes = { src: u, alt: u, style: m }),
          (f.displayName = "Screenshot"),
          (e.exports = t.default);
      }},
    a = {};
  function n(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var i = (a[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.m = t),
    (n.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (n.amdO = {}),
    (e = []),
    (n.O = function (t, a, r, i) {
      if (!a) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          (a = e[d][0]), (r = e[d][1]), (i = e[d][2]);
          for (var o = !0, s = 0; s < a.length; s++)
            (!1 & i || l >= i) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](a[s]);
            })
              ? a.splice(s--, 1)
              : ((o = !1), i < l && (l = i));
          if (o) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [a, r, i];
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (n.j = 131),
    (function () {
      var e = { 131: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var r,
            i,
            l = a[0],
            o = a[1],
            s = a[2],
            c = 0;
          if (
            l.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in o) n.o(o, r) && (n.m[r] = o[r]);
            if (s) var d = s(n);
          }
          for (t && t(a); c < l.length; c++)
            (i = l[c]), n.o(e, i) && e[i] && e[i][0](), (e[l[c]] = 0);
          return n.O(d);
        },
        a = (self.webpackChunkcyberskyline_frontend =
          self.webpackChunkcyberskyline_frontend || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var r = n.O(void 0, [662], function () {
    return n(81363);
  });
  r = n.O(r);
})();
//# sourceMappingURL=homepage.js.map
