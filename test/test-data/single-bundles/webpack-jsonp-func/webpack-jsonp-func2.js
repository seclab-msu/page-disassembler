webpackJsonp(
  [1, 0],
  [
	function (e, n, t) {
		e.exports = t(65);
	  },
	  function (e, n, t) {
		t(14), (e.exports = angular);
	  },
	  function (e, n, t) {
		var i, l;
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
		!(function (n, t) {
		  "use strict";
		  "object" == typeof e && "object" == typeof e.exports
			? (e.exports = n.document
				? t(n, !0)
				: function (e) {
					if (!e.document)
					  throw new Error("jQuery requires a window with a document");
					return t(e);
				  })
			: t(n);
		})("undefined" != typeof window ? window : this, function (t, o) {
		  "use strict";
		  function r(e, n, t) {
			t = t || $e;
			var i,
			  l,
			  o = t.createElement("script");
			if (((o.text = e), n))
			  for (i in De)
				(l = n[i] || (n.getAttribute && n.getAttribute(i))),
				  l && o.setAttribute(i, l);
			t.head.appendChild(o).parentNode.removeChild(o);
		  }
		  function a(e) {
			return null == e
			  ? e + ""
			  : "object" == typeof e || "function" == typeof e
			  ? be[xe.call(e)] || "object"
			  : typeof e;
		  }
		  function s(e) {
			var n = !!e && "length" in e && e.length,
			  t = a(e);
			return (
			  !Se(e) &&
			  !Ce(e) &&
			  ("array" === t ||
				0 === n ||
				("number" == typeof n && n > 0 && n - 1 in e))
			);
		  }
		  function c(e, n) {
			return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase();
		  }
		  function m(e, n, t) {
			return Se(n)
			  ? Ie.grep(e, function (e, i) {
				  return !!n.call(e, i, e) !== t;
				})
			  : n.nodeType
			  ? Ie.grep(e, function (e) {
				  return (e === n) !== t;
				})
			  : "string" != typeof n
			  ? Ie.grep(e, function (e) {
				  return he.call(n, e) > -1 !== t;
				})
			  : Ie.filter(n, e, t);
		  }
		  function u(e, n) {
			for (; (e = e[n]) && 1 !== e.nodeType; );
			return e;
		  }
		  function d(e) {
			var n = {};
			return (
			  Ie.each(e.match(ze) || [], function (e, t) {
				n[t] = !0;
			  }),
			  n
			);
		  }
		  function f(e) {
			return e;
		  }
		  function p(e) {
			throw e;
		  }
		  function g(e, n, t, i) {
			var l;
			try {
			  e && Se((l = e.promise))
				? l.call(e).done(n).fail(t)
				: e && Se((l = e.then))
				? l.call(e, n, t)
				: n.apply(void 0, [e].slice(i));
			} catch (e) {
			  t.apply(void 0, [e]);
			}
		  }
		  function h() {
			$e.removeEventListener("DOMContentLoaded", h),
			  t.removeEventListener("load", h),
			  Ie.ready();
		  }
		  function b(e, n) {
			return n.toUpperCase();
		  }
		  function x(e) {
			return e.replace(qe, "ms-").replace(Ve, b);
		  }
		  function y() {
			this.expando = Ie.expando + y.uid++;
		  }
		  function v(e) {
			return (
			  "true" === e ||
			  ("false" !== e &&
				("null" === e
				  ? null
				  : e === +e + ""
				  ? +e
				  : Ge.test(e)
				  ? JSON.parse(e)
				  : e))
			);
		  }
		  function w(e, n, t) {
			var i;
			if (void 0 === t && 1 === e.nodeType)
			  if (
				((i = "data-" + n.replace(Je, "-$&").toLowerCase()),
				(t = e.getAttribute(i)),
				"string" == typeof t)
			  ) {
				try {
				  t = v(t);
				} catch (e) {}
				We.set(e, n, t);
			  } else t = void 0;
			return t;
		  }
		  function k(e, n, t, i) {
			var l,
			  o,
			  r = 20,
			  a = i
				? function () {
					return i.cur();
				  }
				: function () {
					return Ie.css(e, n, "");
				  },
			  s = a(),
			  c = (t && t[3]) || (Ie.cssNumber[n] ? "" : "px"),
			  m =
				e.nodeType &&
				(Ie.cssNumber[n] || ("px" !== c && +s)) &&
				Ze.exec(Ie.css(e, n));
			if (m && m[3] !== c) {
			  for (s /= 2, c = c || m[3], m = +s || 1; r--; )
				Ie.style(e, n, m + c),
				  (1 - o) * (1 - (o = a() / s || 0.5)) <= 0 && (r = 0),
				  (m /= o);
			  (m *= 2), Ie.style(e, n, m + c), (t = t || []);
			}
			return (
			  t &&
				((m = +m || +s || 0),
				(l = t[1] ? m + (t[1] + 1) * t[2] : +t[2]),
				i && ((i.unit = c), (i.start = m), (i.end = l))),
			  l
			);
		  }
		  function S(e) {
			var n,
			  t = e.ownerDocument,
			  i = e.nodeName,
			  l = ln[i];
			return l
			  ? l
			  : ((n = t.body.appendChild(t.createElement(i))),
				(l = Ie.css(n, "display")),
				n.parentNode.removeChild(n),
				"none" === l && (l = "block"),
				(ln[i] = l),
				l);
		  }
		  function C(e, n) {
			for (var t, i, l = [], o = 0, r = e.length; o < r; o++)
			  (i = e[o]),
				i.style &&
				  ((t = i.style.display),
				  n
					? ("none" === t &&
						((l[o] = Ye.get(i, "display") || null),
						l[o] || (i.style.display = "")),
					  "" === i.style.display && tn(i) && (l[o] = S(i)))
					: "none" !== t && ((l[o] = "none"), Ye.set(i, "display", t)));
			for (o = 0; o < r; o++) null != l[o] && (e[o].style.display = l[o]);
			return e;
		  }
		  function $(e, n) {
			var t;
			return (
			  (t =
				"undefined" != typeof e.getElementsByTagName
				  ? e.getElementsByTagName(n || "*")
				  : "undefined" != typeof e.querySelectorAll
				  ? e.querySelectorAll(n || "*")
				  : []),
			  void 0 === n || (n && c(e, n)) ? Ie.merge([e], t) : t
			);
		  }
		  function D(e, n) {
			for (var t = 0, i = e.length; t < i; t++)
			  Ye.set(e[t], "globalEval", !n || Ye.get(n[t], "globalEval"));
		  }
		  function A(e, n, t, i, l) {
			for (
			  var o,
				r,
				s,
				c,
				m,
				u,
				d = n.createDocumentFragment(),
				f = [],
				p = 0,
				g = e.length;
			  p < g;
			  p++
			)
			  if (((o = e[p]), o || 0 === o))
				if ("object" === a(o)) Ie.merge(f, o.nodeType ? [o] : o);
				else if (cn.test(o)) {
				  for (
					r = r || d.appendChild(n.createElement("div")),
					  s = (rn.exec(o) || ["", ""])[1].toLowerCase(),
					  c = sn[s] || sn._default,
					  r.innerHTML = c[1] + Ie.htmlPrefilter(o) + c[2],
					  u = c[0];
					u--;
  
				  )
					r = r.lastChild;
				  Ie.merge(f, r.childNodes),
					(r = d.firstChild),
					(r.textContent = "");
				} else f.push(n.createTextNode(o));
			for (d.textContent = "", p = 0; (o = f[p++]); )
			  if (i && Ie.inArray(o, i) > -1) l && l.push(o);
			  else if (
				((m = en(o)), (r = $(d.appendChild(o), "script")), m && D(r), t)
			  )
				for (u = 0; (o = r[u++]); ) an.test(o.type || "") && t.push(o);
			return d;
		  }
		  function I() {
			return !0;
		  }
		  function O() {
			return !1;
		  }
		  function _(e, n) {
			return (e === E()) == ("focus" === n);
		  }
		  function E() {
			try {
			  return $e.activeElement;
			} catch (e) {}
		  }
		  function F(e, n, t, i, l, o) {
			var r, a;
			if ("object" == typeof n) {
			  "string" != typeof t && ((i = i || t), (t = void 0));
			  for (a in n) F(e, a, t, i, n[a], o);
			  return e;
			}
			if (
			  (null == i && null == l
				? ((l = t), (i = t = void 0))
				: null == l &&
				  ("string" == typeof t
					? ((l = i), (i = void 0))
					: ((l = i), (i = t), (t = void 0))),
			  l === !1)
			)
			  l = O;
			else if (!l) return e;
			return (
			  1 === o &&
				((r = l),
				(l = function (e) {
				  return Ie().off(e), r.apply(this, arguments);
				}),
				(l.guid = r.guid || (r.guid = Ie.guid++))),
			  e.each(function () {
				Ie.event.add(this, n, l, i, t);
			  })
			);
		  }
		  function T(e, n, t) {
			return t
			  ? (Ye.set(e, n, !1),
				void Ie.event.add(e, n, {
				  namespace: !1,
				  handler: function (e) {
					var i,
					  l,
					  o = Ye.get(this, n);
					if (1 & e.isTrigger && this[n]) {
					  if (o.length)
						(Ie.event.special[n] || {}).delegateType &&
						  e.stopPropagation();
					  else if (
						((o = fe.call(arguments)),
						Ye.set(this, n, o),
						(i = t(this, n)),
						this[n](),
						(l = Ye.get(this, n)),
						o !== l || i ? Ye.set(this, n, !1) : (l = {}),
						o !== l)
					  )
						return (
						  e.stopImmediatePropagation(),
						  e.preventDefault(),
						  l && l.value
						);
					} else
					  o.length &&
						(Ye.set(this, n, {
						  value: Ie.event.trigger(
							Ie.extend(o[0], Ie.Event.prototype),
							o.slice(1),
							this
						  ),
						}),
						e.stopImmediatePropagation());
				  },
				}))
			  : void (void 0 === Ye.get(e, n) && Ie.event.add(e, n, I));
		  }
		  function R(e, n) {
			return c(e, "table") && c(11 !== n.nodeType ? n : n.firstChild, "tr")
			  ? Ie(e).children("tbody")[0] || e
			  : e;
		  }
		  function N(e) {
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
		  function j(e, n) {
			var t, i, l, o, r, a, s;
			if (1 === n.nodeType) {
			  if (Ye.hasData(e) && ((o = Ye.get(e)), (s = o.events))) {
				Ye.remove(n, "handle events");
				for (l in s)
				  for (t = 0, i = s[l].length; t < i; t++)
					Ie.event.add(n, l, s[l][t]);
			  }
			  We.hasData(e) &&
				((r = We.access(e)), (a = Ie.extend({}, r)), We.set(n, a));
			}
		  }
		  function L(e, n) {
			var t = n.nodeName.toLowerCase();
			"input" === t && on.test(e.type)
			  ? (n.checked = e.checked)
			  : ("input" !== t && "textarea" !== t) ||
				(n.defaultValue = e.defaultValue);
		  }
		  function z(e, n, t, i) {
			n = pe(n);
			var l,
			  o,
			  a,
			  s,
			  c,
			  m,
			  u = 0,
			  d = e.length,
			  f = d - 1,
			  p = n[0],
			  g = Se(p);
			if (
			  g ||
			  (d > 1 && "string" == typeof p && !ke.checkClone && dn.test(p))
			)
			  return e.each(function (l) {
				var o = e.eq(l);
				g && (n[0] = p.call(this, l, o.html())), z(o, n, t, i);
			  });
			if (
			  d &&
			  ((l = A(n, e[0].ownerDocument, !1, e, i)),
			  (o = l.firstChild),
			  1 === l.childNodes.length && (l = o),
			  o || i)
			) {
			  for (a = Ie.map($(l, "script"), N), s = a.length; u < d; u++)
				(c = l),
				  u !== f &&
					((c = Ie.clone(c, !0, !0)), s && Ie.merge(a, $(c, "script"))),
				  t.call(e[u], c, u);
			  if (s)
				for (
				  m = a[a.length - 1].ownerDocument, Ie.map(a, P), u = 0;
				  u < s;
				  u++
				)
				  (c = a[u]),
					an.test(c.type || "") &&
					  !Ye.access(c, "globalEval") &&
					  Ie.contains(m, c) &&
					  (c.src && "module" !== (c.type || "").toLowerCase()
						? Ie._evalUrl &&
						  !c.noModule &&
						  Ie._evalUrl(
							c.src,
							{ nonce: c.nonce || c.getAttribute("nonce") },
							m
						  )
						: r(c.textContent.replace(fn, ""), c, m));
			}
			return e;
		  }
		  function U(e, n, t) {
			for (
			  var i, l = n ? Ie.filter(n, e) : e, o = 0;
			  null != (i = l[o]);
			  o++
			)
			  t || 1 !== i.nodeType || Ie.cleanData($(i)),
				i.parentNode &&
				  (t && en(i) && D($(i, "script")), i.parentNode.removeChild(i));
			return e;
		  }
		  function M(e, n, t) {
			var i,
			  l,
			  o,
			  r,
			  a = e.style;
			return (
			  (t = t || gn(e)),
			  t &&
				((r = t.getPropertyValue(n) || t[n]),
				"" !== r || en(e) || (r = Ie.style(e, n)),
				!ke.pixelBoxStyles() &&
				  pn.test(r) &&
				  bn.test(n) &&
				  ((i = a.width),
				  (l = a.minWidth),
				  (o = a.maxWidth),
				  (a.minWidth = a.maxWidth = a.width = r),
				  (r = t.width),
				  (a.width = i),
				  (a.minWidth = l),
				  (a.maxWidth = o))),
			  void 0 !== r ? r + "" : r
			);
		  }
		  function B(e, n) {
			return {
			  get: function () {
				return e()
				  ? void delete this.get
				  : (this.get = n).apply(this, arguments);
			  },
			};
		  }
		  function q(e) {
			for (var n = e[0].toUpperCase() + e.slice(1), t = xn.length; t--; )
			  if (((e = xn[t] + n), e in yn)) return e;
		  }
		  function V(e) {
			var n = Ie.cssProps[e] || vn[e];
			return n ? n : e in yn ? e : (vn[e] = q(e) || e);
		  }
		  function H(e, n, t) {
			var i = Ze.exec(n);
			return i ? Math.max(0, i[2] - (t || 0)) + (i[3] || "px") : n;
		  }
		  function Y(e, n, t, i, l, o) {
			var r = "width" === n ? 1 : 0,
			  a = 0,
			  s = 0;
			if (t === (i ? "border" : "content")) return 0;
			for (; r < 4; r += 2)
			  "margin" === t && (s += Ie.css(e, t + Ke[r], !0, l)),
				i
				  ? ("content" === t &&
					  (s -= Ie.css(e, "padding" + Ke[r], !0, l)),
					"margin" !== t &&
					  (s -= Ie.css(e, "border" + Ke[r] + "Width", !0, l)))
				  : ((s += Ie.css(e, "padding" + Ke[r], !0, l)),
					"padding" !== t
					  ? (s += Ie.css(e, "border" + Ke[r] + "Width", !0, l))
					  : (a += Ie.css(e, "border" + Ke[r] + "Width", !0, l)));
			return (
			  !i &&
				o >= 0 &&
				(s +=
				  Math.max(
					0,
					Math.ceil(
					  e["offset" + n[0].toUpperCase() + n.slice(1)] -
						o -
						s -
						a -
						0.5
					)
				  ) || 0),
			  s
			);
		  }
		  function W(e, n, t) {
			var i = gn(e),
			  l = !ke.boxSizingReliable() || t,
			  o = l && "border-box" === Ie.css(e, "boxSizing", !1, i),
			  r = o,
			  a = M(e, n, i),
			  s = "offset" + n[0].toUpperCase() + n.slice(1);
			if (pn.test(a)) {
			  if (!t) return a;
			  a = "auto";
			}
			return (
			  ((!ke.boxSizingReliable() && o) ||
				(!ke.reliableTrDimensions() && c(e, "tr")) ||
				"auto" === a ||
				(!parseFloat(a) && "inline" === Ie.css(e, "display", !1, i))) &&
				e.getClientRects().length &&
				((o = "border-box" === Ie.css(e, "boxSizing", !1, i)),
				(r = s in e),
				r && (a = e[s])),
			  (a = parseFloat(a) || 0),
			  a + Y(e, n, t || (o ? "border" : "content"), r, i, a) + "px"
			);
		  }
		  function G(e, n, t, i, l) {
			return new G.prototype.init(e, n, t, i, l);
		  }
		  function J() {
			Dn &&
			  ($e.hidden === !1 && t.requestAnimationFrame
				? t.requestAnimationFrame(J)
				: t.setTimeout(J, Ie.fx.interval),
			  Ie.fx.tick());
		  }
		  function X() {
			return (
			  t.setTimeout(function () {
				$n = void 0;
			  }),
			  ($n = Date.now())
			);
		  }
		  function Z(e, n) {
			var t,
			  i = 0,
			  l = { height: e };
			for (n = n ? 1 : 0; i < 4; i += 2 - n)
			  (t = Ke[i]), (l["margin" + t] = l["padding" + t] = e);
			return n && (l.opacity = l.width = e), l;
		  }
		  function K(e, n, t) {
			for (
			  var i,
				l = (ne.tweeners[n] || []).concat(ne.tweeners["*"]),
				o = 0,
				r = l.length;
			  o < r;
			  o++
			)
			  if ((i = l[o].call(t, n, e))) return i;
		  }
		  function Q(e, n, t) {
			var i,
			  l,
			  o,
			  r,
			  a,
			  s,
			  c,
			  m,
			  u = "width" in n || "height" in n,
			  d = this,
			  f = {},
			  p = e.style,
			  g = e.nodeType && tn(e),
			  h = Ye.get(e, "fxshow");
			t.queue ||
			  ((r = Ie._queueHooks(e, "fx")),
			  null == r.unqueued &&
				((r.unqueued = 0),
				(a = r.empty.fire),
				(r.empty.fire = function () {
				  r.unqueued || a();
				})),
			  r.unqueued++,
			  d.always(function () {
				d.always(function () {
				  r.unqueued--, Ie.queue(e, "fx").length || r.empty.fire();
				});
			  }));
			for (i in n)
			  if (((l = n[i]), An.test(l))) {
				if (
				  (delete n[i],
				  (o = o || "toggle" === l),
				  l === (g ? "hide" : "show"))
				) {
				  if ("show" !== l || !h || void 0 === h[i]) continue;
				  g = !0;
				}
				f[i] = (h && h[i]) || Ie.style(e, i);
			  }
			if (((s = !Ie.isEmptyObject(n)), s || !Ie.isEmptyObject(f))) {
			  u &&
				1 === e.nodeType &&
				((t.overflow = [p.overflow, p.overflowX, p.overflowY]),
				(c = h && h.display),
				null == c && (c = Ye.get(e, "display")),
				(m = Ie.css(e, "display")),
				"none" === m &&
				  (c
					? (m = c)
					: (C([e], !0),
					  (c = e.style.display || c),
					  (m = Ie.css(e, "display")),
					  C([e]))),
				("inline" === m || ("inline-block" === m && null != c)) &&
				  "none" === Ie.css(e, "float") &&
				  (s ||
					(d.done(function () {
					  p.display = c;
					}),
					null == c && ((m = p.display), (c = "none" === m ? "" : m))),
				  (p.display = "inline-block"))),
				t.overflow &&
				  ((p.overflow = "hidden"),
				  d.always(function () {
					(p.overflow = t.overflow[0]),
					  (p.overflowX = t.overflow[1]),
					  (p.overflowY = t.overflow[2]);
				  })),
				(s = !1);
			  for (i in f)
				s ||
				  (h
					? "hidden" in h && (g = h.hidden)
					: (h = Ye.access(e, "fxshow", { display: c })),
				  o && (h.hidden = !g),
				  g && C([e], !0),
				  d.done(function () {
					g || C([e]), Ye.remove(e, "fxshow");
					for (i in f) Ie.style(e, i, f[i]);
				  })),
				  (s = K(g ? h[i] : 0, i, d)),
				  i in h ||
					((h[i] = s.start), g && ((s.end = s.start), (s.start = 0)));
			}
		  }
		  function ee(e, n) {
			var t, i, l, o, r;
			for (t in e)
			  if (
				((i = x(t)),
				(l = n[i]),
				(o = e[t]),
				Array.isArray(o) && ((l = o[1]), (o = e[t] = o[0])),
				t !== i && ((e[i] = o), delete e[t]),
				(r = Ie.cssHooks[i]),
				r && "expand" in r)
			  ) {
				(o = r.expand(o)), delete e[i];
				for (t in o) t in e || ((e[t] = o[t]), (n[t] = l));
			  } else n[i] = l;
		  }
		  function ne(e, n, t) {
			var i,
			  l,
			  o = 0,
			  r = ne.prefilters.length,
			  a = Ie.Deferred().always(function () {
				delete s.elem;
			  }),
			  s = function () {
				if (l) return !1;
				for (
				  var n = $n || X(),
					t = Math.max(0, c.startTime + c.duration - n),
					i = t / c.duration || 0,
					o = 1 - i,
					r = 0,
					s = c.tweens.length;
				  r < s;
				  r++
				)
				  c.tweens[r].run(o);
				return (
				  a.notifyWith(e, [c, o, t]),
				  o < 1 && s
					? t
					: (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
				);
			  },
			  c = a.promise({
				elem: e,
				props: Ie.extend({}, n),
				opts: Ie.extend(
				  !0,
				  { specialEasing: {}, easing: Ie.easing._default },
				  t
				),
				originalProperties: n,
				originalOptions: t,
				startTime: $n || X(),
				duration: t.duration,
				tweens: [],
				createTween: function (n, t) {
				  var i = Ie.Tween(
					e,
					c.opts,
					n,
					t,
					c.opts.specialEasing[n] || c.opts.easing
				  );
				  return c.tweens.push(i), i;
				},
				stop: function (n) {
				  var t = 0,
					i = n ? c.tweens.length : 0;
				  if (l) return this;
				  for (l = !0; t < i; t++) c.tweens[t].run(1);
				  return (
					n
					  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, n]))
					  : a.rejectWith(e, [c, n]),
					this
				  );
				},
			  }),
			  m = c.props;
			for (ee(m, c.opts.specialEasing); o < r; o++)
			  if ((i = ne.prefilters[o].call(c, e, m, c.opts)))
				return (
				  Se(i.stop) &&
					(Ie._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
				  i
				);
			return (
			  Ie.map(m, K, c),
			  Se(c.opts.start) && c.opts.start.call(e, c),
			  c
				.progress(c.opts.progress)
				.done(c.opts.done, c.opts.complete)
				.fail(c.opts.fail)
				.always(c.opts.always),
			  Ie.fx.timer(
				Ie.extend(s, { elem: e, anim: c, queue: c.opts.queue })
			  ),
			  c
			);
		  }
		  function te(e) {
			var n = e.match(ze) || [];
			return n.join(" ");
		  }
		  function ie(e) {
			return (e.getAttribute && e.getAttribute("class")) || "";
		  }
		  function le(e) {
			return Array.isArray(e)
			  ? e
			  : "string" == typeof e
			  ? e.match(ze) || []
			  : [];
		  }
		  function oe(e, n, t, i) {
			var l;
			if (Array.isArray(n))
			  Ie.each(n, function (n, l) {
				t || zn.test(e)
				  ? i(e, l)
				  : oe(
					  e +
						"[" +
						("object" == typeof l && null != l ? n : "") +
						"]",
					  l,
					  t,
					  i
					);
			  });
			else if (t || "object" !== a(n)) i(e, n);
			else for (l in n) oe(e + "[" + l + "]", n[l], t, i);
		  }
		  function re(e) {
			return function (n, t) {
			  "string" != typeof n && ((t = n), (n = "*"));
			  var i,
				l = 0,
				o = n.toLowerCase().match(ze) || [];
			  if (Se(t))
				for (; (i = o[l++]); )
				  "+" === i[0]
					? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(t))
					: (e[i] = e[i] || []).push(t);
			};
		  }
		  function ae(e, n, t, i) {
			function l(a) {
			  var s;
			  return (
				(o[a] = !0),
				Ie.each(e[a] || [], function (e, a) {
				  var c = a(n, t, i);
				  return "string" != typeof c || r || o[c]
					? r
					  ? !(s = c)
					  : void 0
					: (n.dataTypes.unshift(c), l(c), !1);
				}),
				s
			  );
			}
			var o = {},
			  r = e === Zn;
			return l(n.dataTypes[0]) || (!o["*"] && l("*"));
		  }
		  function se(e, n) {
			var t,
			  i,
			  l = Ie.ajaxSettings.flatOptions || {};
			for (t in n)
			  void 0 !== n[t] && ((l[t] ? e : i || (i = {}))[t] = n[t]);
			return i && Ie.extend(!0, e, i), e;
		  }
		  function ce(e, n, t) {
			for (var i, l, o, r, a = e.contents, s = e.dataTypes; "*" === s[0]; )
			  s.shift(),
				void 0 === i &&
				  (i = e.mimeType || n.getResponseHeader("Content-Type"));
			if (i)
			  for (l in a)
				if (a[l] && a[l].test(i)) {
				  s.unshift(l);
				  break;
				}
			if (s[0] in t) o = s[0];
			else {
			  for (l in t) {
				if (!s[0] || e.converters[l + " " + s[0]]) {
				  o = l;
				  break;
				}
				r || (r = l);
			  }
			  o = o || r;
			}
			if (o) return o !== s[0] && s.unshift(o), t[o];
		  }
		  function me(e, n, t, i) {
			var l,
			  o,
			  r,
			  a,
			  s,
			  c = {},
			  m = e.dataTypes.slice();
			if (m[1])
			  for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
			for (o = m.shift(); o; )
			  if (
				(e.responseFields[o] && (t[e.responseFields[o]] = n),
				!s && i && e.dataFilter && (n = e.dataFilter(n, e.dataType)),
				(s = o),
				(o = m.shift()))
			  )
				if ("*" === o) o = s;
				else if ("*" !== s && s !== o) {
				  if (((r = c[s + " " + o] || c["* " + o]), !r))
					for (l in c)
					  if (
						((a = l.split(" ")),
						a[1] === o && (r = c[s + " " + a[0]] || c["* " + a[0]]))
					  ) {
						r === !0
						  ? (r = c[l])
						  : c[l] !== !0 && ((o = a[0]), m.unshift(a[1]));
						break;
					  }
				  if (r !== !0)
					if (r && e.throws) n = r(n);
					else
					  try {
						n = r(n);
					  } catch (e) {
						return {
						  state: "parsererror",
						  error: r ? e : "No conversion from " + s + " to " + o,
						};
					  }
				}
			return { state: "success", data: n };
		  }
		  var ue = [],
			de = Object.getPrototypeOf,
			fe = ue.slice,
			pe = ue.flat
			  ? function (e) {
				  return ue.flat.call(e);
				}
			  : function (e) {
				  return ue.concat.apply([], e);
				},
			ge = ue.push,
			he = ue.indexOf,
			be = {},
			xe = be.toString,
			ye = be.hasOwnProperty,
			ve = ye.toString,
			we = ve.call(Object),
			ke = {},
			Se = function (e) {
			  return (
				"function" == typeof e &&
				"number" != typeof e.nodeType &&
				"function" != typeof e.item
			  );
			},
			Ce = function (e) {
			  return null != e && e === e.window;
			},
			$e = t.document,
			De = { type: !0, src: !0, nonce: !0, noModule: !0 },
			Ae = "3.6.0",
			Ie = function (e, n) {
			  return new Ie.fn.init(e, n);
			};
		  (Ie.fn = Ie.prototype =
			{
			  jquery: Ae,
			  constructor: Ie,
			  length: 0,
			  toArray: function () {
				return fe.call(this);
			  },
			  get: function (e) {
				return null == e
				  ? fe.call(this)
				  : e < 0
				  ? this[e + this.length]
				  : this[e];
			  },
			  pushStack: function (e) {
				var n = Ie.merge(this.constructor(), e);
				return (n.prevObject = this), n;
			  },
			  each: function (e) {
				return Ie.each(this, e);
			  },
			  map: function (e) {
				return this.pushStack(
				  Ie.map(this, function (n, t) {
					return e.call(n, t, n);
				  })
				);
			  },
			  slice: function () {
				return this.pushStack(fe.apply(this, arguments));
			  },
			  first: function () {
				return this.eq(0);
			  },
			  last: function () {
				return this.eq(-1);
			  },
			  even: function () {
				return this.pushStack(
				  Ie.grep(this, function (e, n) {
					return (n + 1) % 2;
				  })
				);
			  },
			  odd: function () {
				return this.pushStack(
				  Ie.grep(this, function (e, n) {
					return n % 2;
				  })
				);
			  },
			  eq: function (e) {
				var n = this.length,
				  t = +e + (e < 0 ? n : 0);
				return this.pushStack(t >= 0 && t < n ? [this[t]] : []);
			  },
			  end: function () {
				return this.prevObject || this.constructor();
			  },
			  push: ge,
			  sort: ue.sort,
			  splice: ue.splice,
			}),
			(Ie.extend = Ie.fn.extend =
			  function () {
				var e,
				  n,
				  t,
				  i,
				  l,
				  o,
				  r = arguments[0] || {},
				  a = 1,
				  s = arguments.length,
				  c = !1;
				for (
				  "boolean" == typeof r &&
					((c = r), (r = arguments[a] || {}), a++),
					"object" == typeof r || Se(r) || (r = {}),
					a === s && ((r = this), a--);
				  a < s;
				  a++
				)
				  if (null != (e = arguments[a]))
					for (n in e)
					  (i = e[n]),
						"__proto__" !== n &&
						  r !== i &&
						  (c &&
						  i &&
						  (Ie.isPlainObject(i) || (l = Array.isArray(i)))
							? ((t = r[n]),
							  (o =
								l && !Array.isArray(t)
								  ? []
								  : l || Ie.isPlainObject(t)
								  ? t
								  : {}),
							  (l = !1),
							  (r[n] = Ie.extend(c, o, i)))
							: void 0 !== i && (r[n] = i));
				return r;
			  }),
			Ie.extend({
			  expando: "jQuery" + (Ae + Math.random()).replace(/\D/g, ""),
			  isReady: !0,
			  error: function (e) {
				throw new Error(e);
			  },
			  noop: function () {},
			  isPlainObject: function (e) {
				var n, t;
				return (
				  !(!e || "[object Object]" !== xe.call(e)) &&
				  (!(n = de(e)) ||
					((t = ye.call(n, "constructor") && n.constructor),
					"function" == typeof t && ve.call(t) === we))
				);
			  },
			  isEmptyObject: function (e) {
				var n;
				for (n in e) return !1;
				return !0;
			  },
			  globalEval: function (e, n, t) {
				r(e, { nonce: n && n.nonce }, t);
			  },
			  each: function (e, n) {
				var t,
				  i = 0;
				if (s(e))
				  for (t = e.length; i < t && n.call(e[i], i, e[i]) !== !1; i++);
				else for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
				return e;
			  },
			  makeArray: function (e, n) {
				var t = n || [];
				return (
				  null != e &&
					(s(Object(e))
					  ? Ie.merge(t, "string" == typeof e ? [e] : e)
					  : ge.call(t, e)),
				  t
				);
			  },
			  inArray: function (e, n, t) {
				return null == n ? -1 : he.call(n, e, t);
			  },
			  merge: function (e, n) {
				for (var t = +n.length, i = 0, l = e.length; i < t; i++)
				  e[l++] = n[i];
				return (e.length = l), e;
			  },
			  grep: function (e, n, t) {
				for (var i, l = [], o = 0, r = e.length, a = !t; o < r; o++)
				  (i = !n(e[o], o)), i !== a && l.push(e[o]);
				return l;
			  },
			  map: function (e, n, t) {
				var i,
				  l,
				  o = 0,
				  r = [];
				if (s(e))
				  for (i = e.length; o < i; o++)
					(l = n(e[o], o, t)), null != l && r.push(l);
				else for (o in e) (l = n(e[o], o, t)), null != l && r.push(l);
				return pe(r);
			  },
			  guid: 1,
			  support: ke,
			}),
			"function" == typeof Symbol &&
			  (Ie.fn[Symbol.iterator] = ue[Symbol.iterator]),
			Ie.each(
			  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
				" "
			  ),
			  function (e, n) {
				be["[object " + n + "]"] = n.toLowerCase();
			  }
			);
		  var Oe =
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
			  function n(e, n, t, i) {
				var l,
				  o,
				  r,
				  a,
				  s,
				  c,
				  m,
				  d = n && n.ownerDocument,
				  p = n ? n.nodeType : 9;
				if (
				  ((t = t || []),
				  "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
				)
				  return t;
				if (!i && (F(n), (n = n || T), N)) {
				  if (11 !== p && (s = ye.exec(e)))
					if ((l = s[1])) {
					  if (9 === p) {
						if (!(r = n.getElementById(l))) return t;
						if (r.id === l) return t.push(r), t;
					  } else if (
						d &&
						(r = d.getElementById(l)) &&
						z(n, r) &&
						r.id === l
					  )
						return t.push(r), t;
					} else {
					  if (s[2]) return Q.apply(t, n.getElementsByTagName(e)), t;
					  if (
						(l = s[3]) &&
						k.getElementsByClassName &&
						n.getElementsByClassName
					  )
						return Q.apply(t, n.getElementsByClassName(l)), t;
					}
				  if (
					k.qsa &&
					!W[e + " "] &&
					(!P || !P.test(e)) &&
					(1 !== p || "object" !== n.nodeName.toLowerCase())
				  ) {
					if (
					  ((m = e), (d = n), 1 === p && (ue.test(e) || me.test(e)))
					) {
					  for (
						d = (ve.test(e) && u(n.parentNode)) || n,
						  (d === n && k.scope) ||
							((a = n.getAttribute("id"))
							  ? (a = a.replace(Se, Ce))
							  : n.setAttribute("id", (a = U))),
						  c = D(e),
						  o = c.length;
						o--;
  
					  )
						c[o] = (a ? "#" + a : ":scope") + " " + f(c[o]);
					  m = c.join(",");
					}
					try {
					  return Q.apply(t, d.querySelectorAll(m)), t;
					} catch (n) {
					  W(e, !0);
					} finally {
					  a === U && n.removeAttribute("id");
					}
				  }
				}
				return I(e.replace(se, "$1"), n, t, i);
			  }
			  function t() {
				function e(t, i) {
				  return (
					n.push(t + " ") > S.cacheLength && delete e[n.shift()],
					(e[t + " "] = i)
				  );
				}
				var n = [];
				return e;
			  }
			  function i(e) {
				return (e[U] = !0), e;
			  }
			  function l(e) {
				var n = T.createElement("fieldset");
				try {
				  return !!e(n);
				} catch (e) {
				  return !1;
				} finally {
				  n.parentNode && n.parentNode.removeChild(n), (n = null);
				}
			  }
			  function o(e, n) {
				for (var t = e.split("|"), i = t.length; i--; )
				  S.attrHandle[t[i]] = n;
			  }
			  function r(e, n) {
				var t = n && e,
				  i =
					t &&
					1 === e.nodeType &&
					1 === n.nodeType &&
					e.sourceIndex - n.sourceIndex;
				if (i) return i;
				if (t) for (; (t = t.nextSibling); ) if (t === n) return -1;
				return e ? 1 : -1;
			  }
			  function a(e) {
				return function (n) {
				  var t = n.nodeName.toLowerCase();
				  return "input" === t && n.type === e;
				};
			  }
			  function s(e) {
				return function (n) {
				  var t = n.nodeName.toLowerCase();
				  return ("input" === t || "button" === t) && n.type === e;
				};
			  }
			  function c(e) {
				return function (n) {
				  return "form" in n
					? n.parentNode && n.disabled === !1
					  ? "label" in n
						? "label" in n.parentNode
						  ? n.parentNode.disabled === e
						  : n.disabled === e
						: n.isDisabled === e ||
						  (n.isDisabled !== !e && De(n) === e)
					  : n.disabled === e
					: "label" in n && n.disabled === e;
				};
			  }
			  function m(e) {
				return i(function (n) {
				  return (
					(n = +n),
					i(function (t, i) {
					  for (var l, o = e([], t.length, n), r = o.length; r--; )
						t[(l = o[r])] && (t[l] = !(i[l] = t[l]));
					})
				  );
				});
			  }
			  function u(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e;
			  }
			  function d() {}
			  function f(e) {
				for (var n = 0, t = e.length, i = ""; n < t; n++) i += e[n].value;
				return i;
			  }
			  function p(e, n, t) {
				var i = n.dir,
				  l = n.next,
				  o = l || i,
				  r = t && "parentNode" === o,
				  a = q++;
				return n.first
				  ? function (n, t, l) {
					  for (; (n = n[i]); )
						if (1 === n.nodeType || r) return e(n, t, l);
					  return !1;
					}
				  : function (n, t, s) {
					  var c,
						m,
						u,
						d = [B, a];
					  if (s) {
						for (; (n = n[i]); )
						  if ((1 === n.nodeType || r) && e(n, t, s)) return !0;
					  } else
						for (; (n = n[i]); )
						  if (1 === n.nodeType || r)
							if (
							  ((u = n[U] || (n[U] = {})),
							  (m = u[n.uniqueID] || (u[n.uniqueID] = {})),
							  l && l === n.nodeName.toLowerCase())
							)
							  n = n[i] || n;
							else {
							  if ((c = m[o]) && c[0] === B && c[1] === a)
								return (d[2] = c[2]);
							  if (((m[o] = d), (d[2] = e(n, t, s)))) return !0;
							}
					  return !1;
					};
			  }
			  function g(e) {
				return e.length > 1
				  ? function (n, t, i) {
					  for (var l = e.length; l--; ) if (!e[l](n, t, i)) return !1;
					  return !0;
					}
				  : e[0];
			  }
			  function h(e, t, i) {
				for (var l = 0, o = t.length; l < o; l++) n(e, t[l], i);
				return i;
			  }
			  function b(e, n, t, i, l) {
				for (
				  var o, r = [], a = 0, s = e.length, c = null != n;
				  a < s;
				  a++
				)
				  (o = e[a]) &&
					((t && !t(o, i, l)) || (r.push(o), c && n.push(a)));
				return r;
			  }
			  function x(e, n, t, l, o, r) {
				return (
				  l && !l[U] && (l = x(l)),
				  o && !o[U] && (o = x(o, r)),
				  i(function (i, r, a, s) {
					var c,
					  m,
					  u,
					  d = [],
					  f = [],
					  p = r.length,
					  g = i || h(n || "*", a.nodeType ? [a] : a, []),
					  x = !e || (!i && n) ? g : b(g, d, e, a, s),
					  y = t ? (o || (i ? e : p || l) ? [] : r) : x;
					if ((t && t(x, y, a, s), l))
					  for (c = b(y, f), l(c, [], a, s), m = c.length; m--; )
						(u = c[m]) && (y[f[m]] = !(x[f[m]] = u));
					if (i) {
					  if (o || e) {
						if (o) {
						  for (c = [], m = y.length; m--; )
							(u = y[m]) && c.push((x[m] = u));
						  o(null, (y = []), c, s);
						}
						for (m = y.length; m--; )
						  (u = y[m]) &&
							(c = o ? ne(i, u) : d[m]) > -1 &&
							(i[c] = !(r[c] = u));
					  }
					} else (y = b(y === r ? y.splice(p, y.length) : y)), o ? o(null, r, y, s) : Q.apply(r, y);
				  })
				);
			  }
			  function y(e) {
				for (
				  var n,
					t,
					i,
					l = e.length,
					o = S.relative[e[0].type],
					r = o || S.relative[" "],
					a = o ? 1 : 0,
					s = p(
					  function (e) {
						return e === n;
					  },
					  r,
					  !0
					),
					c = p(
					  function (e) {
						return ne(n, e) > -1;
					  },
					  r,
					  !0
					),
					m = [
					  function (e, t, i) {
						var l =
						  (!o && (i || t !== O)) ||
						  ((n = t).nodeType ? s(e, t, i) : c(e, t, i));
						return (n = null), l;
					  },
					];
				  a < l;
				  a++
				)
				  if ((t = S.relative[e[a].type])) m = [p(g(m), t)];
				  else {
					if (
					  ((t = S.filter[e[a].type].apply(null, e[a].matches)), t[U])
					) {
					  for (i = ++a; i < l && !S.relative[e[i].type]; i++);
					  return x(
						a > 1 && g(m),
						a > 1 &&
						  f(
							e
							  .slice(0, a - 1)
							  .concat({ value: " " === e[a - 2].type ? "*" : "" })
						  ).replace(se, "$1"),
						t,
						a < i && y(e.slice(a, i)),
						i < l && y((e = e.slice(i))),
						i < l && f(e)
					  );
					}
					m.push(t);
				  }
				return g(m);
			  }
			  function v(e, t) {
				var l = t.length > 0,
				  o = e.length > 0,
				  r = function (i, r, a, s, c) {
					var m,
					  u,
					  d,
					  f = 0,
					  p = "0",
					  g = i && [],
					  h = [],
					  x = O,
					  y = i || (o && S.find.TAG("*", c)),
					  v = (B += null == x ? 1 : Math.random() || 0.1),
					  w = y.length;
					for (
					  c && (O = r == T || r || c);
					  p !== w && null != (m = y[p]);
					  p++
					) {
					  if (o && m) {
						for (
						  u = 0, r || m.ownerDocument == T || (F(m), (a = !N));
						  (d = e[u++]);
  
						)
						  if (d(m, r || T, a)) {
							s.push(m);
							break;
						  }
						c && (B = v);
					  }
					  l && ((m = !d && m) && f--, i && g.push(m));
					}
					if (((f += p), l && p !== f)) {
					  for (u = 0; (d = t[u++]); ) d(g, h, r, a);
					  if (i) {
						if (f > 0)
						  for (; p--; ) g[p] || h[p] || (h[p] = Z.call(s));
						h = b(h);
					  }
					  Q.apply(s, h),
						c &&
						  !i &&
						  h.length > 0 &&
						  f + t.length > 1 &&
						  n.uniqueSort(s);
					}
					return c && ((B = v), (O = x)), g;
				  };
				return l ? i(r) : r;
			  }
			  var w,
				k,
				S,
				C,
				$,
				D,
				A,
				I,
				O,
				_,
				E,
				F,
				T,
				R,
				N,
				P,
				j,
				L,
				z,
				U = "sizzle" + 1 * new Date(),
				M = e.document,
				B = 0,
				q = 0,
				V = t(),
				H = t(),
				Y = t(),
				W = t(),
				G = function (e, n) {
				  return e === n && (E = !0), 0;
				},
				J = {}.hasOwnProperty,
				X = [],
				Z = X.pop,
				K = X.push,
				Q = X.push,
				ee = X.slice,
				ne = function (e, n) {
				  for (var t = 0, i = e.length; t < i; t++)
					if (e[t] === n) return t;
				  return -1;
				},
				te =
				  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ie = "[\\x20\\t\\r\\n\\f]",
				le =
				  "(?:\\\\[\\da-fA-F]{1,6}" +
				  ie +
				  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				oe =
				  "\\[" +
				  ie +
				  "*(" +
				  le +
				  ")(?:" +
				  ie +
				  "*([*^$|!~]?=)" +
				  ie +
				  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
				  le +
				  "))|)" +
				  ie +
				  "*\\]",
				re =
				  ":(" +
				  le +
				  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
				  oe +
				  ")*)|.*)\\)|)",
				ae = new RegExp(ie + "+", "g"),
				se = new RegExp(
				  "^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$",
				  "g"
				),
				ce = new RegExp("^" + ie + "*," + ie + "*"),
				me = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
				ue = new RegExp(ie + "|>"),
				de = new RegExp(re),
				fe = new RegExp("^" + le + "$"),
				pe = {
				  ID: new RegExp("^#(" + le + ")"),
				  CLASS: new RegExp("^\\.(" + le + ")"),
				  TAG: new RegExp("^(" + le + "|[*])"),
				  ATTR: new RegExp("^" + oe),
				  PSEUDO: new RegExp("^" + re),
				  CHILD: new RegExp(
					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
					  ie +
					  "*(even|odd|(([+-]|)(\\d*)n|)" +
					  ie +
					  "*(?:([+-]|)" +
					  ie +
					  "*(\\d+)|))" +
					  ie +
					  "*\\)|)",
					"i"
				  ),
				  bool: new RegExp("^(?:" + te + ")$", "i"),
				  needsContext: new RegExp(
					"^" +
					  ie +
					  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
					  ie +
					  "*((?:-\\d)?\\d*)" +
					  ie +
					  "*\\)|)(?=[^-]|$)",
					"i"
				  ),
				},
				ge = /HTML$/i,
				he = /^(?:input|select|textarea|button)$/i,
				be = /^h\d$/i,
				xe = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ve = /[+~]/,
				we = new RegExp(
				  "\\\\[\\da-fA-F]{1,6}" + ie + "?|\\\\([^\\r\\n\\f])",
				  "g"
				),
				ke = function (e, n) {
				  var t = "0x" + e.slice(1) - 65536;
				  return n
					? n
					: t < 0
					? String.fromCharCode(t + 65536)
					: String.fromCharCode((t >> 10) | 55296, (1023 & t) | 56320);
				},
				Se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				Ce = function (e, n) {
				  return n
					? "\0" === e
					  ? "�"
					  : e.slice(0, -1) +
						"\\" +
						e.charCodeAt(e.length - 1).toString(16) +
						" "
					: "\\" + e;
				},
				$e = function () {
				  F();
				},
				De = p(
				  function (e) {
					return (
					  e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
					);
				  },
				  { dir: "parentNode", next: "legend" }
				);
			  try {
				Q.apply((X = ee.call(M.childNodes)), M.childNodes),
				  X[M.childNodes.length].nodeType;
			  } catch (e) {
				Q = {
				  apply: X.length
					? function (e, n) {
						K.apply(e, ee.call(n));
					  }
					: function (e, n) {
						for (var t = e.length, i = 0; (e[t++] = n[i++]); );
						e.length = t - 1;
					  },
				};
			  }
			  (k = n.support = {}),
				($ = n.isXML =
				  function (e) {
					var n = e && e.namespaceURI,
					  t = e && (e.ownerDocument || e).documentElement;
					return !ge.test(n || (t && t.nodeName) || "HTML");
				  }),
				(F = n.setDocument =
				  function (e) {
					var n,
					  t,
					  i = e ? e.ownerDocument || e : M;
					return i != T && 9 === i.nodeType && i.documentElement
					  ? ((T = i),
						(R = T.documentElement),
						(N = !$(T)),
						M != T &&
						  (t = T.defaultView) &&
						  t.top !== t &&
						  (t.addEventListener
							? t.addEventListener("unload", $e, !1)
							: t.attachEvent && t.attachEvent("onunload", $e)),
						(k.scope = l(function (e) {
						  return (
							R.appendChild(e).appendChild(T.createElement("div")),
							"undefined" != typeof e.querySelectorAll &&
							  !e.querySelectorAll(":scope fieldset div").length
						  );
						})),
						(k.attributes = l(function (e) {
						  return (
							(e.className = "i"), !e.getAttribute("className")
						  );
						})),
						(k.getElementsByTagName = l(function (e) {
						  return (
							e.appendChild(T.createComment("")),
							!e.getElementsByTagName("*").length
						  );
						})),
						(k.getElementsByClassName = xe.test(
						  T.getElementsByClassName
						)),
						(k.getById = l(function (e) {
						  return (
							(R.appendChild(e).id = U),
							!T.getElementsByName || !T.getElementsByName(U).length
						  );
						})),
						k.getById
						  ? ((S.filter.ID = function (e) {
							  var n = e.replace(we, ke);
							  return function (e) {
								return e.getAttribute("id") === n;
							  };
							}),
							(S.find.ID = function (e, n) {
							  if ("undefined" != typeof n.getElementById && N) {
								var t = n.getElementById(e);
								return t ? [t] : [];
							  }
							}))
						  : ((S.filter.ID = function (e) {
							  var n = e.replace(we, ke);
							  return function (e) {
								var t =
								  "undefined" != typeof e.getAttributeNode &&
								  e.getAttributeNode("id");
								return t && t.value === n;
							  };
							}),
							(S.find.ID = function (e, n) {
							  if ("undefined" != typeof n.getElementById && N) {
								var t,
								  i,
								  l,
								  o = n.getElementById(e);
								if (o) {
								  if (
									((t = o.getAttributeNode("id")),
									t && t.value === e)
								  )
									return [o];
								  for (
									l = n.getElementsByName(e), i = 0;
									(o = l[i++]);
  
								  )
									if (
									  ((t = o.getAttributeNode("id")),
									  t && t.value === e)
									)
									  return [o];
								}
								return [];
							  }
							})),
						(S.find.TAG = k.getElementsByTagName
						  ? function (e, n) {
							  return "undefined" != typeof n.getElementsByTagName
								? n.getElementsByTagName(e)
								: k.qsa
								? n.querySelectorAll(e)
								: void 0;
							}
						  : function (e, n) {
							  var t,
								i = [],
								l = 0,
								o = n.getElementsByTagName(e);
							  if ("*" === e) {
								for (; (t = o[l++]); )
								  1 === t.nodeType && i.push(t);
								return i;
							  }
							  return o;
							}),
						(S.find.CLASS =
						  k.getElementsByClassName &&
						  function (e, n) {
							if (
							  "undefined" != typeof n.getElementsByClassName &&
							  N
							)
							  return n.getElementsByClassName(e);
						  }),
						(j = []),
						(P = []),
						(k.qsa = xe.test(T.querySelectorAll)) &&
						  (l(function (e) {
							var n;
							(R.appendChild(e).innerHTML =
							  "<a id='" +
							  U +
							  "'></a><select id='" +
							  U +
							  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
							  e.querySelectorAll("[msallowcapture^='']").length &&
								P.push("[*^$]=" + ie + "*(?:''|\"\")"),
							  e.querySelectorAll("[selected]").length ||
								P.push("\\[" + ie + "*(?:value|" + te + ")"),
							  e.querySelectorAll("[id~=" + U + "-]").length ||
								P.push("~="),
							  (n = T.createElement("input")),
							  n.setAttribute("name", ""),
							  e.appendChild(n),
							  e.querySelectorAll("[name='']").length ||
								P.push(
								  "\\[" +
									ie +
									"*name" +
									ie +
									"*=" +
									ie +
									"*(?:''|\"\")"
								),
							  e.querySelectorAll(":checked").length ||
								P.push(":checked"),
							  e.querySelectorAll("a#" + U + "+*").length ||
								P.push(".#.+[+~]"),
							  e.querySelectorAll("\\\f"),
							  P.push("[\\r\\n\\f]");
						  }),
						  l(function (e) {
							e.innerHTML =
							  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var n = T.createElement("input");
							n.setAttribute("type", "hidden"),
							  e.appendChild(n).setAttribute("name", "D"),
							  e.querySelectorAll("[name=d]").length &&
								P.push("name" + ie + "*[*^$|!~]?="),
							  2 !== e.querySelectorAll(":enabled").length &&
								P.push(":enabled", ":disabled"),
							  (R.appendChild(e).disabled = !0),
							  2 !== e.querySelectorAll(":disabled").length &&
								P.push(":enabled", ":disabled"),
							  e.querySelectorAll("*,:x"),
							  P.push(",.*:");
						  })),
						(k.matchesSelector = xe.test(
						  (L =
							R.matches ||
							R.webkitMatchesSelector ||
							R.mozMatchesSelector ||
							R.oMatchesSelector ||
							R.msMatchesSelector)
						)) &&
						  l(function (e) {
							(k.disconnectedMatch = L.call(e, "*")),
							  L.call(e, "[s!='']:x"),
							  j.push("!=", re);
						  }),
						(P = P.length && new RegExp(P.join("|"))),
						(j = j.length && new RegExp(j.join("|"))),
						(n = xe.test(R.compareDocumentPosition)),
						(z =
						  n || xe.test(R.contains)
							? function (e, n) {
								var t = 9 === e.nodeType ? e.documentElement : e,
								  i = n && n.parentNode;
								return (
								  e === i ||
								  !(
									!i ||
									1 !== i.nodeType ||
									!(t.contains
									  ? t.contains(i)
									  : e.compareDocumentPosition &&
										16 & e.compareDocumentPosition(i))
								  )
								);
							  }
							: function (e, n) {
								if (n)
								  for (; (n = n.parentNode); )
									if (n === e) return !0;
								return !1;
							  }),
						(G = n
						  ? function (e, n) {
							  if (e === n) return (E = !0), 0;
							  var t =
								!e.compareDocumentPosition -
								!n.compareDocumentPosition;
							  return t
								? t
								: ((t =
									(e.ownerDocument || e) ==
									(n.ownerDocument || n)
									  ? e.compareDocumentPosition(n)
									  : 1),
								  1 & t ||
								  (!k.sortDetached &&
									n.compareDocumentPosition(e) === t)
									? e == T || (e.ownerDocument == M && z(M, e))
									  ? -1
									  : n == T ||
										(n.ownerDocument == M && z(M, n))
									  ? 1
									  : _
									  ? ne(_, e) - ne(_, n)
									  : 0
									: 4 & t
									? -1
									: 1);
							}
						  : function (e, n) {
							  if (e === n) return (E = !0), 0;
							  var t,
								i = 0,
								l = e.parentNode,
								o = n.parentNode,
								a = [e],
								s = [n];
							  if (!l || !o)
								return e == T
								  ? -1
								  : n == T
								  ? 1
								  : l
								  ? -1
								  : o
								  ? 1
								  : _
								  ? ne(_, e) - ne(_, n)
								  : 0;
							  if (l === o) return r(e, n);
							  for (t = e; (t = t.parentNode); ) a.unshift(t);
							  for (t = n; (t = t.parentNode); ) s.unshift(t);
							  for (; a[i] === s[i]; ) i++;
							  return i
								? r(a[i], s[i])
								: a[i] == M
								? -1
								: s[i] == M
								? 1
								: 0;
							}),
						T)
					  : T;
				  }),
				(n.matches = function (e, t) {
				  return n(e, null, null, t);
				}),
				(n.matchesSelector = function (e, t) {
				  if (
					(F(e),
					k.matchesSelector &&
					  N &&
					  !W[t + " "] &&
					  (!j || !j.test(t)) &&
					  (!P || !P.test(t)))
				  )
					try {
					  var i = L.call(e, t);
					  if (
						i ||
						k.disconnectedMatch ||
						(e.document && 11 !== e.document.nodeType)
					  )
						return i;
					} catch (e) {
					  W(t, !0);
					}
				  return n(t, T, null, [e]).length > 0;
				}),
				(n.contains = function (e, n) {
				  return (e.ownerDocument || e) != T && F(e), z(e, n);
				}),
				(n.attr = function (e, n) {
				  (e.ownerDocument || e) != T && F(e);
				  var t = S.attrHandle[n.toLowerCase()],
					i =
					  t && J.call(S.attrHandle, n.toLowerCase())
						? t(e, n, !N)
						: void 0;
				  return void 0 !== i
					? i
					: k.attributes || !N
					? e.getAttribute(n)
					: (i = e.getAttributeNode(n)) && i.specified
					? i.value
					: null;
				}),
				(n.escape = function (e) {
				  return (e + "").replace(Se, Ce);
				}),
				(n.error = function (e) {
				  throw new Error("Syntax error, unrecognized expression: " + e);
				}),
				(n.uniqueSort = function (e) {
				  var n,
					t = [],
					i = 0,
					l = 0;
				  if (
					((E = !k.detectDuplicates),
					(_ = !k.sortStable && e.slice(0)),
					e.sort(G),
					E)
				  ) {
					for (; (n = e[l++]); ) n === e[l] && (i = t.push(l));
					for (; i--; ) e.splice(t[i], 1);
				  }
				  return (_ = null), e;
				}),
				(C = n.getText =
				  function (e) {
					var n,
					  t = "",
					  i = 0,
					  l = e.nodeType;
					if (l) {
					  if (1 === l || 9 === l || 11 === l) {
						if ("string" == typeof e.textContent)
						  return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) t += C(e);
					  } else if (3 === l || 4 === l) return e.nodeValue;
					} else for (; (n = e[i++]); ) t += C(n);
					return t;
				  }),
				(S = n.selectors =
				  {
					cacheLength: 50,
					createPseudo: i,
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
						  (e[1] = e[1].replace(we, ke)),
						  (e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke)),
						  "~=" === e[2] && (e[3] = " " + e[3] + " "),
						  e.slice(0, 4)
						);
					  },
					  CHILD: function (e) {
						return (
						  (e[1] = e[1].toLowerCase()),
						  "nth" === e[1].slice(0, 3)
							? (e[3] || n.error(e[0]),
							  (e[4] = +(e[4]
								? e[5] + (e[6] || 1)
								: 2 * ("even" === e[3] || "odd" === e[3]))),
							  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
							: e[3] && n.error(e[0]),
						  e
						);
					  },
					  PSEUDO: function (e) {
						var n,
						  t = !e[6] && e[2];
						return pe.CHILD.test(e[0])
						  ? null
						  : (e[3]
							  ? (e[2] = e[4] || e[5] || "")
							  : t &&
								de.test(t) &&
								(n = D(t, !0)) &&
								(n = t.indexOf(")", t.length - n) - t.length) &&
								((e[0] = e[0].slice(0, n)),
								(e[2] = t.slice(0, n))),
							e.slice(0, 3));
					  },
					},
					filter: {
					  TAG: function (e) {
						var n = e.replace(we, ke).toLowerCase();
						return "*" === e
						  ? function () {
							  return !0;
							}
						  : function (e) {
							  return e.nodeName && e.nodeName.toLowerCase() === n;
							};
					  },
					  CLASS: function (e) {
						var n = V[e + " "];
						return (
						  n ||
						  ((n = new RegExp(
							"(^|" + ie + ")" + e + "(" + ie + "|$)"
						  )) &&
							V(e, function (e) {
							  return n.test(
								("string" == typeof e.className && e.className) ||
								  ("undefined" != typeof e.getAttribute &&
									e.getAttribute("class")) ||
								  ""
							  );
							}))
						);
					  },
					  ATTR: function (e, t, i) {
						return function (l) {
						  var o = n.attr(l, e);
						  return null == o
							? "!=" === t
							: !t ||
								((o += ""),
								"=" === t
								  ? o === i
								  : "!=" === t
								  ? o !== i
								  : "^=" === t
								  ? i && 0 === o.indexOf(i)
								  : "*=" === t
								  ? i && o.indexOf(i) > -1
								  : "$=" === t
								  ? i && o.slice(-i.length) === i
								  : "~=" === t
								  ? (" " + o.replace(ae, " ") + " ").indexOf(i) >
									-1
								  : "|=" === t &&
									(o === i ||
									  o.slice(0, i.length + 1) === i + "-"));
						};
					  },
					  CHILD: function (e, n, t, i, l) {
						var o = "nth" !== e.slice(0, 3),
						  r = "last" !== e.slice(-4),
						  a = "of-type" === n;
						return 1 === i && 0 === l
						  ? function (e) {
							  return !!e.parentNode;
							}
						  : function (n, t, s) {
							  var c,
								m,
								u,
								d,
								f,
								p,
								g = o !== r ? "nextSibling" : "previousSibling",
								h = n.parentNode,
								b = a && n.nodeName.toLowerCase(),
								x = !s && !a,
								y = !1;
							  if (h) {
								if (o) {
								  for (; g; ) {
									for (d = n; (d = d[g]); )
									  if (
										a
										  ? d.nodeName.toLowerCase() === b
										  : 1 === d.nodeType
									  )
										return !1;
									p = g = "only" === e && !p && "nextSibling";
								  }
								  return !0;
								}
								if (
								  ((p = [r ? h.firstChild : h.lastChild]), r && x)
								) {
								  for (
									d = h,
									  u = d[U] || (d[U] = {}),
									  m = u[d.uniqueID] || (u[d.uniqueID] = {}),
									  c = m[e] || [],
									  f = c[0] === B && c[1],
									  y = f && c[2],
									  d = f && h.childNodes[f];
									(d =
									  (++f && d && d[g]) ||
									  (y = f = 0) ||
									  p.pop());
  
								  )
									if (1 === d.nodeType && ++y && d === n) {
									  m[e] = [B, f, y];
									  break;
									}
								} else if (
								  (x &&
									((d = n),
									(u = d[U] || (d[U] = {})),
									(m = u[d.uniqueID] || (u[d.uniqueID] = {})),
									(c = m[e] || []),
									(f = c[0] === B && c[1]),
									(y = f)),
								  y === !1)
								)
								  for (
									;
									(d =
									  (++f && d && d[g]) ||
									  (y = f = 0) ||
									  p.pop()) &&
									((a
									  ? d.nodeName.toLowerCase() !== b
									  : 1 !== d.nodeType) ||
									  !++y ||
									  (x &&
										((u = d[U] || (d[U] = {})),
										(m =
										  u[d.uniqueID] || (u[d.uniqueID] = {})),
										(m[e] = [B, y])),
									  d !== n));
  
								  );
								return (
								  (y -= l), y === i || (y % i === 0 && y / i >= 0)
								);
							  }
							};
					  },
					  PSEUDO: function (e, t) {
						var l,
						  o =
							S.pseudos[e] ||
							S.setFilters[e.toLowerCase()] ||
							n.error("unsupported pseudo: " + e);
						return o[U]
						  ? o(t)
						  : o.length > 1
						  ? ((l = [e, e, "", t]),
							S.setFilters.hasOwnProperty(e.toLowerCase())
							  ? i(function (e, n) {
								  for (var i, l = o(e, t), r = l.length; r--; )
									(i = ne(e, l[r])), (e[i] = !(n[i] = l[r]));
								})
							  : function (e) {
								  return o(e, 0, l);
								})
						  : o;
					  },
					},
					pseudos: {
					  not: i(function (e) {
						var n = [],
						  t = [],
						  l = A(e.replace(se, "$1"));
						return l[U]
						  ? i(function (e, n, t, i) {
							  for (
								var o, r = l(e, null, i, []), a = e.length;
								a--;
  
							  )
								(o = r[a]) && (e[a] = !(n[a] = o));
							})
						  : function (e, i, o) {
							  return (
								(n[0] = e),
								l(n, null, o, t),
								(n[0] = null),
								!t.pop()
							  );
							};
					  }),
					  has: i(function (e) {
						return function (t) {
						  return n(e, t).length > 0;
						};
					  }),
					  contains: i(function (e) {
						return (
						  (e = e.replace(we, ke)),
						  function (n) {
							return (n.textContent || C(n)).indexOf(e) > -1;
						  }
						);
					  }),
					  lang: i(function (e) {
						return (
						  fe.test(e || "") || n.error("unsupported lang: " + e),
						  (e = e.replace(we, ke).toLowerCase()),
						  function (n) {
							var t;
							do
							  if (
								(t = N
								  ? n.lang
								  : n.getAttribute("xml:lang") ||
									n.getAttribute("lang"))
							  )
								return (
								  (t = t.toLowerCase()),
								  t === e || 0 === t.indexOf(e + "-")
								);
							while ((n = n.parentNode) && 1 === n.nodeType);
							return !1;
						  }
						);
					  }),
					  target: function (n) {
						var t = e.location && e.location.hash;
						return t && t.slice(1) === n.id;
					  },
					  root: function (e) {
						return e === R;
					  },
					  focus: function (e) {
						return (
						  e === T.activeElement &&
						  (!T.hasFocus || T.hasFocus()) &&
						  !!(e.type || e.href || ~e.tabIndex)
						);
					  },
					  enabled: c(!1),
					  disabled: c(!0),
					  checked: function (e) {
						var n = e.nodeName.toLowerCase();
						return (
						  ("input" === n && !!e.checked) ||
						  ("option" === n && !!e.selected)
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
						return !S.pseudos.empty(e);
					  },
					  header: function (e) {
						return be.test(e.nodeName);
					  },
					  input: function (e) {
						return he.test(e.nodeName);
					  },
					  button: function (e) {
						var n = e.nodeName.toLowerCase();
						return (
						  ("input" === n && "button" === e.type) || "button" === n
						);
					  },
					  text: function (e) {
						var n;
						return (
						  "input" === e.nodeName.toLowerCase() &&
						  "text" === e.type &&
						  (null == (n = e.getAttribute("type")) ||
							"text" === n.toLowerCase())
						);
					  },
					  first: m(function () {
						return [0];
					  }),
					  last: m(function (e, n) {
						return [n - 1];
					  }),
					  eq: m(function (e, n, t) {
						return [t < 0 ? t + n : t];
					  }),
					  even: m(function (e, n) {
						for (var t = 0; t < n; t += 2) e.push(t);
						return e;
					  }),
					  odd: m(function (e, n) {
						for (var t = 1; t < n; t += 2) e.push(t);
						return e;
					  }),
					  lt: m(function (e, n, t) {
						for (var i = t < 0 ? t + n : t > n ? n : t; --i >= 0; )
						  e.push(i);
						return e;
					  }),
					  gt: m(function (e, n, t) {
						for (var i = t < 0 ? t + n : t; ++i < n; ) e.push(i);
						return e;
					  }),
					},
				  }),
				(S.pseudos.nth = S.pseudos.eq);
			  for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0,
			  })
				S.pseudos[w] = a(w);
			  for (w in { submit: !0, reset: !0 }) S.pseudos[w] = s(w);
			  return (
				(d.prototype = S.filters = S.pseudos),
				(S.setFilters = new d()),
				(D = n.tokenize =
				  function (e, t) {
					var i,
					  l,
					  o,
					  r,
					  a,
					  s,
					  c,
					  m = H[e + " "];
					if (m) return t ? 0 : m.slice(0);
					for (a = e, s = [], c = S.preFilter; a; ) {
					  (i && !(l = ce.exec(a))) ||
						(l && (a = a.slice(l[0].length) || a), s.push((o = []))),
						(i = !1),
						(l = me.exec(a)) &&
						  ((i = l.shift()),
						  o.push({ value: i, type: l[0].replace(se, " ") }),
						  (a = a.slice(i.length)));
					  for (r in S.filter)
						!(l = pe[r].exec(a)) ||
						  (c[r] && !(l = c[r](l))) ||
						  ((i = l.shift()),
						  o.push({ value: i, type: r, matches: l }),
						  (a = a.slice(i.length)));
					  if (!i) break;
					}
					return t ? a.length : a ? n.error(e) : H(e, s).slice(0);
				  }),
				(A = n.compile =
				  function (e, n) {
					var t,
					  i = [],
					  l = [],
					  o = Y[e + " "];
					if (!o) {
					  for (n || (n = D(e)), t = n.length; t--; )
						(o = y(n[t])), o[U] ? i.push(o) : l.push(o);
					  (o = Y(e, v(l, i))), (o.selector = e);
					}
					return o;
				  }),
				(I = n.select =
				  function (e, n, t, i) {
					var l,
					  o,
					  r,
					  a,
					  s,
					  c = "function" == typeof e && e,
					  m = !i && D((e = c.selector || e));
					if (((t = t || []), 1 === m.length)) {
					  if (
						((o = m[0] = m[0].slice(0)),
						o.length > 2 &&
						  "ID" === (r = o[0]).type &&
						  9 === n.nodeType &&
						  N &&
						  S.relative[o[1].type])
					  ) {
						if (
						  ((n = (S.find.ID(r.matches[0].replace(we, ke), n) ||
							[])[0]),
						  !n)
						)
						  return t;
						c && (n = n.parentNode),
						  (e = e.slice(o.shift().value.length));
					  }
					  for (
						l = pe.needsContext.test(e) ? 0 : o.length;
						l-- && ((r = o[l]), !S.relative[(a = r.type)]);
  
					  )
						if (
						  (s = S.find[a]) &&
						  (i = s(
							r.matches[0].replace(we, ke),
							(ve.test(o[0].type) && u(n.parentNode)) || n
						  ))
						) {
						  if ((o.splice(l, 1), (e = i.length && f(o)), !e))
							return Q.apply(t, i), t;
						  break;
						}
					}
					return (
					  (c || A(e, m))(
						i,
						n,
						!N,
						t,
						!n || (ve.test(e) && u(n.parentNode)) || n
					  ),
					  t
					);
				  }),
				(k.sortStable = U.split("").sort(G).join("") === U),
				(k.detectDuplicates = !!E),
				F(),
				(k.sortDetached = l(function (e) {
				  return (
					1 & e.compareDocumentPosition(T.createElement("fieldset"))
				  );
				})),
				l(function (e) {
				  return (
					(e.innerHTML = "<a href='#'></a>"),
					"#" === e.firstChild.getAttribute("href")
				  );
				}) ||
				  o("type|href|height|width", function (e, n, t) {
					if (!t)
					  return e.getAttribute(
						n,
						"type" === n.toLowerCase() ? 1 : 2
					  );
				  }),
				(k.attributes &&
				  l(function (e) {
					return (
					  (e.innerHTML = "<input/>"),
					  e.firstChild.setAttribute("value", ""),
					  "" === e.firstChild.getAttribute("value")
					);
				  })) ||
				  o("value", function (e, n, t) {
					if (!t && "input" === e.nodeName.toLowerCase())
					  return e.defaultValue;
				  }),
				l(function (e) {
				  return null == e.getAttribute("disabled");
				}) ||
				  o(te, function (e, n, t) {
					var i;
					if (!t)
					  return e[n] === !0
						? n.toLowerCase()
						: (i = e.getAttributeNode(n)) && i.specified
						? i.value
						: null;
				  }),
				n
			  );
			})(t);
		  (Ie.find = Oe),
			(Ie.expr = Oe.selectors),
			(Ie.expr[":"] = Ie.expr.pseudos),
			(Ie.uniqueSort = Ie.unique = Oe.uniqueSort),
			(Ie.text = Oe.getText),
			(Ie.isXMLDoc = Oe.isXML),
			(Ie.contains = Oe.contains),
			(Ie.escapeSelector = Oe.escape);
		  var _e = function (e, n, t) {
			  for (var i = [], l = void 0 !== t; (e = e[n]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
				  if (l && Ie(e).is(t)) break;
				  i.push(e);
				}
			  return i;
			},
			Ee = function (e, n) {
			  for (var t = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== n && t.push(e);
			  return t;
			},
			Fe = Ie.expr.match.needsContext,
			Te =
			  /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		  (Ie.filter = function (e, n, t) {
			var i = n[0];
			return (
			  t && (e = ":not(" + e + ")"),
			  1 === n.length && 1 === i.nodeType
				? Ie.find.matchesSelector(i, e)
				  ? [i]
				  : []
				: Ie.find.matches(
					e,
					Ie.grep(n, function (e) {
					  return 1 === e.nodeType;
					})
				  )
			);
		  }),
			Ie.fn.extend({
			  find: function (e) {
				var n,
				  t,
				  i = this.length,
				  l = this;
				if ("string" != typeof e)
				  return this.pushStack(
					Ie(e).filter(function () {
					  for (n = 0; n < i; n++)
						if (Ie.contains(l[n], this)) return !0;
					})
				  );
				for (t = this.pushStack([]), n = 0; n < i; n++)
				  Ie.find(e, l[n], t);
				return i > 1 ? Ie.uniqueSort(t) : t;
			  },
			  filter: function (e) {
				return this.pushStack(m(this, e || [], !1));
			  },
			  not: function (e) {
				return this.pushStack(m(this, e || [], !0));
			  },
			  is: function (e) {
				return !!m(
				  this,
				  "string" == typeof e && Fe.test(e) ? Ie(e) : e || [],
				  !1
				).length;
			  },
			});
		  var Re,
			Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
			Pe = (Ie.fn.init = function (e, n, t) {
			  var i, l;
			  if (!e) return this;
			  if (((t = t || Re), "string" == typeof e)) {
				if (
				  ((i =
					"<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
					  ? [null, e, null]
					  : Ne.exec(e)),
				  !i || (!i[1] && n))
				)
				  return !n || n.jquery
					? (n || t).find(e)
					: this.constructor(n).find(e);
				if (i[1]) {
				  if (
					((n = n instanceof Ie ? n[0] : n),
					Ie.merge(
					  this,
					  Ie.parseHTML(
						i[1],
						n && n.nodeType ? n.ownerDocument || n : $e,
						!0
					  )
					),
					Te.test(i[1]) && Ie.isPlainObject(n))
				  )
					for (i in n) Se(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
				  return this;
				}
				return (
				  (l = $e.getElementById(i[2])),
				  l && ((this[0] = l), (this.length = 1)),
				  this
				);
			  }
			  return e.nodeType
				? ((this[0] = e), (this.length = 1), this)
				: Se(e)
				? void 0 !== t.ready
				  ? t.ready(e)
				  : e(Ie)
				: Ie.makeArray(e, this);
			});
		  (Pe.prototype = Ie.fn), (Re = Ie($e));
		  var je = /^(?:parents|prev(?:Until|All))/,
			Le = { children: !0, contents: !0, next: !0, prev: !0 };
		  Ie.fn.extend({
			has: function (e) {
			  var n = Ie(e, this),
				t = n.length;
			  return this.filter(function () {
				for (var e = 0; e < t; e++)
				  if (Ie.contains(this, n[e])) return !0;
			  });
			},
			closest: function (e, n) {
			  var t,
				i = 0,
				l = this.length,
				o = [],
				r = "string" != typeof e && Ie(e);
			  if (!Fe.test(e))
				for (; i < l; i++)
				  for (t = this[i]; t && t !== n; t = t.parentNode)
					if (
					  t.nodeType < 11 &&
					  (r
						? r.index(t) > -1
						: 1 === t.nodeType && Ie.find.matchesSelector(t, e))
					) {
					  o.push(t);
					  break;
					}
			  return this.pushStack(o.length > 1 ? Ie.uniqueSort(o) : o);
			},
			index: function (e) {
			  return e
				? "string" == typeof e
				  ? he.call(Ie(e), this[0])
				  : he.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
			},
			add: function (e, n) {
			  return this.pushStack(
				Ie.uniqueSort(Ie.merge(this.get(), Ie(e, n)))
			  );
			},
			addBack: function (e) {
			  return this.add(
				null == e ? this.prevObject : this.prevObject.filter(e)
			  );
			},
		  }),
			Ie.each(
			  {
				parent: function (e) {
				  var n = e.parentNode;
				  return n && 11 !== n.nodeType ? n : null;
				},
				parents: function (e) {
				  return _e(e, "parentNode");
				},
				parentsUntil: function (e, n, t) {
				  return _e(e, "parentNode", t);
				},
				next: function (e) {
				  return u(e, "nextSibling");
				},
				prev: function (e) {
				  return u(e, "previousSibling");
				},
				nextAll: function (e) {
				  return _e(e, "nextSibling");
				},
				prevAll: function (e) {
				  return _e(e, "previousSibling");
				},
				nextUntil: function (e, n, t) {
				  return _e(e, "nextSibling", t);
				},
				prevUntil: function (e, n, t) {
				  return _e(e, "previousSibling", t);
				},
				siblings: function (e) {
				  return Ee((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
				  return Ee(e.firstChild);
				},
				contents: function (e) {
				  return null != e.contentDocument && de(e.contentDocument)
					? e.contentDocument
					: (c(e, "template") && (e = e.content || e),
					  Ie.merge([], e.childNodes));
				},
			  },
			  function (e, n) {
				Ie.fn[e] = function (t, i) {
				  var l = Ie.map(this, n, t);
				  return (
					"Until" !== e.slice(-5) && (i = t),
					i && "string" == typeof i && (l = Ie.filter(i, l)),
					this.length > 1 &&
					  (Le[e] || Ie.uniqueSort(l), je.test(e) && l.reverse()),
					this.pushStack(l)
				  );
				};
			  }
			);
		  var ze = /[^\x20\t\r\n\f]+/g;
		  (Ie.Callbacks = function (e) {
			e = "string" == typeof e ? d(e) : Ie.extend({}, e);
			var n,
			  t,
			  i,
			  l,
			  o = [],
			  r = [],
			  s = -1,
			  c = function () {
				for (l = l || e.once, i = n = !0; r.length; s = -1)
				  for (t = r.shift(); ++s < o.length; )
					o[s].apply(t[0], t[1]) === !1 &&
					  e.stopOnFalse &&
					  ((s = o.length), (t = !1));
				e.memory || (t = !1), (n = !1), l && (o = t ? [] : "");
			  },
			  m = {
				add: function () {
				  return (
					o &&
					  (t && !n && ((s = o.length - 1), r.push(t)),
					  (function n(t) {
						Ie.each(t, function (t, i) {
						  Se(i)
							? (e.unique && m.has(i)) || o.push(i)
							: i && i.length && "string" !== a(i) && n(i);
						});
					  })(arguments),
					  t && !n && c()),
					this
				  );
				},
				remove: function () {
				  return (
					Ie.each(arguments, function (e, n) {
					  for (var t; (t = Ie.inArray(n, o, t)) > -1; )
						o.splice(t, 1), t <= s && s--;
					}),
					this
				  );
				},
				has: function (e) {
				  return e ? Ie.inArray(e, o) > -1 : o.length > 0;
				},
				empty: function () {
				  return o && (o = []), this;
				},
				disable: function () {
				  return (l = r = []), (o = t = ""), this;
				},
				disabled: function () {
				  return !o;
				},
				lock: function () {
				  return (l = r = []), t || n || (o = t = ""), this;
				},
				locked: function () {
				  return !!l;
				},
				fireWith: function (e, t) {
				  return (
					l ||
					  ((t = t || []),
					  (t = [e, t.slice ? t.slice() : t]),
					  r.push(t),
					  n || c()),
					this
				  );
				},
				fire: function () {
				  return m.fireWith(this, arguments), this;
				},
				fired: function () {
				  return !!i;
				},
			  };
			return m;
		  }),
			Ie.extend({
			  Deferred: function (e) {
				var n = [
					[
					  "notify",
					  "progress",
					  Ie.Callbacks("memory"),
					  Ie.Callbacks("memory"),
					  2,
					],
					[
					  "resolve",
					  "done",
					  Ie.Callbacks("once memory"),
					  Ie.Callbacks("once memory"),
					  0,
					  "resolved",
					],
					[
					  "reject",
					  "fail",
					  Ie.Callbacks("once memory"),
					  Ie.Callbacks("once memory"),
					  1,
					  "rejected",
					],
				  ],
				  i = "pending",
				  l = {
					state: function () {
					  return i;
					},
					always: function () {
					  return o.done(arguments).fail(arguments), this;
					},
					catch: function (e) {
					  return l.then(null, e);
					},
					pipe: function () {
					  var e = arguments;
					  return Ie.Deferred(function (t) {
						Ie.each(n, function (n, i) {
						  var l = Se(e[i[4]]) && e[i[4]];
						  o[i[1]](function () {
							var e = l && l.apply(this, arguments);
							e && Se(e.promise)
							  ? e
								  .promise()
								  .progress(t.notify)
								  .done(t.resolve)
								  .fail(t.reject)
							  : t[i[0] + "With"](this, l ? [e] : arguments);
						  });
						}),
						  (e = null);
					  }).promise();
					},
					then: function (e, i, l) {
					  function o(e, n, i, l) {
						return function () {
						  var a = this,
							s = arguments,
							c = function () {
							  var t, c;
							  if (!(e < r)) {
								if (((t = i.apply(a, s)), t === n.promise()))
								  throw new TypeError("Thenable self-resolution");
								(c =
								  t &&
								  ("object" == typeof t ||
									"function" == typeof t) &&
								  t.then),
								  Se(c)
									? l
									  ? c.call(t, o(r, n, f, l), o(r, n, p, l))
									  : (r++,
										c.call(
										  t,
										  o(r, n, f, l),
										  o(r, n, p, l),
										  o(r, n, f, n.notifyWith)
										))
									: (i !== f && ((a = void 0), (s = [t])),
									  (l || n.resolveWith)(a, s));
							  }
							},
							m = l
							  ? c
							  : function () {
								  try {
									c();
								  } catch (t) {
									Ie.Deferred.exceptionHook &&
									  Ie.Deferred.exceptionHook(t, m.stackTrace),
									  e + 1 >= r &&
										(i !== p && ((a = void 0), (s = [t])),
										n.rejectWith(a, s));
								  }
								};
						  e
							? m()
							: (Ie.Deferred.getStackHook &&
								(m.stackTrace = Ie.Deferred.getStackHook()),
							  t.setTimeout(m));
						};
					  }
					  var r = 0;
					  return Ie.Deferred(function (t) {
						n[0][3].add(o(0, t, Se(l) ? l : f, t.notifyWith)),
						  n[1][3].add(o(0, t, Se(e) ? e : f)),
						  n[2][3].add(o(0, t, Se(i) ? i : p));
					  }).promise();
					},
					promise: function (e) {
					  return null != e ? Ie.extend(e, l) : l;
					},
				  },
				  o = {};
				return (
				  Ie.each(n, function (e, t) {
					var r = t[2],
					  a = t[5];
					(l[t[1]] = r.add),
					  a &&
						r.add(
						  function () {
							i = a;
						  },
						  n[3 - e][2].disable,
						  n[3 - e][3].disable,
						  n[0][2].lock,
						  n[0][3].lock
						),
					  r.add(t[3].fire),
					  (o[t[0]] = function () {
						return (
						  o[t[0] + "With"](this === o ? void 0 : this, arguments),
						  this
						);
					  }),
					  (o[t[0] + "With"] = r.fireWith);
				  }),
				  l.promise(o),
				  e && e.call(o, o),
				  o
				);
			  },
			  when: function (e) {
				var n = arguments.length,
				  t = n,
				  i = Array(t),
				  l = fe.call(arguments),
				  o = Ie.Deferred(),
				  r = function (e) {
					return function (t) {
					  (i[e] = this),
						(l[e] = arguments.length > 1 ? fe.call(arguments) : t),
						--n || o.resolveWith(i, l);
					};
				  };
				if (
				  n <= 1 &&
				  (g(e, o.done(r(t)).resolve, o.reject, !n),
				  "pending" === o.state() || Se(l[t] && l[t].then))
				)
				  return o.then();
				for (; t--; ) g(l[t], r(t), o.reject);
				return o.promise();
			  },
			});
		  var Ue = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		  (Ie.Deferred.exceptionHook = function (e, n) {
			t.console &&
			  t.console.warn &&
			  e &&
			  Ue.test(e.name) &&
			  t.console.warn(
				"jQuery.Deferred exception: " + e.message,
				e.stack,
				n
			  );
		  }),
			(Ie.readyException = function (e) {
			  t.setTimeout(function () {
				throw e;
			  });
			});
		  var Me = Ie.Deferred();
		  (Ie.fn.ready = function (e) {
			return (
			  Me.then(e).catch(function (e) {
				Ie.readyException(e);
			  }),
			  this
			);
		  }),
			Ie.extend({
			  isReady: !1,
			  readyWait: 1,
			  ready: function (e) {
				(e === !0 ? --Ie.readyWait : Ie.isReady) ||
				  ((Ie.isReady = !0),
				  (e !== !0 && --Ie.readyWait > 0) || Me.resolveWith($e, [Ie]));
			  },
			}),
			(Ie.ready.then = Me.then),
			"complete" === $e.readyState ||
			("loading" !== $e.readyState && !$e.documentElement.doScroll)
			  ? t.setTimeout(Ie.ready)
			  : ($e.addEventListener("DOMContentLoaded", h),
				t.addEventListener("load", h));
		  var Be = function (e, n, t, i, l, o, r) {
			  var s = 0,
				c = e.length,
				m = null == t;
			  if ("object" === a(t)) {
				l = !0;
				for (s in t) Be(e, n, s, t[s], !0, o, r);
			  } else if (
				void 0 !== i &&
				((l = !0),
				Se(i) || (r = !0),
				m &&
				  (r
					? (n.call(e, i), (n = null))
					: ((m = n),
					  (n = function (e, n, t) {
						return m.call(Ie(e), t);
					  }))),
				n)
			  )
				for (; s < c; s++)
				  n(e[s], t, r ? i : i.call(e[s], s, n(e[s], t)));
			  return l ? e : m ? n.call(e) : c ? n(e[0], t) : o;
			},
			qe = /^-ms-/,
			Ve = /-([a-z])/g,
			He = function (e) {
			  return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
			};
		  (y.uid = 1),
			(y.prototype = {
			  cache: function (e) {
				var n = e[this.expando];
				return (
				  n ||
					((n = {}),
					He(e) &&
					  (e.nodeType
						? (e[this.expando] = n)
						: Object.defineProperty(e, this.expando, {
							value: n,
							configurable: !0,
						  }))),
				  n
				);
			  },
			  set: function (e, n, t) {
				var i,
				  l = this.cache(e);
				if ("string" == typeof n) l[x(n)] = t;
				else for (i in n) l[x(i)] = n[i];
				return l;
			  },
			  get: function (e, n) {
				return void 0 === n
				  ? this.cache(e)
				  : e[this.expando] && e[this.expando][x(n)];
			  },
			  access: function (e, n, t) {
				return void 0 === n || (n && "string" == typeof n && void 0 === t)
				  ? this.get(e, n)
				  : (this.set(e, n, t), void 0 !== t ? t : n);
			  },
			  remove: function (e, n) {
				var t,
				  i = e[this.expando];
				if (void 0 !== i) {
				  if (void 0 !== n) {
					Array.isArray(n)
					  ? (n = n.map(x))
					  : ((n = x(n)), (n = n in i ? [n] : n.match(ze) || [])),
					  (t = n.length);
					for (; t--; ) delete i[n[t]];
				  }
				  (void 0 === n || Ie.isEmptyObject(i)) &&
					(e.nodeType
					  ? (e[this.expando] = void 0)
					  : delete e[this.expando]);
				}
			  },
			  hasData: function (e) {
				var n = e[this.expando];
				return void 0 !== n && !Ie.isEmptyObject(n);
			  },
			});
		  var Ye = new y(),
			We = new y(),
			Ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Je = /[A-Z]/g;
		  Ie.extend({
			hasData: function (e) {
			  return We.hasData(e) || Ye.hasData(e);
			},
			data: function (e, n, t) {
			  return We.access(e, n, t);
			},
			removeData: function (e, n) {
			  We.remove(e, n);
			},
			_data: function (e, n, t) {
			  return Ye.access(e, n, t);
			},
			_removeData: function (e, n) {
			  Ye.remove(e, n);
			},
		  }),
			Ie.fn.extend({
			  data: function (e, n) {
				var t,
				  i,
				  l,
				  o = this[0],
				  r = o && o.attributes;
				if (void 0 === e) {
				  if (
					this.length &&
					((l = We.get(o)),
					1 === o.nodeType && !Ye.get(o, "hasDataAttrs"))
				  ) {
					for (t = r.length; t--; )
					  r[t] &&
						((i = r[t].name),
						0 === i.indexOf("data-") &&
						  ((i = x(i.slice(5))), w(o, i, l[i])));
					Ye.set(o, "hasDataAttrs", !0);
				  }
				  return l;
				}
				return "object" == typeof e
				  ? this.each(function () {
					  We.set(this, e);
					})
				  : Be(
					  this,
					  function (n) {
						var t;
						if (o && void 0 === n) {
						  if (((t = We.get(o, e)), void 0 !== t)) return t;
						  if (((t = w(o, e)), void 0 !== t)) return t;
						} else
						  this.each(function () {
							We.set(this, e, n);
						  });
					  },
					  null,
					  n,
					  arguments.length > 1,
					  null,
					  !0
					);
			  },
			  removeData: function (e) {
				return this.each(function () {
				  We.remove(this, e);
				});
			  },
			}),
			Ie.extend({
			  queue: function (e, n, t) {
				var i;
				if (e)
				  return (
					(n = (n || "fx") + "queue"),
					(i = Ye.get(e, n)),
					t &&
					  (!i || Array.isArray(t)
						? (i = Ye.access(e, n, Ie.makeArray(t)))
						: i.push(t)),
					i || []
				  );
			  },
			  dequeue: function (e, n) {
				n = n || "fx";
				var t = Ie.queue(e, n),
				  i = t.length,
				  l = t.shift(),
				  o = Ie._queueHooks(e, n),
				  r = function () {
					Ie.dequeue(e, n);
				  };
				"inprogress" === l && ((l = t.shift()), i--),
				  l &&
					("fx" === n && t.unshift("inprogress"),
					delete o.stop,
					l.call(e, r, o)),
				  !i && o && o.empty.fire();
			  },
			  _queueHooks: function (e, n) {
				var t = n + "queueHooks";
				return (
				  Ye.get(e, t) ||
				  Ye.access(e, t, {
					empty: Ie.Callbacks("once memory").add(function () {
					  Ye.remove(e, [n + "queue", t]);
					}),
				  })
				);
			  },
			}),
			Ie.fn.extend({
			  queue: function (e, n) {
				var t = 2;
				return (
				  "string" != typeof e && ((n = e), (e = "fx"), t--),
				  arguments.length < t
					? Ie.queue(this[0], e)
					: void 0 === n
					? this
					: this.each(function () {
						var t = Ie.queue(this, e, n);
						Ie._queueHooks(this, e),
						  "fx" === e &&
							"inprogress" !== t[0] &&
							Ie.dequeue(this, e);
					  })
				);
			  },
			  dequeue: function (e) {
				return this.each(function () {
				  Ie.dequeue(this, e);
				});
			  },
			  clearQueue: function (e) {
				return this.queue(e || "fx", []);
			  },
			  promise: function (e, n) {
				var t,
				  i = 1,
				  l = Ie.Deferred(),
				  o = this,
				  r = this.length,
				  a = function () {
					--i || l.resolveWith(o, [o]);
				  };
				for (
				  "string" != typeof e && ((n = e), (e = void 0)), e = e || "fx";
				  r--;
  
				)
				  (t = Ye.get(o[r], e + "queueHooks")),
					t && t.empty && (i++, t.empty.add(a));
				return a(), l.promise(n);
			  },
			});
		  var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ze = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
			Ke = ["Top", "Right", "Bottom", "Left"],
			Qe = $e.documentElement,
			en = function (e) {
			  return Ie.contains(e.ownerDocument, e);
			},
			nn = { composed: !0 };
		  Qe.getRootNode &&
			(en = function (e) {
			  return (
				Ie.contains(e.ownerDocument, e) ||
				e.getRootNode(nn) === e.ownerDocument
			  );
			});
		  var tn = function (e, n) {
			  return (
				(e = n || e),
				"none" === e.style.display ||
				  ("" === e.style.display &&
					en(e) &&
					"none" === Ie.css(e, "display"))
			  );
			},
			ln = {};
		  Ie.fn.extend({
			show: function () {
			  return C(this, !0);
			},
			hide: function () {
			  return C(this);
			},
			toggle: function (e) {
			  return "boolean" == typeof e
				? e
				  ? this.show()
				  : this.hide()
				: this.each(function () {
					tn(this) ? Ie(this).show() : Ie(this).hide();
				  });
			},
		  });
		  var on = /^(?:checkbox|radio)$/i,
			rn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			an = /^$|^module$|\/(?:java|ecma)script/i;
		  !(function () {
			var e = $e.createDocumentFragment(),
			  n = e.appendChild($e.createElement("div")),
			  t = $e.createElement("input");
			t.setAttribute("type", "radio"),
			  t.setAttribute("checked", "checked"),
			  t.setAttribute("name", "t"),
			  n.appendChild(t),
			  (ke.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
			  (n.innerHTML = "<textarea>x</textarea>"),
			  (ke.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue),
			  (n.innerHTML = "<option></option>"),
			  (ke.option = !!n.lastChild);
		  })();
		  var sn = {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""],
		  };
		  (sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead),
			(sn.th = sn.td),
			ke.option ||
			  (sn.optgroup = sn.option =
				[1, "<select multiple='multiple'>", "</select>"]);
		  var cn = /<|&#?\w+;/,
			mn = /^([^.]*)(?:\.(.+)|)/;
		  (Ie.event = {
			global: {},
			add: function (e, n, t, i, l) {
			  var o,
				r,
				a,
				s,
				c,
				m,
				u,
				d,
				f,
				p,
				g,
				h = Ye.get(e);
			  if (He(e))
				for (
				  t.handler && ((o = t), (t = o.handler), (l = o.selector)),
					l && Ie.find.matchesSelector(Qe, l),
					t.guid || (t.guid = Ie.guid++),
					(s = h.events) || (s = h.events = Object.create(null)),
					(r = h.handle) ||
					  (r = h.handle =
						function (n) {
						  return "undefined" != typeof Ie &&
							Ie.event.triggered !== n.type
							? Ie.event.dispatch.apply(e, arguments)
							: void 0;
						}),
					n = (n || "").match(ze) || [""],
					c = n.length;
				  c--;
  
				)
				  (a = mn.exec(n[c]) || []),
					(f = g = a[1]),
					(p = (a[2] || "").split(".").sort()),
					f &&
					  ((u = Ie.event.special[f] || {}),
					  (f = (l ? u.delegateType : u.bindType) || f),
					  (u = Ie.event.special[f] || {}),
					  (m = Ie.extend(
						{
						  type: f,
						  origType: g,
						  data: i,
						  handler: t,
						  guid: t.guid,
						  selector: l,
						  needsContext: l && Ie.expr.match.needsContext.test(l),
						  namespace: p.join("."),
						},
						o
					  )),
					  (d = s[f]) ||
						((d = s[f] = []),
						(d.delegateCount = 0),
						(u.setup && u.setup.call(e, i, p, r) !== !1) ||
						  (e.addEventListener && e.addEventListener(f, r))),
					  u.add &&
						(u.add.call(e, m),
						m.handler.guid || (m.handler.guid = t.guid)),
					  l ? d.splice(d.delegateCount++, 0, m) : d.push(m),
					  (Ie.event.global[f] = !0));
			},
			remove: function (e, n, t, i, l) {
			  var o,
				r,
				a,
				s,
				c,
				m,
				u,
				d,
				f,
				p,
				g,
				h = Ye.hasData(e) && Ye.get(e);
			  if (h && (s = h.events)) {
				for (n = (n || "").match(ze) || [""], c = n.length; c--; )
				  if (
					((a = mn.exec(n[c]) || []),
					(f = g = a[1]),
					(p = (a[2] || "").split(".").sort()),
					f)
				  ) {
					for (
					  u = Ie.event.special[f] || {},
						f = (i ? u.delegateType : u.bindType) || f,
						d = s[f] || [],
						a =
						  a[2] &&
						  new RegExp(
							"(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
						  ),
						r = o = d.length;
					  o--;
  
					)
					  (m = d[o]),
						(!l && g !== m.origType) ||
						  (t && t.guid !== m.guid) ||
						  (a && !a.test(m.namespace)) ||
						  (i &&
							i !== m.selector &&
							("**" !== i || !m.selector)) ||
						  (d.splice(o, 1),
						  m.selector && d.delegateCount--,
						  u.remove && u.remove.call(e, m));
					r &&
					  !d.length &&
					  ((u.teardown && u.teardown.call(e, p, h.handle) !== !1) ||
						Ie.removeEvent(e, f, h.handle),
					  delete s[f]);
				  } else for (f in s) Ie.event.remove(e, f + n[c], t, i, !0);
				Ie.isEmptyObject(s) && Ye.remove(e, "handle events");
			  }
			},
			dispatch: function (e) {
			  var n,
				t,
				i,
				l,
				o,
				r,
				a = new Array(arguments.length),
				s = Ie.event.fix(e),
				c = (Ye.get(this, "events") || Object.create(null))[s.type] || [],
				m = Ie.event.special[s.type] || {};
			  for (a[0] = s, n = 1; n < arguments.length; n++)
				a[n] = arguments[n];
			  if (
				((s.delegateTarget = this),
				!m.preDispatch || m.preDispatch.call(this, s) !== !1)
			  ) {
				for (
				  r = Ie.event.handlers.call(this, s, c), n = 0;
				  (l = r[n++]) && !s.isPropagationStopped();
  
				)
				  for (
					s.currentTarget = l.elem, t = 0;
					(o = l.handlers[t++]) && !s.isImmediatePropagationStopped();
  
				  )
					(s.rnamespace &&
					  o.namespace !== !1 &&
					  !s.rnamespace.test(o.namespace)) ||
					  ((s.handleObj = o),
					  (s.data = o.data),
					  (i = (
						(Ie.event.special[o.origType] || {}).handle || o.handler
					  ).apply(l.elem, a)),
					  void 0 !== i &&
						(s.result = i) === !1 &&
						(s.preventDefault(), s.stopPropagation()));
				return m.postDispatch && m.postDispatch.call(this, s), s.result;
			  }
			},
			handlers: function (e, n) {
			  var t,
				i,
				l,
				o,
				r,
				a = [],
				s = n.delegateCount,
				c = e.target;
			  if (s && c.nodeType && !("click" === e.type && e.button >= 1))
				for (; c !== this; c = c.parentNode || this)
				  if (
					1 === c.nodeType &&
					("click" !== e.type || c.disabled !== !0)
				  ) {
					for (o = [], r = {}, t = 0; t < s; t++)
					  (i = n[t]),
						(l = i.selector + " "),
						void 0 === r[l] &&
						  (r[l] = i.needsContext
							? Ie(l, this).index(c) > -1
							: Ie.find(l, this, null, [c]).length),
						r[l] && o.push(i);
					o.length && a.push({ elem: c, handlers: o });
				  }
			  return (
				(c = this),
				s < n.length && a.push({ elem: c, handlers: n.slice(s) }),
				a
			  );
			},
			addProp: function (e, n) {
			  Object.defineProperty(Ie.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: Se(n)
				  ? function () {
					  if (this.originalEvent) return n(this.originalEvent);
					}
				  : function () {
					  if (this.originalEvent) return this.originalEvent[e];
					},
				set: function (n) {
				  Object.defineProperty(this, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n,
				  });
				},
			  });
			},
			fix: function (e) {
			  return e[Ie.expando] ? e : new Ie.Event(e);
			},
			special: {
			  load: { noBubble: !0 },
			  click: {
				setup: function (e) {
				  var n = this || e;
				  return (
					on.test(n.type) &&
					  n.click &&
					  c(n, "input") &&
					  T(n, "click", I),
					!1
				  );
				},
				trigger: function (e) {
				  var n = this || e;
				  return (
					on.test(n.type) && n.click && c(n, "input") && T(n, "click"),
					!0
				  );
				},
				_default: function (e) {
				  var n = e.target;
				  return (
					(on.test(n.type) &&
					  n.click &&
					  c(n, "input") &&
					  Ye.get(n, "click")) ||
					c(n, "a")
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
			(Ie.removeEvent = function (e, n, t) {
			  e.removeEventListener && e.removeEventListener(n, t);
			}),
			(Ie.Event = function (e, n) {
			  return this instanceof Ie.Event
				? (e && e.type
					? ((this.originalEvent = e),
					  (this.type = e.type),
					  (this.isDefaultPrevented =
						e.defaultPrevented ||
						(void 0 === e.defaultPrevented && e.returnValue === !1)
						  ? I
						  : O),
					  (this.target =
						e.target && 3 === e.target.nodeType
						  ? e.target.parentNode
						  : e.target),
					  (this.currentTarget = e.currentTarget),
					  (this.relatedTarget = e.relatedTarget))
					: (this.type = e),
				  n && Ie.extend(this, n),
				  (this.timeStamp = (e && e.timeStamp) || Date.now()),
				  void (this[Ie.expando] = !0))
				: new Ie.Event(e, n);
			}),
			(Ie.Event.prototype = {
			  constructor: Ie.Event,
			  isDefaultPrevented: O,
			  isPropagationStopped: O,
			  isImmediatePropagationStopped: O,
			  isSimulated: !1,
			  preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = I),
				  e && !this.isSimulated && e.preventDefault();
			  },
			  stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = I),
				  e && !this.isSimulated && e.stopPropagation();
			  },
			  stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = I),
				  e && !this.isSimulated && e.stopImmediatePropagation(),
				  this.stopPropagation();
			  },
			}),
			Ie.each(
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
			  Ie.event.addProp
			),
			Ie.each({ focus: "focusin", blur: "focusout" }, function (e, n) {
			  Ie.event.special[e] = {
				setup: function () {
				  return T(this, e, _), !1;
				},
				trigger: function () {
				  return T(this, e), !0;
				},
				_default: function () {
				  return !0;
				},
				delegateType: n,
			  };
			}),
			Ie.each(
			  {
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout",
			  },
			  function (e, n) {
				Ie.event.special[e] = {
				  delegateType: n,
				  bindType: n,
				  handle: function (e) {
					var t,
					  i = this,
					  l = e.relatedTarget,
					  o = e.handleObj;
					return (
					  (l && (l === i || Ie.contains(i, l))) ||
						((e.type = o.origType),
						(t = o.handler.apply(this, arguments)),
						(e.type = n)),
					  t
					);
				  },
				};
			  }
			),
			Ie.fn.extend({
			  on: function (e, n, t, i) {
				return F(this, e, n, t, i);
			  },
			  one: function (e, n, t, i) {
				return F(this, e, n, t, i, 1);
			  },
			  off: function (e, n, t) {
				var i, l;
				if (e && e.preventDefault && e.handleObj)
				  return (
					(i = e.handleObj),
					Ie(e.delegateTarget).off(
					  i.namespace ? i.origType + "." + i.namespace : i.origType,
					  i.selector,
					  i.handler
					),
					this
				  );
				if ("object" == typeof e) {
				  for (l in e) this.off(l, n, e[l]);
				  return this;
				}
				return (
				  (n !== !1 && "function" != typeof n) || ((t = n), (n = void 0)),
				  t === !1 && (t = O),
				  this.each(function () {
					Ie.event.remove(this, e, t, n);
				  })
				);
			  },
			});
		  var un = /<script|<style|<link/i,
			dn = /checked\s*(?:[^=]|=\s*.checked.)/i,
			fn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		  Ie.extend({
			htmlPrefilter: function (e) {
			  return e;
			},
			clone: function (e, n, t) {
			  var i,
				l,
				o,
				r,
				a = e.cloneNode(!0),
				s = en(e);
			  if (
				!(
				  ke.noCloneChecked ||
				  (1 !== e.nodeType && 11 !== e.nodeType) ||
				  Ie.isXMLDoc(e)
				)
			  )
				for (r = $(a), o = $(e), i = 0, l = o.length; i < l; i++)
				  L(o[i], r[i]);
			  if (n)
				if (t)
				  for (
					o = o || $(e), r = r || $(a), i = 0, l = o.length;
					i < l;
					i++
				  )
					j(o[i], r[i]);
				else j(e, a);
			  return (
				(r = $(a, "script")),
				r.length > 0 && D(r, !s && $(e, "script")),
				a
			  );
			},
			cleanData: function (e) {
			  for (
				var n, t, i, l = Ie.event.special, o = 0;
				void 0 !== (t = e[o]);
				o++
			  )
				if (He(t)) {
				  if ((n = t[Ye.expando])) {
					if (n.events)
					  for (i in n.events)
						l[i]
						  ? Ie.event.remove(t, i)
						  : Ie.removeEvent(t, i, n.handle);
					t[Ye.expando] = void 0;
				  }
				  t[We.expando] && (t[We.expando] = void 0);
				}
			},
		  }),
			Ie.fn.extend({
			  detach: function (e) {
				return U(this, e, !0);
			  },
			  remove: function (e) {
				return U(this, e);
			  },
			  text: function (e) {
				return Be(
				  this,
				  function (e) {
					return void 0 === e
					  ? Ie.text(this)
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
				return z(this, arguments, function (e) {
				  if (
					1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType
				  ) {
					var n = R(this, e);
					n.appendChild(e);
				  }
				});
			  },
			  prepend: function () {
				return z(this, arguments, function (e) {
				  if (
					1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType
				  ) {
					var n = R(this, e);
					n.insertBefore(e, n.firstChild);
				  }
				});
			  },
			  before: function () {
				return z(this, arguments, function (e) {
				  this.parentNode && this.parentNode.insertBefore(e, this);
				});
			  },
			  after: function () {
				return z(this, arguments, function (e) {
				  this.parentNode &&
					this.parentNode.insertBefore(e, this.nextSibling);
				});
			  },
			  empty: function () {
				for (var e, n = 0; null != (e = this[n]); n++)
				  1 === e.nodeType &&
					(Ie.cleanData($(e, !1)), (e.textContent = ""));
				return this;
			  },
			  clone: function (e, n) {
				return (
				  (e = null != e && e),
				  (n = null == n ? e : n),
				  this.map(function () {
					return Ie.clone(this, e, n);
				  })
				);
			  },
			  html: function (e) {
				return Be(
				  this,
				  function (e) {
					var n = this[0] || {},
					  t = 0,
					  i = this.length;
					if (void 0 === e && 1 === n.nodeType) return n.innerHTML;
					if (
					  "string" == typeof e &&
					  !un.test(e) &&
					  !sn[(rn.exec(e) || ["", ""])[1].toLowerCase()]
					) {
					  e = Ie.htmlPrefilter(e);
					  try {
						for (; t < i; t++)
						  (n = this[t] || {}),
							1 === n.nodeType &&
							  (Ie.cleanData($(n, !1)), (n.innerHTML = e));
						n = 0;
					  } catch (e) {}
					}
					n && this.empty().append(e);
				  },
				  null,
				  e,
				  arguments.length
				);
			  },
			  replaceWith: function () {
				var e = [];
				return z(
				  this,
				  arguments,
				  function (n) {
					var t = this.parentNode;
					Ie.inArray(this, e) < 0 &&
					  (Ie.cleanData($(this)), t && t.replaceChild(n, this));
				  },
				  e
				);
			  },
			}),
			Ie.each(
			  {
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			  },
			  function (e, n) {
				Ie.fn[e] = function (e) {
				  for (
					var t, i = [], l = Ie(e), o = l.length - 1, r = 0;
					r <= o;
					r++
				  )
					(t = r === o ? this : this.clone(!0)),
					  Ie(l[r])[n](t),
					  ge.apply(i, t.get());
				  return this.pushStack(i);
				};
			  }
			);
		  var pn = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
			gn = function (e) {
			  var n = e.ownerDocument.defaultView;
			  return (n && n.opener) || (n = t), n.getComputedStyle(e);
			},
			hn = function (e, n, t) {
			  var i,
				l,
				o = {};
			  for (l in n) (o[l] = e.style[l]), (e.style[l] = n[l]);
			  i = t.call(e);
			  for (l in n) e.style[l] = o[l];
			  return i;
			},
			bn = new RegExp(Ke.join("|"), "i");
		  !(function () {
			function e() {
			  if (m) {
				(c.style.cssText =
				  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
				  (m.style.cssText =
					"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
				  Qe.appendChild(c).appendChild(m);
				var e = t.getComputedStyle(m);
				(i = "1%" !== e.top),
				  (s = 12 === n(e.marginLeft)),
				  (m.style.right = "60%"),
				  (r = 36 === n(e.right)),
				  (l = 36 === n(e.width)),
				  (m.style.position = "absolute"),
				  (o = 12 === n(m.offsetWidth / 3)),
				  Qe.removeChild(c),
				  (m = null);
			  }
			}
			function n(e) {
			  return Math.round(parseFloat(e));
			}
			var i,
			  l,
			  o,
			  r,
			  a,
			  s,
			  c = $e.createElement("div"),
			  m = $e.createElement("div");
			m.style &&
			  ((m.style.backgroundClip = "content-box"),
			  (m.cloneNode(!0).style.backgroundClip = ""),
			  (ke.clearCloneStyle = "content-box" === m.style.backgroundClip),
			  Ie.extend(ke, {
				boxSizingReliable: function () {
				  return e(), l;
				},
				pixelBoxStyles: function () {
				  return e(), r;
				},
				pixelPosition: function () {
				  return e(), i;
				},
				reliableMarginLeft: function () {
				  return e(), s;
				},
				scrollboxSize: function () {
				  return e(), o;
				},
				reliableTrDimensions: function () {
				  var e, n, i, l;
				  return (
					null == a &&
					  ((e = $e.createElement("table")),
					  (n = $e.createElement("tr")),
					  (i = $e.createElement("div")),
					  (e.style.cssText =
						"position:absolute;left:-11111px;border-collapse:separate"),
					  (n.style.cssText = "border:1px solid"),
					  (n.style.height = "1px"),
					  (i.style.height = "9px"),
					  (i.style.display = "block"),
					  Qe.appendChild(e).appendChild(n).appendChild(i),
					  (l = t.getComputedStyle(n)),
					  (a =
						parseInt(l.height, 10) +
						  parseInt(l.borderTopWidth, 10) +
						  parseInt(l.borderBottomWidth, 10) ===
						n.offsetHeight),
					  Qe.removeChild(e)),
					a
				  );
				},
			  }));
		  })();
		  var xn = ["Webkit", "Moz", "ms"],
			yn = $e.createElement("div").style,
			vn = {},
			wn = /^(none|table(?!-c[ea]).+)/,
			kn = /^--/,
			Sn = { position: "absolute", visibility: "hidden", display: "block" },
			Cn = { letterSpacing: "0", fontWeight: "400" };
		  Ie.extend({
			cssHooks: {
			  opacity: {
				get: function (e, n) {
				  if (n) {
					var t = M(e, "opacity");
					return "" === t ? "1" : t;
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
			style: function (e, n, t, i) {
			  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var l,
				  o,
				  r,
				  a = x(n),
				  s = kn.test(n),
				  c = e.style;
				return (
				  s || (n = V(a)),
				  (r = Ie.cssHooks[n] || Ie.cssHooks[a]),
				  void 0 === t
					? r && "get" in r && void 0 !== (l = r.get(e, !1, i))
					  ? l
					  : c[n]
					: ((o = typeof t),
					  "string" === o &&
						(l = Ze.exec(t)) &&
						l[1] &&
						((t = k(e, n, l)), (o = "number")),
					  null != t &&
						t === t &&
						("number" !== o ||
						  s ||
						  (t += (l && l[3]) || (Ie.cssNumber[a] ? "" : "px")),
						ke.clearCloneStyle ||
						  "" !== t ||
						  0 !== n.indexOf("background") ||
						  (c[n] = "inherit"),
						(r && "set" in r && void 0 === (t = r.set(e, t, i))) ||
						  (s ? c.setProperty(n, t) : (c[n] = t))),
					  void 0)
				);
			  }
			},
			css: function (e, n, t, i) {
			  var l,
				o,
				r,
				a = x(n),
				s = kn.test(n);
			  return (
				s || (n = V(a)),
				(r = Ie.cssHooks[n] || Ie.cssHooks[a]),
				r && "get" in r && (l = r.get(e, !0, t)),
				void 0 === l && (l = M(e, n, i)),
				"normal" === l && n in Cn && (l = Cn[n]),
				"" === t || t
				  ? ((o = parseFloat(l)), t === !0 || isFinite(o) ? o || 0 : l)
				  : l
			  );
			},
		  }),
			Ie.each(["height", "width"], function (e, n) {
			  Ie.cssHooks[n] = {
				get: function (e, t, i) {
				  if (t)
					return !wn.test(Ie.css(e, "display")) ||
					  (e.getClientRects().length &&
						e.getBoundingClientRect().width)
					  ? W(e, n, i)
					  : hn(e, Sn, function () {
						  return W(e, n, i);
						});
				},
				set: function (e, t, i) {
				  var l,
					o = gn(e),
					r = !ke.scrollboxSize() && "absolute" === o.position,
					a = r || i,
					s = a && "border-box" === Ie.css(e, "boxSizing", !1, o),
					c = i ? Y(e, n, i, s, o) : 0;
				  return (
					s &&
					  r &&
					  (c -= Math.ceil(
						e["offset" + n[0].toUpperCase() + n.slice(1)] -
						  parseFloat(o[n]) -
						  Y(e, n, "border", !1, o) -
						  0.5
					  )),
					c &&
					  (l = Ze.exec(t)) &&
					  "px" !== (l[3] || "px") &&
					  ((e.style[n] = t), (t = Ie.css(e, n))),
					H(e, t, c)
				  );
				},
			  };
			}),
			(Ie.cssHooks.marginLeft = B(ke.reliableMarginLeft, function (e, n) {
			  if (n)
				return (
				  (parseFloat(M(e, "marginLeft")) ||
					e.getBoundingClientRect().left -
					  hn(e, { marginLeft: 0 }, function () {
						return e.getBoundingClientRect().left;
					  })) + "px"
				);
			})),
			Ie.each(
			  { margin: "", padding: "", border: "Width" },
			  function (e, n) {
				(Ie.cssHooks[e + n] = {
				  expand: function (t) {
					for (
					  var i = 0,
						l = {},
						o = "string" == typeof t ? t.split(" ") : [t];
					  i < 4;
					  i++
					)
					  l[e + Ke[i] + n] = o[i] || o[i - 2] || o[0];
					return l;
				  },
				}),
				  "margin" !== e && (Ie.cssHooks[e + n].set = H);
			  }
			),
			Ie.fn.extend({
			  css: function (e, n) {
				return Be(
				  this,
				  function (e, n, t) {
					var i,
					  l,
					  o = {},
					  r = 0;
					if (Array.isArray(n)) {
					  for (i = gn(e), l = n.length; r < l; r++)
						o[n[r]] = Ie.css(e, n[r], !1, i);
					  return o;
					}
					return void 0 !== t ? Ie.style(e, n, t) : Ie.css(e, n);
				  },
				  e,
				  n,
				  arguments.length > 1
				);
			  },
			}),
			(Ie.Tween = G),
			(G.prototype = {
			  constructor: G,
			  init: function (e, n, t, i, l, o) {
				(this.elem = e),
				  (this.prop = t),
				  (this.easing = l || Ie.easing._default),
				  (this.options = n),
				  (this.start = this.now = this.cur()),
				  (this.end = i),
				  (this.unit = o || (Ie.cssNumber[t] ? "" : "px"));
			  },
			  cur: function () {
				var e = G.propHooks[this.prop];
				return e && e.get ? e.get(this) : G.propHooks._default.get(this);
			  },
			  run: function (e) {
				var n,
				  t = G.propHooks[this.prop];
				return (
				  this.options.duration
					? (this.pos = n =
						Ie.easing[this.easing](
						  e,
						  this.options.duration * e,
						  0,
						  1,
						  this.options.duration
						))
					: (this.pos = n = e),
				  (this.now = (this.end - this.start) * n + this.start),
				  this.options.step &&
					this.options.step.call(this.elem, this.now, this),
				  t && t.set ? t.set(this) : G.propHooks._default.set(this),
				  this
				);
			  },
			}),
			(G.prototype.init.prototype = G.prototype),
			(G.propHooks = {
			  _default: {
				get: function (e) {
				  var n;
				  return 1 !== e.elem.nodeType ||
					(null != e.elem[e.prop] && null == e.elem.style[e.prop])
					? e.elem[e.prop]
					: ((n = Ie.css(e.elem, e.prop, "")),
					  n && "auto" !== n ? n : 0);
				},
				set: function (e) {
				  Ie.fx.step[e.prop]
					? Ie.fx.step[e.prop](e)
					: 1 !== e.elem.nodeType ||
					  (!Ie.cssHooks[e.prop] && null == e.elem.style[V(e.prop)])
					? (e.elem[e.prop] = e.now)
					: Ie.style(e.elem, e.prop, e.now + e.unit);
				},
			  },
			}),
			(G.propHooks.scrollTop = G.propHooks.scrollLeft =
			  {
				set: function (e) {
				  e.elem.nodeType &&
					e.elem.parentNode &&
					(e.elem[e.prop] = e.now);
				},
			  }),
			(Ie.easing = {
			  linear: function (e) {
				return e;
			  },
			  swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			  },
			  _default: "swing",
			}),
			(Ie.fx = G.prototype.init),
			(Ie.fx.step = {});
		  var $n,
			Dn,
			An = /^(?:toggle|show|hide)$/,
			In = /queueHooks$/;
		  (Ie.Animation = Ie.extend(ne, {
			tweeners: {
			  "*": [
				function (e, n) {
				  var t = this.createTween(e, n);
				  return k(t.elem, e, Ze.exec(n), t), t;
				},
			  ],
			},
			tweener: function (e, n) {
			  Se(e) ? ((n = e), (e = ["*"])) : (e = e.match(ze));
			  for (var t, i = 0, l = e.length; i < l; i++)
				(t = e[i]),
				  (ne.tweeners[t] = ne.tweeners[t] || []),
				  ne.tweeners[t].unshift(n);
			},
			prefilters: [Q],
			prefilter: function (e, n) {
			  n ? ne.prefilters.unshift(e) : ne.prefilters.push(e);
			},
		  })),
			(Ie.speed = function (e, n, t) {
			  var i =
				e && "object" == typeof e
				  ? Ie.extend({}, e)
				  : {
					  complete: t || (!t && n) || (Se(e) && e),
					  duration: e,
					  easing: (t && n) || (n && !Se(n) && n),
					};
			  return (
				Ie.fx.off
				  ? (i.duration = 0)
				  : "number" != typeof i.duration &&
					(i.duration in Ie.fx.speeds
					  ? (i.duration = Ie.fx.speeds[i.duration])
					  : (i.duration = Ie.fx.speeds._default)),
				(null != i.queue && i.queue !== !0) || (i.queue = "fx"),
				(i.old = i.complete),
				(i.complete = function () {
				  Se(i.old) && i.old.call(this),
					i.queue && Ie.dequeue(this, i.queue);
				}),
				i
			  );
			}),
			Ie.fn.extend({
			  fadeTo: function (e, n, t, i) {
				return this.filter(tn)
				  .css("opacity", 0)
				  .show()
				  .end()
				  .animate({ opacity: n }, e, t, i);
			  },
			  animate: function (e, n, t, i) {
				var l = Ie.isEmptyObject(e),
				  o = Ie.speed(n, t, i),
				  r = function () {
					var n = ne(this, Ie.extend({}, e), o);
					(l || Ye.get(this, "finish")) && n.stop(!0);
				  };
				return (
				  (r.finish = r),
				  l || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
				);
			  },
			  stop: function (e, n, t) {
				var i = function (e) {
				  var n = e.stop;
				  delete e.stop, n(t);
				};
				return (
				  "string" != typeof e && ((t = n), (n = e), (e = void 0)),
				  n && this.queue(e || "fx", []),
				  this.each(function () {
					var n = !0,
					  l = null != e && e + "queueHooks",
					  o = Ie.timers,
					  r = Ye.get(this);
					if (l) r[l] && r[l].stop && i(r[l]);
					else for (l in r) r[l] && r[l].stop && In.test(l) && i(r[l]);
					for (l = o.length; l--; )
					  o[l].elem !== this ||
						(null != e && o[l].queue !== e) ||
						(o[l].anim.stop(t), (n = !1), o.splice(l, 1));
					(!n && t) || Ie.dequeue(this, e);
				  })
				);
			  },
			  finish: function (e) {
				return (
				  e !== !1 && (e = e || "fx"),
				  this.each(function () {
					var n,
					  t = Ye.get(this),
					  i = t[e + "queue"],
					  l = t[e + "queueHooks"],
					  o = Ie.timers,
					  r = i ? i.length : 0;
					for (
					  t.finish = !0,
						Ie.queue(this, e, []),
						l && l.stop && l.stop.call(this, !0),
						n = o.length;
					  n--;
  
					)
					  o[n].elem === this &&
						o[n].queue === e &&
						(o[n].anim.stop(!0), o.splice(n, 1));
					for (n = 0; n < r; n++)
					  i[n] && i[n].finish && i[n].finish.call(this);
					delete t.finish;
				  })
				);
			  },
			}),
			Ie.each(["toggle", "show", "hide"], function (e, n) {
			  var t = Ie.fn[n];
			  Ie.fn[n] = function (e, i, l) {
				return null == e || "boolean" == typeof e
				  ? t.apply(this, arguments)
				  : this.animate(Z(n, !0), e, i, l);
			  };
			}),
			Ie.each(
			  {
				slideDown: Z("show"),
				slideUp: Z("hide"),
				slideToggle: Z("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" },
			  },
			  function (e, n) {
				Ie.fn[e] = function (e, t, i) {
				  return this.animate(n, e, t, i);
				};
			  }
			),
			(Ie.timers = []),
			(Ie.fx.tick = function () {
			  var e,
				n = 0,
				t = Ie.timers;
			  for ($n = Date.now(); n < t.length; n++)
				(e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
			  t.length || Ie.fx.stop(), ($n = void 0);
			}),
			(Ie.fx.timer = function (e) {
			  Ie.timers.push(e), Ie.fx.start();
			}),
			(Ie.fx.interval = 13),
			(Ie.fx.start = function () {
			  Dn || ((Dn = !0), J());
			}),
			(Ie.fx.stop = function () {
			  Dn = null;
			}),
			(Ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
			(Ie.fn.delay = function (e, n) {
			  return (
				(e = Ie.fx ? Ie.fx.speeds[e] || e : e),
				(n = n || "fx"),
				this.queue(n, function (n, i) {
				  var l = t.setTimeout(n, e);
				  i.stop = function () {
					t.clearTimeout(l);
				  };
				})
			  );
			}),
			(function () {
			  var e = $e.createElement("input"),
				n = $e.createElement("select"),
				t = n.appendChild($e.createElement("option"));
			  (e.type = "checkbox"),
				(ke.checkOn = "" !== e.value),
				(ke.optSelected = t.selected),
				(e = $e.createElement("input")),
				(e.value = "t"),
				(e.type = "radio"),
				(ke.radioValue = "t" === e.value);
			})();
		  var On,
			_n = Ie.expr.attrHandle;
		  Ie.fn.extend({
			attr: function (e, n) {
			  return Be(this, Ie.attr, e, n, arguments.length > 1);
			},
			removeAttr: function (e) {
			  return this.each(function () {
				Ie.removeAttr(this, e);
			  });
			},
		  }),
			Ie.extend({
			  attr: function (e, n, t) {
				var i,
				  l,
				  o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
				  return "undefined" == typeof e.getAttribute
					? Ie.prop(e, n, t)
					: ((1 === o && Ie.isXMLDoc(e)) ||
						(l =
						  Ie.attrHooks[n.toLowerCase()] ||
						  (Ie.expr.match.bool.test(n) ? On : void 0)),
					  void 0 !== t
						? null === t
						  ? void Ie.removeAttr(e, n)
						  : l && "set" in l && void 0 !== (i = l.set(e, t, n))
						  ? i
						  : (e.setAttribute(n, t + ""), t)
						: l && "get" in l && null !== (i = l.get(e, n))
						? i
						: ((i = Ie.find.attr(e, n)), null == i ? void 0 : i));
			  },
			  attrHooks: {
				type: {
				  set: function (e, n) {
					if (!ke.radioValue && "radio" === n && c(e, "input")) {
					  var t = e.value;
					  return e.setAttribute("type", n), t && (e.value = t), n;
					}
				  },
				},
			  },
			  removeAttr: function (e, n) {
				var t,
				  i = 0,
				  l = n && n.match(ze);
				if (l && 1 === e.nodeType)
				  for (; (t = l[i++]); ) e.removeAttribute(t);
			  },
			}),
			(On = {
			  set: function (e, n, t) {
				return n === !1 ? Ie.removeAttr(e, t) : e.setAttribute(t, t), t;
			  },
			}),
			Ie.each(Ie.expr.match.bool.source.match(/\w+/g), function (e, n) {
			  var t = _n[n] || Ie.find.attr;
			  _n[n] = function (e, n, i) {
				var l,
				  o,
				  r = n.toLowerCase();
				return (
				  i ||
					((o = _n[r]),
					(_n[r] = l),
					(l = null != t(e, n, i) ? r : null),
					(_n[r] = o)),
				  l
				);
			  };
			});
		  var En = /^(?:input|select|textarea|button)$/i,
			Fn = /^(?:a|area)$/i;
		  Ie.fn.extend({
			prop: function (e, n) {
			  return Be(this, Ie.prop, e, n, arguments.length > 1);
			},
			removeProp: function (e) {
			  return this.each(function () {
				delete this[Ie.propFix[e] || e];
			  });
			},
		  }),
			Ie.extend({
			  prop: function (e, n, t) {
				var i,
				  l,
				  o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
				  return (
					(1 === o && Ie.isXMLDoc(e)) ||
					  ((n = Ie.propFix[n] || n), (l = Ie.propHooks[n])),
					void 0 !== t
					  ? l && "set" in l && void 0 !== (i = l.set(e, t, n))
						? i
						: (e[n] = t)
					  : l && "get" in l && null !== (i = l.get(e, n))
					  ? i
					  : e[n]
				  );
			  },
			  propHooks: {
				tabIndex: {
				  get: function (e) {
					var n = Ie.find.attr(e, "tabindex");
					return n
					  ? parseInt(n, 10)
					  : En.test(e.nodeName) || (Fn.test(e.nodeName) && e.href)
					  ? 0
					  : -1;
				  },
				},
			  },
			  propFix: { for: "htmlFor", class: "className" },
			}),
			ke.optSelected ||
			  (Ie.propHooks.selected = {
				get: function (e) {
				  var n = e.parentNode;
				  return n && n.parentNode && n.parentNode.selectedIndex, null;
				},
				set: function (e) {
				  var n = e.parentNode;
				  n &&
					(n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
				},
			  }),
			Ie.each(
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
				Ie.propFix[this.toLowerCase()] = this;
			  }
			),
			Ie.fn.extend({
			  addClass: function (e) {
				var n,
				  t,
				  i,
				  l,
				  o,
				  r,
				  a,
				  s = 0;
				if (Se(e))
				  return this.each(function (n) {
					Ie(this).addClass(e.call(this, n, ie(this)));
				  });
				if (((n = le(e)), n.length))
				  for (; (t = this[s++]); )
					if (
					  ((l = ie(t)), (i = 1 === t.nodeType && " " + te(l) + " "))
					) {
					  for (r = 0; (o = n[r++]); )
						i.indexOf(" " + o + " ") < 0 && (i += o + " ");
					  (a = te(i)), l !== a && t.setAttribute("class", a);
					}
				return this;
			  },
			  removeClass: function (e) {
				var n,
				  t,
				  i,
				  l,
				  o,
				  r,
				  a,
				  s = 0;
				if (Se(e))
				  return this.each(function (n) {
					Ie(this).removeClass(e.call(this, n, ie(this)));
				  });
				if (!arguments.length) return this.attr("class", "");
				if (((n = le(e)), n.length))
				  for (; (t = this[s++]); )
					if (
					  ((l = ie(t)), (i = 1 === t.nodeType && " " + te(l) + " "))
					) {
					  for (r = 0; (o = n[r++]); )
						for (; i.indexOf(" " + o + " ") > -1; )
						  i = i.replace(" " + o + " ", " ");
					  (a = te(i)), l !== a && t.setAttribute("class", a);
					}
				return this;
			  },
			  toggleClass: function (e, n) {
				var t = typeof e,
				  i = "string" === t || Array.isArray(e);
				return "boolean" == typeof n && i
				  ? n
					? this.addClass(e)
					: this.removeClass(e)
				  : Se(e)
				  ? this.each(function (t) {
					  Ie(this).toggleClass(e.call(this, t, ie(this), n), n);
					})
				  : this.each(function () {
					  var n, l, o, r;
					  if (i)
						for (l = 0, o = Ie(this), r = le(e); (n = r[l++]); )
						  o.hasClass(n) ? o.removeClass(n) : o.addClass(n);
					  else
						(void 0 !== e && "boolean" !== t) ||
						  ((n = ie(this)),
						  n && Ye.set(this, "__className__", n),
						  this.setAttribute &&
							this.setAttribute(
							  "class",
							  n || e === !1
								? ""
								: Ye.get(this, "__className__") || ""
							));
					});
			  },
			  hasClass: function (e) {
				var n,
				  t,
				  i = 0;
				for (n = " " + e + " "; (t = this[i++]); )
				  if (1 === t.nodeType && (" " + te(ie(t)) + " ").indexOf(n) > -1)
					return !0;
				return !1;
			  },
			});
		  var Tn = /\r/g;
		  Ie.fn.extend({
			val: function (e) {
			  var n,
				t,
				i,
				l = this[0];
			  {
				if (arguments.length)
				  return (
					(i = Se(e)),
					this.each(function (t) {
					  var l;
					  1 === this.nodeType &&
						((l = i ? e.call(this, t, Ie(this).val()) : e),
						null == l
						  ? (l = "")
						  : "number" == typeof l
						  ? (l += "")
						  : Array.isArray(l) &&
							(l = Ie.map(l, function (e) {
							  return null == e ? "" : e + "";
							})),
						(n =
						  Ie.valHooks[this.type] ||
						  Ie.valHooks[this.nodeName.toLowerCase()]),
						(n && "set" in n && void 0 !== n.set(this, l, "value")) ||
						  (this.value = l));
					})
				  );
				if (l)
				  return (
					(n =
					  Ie.valHooks[l.type] ||
					  Ie.valHooks[l.nodeName.toLowerCase()]),
					n && "get" in n && void 0 !== (t = n.get(l, "value"))
					  ? t
					  : ((t = l.value),
						"string" == typeof t
						  ? t.replace(Tn, "")
						  : null == t
						  ? ""
						  : t)
				  );
			  }
			},
		  }),
			Ie.extend({
			  valHooks: {
				option: {
				  get: function (e) {
					var n = Ie.find.attr(e, "value");
					return null != n ? n : te(Ie.text(e));
				  },
				},
				select: {
				  get: function (e) {
					var n,
					  t,
					  i,
					  l = e.options,
					  o = e.selectedIndex,
					  r = "select-one" === e.type,
					  a = r ? null : [],
					  s = r ? o + 1 : l.length;
					for (i = o < 0 ? s : r ? o : 0; i < s; i++)
					  if (
						((t = l[i]),
						(t.selected || i === o) &&
						  !t.disabled &&
						  (!t.parentNode.disabled ||
							!c(t.parentNode, "optgroup")))
					  ) {
						if (((n = Ie(t).val()), r)) return n;
						a.push(n);
					  }
					return a;
				  },
				  set: function (e, n) {
					for (
					  var t, i, l = e.options, o = Ie.makeArray(n), r = l.length;
					  r--;
  
					)
					  (i = l[r]),
						(i.selected =
						  Ie.inArray(Ie.valHooks.option.get(i), o) > -1) &&
						  (t = !0);
					return t || (e.selectedIndex = -1), o;
				  },
				},
			  },
			}),
			Ie.each(["radio", "checkbox"], function () {
			  (Ie.valHooks[this] = {
				set: function (e, n) {
				  if (Array.isArray(n))
					return (e.checked = Ie.inArray(Ie(e).val(), n) > -1);
				},
			  }),
				ke.checkOn ||
				  (Ie.valHooks[this].get = function (e) {
					return null === e.getAttribute("value") ? "on" : e.value;
				  });
			}),
			(ke.focusin = "onfocusin" in t);
		  var Rn = /^(?:focusinfocus|focusoutblur)$/,
			Nn = function (e) {
			  e.stopPropagation();
			};
		  Ie.extend(Ie.event, {
			trigger: function (e, n, i, l) {
			  var o,
				r,
				a,
				s,
				c,
				m,
				u,
				d,
				f = [i || $e],
				p = ye.call(e, "type") ? e.type : e,
				g = ye.call(e, "namespace") ? e.namespace.split(".") : [];
			  if (
				((r = d = a = i = i || $e),
				3 !== i.nodeType &&
				  8 !== i.nodeType &&
				  !Rn.test(p + Ie.event.triggered) &&
				  (p.indexOf(".") > -1 &&
					((g = p.split(".")), (p = g.shift()), g.sort()),
				  (c = p.indexOf(":") < 0 && "on" + p),
				  (e = e[Ie.expando]
					? e
					: new Ie.Event(p, "object" == typeof e && e)),
				  (e.isTrigger = l ? 2 : 3),
				  (e.namespace = g.join(".")),
				  (e.rnamespace = e.namespace
					? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
					: null),
				  (e.result = void 0),
				  e.target || (e.target = i),
				  (n = null == n ? [e] : Ie.makeArray(n, [e])),
				  (u = Ie.event.special[p] || {}),
				  l || !u.trigger || u.trigger.apply(i, n) !== !1))
			  ) {
				if (!l && !u.noBubble && !Ce(i)) {
				  for (
					s = u.delegateType || p, Rn.test(s + p) || (r = r.parentNode);
					r;
					r = r.parentNode
				  )
					f.push(r), (a = r);
				  a === (i.ownerDocument || $e) &&
					f.push(a.defaultView || a.parentWindow || t);
				}
				for (o = 0; (r = f[o++]) && !e.isPropagationStopped(); )
				  (d = r),
					(e.type = o > 1 ? s : u.bindType || p),
					(m =
					  (Ye.get(r, "events") || Object.create(null))[e.type] &&
					  Ye.get(r, "handle")),
					m && m.apply(r, n),
					(m = c && r[c]),
					m &&
					  m.apply &&
					  He(r) &&
					  ((e.result = m.apply(r, n)),
					  e.result === !1 && e.preventDefault());
				return (
				  (e.type = p),
				  l ||
					e.isDefaultPrevented() ||
					(u._default && u._default.apply(f.pop(), n) !== !1) ||
					!He(i) ||
					(c &&
					  Se(i[p]) &&
					  !Ce(i) &&
					  ((a = i[c]),
					  a && (i[c] = null),
					  (Ie.event.triggered = p),
					  e.isPropagationStopped() && d.addEventListener(p, Nn),
					  i[p](),
					  e.isPropagationStopped() && d.removeEventListener(p, Nn),
					  (Ie.event.triggered = void 0),
					  a && (i[c] = a))),
				  e.result
				);
			  }
			},
			simulate: function (e, n, t) {
			  var i = Ie.extend(new Ie.Event(), t, { type: e, isSimulated: !0 });
			  Ie.event.trigger(i, null, n);
			},
		  }),
			Ie.fn.extend({
			  trigger: function (e, n) {
				return this.each(function () {
				  Ie.event.trigger(e, n, this);
				});
			  },
			  triggerHandler: function (e, n) {
				var t = this[0];
				if (t) return Ie.event.trigger(e, n, t, !0);
			  },
			}),
			ke.focusin ||
			  Ie.each({ focus: "focusin", blur: "focusout" }, function (e, n) {
				var t = function (e) {
				  Ie.event.simulate(n, e.target, Ie.event.fix(e));
				};
				Ie.event.special[n] = {
				  setup: function () {
					var i = this.ownerDocument || this.document || this,
					  l = Ye.access(i, n);
					l || i.addEventListener(e, t, !0),
					  Ye.access(i, n, (l || 0) + 1);
				  },
				  teardown: function () {
					var i = this.ownerDocument || this.document || this,
					  l = Ye.access(i, n) - 1;
					l
					  ? Ye.access(i, n, l)
					  : (i.removeEventListener(e, t, !0), Ye.remove(i, n));
				  },
				};
			  });
		  var Pn = t.location,
			jn = { guid: Date.now() },
			Ln = /\?/;
		  Ie.parseXML = function (e) {
			var n, i;
			if (!e || "string" != typeof e) return null;
			try {
			  n = new t.DOMParser().parseFromString(e, "text/xml");
			} catch (e) {}
			return (
			  (i = n && n.getElementsByTagName("parsererror")[0]),
			  (n && !i) ||
				Ie.error(
				  "Invalid XML: " +
					(i
					  ? Ie.map(i.childNodes, function (e) {
						  return e.textContent;
						}).join("\n")
					  : e)
				),
			  n
			);
		  };
		  var zn = /\[\]$/,
			Un = /\r?\n/g,
			Mn = /^(?:submit|button|image|reset|file)$/i,
			Bn = /^(?:input|select|textarea|keygen)/i;
		  (Ie.param = function (e, n) {
			var t,
			  i = [],
			  l = function (e, n) {
				var t = Se(n) ? n() : n;
				i[i.length] =
				  encodeURIComponent(e) +
				  "=" +
				  encodeURIComponent(null == t ? "" : t);
			  };
			if (null == e) return "";
			if (Array.isArray(e) || (e.jquery && !Ie.isPlainObject(e)))
			  Ie.each(e, function () {
				l(this.name, this.value);
			  });
			else for (t in e) oe(t, e[t], n, l);
			return i.join("&");
		  }),
			Ie.fn.extend({
			  serialize: function () {
				return Ie.param(this.serializeArray());
			  },
			  serializeArray: function () {
				return this.map(function () {
				  var e = Ie.prop(this, "elements");
				  return e ? Ie.makeArray(e) : this;
				})
				  .filter(function () {
					var e = this.type;
					return (
					  this.name &&
					  !Ie(this).is(":disabled") &&
					  Bn.test(this.nodeName) &&
					  !Mn.test(e) &&
					  (this.checked || !on.test(e))
					);
				  })
				  .map(function (e, n) {
					var t = Ie(this).val();
					return null == t
					  ? null
					  : Array.isArray(t)
					  ? Ie.map(t, function (e) {
						  return { name: n.name, value: e.replace(Un, "\r\n") };
						})
					  : { name: n.name, value: t.replace(Un, "\r\n") };
				  })
				  .get();
			  },
			});
		  var qn = /%20/g,
			Vn = /#.*$/,
			Hn = /([?&])_=[^&]*/,
			Yn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Wn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Gn = /^(?:GET|HEAD)$/,
			Jn = /^\/\//,
			Xn = {},
			Zn = {},
			Kn = "*/".concat("*"),
			Qn = $e.createElement("a");
		  (Qn.href = Pn.href),
			Ie.extend({
			  active: 0,
			  lastModified: {},
			  etag: {},
			  ajaxSettings: {
				url: Pn.href,
				type: "GET",
				isLocal: Wn.test(Pn.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
				  "*": Kn,
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
				  "text xml": Ie.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			  },
			  ajaxSetup: function (e, n) {
				return n ? se(se(e, Ie.ajaxSettings), n) : se(Ie.ajaxSettings, e);
			  },
			  ajaxPrefilter: re(Xn),
			  ajaxTransport: re(Zn),
			  ajax: function (e, n) {
				function i(e, n, i, a) {
				  var c,
					d,
					f,
					v,
					w,
					k = n;
				  m ||
					((m = !0),
					s && t.clearTimeout(s),
					(l = void 0),
					(r = a || ""),
					(S.readyState = e > 0 ? 4 : 0),
					(c = (e >= 200 && e < 300) || 304 === e),
					i && (v = ce(p, S, i)),
					!c &&
					  Ie.inArray("script", p.dataTypes) > -1 &&
					  Ie.inArray("json", p.dataTypes) < 0 &&
					  (p.converters["text script"] = function () {}),
					(v = me(p, v, S, c)),
					c
					  ? (p.ifModified &&
						  ((w = S.getResponseHeader("Last-Modified")),
						  w && (Ie.lastModified[o] = w),
						  (w = S.getResponseHeader("etag")),
						  w && (Ie.etag[o] = w)),
						204 === e || "HEAD" === p.type
						  ? (k = "nocontent")
						  : 304 === e
						  ? (k = "notmodified")
						  : ((k = v.state),
							(d = v.data),
							(f = v.error),
							(c = !f)))
					  : ((f = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
					(S.status = e),
					(S.statusText = (n || k) + ""),
					c ? b.resolveWith(g, [d, k, S]) : b.rejectWith(g, [S, k, f]),
					S.statusCode(y),
					(y = void 0),
					u &&
					  h.trigger(c ? "ajaxSuccess" : "ajaxError", [
						S,
						p,
						c ? d : f,
					  ]),
					x.fireWith(g, [S, k]),
					u &&
					  (h.trigger("ajaxComplete", [S, p]),
					  --Ie.active || Ie.event.trigger("ajaxStop")));
				}
				"object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
				var l,
				  o,
				  r,
				  a,
				  s,
				  c,
				  m,
				  u,
				  d,
				  f,
				  p = Ie.ajaxSetup({}, n),
				  g = p.context || p,
				  h = p.context && (g.nodeType || g.jquery) ? Ie(g) : Ie.event,
				  b = Ie.Deferred(),
				  x = Ie.Callbacks("once memory"),
				  y = p.statusCode || {},
				  v = {},
				  w = {},
				  k = "canceled",
				  S = {
					readyState: 0,
					getResponseHeader: function (e) {
					  var n;
					  if (m) {
						if (!a)
						  for (a = {}; (n = Yn.exec(r)); )
							a[n[1].toLowerCase() + " "] = (
							  a[n[1].toLowerCase() + " "] || []
							).concat(n[2]);
						n = a[e.toLowerCase() + " "];
					  }
					  return null == n ? null : n.join(", ");
					},
					getAllResponseHeaders: function () {
					  return m ? r : null;
					},
					setRequestHeader: function (e, n) {
					  return (
						null == m &&
						  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
						  (v[e] = n)),
						this
					  );
					},
					overrideMimeType: function (e) {
					  return null == m && (p.mimeType = e), this;
					},
					statusCode: function (e) {
					  var n;
					  if (e)
						if (m) S.always(e[S.status]);
						else for (n in e) y[n] = [y[n], e[n]];
					  return this;
					},
					abort: function (e) {
					  var n = e || k;
					  return l && l.abort(n), i(0, n), this;
					},
				  };
				if (
				  (b.promise(S),
				  (p.url = ((e || p.url || Pn.href) + "").replace(
					Jn,
					Pn.protocol + "//"
				  )),
				  (p.type = n.method || n.type || p.method || p.type),
				  (p.dataTypes = (p.dataType || "*").toLowerCase().match(ze) || [
					"",
				  ]),
				  null == p.crossDomain)
				) {
				  c = $e.createElement("a");
				  try {
					(c.href = p.url),
					  (c.href = c.href),
					  (p.crossDomain =
						Qn.protocol + "//" + Qn.host !=
						c.protocol + "//" + c.host);
				  } catch (e) {
					p.crossDomain = !0;
				  }
				}
				if (
				  (p.data &&
					p.processData &&
					"string" != typeof p.data &&
					(p.data = Ie.param(p.data, p.traditional)),
				  ae(Xn, p, n, S),
				  m)
				)
				  return S;
				(u = Ie.event && p.global),
				  u && 0 === Ie.active++ && Ie.event.trigger("ajaxStart"),
				  (p.type = p.type.toUpperCase()),
				  (p.hasContent = !Gn.test(p.type)),
				  (o = p.url.replace(Vn, "")),
				  p.hasContent
					? p.data &&
					  p.processData &&
					  0 ===
						(p.contentType || "").indexOf(
						  "application/x-www-form-urlencoded"
						) &&
					  (p.data = p.data.replace(qn, "+"))
					: ((f = p.url.slice(o.length)),
					  p.data &&
						(p.processData || "string" == typeof p.data) &&
						((o += (Ln.test(o) ? "&" : "?") + p.data), delete p.data),
					  p.cache === !1 &&
						((o = o.replace(Hn, "$1")),
						(f = (Ln.test(o) ? "&" : "?") + "_=" + jn.guid++ + f)),
					  (p.url = o + f)),
				  p.ifModified &&
					(Ie.lastModified[o] &&
					  S.setRequestHeader("If-Modified-Since", Ie.lastModified[o]),
					Ie.etag[o] &&
					  S.setRequestHeader("If-None-Match", Ie.etag[o])),
				  ((p.data && p.hasContent && p.contentType !== !1) ||
					n.contentType) &&
					S.setRequestHeader("Content-Type", p.contentType),
				  S.setRequestHeader(
					"Accept",
					p.dataTypes[0] && p.accepts[p.dataTypes[0]]
					  ? p.accepts[p.dataTypes[0]] +
						  ("*" !== p.dataTypes[0] ? ", " + Kn + "; q=0.01" : "")
					  : p.accepts["*"]
				  );
				for (d in p.headers) S.setRequestHeader(d, p.headers[d]);
				if (p.beforeSend && (p.beforeSend.call(g, S, p) === !1 || m))
				  return S.abort();
				if (
				  ((k = "abort"),
				  x.add(p.complete),
				  S.done(p.success),
				  S.fail(p.error),
				  (l = ae(Zn, p, n, S)))
				) {
				  if (((S.readyState = 1), u && h.trigger("ajaxSend", [S, p]), m))
					return S;
				  p.async &&
					p.timeout > 0 &&
					(s = t.setTimeout(function () {
					  S.abort("timeout");
					}, p.timeout));
				  try {
					(m = !1), l.send(v, i);
				  } catch (e) {
					if (m) throw e;
					i(-1, e);
				  }
				} else i(-1, "No Transport");
				return S;
			  },
			  getJSON: function (e, n, t) {
				return Ie.get(e, n, t, "json");
			  },
			  getScript: function (e, n) {
				return Ie.get(e, void 0, n, "script");
			  },
			}),
			Ie.each(["get", "post"], function (e, n) {
			  Ie[n] = function (e, t, i, l) {
				return (
				  Se(t) && ((l = l || i), (i = t), (t = void 0)),
				  Ie.ajax(
					Ie.extend(
					  { url: e, type: n, dataType: l, data: t, success: i },
					  Ie.isPlainObject(e) && e
					)
				  )
				);
			  };
			}),
			Ie.ajaxPrefilter(function (e) {
			  var n;
			  for (n in e.headers)
				"content-type" === n.toLowerCase() &&
				  (e.contentType = e.headers[n] || "");
			}),
			(Ie._evalUrl = function (e, n, t) {
			  return Ie.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function () {} },
				dataFilter: function (e) {
				  Ie.globalEval(e, n, t);
				},
			  });
			}),
			Ie.fn.extend({
			  wrapAll: function (e) {
				var n;
				return (
				  this[0] &&
					(Se(e) && (e = e.call(this[0])),
					(n = Ie(e, this[0].ownerDocument).eq(0).clone(!0)),
					this[0].parentNode && n.insertBefore(this[0]),
					n
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
				return Se(e)
				  ? this.each(function (n) {
					  Ie(this).wrapInner(e.call(this, n));
					})
				  : this.each(function () {
					  var n = Ie(this),
						t = n.contents();
					  t.length ? t.wrapAll(e) : n.append(e);
					});
			  },
			  wrap: function (e) {
				var n = Se(e);
				return this.each(function (t) {
				  Ie(this).wrapAll(n ? e.call(this, t) : e);
				});
			  },
			  unwrap: function (e) {
				return (
				  this.parent(e)
					.not("body")
					.each(function () {
					  Ie(this).replaceWith(this.childNodes);
					}),
				  this
				);
			  },
			}),
			(Ie.expr.pseudos.hidden = function (e) {
			  return !Ie.expr.pseudos.visible(e);
			}),
			(Ie.expr.pseudos.visible = function (e) {
			  return !!(
				e.offsetWidth ||
				e.offsetHeight ||
				e.getClientRects().length
			  );
			}),
			(Ie.ajaxSettings.xhr = function () {
			  try {
				return new t.XMLHttpRequest();
			  } catch (e) {}
			});
		  var et = { 0: 200, 1223: 204 },
			nt = Ie.ajaxSettings.xhr();
		  (ke.cors = !!nt && "withCredentials" in nt),
			(ke.ajax = nt = !!nt),
			Ie.ajaxTransport(function (e) {
			  var n, i;
			  if (ke.cors || (nt && !e.crossDomain))
				return {
				  send: function (l, o) {
					var r,
					  a = e.xhr();
					if (
					  (a.open(e.type, e.url, e.async, e.username, e.password),
					  e.xhrFields)
					)
					  for (r in e.xhrFields) a[r] = e.xhrFields[r];
					e.mimeType &&
					  a.overrideMimeType &&
					  a.overrideMimeType(e.mimeType),
					  e.crossDomain ||
						l["X-Requested-With"] ||
						(l["X-Requested-With"] = "XMLHttpRequest");
					for (r in l) a.setRequestHeader(r, l[r]);
					(n = function (e) {
					  return function () {
						n &&
						  ((n =
							i =
							a.onload =
							a.onerror =
							a.onabort =
							a.ontimeout =
							a.onreadystatechange =
							  null),
						  "abort" === e
							? a.abort()
							: "error" === e
							? "number" != typeof a.status
							  ? o(0, "error")
							  : o(a.status, a.statusText)
							: o(
								et[a.status] || a.status,
								a.statusText,
								"text" !== (a.responseType || "text") ||
								  "string" != typeof a.responseText
								  ? { binary: a.response }
								  : { text: a.responseText },
								a.getAllResponseHeaders()
							  ));
					  };
					}),
					  (a.onload = n()),
					  (i = a.onerror = a.ontimeout = n("error")),
					  void 0 !== a.onabort
						? (a.onabort = i)
						: (a.onreadystatechange = function () {
							4 === a.readyState &&
							  t.setTimeout(function () {
								n && i();
							  });
						  }),
					  (n = n("abort"));
					try {
					  a.send((e.hasContent && e.data) || null);
					} catch (e) {
					  if (n) throw e;
					}
				  },
				  abort: function () {
					n && n();
				  },
				};
			}),
			Ie.ajaxPrefilter(function (e) {
			  e.crossDomain && (e.contents.script = !1);
			}),
			Ie.ajaxSetup({
			  accepts: {
				script:
				  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
			  },
			  contents: { script: /\b(?:java|ecma)script\b/ },
			  converters: {
				"text script": function (e) {
				  return Ie.globalEval(e), e;
				},
			  },
			}),
			Ie.ajaxPrefilter("script", function (e) {
			  void 0 === e.cache && (e.cache = !1),
				e.crossDomain && (e.type = "GET");
			}),
			Ie.ajaxTransport("script", function (e) {
			  if (e.crossDomain || e.scriptAttrs) {
				var n, t;
				return {
				  send: function (i, l) {
					(n = Ie("<script>")
					  .attr(e.scriptAttrs || {})
					  .prop({ charset: e.scriptCharset, src: e.url })
					  .on(
						"load error",
						(t = function (e) {
						  n.remove(),
							(t = null),
							e && l("error" === e.type ? 404 : 200, e.type);
						})
					  )),
					  $e.head.appendChild(n[0]);
				  },
				  abort: function () {
					t && t();
				  },
				};
			  }
			});
		  var tt = [],
			it = /(=)\?(?=&|$)|\?\?/;
		  Ie.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
			  var e = tt.pop() || Ie.expando + "_" + jn.guid++;
			  return (this[e] = !0), e;
			},
		  }),
			Ie.ajaxPrefilter("json jsonp", function (e, n, i) {
			  var l,
				o,
				r,
				a =
				  e.jsonp !== !1 &&
				  (it.test(e.url)
					? "url"
					: "string" == typeof e.data &&
					  0 ===
						(e.contentType || "").indexOf(
						  "application/x-www-form-urlencoded"
						) &&
					  it.test(e.data) &&
					  "data");
			  if (a || "jsonp" === e.dataTypes[0])
				return (
				  (l = e.jsonpCallback =
					Se(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
				  a
					? (e[a] = e[a].replace(it, "$1" + l))
					: e.jsonp !== !1 &&
					  (e.url += (Ln.test(e.url) ? "&" : "?") + e.jsonp + "=" + l),
				  (e.converters["script json"] = function () {
					return r || Ie.error(l + " was not called"), r[0];
				  }),
				  (e.dataTypes[0] = "json"),
				  (o = t[l]),
				  (t[l] = function () {
					r = arguments;
				  }),
				  i.always(function () {
					void 0 === o ? Ie(t).removeProp(l) : (t[l] = o),
					  e[l] && ((e.jsonpCallback = n.jsonpCallback), tt.push(l)),
					  r && Se(o) && o(r[0]),
					  (r = o = void 0);
				  }),
				  "script"
				);
			}),
			(ke.createHTMLDocument = (function () {
			  var e = $e.implementation.createHTMLDocument("").body;
			  return (
				(e.innerHTML = "<form></form><form></form>"),
				2 === e.childNodes.length
			  );
			})()),
			(Ie.parseHTML = function (e, n, t) {
			  if ("string" != typeof e) return [];
			  "boolean" == typeof n && ((t = n), (n = !1));
			  var i, l, o;
			  return (
				n ||
				  (ke.createHTMLDocument
					? ((n = $e.implementation.createHTMLDocument("")),
					  (i = n.createElement("base")),
					  (i.href = $e.location.href),
					  n.head.appendChild(i))
					: (n = $e)),
				(l = Te.exec(e)),
				(o = !t && []),
				l
				  ? [n.createElement(l[1])]
				  : ((l = A([e], n, o)),
					o && o.length && Ie(o).remove(),
					Ie.merge([], l.childNodes))
			  );
			}),
			(Ie.fn.load = function (e, n, t) {
			  var i,
				l,
				o,
				r = this,
				a = e.indexOf(" ");
			  return (
				a > -1 && ((i = te(e.slice(a))), (e = e.slice(0, a))),
				Se(n)
				  ? ((t = n), (n = void 0))
				  : n && "object" == typeof n && (l = "POST"),
				r.length > 0 &&
				  Ie.ajax({ url: e, type: l || "GET", dataType: "html", data: n })
					.done(function (e) {
					  (o = arguments),
						r.html(
						  i ? Ie("<div>").append(Ie.parseHTML(e)).find(i) : e
						);
					})
					.always(
					  t &&
						function (e, n) {
						  r.each(function () {
							t.apply(this, o || [e.responseText, n, e]);
						  });
						}
					),
				this
			  );
			}),
			(Ie.expr.pseudos.animated = function (e) {
			  return Ie.grep(Ie.timers, function (n) {
				return e === n.elem;
			  }).length;
			}),
			(Ie.offset = {
			  setOffset: function (e, n, t) {
				var i,
				  l,
				  o,
				  r,
				  a,
				  s,
				  c,
				  m = Ie.css(e, "position"),
				  u = Ie(e),
				  d = {};
				"static" === m && (e.style.position = "relative"),
				  (a = u.offset()),
				  (o = Ie.css(e, "top")),
				  (s = Ie.css(e, "left")),
				  (c =
					("absolute" === m || "fixed" === m) &&
					(o + s).indexOf("auto") > -1),
				  c
					? ((i = u.position()), (r = i.top), (l = i.left))
					: ((r = parseFloat(o) || 0), (l = parseFloat(s) || 0)),
				  Se(n) && (n = n.call(e, t, Ie.extend({}, a))),
				  null != n.top && (d.top = n.top - a.top + r),
				  null != n.left && (d.left = n.left - a.left + l),
				  "using" in n ? n.using.call(e, d) : u.css(d);
			  },
			}),
			Ie.fn.extend({
			  offset: function (e) {
				if (arguments.length)
				  return void 0 === e
					? this
					: this.each(function (n) {
						Ie.offset.setOffset(this, e, n);
					  });
				var n,
				  t,
				  i = this[0];
				if (i)
				  return i.getClientRects().length
					? ((n = i.getBoundingClientRect()),
					  (t = i.ownerDocument.defaultView),
					  {
						top: n.top + t.pageYOffset,
						left: n.left + t.pageXOffset,
					  })
					: { top: 0, left: 0 };
			  },
			  position: function () {
				if (this[0]) {
				  var e,
					n,
					t,
					i = this[0],
					l = { top: 0, left: 0 };
				  if ("fixed" === Ie.css(i, "position"))
					n = i.getBoundingClientRect();
				  else {
					for (
					  n = this.offset(),
						t = i.ownerDocument,
						e = i.offsetParent || t.documentElement;
					  e &&
					  (e === t.body || e === t.documentElement) &&
					  "static" === Ie.css(e, "position");
  
					)
					  e = e.parentNode;
					e &&
					  e !== i &&
					  1 === e.nodeType &&
					  ((l = Ie(e).offset()),
					  (l.top += Ie.css(e, "borderTopWidth", !0)),
					  (l.left += Ie.css(e, "borderLeftWidth", !0)));
				  }
				  return {
					top: n.top - l.top - Ie.css(i, "marginTop", !0),
					left: n.left - l.left - Ie.css(i, "marginLeft", !0),
				  };
				}
			  },
			  offsetParent: function () {
				return this.map(function () {
				  for (
					var e = this.offsetParent;
					e && "static" === Ie.css(e, "position");
  
				  )
					e = e.offsetParent;
				  return e || Qe;
				});
			  },
			}),
			Ie.each(
			  { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
			  function (e, n) {
				var t = "pageYOffset" === n;
				Ie.fn[e] = function (i) {
				  return Be(
					this,
					function (e, i, l) {
					  var o;
					  return (
						Ce(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
						void 0 === l
						  ? o
							? o[n]
							: e[i]
						  : void (o
							  ? o.scrollTo(
								  t ? o.pageXOffset : l,
								  t ? l : o.pageYOffset
								)
							  : (e[i] = l))
					  );
					},
					e,
					i,
					arguments.length
				  );
				};
			  }
			),
			Ie.each(["top", "left"], function (e, n) {
			  Ie.cssHooks[n] = B(ke.pixelPosition, function (e, t) {
				if (t)
				  return (
					(t = M(e, n)), pn.test(t) ? Ie(e).position()[n] + "px" : t
				  );
			  });
			}),
			Ie.each({ Height: "height", Width: "width" }, function (e, n) {
			  Ie.each(
				{ padding: "inner" + e, content: n, "": "outer" + e },
				function (t, i) {
				  Ie.fn[i] = function (l, o) {
					var r = arguments.length && (t || "boolean" != typeof l),
					  a = t || (l === !0 || o === !0 ? "margin" : "border");
					return Be(
					  this,
					  function (n, t, l) {
						var o;
						return Ce(n)
						  ? 0 === i.indexOf("outer")
							? n["inner" + e]
							: n.document.documentElement["client" + e]
						  : 9 === n.nodeType
						  ? ((o = n.documentElement),
							Math.max(
							  n.body["scroll" + e],
							  o["scroll" + e],
							  n.body["offset" + e],
							  o["offset" + e],
							  o["client" + e]
							))
						  : void 0 === l
						  ? Ie.css(n, t, a)
						  : Ie.style(n, t, l, a);
					  },
					  n,
					  r ? l : void 0,
					  r
					);
				  };
				}
			  );
			}),
			Ie.each(
			  [
				"ajaxStart",
				"ajaxStop",
				"ajaxComplete",
				"ajaxError",
				"ajaxSuccess",
				"ajaxSend",
			  ],
			  function (e, n) {
				Ie.fn[n] = function (e) {
				  return this.on(n, e);
				};
			  }
			),
			Ie.fn.extend({
			  bind: function (e, n, t) {
				return this.on(e, null, n, t);
			  },
			  unbind: function (e, n) {
				return this.off(e, null, n);
			  },
			  delegate: function (e, n, t, i) {
				return this.on(n, e, t, i);
			  },
			  undelegate: function (e, n, t) {
				return 1 === arguments.length
				  ? this.off(e, "**")
				  : this.off(n, e || "**", t);
			  },
			  hover: function (e, n) {
				return this.mouseenter(e).mouseleave(n || e);
			  },
			}),
			Ie.each(
			  "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
				" "
			  ),
			  function (e, n) {
				Ie.fn[n] = function (e, t) {
				  return arguments.length > 0
					? this.on(n, null, e, t)
					: this.trigger(n);
				};
			  }
			);
		  var lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		  (Ie.proxy = function (e, n) {
			var t, i, l;
			if (("string" == typeof n && ((t = e[n]), (n = e), (e = t)), Se(e)))
			  return (
				(i = fe.call(arguments, 2)),
				(l = function () {
				  return e.apply(n || this, i.concat(fe.call(arguments)));
				}),
				(l.guid = e.guid = e.guid || Ie.guid++),
				l
			  );
		  }),
			(Ie.holdReady = function (e) {
			  e ? Ie.readyWait++ : Ie.ready(!0);
			}),
			(Ie.isArray = Array.isArray),
			(Ie.parseJSON = JSON.parse),
			(Ie.nodeName = c),
			(Ie.isFunction = Se),
			(Ie.isWindow = Ce),
			(Ie.camelCase = x),
			(Ie.type = a),
			(Ie.now = Date.now),
			(Ie.isNumeric = function (e) {
			  var n = Ie.type(e);
			  return (
				("number" === n || "string" === n) && !isNaN(e - parseFloat(e))
			  );
			}),
			(Ie.trim = function (e) {
			  return null == e ? "" : (e + "").replace(lt, "");
			}),
			(i = []),
			(l = function () {
			  return Ie;
			}.apply(n, i)),
			!(void 0 !== l && (e.exports = l));
		  var ot = t.jQuery,
			rt = t.$;
		  return (
			(Ie.noConflict = function (e) {
			  return (
				t.$ === Ie && (t.$ = rt),
				e && t.jQuery === Ie && (t.jQuery = ot),
				Ie
			  );
			}),
			"undefined" == typeof o && (t.jQuery = t.$ = Ie),
			Ie
		  );
		});
	  },
  ]
);
//# sourceMappingURL=bundle.js.map
