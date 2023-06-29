webpackJsonp([2, 0], {0: function (e, t, n) {
    n(1),
      n(26),
      n(27),
      n(56),
      n(59),
      n(58),
      n(60),
      n(54),
      n(228),
      n(64),
      (e.exports = n(62));
  },
  1: function (e, t, n) {
    n(14), (e.exports = angular);
  },
  2: function (e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */
    !(function (t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      function a(e, t, n) {
        n = n || Me;
        var r,
          i,
          o = n.createElement("script");
        if (((o.text = e), t))
          for (r in Te)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))),
              i && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function s(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? ve[be.call(e)] || "object"
          : typeof e;
      }
      function l(e) {
        var t = !!e && "length" in e && e.length,
          n = s(e);
        return (
          !Ce(e) &&
          !xe(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function c(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      function u(e, t, n) {
        return Ce(t)
          ? ke.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? ke.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? ke.grep(e, function (e) {
              return ge.call(t, e) > -1 !== n;
            })
          : ke.filter(t, e, n);
      }
      function d(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      function m(e) {
        var t = {};
        return (
          ke.each(e.match(Ve) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function h(e) {
        return e;
      }
      function p(e) {
        throw e;
      }
      function f(e, t, n, r) {
        var i;
        try {
          e && Ce((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && Ce((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      function g() {
        Me.removeEventListener("DOMContentLoaded", g),
          n.removeEventListener("load", g),
          ke.ready();
      }
      function v(e, t) {
        return t.toUpperCase();
      }
      function b(e) {
        return e.replace(qe, "ms-").replace(Ue, v);
      }
      function $() {
        this.expando = ke.expando + $.uid++;
      }
      function y(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            ("null" === e
              ? null
              : e === +e + ""
              ? +e
              : Ye.test(e)
              ? JSON.parse(e)
              : e))
        );
      }
      function E(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(Ge, "-$&").toLowerCase()),
            (n = e.getAttribute(r)),
            "string" == typeof n)
          ) {
            try {
              n = y(n);
            } catch (e) {}
            Ke.set(e, t, n);
          } else n = void 0;
        return n;
      }
      function w(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return ke.css(e, t, "");
              },
          l = s(),
          c = (n && n[3]) || (ke.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (ke.cssNumber[t] || ("px" !== c && +l)) &&
            Ze.exec(ke.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; a--; )
            ke.style(e, t, u + c),
              (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
              (u /= o);
          (u *= 2), ke.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = u), (r.end = i))),
          i
        );
      }
      function C(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = rt[r];
        return i
          ? i
          : ((t = n.body.appendChild(n.createElement(r))),
            (i = ke.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (rt[r] = i),
            i);
      }
      function x(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]),
            r.style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = We.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && nt(r) && (i[o] = C(r)))
                : "none" !== n && ((i[o] = "none"), We.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      function M(e, t) {
        var n;
        return (
          (n =
            "undefined" != typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" != typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && c(e, t)) ? ke.merge([e], n) : n
        );
      }
      function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          We.set(e[n], "globalEval", !t || We.get(t[n], "globalEval"));
      }
      function A(e, t, n, r, i) {
        for (
          var o,
            a,
            l,
            c,
            u,
            d,
            m = t.createDocumentFragment(),
            h = [],
            p = 0,
            f = e.length;
          p < f;
          p++
        )
          if (((o = e[p]), o || 0 === o))
            if ("object" === s(o)) ke.merge(h, o.nodeType ? [o] : o);
            else if (lt.test(o)) {
              for (
                a = a || m.appendChild(t.createElement("div")),
                  l = (ot.exec(o) || ["", ""])[1].toLowerCase(),
                  c = st[l] || st._default,
                  a.innerHTML = c[1] + ke.htmlPrefilter(o) + c[2],
                  d = c[0];
                d--;

              )
                a = a.lastChild;
              ke.merge(h, a.childNodes),
                (a = m.firstChild),
                (a.textContent = "");
            } else h.push(t.createTextNode(o));
        for (m.textContent = "", p = 0; (o = h[p++]); )
          if (r && ke.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = et(o)), (a = M(m.appendChild(o), "script")), u && T(a), n)
          )
            for (d = 0; (o = a[d++]); ) at.test(o.type || "") && n.push(o);
        return m;
      }
      function k() {
        return !0;
      }
      function S() {
        return !1;
      }
      function _(e, t) {
        return (e === N()) == ("focus" === t);
      }
      function N() {
        try {
          return Me.activeElement;
        } catch (e) {}
      }
      function O(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof n && ((r = r || n), (n = void 0));
          for (s in t) O(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          i === !1)
        )
          i = S;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            (i = function (e) {
              return ke().off(e), a.apply(this, arguments);
            }),
            (i.guid = a.guid || (a.guid = ke.guid++))),
          e.each(function () {
            ke.event.add(this, t, i, r, n);
          })
        );
      }
      function D(e, t, n) {
        return n
          ? (We.set(e, t, !1),
            void ke.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = We.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (ke.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = he.call(arguments)),
                    We.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    (i = We.get(this, t)),
                    o !== i || r ? We.set(this, t, !1) : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      i && i.value
                    );
                } else
                  o.length &&
                    (We.set(this, t, {
                      value: ke.event.trigger(
                        ke.extend(o[0], ke.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void (void 0 === We.get(e, t) && ke.event.add(e, t, k));
      }
      function I(e, t) {
        return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? ke(e).children("tbody")[0] || e
          : e;
      }
      function H(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function P(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function L(e, t) {
        var n, r, i, o, a, s, l;
        if (1 === t.nodeType) {
          if (We.hasData(e) && ((o = We.get(e)), (l = o.events))) {
            We.remove(t, "handle events");
            for (i in l)
              for (n = 0, r = l[i].length; n < r; n++)
                ke.event.add(t, i, l[i][n]);
          }
          Ke.hasData(e) &&
            ((a = Ke.access(e)), (s = ke.extend({}, a)), Ke.set(t, s));
        }
      }
      function R(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && it.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function V(e, t, n, r) {
        t = pe(t);
        var i,
          o,
          s,
          l,
          c,
          u,
          d = 0,
          m = e.length,
          h = m - 1,
          p = t[0],
          f = Ce(p);
        if (
          f ||
          (m > 1 && "string" == typeof p && !we.checkClone && dt.test(p))
        )
          return e.each(function (i) {
            var o = e.eq(i);
            f && (t[0] = p.call(this, i, o.html())), V(o, t, n, r);
          });
        if (
          m &&
          ((i = A(t, e[0].ownerDocument, !1, e, r)),
          (o = i.firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (s = ke.map(M(i, "script"), H), l = s.length; d < m; d++)
            (c = i),
              d !== h &&
                ((c = ke.clone(c, !0, !0)), l && ke.merge(s, M(c, "script"))),
              n.call(e[d], c, d);
          if (l)
            for (
              u = s[s.length - 1].ownerDocument, ke.map(s, P), d = 0;
              d < l;
              d++
            )
              (c = s[d]),
                at.test(c.type || "") &&
                  !We.access(c, "globalEval") &&
                  ke.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? ke._evalUrl &&
                      !c.noModule &&
                      ke._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : a(c.textContent.replace(mt, ""), c, u));
        }
        return e;
      }
      function F(e, t, n) {
        for (var r, i = t ? ke.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || ke.cleanData(M(r)),
            r.parentNode &&
              (n && et(r) && T(M(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      function j(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || pt(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            "" !== a || et(e) || (a = ke.style(e, t)),
            !we.pixelBoxStyles() &&
              ht.test(a) &&
              gt.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function B(e, t) {
        return {
          get: function () {
            return e()
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
          },
        };
      }
      function q(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--; )
          if (((e = vt[n] + t), e in bt)) return e;
      }
      function U(e) {
        var t = ke.cssProps[e] || $t[e];
        return t ? t : e in bt ? e : ($t[e] = q(e) || e);
      }
      function z(e, t, n) {
        var r = Ze.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function W(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += ke.css(e, n + Qe[a], !0, i)),
            r
              ? ("content" === n && (l -= ke.css(e, "padding" + Qe[a], !0, i)),
                "margin" !== n &&
                  (l -= ke.css(e, "border" + Qe[a] + "Width", !0, i)))
              : ((l += ke.css(e, "padding" + Qe[a], !0, i)),
                "padding" !== n
                  ? (l += ke.css(e, "border" + Qe[a] + "Width", !0, i))
                  : (s += ke.css(e, "border" + Qe[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function K(e, t, n) {
        var r = pt(e),
          i = !we.boxSizingReliable() || n,
          o = i && "border-box" === ke.css(e, "boxSizing", !1, r),
          a = o,
          s = j(e, t, r),
          l = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ht.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!we.boxSizingReliable() && o) ||
            (!we.reliableTrDimensions() && c(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === ke.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((o = "border-box" === ke.css(e, "boxSizing", !1, r)),
            (a = l in e),
            a && (s = e[l])),
          (s = parseFloat(s) || 0),
          s + W(e, t, n || (o ? "border" : "content"), a, r, s) + "px"
        );
      }
      function Y(e, t, n, r, i) {
        return new Y.prototype.init(e, t, n, r, i);
      }
      function G() {
        Mt &&
          (Me.hidden === !1 && n.requestAnimationFrame
            ? n.requestAnimationFrame(G)
            : n.setTimeout(G, ke.fx.interval),
          ke.fx.tick());
      }
      function X() {
        return (
          n.setTimeout(function () {
            xt = void 0;
          }),
          (xt = Date.now())
        );
      }
      function Z(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          (n = Qe[r]), (i["margin" + n] = i["padding" + n] = e);
        return t && (i.opacity = i.width = e), i;
      }
      function Q(e, t, n) {
        for (
          var r,
            i = (te.tweeners[t] || []).concat(te.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function J(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          m = this,
          h = {},
          p = e.style,
          f = e.nodeType && nt(e),
          g = We.get(e, "fxshow");
        n.queue ||
          ((a = ke._queueHooks(e, "fx")),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          m.always(function () {
            m.always(function () {
              a.unqueued--, ke.queue(e, "fx").length || a.empty.fire();
            });
          }));
        for (r in t)
          if (((i = t[r]), Tt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (f ? "hide" : "show"))
            ) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              f = !0;
            }
            h[r] = (g && g[r]) || ke.style(e, r);
          }
        if (((l = !ke.isEmptyObject(t)), l || !ke.isEmptyObject(h))) {
          d &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            (c = g && g.display),
            null == c && (c = We.get(e, "display")),
            (u = ke.css(e, "display")),
            "none" === u &&
              (c
                ? (u = c)
                : (x([e], !0),
                  (c = e.style.display || c),
                  (u = ke.css(e, "display")),
                  x([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === ke.css(e, "float") &&
              (l ||
                (m.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              m.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (l = !1);
          for (r in h)
            l ||
              (g
                ? "hidden" in g && (f = g.hidden)
                : (g = We.access(e, "fxshow", { display: c })),
              o && (g.hidden = !f),
              f && x([e], !0),
              m.done(function () {
                f || x([e]), We.remove(e, "fxshow");
                for (r in h) ke.style(e, r, h[r]);
              })),
              (l = Q(f ? g[r] : 0, r, m)),
              r in g ||
                ((g[r] = l.start), f && ((l.end = l.start), (l.start = 0)));
        }
      }
      function ee(e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((r = b(n)),
            (i = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ke.cssHooks[r]),
            a && "expand" in a)
          ) {
            (o = a.expand(o)), delete e[r];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
      }
      function te(e, t, n) {
        var r,
          i,
          o = 0,
          a = te.prefilters.length,
          s = ke.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (i) return !1;
            for (
              var t = xt || X(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = n / c.duration || 0,
                o = 1 - r,
                a = 0,
                l = c.tweens.length;
              a < l;
              a++
            )
              c.tweens[a].run(o);
            return (
              s.notifyWith(e, [c, o, n]),
              o < 1 && l
                ? n
                : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: ke.extend({}, t),
            opts: ke.extend(
              !0,
              { specialEasing: {}, easing: ke.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: xt || X(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = ke.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (ee(u, c.opts.specialEasing); o < a; o++)
          if ((r = te.prefilters[o].call(c, e, u, c.opts)))
            return (
              Ce(r.stop) &&
                (ke._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          ke.map(u, Q, c),
          Ce(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          ke.fx.timer(ke.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      function ne(e) {
        var t = e.match(Ve) || [];
        return t.join(" ");
      }
      function re(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function ie(e) {
        return Array.isArray(e)
          ? e
          : "string" == typeof e
          ? e.match(Ve) || []
          : [];
      }
      function oe(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          ke.each(t, function (t, i) {
            n || Rt.test(e)
              ? r(e, i)
              : oe(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== s(t)) r(e, t);
        else for (i in t) oe(e + "[" + i + "]", t[i], n, r);
      }
      function ae(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(Ve) || [];
          if (Ce(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function se(e, t, n, r) {
        function i(s) {
          var l;
          return (
            (o[s] = !0),
            ke.each(e[s] || [], function (e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || a || o[c]
                ? a
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), i(c), !1);
            }),
            l
          );
        }
        var o = {},
          a = e === Xt;
        return i(t.dataTypes[0]) || (!o["*"] && i("*"));
      }
      function le(e, t) {
        var n,
          r,
          i = ke.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ke.extend(!0, e, r), e;
      }
      function ce(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (i in s)
            if (s[i] && s[i].test(r)) {
              l.unshift(i);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (i in n) {
            if (!l[0] || e.converters[i + " " + l[0]]) {
              o = i;
              break;
            }
            a || (a = i);
          }
          o = o || a;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function ue(e, t, n, r) {
        var i,
          o,
          a,
          s,
          l,
          c = {},
          u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o; )
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (l = o),
            (o = u.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (((a = c[l + " " + o] || c["* " + o]), !a))
                for (i in c)
                  if (
                    ((s = i.split(" ")),
                    s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]]))
                  ) {
                    a === !0
                      ? (a = c[i])
                      : c[i] !== !0 && ((o = s[0]), u.unshift(s[1]));
                    break;
                  }
              if (a !== !0)
                if (a && e.throws) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + l + " to " + o,
                    };
                  }
            }
        return { state: "success", data: t };
      }
      var de = [],
        me = Object.getPrototypeOf,
        he = de.slice,
        pe = de.flat
          ? function (e) {
              return de.flat.call(e);
            }
          : function (e) {
              return de.concat.apply([], e);
            },
        fe = de.push,
        ge = de.indexOf,
        ve = {},
        be = ve.toString,
        $e = ve.hasOwnProperty,
        ye = $e.toString,
        Ee = ye.call(Object),
        we = {},
        Ce = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        xe = function (e) {
          return null != e && e === e.window;
        },
        Me = n.document,
        Te = { type: !0, src: !0, nonce: !0, noModule: !0 },
        Ae = "3.6.0",
        ke = function (e, t) {
          return new ke.fn.init(e, t);
        };
      (ke.fn = ke.prototype =
        {
          jquery: Ae,
          constructor: ke,
          length: 0,
          toArray: function () {
            return he.call(this);
          },
          get: function (e) {
            return null == e
              ? he.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = ke.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return ke.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              ke.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(he.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              ke.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              ke.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: fe,
          sort: de.sort,
          splice: de.splice,
        }),
        (ke.extend = ke.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || Ce(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      a !== r &&
                      (c && r && (ke.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || ke.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[t] = ke.extend(c, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        ke.extend({
          expando: "jQuery" + (Ae + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== be.call(e)) &&
              (!(t = me(e)) ||
                ((n = $e.call(t, "constructor") && t.constructor),
                "function" == typeof n && ye.call(n) === Ee))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            a(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (l(e))
              for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (l(Object(e))
                  ? ke.merge(n, "string" == typeof e ? [e] : e)
                  : fe.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : ge.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
              (r = !t(e[o], o)), r !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (l(e))
              for (r = e.length; o < r; o++)
                (i = t(e[o], o, n)), null != i && a.push(i);
            else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
            return pe(a);
          },
          guid: 1,
          support: we,
        }),
        "function" == typeof Symbol &&
          (ke.fn[Symbol.iterator] = de[Symbol.iterator]),
        ke.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            ve["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var Se =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        (function (e) {
          function t(e, t, n, r) {
            var i,
              o,
              a,
              s,
              l,
              c,
              u,
              m = t && t.ownerDocument,
              p = t ? t.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
            )
              return n;
            if (!r && (O(t), (t = t || D), H)) {
              if (11 !== p && (l = $e.exec(e)))
                if ((i = l[1])) {
                  if (9 === p) {
                    if (!(a = t.getElementById(i))) return n;
                    if (a.id === i) return n.push(a), n;
                  } else if (
                    m &&
                    (a = m.getElementById(i)) &&
                    V(t, a) &&
                    a.id === i
                  )
                    return n.push(a), n;
                } else {
                  if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                  if (
                    (i = l[3]) &&
                    w.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return J.apply(n, t.getElementsByClassName(i)), n;
                }
              if (
                w.qsa &&
                !K[e + " "] &&
                (!P || !P.test(e)) &&
                (1 !== p || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((u = e), (m = t), 1 === p && (de.test(e) || ue.test(e)))) {
                  for (
                    m = (ye.test(e) && d(t.parentNode)) || t,
                      (m === t && w.scope) ||
                        ((s = t.getAttribute("id"))
                          ? (s = s.replace(Ce, xe))
                          : t.setAttribute("id", (s = F))),
                      c = T(e),
                      o = c.length;
                    o--;

                  )
                    c[o] = (s ? "#" + s : ":scope") + " " + h(c[o]);
                  u = c.join(",");
                }
                try {
                  return J.apply(n, m.querySelectorAll(u)), n;
                } catch (t) {
                  K(e, !0);
                } finally {
                  s === F && t.removeAttribute("id");
                }
              }
            }
            return k(e.replace(le, "$1"), t, n, r);
          }
          function n() {
            function e(n, r) {
              return (
                t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                (e[n + " "] = r)
              );
            }
            var t = [];
            return e;
          }
          function r(e) {
            return (e[F] = !0), e;
          }
          function i(e) {
            var t = D.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              C.attrHandle[n[r]] = t;
          }
          function a(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function s(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function l(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function c(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && t.disabled === !1
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function u(e) {
            return r(function (t) {
              return (
                (t = +t),
                r(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
          }
          function m() {}
          function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function p(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = q++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    m = [B, s];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((d = t[F] || (t[F] = {})),
                          (u = d[t.uniqueID] || (d[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((c = u[o]) && c[0] === B && c[1] === s)
                            return (m[2] = c[2]);
                          if (((u[o] = m), (m[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function f(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r;
          }
          function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
            return a;
          }
          function b(e, t, n, i, o, a) {
            return (
              i && !i[F] && (i = b(i)),
              o && !o[F] && (o = b(o, a)),
              r(function (r, a, s, l) {
                var c,
                  u,
                  d,
                  m = [],
                  h = [],
                  p = a.length,
                  f = r || g(t || "*", s.nodeType ? [s] : s, []),
                  b = !e || (!r && t) ? f : v(f, m, e, s, l),
                  $ = n ? (o || (r ? e : p || i) ? [] : a) : b;
                if ((n && n(b, $, s, l), i))
                  for (c = v($, h), i(c, [], s, l), u = c.length; u--; )
                    (d = c[u]) && ($[h[u]] = !(b[h[u]] = d));
                if (r) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = $.length; u--; )
                        (d = $[u]) && c.push((b[u] = d));
                      o(null, ($ = []), c, l);
                    }
                    for (u = $.length; u--; )
                      (d = $[u]) &&
                        (c = o ? te(r, d) : m[u]) > -1 &&
                        (r[c] = !(a[c] = d));
                  }
                } else ($ = v($ === a ? $.splice(p, $.length) : $)), o ? o(null, a, $, l) : J.apply(a, $);
              })
            );
          }
          function $(e) {
            for (
              var t,
                n,
                r,
                i = e.length,
                o = C.relative[e[0].type],
                a = o || C.relative[" "],
                s = o ? 1 : 0,
                l = p(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                c = p(
                  function (e) {
                    return te(t, e) > -1;
                  },
                  a,
                  !0
                ),
                u = [
                  function (e, n, r) {
                    var i =
                      (!o && (r || n !== S)) ||
                      ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                    return (t = null), i;
                  },
                ];
              s < i;
              s++
            )
              if ((n = C.relative[e[s].type])) u = [p(f(u), n)];
              else {
                if (
                  ((n = C.filter[e[s].type].apply(null, e[s].matches)), n[F])
                ) {
                  for (r = ++s; r < i && !C.relative[e[r].type]; r++);
                  return b(
                    s > 1 && f(u),
                    s > 1 &&
                      h(
                        e
                          .slice(0, s - 1)
                          .concat({ value: " " === e[s - 2].type ? "*" : "" })
                      ).replace(le, "$1"),
                    n,
                    s < r && $(e.slice(s, r)),
                    r < i && $((e = e.slice(r))),
                    r < i && h(e)
                  );
                }
                u.push(n);
              }
            return f(u);
          }
          function y(e, n) {
            var i = n.length > 0,
              o = e.length > 0,
              a = function (r, a, s, l, c) {
                var u,
                  d,
                  m,
                  h = 0,
                  p = "0",
                  f = r && [],
                  g = [],
                  b = S,
                  $ = r || (o && C.find.TAG("*", c)),
                  y = (B += null == b ? 1 : Math.random() || 0.1),
                  E = $.length;
                for (
                  c && (S = a == D || a || c);
                  p !== E && null != (u = $[p]);
                  p++
                ) {
                  if (o && u) {
                    for (
                      d = 0, a || u.ownerDocument == D || (O(u), (s = !H));
                      (m = e[d++]);

                    )
                      if (m(u, a || D, s)) {
                        l.push(u);
                        break;
                      }
                    c && (B = y);
                  }
                  i && ((u = !m && u) && h--, r && f.push(u));
                }
                if (((h += p), i && p !== h)) {
                  for (d = 0; (m = n[d++]); ) m(f, g, a, s);
                  if (r) {
                    if (h > 0) for (; p--; ) f[p] || g[p] || (g[p] = Z.call(l));
                    g = v(g);
                  }
                  J.apply(l, g),
                    c &&
                      !r &&
                      g.length > 0 &&
                      h + n.length > 1 &&
                      t.uniqueSort(l);
                }
                return c && ((B = y), (S = b)), f;
              };
            return i ? r(a) : a;
          }
          var E,
            w,
            C,
            x,
            M,
            T,
            A,
            k,
            S,
            _,
            N,
            O,
            D,
            I,
            H,
            P,
            L,
            R,
            V,
            F = "sizzle" + 1 * new Date(),
            j = e.document,
            B = 0,
            q = 0,
            U = n(),
            z = n(),
            W = n(),
            K = n(),
            Y = function (e, t) {
              return e === t && (N = !0), 0;
            },
            G = {}.hasOwnProperty,
            X = [],
            Z = X.pop,
            Q = X.push,
            J = X.push,
            ee = X.slice,
            te = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            ne =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              re +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            oe =
              "\\[" +
              re +
              "*(" +
              ie +
              ")(?:" +
              re +
              "*([*^$|!~]?=)" +
              re +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              ie +
              "))|)" +
              re +
              "*\\]",
            ae =
              ":(" +
              ie +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              oe +
              ")*)|.*)\\)|)",
            se = new RegExp(re + "+", "g"),
            le = new RegExp(
              "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
              "g"
            ),
            ce = new RegExp("^" + re + "*," + re + "*"),
            ue = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            de = new RegExp(re + "|>"),
            me = new RegExp(ae),
            he = new RegExp("^" + ie + "$"),
            pe = {
              ID: new RegExp("^#(" + ie + ")"),
              CLASS: new RegExp("^\\.(" + ie + ")"),
              TAG: new RegExp("^(" + ie + "|[*])"),
              ATTR: new RegExp("^" + oe),
              PSEUDO: new RegExp("^" + ae),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  re +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  re +
                  "*(?:([+-]|)" +
                  re +
                  "*(\\d+)|))" +
                  re +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + ne + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  re +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  re +
                  "*((?:-\\d)?\\d*)" +
                  re +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            fe = /HTML$/i,
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            be = /^[^{]+\{\s*\[native \w/,
            $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            Ee = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            we = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t
                ? t
                : n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            },
            Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            Me = function () {
              O();
            },
            Te = p(
              function (e) {
                return (
                  e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            J.apply((X = ee.call(j.childNodes)), j.childNodes),
              X[j.childNodes.length].nodeType;
          } catch (e) {
            J = {
              apply: X.length
                ? function (e, t) {
                    Q.apply(e, ee.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          (w = t.support = {}),
            (M = t.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !fe.test(t || (n && n.nodeName) || "HTML");
              }),
            (O = t.setDocument =
              function (e) {
                var t,
                  n,
                  r = e ? e.ownerDocument || e : j;
                return r != D && 9 === r.nodeType && r.documentElement
                  ? ((D = r),
                    (I = D.documentElement),
                    (H = !M(D)),
                    j != D &&
                      (n = D.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", Me, !1)
                        : n.attachEvent && n.attachEvent("onunload", Me)),
                    (w.scope = i(function (e) {
                      return (
                        I.appendChild(e).appendChild(D.createElement("div")),
                        "undefined" != typeof e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (w.attributes = i(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (w.getElementsByTagName = i(function (e) {
                      return (
                        e.appendChild(D.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (w.getElementsByClassName = be.test(
                      D.getElementsByClassName
                    )),
                    (w.getById = i(function (e) {
                      return (
                        (I.appendChild(e).id = F),
                        !D.getElementsByName || !D.getElementsByName(F).length
                      );
                    })),
                    w.getById
                      ? ((C.filter.ID = function (e) {
                          var t = e.replace(Ee, we);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (C.find.ID = function (e, t) {
                          if ("undefined" != typeof t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((C.filter.ID = function (e) {
                          var t = e.replace(Ee, we);
                          return function (e) {
                            var n =
                              "undefined" != typeof e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (C.find.ID = function (e, t) {
                          if ("undefined" != typeof t.getElementById && H) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                ((n = o.getAttributeNode("id")),
                                n && n.value === e)
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  ((n = o.getAttributeNode("id")),
                                  n && n.value === e)
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (C.find.TAG = w.getElementsByTagName
                      ? function (e, t) {
                          return "undefined" != typeof t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : w.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (C.find.CLASS =
                      w.getElementsByClassName &&
                      function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && H)
                          return t.getElementsByClassName(e);
                      }),
                    (L = []),
                    (P = []),
                    (w.qsa = be.test(D.querySelectorAll)) &&
                      (i(function (e) {
                        var t;
                        (I.appendChild(e).innerHTML =
                          "<a id='" +
                          F +
                          "'></a><select id='" +
                          F +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            P.push("[*^$]=" + re + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            P.push("\\[" + re + "*(?:value|" + ne + ")"),
                          e.querySelectorAll("[id~=" + F + "-]").length ||
                            P.push("~="),
                          (t = D.createElement("input")),
                          t.setAttribute("name", ""),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            P.push(
                              "\\[" +
                                re +
                                "*name" +
                                re +
                                "*=" +
                                re +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            P.push(":checked"),
                          e.querySelectorAll("a#" + F + "+*").length ||
                            P.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          P.push("[\\r\\n\\f]");
                      }),
                      i(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = D.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            P.push("name" + re + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            P.push(":enabled", ":disabled"),
                          (I.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            P.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          P.push(",.*:");
                      })),
                    (w.matchesSelector = be.test(
                      (R =
                        I.matches ||
                        I.webkitMatchesSelector ||
                        I.mozMatchesSelector ||
                        I.oMatchesSelector ||
                        I.msMatchesSelector)
                    )) &&
                      i(function (e) {
                        (w.disconnectedMatch = R.call(e, "*")),
                          R.call(e, "[s!='']:x"),
                          L.push("!=", ae);
                      }),
                    (P = P.length && new RegExp(P.join("|"))),
                    (L = L.length && new RegExp(L.join("|"))),
                    (t = be.test(I.compareDocumentPosition)),
                    (V =
                      t || be.test(I.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (Y = t
                      ? function (e, t) {
                          if (e === t) return (N = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return n
                            ? n
                            : ((n =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1),
                              1 & n ||
                              (!w.sortDetached &&
                                t.compareDocumentPosition(e) === n)
                                ? e == D || (e.ownerDocument == j && V(j, e))
                                  ? -1
                                  : t == D || (t.ownerDocument == j && V(j, t))
                                  ? 1
                                  : _
                                  ? te(_, e) - te(_, t)
                                  : 0
                                : 4 & n
                                ? -1
                                : 1);
                        }
                      : function (e, t) {
                          if (e === t) return (N = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            l = [t];
                          if (!i || !o)
                            return e == D
                              ? -1
                              : t == D
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : _
                              ? te(_, e) - te(_, t)
                              : 0;
                          if (i === o) return a(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) l.unshift(n);
                          for (; s[r] === l[r]; ) r++;
                          return r
                            ? a(s[r], l[r])
                            : s[r] == j
                            ? -1
                            : l[r] == j
                            ? 1
                            : 0;
                        }),
                    D)
                  : D;
              }),
            (t.matches = function (e, n) {
              return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
              if (
                (O(e),
                w.matchesSelector &&
                  H &&
                  !K[n + " "] &&
                  (!L || !L.test(n)) &&
                  (!P || !P.test(n)))
              )
                try {
                  var r = R.call(e, n);
                  if (
                    r ||
                    w.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  K(n, !0);
                }
              return t(n, D, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
              return (e.ownerDocument || e) != D && O(e), V(e, t);
            }),
            (t.attr = function (e, t) {
              (e.ownerDocument || e) != D && O(e);
              var n = C.attrHandle[t.toLowerCase()],
                r =
                  n && G.call(C.attrHandle, t.toLowerCase())
                    ? n(e, t, !H)
                    : void 0;
              return void 0 !== r
                ? r
                : w.attributes || !H
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (t.escape = function (e) {
              return (e + "").replace(Ce, xe);
            }),
            (t.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                i = 0;
              if (
                ((N = !w.detectDuplicates),
                (_ = !w.sortStable && e.slice(0)),
                e.sort(Y),
                N)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) e.splice(n[r], 1);
              }
              return (_ = null), e;
            }),
            (x = t.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += x(t);
                return n;
              }),
            (C = t.selectors =
              {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(Ee, we)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(Ee, we)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || t.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return pe.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            me.test(n) &&
                            (t = T(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(Ee, we).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = U[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + re + ")" + e + "(" + re + "|$)"
                      )) &&
                        U(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              ("undefined" != typeof e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, n, r) {
                    return function (i) {
                      var o = t.attr(i, e);
                      return null == o
                        ? "!=" === n
                        : !n ||
                            ((o += ""),
                            "=" === n
                              ? o === r
                              : "!=" === n
                              ? o !== r
                              : "^=" === n
                              ? r && 0 === o.indexOf(r)
                              : "*=" === n
                              ? r && o.indexOf(r) > -1
                              : "$=" === n
                              ? r && o.slice(-r.length) === r
                              : "~=" === n
                              ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                              : "|=" === n &&
                                (o === r ||
                                  o.slice(0, r.length + 1) === r + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            m,
                            h,
                            p,
                            f = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            b = !l && !s,
                            $ = !1;
                          if (g) {
                            if (o) {
                              for (; f; ) {
                                for (m = t; (m = m[f]); )
                                  if (
                                    s
                                      ? m.nodeName.toLowerCase() === v
                                      : 1 === m.nodeType
                                  )
                                    return !1;
                                p = f = "only" === e && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((p = [a ? g.firstChild : g.lastChild]), a && b)
                            ) {
                              for (
                                m = g,
                                  d = m[F] || (m[F] = {}),
                                  u = d[m.uniqueID] || (d[m.uniqueID] = {}),
                                  c = u[e] || [],
                                  h = c[0] === B && c[1],
                                  $ = h && c[2],
                                  m = h && g.childNodes[h];
                                (m =
                                  (++h && m && m[f]) || ($ = h = 0) || p.pop());

                              )
                                if (1 === m.nodeType && ++$ && m === t) {
                                  u[e] = [B, h, $];
                                  break;
                                }
                            } else if (
                              (b &&
                                ((m = t),
                                (d = m[F] || (m[F] = {})),
                                (u = d[m.uniqueID] || (d[m.uniqueID] = {})),
                                (c = u[e] || []),
                                (h = c[0] === B && c[1]),
                                ($ = h)),
                              $ === !1)
                            )
                              for (
                                ;
                                (m =
                                  (++h && m && m[f]) ||
                                  ($ = h = 0) ||
                                  p.pop()) &&
                                ((s
                                  ? m.nodeName.toLowerCase() !== v
                                  : 1 !== m.nodeType) ||
                                  !++$ ||
                                  (b &&
                                    ((d = m[F] || (m[F] = {})),
                                    (u = d[m.uniqueID] || (d[m.uniqueID] = {})),
                                    (u[e] = [B, $])),
                                  m !== t));

                              );
                            return (
                              ($ -= i), $ === r || ($ % r === 0 && $ / r >= 0)
                            );
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var i,
                      o =
                        C.pseudos[e] ||
                        C.setFilters[e.toLowerCase()] ||
                        t.error("unsupported pseudo: " + e);
                    return o[F]
                      ? o(n)
                      : o.length > 1
                      ? ((i = [e, e, "", n]),
                        C.setFilters.hasOwnProperty(e.toLowerCase())
                          ? r(function (e, t) {
                              for (var r, i = o(e, n), a = i.length; a--; )
                                (r = te(e, i[a])), (e[r] = !(t[r] = i[a]));
                            })
                          : function (e) {
                              return o(e, 0, i);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: r(function (e) {
                    var t = [],
                      n = [],
                      i = A(e.replace(le, "$1"));
                    return i[F]
                      ? r(function (e, t, n, r) {
                          for (
                            var o, a = i(e, null, r, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: r(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: r(function (e) {
                    return (
                      (e = e.replace(Ee, we)),
                      function (t) {
                        return (t.textContent || x(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: r(function (e) {
                    return (
                      he.test(e || "") || t.error("unsupported lang: " + e),
                      (e = e.replace(Ee, we).toLowerCase()),
                      function (t) {
                        var n;
                        do
                          if (
                            (n = H
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()),
                              n === e || 0 === n.indexOf(e + "-")
                            );
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === I;
                  },
                  focus: function (e) {
                    return (
                      e === D.activeElement &&
                      (!D.hasFocus || D.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: c(!1),
                  disabled: c(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      e.selected === !0
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !C.pseudos.empty(e);
                  },
                  header: function (e) {
                    return ve.test(e.nodeName);
                  },
                  input: function (e) {
                    return ge.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: u(function () {
                    return [0];
                  }),
                  last: u(function (e, t) {
                    return [t - 1];
                  }),
                  eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (C.pseudos.nth = C.pseudos.eq);
          for (E in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
          })
            C.pseudos[E] = s(E);
          for (E in { submit: !0, reset: !0 }) C.pseudos[E] = l(E);
          return (
            (m.prototype = C.filters = C.pseudos),
            (C.setFilters = new m()),
            (T = t.tokenize =
              function (e, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = C.preFilter; s; ) {
                  (r && !(i = ce.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
                    (r = !1),
                    (i = ue.exec(s)) &&
                      ((r = i.shift()),
                      o.push({ value: r, type: i[0].replace(le, " ") }),
                      (s = s.slice(r.length)));
                  for (a in C.filter)
                    !(i = pe[a].exec(s)) ||
                      (c[a] && !(i = c[a](i))) ||
                      ((r = i.shift()),
                      o.push({ value: r, type: a, matches: i }),
                      (s = s.slice(r.length)));
                  if (!r) break;
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0);
              }),
            (A = t.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  o = W[e + " "];
                if (!o) {
                  for (t || (t = T(e)), n = t.length; n--; )
                    (o = $(t[n])), o[F] ? r.push(o) : i.push(o);
                  (o = W(e, y(i, r))), (o.selector = e);
                }
                return o;
              }),
            (k = t.select =
              function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  l,
                  c = "function" == typeof e && e,
                  u = !r && T((e = c.selector || e));
                if (((n = n || []), 1 === u.length)) {
                  if (
                    ((o = u[0] = u[0].slice(0)),
                    o.length > 2 &&
                      "ID" === (a = o[0]).type &&
                      9 === t.nodeType &&
                      H &&
                      C.relative[o[1].type])
                  ) {
                    if (
                      ((t = (C.find.ID(a.matches[0].replace(Ee, we), t) ||
                        [])[0]),
                      !t)
                    )
                      return n;
                    c && (t = t.parentNode),
                      (e = e.slice(o.shift().value.length));
                  }
                  for (
                    i = pe.needsContext.test(e) ? 0 : o.length;
                    i-- && ((a = o[i]), !C.relative[(s = a.type)]);

                  )
                    if (
                      (l = C.find[s]) &&
                      (r = l(
                        a.matches[0].replace(Ee, we),
                        (ye.test(o[0].type) && d(t.parentNode)) || t
                      ))
                    ) {
                      if ((o.splice(i, 1), (e = r.length && h(o)), !e))
                        return J.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (c || A(e, u))(
                    r,
                    t,
                    !H,
                    n,
                    !t || (ye.test(e) && d(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (w.sortStable = F.split("").sort(Y).join("") === F),
            (w.detectDuplicates = !!N),
            O(),
            (w.sortDetached = i(function (e) {
              return 1 & e.compareDocumentPosition(D.createElement("fieldset"));
            })),
            i(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              o("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (w.attributes &&
              i(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            i(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              o(ne, function (e, t, n) {
                var r;
                if (!n)
                  return e[t] === !0
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            t
          );
        })(n);
      (ke.find = Se),
        (ke.expr = Se.selectors),
        (ke.expr[":"] = ke.expr.pseudos),
        (ke.uniqueSort = ke.unique = Se.uniqueSort),
        (ke.text = Se.getText),
        (ke.isXMLDoc = Se.isXML),
        (ke.contains = Se.contains),
        (ke.escapeSelector = Se.escape);
      var _e = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && ke(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        Ne = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        Oe = ke.expr.match.needsContext,
        De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      (ke.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? ke.find.matchesSelector(r, e)
              ? [r]
              : []
            : ke.find.matches(
                e,
                ke.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        ke.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                ke(e).filter(function () {
                  for (t = 0; t < r; t++)
                    if (ke.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) ke.find(e, i[t], n);
            return r > 1 ? ke.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(u(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(u(this, e || [], !0));
          },
          is: function (e) {
            return !!u(
              this,
              "string" == typeof e && Oe.test(e) ? ke(e) : e || [],
              !1
            ).length;
          },
        });
      var Ie,
        He = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Pe = (ke.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || Ie), "string" == typeof e)) {
            if (
              ((r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : He.exec(e)),
              !r || (!r[1] && t))
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof ke ? t[0] : t),
                ke.merge(
                  this,
                  ke.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : Me,
                    !0
                  )
                ),
                De.test(r[1]) && ke.isPlainObject(t))
              )
                for (r in t) Ce(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = Me.getElementById(r[2])),
              i && ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : Ce(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(ke)
            : ke.makeArray(e, this);
        });
      (Pe.prototype = ke.fn), (Ie = ke(Me));
      var Le = /^(?:parents|prev(?:Until|All))/,
        Re = { children: !0, contents: !0, next: !0, prev: !0 };
      ke.fn.extend({
        has: function (e) {
          var t = ke(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (ke.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && ke(e);
          if (!Oe.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && ke.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? ke.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? ge.call(ke(e), this[0])
              : ge.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(ke.uniqueSort(ke.merge(this.get(), ke(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        ke.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return _e(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return _e(e, "parentNode", n);
            },
            next: function (e) {
              return d(e, "nextSibling");
            },
            prev: function (e) {
              return d(e, "previousSibling");
            },
            nextAll: function (e) {
              return _e(e, "nextSibling");
            },
            prevAll: function (e) {
              return _e(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return _e(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return _e(e, "previousSibling", n);
            },
            siblings: function (e) {
              return Ne((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return Ne(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && me(e.contentDocument)
                ? e.contentDocument
                : (c(e, "template") && (e = e.content || e),
                  ke.merge([], e.childNodes));
            },
          },
          function (e, t) {
            ke.fn[e] = function (n, r) {
              var i = ke.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = ke.filter(r, i)),
                this.length > 1 &&
                  (Re[e] || ke.uniqueSort(i), Le.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var Ve = /[^\x20\t\r\n\f]+/g;
      (ke.Callbacks = function (e) {
        e = "string" == typeof e ? m(e) : ke.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          l = -1,
          c = function () {
            for (i = i || e.once, r = t = !0; a.length; l = -1)
              for (n = a.shift(); ++l < o.length; )
                o[l].apply(n[0], n[1]) === !1 &&
                  e.stopOnFalse &&
                  ((l = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((l = o.length - 1), a.push(n)),
                  (function t(n) {
                    ke.each(n, function (n, r) {
                      Ce(r)
                        ? (e.unique && u.has(r)) || o.push(r)
                        : r && r.length && "string" !== s(r) && t(r);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                ke.each(arguments, function (e, t) {
                  for (var n; (n = ke.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= l && l--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? ke.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = n || []),
                  (n = [e, n.slice ? n.slice() : n]),
                  a.push(n),
                  t || c()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        ke.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  ke.Callbacks("memory"),
                  ke.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  ke.Callbacks("once memory"),
                  ke.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  ke.Callbacks("once memory"),
                  ke.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return ke
                    .Deferred(function (n) {
                      ke.each(t, function (t, r) {
                        var i = Ce(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && Ce(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, r, i) {
                  function o(e, t, r, i) {
                    return function () {
                      var s = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < a)) {
                            if (((n = r.apply(s, l)), n === t.promise()))
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              Ce(c)
                                ? i
                                  ? c.call(n, o(a, t, h, i), o(a, t, p, i))
                                  : (a++,
                                    c.call(
                                      n,
                                      o(a, t, h, i),
                                      o(a, t, p, i),
                                      o(a, t, h, t.notifyWith)
                                    ))
                                : (r !== h && ((s = void 0), (l = [n])),
                                  (i || t.resolveWith)(s, l));
                          }
                        },
                        u = i
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                ke.Deferred.exceptionHook &&
                                  ke.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= a &&
                                    (r !== p && ((s = void 0), (l = [n])),
                                    t.rejectWith(s, l));
                              }
                            };
                      e
                        ? u()
                        : (ke.Deferred.getStackHook &&
                            (u.stackTrace = ke.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  var a = 0;
                  return ke
                    .Deferred(function (n) {
                      t[0][3].add(o(0, n, Ce(i) ? i : h, n.notifyWith)),
                        t[1][3].add(o(0, n, Ce(e) ? e : h)),
                        t[2][3].add(o(0, n, Ce(r) ? r : p));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? ke.extend(e, i) : i;
                },
              },
              o = {};
            return (
              ke.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = he.call(arguments),
              o = ke.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? he.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (f(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || Ce(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) f(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var Fe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (ke.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          Fe.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (ke.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var je = ke.Deferred();
      (ke.fn.ready = function (e) {
        return (
          je.then(e).catch(function (e) {
            ke.readyException(e);
          }),
          this
        );
      }),
        ke.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (e === !0 ? --ke.readyWait : ke.isReady) ||
              ((ke.isReady = !0),
              (e !== !0 && --ke.readyWait > 0) || je.resolveWith(Me, [ke]));
          },
        }),
        (ke.ready.then = je.then),
        "complete" === Me.readyState ||
        ("loading" !== Me.readyState && !Me.documentElement.doScroll)
          ? n.setTimeout(ke.ready)
          : (Me.addEventListener("DOMContentLoaded", g),
            n.addEventListener("load", g));
      var Be = function (e, t, n, r, i, o, a) {
          var l = 0,
            c = e.length,
            u = null == n;
          if ("object" === s(n)) {
            i = !0;
            for (l in n) Be(e, t, l, n[l], !0, o, a);
          } else if (
            void 0 !== r &&
            ((i = !0),
            Ce(r) || (a = !0),
            u &&
              (a
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(ke(e), n);
                  }))),
            t)
          )
            for (; l < c; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
          return i ? e : u ? t.call(e) : c ? t(e[0], n) : o;
        },
        qe = /^-ms-/,
        Ue = /-([a-z])/g,
        ze = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
      ($.uid = 1),
        ($.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                ze(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[b(t)] = n;
            else for (r in t) i[b(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][b(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                Array.isArray(t)
                  ? (t = t.map(b))
                  : ((t = b(t)), (t = t in r ? [t] : t.match(Ve) || [])),
                  (n = t.length);
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || ke.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ke.isEmptyObject(t);
          },
        });
      var We = new $(),
        Ke = new $(),
        Ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ge = /[A-Z]/g;
      ke.extend({
        hasData: function (e) {
          return Ke.hasData(e) || We.hasData(e);
        },
        data: function (e, t, n) {
          return Ke.access(e, t, n);
        },
        removeData: function (e, t) {
          Ke.remove(e, t);
        },
        _data: function (e, t, n) {
          return We.access(e, t, n);
        },
        _removeData: function (e, t) {
          We.remove(e, t);
        },
      }),
        ke.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Ke.get(o)),
                1 === o.nodeType && !We.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((r = a[n].name),
                    0 === r.indexOf("data-") &&
                      ((r = b(r.slice(5))), E(o, r, i[r])));
                We.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Ke.set(this, e);
                })
              : Be(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t) {
                      if (((n = Ke.get(o, e)), void 0 !== n)) return n;
                      if (((n = E(o, e)), void 0 !== n)) return n;
                    } else
                      this.each(function () {
                        Ke.set(this, e, t);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Ke.remove(this, e);
            });
          },
        }),
        ke.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = We.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = We.access(e, t, ke.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = ke.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = ke._queueHooks(e, t),
              a = function () {
                ke.dequeue(e, t);
              };
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, a, o)),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              We.get(e, n) ||
              We.access(e, n, {
                empty: ke.Callbacks("once memory").add(function () {
                  We.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        ke.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? ke.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = ke.queue(this, e, t);
                    ke._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== n[0] &&
                        ke.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              ke.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = ke.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = We.get(o[a], e + "queueHooks")),
                n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ze = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
        Qe = ["Top", "Right", "Bottom", "Left"],
        Je = Me.documentElement,
        et = function (e) {
          return ke.contains(e.ownerDocument, e);
        },
        tt = { composed: !0 };
      Je.getRootNode &&
        (et = function (e) {
          return (
            ke.contains(e.ownerDocument, e) ||
            e.getRootNode(tt) === e.ownerDocument
          );
        });
      var nt = function (e, t) {
          return (
            (e = t || e),
            "none" === e.style.display ||
              ("" === e.style.display &&
                et(e) &&
                "none" === ke.css(e, "display"))
          );
        },
        rt = {};
      ke.fn.extend({
        show: function () {
          return x(this, !0);
        },
        hide: function () {
          return x(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                nt(this) ? ke(this).show() : ke(this).hide();
              });
        },
      });
      var it = /^(?:checkbox|radio)$/i,
        ot = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        at = /^$|^module$|\/(?:java|ecma)script/i;
      !(function () {
        var e = Me.createDocumentFragment(),
          t = e.appendChild(Me.createElement("div")),
          n = Me.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (we.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (we.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
          (t.innerHTML = "<option></option>"),
          (we.option = !!t.lastChild);
      })();
      var st = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (st.tbody = st.tfoot = st.colgroup = st.caption = st.thead),
        (st.th = st.td),
        we.option ||
          (st.optgroup = st.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var lt = /<|&#?\w+;/,
        ct = /^([^.]*)(?:\.(.+)|)/;
      (ke.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            l,
            c,
            u,
            d,
            m,
            h,
            p,
            f,
            g = We.get(e);
          if (ze(e))
            for (
              n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                i && ke.find.matchesSelector(Je, i),
                n.guid || (n.guid = ke.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (a = g.handle) ||
                  (a = g.handle =
                    function (t) {
                      return "undefined" != typeof ke &&
                        ke.event.triggered !== t.type
                        ? ke.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                t = (t || "").match(Ve) || [""],
                c = t.length;
              c--;

            )
              (s = ct.exec(t[c]) || []),
                (h = f = s[1]),
                (p = (s[2] || "").split(".").sort()),
                h &&
                  ((d = ke.event.special[h] || {}),
                  (h = (i ? d.delegateType : d.bindType) || h),
                  (d = ke.event.special[h] || {}),
                  (u = ke.extend(
                    {
                      type: h,
                      origType: f,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && ke.expr.match.needsContext.test(i),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (m = l[h]) ||
                    ((m = l[h] = []),
                    (m.delegateCount = 0),
                    (d.setup && d.setup.call(e, r, p, a) !== !1) ||
                      (e.addEventListener && e.addEventListener(h, a))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  i ? m.splice(m.delegateCount++, 0, u) : m.push(u),
                  (ke.event.global[h] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            l,
            c,
            u,
            d,
            m,
            h,
            p,
            f,
            g = We.hasData(e) && We.get(e);
          if (g && (l = g.events)) {
            for (t = (t || "").match(Ve) || [""], c = t.length; c--; )
              if (
                ((s = ct.exec(t[c]) || []),
                (h = f = s[1]),
                (p = (s[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  d = ke.event.special[h] || {},
                    h = (r ? d.delegateType : d.bindType) || h,
                    m = l[h] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = m.length;
                  o--;

                )
                  (u = m[o]),
                    (!i && f !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (m.splice(o, 1),
                      u.selector && m.delegateCount--,
                      d.remove && d.remove.call(e, u));
                a &&
                  !m.length &&
                  ((d.teardown && d.teardown.call(e, p, g.handle) !== !1) ||
                    ke.removeEvent(e, h, g.handle),
                  delete l[h]);
              } else for (h in l) ke.event.remove(e, h + t[c], n, r, !0);
            ke.isEmptyObject(l) && We.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            l = ke.event.fix(e),
            c = (We.get(this, "events") || Object.create(null))[l.type] || [],
            u = ke.event.special[l.type] || {};
          for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || u.preDispatch.call(this, l) !== !1)
          ) {
            for (
              a = ke.event.handlers.call(this, l, c), t = 0;
              (i = a[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  o.namespace !== !1 &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  (r = (
                    (ke.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, s)),
                  void 0 !== r &&
                    (l.result = r) === !1 &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || c.disabled !== !0)
              ) {
                for (o = [], a = {}, n = 0; n < l; n++)
                  (r = t[n]),
                    (i = r.selector + " "),
                    void 0 === a[i] &&
                      (a[i] = r.needsContext
                        ? ke(i, this).index(c) > -1
                        : ke.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(ke.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: Ce(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[ke.expando] ? e : new ke.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                it.test(t.type) && t.click && c(t, "input") && D(t, "click", k),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                it.test(t.type) && t.click && c(t, "input") && D(t, "click"), !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (it.test(t.type) &&
                  t.click &&
                  c(t, "input") &&
                  We.get(t, "click")) ||
                c(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (ke.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (ke.Event = function (e, t) {
          return this instanceof ke.Event
            ? (e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && e.returnValue === !1)
                      ? k
                      : S),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
              t && ke.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              void (this[ke.expando] = !0))
            : new ke.Event(e, t);
        }),
        (ke.Event.prototype = {
          constructor: ke.Event,
          isDefaultPrevented: S,
          isPropagationStopped: S,
          isImmediatePropagationStopped: S,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = k),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = k),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = k),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        ke.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          ke.event.addProp
        ),
        ke.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          ke.event.special[e] = {
            setup: function () {
              return D(this, e, _), !1;
            },
            trigger: function () {
              return D(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        ke.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            ke.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || ke.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        ke.fn.extend({
          on: function (e, t, n, r) {
            return O(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return O(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                ke(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
              n === !1 && (n = S),
              this.each(function () {
                ke.event.remove(this, e, n, t);
              })
            );
          },
        });
      var ut = /<script|<style|<link/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      ke.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            l = et(e);
          if (
            !(
              we.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              ke.isXMLDoc(e)
            )
          )
            for (a = M(s), o = M(e), r = 0, i = o.length; r < i; r++)
              R(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || M(e), a = a || M(s), r = 0, i = o.length;
                r < i;
                r++
              )
                L(o[r], a[r]);
            else L(e, s);
          return (
            (a = M(s, "script")), a.length > 0 && T(a, !l && M(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = ke.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (ze(n)) {
              if ((t = n[We.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r]
                      ? ke.event.remove(n, r)
                      : ke.removeEvent(n, r, t.handle);
                n[We.expando] = void 0;
              }
              n[Ke.expando] && (n[Ke.expando] = void 0);
            }
        },
      }),
        ke.fn.extend({
          detach: function (e) {
            return F(this, e, !0);
          },
          remove: function (e) {
            return F(this, e);
          },
          text: function (e) {
            return Be(
              this,
              function (e) {
                return void 0 === e
                  ? ke.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return V(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = I(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return V(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = I(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return V(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return V(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (ke.cleanData(M(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return ke.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return Be(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !ut.test(e) &&
                  !st[(ot.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = ke.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (ke.cleanData(M(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return V(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                ke.inArray(this, e) < 0 &&
                  (ke.cleanData(M(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        ke.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            ke.fn[e] = function (e) {
              for (
                var n, r = [], i = ke(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  ke(i[a])[t](n),
                  fe.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ht = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
        pt = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        ft = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          r = n.call(e);
          for (i in t) e.style[i] = o[i];
          return r;
        },
        gt = new RegExp(Qe.join("|"), "i");
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Je.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (o = 12 === t(u.offsetWidth / 3)),
              Je.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          s,
          l,
          c = Me.createElement("div"),
          u = Me.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (we.clearCloneStyle = "content-box" === u.style.backgroundClip),
          ke.extend(we, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == s &&
                  ((e = Me.createElement("table")),
                  (t = Me.createElement("tr")),
                  (r = Me.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  (r.style.display = "block"),
                  Je.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (s =
                    parseInt(i.height, 10) +
                      parseInt(i.borderTopWidth, 10) +
                      parseInt(i.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  Je.removeChild(e)),
                s
              );
            },
          }));
      })();
      var vt = ["Webkit", "Moz", "ms"],
        bt = Me.createElement("div").style,
        $t = {},
        yt = /^(none|table(?!-c[ea]).+)/,
        Et = /^--/,
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        Ct = { letterSpacing: "0", fontWeight: "400" };
      ke.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = j(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = b(t),
              l = Et.test(t),
              c = e.style;
            return (
              l || (t = U(s)),
              (a = ke.cssHooks[t] || ke.cssHooks[s]),
              void 0 === n
                ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                  ? i
                  : c[t]
                : ((o = typeof n),
                  "string" === o &&
                    (i = Ze.exec(n)) &&
                    i[1] &&
                    ((n = w(e, t, i)), (o = "number")),
                  null != n &&
                    n === n &&
                    ("number" !== o ||
                      l ||
                      (n += (i && i[3]) || (ke.cssNumber[s] ? "" : "px")),
                    we.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n))),
                  void 0)
            );
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = b(t),
            l = Et.test(t);
          return (
            l || (t = U(s)),
            (a = ke.cssHooks[t] || ke.cssHooks[s]),
            a && "get" in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = j(e, t, r)),
            "normal" === i && t in Ct && (i = Ct[t]),
            "" === n || n
              ? ((o = parseFloat(i)), n === !0 || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        ke.each(["height", "width"], function (e, t) {
          ke.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !yt.test(ke.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? K(e, t, r)
                  : ft(e, wt, function () {
                      return K(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = pt(e),
                a = !we.scrollboxSize() && "absolute" === o.position,
                s = a || r,
                l = s && "border-box" === ke.css(e, "boxSizing", !1, o),
                c = r ? W(e, t, r, l, o) : 0;
              return (
                l &&
                  a &&
                  (c -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      W(e, t, "border", !1, o) -
                      0.5
                  )),
                c &&
                  (i = Ze.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = ke.css(e, t))),
                z(e, n, c)
              );
            },
          };
        }),
        (ke.cssHooks.marginLeft = B(we.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(j(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ft(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        ke.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (ke.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + Qe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (ke.cssHooks[e + t].set = z);
        }),
        ke.fn.extend({
          css: function (e, t) {
            return Be(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = pt(e), i = t.length; a < i; a++)
                    o[t[a]] = ke.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? ke.style(e, t, n) : ke.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (ke.Tween = Y),
        (Y.prototype = {
          constructor: Y,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || ke.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (ke.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = Y.propHooks[this.prop];
            return e && e.get ? e.get(this) : Y.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = Y.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    ke.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : Y.propHooks._default.set(this),
              this
            );
          },
        }),
        (Y.prototype.init.prototype = Y.prototype),
        (Y.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : ((t = ke.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function (e) {
              ke.fx.step[e.prop]
                ? ke.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!ke.cssHooks[e.prop] && null == e.elem.style[U(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : ke.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (Y.propHooks.scrollTop = Y.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (ke.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (ke.fx = Y.prototype.init),
        (ke.fx.step = {});
      var xt,
        Mt,
        Tt = /^(?:toggle|show|hide)$/,
        At = /queueHooks$/;
      (ke.Animation = ke.extend(te, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return w(n.elem, e, Ze.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          Ce(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ve));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (te.tweeners[n] = te.tweeners[n] || []),
              te.tweeners[n].unshift(t);
        },
        prefilters: [J],
        prefilter: function (e, t) {
          t ? te.prefilters.unshift(e) : te.prefilters.push(e);
        },
      })),
        (ke.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? ke.extend({}, e)
              : {
                  complete: n || (!n && t) || (Ce(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !Ce(t) && t),
                };
          return (
            ke.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in ke.fx.speeds
                  ? (r.duration = ke.fx.speeds[r.duration])
                  : (r.duration = ke.fx.speeds._default)),
            (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              Ce(r.old) && r.old.call(this),
                r.queue && ke.dequeue(this, r.queue);
            }),
            r
          );
        }),
        ke.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(nt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = ke.isEmptyObject(e),
              o = ke.speed(t, n, r),
              a = function () {
                var t = te(this, ke.extend({}, e), o);
                (i || We.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = ke.timers,
                  a = We.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && At.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || ke.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              e !== !1 && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = We.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = ke.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    ke.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        ke.each(["toggle", "show", "hide"], function (e, t) {
          var n = ke.fn[t];
          ke.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(Z(t, !0), e, r, i);
          };
        }),
        ke.each(
          {
            slideDown: Z("show"),
            slideUp: Z("hide"),
            slideToggle: Z("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            ke.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (ke.timers = []),
        (ke.fx.tick = function () {
          var e,
            t = 0,
            n = ke.timers;
          for (xt = Date.now(); t < n.length; t++)
            (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
          n.length || ke.fx.stop(), (xt = void 0);
        }),
        (ke.fx.timer = function (e) {
          ke.timers.push(e), ke.fx.start();
        }),
        (ke.fx.interval = 13),
        (ke.fx.start = function () {
          Mt || ((Mt = !0), G());
        }),
        (ke.fx.stop = function () {
          Mt = null;
        }),
        (ke.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ke.fn.delay = function (e, t) {
          return (
            (e = ke.fx ? ke.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = Me.createElement("input"),
            t = Me.createElement("select"),
            n = t.appendChild(Me.createElement("option"));
          (e.type = "checkbox"),
            (we.checkOn = "" !== e.value),
            (we.optSelected = n.selected),
            (e = Me.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (we.radioValue = "t" === e.value);
        })();
      var kt,
        St = ke.expr.attrHandle;
      ke.fn.extend({
        attr: function (e, t) {
          return Be(this, ke.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            ke.removeAttr(this, e);
          });
        },
      }),
        ke.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof e.getAttribute
                ? ke.prop(e, t, n)
                : ((1 === o && ke.isXMLDoc(e)) ||
                    (i =
                      ke.attrHooks[t.toLowerCase()] ||
                      (ke.expr.match.bool.test(t) ? kt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void ke.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : ((r = ke.find.attr(e, t)), null == r ? void 0 : r));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!we.radioValue && "radio" === t && c(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(Ve);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (kt = {
          set: function (e, t, n) {
            return t === !1 ? ke.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        ke.each(ke.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = St[t] || ke.find.attr;
          St[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = St[a]),
                (St[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (St[a] = o)),
              i
            );
          };
        });
      var _t = /^(?:input|select|textarea|button)$/i,
        Nt = /^(?:a|area)$/i;
      ke.fn.extend({
        prop: function (e, t) {
          return Be(this, ke.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[ke.propFix[e] || e];
          });
        },
      }),
        ke.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && ke.isXMLDoc(e)) ||
                  ((t = ke.propFix[t] || t), (i = ke.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = ke.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : _t.test(e.nodeName) || (Nt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        we.optSelected ||
          (ke.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        ke.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            ke.propFix[this.toLowerCase()] = this;
          }
        ),
        ke.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l = 0;
            if (Ce(e))
              return this.each(function (t) {
                ke(this).addClass(e.call(this, t, re(this)));
              });
            if (((t = ie(e)), t.length))
              for (; (n = this[l++]); )
                if (
                  ((i = re(n)), (r = 1 === n.nodeType && " " + ne(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  (s = ne(r)), i !== s && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l = 0;
            if (Ce(e))
              return this.each(function (t) {
                ke(this).removeClass(e.call(this, t, re(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((t = ie(e)), t.length))
              for (; (n = this[l++]); )
                if (
                  ((i = re(n)), (r = 1 === n.nodeType && " " + ne(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  (s = ne(r)), i !== s && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : Ce(e)
              ? this.each(function (n) {
                  ke(this).toggleClass(e.call(this, n, re(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = ke(this), a = ie(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = re(this)),
                      t && We.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || e === !1
                            ? ""
                            : We.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + ne(re(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Ot = /\r/g;
      ke.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          {
            if (arguments.length)
              return (
                (r = Ce(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    ((i = r ? e.call(this, n, ke(this).val()) : e),
                    null == i
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = ke.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    (t =
                      ke.valHooks[this.type] ||
                      ke.valHooks[this.nodeName.toLowerCase()]),
                    (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                })
              );
            if (i)
              return (
                (t =
                  ke.valHooks[i.type] || ke.valHooks[i.nodeName.toLowerCase()]),
                t && "get" in t && void 0 !== (n = t.get(i, "value"))
                  ? n
                  : ((n = i.value),
                    "string" == typeof n
                      ? n.replace(Ot, "")
                      : null == n
                      ? ""
                      : n)
              );
          }
        },
      }),
        ke.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = ke.find.attr(e, "value");
                return null != t ? t : ne(ke.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  l = a ? o + 1 : i.length;
                for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]),
                    (n.selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !c(n.parentNode, "optgroup")))
                  ) {
                    if (((t = ke(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = ke.makeArray(t), a = i.length;
                  a--;

                )
                  (r = i[a]),
                    (r.selected =
                      ke.inArray(ke.valHooks.option.get(r), o) > -1) &&
                      (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        ke.each(["radio", "checkbox"], function () {
          (ke.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = ke.inArray(ke(e).val(), t) > -1);
            },
          }),
            we.checkOn ||
              (ke.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (we.focusin = "onfocusin" in n);
      var Dt = /^(?:focusinfocus|focusoutblur)$/,
        It = function (e) {
          e.stopPropagation();
        };
      ke.extend(ke.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            s,
            l,
            c,
            u,
            d,
            m,
            h = [r || Me],
            p = $e.call(e, "type") ? e.type : e,
            f = $e.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = m = s = r = r || Me),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Dt.test(p + ke.event.triggered) &&
              (p.indexOf(".") > -1 &&
                ((f = p.split(".")), (p = f.shift()), f.sort()),
              (c = p.indexOf(":") < 0 && "on" + p),
              (e = e[ke.expando]
                ? e
                : new ke.Event(p, "object" == typeof e && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = f.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : ke.makeArray(t, [e])),
              (d = ke.event.special[p] || {}),
              i || !d.trigger || d.trigger.apply(r, t) !== !1))
          ) {
            if (!i && !d.noBubble && !xe(r)) {
              for (
                l = d.delegateType || p, Dt.test(l + p) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || Me) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
              (m = a),
                (e.type = o > 1 ? l : d.bindType || p),
                (u =
                  (We.get(a, "events") || Object.create(null))[e.type] &&
                  We.get(a, "handle")),
                u && u.apply(a, t),
                (u = c && a[c]),
                u &&
                  u.apply &&
                  ze(a) &&
                  ((e.result = u.apply(a, t)),
                  e.result === !1 && e.preventDefault());
            return (
              (e.type = p),
              i ||
                e.isDefaultPrevented() ||
                (d._default && d._default.apply(h.pop(), t) !== !1) ||
                !ze(r) ||
                (c &&
                  Ce(r[p]) &&
                  !xe(r) &&
                  ((s = r[c]),
                  s && (r[c] = null),
                  (ke.event.triggered = p),
                  e.isPropagationStopped() && m.addEventListener(p, It),
                  r[p](),
                  e.isPropagationStopped() && m.removeEventListener(p, It),
                  (ke.event.triggered = void 0),
                  s && (r[c] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = ke.extend(new ke.Event(), n, { type: e, isSimulated: !0 });
          ke.event.trigger(r, null, t);
        },
      }),
        ke.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              ke.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ke.event.trigger(e, t, n, !0);
          },
        }),
        we.focusin ||
          ke.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              ke.event.simulate(t, e.target, ke.event.fix(e));
            };
            ke.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = We.access(r, t);
                i || r.addEventListener(e, n, !0),
                  We.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = We.access(r, t) - 1;
                i
                  ? We.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), We.remove(r, t));
              },
            };
          });
      var Ht = n.location,
        Pt = { guid: Date.now() },
        Lt = /\?/;
      ke.parseXML = function (e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName("parsererror")[0]),
          (t && !r) ||
            ke.error(
              "Invalid XML: " +
                (r
                  ? ke
                      .map(r.childNodes, function (e) {
                        return e.textContent;
                      })
                      .join("\n")
                  : e)
            ),
          t
        );
      };
      var Rt = /\[\]$/,
        Vt = /\r?\n/g,
        Ft = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
      (ke.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = Ce(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !ke.isPlainObject(e)))
          ke.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) oe(n, e[n], t, i);
        return r.join("&");
      }),
        ke.fn.extend({
          serialize: function () {
            return ke.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = ke.prop(this, "elements");
              return e ? ke.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !ke(this).is(":disabled") &&
                  jt.test(this.nodeName) &&
                  !Ft.test(e) &&
                  (this.checked || !it.test(e))
                );
              })
              .map(function (e, t) {
                var n = ke(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? ke.map(n, function (e) {
                      return { name: t.name, value: e.replace(Vt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Vt, "\r\n") };
              })
              .get();
          },
        });
      var Bt = /%20/g,
        qt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Yt = /^\/\//,
        Gt = {},
        Xt = {},
        Zt = "*/".concat("*"),
        Qt = Me.createElement("a");
      (Qt.href = Ht.href),
        ke.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ht.href,
            type: "GET",
            isLocal: Wt.test(Ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Zt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": ke.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? le(le(e, ke.ajaxSettings), t) : le(ke.ajaxSettings, e);
          },
          ajaxPrefilter: ae(Gt),
          ajaxTransport: ae(Xt),
          ajax: function (e, t) {
            function r(e, t, r, s) {
              var c,
                m,
                h,
                y,
                E,
                w = t;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (a = s || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                r && (y = ce(p, C, r)),
                !c &&
                  ke.inArray("script", p.dataTypes) > -1 &&
                  ke.inArray("json", p.dataTypes) < 0 &&
                  (p.converters["text script"] = function () {}),
                (y = ue(p, y, C, c)),
                c
                  ? (p.ifModified &&
                      ((E = C.getResponseHeader("Last-Modified")),
                      E && (ke.lastModified[o] = E),
                      (E = C.getResponseHeader("etag")),
                      E && (ke.etag[o] = E)),
                    204 === e || "HEAD" === p.type
                      ? (w = "nocontent")
                      : 304 === e
                      ? (w = "notmodified")
                      : ((w = y.state), (m = y.data), (h = y.error), (c = !h)))
                  : ((h = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || w) + ""),
                c ? v.resolveWith(f, [m, w, C]) : v.rejectWith(f, [C, w, h]),
                C.statusCode($),
                ($ = void 0),
                d &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? m : h]),
                b.fireWith(f, [C, w]),
                d &&
                  (g.trigger("ajaxComplete", [C, p]),
                  --ke.active || ke.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              a,
              s,
              l,
              c,
              u,
              d,
              m,
              h,
              p = ke.ajaxSetup({}, t),
              f = p.context || p,
              g = p.context && (f.nodeType || f.jquery) ? ke(f) : ke.event,
              v = ke.Deferred(),
              b = ke.Callbacks("once memory"),
              $ = p.statusCode || {},
              y = {},
              E = {},
              w = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!s)
                      for (s = {}; (t = zt.exec(a)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? a : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                      (y[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) C.always(e[C.status]);
                    else for (t in e) $[t] = [$[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || w;
                  return i && i.abort(t), r(0, t), this;
                },
              };
            if (
              (v.promise(C),
              (p.url = ((e || p.url || Ht.href) + "").replace(
                Yt,
                Ht.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(Ve) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              c = Me.createElement("a");
              try {
                (c.href = p.url),
                  (c.href = c.href),
                  (p.crossDomain =
                    Qt.protocol + "//" + Qt.host != c.protocol + "//" + c.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = ke.param(p.data, p.traditional)),
              se(Gt, p, t, C),
              u)
            )
              return C;
            (d = ke.event && p.global),
              d && 0 === ke.active++ && ke.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Kt.test(p.type)),
              (o = p.url.replace(qt, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(Bt, "+"))
                : ((h = p.url.slice(o.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((o += (Lt.test(o) ? "&" : "?") + p.data), delete p.data),
                  p.cache === !1 &&
                    ((o = o.replace(Ut, "$1")),
                    (h = (Lt.test(o) ? "&" : "?") + "_=" + Pt.guid++ + h)),
                  (p.url = o + h)),
              p.ifModified &&
                (ke.lastModified[o] &&
                  C.setRequestHeader("If-Modified-Since", ke.lastModified[o]),
                ke.etag[o] && C.setRequestHeader("If-None-Match", ke.etag[o])),
              ((p.data && p.hasContent && p.contentType !== !1) ||
                t.contentType) &&
                C.setRequestHeader("Content-Type", p.contentType),
              C.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "")
                  : p.accepts["*"]
              );
            for (m in p.headers) C.setRequestHeader(m, p.headers[m]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || u))
              return C.abort();
            if (
              ((w = "abort"),
              b.add(p.complete),
              C.done(p.success),
              C.fail(p.error),
              (i = se(Xt, p, t, C)))
            ) {
              if (((C.readyState = 1), d && g.trigger("ajaxSend", [C, p]), u))
                return C;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function () {
                  C.abort("timeout");
                }, p.timeout));
              try {
                (u = !1), i.send(y, r);
              } catch (e) {
                if (u) throw e;
                r(-1, e);
              }
            } else r(-1, "No Transport");
            return C;
          },
          getJSON: function (e, t, n) {
            return ke.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return ke.get(e, void 0, t, "script");
          },
        }),
        ke.each(["get", "post"], function (e, t) {
          ke[t] = function (e, n, r, i) {
            return (
              Ce(n) && ((i = i || r), (r = n), (n = void 0)),
              ke.ajax(
                ke.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  ke.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        ke.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (ke._evalUrl = function (e, t, n) {
          return ke.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              ke.globalEval(e, t, n);
            },
          });
        }),
        ke.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (Ce(e) && (e = e.call(this[0])),
                (t = ke(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return Ce(e)
              ? this.each(function (t) {
                  ke(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = ke(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = Ce(e);
            return this.each(function (n) {
              ke(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  ke(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (ke.expr.pseudos.hidden = function (e) {
          return !ke.expr.pseudos.visible(e);
        }),
        (ke.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (ke.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Jt = { 0: 200, 1223: 204 },
        en = ke.ajaxSettings.xhr();
      (we.cors = !!en && "withCredentials" in en),
        (we.ajax = en = !!en),
        ke.ajaxTransport(function (e) {
          var t, r;
          if (we.cors || (en && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Jt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        ke.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        ke.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return ke.globalEval(e), e;
            },
          },
        }),
        ke.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        ke.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (r, i) {
                (t = ke("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  Me.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var tn = [],
        nn = /(=)\?(?=&|$)|\?\?/;
      ke.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = tn.pop() || ke.expando + "_" + Pt.guid++;
          return (this[e] = !0), e;
        },
      }),
        ke.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            a,
            s =
              e.jsonp !== !1 &&
              (nn.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  nn.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                Ce(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(nn, "$1" + i))
                : e.jsonp !== !1 &&
                  (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || ke.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? ke(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)),
                  a && Ce(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (we.createHTMLDocument = (function () {
          var e = Me.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (ke.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && ((n = t), (t = !1));
          var r, i, o;
          return (
            t ||
              (we.createHTMLDocument
                ? ((t = Me.implementation.createHTMLDocument("")),
                  (r = t.createElement("base")),
                  (r.href = Me.location.href),
                  t.head.appendChild(r))
                : (t = Me)),
            (i = De.exec(e)),
            (o = !n && []),
            i
              ? [t.createElement(i[1])]
              : ((i = A([e], t, o)),
                o && o.length && ke(o).remove(),
                ke.merge([], i.childNodes))
          );
        }),
        (ke.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = ne(e.slice(s))), (e = e.slice(0, s))),
            Ce(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              ke
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? ke("<div>").append(ke.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (ke.expr.pseudos.animated = function (e) {
          return ke.grep(ke.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (ke.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c,
              u = ke.css(e, "position"),
              d = ke(e),
              m = {};
            "static" === u && (e.style.position = "relative"),
              (s = d.offset()),
              (o = ke.css(e, "top")),
              (l = ke.css(e, "left")),
              (c =
                ("absolute" === u || "fixed" === u) &&
                (o + l).indexOf("auto") > -1),
              c
                ? ((r = d.position()), (a = r.top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              Ce(t) && (t = t.call(e, n, ke.extend({}, s))),
              null != t.top && (m.top = t.top - s.top + a),
              null != t.left && (m.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, m) : d.css(m);
          },
        }),
        ke.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    ke.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            if (r)
              return r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === ke.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === ke.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  ((i = ke(e).offset()),
                  (i.top += ke.css(e, "borderTopWidth", !0)),
                  (i.left += ke.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - ke.css(r, "marginTop", !0),
                left: t.left - i.left - ke.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === ke.css(e, "position");

              )
                e = e.offsetParent;
              return e || Je;
            });
          },
        }),
        ke.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            ke.fn[e] = function (r) {
              return Be(
                this,
                function (e, r, i) {
                  var o;
                  return (
                    xe(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i
                      ? o
                        ? o[t]
                        : e[r]
                      : void (o
                          ? o.scrollTo(
                              n ? o.pageXOffset : i,
                              n ? i : o.pageYOffset
                            )
                          : (e[r] = i))
                  );
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        ke.each(["top", "left"], function (e, t) {
          ke.cssHooks[t] = B(we.pixelPosition, function (e, n) {
            if (n)
              return (n = j(e, t)), ht.test(n) ? ke(e).position()[t] + "px" : n;
          });
        }),
        ke.each({ Height: "height", Width: "width" }, function (e, t) {
          ke.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              ke.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Be(
                  this,
                  function (t, n, i) {
                    var o;
                    return xe(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? ke.css(t, n, s)
                      : ke.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        ke.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            ke.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        ke.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        ke.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            ke.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (ke.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Ce(e)))
          return (
            (r = he.call(arguments, 2)),
            (i = function () {
              return e.apply(t || this, r.concat(he.call(arguments)));
            }),
            (i.guid = e.guid = e.guid || ke.guid++),
            i
          );
      }),
        (ke.holdReady = function (e) {
          e ? ke.readyWait++ : ke.ready(!0);
        }),
        (ke.isArray = Array.isArray),
        (ke.parseJSON = JSON.parse),
        (ke.nodeName = c),
        (ke.isFunction = Ce),
        (ke.isWindow = xe),
        (ke.camelCase = b),
        (ke.type = s),
        (ke.now = Date.now),
        (ke.isNumeric = function (e) {
          var t = ke.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (ke.trim = function (e) {
          return null == e ? "" : (e + "").replace(rn, "");
        }),
        (r = []),
        (i = function () {
          return ke;
        }.apply(t, r)),
        !(void 0 !== i && (e.exports = i));
      var on = n.jQuery,
        an = n.$;
      return (
        (ke.noConflict = function (e) {
          return (
            n.$ === ke && (n.$ = an),
            e && n.jQuery === ke && (n.jQuery = on),
            ke
          );
        }),
        "undefined" == typeof o && (n.jQuery = n.$ = ke),
        ke
      );
    });
  }});
//# sourceMappingURL=vendor.js.map
