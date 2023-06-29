webpackJsonp([3, 0], {
	0: function (e, t, n) {
		e.exports = n(69);
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
			n = n || Se;
			var r,
			  i,
			  o = n.createElement("script");
			if (((o.text = e), t))
			  for (r in ke)
				(i = t[r] || (t.getAttribute && t.getAttribute(r))),
				  i && o.setAttribute(r, i);
			n.head.appendChild(o).parentNode.removeChild(o);
		  }
		  function s(e) {
			return null == e
			  ? e + ""
			  : "object" == typeof e || "function" == typeof e
			  ? $e[ge.call(e)] || "object"
			  : typeof e;
		  }
		  function u(e) {
			var t = !!e && "length" in e && e.length,
			  n = s(e);
			return (
			  !Ce(e) &&
			  !Ee(e) &&
			  ("array" === n ||
				0 === t ||
				("number" == typeof t && t > 0 && t - 1 in e))
			);
		  }
		  function c(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
		  }
		  function l(e, t, n) {
			return Ce(t)
			  ? Ae.grep(e, function (e, r) {
				  return !!t.call(e, r, e) !== n;
				})
			  : t.nodeType
			  ? Ae.grep(e, function (e) {
				  return (e === t) !== n;
				})
			  : "string" != typeof t
			  ? Ae.grep(e, function (e) {
				  return me.call(t, e) > -1 !== n;
				})
			  : Ae.filter(t, e, n);
		  }
		  function f(e, t) {
			for (; (e = e[t]) && 1 !== e.nodeType; );
			return e;
		  }
		  function p(e) {
			var t = {};
			return (
			  Ae.each(e.match(qe) || [], function (e, n) {
				t[n] = !0;
			  }),
			  t
			);
		  }
		  function d(e) {
			return e;
		  }
		  function h(e) {
			throw e;
		  }
		  function v(e, t, n, r) {
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
		  function m() {
			Se.removeEventListener("DOMContentLoaded", m),
			  n.removeEventListener("load", m),
			  Ae.ready();
		  }
		  function $(e, t) {
			return t.toUpperCase();
		  }
		  function g(e) {
			return e.replace(Fe, "ms-").replace(Be, $);
		  }
		  function y() {
			this.expando = Ae.expando + y.uid++;
		  }
		  function b(e) {
			return (
			  "true" === e ||
			  ("false" !== e &&
				("null" === e
				  ? null
				  : e === +e + ""
				  ? +e
				  : Xe.test(e)
				  ? JSON.parse(e)
				  : e))
			);
		  }
		  function x(e, t, n) {
			var r;
			if (void 0 === n && 1 === e.nodeType)
			  if (
				((r = "data-" + t.replace(Je, "-$&").toLowerCase()),
				(n = e.getAttribute(r)),
				"string" == typeof n)
			  ) {
				try {
				  n = b(n);
				} catch (e) {}
				Ge.set(e, t, n);
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
					return Ae.css(e, t, "");
				  },
			  u = s(),
			  c = (n && n[3]) || (Ae.cssNumber[t] ? "" : "px"),
			  l =
				e.nodeType &&
				(Ae.cssNumber[t] || ("px" !== c && +u)) &&
				Ye.exec(Ae.css(e, t));
			if (l && l[3] !== c) {
			  for (u /= 2, c = c || l[3], l = +u || 1; a--; )
				Ae.style(e, t, l + c),
				  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
				  (l /= o);
			  (l *= 2), Ae.style(e, t, l + c), (n = n || []);
			}
			return (
			  n &&
				((l = +l || +u || 0),
				(i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
				r && ((r.unit = c), (r.start = l), (r.end = i))),
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
				(i = Ae.css(t, "display")),
				t.parentNode.removeChild(t),
				"none" === i && (i = "block"),
				(rt[r] = i),
				i);
		  }
		  function E(e, t) {
			for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
			  (r = e[o]),
				r.style &&
				  ((n = r.style.display),
				  t
					? ("none" === n &&
						((i[o] = ze.get(r, "display") || null),
						i[o] || (r.style.display = "")),
					  "" === r.style.display && nt(r) && (i[o] = C(r)))
					: "none" !== n && ((i[o] = "none"), ze.set(r, "display", n)));
			for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
			return e;
		  }
		  function S(e, t) {
			var n;
			return (
			  (n =
				"undefined" != typeof e.getElementsByTagName
				  ? e.getElementsByTagName(t || "*")
				  : "undefined" != typeof e.querySelectorAll
				  ? e.querySelectorAll(t || "*")
				  : []),
			  void 0 === t || (t && c(e, t)) ? Ae.merge([e], n) : n
			);
		  }
		  function k(e, t) {
			for (var n = 0, r = e.length; n < r; n++)
			  ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"));
		  }
		  function T(e, t, n, r, i) {
			for (
			  var o,
				a,
				u,
				c,
				l,
				f,
				p = t.createDocumentFragment(),
				d = [],
				h = 0,
				v = e.length;
			  h < v;
			  h++
			)
			  if (((o = e[h]), o || 0 === o))
				if ("object" === s(o)) Ae.merge(d, o.nodeType ? [o] : o);
				else if (ut.test(o)) {
				  for (
					a = a || p.appendChild(t.createElement("div")),
					  u = (ot.exec(o) || ["", ""])[1].toLowerCase(),
					  c = st[u] || st._default,
					  a.innerHTML = c[1] + Ae.htmlPrefilter(o) + c[2],
					  f = c[0];
					f--;
	
				  )
					a = a.lastChild;
				  Ae.merge(d, a.childNodes),
					(a = p.firstChild),
					(a.textContent = "");
				} else d.push(t.createTextNode(o));
			for (p.textContent = "", h = 0; (o = d[h++]); )
			  if (r && Ae.inArray(o, r) > -1) i && i.push(o);
			  else if (
				((l = et(o)), (a = S(p.appendChild(o), "script")), l && k(a), n)
			  )
				for (f = 0; (o = a[f++]); ) at.test(o.type || "") && n.push(o);
			return p;
		  }
		  function A() {
			return !0;
		  }
		  function O() {
			return !1;
		  }
		  function N(e, t) {
			return (e === M()) == ("focus" === t);
		  }
		  function M() {
			try {
			  return Se.activeElement;
			} catch (e) {}
		  }
		  function j(e, t, n, r, i, o) {
			var a, s;
			if ("object" == typeof t) {
			  "string" != typeof n && ((r = r || n), (n = void 0));
			  for (s in t) j(e, s, n, r, t[s], o);
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
			  i = O;
			else if (!i) return e;
			return (
			  1 === o &&
				((a = i),
				(i = function (e) {
				  return Ae().off(e), a.apply(this, arguments);
				}),
				(i.guid = a.guid || (a.guid = Ae.guid++))),
			  e.each(function () {
				Ae.event.add(this, t, i, r, n);
			  })
			);
		  }
		  function D(e, t, n) {
			return n
			  ? (ze.set(e, t, !1),
				void Ae.event.add(e, t, {
				  namespace: !1,
				  handler: function (e) {
					var r,
					  i,
					  o = ze.get(this, t);
					if (1 & e.isTrigger && this[t]) {
					  if (o.length)
						(Ae.event.special[t] || {}).delegateType &&
						  e.stopPropagation();
					  else if (
						((o = de.call(arguments)),
						ze.set(this, t, o),
						(r = n(this, t)),
						this[t](),
						(i = ze.get(this, t)),
						o !== i || r ? ze.set(this, t, !1) : (i = {}),
						o !== i)
					  )
						return (
						  e.stopImmediatePropagation(),
						  e.preventDefault(),
						  i && i.value
						);
					} else
					  o.length &&
						(ze.set(this, t, {
						  value: Ae.event.trigger(
							Ae.extend(o[0], Ae.Event.prototype),
							o.slice(1),
							this
						  ),
						}),
						e.stopImmediatePropagation());
				  },
				}))
			  : void (void 0 === ze.get(e, t) && Ae.event.add(e, t, A));
		  }
		  function P(e, t) {
			return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr")
			  ? Ae(e).children("tbody")[0] || e
			  : e;
		  }
		  function V(e) {
			return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
		  }
		  function L(e) {
			return (
			  "true/" === (e.type || "").slice(0, 5)
				? (e.type = e.type.slice(5))
				: e.removeAttribute("type"),
			  e
			);
		  }
		  function I(e, t) {
			var n, r, i, o, a, s, u;
			if (1 === t.nodeType) {
			  if (ze.hasData(e) && ((o = ze.get(e)), (u = o.events))) {
				ze.remove(t, "handle events");
				for (i in u)
				  for (n = 0, r = u[i].length; n < r; n++)
					Ae.event.add(t, i, u[i][n]);
			  }
			  Ge.hasData(e) &&
				((a = Ge.access(e)), (s = Ae.extend({}, a)), Ge.set(t, s));
			}
		  }
		  function R(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && it.test(e.type)
			  ? (t.checked = e.checked)
			  : ("input" !== n && "textarea" !== n) ||
				(t.defaultValue = e.defaultValue);
		  }
		  function q(e, t, n, r) {
			t = he(t);
			var i,
			  o,
			  s,
			  u,
			  c,
			  l,
			  f = 0,
			  p = e.length,
			  d = p - 1,
			  h = t[0],
			  v = Ce(h);
			if (
			  v ||
			  (p > 1 && "string" == typeof h && !we.checkClone && ft.test(h))
			)
			  return e.each(function (i) {
				var o = e.eq(i);
				v && (t[0] = h.call(this, i, o.html())), q(o, t, n, r);
			  });
			if (
			  p &&
			  ((i = T(t, e[0].ownerDocument, !1, e, r)),
			  (o = i.firstChild),
			  1 === i.childNodes.length && (i = o),
			  o || r)
			) {
			  for (s = Ae.map(S(i, "script"), V), u = s.length; f < p; f++)
				(c = i),
				  f !== d &&
					((c = Ae.clone(c, !0, !0)), u && Ae.merge(s, S(c, "script"))),
				  n.call(e[f], c, f);
			  if (u)
				for (
				  l = s[s.length - 1].ownerDocument, Ae.map(s, L), f = 0;
				  f < u;
				  f++
				)
				  (c = s[f]),
					at.test(c.type || "") &&
					  !ze.access(c, "globalEval") &&
					  Ae.contains(l, c) &&
					  (c.src && "module" !== (c.type || "").toLowerCase()
						? Ae._evalUrl &&
						  !c.noModule &&
						  Ae._evalUrl(
							c.src,
							{ nonce: c.nonce || c.getAttribute("nonce") },
							l
						  )
						: a(c.textContent.replace(pt, ""), c, l));
			}
			return e;
		  }
		  function _(e, t, n) {
			for (var r, i = t ? Ae.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
			  n || 1 !== r.nodeType || Ae.cleanData(S(r)),
				r.parentNode &&
				  (n && et(r) && k(S(r, "script")), r.parentNode.removeChild(r));
			return e;
		  }
		  function H(e, t, n) {
			var r,
			  i,
			  o,
			  a,
			  s = e.style;
			return (
			  (n = n || ht(e)),
			  n &&
				((a = n.getPropertyValue(t) || n[t]),
				"" !== a || et(e) || (a = Ae.style(e, t)),
				!we.pixelBoxStyles() &&
				  dt.test(a) &&
				  mt.test(t) &&
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
		  function U(e, t) {
			return {
			  get: function () {
				return e()
				  ? void delete this.get
				  : (this.get = t).apply(this, arguments);
			  },
			};
		  }
		  function F(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = $t.length; n--; )
			  if (((e = $t[n] + t), e in gt)) return e;
		  }
		  function B(e) {
			var t = Ae.cssProps[e] || yt[e];
			return t ? t : e in gt ? e : (yt[e] = F(e) || e);
		  }
		  function W(e, t, n) {
			var r = Ye.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
		  }
		  function z(e, t, n, r, i, o) {
			var a = "width" === t ? 1 : 0,
			  s = 0,
			  u = 0;
			if (n === (r ? "border" : "content")) return 0;
			for (; a < 4; a += 2)
			  "margin" === n && (u += Ae.css(e, n + Ze[a], !0, i)),
				r
				  ? ("content" === n && (u -= Ae.css(e, "padding" + Ze[a], !0, i)),
					"margin" !== n &&
					  (u -= Ae.css(e, "border" + Ze[a] + "Width", !0, i)))
				  : ((u += Ae.css(e, "padding" + Ze[a], !0, i)),
					"padding" !== n
					  ? (u += Ae.css(e, "border" + Ze[a] + "Width", !0, i))
					  : (s += Ae.css(e, "border" + Ze[a] + "Width", !0, i)));
			return (
			  !r &&
				o >= 0 &&
				(u +=
				  Math.max(
					0,
					Math.ceil(
					  e["offset" + t[0].toUpperCase() + t.slice(1)] -
						o -
						u -
						s -
						0.5
					)
				  ) || 0),
			  u
			);
		  }
		  function G(e, t, n) {
			var r = ht(e),
			  i = !we.boxSizingReliable() || n,
			  o = i && "border-box" === Ae.css(e, "boxSizing", !1, r),
			  a = o,
			  s = H(e, t, r),
			  u = "offset" + t[0].toUpperCase() + t.slice(1);
			if (dt.test(s)) {
			  if (!n) return s;
			  s = "auto";
			}
			return (
			  ((!we.boxSizingReliable() && o) ||
				(!we.reliableTrDimensions() && c(e, "tr")) ||
				"auto" === s ||
				(!parseFloat(s) && "inline" === Ae.css(e, "display", !1, r))) &&
				e.getClientRects().length &&
				((o = "border-box" === Ae.css(e, "boxSizing", !1, r)),
				(a = u in e),
				a && (s = e[u])),
			  (s = parseFloat(s) || 0),
			  s + z(e, t, n || (o ? "border" : "content"), a, r, s) + "px"
			);
		  }
		  function X(e, t, n, r, i) {
			return new X.prototype.init(e, t, n, r, i);
		  }
		  function J() {
			St &&
			  (Se.hidden === !1 && n.requestAnimationFrame
				? n.requestAnimationFrame(J)
				: n.setTimeout(J, Ae.fx.interval),
			  Ae.fx.tick());
		  }
		  function K() {
			return (
			  n.setTimeout(function () {
				Et = void 0;
			  }),
			  (Et = Date.now())
			);
		  }
		  function Y(e, t) {
			var n,
			  r = 0,
			  i = { height: e };
			for (t = t ? 1 : 0; r < 4; r += 2 - t)
			  (n = Ze[r]), (i["margin" + n] = i["padding" + n] = e);
			return t && (i.opacity = i.width = e), i;
		  }
		  function Z(e, t, n) {
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
		  function Q(e, t, n) {
			var r,
			  i,
			  o,
			  a,
			  s,
			  u,
			  c,
			  l,
			  f = "width" in t || "height" in t,
			  p = this,
			  d = {},
			  h = e.style,
			  v = e.nodeType && nt(e),
			  m = ze.get(e, "fxshow");
			n.queue ||
			  ((a = Ae._queueHooks(e, "fx")),
			  null == a.unqueued &&
				((a.unqueued = 0),
				(s = a.empty.fire),
				(a.empty.fire = function () {
				  a.unqueued || s();
				})),
			  a.unqueued++,
			  p.always(function () {
				p.always(function () {
				  a.unqueued--, Ae.queue(e, "fx").length || a.empty.fire();
				});
			  }));
			for (r in t)
			  if (((i = t[r]), kt.test(i))) {
				if (
				  (delete t[r],
				  (o = o || "toggle" === i),
				  i === (v ? "hide" : "show"))
				) {
				  if ("show" !== i || !m || void 0 === m[r]) continue;
				  v = !0;
				}
				d[r] = (m && m[r]) || Ae.style(e, r);
			  }
			if (((u = !Ae.isEmptyObject(t)), u || !Ae.isEmptyObject(d))) {
			  f &&
				1 === e.nodeType &&
				((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
				(c = m && m.display),
				null == c && (c = ze.get(e, "display")),
				(l = Ae.css(e, "display")),
				"none" === l &&
				  (c
					? (l = c)
					: (E([e], !0),
					  (c = e.style.display || c),
					  (l = Ae.css(e, "display")),
					  E([e]))),
				("inline" === l || ("inline-block" === l && null != c)) &&
				  "none" === Ae.css(e, "float") &&
				  (u ||
					(p.done(function () {
					  h.display = c;
					}),
					null == c && ((l = h.display), (c = "none" === l ? "" : l))),
				  (h.display = "inline-block"))),
				n.overflow &&
				  ((h.overflow = "hidden"),
				  p.always(function () {
					(h.overflow = n.overflow[0]),
					  (h.overflowX = n.overflow[1]),
					  (h.overflowY = n.overflow[2]);
				  })),
				(u = !1);
			  for (r in d)
				u ||
				  (m
					? "hidden" in m && (v = m.hidden)
					: (m = ze.access(e, "fxshow", { display: c })),
				  o && (m.hidden = !v),
				  v && E([e], !0),
				  p.done(function () {
					v || E([e]), ze.remove(e, "fxshow");
					for (r in d) Ae.style(e, r, d[r]);
				  })),
				  (u = Z(v ? m[r] : 0, r, p)),
				  r in m ||
					((m[r] = u.start), v && ((u.end = u.start), (u.start = 0)));
			}
		  }
		  function ee(e, t) {
			var n, r, i, o, a;
			for (n in e)
			  if (
				((r = g(n)),
				(i = t[r]),
				(o = e[n]),
				Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
				n !== r && ((e[r] = o), delete e[n]),
				(a = Ae.cssHooks[r]),
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
			  s = Ae.Deferred().always(function () {
				delete u.elem;
			  }),
			  u = function () {
				if (i) return !1;
				for (
				  var t = Et || K(),
					n = Math.max(0, c.startTime + c.duration - t),
					r = n / c.duration || 0,
					o = 1 - r,
					a = 0,
					u = c.tweens.length;
				  a < u;
				  a++
				)
				  c.tweens[a].run(o);
				return (
				  s.notifyWith(e, [c, o, n]),
				  o < 1 && u
					? n
					: (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
				);
			  },
			  c = s.promise({
				elem: e,
				props: Ae.extend({}, t),
				opts: Ae.extend(
				  !0,
				  { specialEasing: {}, easing: Ae.easing._default },
				  n
				),
				originalProperties: t,
				originalOptions: n,
				startTime: Et || K(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
				  var r = Ae.Tween(
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
			  l = c.props;
			for (ee(l, c.opts.specialEasing); o < a; o++)
			  if ((r = te.prefilters[o].call(c, e, l, c.opts)))
				return (
				  Ce(r.stop) &&
					(Ae._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
				  r
				);
			return (
			  Ae.map(l, Z, c),
			  Ce(c.opts.start) && c.opts.start.call(e, c),
			  c
				.progress(c.opts.progress)
				.done(c.opts.done, c.opts.complete)
				.fail(c.opts.fail)
				.always(c.opts.always),
			  Ae.fx.timer(Ae.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
			  c
			);
		  }
		  function ne(e) {
			var t = e.match(qe) || [];
			return t.join(" ");
		  }
		  function re(e) {
			return (e.getAttribute && e.getAttribute("class")) || "";
		  }
		  function ie(e) {
			return Array.isArray(e)
			  ? e
			  : "string" == typeof e
			  ? e.match(qe) || []
			  : [];
		  }
		  function oe(e, t, n, r) {
			var i;
			if (Array.isArray(t))
			  Ae.each(t, function (t, i) {
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
				o = t.toLowerCase().match(qe) || [];
			  if (Ce(n))
				for (; (r = o[i++]); )
				  "+" === r[0]
					? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
					: (e[r] = e[r] || []).push(n);
			};
		  }
		  function se(e, t, n, r) {
			function i(s) {
			  var u;
			  return (
				(o[s] = !0),
				Ae.each(e[s] || [], function (e, s) {
				  var c = s(t, n, r);
				  return "string" != typeof c || a || o[c]
					? a
					  ? !(u = c)
					  : void 0
					: (t.dataTypes.unshift(c), i(c), !1);
				}),
				u
			  );
			}
			var o = {},
			  a = e === Kt;
			return i(t.dataTypes[0]) || (!o["*"] && i("*"));
		  }
		  function ue(e, t) {
			var n,
			  r,
			  i = Ae.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
			return r && Ae.extend(!0, e, r), e;
		  }
		  function ce(e, t, n) {
			for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
			  u.shift(),
				void 0 === r &&
				  (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r)
			  for (i in s)
				if (s[i] && s[i].test(r)) {
				  u.unshift(i);
				  break;
				}
			if (u[0] in n) o = u[0];
			else {
			  for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
				  o = i;
				  break;
				}
				a || (a = i);
			  }
			  o = o || a;
			}
			if (o) return o !== u[0] && u.unshift(o), n[o];
		  }
		  function le(e, t, n, r) {
			var i,
			  o,
			  a,
			  s,
			  u,
			  c = {},
			  l = e.dataTypes.slice();
			if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
			for (o = l.shift(); o; )
			  if (
				(e.responseFields[o] && (n[e.responseFields[o]] = t),
				!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
				(u = o),
				(o = l.shift()))
			  )
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
				  if (((a = c[u + " " + o] || c["* " + o]), !a))
					for (i in c)
					  if (
						((s = i.split(" ")),
						s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))
					  ) {
						a === !0
						  ? (a = c[i])
						  : c[i] !== !0 && ((o = s[0]), l.unshift(s[1]));
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
						  error: a ? e : "No conversion from " + u + " to " + o,
						};
					  }
				}
			return { state: "success", data: t };
		  }
		  var fe = [],
			pe = Object.getPrototypeOf,
			de = fe.slice,
			he = fe.flat
			  ? function (e) {
				  return fe.flat.call(e);
				}
			  : function (e) {
				  return fe.concat.apply([], e);
				},
			ve = fe.push,
			me = fe.indexOf,
			$e = {},
			ge = $e.toString,
			ye = $e.hasOwnProperty,
			be = ye.toString,
			xe = be.call(Object),
			we = {},
			Ce = function (e) {
			  return (
				"function" == typeof e &&
				"number" != typeof e.nodeType &&
				"function" != typeof e.item
			  );
			},
			Ee = function (e) {
			  return null != e && e === e.window;
			},
			Se = n.document,
			ke = { type: !0, src: !0, nonce: !0, noModule: !0 },
			Te = "3.6.0",
			Ae = function (e, t) {
			  return new Ae.fn.init(e, t);
			};
		  (Ae.fn = Ae.prototype =
			{
			  jquery: Te,
			  constructor: Ae,
			  length: 0,
			  toArray: function () {
				return de.call(this);
			  },
			  get: function (e) {
				return null == e
				  ? de.call(this)
				  : e < 0
				  ? this[e + this.length]
				  : this[e];
			  },
			  pushStack: function (e) {
				var t = Ae.merge(this.constructor(), e);
				return (t.prevObject = this), t;
			  },
			  each: function (e) {
				return Ae.each(this, e);
			  },
			  map: function (e) {
				return this.pushStack(
				  Ae.map(this, function (t, n) {
					return e.call(t, n, t);
				  })
				);
			  },
			  slice: function () {
				return this.pushStack(de.apply(this, arguments));
			  },
			  first: function () {
				return this.eq(0);
			  },
			  last: function () {
				return this.eq(-1);
			  },
			  even: function () {
				return this.pushStack(
				  Ae.grep(this, function (e, t) {
					return (t + 1) % 2;
				  })
				);
			  },
			  odd: function () {
				return this.pushStack(
				  Ae.grep(this, function (e, t) {
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
			  push: ve,
			  sort: fe.sort,
			  splice: fe.splice,
			}),
			(Ae.extend = Ae.fn.extend =
			  function () {
				var e,
				  t,
				  n,
				  r,
				  i,
				  o,
				  a = arguments[0] || {},
				  s = 1,
				  u = arguments.length,
				  c = !1;
				for (
				  "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
					"object" == typeof a || Ce(a) || (a = {}),
					s === u && ((a = this), s--);
				  s < u;
				  s++
				)
				  if (null != (e = arguments[s]))
					for (t in e)
					  (r = e[t]),
						"__proto__" !== t &&
						  a !== r &&
						  (c && r && (Ae.isPlainObject(r) || (i = Array.isArray(r)))
							? ((n = a[t]),
							  (o =
								i && !Array.isArray(n)
								  ? []
								  : i || Ae.isPlainObject(n)
								  ? n
								  : {}),
							  (i = !1),
							  (a[t] = Ae.extend(c, o, r)))
							: void 0 !== r && (a[t] = r));
				return a;
			  }),
			Ae.extend({
			  expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
			  isReady: !0,
			  error: function (e) {
				throw new Error(e);
			  },
			  noop: function () {},
			  isPlainObject: function (e) {
				var t, n;
				return (
				  !(!e || "[object Object]" !== ge.call(e)) &&
				  (!(t = pe(e)) ||
					((n = ye.call(t, "constructor") && t.constructor),
					"function" == typeof n && be.call(n) === xe))
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
				if (u(e))
				  for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
				else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
				return e;
			  },
			  makeArray: function (e, t) {
				var n = t || [];
				return (
				  null != e &&
					(u(Object(e))
					  ? Ae.merge(n, "string" == typeof e ? [e] : e)
					  : ve.call(n, e)),
				  n
				);
			  },
			  inArray: function (e, t, n) {
				return null == t ? -1 : me.call(t, e, n);
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
				if (u(e))
				  for (r = e.length; o < r; o++)
					(i = t(e[o], o, n)), null != i && a.push(i);
				else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
				return he(a);
			  },
			  guid: 1,
			  support: we,
			}),
			"function" == typeof Symbol &&
			  (Ae.fn[Symbol.iterator] = fe[Symbol.iterator]),
			Ae.each(
			  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
				" "
			  ),
			  function (e, t) {
				$e["[object " + t + "]"] = t.toLowerCase();
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
			  function t(e, t, n, r) {
				var i,
				  o,
				  a,
				  s,
				  u,
				  c,
				  l,
				  p = t && t.ownerDocument,
				  h = t ? t.nodeType : 9;
				if (
				  ((n = n || []),
				  "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
				)
				  return n;
				if (!r && (j(t), (t = t || D), V)) {
				  if (11 !== h && (u = ye.exec(e)))
					if ((i = u[1])) {
					  if (9 === h) {
						if (!(a = t.getElementById(i))) return n;
						if (a.id === i) return n.push(a), n;
					  } else if (
						p &&
						(a = p.getElementById(i)) &&
						q(t, a) &&
						a.id === i
					  )
						return n.push(a), n;
					} else {
					  if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
					  if (
						(i = u[3]) &&
						w.getElementsByClassName &&
						t.getElementsByClassName
					  )
						return Q.apply(n, t.getElementsByClassName(i)), n;
					}
				  if (
					w.qsa &&
					!G[e + " "] &&
					(!L || !L.test(e)) &&
					(1 !== h || "object" !== t.nodeName.toLowerCase())
				  ) {
					if (((l = e), (p = t), 1 === h && (fe.test(e) || le.test(e)))) {
					  for (
						p = (be.test(e) && f(t.parentNode)) || t,
						  (p === t && w.scope) ||
							((s = t.getAttribute("id"))
							  ? (s = s.replace(Ce, Ee))
							  : t.setAttribute("id", (s = _))),
						  c = k(e),
						  o = c.length;
						o--;
	
					  )
						c[o] = (s ? "#" + s : ":scope") + " " + d(c[o]);
					  l = c.join(",");
					}
					try {
					  return Q.apply(n, p.querySelectorAll(l)), n;
					} catch (t) {
					  G(e, !0);
					} finally {
					  s === _ && t.removeAttribute("id");
					}
				  }
				}
				return A(e.replace(ue, "$1"), t, n, r);
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
				return (e[_] = !0), e;
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
			  function u(e) {
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
						: t.isDisabled === e || (t.isDisabled !== !e && ke(t) === e)
					  : t.disabled === e
					: "label" in t && t.disabled === e;
				};
			  }
			  function l(e) {
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
			  function f(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e;
			  }
			  function p() {}
			  function d(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r;
			  }
			  function h(e, t, n) {
				var r = t.dir,
				  i = t.next,
				  o = i || r,
				  a = n && "parentNode" === o,
				  s = F++;
				return t.first
				  ? function (t, n, i) {
					  for (; (t = t[r]); )
						if (1 === t.nodeType || a) return e(t, n, i);
					  return !1;
					}
				  : function (t, n, u) {
					  var c,
						l,
						f,
						p = [U, s];
					  if (u) {
						for (; (t = t[r]); )
						  if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
					  } else
						for (; (t = t[r]); )
						  if (1 === t.nodeType || a)
							if (
							  ((f = t[_] || (t[_] = {})),
							  (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
							  i && i === t.nodeName.toLowerCase())
							)
							  t = t[r] || t;
							else {
							  if ((c = l[o]) && c[0] === U && c[1] === s)
								return (p[2] = c[2]);
							  if (((l[o] = p), (p[2] = e(t, n, u)))) return !0;
							}
					  return !1;
					};
			  }
			  function v(e) {
				return e.length > 1
				  ? function (t, n, r) {
					  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
					  return !0;
					}
				  : e[0];
			  }
			  function m(e, n, r) {
				for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
				return r;
			  }
			  function $(e, t, n, r, i) {
				for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
				  (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
				return a;
			  }
			  function g(e, t, n, i, o, a) {
				return (
				  i && !i[_] && (i = g(i)),
				  o && !o[_] && (o = g(o, a)),
				  r(function (r, a, s, u) {
					var c,
					  l,
					  f,
					  p = [],
					  d = [],
					  h = a.length,
					  v = r || m(t || "*", s.nodeType ? [s] : s, []),
					  g = !e || (!r && t) ? v : $(v, p, e, s, u),
					  y = n ? (o || (r ? e : h || i) ? [] : a) : g;
					if ((n && n(g, y, s, u), i))
					  for (c = $(y, d), i(c, [], s, u), l = c.length; l--; )
						(f = c[l]) && (y[d[l]] = !(g[d[l]] = f));
					if (r) {
					  if (o || e) {
						if (o) {
						  for (c = [], l = y.length; l--; )
							(f = y[l]) && c.push((g[l] = f));
						  o(null, (y = []), c, u);
						}
						for (l = y.length; l--; )
						  (f = y[l]) &&
							(c = o ? te(r, f) : p[l]) > -1 &&
							(r[c] = !(a[c] = f));
					  }
					} else (y = $(y === a ? y.splice(h, y.length) : y)), o ? o(null, a, y, u) : Q.apply(a, y);
				  })
				);
			  }
			  function y(e) {
				for (
				  var t,
					n,
					r,
					i = e.length,
					o = C.relative[e[0].type],
					a = o || C.relative[" "],
					s = o ? 1 : 0,
					u = h(
					  function (e) {
						return e === t;
					  },
					  a,
					  !0
					),
					c = h(
					  function (e) {
						return te(t, e) > -1;
					  },
					  a,
					  !0
					),
					l = [
					  function (e, n, r) {
						var i =
						  (!o && (r || n !== O)) ||
						  ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
						return (t = null), i;
					  },
					];
				  s < i;
				  s++
				)
				  if ((n = C.relative[e[s].type])) l = [h(v(l), n)];
				  else {
					if (
					  ((n = C.filter[e[s].type].apply(null, e[s].matches)), n[_])
					) {
					  for (r = ++s; r < i && !C.relative[e[r].type]; r++);
					  return g(
						s > 1 && v(l),
						s > 1 &&
						  d(
							e
							  .slice(0, s - 1)
							  .concat({ value: " " === e[s - 2].type ? "*" : "" })
						  ).replace(ue, "$1"),
						n,
						s < r && y(e.slice(s, r)),
						r < i && y((e = e.slice(r))),
						r < i && d(e)
					  );
					}
					l.push(n);
				  }
				return v(l);
			  }
			  function b(e, n) {
				var i = n.length > 0,
				  o = e.length > 0,
				  a = function (r, a, s, u, c) {
					var l,
					  f,
					  p,
					  d = 0,
					  h = "0",
					  v = r && [],
					  m = [],
					  g = O,
					  y = r || (o && C.find.TAG("*", c)),
					  b = (U += null == g ? 1 : Math.random() || 0.1),
					  x = y.length;
					for (
					  c && (O = a == D || a || c);
					  h !== x && null != (l = y[h]);
					  h++
					) {
					  if (o && l) {
						for (
						  f = 0, a || l.ownerDocument == D || (j(l), (s = !V));
						  (p = e[f++]);
	
						)
						  if (p(l, a || D, s)) {
							u.push(l);
							break;
						  }
						c && (U = b);
					  }
					  i && ((l = !p && l) && d--, r && v.push(l));
					}
					if (((d += h), i && h !== d)) {
					  for (f = 0; (p = n[f++]); ) p(v, m, a, s);
					  if (r) {
						if (d > 0) for (; h--; ) v[h] || m[h] || (m[h] = Y.call(u));
						m = $(m);
					  }
					  Q.apply(u, m),
						c &&
						  !r &&
						  m.length > 0 &&
						  d + n.length > 1 &&
						  t.uniqueSort(u);
					}
					return c && ((U = b), (O = g)), v;
				  };
				return i ? r(a) : a;
			  }
			  var x,
				w,
				C,
				E,
				S,
				k,
				T,
				A,
				O,
				N,
				M,
				j,
				D,
				P,
				V,
				L,
				I,
				R,
				q,
				_ = "sizzle" + 1 * new Date(),
				H = e.document,
				U = 0,
				F = 0,
				B = n(),
				W = n(),
				z = n(),
				G = n(),
				X = function (e, t) {
				  return e === t && (M = !0), 0;
				},
				J = {}.hasOwnProperty,
				K = [],
				Y = K.pop,
				Z = K.push,
				Q = K.push,
				ee = K.slice,
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
				ue = new RegExp(
				  "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
				  "g"
				),
				ce = new RegExp("^" + re + "*," + re + "*"),
				le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
				fe = new RegExp(re + "|>"),
				pe = new RegExp(ae),
				de = new RegExp("^" + ie + "$"),
				he = {
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
				ve = /HTML$/i,
				me = /^(?:input|select|textarea|button)$/i,
				$e = /^h\d$/i,
				ge = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				be = /[+~]/,
				xe = new RegExp(
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
				Ee = function (e, t) {
				  return t
					? "\0" === e
					  ? "�"
					  : e.slice(0, -1) +
						"\\" +
						e.charCodeAt(e.length - 1).toString(16) +
						" "
					: "\\" + e;
				},
				Se = function () {
				  j();
				},
				ke = h(
				  function (e) {
					return (
					  e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
					);
				  },
				  { dir: "parentNode", next: "legend" }
				);
			  try {
				Q.apply((K = ee.call(H.childNodes)), H.childNodes),
				  K[H.childNodes.length].nodeType;
			  } catch (e) {
				Q = {
				  apply: K.length
					? function (e, t) {
						Z.apply(e, ee.call(t));
					  }
					: function (e, t) {
						for (var n = e.length, r = 0; (e[n++] = t[r++]); );
						e.length = n - 1;
					  },
				};
			  }
			  (w = t.support = {}),
				(S = t.isXML =
				  function (e) {
					var t = e && e.namespaceURI,
					  n = e && (e.ownerDocument || e).documentElement;
					return !ve.test(t || (n && n.nodeName) || "HTML");
				  }),
				(j = t.setDocument =
				  function (e) {
					var t,
					  n,
					  r = e ? e.ownerDocument || e : H;
					return r != D && 9 === r.nodeType && r.documentElement
					  ? ((D = r),
						(P = D.documentElement),
						(V = !S(D)),
						H != D &&
						  (n = D.defaultView) &&
						  n.top !== n &&
						  (n.addEventListener
							? n.addEventListener("unload", Se, !1)
							: n.attachEvent && n.attachEvent("onunload", Se)),
						(w.scope = i(function (e) {
						  return (
							P.appendChild(e).appendChild(D.createElement("div")),
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
						(w.getElementsByClassName = ge.test(
						  D.getElementsByClassName
						)),
						(w.getById = i(function (e) {
						  return (
							(P.appendChild(e).id = _),
							!D.getElementsByName || !D.getElementsByName(_).length
						  );
						})),
						w.getById
						  ? ((C.filter.ID = function (e) {
							  var t = e.replace(xe, we);
							  return function (e) {
								return e.getAttribute("id") === t;
							  };
							}),
							(C.find.ID = function (e, t) {
							  if ("undefined" != typeof t.getElementById && V) {
								var n = t.getElementById(e);
								return n ? [n] : [];
							  }
							}))
						  : ((C.filter.ID = function (e) {
							  var t = e.replace(xe, we);
							  return function (e) {
								var n =
								  "undefined" != typeof e.getAttributeNode &&
								  e.getAttributeNode("id");
								return n && n.value === t;
							  };
							}),
							(C.find.ID = function (e, t) {
							  if ("undefined" != typeof t.getElementById && V) {
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
							if ("undefined" != typeof t.getElementsByClassName && V)
							  return t.getElementsByClassName(e);
						  }),
						(I = []),
						(L = []),
						(w.qsa = ge.test(D.querySelectorAll)) &&
						  (i(function (e) {
							var t;
							(P.appendChild(e).innerHTML =
							  "<a id='" +
							  _ +
							  "'></a><select id='" +
							  _ +
							  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
							  e.querySelectorAll("[msallowcapture^='']").length &&
								L.push("[*^$]=" + re + "*(?:''|\"\")"),
							  e.querySelectorAll("[selected]").length ||
								L.push("\\[" + re + "*(?:value|" + ne + ")"),
							  e.querySelectorAll("[id~=" + _ + "-]").length ||
								L.push("~="),
							  (t = D.createElement("input")),
							  t.setAttribute("name", ""),
							  e.appendChild(t),
							  e.querySelectorAll("[name='']").length ||
								L.push(
								  "\\[" +
									re +
									"*name" +
									re +
									"*=" +
									re +
									"*(?:''|\"\")"
								),
							  e.querySelectorAll(":checked").length ||
								L.push(":checked"),
							  e.querySelectorAll("a#" + _ + "+*").length ||
								L.push(".#.+[+~]"),
							  e.querySelectorAll("\\\f"),
							  L.push("[\\r\\n\\f]");
						  }),
						  i(function (e) {
							e.innerHTML =
							  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = D.createElement("input");
							t.setAttribute("type", "hidden"),
							  e.appendChild(t).setAttribute("name", "D"),
							  e.querySelectorAll("[name=d]").length &&
								L.push("name" + re + "*[*^$|!~]?="),
							  2 !== e.querySelectorAll(":enabled").length &&
								L.push(":enabled", ":disabled"),
							  (P.appendChild(e).disabled = !0),
							  2 !== e.querySelectorAll(":disabled").length &&
								L.push(":enabled", ":disabled"),
							  e.querySelectorAll("*,:x"),
							  L.push(",.*:");
						  })),
						(w.matchesSelector = ge.test(
						  (R =
							P.matches ||
							P.webkitMatchesSelector ||
							P.mozMatchesSelector ||
							P.oMatchesSelector ||
							P.msMatchesSelector)
						)) &&
						  i(function (e) {
							(w.disconnectedMatch = R.call(e, "*")),
							  R.call(e, "[s!='']:x"),
							  I.push("!=", ae);
						  }),
						(L = L.length && new RegExp(L.join("|"))),
						(I = I.length && new RegExp(I.join("|"))),
						(t = ge.test(P.compareDocumentPosition)),
						(q =
						  t || ge.test(P.contains)
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
						(X = t
						  ? function (e, t) {
							  if (e === t) return (M = !0), 0;
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
									? e == D || (e.ownerDocument == H && q(H, e))
									  ? -1
									  : t == D || (t.ownerDocument == H && q(H, t))
									  ? 1
									  : N
									  ? te(N, e) - te(N, t)
									  : 0
									: 4 & n
									? -1
									: 1);
							}
						  : function (e, t) {
							  if (e === t) return (M = !0), 0;
							  var n,
								r = 0,
								i = e.parentNode,
								o = t.parentNode,
								s = [e],
								u = [t];
							  if (!i || !o)
								return e == D
								  ? -1
								  : t == D
								  ? 1
								  : i
								  ? -1
								  : o
								  ? 1
								  : N
								  ? te(N, e) - te(N, t)
								  : 0;
							  if (i === o) return a(e, t);
							  for (n = e; (n = n.parentNode); ) s.unshift(n);
							  for (n = t; (n = n.parentNode); ) u.unshift(n);
							  for (; s[r] === u[r]; ) r++;
							  return r
								? a(s[r], u[r])
								: s[r] == H
								? -1
								: u[r] == H
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
					(j(e),
					w.matchesSelector &&
					  V &&
					  !G[n + " "] &&
					  (!I || !I.test(n)) &&
					  (!L || !L.test(n)))
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
					  G(n, !0);
					}
				  return t(n, D, null, [e]).length > 0;
				}),
				(t.contains = function (e, t) {
				  return (e.ownerDocument || e) != D && j(e), q(e, t);
				}),
				(t.attr = function (e, t) {
				  (e.ownerDocument || e) != D && j(e);
				  var n = C.attrHandle[t.toLowerCase()],
					r =
					  n && J.call(C.attrHandle, t.toLowerCase())
						? n(e, t, !V)
						: void 0;
				  return void 0 !== r
					? r
					: w.attributes || !V
					? e.getAttribute(t)
					: (r = e.getAttributeNode(t)) && r.specified
					? r.value
					: null;
				}),
				(t.escape = function (e) {
				  return (e + "").replace(Ce, Ee);
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
					((M = !w.detectDuplicates),
					(N = !w.sortStable && e.slice(0)),
					e.sort(X),
					M)
				  ) {
					for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
					for (; r--; ) e.splice(n[r], 1);
				  }
				  return (N = null), e;
				}),
				(E = t.getText =
				  function (e) {
					var t,
					  n = "",
					  r = 0,
					  i = e.nodeType;
					if (i) {
					  if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
					  } else if (3 === i || 4 === i) return e.nodeValue;
					} else for (; (t = e[r++]); ) n += E(t);
					return n;
				  }),
				(C = t.selectors =
				  {
					cacheLength: 50,
					createPseudo: r,
					match: he,
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
						  (e[1] = e[1].replace(xe, we)),
						  (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we)),
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
						return he.CHILD.test(e[0])
						  ? null
						  : (e[3]
							  ? (e[2] = e[4] || e[5] || "")
							  : n &&
								pe.test(n) &&
								(t = k(n, !0)) &&
								(t = n.indexOf(")", n.length - t) - n.length) &&
								((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
							e.slice(0, 3));
					  },
					},
					filter: {
					  TAG: function (e) {
						var t = e.replace(xe, we).toLowerCase();
						return "*" === e
						  ? function () {
							  return !0;
							}
						  : function (e) {
							  return e.nodeName && e.nodeName.toLowerCase() === t;
							};
					  },
					  CLASS: function (e) {
						var t = B[e + " "];
						return (
						  t ||
						  ((t = new RegExp(
							"(^|" + re + ")" + e + "(" + re + "|$)"
						  )) &&
							B(e, function (e) {
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
						  : function (t, n, u) {
							  var c,
								l,
								f,
								p,
								d,
								h,
								v = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								$ = s && t.nodeName.toLowerCase(),
								g = !u && !s,
								y = !1;
							  if (m) {
								if (o) {
								  for (; v; ) {
									for (p = t; (p = p[v]); )
									  if (
										s
										  ? p.nodeName.toLowerCase() === $
										  : 1 === p.nodeType
									  )
										return !1;
									h = v = "only" === e && !h && "nextSibling";
								  }
								  return !0;
								}
								if (
								  ((h = [a ? m.firstChild : m.lastChild]), a && g)
								) {
								  for (
									p = m,
									  f = p[_] || (p[_] = {}),
									  l = f[p.uniqueID] || (f[p.uniqueID] = {}),
									  c = l[e] || [],
									  d = c[0] === U && c[1],
									  y = d && c[2],
									  p = d && m.childNodes[d];
									(p =
									  (++d && p && p[v]) || (y = d = 0) || h.pop());
	
								  )
									if (1 === p.nodeType && ++y && p === t) {
									  l[e] = [U, d, y];
									  break;
									}
								} else if (
								  (g &&
									((p = t),
									(f = p[_] || (p[_] = {})),
									(l = f[p.uniqueID] || (f[p.uniqueID] = {})),
									(c = l[e] || []),
									(d = c[0] === U && c[1]),
									(y = d)),
								  y === !1)
								)
								  for (
									;
									(p =
									  (++d && p && p[v]) ||
									  (y = d = 0) ||
									  h.pop()) &&
									((s
									  ? p.nodeName.toLowerCase() !== $
									  : 1 !== p.nodeType) ||
									  !++y ||
									  (g &&
										((f = p[_] || (p[_] = {})),
										(l = f[p.uniqueID] || (f[p.uniqueID] = {})),
										(l[e] = [U, y])),
									  p !== t));
	
								  );
								return (
								  (y -= i), y === r || (y % r === 0 && y / r >= 0)
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
						return o[_]
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
						  i = T(e.replace(ue, "$1"));
						return i[_]
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
						  (e = e.replace(xe, we)),
						  function (t) {
							return (t.textContent || E(t)).indexOf(e) > -1;
						  }
						);
					  }),
					  lang: r(function (e) {
						return (
						  de.test(e || "") || t.error("unsupported lang: " + e),
						  (e = e.replace(xe, we).toLowerCase()),
						  function (t) {
							var n;
							do
							  if (
								(n = V
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
						return e === P;
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
						return $e.test(e.nodeName);
					  },
					  input: function (e) {
						return me.test(e.nodeName);
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
					  first: l(function () {
						return [0];
					  }),
					  last: l(function (e, t) {
						return [t - 1];
					  }),
					  eq: l(function (e, t, n) {
						return [n < 0 ? n + t : n];
					  }),
					  even: l(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					  }),
					  odd: l(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					  }),
					  lt: l(function (e, t, n) {
						for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
						  e.push(r);
						return e;
					  }),
					  gt: l(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
						return e;
					  }),
					},
				  }),
				(C.pseudos.nth = C.pseudos.eq);
			  for (x in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0,
			  })
				C.pseudos[x] = s(x);
			  for (x in { submit: !0, reset: !0 }) C.pseudos[x] = u(x);
			  return (
				(p.prototype = C.filters = C.pseudos),
				(C.setFilters = new p()),
				(k = t.tokenize =
				  function (e, n) {
					var r,
					  i,
					  o,
					  a,
					  s,
					  u,
					  c,
					  l = W[e + " "];
					if (l) return n ? 0 : l.slice(0);
					for (s = e, u = [], c = C.preFilter; s; ) {
					  (r && !(i = ce.exec(s))) ||
						(i && (s = s.slice(i[0].length) || s), u.push((o = []))),
						(r = !1),
						(i = le.exec(s)) &&
						  ((r = i.shift()),
						  o.push({ value: r, type: i[0].replace(ue, " ") }),
						  (s = s.slice(r.length)));
					  for (a in C.filter)
						!(i = he[a].exec(s)) ||
						  (c[a] && !(i = c[a](i))) ||
						  ((r = i.shift()),
						  o.push({ value: r, type: a, matches: i }),
						  (s = s.slice(r.length)));
					  if (!r) break;
					}
					return n ? s.length : s ? t.error(e) : W(e, u).slice(0);
				  }),
				(T = t.compile =
				  function (e, t) {
					var n,
					  r = [],
					  i = [],
					  o = z[e + " "];
					if (!o) {
					  for (t || (t = k(e)), n = t.length; n--; )
						(o = y(t[n])), o[_] ? r.push(o) : i.push(o);
					  (o = z(e, b(i, r))), (o.selector = e);
					}
					return o;
				  }),
				(A = t.select =
				  function (e, t, n, r) {
					var i,
					  o,
					  a,
					  s,
					  u,
					  c = "function" == typeof e && e,
					  l = !r && k((e = c.selector || e));
					if (((n = n || []), 1 === l.length)) {
					  if (
						((o = l[0] = l[0].slice(0)),
						o.length > 2 &&
						  "ID" === (a = o[0]).type &&
						  9 === t.nodeType &&
						  V &&
						  C.relative[o[1].type])
					  ) {
						if (
						  ((t = (C.find.ID(a.matches[0].replace(xe, we), t) ||
							[])[0]),
						  !t)
						)
						  return n;
						c && (t = t.parentNode),
						  (e = e.slice(o.shift().value.length));
					  }
					  for (
						i = he.needsContext.test(e) ? 0 : o.length;
						i-- && ((a = o[i]), !C.relative[(s = a.type)]);
	
					  )
						if (
						  (u = C.find[s]) &&
						  (r = u(
							a.matches[0].replace(xe, we),
							(be.test(o[0].type) && f(t.parentNode)) || t
						  ))
						) {
						  if ((o.splice(i, 1), (e = r.length && d(o)), !e))
							return Q.apply(n, r), n;
						  break;
						}
					}
					return (
					  (c || T(e, l))(
						r,
						t,
						!V,
						n,
						!t || (be.test(e) && f(t.parentNode)) || t
					  ),
					  n
					);
				  }),
				(w.sortStable = _.split("").sort(X).join("") === _),
				(w.detectDuplicates = !!M),
				j(),
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
		  (Ae.find = Oe),
			(Ae.expr = Oe.selectors),
			(Ae.expr[":"] = Ae.expr.pseudos),
			(Ae.uniqueSort = Ae.unique = Oe.uniqueSort),
			(Ae.text = Oe.getText),
			(Ae.isXMLDoc = Oe.isXML),
			(Ae.contains = Oe.contains),
			(Ae.escapeSelector = Oe.escape);
		  var Ne = function (e, t, n) {
			  for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
				  if (i && Ae(e).is(n)) break;
				  r.push(e);
				}
			  return r;
			},
			Me = function (e, t) {
			  for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			  return n;
			},
			je = Ae.expr.match.needsContext,
			De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		  (Ae.filter = function (e, t, n) {
			var r = t[0];
			return (
			  n && (e = ":not(" + e + ")"),
			  1 === t.length && 1 === r.nodeType
				? Ae.find.matchesSelector(r, e)
				  ? [r]
				  : []
				: Ae.find.matches(
					e,
					Ae.grep(t, function (e) {
					  return 1 === e.nodeType;
					})
				  )
			);
		  }),
			Ae.fn.extend({
			  find: function (e) {
				var t,
				  n,
				  r = this.length,
				  i = this;
				if ("string" != typeof e)
				  return this.pushStack(
					Ae(e).filter(function () {
					  for (t = 0; t < r; t++)
						if (Ae.contains(i[t], this)) return !0;
					})
				  );
				for (n = this.pushStack([]), t = 0; t < r; t++) Ae.find(e, i[t], n);
				return r > 1 ? Ae.uniqueSort(n) : n;
			  },
			  filter: function (e) {
				return this.pushStack(l(this, e || [], !1));
			  },
			  not: function (e) {
				return this.pushStack(l(this, e || [], !0));
			  },
			  is: function (e) {
				return !!l(
				  this,
				  "string" == typeof e && je.test(e) ? Ae(e) : e || [],
				  !1
				).length;
			  },
			});
		  var Pe,
			Ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
			Le = (Ae.fn.init = function (e, t, n) {
			  var r, i;
			  if (!e) return this;
			  if (((n = n || Pe), "string" == typeof e)) {
				if (
				  ((r =
					"<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
					  ? [null, e, null]
					  : Ve.exec(e)),
				  !r || (!r[1] && t))
				)
				  return !t || t.jquery
					? (t || n).find(e)
					: this.constructor(t).find(e);
				if (r[1]) {
				  if (
					((t = t instanceof Ae ? t[0] : t),
					Ae.merge(
					  this,
					  Ae.parseHTML(
						r[1],
						t && t.nodeType ? t.ownerDocument || t : Se,
						!0
					  )
					),
					De.test(r[1]) && Ae.isPlainObject(t))
				  )
					for (r in t) Ce(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				  return this;
				}
				return (
				  (i = Se.getElementById(r[2])),
				  i && ((this[0] = i), (this.length = 1)),
				  this
				);
			  }
			  return e.nodeType
				? ((this[0] = e), (this.length = 1), this)
				: Ce(e)
				? void 0 !== n.ready
				  ? n.ready(e)
				  : e(Ae)
				: Ae.makeArray(e, this);
			});
		  (Le.prototype = Ae.fn), (Pe = Ae(Se));
		  var Ie = /^(?:parents|prev(?:Until|All))/,
			Re = { children: !0, contents: !0, next: !0, prev: !0 };
		  Ae.fn.extend({
			has: function (e) {
			  var t = Ae(e, this),
				n = t.length;
			  return this.filter(function () {
				for (var e = 0; e < n; e++) if (Ae.contains(this, t[e])) return !0;
			  });
			},
			closest: function (e, t) {
			  var n,
				r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && Ae(e);
			  if (!je.test(e))
				for (; r < i; r++)
				  for (n = this[r]; n && n !== t; n = n.parentNode)
					if (
					  n.nodeType < 11 &&
					  (a
						? a.index(n) > -1
						: 1 === n.nodeType && Ae.find.matchesSelector(n, e))
					) {
					  o.push(n);
					  break;
					}
			  return this.pushStack(o.length > 1 ? Ae.uniqueSort(o) : o);
			},
			index: function (e) {
			  return e
				? "string" == typeof e
				  ? me.call(Ae(e), this[0])
				  : me.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
			},
			add: function (e, t) {
			  return this.pushStack(Ae.uniqueSort(Ae.merge(this.get(), Ae(e, t))));
			},
			addBack: function (e) {
			  return this.add(
				null == e ? this.prevObject : this.prevObject.filter(e)
			  );
			},
		  }),
			Ae.each(
			  {
				parent: function (e) {
				  var t = e.parentNode;
				  return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
				  return Ne(e, "parentNode");
				},
				parentsUntil: function (e, t, n) {
				  return Ne(e, "parentNode", n);
				},
				next: function (e) {
				  return f(e, "nextSibling");
				},
				prev: function (e) {
				  return f(e, "previousSibling");
				},
				nextAll: function (e) {
				  return Ne(e, "nextSibling");
				},
				prevAll: function (e) {
				  return Ne(e, "previousSibling");
				},
				nextUntil: function (e, t, n) {
				  return Ne(e, "nextSibling", n);
				},
				prevUntil: function (e, t, n) {
				  return Ne(e, "previousSibling", n);
				},
				siblings: function (e) {
				  return Me((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
				  return Me(e.firstChild);
				},
				contents: function (e) {
				  return null != e.contentDocument && pe(e.contentDocument)
					? e.contentDocument
					: (c(e, "template") && (e = e.content || e),
					  Ae.merge([], e.childNodes));
				},
			  },
			  function (e, t) {
				Ae.fn[e] = function (n, r) {
				  var i = Ae.map(this, t, n);
				  return (
					"Until" !== e.slice(-5) && (r = n),
					r && "string" == typeof r && (i = Ae.filter(r, i)),
					this.length > 1 &&
					  (Re[e] || Ae.uniqueSort(i), Ie.test(e) && i.reverse()),
					this.pushStack(i)
				  );
				};
			  }
			);
		  var qe = /[^\x20\t\r\n\f]+/g;
		  (Ae.Callbacks = function (e) {
			e = "string" == typeof e ? p(e) : Ae.extend({}, e);
			var t,
			  n,
			  r,
			  i,
			  o = [],
			  a = [],
			  u = -1,
			  c = function () {
				for (i = i || e.once, r = t = !0; a.length; u = -1)
				  for (n = a.shift(); ++u < o.length; )
					o[u].apply(n[0], n[1]) === !1 &&
					  e.stopOnFalse &&
					  ((u = o.length), (n = !1));
				e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
			  },
			  l = {
				add: function () {
				  return (
					o &&
					  (n && !t && ((u = o.length - 1), a.push(n)),
					  (function t(n) {
						Ae.each(n, function (n, r) {
						  Ce(r)
							? (e.unique && l.has(r)) || o.push(r)
							: r && r.length && "string" !== s(r) && t(r);
						});
					  })(arguments),
					  n && !t && c()),
					this
				  );
				},
				remove: function () {
				  return (
					Ae.each(arguments, function (e, t) {
					  for (var n; (n = Ae.inArray(t, o, n)) > -1; )
						o.splice(n, 1), n <= u && u--;
					}),
					this
				  );
				},
				has: function (e) {
				  return e ? Ae.inArray(e, o) > -1 : o.length > 0;
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
				  return l.fireWith(this, arguments), this;
				},
				fired: function () {
				  return !!r;
				},
			  };
			return l;
		  }),
			Ae.extend({
			  Deferred: function (e) {
				var t = [
					[
					  "notify",
					  "progress",
					  Ae.Callbacks("memory"),
					  Ae.Callbacks("memory"),
					  2,
					],
					[
					  "resolve",
					  "done",
					  Ae.Callbacks("once memory"),
					  Ae.Callbacks("once memory"),
					  0,
					  "resolved",
					],
					[
					  "reject",
					  "fail",
					  Ae.Callbacks("once memory"),
					  Ae.Callbacks("once memory"),
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
					  return Ae.Deferred(function (n) {
						Ae.each(t, function (t, r) {
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
					  }).promise();
					},
					then: function (e, r, i) {
					  function o(e, t, r, i) {
						return function () {
						  var s = this,
							u = arguments,
							c = function () {
							  var n, c;
							  if (!(e < a)) {
								if (((n = r.apply(s, u)), n === t.promise()))
								  throw new TypeError("Thenable self-resolution");
								(c =
								  n &&
								  ("object" == typeof n ||
									"function" == typeof n) &&
								  n.then),
								  Ce(c)
									? i
									  ? c.call(n, o(a, t, d, i), o(a, t, h, i))
									  : (a++,
										c.call(
										  n,
										  o(a, t, d, i),
										  o(a, t, h, i),
										  o(a, t, d, t.notifyWith)
										))
									: (r !== d && ((s = void 0), (u = [n])),
									  (i || t.resolveWith)(s, u));
							  }
							},
							l = i
							  ? c
							  : function () {
								  try {
									c();
								  } catch (n) {
									Ae.Deferred.exceptionHook &&
									  Ae.Deferred.exceptionHook(n, l.stackTrace),
									  e + 1 >= a &&
										(r !== h && ((s = void 0), (u = [n])),
										t.rejectWith(s, u));
								  }
								};
						  e
							? l()
							: (Ae.Deferred.getStackHook &&
								(l.stackTrace = Ae.Deferred.getStackHook()),
							  n.setTimeout(l));
						};
					  }
					  var a = 0;
					  return Ae.Deferred(function (n) {
						t[0][3].add(o(0, n, Ce(i) ? i : d, n.notifyWith)),
						  t[1][3].add(o(0, n, Ce(e) ? e : d)),
						  t[2][3].add(o(0, n, Ce(r) ? r : h));
					  }).promise();
					},
					promise: function (e) {
					  return null != e ? Ae.extend(e, i) : i;
					},
				  },
				  o = {};
				return (
				  Ae.each(t, function (e, n) {
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
				  i = de.call(arguments),
				  o = Ae.Deferred(),
				  a = function (e) {
					return function (n) {
					  (r[e] = this),
						(i[e] = arguments.length > 1 ? de.call(arguments) : n),
						--t || o.resolveWith(r, i);
					};
				  };
				if (
				  t <= 1 &&
				  (v(e, o.done(a(n)).resolve, o.reject, !t),
				  "pending" === o.state() || Ce(i[n] && i[n].then))
				)
				  return o.then();
				for (; n--; ) v(i[n], a(n), o.reject);
				return o.promise();
			  },
			});
		  var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		  (Ae.Deferred.exceptionHook = function (e, t) {
			n.console &&
			  n.console.warn &&
			  e &&
			  _e.test(e.name) &&
			  n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
		  }),
			(Ae.readyException = function (e) {
			  n.setTimeout(function () {
				throw e;
			  });
			});
		  var He = Ae.Deferred();
		  (Ae.fn.ready = function (e) {
			return (
			  He.then(e).catch(function (e) {
				Ae.readyException(e);
			  }),
			  this
			);
		  }),
			Ae.extend({
			  isReady: !1,
			  readyWait: 1,
			  ready: function (e) {
				(e === !0 ? --Ae.readyWait : Ae.isReady) ||
				  ((Ae.isReady = !0),
				  (e !== !0 && --Ae.readyWait > 0) || He.resolveWith(Se, [Ae]));
			  },
			}),
			(Ae.ready.then = He.then),
			"complete" === Se.readyState ||
			("loading" !== Se.readyState && !Se.documentElement.doScroll)
			  ? n.setTimeout(Ae.ready)
			  : (Se.addEventListener("DOMContentLoaded", m),
				n.addEventListener("load", m));
		  var Ue = function (e, t, n, r, i, o, a) {
			  var u = 0,
				c = e.length,
				l = null == n;
			  if ("object" === s(n)) {
				i = !0;
				for (u in n) Ue(e, t, u, n[u], !0, o, a);
			  } else if (
				void 0 !== r &&
				((i = !0),
				Ce(r) || (a = !0),
				l &&
				  (a
					? (t.call(e, r), (t = null))
					: ((l = t),
					  (t = function (e, t, n) {
						return l.call(Ae(e), n);
					  }))),
				t)
			  )
				for (; u < c; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
			  return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
			},
			Fe = /^-ms-/,
			Be = /-([a-z])/g,
			We = function (e) {
			  return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
			};
		  (y.uid = 1),
			(y.prototype = {
			  cache: function (e) {
				var t = e[this.expando];
				return (
				  t ||
					((t = {}),
					We(e) &&
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
				if ("string" == typeof t) i[g(t)] = n;
				else for (r in t) i[g(r)] = t[r];
				return i;
			  },
			  get: function (e, t) {
				return void 0 === t
				  ? this.cache(e)
				  : e[this.expando] && e[this.expando][g(t)];
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
					  ? (t = t.map(g))
					  : ((t = g(t)), (t = t in r ? [t] : t.match(qe) || [])),
					  (n = t.length);
					for (; n--; ) delete r[t[n]];
				  }
				  (void 0 === t || Ae.isEmptyObject(r)) &&
					(e.nodeType
					  ? (e[this.expando] = void 0)
					  : delete e[this.expando]);
				}
			  },
			  hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !Ae.isEmptyObject(t);
			  },
			});
		  var ze = new y(),
			Ge = new y(),
			Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Je = /[A-Z]/g;
		  Ae.extend({
			hasData: function (e) {
			  return Ge.hasData(e) || ze.hasData(e);
			},
			data: function (e, t, n) {
			  return Ge.access(e, t, n);
			},
			removeData: function (e, t) {
			  Ge.remove(e, t);
			},
			_data: function (e, t, n) {
			  return ze.access(e, t, n);
			},
			_removeData: function (e, t) {
			  ze.remove(e, t);
			},
		  }),
			Ae.fn.extend({
			  data: function (e, t) {
				var n,
				  r,
				  i,
				  o = this[0],
				  a = o && o.attributes;
				if (void 0 === e) {
				  if (
					this.length &&
					((i = Ge.get(o)),
					1 === o.nodeType && !ze.get(o, "hasDataAttrs"))
				  ) {
					for (n = a.length; n--; )
					  a[n] &&
						((r = a[n].name),
						0 === r.indexOf("data-") &&
						  ((r = g(r.slice(5))), x(o, r, i[r])));
					ze.set(o, "hasDataAttrs", !0);
				  }
				  return i;
				}
				return "object" == typeof e
				  ? this.each(function () {
					  Ge.set(this, e);
					})
				  : Ue(
					  this,
					  function (t) {
						var n;
						if (o && void 0 === t) {
						  if (((n = Ge.get(o, e)), void 0 !== n)) return n;
						  if (((n = x(o, e)), void 0 !== n)) return n;
						} else
						  this.each(function () {
							Ge.set(this, e, t);
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
				  Ge.remove(this, e);
				});
			  },
			}),
			Ae.extend({
			  queue: function (e, t, n) {
				var r;
				if (e)
				  return (
					(t = (t || "fx") + "queue"),
					(r = ze.get(e, t)),
					n &&
					  (!r || Array.isArray(n)
						? (r = ze.access(e, t, Ae.makeArray(n)))
						: r.push(n)),
					r || []
				  );
			  },
			  dequeue: function (e, t) {
				t = t || "fx";
				var n = Ae.queue(e, t),
				  r = n.length,
				  i = n.shift(),
				  o = Ae._queueHooks(e, t),
				  a = function () {
					Ae.dequeue(e, t);
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
				  ze.get(e, n) ||
				  ze.access(e, n, {
					empty: Ae.Callbacks("once memory").add(function () {
					  ze.remove(e, [t + "queue", n]);
					}),
				  })
				);
			  },
			}),
			Ae.fn.extend({
			  queue: function (e, t) {
				var n = 2;
				return (
				  "string" != typeof e && ((t = e), (e = "fx"), n--),
				  arguments.length < n
					? Ae.queue(this[0], e)
					: void 0 === t
					? this
					: this.each(function () {
						var n = Ae.queue(this, e, t);
						Ae._queueHooks(this, e),
						  "fx" === e &&
							"inprogress" !== n[0] &&
							Ae.dequeue(this, e);
					  })
				);
			  },
			  dequeue: function (e) {
				return this.each(function () {
				  Ae.dequeue(this, e);
				});
			  },
			  clearQueue: function (e) {
				return this.queue(e || "fx", []);
			  },
			  promise: function (e, t) {
				var n,
				  r = 1,
				  i = Ae.Deferred(),
				  o = this,
				  a = this.length,
				  s = function () {
					--r || i.resolveWith(o, [o]);
				  };
				for (
				  "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
				  a--;
	
				)
				  (n = ze.get(o[a], e + "queueHooks")),
					n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t);
			  },
			});
		  var Ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ye = new RegExp("^(?:([+-])=|)(" + Ke + ")([a-z%]*)$", "i"),
			Ze = ["Top", "Right", "Bottom", "Left"],
			Qe = Se.documentElement,
			et = function (e) {
			  return Ae.contains(e.ownerDocument, e);
			},
			tt = { composed: !0 };
		  Qe.getRootNode &&
			(et = function (e) {
			  return (
				Ae.contains(e.ownerDocument, e) ||
				e.getRootNode(tt) === e.ownerDocument
			  );
			});
		  var nt = function (e, t) {
			  return (
				(e = t || e),
				"none" === e.style.display ||
				  ("" === e.style.display &&
					et(e) &&
					"none" === Ae.css(e, "display"))
			  );
			},
			rt = {};
		  Ae.fn.extend({
			show: function () {
			  return E(this, !0);
			},
			hide: function () {
			  return E(this);
			},
			toggle: function (e) {
			  return "boolean" == typeof e
				? e
				  ? this.show()
				  : this.hide()
				: this.each(function () {
					nt(this) ? Ae(this).show() : Ae(this).hide();
				  });
			},
		  });
		  var it = /^(?:checkbox|radio)$/i,
			ot = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			at = /^$|^module$|\/(?:java|ecma)script/i;
		  !(function () {
			var e = Se.createDocumentFragment(),
			  t = e.appendChild(Se.createElement("div")),
			  n = Se.createElement("input");
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
		  var ut = /<|&#?\w+;/,
			ct = /^([^.]*)(?:\.(.+)|)/;
		  (Ae.event = {
			global: {},
			add: function (e, t, n, r, i) {
			  var o,
				a,
				s,
				u,
				c,
				l,
				f,
				p,
				d,
				h,
				v,
				m = ze.get(e);
			  if (We(e))
				for (
				  n.handler && ((o = n), (n = o.handler), (i = o.selector)),
					i && Ae.find.matchesSelector(Qe, i),
					n.guid || (n.guid = Ae.guid++),
					(u = m.events) || (u = m.events = Object.create(null)),
					(a = m.handle) ||
					  (a = m.handle =
						function (t) {
						  return "undefined" != typeof Ae &&
							Ae.event.triggered !== t.type
							? Ae.event.dispatch.apply(e, arguments)
							: void 0;
						}),
					t = (t || "").match(qe) || [""],
					c = t.length;
				  c--;
	
				)
				  (s = ct.exec(t[c]) || []),
					(d = v = s[1]),
					(h = (s[2] || "").split(".").sort()),
					d &&
					  ((f = Ae.event.special[d] || {}),
					  (d = (i ? f.delegateType : f.bindType) || d),
					  (f = Ae.event.special[d] || {}),
					  (l = Ae.extend(
						{
						  type: d,
						  origType: v,
						  data: r,
						  handler: n,
						  guid: n.guid,
						  selector: i,
						  needsContext: i && Ae.expr.match.needsContext.test(i),
						  namespace: h.join("."),
						},
						o
					  )),
					  (p = u[d]) ||
						((p = u[d] = []),
						(p.delegateCount = 0),
						(f.setup && f.setup.call(e, r, h, a) !== !1) ||
						  (e.addEventListener && e.addEventListener(d, a))),
					  f.add &&
						(f.add.call(e, l),
						l.handler.guid || (l.handler.guid = n.guid)),
					  i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
					  (Ae.event.global[d] = !0));
			},
			remove: function (e, t, n, r, i) {
			  var o,
				a,
				s,
				u,
				c,
				l,
				f,
				p,
				d,
				h,
				v,
				m = ze.hasData(e) && ze.get(e);
			  if (m && (u = m.events)) {
				for (t = (t || "").match(qe) || [""], c = t.length; c--; )
				  if (
					((s = ct.exec(t[c]) || []),
					(d = v = s[1]),
					(h = (s[2] || "").split(".").sort()),
					d)
				  ) {
					for (
					  f = Ae.event.special[d] || {},
						d = (r ? f.delegateType : f.bindType) || d,
						p = u[d] || [],
						s =
						  s[2] &&
						  new RegExp(
							"(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
						  ),
						a = o = p.length;
					  o--;
	
					)
					  (l = p[o]),
						(!i && v !== l.origType) ||
						  (n && n.guid !== l.guid) ||
						  (s && !s.test(l.namespace)) ||
						  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
						  (p.splice(o, 1),
						  l.selector && p.delegateCount--,
						  f.remove && f.remove.call(e, l));
					a &&
					  !p.length &&
					  ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
						Ae.removeEvent(e, d, m.handle),
					  delete u[d]);
				  } else for (d in u) Ae.event.remove(e, d + t[c], n, r, !0);
				Ae.isEmptyObject(u) && ze.remove(e, "handle events");
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
				u = Ae.event.fix(e),
				c = (ze.get(this, "events") || Object.create(null))[u.type] || [],
				l = Ae.event.special[u.type] || {};
			  for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			  if (
				((u.delegateTarget = this),
				!l.preDispatch || l.preDispatch.call(this, u) !== !1)
			  ) {
				for (
				  a = Ae.event.handlers.call(this, u, c), t = 0;
				  (i = a[t++]) && !u.isPropagationStopped();
	
				)
				  for (
					u.currentTarget = i.elem, n = 0;
					(o = i.handlers[n++]) && !u.isImmediatePropagationStopped();
	
				  )
					(u.rnamespace &&
					  o.namespace !== !1 &&
					  !u.rnamespace.test(o.namespace)) ||
					  ((u.handleObj = o),
					  (u.data = o.data),
					  (r = (
						(Ae.event.special[o.origType] || {}).handle || o.handler
					  ).apply(i.elem, s)),
					  void 0 !== r &&
						(u.result = r) === !1 &&
						(u.preventDefault(), u.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, u), u.result;
			  }
			},
			handlers: function (e, t) {
			  var n,
				r,
				i,
				o,
				a,
				s = [],
				u = t.delegateCount,
				c = e.target;
			  if (u && c.nodeType && !("click" === e.type && e.button >= 1))
				for (; c !== this; c = c.parentNode || this)
				  if (
					1 === c.nodeType &&
					("click" !== e.type || c.disabled !== !0)
				  ) {
					for (o = [], a = {}, n = 0; n < u; n++)
					  (r = t[n]),
						(i = r.selector + " "),
						void 0 === a[i] &&
						  (a[i] = r.needsContext
							? Ae(i, this).index(c) > -1
							: Ae.find(i, this, null, [c]).length),
						a[i] && o.push(r);
					o.length && s.push({ elem: c, handlers: o });
				  }
			  return (
				(c = this),
				u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
				s
			  );
			},
			addProp: function (e, t) {
			  Object.defineProperty(Ae.Event.prototype, e, {
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
			  return e[Ae.expando] ? e : new Ae.Event(e);
			},
			special: {
			  load: { noBubble: !0 },
			  click: {
				setup: function (e) {
				  var t = this || e;
				  return (
					it.test(t.type) && t.click && c(t, "input") && D(t, "click", A),
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
					  ze.get(t, "click")) ||
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
			(Ae.removeEvent = function (e, t, n) {
			  e.removeEventListener && e.removeEventListener(t, n);
			}),
			(Ae.Event = function (e, t) {
			  return this instanceof Ae.Event
				? (e && e.type
					? ((this.originalEvent = e),
					  (this.type = e.type),
					  (this.isDefaultPrevented =
						e.defaultPrevented ||
						(void 0 === e.defaultPrevented && e.returnValue === !1)
						  ? A
						  : O),
					  (this.target =
						e.target && 3 === e.target.nodeType
						  ? e.target.parentNode
						  : e.target),
					  (this.currentTarget = e.currentTarget),
					  (this.relatedTarget = e.relatedTarget))
					: (this.type = e),
				  t && Ae.extend(this, t),
				  (this.timeStamp = (e && e.timeStamp) || Date.now()),
				  void (this[Ae.expando] = !0))
				: new Ae.Event(e, t);
			}),
			(Ae.Event.prototype = {
			  constructor: Ae.Event,
			  isDefaultPrevented: O,
			  isPropagationStopped: O,
			  isImmediatePropagationStopped: O,
			  isSimulated: !1,
			  preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = A),
				  e && !this.isSimulated && e.preventDefault();
			  },
			  stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = A),
				  e && !this.isSimulated && e.stopPropagation();
			  },
			  stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = A),
				  e && !this.isSimulated && e.stopImmediatePropagation(),
				  this.stopPropagation();
			  },
			}),
			Ae.each(
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
			  Ae.event.addProp
			),
			Ae.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
			  Ae.event.special[e] = {
				setup: function () {
				  return D(this, e, N), !1;
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
			Ae.each(
			  {
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout",
			  },
			  function (e, t) {
				Ae.event.special[e] = {
				  delegateType: t,
				  bindType: t,
				  handle: function (e) {
					var n,
					  r = this,
					  i = e.relatedTarget,
					  o = e.handleObj;
					return (
					  (i && (i === r || Ae.contains(r, i))) ||
						((e.type = o.origType),
						(n = o.handler.apply(this, arguments)),
						(e.type = t)),
					  n
					);
				  },
				};
			  }
			),
			Ae.fn.extend({
			  on: function (e, t, n, r) {
				return j(this, e, t, n, r);
			  },
			  one: function (e, t, n, r) {
				return j(this, e, t, n, r, 1);
			  },
			  off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj)
				  return (
					(r = e.handleObj),
					Ae(e.delegateTarget).off(
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
				  n === !1 && (n = O),
				  this.each(function () {
					Ae.event.remove(this, e, n, t);
				  })
				);
			  },
			});
		  var lt = /<script|<style|<link/i,
			ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
			pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		  Ae.extend({
			htmlPrefilter: function (e) {
			  return e;
			},
			clone: function (e, t, n) {
			  var r,
				i,
				o,
				a,
				s = e.cloneNode(!0),
				u = et(e);
			  if (
				!(
				  we.noCloneChecked ||
				  (1 !== e.nodeType && 11 !== e.nodeType) ||
				  Ae.isXMLDoc(e)
				)
			  )
				for (a = S(s), o = S(e), r = 0, i = o.length; r < i; r++)
				  R(o[r], a[r]);
			  if (t)
				if (n)
				  for (
					o = o || S(e), a = a || S(s), r = 0, i = o.length;
					r < i;
					r++
				  )
					I(o[r], a[r]);
				else I(e, s);
			  return (
				(a = S(s, "script")), a.length > 0 && k(a, !u && S(e, "script")), s
			  );
			},
			cleanData: function (e) {
			  for (
				var t, n, r, i = Ae.event.special, o = 0;
				void 0 !== (n = e[o]);
				o++
			  )
				if (We(n)) {
				  if ((t = n[ze.expando])) {
					if (t.events)
					  for (r in t.events)
						i[r]
						  ? Ae.event.remove(n, r)
						  : Ae.removeEvent(n, r, t.handle);
					n[ze.expando] = void 0;
				  }
				  n[Ge.expando] && (n[Ge.expando] = void 0);
				}
			},
		  }),
			Ae.fn.extend({
			  detach: function (e) {
				return _(this, e, !0);
			  },
			  remove: function (e) {
				return _(this, e);
			  },
			  text: function (e) {
				return Ue(
				  this,
				  function (e) {
					return void 0 === e
					  ? Ae.text(this)
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
				return q(this, arguments, function (e) {
				  if (
					1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType
				  ) {
					var t = P(this, e);
					t.appendChild(e);
				  }
				});
			  },
			  prepend: function () {
				return q(this, arguments, function (e) {
				  if (
					1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType
				  ) {
					var t = P(this, e);
					t.insertBefore(e, t.firstChild);
				  }
				});
			  },
			  before: function () {
				return q(this, arguments, function (e) {
				  this.parentNode && this.parentNode.insertBefore(e, this);
				});
			  },
			  after: function () {
				return q(this, arguments, function (e) {
				  this.parentNode &&
					this.parentNode.insertBefore(e, this.nextSibling);
				});
			  },
			  empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
				  1 === e.nodeType &&
					(Ae.cleanData(S(e, !1)), (e.textContent = ""));
				return this;
			  },
			  clone: function (e, t) {
				return (
				  (e = null != e && e),
				  (t = null == t ? e : t),
				  this.map(function () {
					return Ae.clone(this, e, t);
				  })
				);
			  },
			  html: function (e) {
				return Ue(
				  this,
				  function (e) {
					var t = this[0] || {},
					  n = 0,
					  r = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if (
					  "string" == typeof e &&
					  !lt.test(e) &&
					  !st[(ot.exec(e) || ["", ""])[1].toLowerCase()]
					) {
					  e = Ae.htmlPrefilter(e);
					  try {
						for (; n < r; n++)
						  (t = this[n] || {}),
							1 === t.nodeType &&
							  (Ae.cleanData(S(t, !1)), (t.innerHTML = e));
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
				return q(
				  this,
				  arguments,
				  function (t) {
					var n = this.parentNode;
					Ae.inArray(this, e) < 0 &&
					  (Ae.cleanData(S(this)), n && n.replaceChild(t, this));
				  },
				  e
				);
			  },
			}),
			Ae.each(
			  {
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			  },
			  function (e, t) {
				Ae.fn[e] = function (e) {
				  for (
					var n, r = [], i = Ae(e), o = i.length - 1, a = 0;
					a <= o;
					a++
				  )
					(n = a === o ? this : this.clone(!0)),
					  Ae(i[a])[t](n),
					  ve.apply(r, n.get());
				  return this.pushStack(r);
				};
			  }
			);
		  var dt = new RegExp("^(" + Ke + ")(?!px)[a-z%]+$", "i"),
			ht = function (e) {
			  var t = e.ownerDocument.defaultView;
			  return (t && t.opener) || (t = n), t.getComputedStyle(e);
			},
			vt = function (e, t, n) {
			  var r,
				i,
				o = {};
			  for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
			  r = n.call(e);
			  for (i in t) e.style[i] = o[i];
			  return r;
			},
			mt = new RegExp(Ze.join("|"), "i");
		  !(function () {
			function e() {
			  if (l) {
				(c.style.cssText =
				  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
				  (l.style.cssText =
					"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
				  Qe.appendChild(c).appendChild(l);
				var e = n.getComputedStyle(l);
				(r = "1%" !== e.top),
				  (u = 12 === t(e.marginLeft)),
				  (l.style.right = "60%"),
				  (a = 36 === t(e.right)),
				  (i = 36 === t(e.width)),
				  (l.style.position = "absolute"),
				  (o = 12 === t(l.offsetWidth / 3)),
				  Qe.removeChild(c),
				  (l = null);
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
			  u,
			  c = Se.createElement("div"),
			  l = Se.createElement("div");
			l.style &&
			  ((l.style.backgroundClip = "content-box"),
			  (l.cloneNode(!0).style.backgroundClip = ""),
			  (we.clearCloneStyle = "content-box" === l.style.backgroundClip),
			  Ae.extend(we, {
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
				  return e(), u;
				},
				scrollboxSize: function () {
				  return e(), o;
				},
				reliableTrDimensions: function () {
				  var e, t, r, i;
				  return (
					null == s &&
					  ((e = Se.createElement("table")),
					  (t = Se.createElement("tr")),
					  (r = Se.createElement("div")),
					  (e.style.cssText =
						"position:absolute;left:-11111px;border-collapse:separate"),
					  (t.style.cssText = "border:1px solid"),
					  (t.style.height = "1px"),
					  (r.style.height = "9px"),
					  (r.style.display = "block"),
					  Qe.appendChild(e).appendChild(t).appendChild(r),
					  (i = n.getComputedStyle(t)),
					  (s =
						parseInt(i.height, 10) +
						  parseInt(i.borderTopWidth, 10) +
						  parseInt(i.borderBottomWidth, 10) ===
						t.offsetHeight),
					  Qe.removeChild(e)),
					s
				  );
				},
			  }));
		  })();
		  var $t = ["Webkit", "Moz", "ms"],
			gt = Se.createElement("div").style,
			yt = {},
			bt = /^(none|table(?!-c[ea]).+)/,
			xt = /^--/,
			wt = { position: "absolute", visibility: "hidden", display: "block" },
			Ct = { letterSpacing: "0", fontWeight: "400" };
		  Ae.extend({
			cssHooks: {
			  opacity: {
				get: function (e, t) {
				  if (t) {
					var n = H(e, "opacity");
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
				  s = g(t),
				  u = xt.test(t),
				  c = e.style;
				return (
				  u || (t = B(s)),
				  (a = Ae.cssHooks[t] || Ae.cssHooks[s]),
				  void 0 === n
					? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
					  ? i
					  : c[t]
					: ((o = typeof n),
					  "string" === o &&
						(i = Ye.exec(n)) &&
						i[1] &&
						((n = w(e, t, i)), (o = "number")),
					  null != n &&
						n === n &&
						("number" !== o ||
						  u ||
						  (n += (i && i[3]) || (Ae.cssNumber[s] ? "" : "px")),
						we.clearCloneStyle ||
						  "" !== n ||
						  0 !== t.indexOf("background") ||
						  (c[t] = "inherit"),
						(a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
						  (u ? c.setProperty(t, n) : (c[t] = n))),
					  void 0)
				);
			  }
			},
			css: function (e, t, n, r) {
			  var i,
				o,
				a,
				s = g(t),
				u = xt.test(t);
			  return (
				u || (t = B(s)),
				(a = Ae.cssHooks[t] || Ae.cssHooks[s]),
				a && "get" in a && (i = a.get(e, !0, n)),
				void 0 === i && (i = H(e, t, r)),
				"normal" === i && t in Ct && (i = Ct[t]),
				"" === n || n
				  ? ((o = parseFloat(i)), n === !0 || isFinite(o) ? o || 0 : i)
				  : i
			  );
			},
		  }),
			Ae.each(["height", "width"], function (e, t) {
			  Ae.cssHooks[t] = {
				get: function (e, n, r) {
				  if (n)
					return !bt.test(Ae.css(e, "display")) ||
					  (e.getClientRects().length && e.getBoundingClientRect().width)
					  ? G(e, t, r)
					  : vt(e, wt, function () {
						  return G(e, t, r);
						});
				},
				set: function (e, n, r) {
				  var i,
					o = ht(e),
					a = !we.scrollboxSize() && "absolute" === o.position,
					s = a || r,
					u = s && "border-box" === Ae.css(e, "boxSizing", !1, o),
					c = r ? z(e, t, r, u, o) : 0;
				  return (
					u &&
					  a &&
					  (c -= Math.ceil(
						e["offset" + t[0].toUpperCase() + t.slice(1)] -
						  parseFloat(o[t]) -
						  z(e, t, "border", !1, o) -
						  0.5
					  )),
					c &&
					  (i = Ye.exec(n)) &&
					  "px" !== (i[3] || "px") &&
					  ((e.style[t] = n), (n = Ae.css(e, t))),
					W(e, n, c)
				  );
				},
			  };
			}),
			(Ae.cssHooks.marginLeft = U(we.reliableMarginLeft, function (e, t) {
			  if (t)
				return (
				  (parseFloat(H(e, "marginLeft")) ||
					e.getBoundingClientRect().left -
					  vt(e, { marginLeft: 0 }, function () {
						return e.getBoundingClientRect().left;
					  })) + "px"
				);
			})),
			Ae.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
			  (Ae.cssHooks[e + t] = {
				expand: function (n) {
				  for (
					var r = 0,
					  i = {},
					  o = "string" == typeof n ? n.split(" ") : [n];
					r < 4;
					r++
				  )
					i[e + Ze[r] + t] = o[r] || o[r - 2] || o[0];
				  return i;
				},
			  }),
				"margin" !== e && (Ae.cssHooks[e + t].set = W);
			}),
			Ae.fn.extend({
			  css: function (e, t) {
				return Ue(
				  this,
				  function (e, t, n) {
					var r,
					  i,
					  o = {},
					  a = 0;
					if (Array.isArray(t)) {
					  for (r = ht(e), i = t.length; a < i; a++)
						o[t[a]] = Ae.css(e, t[a], !1, r);
					  return o;
					}
					return void 0 !== n ? Ae.style(e, t, n) : Ae.css(e, t);
				  },
				  e,
				  t,
				  arguments.length > 1
				);
			  },
			}),
			(Ae.Tween = X),
			(X.prototype = {
			  constructor: X,
			  init: function (e, t, n, r, i, o) {
				(this.elem = e),
				  (this.prop = n),
				  (this.easing = i || Ae.easing._default),
				  (this.options = t),
				  (this.start = this.now = this.cur()),
				  (this.end = r),
				  (this.unit = o || (Ae.cssNumber[n] ? "" : "px"));
			  },
			  cur: function () {
				var e = X.propHooks[this.prop];
				return e && e.get ? e.get(this) : X.propHooks._default.get(this);
			  },
			  run: function (e) {
				var t,
				  n = X.propHooks[this.prop];
				return (
				  this.options.duration
					? (this.pos = t =
						Ae.easing[this.easing](
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
				  n && n.set ? n.set(this) : X.propHooks._default.set(this),
				  this
				);
			  },
			}),
			(X.prototype.init.prototype = X.prototype),
			(X.propHooks = {
			  _default: {
				get: function (e) {
				  var t;
				  return 1 !== e.elem.nodeType ||
					(null != e.elem[e.prop] && null == e.elem.style[e.prop])
					? e.elem[e.prop]
					: ((t = Ae.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
				},
				set: function (e) {
				  Ae.fx.step[e.prop]
					? Ae.fx.step[e.prop](e)
					: 1 !== e.elem.nodeType ||
					  (!Ae.cssHooks[e.prop] && null == e.elem.style[B(e.prop)])
					? (e.elem[e.prop] = e.now)
					: Ae.style(e.elem, e.prop, e.now + e.unit);
				},
			  },
			}),
			(X.propHooks.scrollTop = X.propHooks.scrollLeft =
			  {
				set: function (e) {
				  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
				},
			  }),
			(Ae.easing = {
			  linear: function (e) {
				return e;
			  },
			  swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			  },
			  _default: "swing",
			}),
			(Ae.fx = X.prototype.init),
			(Ae.fx.step = {});
		  var Et,
			St,
			kt = /^(?:toggle|show|hide)$/,
			Tt = /queueHooks$/;
		  (Ae.Animation = Ae.extend(te, {
			tweeners: {
			  "*": [
				function (e, t) {
				  var n = this.createTween(e, t);
				  return w(n.elem, e, Ye.exec(t), n), n;
				},
			  ],
			},
			tweener: function (e, t) {
			  Ce(e) ? ((t = e), (e = ["*"])) : (e = e.match(qe));
			  for (var n, r = 0, i = e.length; r < i; r++)
				(n = e[r]),
				  (te.tweeners[n] = te.tweeners[n] || []),
				  te.tweeners[n].unshift(t);
			},
			prefilters: [Q],
			prefilter: function (e, t) {
			  t ? te.prefilters.unshift(e) : te.prefilters.push(e);
			},
		  })),
			(Ae.speed = function (e, t, n) {
			  var r =
				e && "object" == typeof e
				  ? Ae.extend({}, e)
				  : {
					  complete: n || (!n && t) || (Ce(e) && e),
					  duration: e,
					  easing: (n && t) || (t && !Ce(t) && t),
					};
			  return (
				Ae.fx.off
				  ? (r.duration = 0)
				  : "number" != typeof r.duration &&
					(r.duration in Ae.fx.speeds
					  ? (r.duration = Ae.fx.speeds[r.duration])
					  : (r.duration = Ae.fx.speeds._default)),
				(null != r.queue && r.queue !== !0) || (r.queue = "fx"),
				(r.old = r.complete),
				(r.complete = function () {
				  Ce(r.old) && r.old.call(this),
					r.queue && Ae.dequeue(this, r.queue);
				}),
				r
			  );
			}),
			Ae.fn.extend({
			  fadeTo: function (e, t, n, r) {
				return this.filter(nt)
				  .css("opacity", 0)
				  .show()
				  .end()
				  .animate({ opacity: t }, e, n, r);
			  },
			  animate: function (e, t, n, r) {
				var i = Ae.isEmptyObject(e),
				  o = Ae.speed(t, n, r),
				  a = function () {
					var t = te(this, Ae.extend({}, e), o);
					(i || ze.get(this, "finish")) && t.stop(!0);
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
					  o = Ae.timers,
					  a = ze.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else for (i in a) a[i] && a[i].stop && Tt.test(i) && r(a[i]);
					for (i = o.length; i--; )
					  o[i].elem !== this ||
						(null != e && o[i].queue !== e) ||
						(o[i].anim.stop(n), (t = !1), o.splice(i, 1));
					(!t && n) || Ae.dequeue(this, e);
				  })
				);
			  },
			  finish: function (e) {
				return (
				  e !== !1 && (e = e || "fx"),
				  this.each(function () {
					var t,
					  n = ze.get(this),
					  r = n[e + "queue"],
					  i = n[e + "queueHooks"],
					  o = Ae.timers,
					  a = r ? r.length : 0;
					for (
					  n.finish = !0,
						Ae.queue(this, e, []),
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
			Ae.each(["toggle", "show", "hide"], function (e, t) {
			  var n = Ae.fn[t];
			  Ae.fn[t] = function (e, r, i) {
				return null == e || "boolean" == typeof e
				  ? n.apply(this, arguments)
				  : this.animate(Y(t, !0), e, r, i);
			  };
			}),
			Ae.each(
			  {
				slideDown: Y("show"),
				slideUp: Y("hide"),
				slideToggle: Y("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" },
			  },
			  function (e, t) {
				Ae.fn[e] = function (e, n, r) {
				  return this.animate(t, e, n, r);
				};
			  }
			),
			(Ae.timers = []),
			(Ae.fx.tick = function () {
			  var e,
				t = 0,
				n = Ae.timers;
			  for (Et = Date.now(); t < n.length; t++)
				(e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
			  n.length || Ae.fx.stop(), (Et = void 0);
			}),
			(Ae.fx.timer = function (e) {
			  Ae.timers.push(e), Ae.fx.start();
			}),
			(Ae.fx.interval = 13),
			(Ae.fx.start = function () {
			  St || ((St = !0), J());
			}),
			(Ae.fx.stop = function () {
			  St = null;
			}),
			(Ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
			(Ae.fn.delay = function (e, t) {
			  return (
				(e = Ae.fx ? Ae.fx.speeds[e] || e : e),
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
			  var e = Se.createElement("input"),
				t = Se.createElement("select"),
				n = t.appendChild(Se.createElement("option"));
			  (e.type = "checkbox"),
				(we.checkOn = "" !== e.value),
				(we.optSelected = n.selected),
				(e = Se.createElement("input")),
				(e.value = "t"),
				(e.type = "radio"),
				(we.radioValue = "t" === e.value);
			})();
		  var At,
			Ot = Ae.expr.attrHandle;
		  Ae.fn.extend({
			attr: function (e, t) {
			  return Ue(this, Ae.attr, e, t, arguments.length > 1);
			},
			removeAttr: function (e) {
			  return this.each(function () {
				Ae.removeAttr(this, e);
			  });
			},
		  }),
			Ae.extend({
			  attr: function (e, t, n) {
				var r,
				  i,
				  o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
				  return "undefined" == typeof e.getAttribute
					? Ae.prop(e, t, n)
					: ((1 === o && Ae.isXMLDoc(e)) ||
						(i =
						  Ae.attrHooks[t.toLowerCase()] ||
						  (Ae.expr.match.bool.test(t) ? At : void 0)),
					  void 0 !== n
						? null === n
						  ? void Ae.removeAttr(e, t)
						  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
						  ? r
						  : (e.setAttribute(t, n + ""), n)
						: i && "get" in i && null !== (r = i.get(e, t))
						? r
						: ((r = Ae.find.attr(e, t)), null == r ? void 0 : r));
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
				  i = t && t.match(qe);
				if (i && 1 === e.nodeType)
				  for (; (n = i[r++]); ) e.removeAttribute(n);
			  },
			}),
			(At = {
			  set: function (e, t, n) {
				return t === !1 ? Ae.removeAttr(e, n) : e.setAttribute(n, n), n;
			  },
			}),
			Ae.each(Ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
			  var n = Ot[t] || Ae.find.attr;
			  Ot[t] = function (e, t, r) {
				var i,
				  o,
				  a = t.toLowerCase();
				return (
				  r ||
					((o = Ot[a]),
					(Ot[a] = i),
					(i = null != n(e, t, r) ? a : null),
					(Ot[a] = o)),
				  i
				);
			  };
			});
		  var Nt = /^(?:input|select|textarea|button)$/i,
			Mt = /^(?:a|area)$/i;
		  Ae.fn.extend({
			prop: function (e, t) {
			  return Ue(this, Ae.prop, e, t, arguments.length > 1);
			},
			removeProp: function (e) {
			  return this.each(function () {
				delete this[Ae.propFix[e] || e];
			  });
			},
		  }),
			Ae.extend({
			  prop: function (e, t, n) {
				var r,
				  i,
				  o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
				  return (
					(1 === o && Ae.isXMLDoc(e)) ||
					  ((t = Ae.propFix[t] || t), (i = Ae.propHooks[t])),
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
					var t = Ae.find.attr(e, "tabindex");
					return t
					  ? parseInt(t, 10)
					  : Nt.test(e.nodeName) || (Mt.test(e.nodeName) && e.href)
					  ? 0
					  : -1;
				  },
				},
			  },
			  propFix: { for: "htmlFor", class: "className" },
			}),
			we.optSelected ||
			  (Ae.propHooks.selected = {
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
			Ae.each(
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
				Ae.propFix[this.toLowerCase()] = this;
			  }
			),
			Ae.fn.extend({
			  addClass: function (e) {
				var t,
				  n,
				  r,
				  i,
				  o,
				  a,
				  s,
				  u = 0;
				if (Ce(e))
				  return this.each(function (t) {
					Ae(this).addClass(e.call(this, t, re(this)));
				  });
				if (((t = ie(e)), t.length))
				  for (; (n = this[u++]); )
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
				  u = 0;
				if (Ce(e))
				  return this.each(function (t) {
					Ae(this).removeClass(e.call(this, t, re(this)));
				  });
				if (!arguments.length) return this.attr("class", "");
				if (((t = ie(e)), t.length))
				  for (; (n = this[u++]); )
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
					  Ae(this).toggleClass(e.call(this, n, re(this), t), t);
					})
				  : this.each(function () {
					  var t, i, o, a;
					  if (r)
						for (i = 0, o = Ae(this), a = ie(e); (t = a[i++]); )
						  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					  else
						(void 0 !== e && "boolean" !== n) ||
						  ((t = re(this)),
						  t && ze.set(this, "__className__", t),
						  this.setAttribute &&
							this.setAttribute(
							  "class",
							  t || e === !1
								? ""
								: ze.get(this, "__className__") || ""
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
		  var jt = /\r/g;
		  Ae.fn.extend({
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
						((i = r ? e.call(this, n, Ae(this).val()) : e),
						null == i
						  ? (i = "")
						  : "number" == typeof i
						  ? (i += "")
						  : Array.isArray(i) &&
							(i = Ae.map(i, function (e) {
							  return null == e ? "" : e + "";
							})),
						(t =
						  Ae.valHooks[this.type] ||
						  Ae.valHooks[this.nodeName.toLowerCase()]),
						(t && "set" in t && void 0 !== t.set(this, i, "value")) ||
						  (this.value = i));
					})
				  );
				if (i)
				  return (
					(t =
					  Ae.valHooks[i.type] || Ae.valHooks[i.nodeName.toLowerCase()]),
					t && "get" in t && void 0 !== (n = t.get(i, "value"))
					  ? n
					  : ((n = i.value),
						"string" == typeof n
						  ? n.replace(jt, "")
						  : null == n
						  ? ""
						  : n)
				  );
			  }
			},
		  }),
			Ae.extend({
			  valHooks: {
				option: {
				  get: function (e) {
					var t = Ae.find.attr(e, "value");
					return null != t ? t : ne(Ae.text(e));
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
					  u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
					  if (
						((n = i[r]),
						(n.selected || r === o) &&
						  !n.disabled &&
						  (!n.parentNode.disabled || !c(n.parentNode, "optgroup")))
					  ) {
						if (((t = Ae(n).val()), a)) return t;
						s.push(t);
					  }
					return s;
				  },
				  set: function (e, t) {
					for (
					  var n, r, i = e.options, o = Ae.makeArray(t), a = i.length;
					  a--;
	
					)
					  (r = i[a]),
						(r.selected =
						  Ae.inArray(Ae.valHooks.option.get(r), o) > -1) &&
						  (n = !0);
					return n || (e.selectedIndex = -1), o;
				  },
				},
			  },
			}),
			Ae.each(["radio", "checkbox"], function () {
			  (Ae.valHooks[this] = {
				set: function (e, t) {
				  if (Array.isArray(t))
					return (e.checked = Ae.inArray(Ae(e).val(), t) > -1);
				},
			  }),
				we.checkOn ||
				  (Ae.valHooks[this].get = function (e) {
					return null === e.getAttribute("value") ? "on" : e.value;
				  });
			}),
			(we.focusin = "onfocusin" in n);
		  var Dt = /^(?:focusinfocus|focusoutblur)$/,
			Pt = function (e) {
			  e.stopPropagation();
			};
		  Ae.extend(Ae.event, {
			trigger: function (e, t, r, i) {
			  var o,
				a,
				s,
				u,
				c,
				l,
				f,
				p,
				d = [r || Se],
				h = ye.call(e, "type") ? e.type : e,
				v = ye.call(e, "namespace") ? e.namespace.split(".") : [];
			  if (
				((a = p = s = r = r || Se),
				3 !== r.nodeType &&
				  8 !== r.nodeType &&
				  !Dt.test(h + Ae.event.triggered) &&
				  (h.indexOf(".") > -1 &&
					((v = h.split(".")), (h = v.shift()), v.sort()),
				  (c = h.indexOf(":") < 0 && "on" + h),
				  (e = e[Ae.expando]
					? e
					: new Ae.Event(h, "object" == typeof e && e)),
				  (e.isTrigger = i ? 2 : 3),
				  (e.namespace = v.join(".")),
				  (e.rnamespace = e.namespace
					? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
					: null),
				  (e.result = void 0),
				  e.target || (e.target = r),
				  (t = null == t ? [e] : Ae.makeArray(t, [e])),
				  (f = Ae.event.special[h] || {}),
				  i || !f.trigger || f.trigger.apply(r, t) !== !1))
			  ) {
				if (!i && !f.noBubble && !Ee(r)) {
				  for (
					u = f.delegateType || h, Dt.test(u + h) || (a = a.parentNode);
					a;
					a = a.parentNode
				  )
					d.push(a), (s = a);
				  s === (r.ownerDocument || Se) &&
					d.push(s.defaultView || s.parentWindow || n);
				}
				for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
				  (p = a),
					(e.type = o > 1 ? u : f.bindType || h),
					(l =
					  (ze.get(a, "events") || Object.create(null))[e.type] &&
					  ze.get(a, "handle")),
					l && l.apply(a, t),
					(l = c && a[c]),
					l &&
					  l.apply &&
					  We(a) &&
					  ((e.result = l.apply(a, t)),
					  e.result === !1 && e.preventDefault());
				return (
				  (e.type = h),
				  i ||
					e.isDefaultPrevented() ||
					(f._default && f._default.apply(d.pop(), t) !== !1) ||
					!We(r) ||
					(c &&
					  Ce(r[h]) &&
					  !Ee(r) &&
					  ((s = r[c]),
					  s && (r[c] = null),
					  (Ae.event.triggered = h),
					  e.isPropagationStopped() && p.addEventListener(h, Pt),
					  r[h](),
					  e.isPropagationStopped() && p.removeEventListener(h, Pt),
					  (Ae.event.triggered = void 0),
					  s && (r[c] = s))),
				  e.result
				);
			  }
			},
			simulate: function (e, t, n) {
			  var r = Ae.extend(new Ae.Event(), n, { type: e, isSimulated: !0 });
			  Ae.event.trigger(r, null, t);
			},
		  }),
			Ae.fn.extend({
			  trigger: function (e, t) {
				return this.each(function () {
				  Ae.event.trigger(e, t, this);
				});
			  },
			  triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return Ae.event.trigger(e, t, n, !0);
			  },
			}),
			we.focusin ||
			  Ae.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
				var n = function (e) {
				  Ae.event.simulate(t, e.target, Ae.event.fix(e));
				};
				Ae.event.special[t] = {
				  setup: function () {
					var r = this.ownerDocument || this.document || this,
					  i = ze.access(r, t);
					i || r.addEventListener(e, n, !0),
					  ze.access(r, t, (i || 0) + 1);
				  },
				  teardown: function () {
					var r = this.ownerDocument || this.document || this,
					  i = ze.access(r, t) - 1;
					i
					  ? ze.access(r, t, i)
					  : (r.removeEventListener(e, n, !0), ze.remove(r, t));
				  },
				};
			  });
		  var Vt = n.location,
			Lt = { guid: Date.now() },
			It = /\?/;
		  Ae.parseXML = function (e) {
			var t, r;
			if (!e || "string" != typeof e) return null;
			try {
			  t = new n.DOMParser().parseFromString(e, "text/xml");
			} catch (e) {}
			return (
			  (r = t && t.getElementsByTagName("parsererror")[0]),
			  (t && !r) ||
				Ae.error(
				  "Invalid XML: " +
					(r
					  ? Ae.map(r.childNodes, function (e) {
						  return e.textContent;
						}).join("\n")
					  : e)
				),
			  t
			);
		  };
		  var Rt = /\[\]$/,
			qt = /\r?\n/g,
			_t = /^(?:submit|button|image|reset|file)$/i,
			Ht = /^(?:input|select|textarea|keygen)/i;
		  (Ae.param = function (e, t) {
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
			if (Array.isArray(e) || (e.jquery && !Ae.isPlainObject(e)))
			  Ae.each(e, function () {
				i(this.name, this.value);
			  });
			else for (n in e) oe(n, e[n], t, i);
			return r.join("&");
		  }),
			Ae.fn.extend({
			  serialize: function () {
				return Ae.param(this.serializeArray());
			  },
			  serializeArray: function () {
				return this.map(function () {
				  var e = Ae.prop(this, "elements");
				  return e ? Ae.makeArray(e) : this;
				})
				  .filter(function () {
					var e = this.type;
					return (
					  this.name &&
					  !Ae(this).is(":disabled") &&
					  Ht.test(this.nodeName) &&
					  !_t.test(e) &&
					  (this.checked || !it.test(e))
					);
				  })
				  .map(function (e, t) {
					var n = Ae(this).val();
					return null == n
					  ? null
					  : Array.isArray(n)
					  ? Ae.map(n, function (e) {
						  return { name: t.name, value: e.replace(qt, "\r\n") };
						})
					  : { name: t.name, value: n.replace(qt, "\r\n") };
				  })
				  .get();
			  },
			});
		  var Ut = /%20/g,
			Ft = /#.*$/,
			Bt = /([?&])_=[^&]*/,
			Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Gt = /^(?:GET|HEAD)$/,
			Xt = /^\/\//,
			Jt = {},
			Kt = {},
			Yt = "*/".concat("*"),
			Zt = Se.createElement("a");
		  (Zt.href = Vt.href),
			Ae.extend({
			  active: 0,
			  lastModified: {},
			  etag: {},
			  ajaxSettings: {
				url: Vt.href,
				type: "GET",
				isLocal: zt.test(Vt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
				  "*": Yt,
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
				  "text xml": Ae.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			  },
			  ajaxSetup: function (e, t) {
				return t ? ue(ue(e, Ae.ajaxSettings), t) : ue(Ae.ajaxSettings, e);
			  },
			  ajaxPrefilter: ae(Jt),
			  ajaxTransport: ae(Kt),
			  ajax: function (e, t) {
				function r(e, t, r, s) {
				  var c,
					p,
					d,
					b,
					x,
					w = t;
				  l ||
					((l = !0),
					u && n.clearTimeout(u),
					(i = void 0),
					(a = s || ""),
					(C.readyState = e > 0 ? 4 : 0),
					(c = (e >= 200 && e < 300) || 304 === e),
					r && (b = ce(h, C, r)),
					!c &&
					  Ae.inArray("script", h.dataTypes) > -1 &&
					  Ae.inArray("json", h.dataTypes) < 0 &&
					  (h.converters["text script"] = function () {}),
					(b = le(h, b, C, c)),
					c
					  ? (h.ifModified &&
						  ((x = C.getResponseHeader("Last-Modified")),
						  x && (Ae.lastModified[o] = x),
						  (x = C.getResponseHeader("etag")),
						  x && (Ae.etag[o] = x)),
						204 === e || "HEAD" === h.type
						  ? (w = "nocontent")
						  : 304 === e
						  ? (w = "notmodified")
						  : ((w = b.state), (p = b.data), (d = b.error), (c = !d)))
					  : ((d = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
					(C.status = e),
					(C.statusText = (t || w) + ""),
					c ? $.resolveWith(v, [p, w, C]) : $.rejectWith(v, [C, w, d]),
					C.statusCode(y),
					(y = void 0),
					f &&
					  m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : d]),
					g.fireWith(v, [C, w]),
					f &&
					  (m.trigger("ajaxComplete", [C, h]),
					  --Ae.active || Ae.event.trigger("ajaxStop")));
				}
				"object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
				var i,
				  o,
				  a,
				  s,
				  u,
				  c,
				  l,
				  f,
				  p,
				  d,
				  h = Ae.ajaxSetup({}, t),
				  v = h.context || h,
				  m = h.context && (v.nodeType || v.jquery) ? Ae(v) : Ae.event,
				  $ = Ae.Deferred(),
				  g = Ae.Callbacks("once memory"),
				  y = h.statusCode || {},
				  b = {},
				  x = {},
				  w = "canceled",
				  C = {
					readyState: 0,
					getResponseHeader: function (e) {
					  var t;
					  if (l) {
						if (!s)
						  for (s = {}; (t = Wt.exec(a)); )
							s[t[1].toLowerCase() + " "] = (
							  s[t[1].toLowerCase() + " "] || []
							).concat(t[2]);
						t = s[e.toLowerCase() + " "];
					  }
					  return null == t ? null : t.join(", ");
					},
					getAllResponseHeaders: function () {
					  return l ? a : null;
					},
					setRequestHeader: function (e, t) {
					  return (
						null == l &&
						  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
						  (b[e] = t)),
						this
					  );
					},
					overrideMimeType: function (e) {
					  return null == l && (h.mimeType = e), this;
					},
					statusCode: function (e) {
					  var t;
					  if (e)
						if (l) C.always(e[C.status]);
						else for (t in e) y[t] = [y[t], e[t]];
					  return this;
					},
					abort: function (e) {
					  var t = e || w;
					  return i && i.abort(t), r(0, t), this;
					},
				  };
				if (
				  ($.promise(C),
				  (h.url = ((e || h.url || Vt.href) + "").replace(
					Xt,
					Vt.protocol + "//"
				  )),
				  (h.type = t.method || t.type || h.method || h.type),
				  (h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [
					"",
				  ]),
				  null == h.crossDomain)
				) {
				  c = Se.createElement("a");
				  try {
					(c.href = h.url),
					  (c.href = c.href),
					  (h.crossDomain =
						Zt.protocol + "//" + Zt.host != c.protocol + "//" + c.host);
				  } catch (e) {
					h.crossDomain = !0;
				  }
				}
				if (
				  (h.data &&
					h.processData &&
					"string" != typeof h.data &&
					(h.data = Ae.param(h.data, h.traditional)),
				  se(Jt, h, t, C),
				  l)
				)
				  return C;
				(f = Ae.event && h.global),
				  f && 0 === Ae.active++ && Ae.event.trigger("ajaxStart"),
				  (h.type = h.type.toUpperCase()),
				  (h.hasContent = !Gt.test(h.type)),
				  (o = h.url.replace(Ft, "")),
				  h.hasContent
					? h.data &&
					  h.processData &&
					  0 ===
						(h.contentType || "").indexOf(
						  "application/x-www-form-urlencoded"
						) &&
					  (h.data = h.data.replace(Ut, "+"))
					: ((d = h.url.slice(o.length)),
					  h.data &&
						(h.processData || "string" == typeof h.data) &&
						((o += (It.test(o) ? "&" : "?") + h.data), delete h.data),
					  h.cache === !1 &&
						((o = o.replace(Bt, "$1")),
						(d = (It.test(o) ? "&" : "?") + "_=" + Lt.guid++ + d)),
					  (h.url = o + d)),
				  h.ifModified &&
					(Ae.lastModified[o] &&
					  C.setRequestHeader("If-Modified-Since", Ae.lastModified[o]),
					Ae.etag[o] && C.setRequestHeader("If-None-Match", Ae.etag[o])),
				  ((h.data && h.hasContent && h.contentType !== !1) ||
					t.contentType) &&
					C.setRequestHeader("Content-Type", h.contentType),
				  C.setRequestHeader(
					"Accept",
					h.dataTypes[0] && h.accepts[h.dataTypes[0]]
					  ? h.accepts[h.dataTypes[0]] +
						  ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "")
					  : h.accepts["*"]
				  );
				for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
				if (h.beforeSend && (h.beforeSend.call(v, C, h) === !1 || l))
				  return C.abort();
				if (
				  ((w = "abort"),
				  g.add(h.complete),
				  C.done(h.success),
				  C.fail(h.error),
				  (i = se(Kt, h, t, C)))
				) {
				  if (((C.readyState = 1), f && m.trigger("ajaxSend", [C, h]), l))
					return C;
				  h.async &&
					h.timeout > 0 &&
					(u = n.setTimeout(function () {
					  C.abort("timeout");
					}, h.timeout));
				  try {
					(l = !1), i.send(b, r);
				  } catch (e) {
					if (l) throw e;
					r(-1, e);
				  }
				} else r(-1, "No Transport");
				return C;
			  },
			  getJSON: function (e, t, n) {
				return Ae.get(e, t, n, "json");
			  },
			  getScript: function (e, t) {
				return Ae.get(e, void 0, t, "script");
			  },
			}),
			Ae.each(["get", "post"], function (e, t) {
			  Ae[t] = function (e, n, r, i) {
				return (
				  Ce(n) && ((i = i || r), (r = n), (n = void 0)),
				  Ae.ajax(
					Ae.extend(
					  { url: e, type: t, dataType: i, data: n, success: r },
					  Ae.isPlainObject(e) && e
					)
				  )
				);
			  };
			}),
			Ae.ajaxPrefilter(function (e) {
			  var t;
			  for (t in e.headers)
				"content-type" === t.toLowerCase() &&
				  (e.contentType = e.headers[t] || "");
			}),
			(Ae._evalUrl = function (e, t, n) {
			  return Ae.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function () {} },
				dataFilter: function (e) {
				  Ae.globalEval(e, t, n);
				},
			  });
			}),
			Ae.fn.extend({
			  wrapAll: function (e) {
				var t;
				return (
				  this[0] &&
					(Ce(e) && (e = e.call(this[0])),
					(t = Ae(e, this[0].ownerDocument).eq(0).clone(!0)),
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
					  Ae(this).wrapInner(e.call(this, t));
					})
				  : this.each(function () {
					  var t = Ae(this),
						n = t.contents();
					  n.length ? n.wrapAll(e) : t.append(e);
					});
			  },
			  wrap: function (e) {
				var t = Ce(e);
				return this.each(function (n) {
				  Ae(this).wrapAll(t ? e.call(this, n) : e);
				});
			  },
			  unwrap: function (e) {
				return (
				  this.parent(e)
					.not("body")
					.each(function () {
					  Ae(this).replaceWith(this.childNodes);
					}),
				  this
				);
			  },
			}),
			(Ae.expr.pseudos.hidden = function (e) {
			  return !Ae.expr.pseudos.visible(e);
			}),
			(Ae.expr.pseudos.visible = function (e) {
			  return !!(
				e.offsetWidth ||
				e.offsetHeight ||
				e.getClientRects().length
			  );
			}),
			(Ae.ajaxSettings.xhr = function () {
			  try {
				return new n.XMLHttpRequest();
			  } catch (e) {}
			});
		  var Qt = { 0: 200, 1223: 204 },
			en = Ae.ajaxSettings.xhr();
		  (we.cors = !!en && "withCredentials" in en),
			(we.ajax = en = !!en),
			Ae.ajaxTransport(function (e) {
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
								Qt[s.status] || s.status,
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
			Ae.ajaxPrefilter(function (e) {
			  e.crossDomain && (e.contents.script = !1);
			}),
			Ae.ajaxSetup({
			  accepts: {
				script:
				  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
			  },
			  contents: { script: /\b(?:java|ecma)script\b/ },
			  converters: {
				"text script": function (e) {
				  return Ae.globalEval(e), e;
				},
			  },
			}),
			Ae.ajaxPrefilter("script", function (e) {
			  void 0 === e.cache && (e.cache = !1),
				e.crossDomain && (e.type = "GET");
			}),
			Ae.ajaxTransport("script", function (e) {
			  if (e.crossDomain || e.scriptAttrs) {
				var t, n;
				return {
				  send: function (r, i) {
					(t = Ae("<script>")
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
					  Se.head.appendChild(t[0]);
				  },
				  abort: function () {
					n && n();
				  },
				};
			  }
			});
		  var tn = [],
			nn = /(=)\?(?=&|$)|\?\?/;
		  Ae.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
			  var e = tn.pop() || Ae.expando + "_" + Lt.guid++;
			  return (this[e] = !0), e;
			},
		  }),
			Ae.ajaxPrefilter("json jsonp", function (e, t, r) {
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
					  (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
				  (e.converters["script json"] = function () {
					return a || Ae.error(i + " was not called"), a[0];
				  }),
				  (e.dataTypes[0] = "json"),
				  (o = n[i]),
				  (n[i] = function () {
					a = arguments;
				  }),
				  r.always(function () {
					void 0 === o ? Ae(n).removeProp(i) : (n[i] = o),
					  e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)),
					  a && Ce(o) && o(a[0]),
					  (a = o = void 0);
				  }),
				  "script"
				);
			}),
			(we.createHTMLDocument = (function () {
			  var e = Se.implementation.createHTMLDocument("").body;
			  return (
				(e.innerHTML = "<form></form><form></form>"),
				2 === e.childNodes.length
			  );
			})()),
			(Ae.parseHTML = function (e, t, n) {
			  if ("string" != typeof e) return [];
			  "boolean" == typeof t && ((n = t), (t = !1));
			  var r, i, o;
			  return (
				t ||
				  (we.createHTMLDocument
					? ((t = Se.implementation.createHTMLDocument("")),
					  (r = t.createElement("base")),
					  (r.href = Se.location.href),
					  t.head.appendChild(r))
					: (t = Se)),
				(i = De.exec(e)),
				(o = !n && []),
				i
				  ? [t.createElement(i[1])]
				  : ((i = T([e], t, o)),
					o && o.length && Ae(o).remove(),
					Ae.merge([], i.childNodes))
			  );
			}),
			(Ae.fn.load = function (e, t, n) {
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
				  Ae.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
					.done(function (e) {
					  (o = arguments),
						a.html(r ? Ae("<div>").append(Ae.parseHTML(e)).find(r) : e);
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
			(Ae.expr.pseudos.animated = function (e) {
			  return Ae.grep(Ae.timers, function (t) {
				return e === t.elem;
			  }).length;
			}),
			(Ae.offset = {
			  setOffset: function (e, t, n) {
				var r,
				  i,
				  o,
				  a,
				  s,
				  u,
				  c,
				  l = Ae.css(e, "position"),
				  f = Ae(e),
				  p = {};
				"static" === l && (e.style.position = "relative"),
				  (s = f.offset()),
				  (o = Ae.css(e, "top")),
				  (u = Ae.css(e, "left")),
				  (c =
					("absolute" === l || "fixed" === l) &&
					(o + u).indexOf("auto") > -1),
				  c
					? ((r = f.position()), (a = r.top), (i = r.left))
					: ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
				  Ce(t) && (t = t.call(e, n, Ae.extend({}, s))),
				  null != t.top && (p.top = t.top - s.top + a),
				  null != t.left && (p.left = t.left - s.left + i),
				  "using" in t ? t.using.call(e, p) : f.css(p);
			  },
			}),
			Ae.fn.extend({
			  offset: function (e) {
				if (arguments.length)
				  return void 0 === e
					? this
					: this.each(function (t) {
						Ae.offset.setOffset(this, e, t);
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
				  if ("fixed" === Ae.css(r, "position"))
					t = r.getBoundingClientRect();
				  else {
					for (
					  t = this.offset(),
						n = r.ownerDocument,
						e = r.offsetParent || n.documentElement;
					  e &&
					  (e === n.body || e === n.documentElement) &&
					  "static" === Ae.css(e, "position");
	
					)
					  e = e.parentNode;
					e &&
					  e !== r &&
					  1 === e.nodeType &&
					  ((i = Ae(e).offset()),
					  (i.top += Ae.css(e, "borderTopWidth", !0)),
					  (i.left += Ae.css(e, "borderLeftWidth", !0)));
				  }
				  return {
					top: t.top - i.top - Ae.css(r, "marginTop", !0),
					left: t.left - i.left - Ae.css(r, "marginLeft", !0),
				  };
				}
			  },
			  offsetParent: function () {
				return this.map(function () {
				  for (
					var e = this.offsetParent;
					e && "static" === Ae.css(e, "position");
	
				  )
					e = e.offsetParent;
				  return e || Qe;
				});
			  },
			}),
			Ae.each(
			  { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
			  function (e, t) {
				var n = "pageYOffset" === t;
				Ae.fn[e] = function (r) {
				  return Ue(
					this,
					function (e, r, i) {
					  var o;
					  return (
						Ee(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
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
			Ae.each(["top", "left"], function (e, t) {
			  Ae.cssHooks[t] = U(we.pixelPosition, function (e, n) {
				if (n)
				  return (n = H(e, t)), dt.test(n) ? Ae(e).position()[t] + "px" : n;
			  });
			}),
			Ae.each({ Height: "height", Width: "width" }, function (e, t) {
			  Ae.each(
				{ padding: "inner" + e, content: t, "": "outer" + e },
				function (n, r) {
				  Ae.fn[r] = function (i, o) {
					var a = arguments.length && (n || "boolean" != typeof i),
					  s = n || (i === !0 || o === !0 ? "margin" : "border");
					return Ue(
					  this,
					  function (t, n, i) {
						var o;
						return Ee(t)
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
						  ? Ae.css(t, n, s)
						  : Ae.style(t, n, i, s);
					  },
					  t,
					  a ? i : void 0,
					  a
					);
				  };
				}
			  );
			}),
			Ae.each(
			  [
				"ajaxStart",
				"ajaxStop",
				"ajaxComplete",
				"ajaxError",
				"ajaxSuccess",
				"ajaxSend",
			  ],
			  function (e, t) {
				Ae.fn[t] = function (e) {
				  return this.on(t, e);
				};
			  }
			),
			Ae.fn.extend({
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
			Ae.each(
			  "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
				" "
			  ),
			  function (e, t) {
				Ae.fn[t] = function (e, n) {
				  return arguments.length > 0
					? this.on(t, null, e, n)
					: this.trigger(t);
				};
			  }
			);
		  var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		  (Ae.proxy = function (e, t) {
			var n, r, i;
			if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Ce(e)))
			  return (
				(r = de.call(arguments, 2)),
				(i = function () {
				  return e.apply(t || this, r.concat(de.call(arguments)));
				}),
				(i.guid = e.guid = e.guid || Ae.guid++),
				i
			  );
		  }),
			(Ae.holdReady = function (e) {
			  e ? Ae.readyWait++ : Ae.ready(!0);
			}),
			(Ae.isArray = Array.isArray),
			(Ae.parseJSON = JSON.parse),
			(Ae.nodeName = c),
			(Ae.isFunction = Ce),
			(Ae.isWindow = Ee),
			(Ae.camelCase = g),
			(Ae.type = s),
			(Ae.now = Date.now),
			(Ae.isNumeric = function (e) {
			  var t = Ae.type(e);
			  return (
				("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			  );
			}),
			(Ae.trim = function (e) {
			  return null == e ? "" : (e + "").replace(rn, "");
			}),
			(r = []),
			(i = function () {
			  return Ae;
			}.apply(t, r)),
			!(void 0 !== i && (e.exports = i));
		  var on = n.jQuery,
			an = n.$;
		  return (
			(Ae.noConflict = function (e) {
			  return (
				n.$ === Ae && (n.$ = an),
				e && n.jQuery === Ae && (n.jQuery = on),
				Ae
			  );
			}),
			"undefined" == typeof o && (n.jQuery = n.$ = Ae),
			Ae
		  );
		});
	  }
});
//# sourceMappingURL=bdc.js.map
