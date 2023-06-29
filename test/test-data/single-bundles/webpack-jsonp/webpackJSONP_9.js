"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [947],
  {7812: (e, t, n) => {
    n.r(t),
      n.d(t, {
        sendRequest: () => l,
        checkJsonResponse: () => h,
        stripScripts: () => m,
        evalScripts: () => g,
        getXmlHttpUrl: () => y,
        triggerBeaconCall: () => v,
      });
    n(5306);
    var o = n(3433),
      r = n(6987),
      c = n(8056),
      i = n(8598);
    const a = [];
    let s = !1;
    const u = {
        type: "text",
        method: "GET",
        async: !1,
        contentType: "application/x-www-form-urlencoded",
        encoding: "UTF-8",
        nocache: !1,
        handler: null,
        appendSid: !1,
        appendCountry: !1,
      },
      d = {
        json: function (e) {
          const t = e.responseText;
          try {
            return JSON.parse(t);
          } catch (e) {}
          return (
            o.get("debug") &&
              "" !== t &&
              alert("Error parsing JSON respons: ".concat(t)),
            !1
          );
        },
      };
    function l(e, t, n) {
      if ((t = Object.assign({}, u, t || {})).async && s)
        return a.push({ url: e, options: t, data: n }), !0;
      const o = new XMLHttpRequest();
      if (o) {
        if (
          ((t.type = t.type.toLowerCase()),
          (t.method = t.method.toUpperCase()),
          t.headers || (t.headers = {}),
          (e += ""
            .concat(e.includes("?") ? "&" : "?", "output=")
            .concat(t.type)),
          "POST" === t.method)
        ) {
          if (
            ("Content-Type" in t.headers ||
              (t.headers["Content-Type"] = ""
                .concat(t.contentType)
                .concat(t.encoding ? "; charset=".concat(t.encoding) : "")),
            void 0 === n && (n = ""),
            t.appendSid)
          ) {
            const e = r.MQ();
            if (e)
              n += ""
                .concat("" === n ? "" : "&", "sid=")
                .concat(encodeURIComponent(e));
            else if (t.strictSidCheck) throw "noSessionException";
          }
        } else n && ((e += "&".concat(n)), (n = null));
        t.appendCountry &&
          (e += "&country=".concat(encodeURIComponent(r.so()))),
          t.nocache &&
            ((t.headers["Cache-Control"] = "no-cache"),
            (e += "&nocache=".concat(Date.now())));
        try {
          o.open(t.method, e, !!t.async);
        } catch (n) {
          return (
            e.includes("adType") &&
              alert(
                "Het ophalen van data voor een nieuwe advertentie is mislukt; zorg ervoor dat je browser geen zaken blokkeert (bijvoorbeeld door een adblocker)."
              ),
            t.async && f(),
            !1
          );
        }
        for (const e in t.headers)
          t.headers.hasOwnProperty(e) && o.setRequestHeader(e, t.headers[e]);
        t.withCredentials && (o.withCredentials = !0), o.send(n);
        const c = p(o, t);
        return t.async && !c
          ? ((s = !0), (o.onreadystatechange = p.bind(null, o, t)), !0)
          : c;
      }
      return !1;
    }
    function p(e, t) {
      let n,
        o = null;
      return 4 == e.readyState &&
        (!(n = e.status) ||
        (n >= 200 && n < 300) ||
        304 == n ||
        403 == n ||
        1223 == n
          ? ((o = t.type in d ? d[t.type](e) : e.responseText),
            t.handler && (o = t.handler(o)))
          : t.errorHandler && (o = t.errorHandler(n)),
        t.async)
        ? (f(), !0)
        : o;
    }
    function f() {
      s = !1;
      const e = a.shift();
      e && setTimeout(l.bind(null, e.url, e.options, e.data), 10);
    }
    function h(e) {
      if (!1 !== e) {
        if ("data" in e) return e.data;
        if ("error" in e)
          return (
            "url" in e
              ? confirm(e.error) && (window.location = e.url)
              : alert(e.errorMessage || e.error),
            !1
          );
        o.get("debug") && alert("No valid data received in JSON response");
      }
      return !1;
    }
    function m(e) {
      return e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gi, "");
    }
    const w = (function (e, t) {
      try {
        if ((0, eval)("Object") === e)
          return function (e) {
            return (0, eval)(e);
          };
      } catch (e) {}
      return void 0 !== window.execScript
        ? function (e) {
            return window.execScript(e);
          }
        : function () {};
    })(Object);
    function g(e) {
      return e.replace(
        /<script[^>]*>([\S\s]*?)<\/script>/gi,
        function (e, t) {
          return c.isWhiteSpace(t) || w(t), "";
        }
      );
    }
    function y(e, t, n, o) {
      const r =
        window.xmlHttpUrl ||
        ""
          .concat(location.protocol, "//")
          .concat(location.host, "/xmlhttp/xmlHttp.php");
      return ""
        .concat(r, "?application=")
        .concat(e)
        .concat(t ? "&type=".concat(t) : "")
        .concat(n ? "&action=".concat(n) : "")
        .concat(o ? "&".concat(o) : "");
    }
    function v(e, t, n) {
      if (
        (!e.includes("//") &&
          e.startsWith("/") &&
          (e = ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(e)),
        "sendBeacon" in window.navigator)
      ) {
        const o = new FormData();
        let c;
        for (c in t) o.append(c, t[c]);
        return (
          n && o.append("sid", r.MQ()), void window.navigator.sendBeacon(e, o)
        );
      }
      l(e, { method: "POST", type: "text", async: !0, appendSid: n }, i.n(t));
    }
  },
  8446: (e, t, n) => {
    n.r(t),
      n.d(t, {
        is: () => u,
        prefixed: () => d,
        supports: () => l,
        hasEvent: () => p,
        addTest: () => m,
      });
    n(5306);
    var o = n(8056);
    const r = "dummy",
      c = document.createElement("div"),
      i = "Webkit Moz O ms",
      a = i.split(" "),
      s = i.toLowerCase().split(" "),
      u = (function (e) {
        const t = {
          ie: /msie|trident/.test(e),
          opera: !!window.opera,
          khtml: /khtml/.test(e),
          webkit: /applewebkit/.test(e),
          mac: /macintosh/.test(e),
          mobile:
            /ip(hone|[ao]d)|android|windows (ce|phone)|blackberry|mobi/.test(
              e
            ),
        };
        return t.mac && t.webkit && (window.focus = function () {}), t;
      })(navigator.userAgent.toLowerCase());
    function d(e, t) {
      const n = o.ucFirst(e),
        r = ""
          .concat(e)
          .concat((t ? s : a).join("".concat(n, " ")))
          .concat(n)
          .split(" ");
      let i = 0;
      for (t ? !0 === t && (t = c) : (t = c.style); (e = r[i++]); )
        if (void 0 !== t[e]) return e;
      return !1;
    }
    function l(e) {
      return e in h ? (e in f || (f[e] = h[e]()), f[e]) : null;
    }
    function p(e, t) {
      t = t || c;
      let n = (e = "on".concat(e)) in t;
      if (!n) {
        if ("onwheel" === e) return u.ie && document.documentMode >= 9;
        t.setAttribute &&
          t.removeAttribute &&
          (t.setAttribute(e, ""),
          (n = "function" == typeof t[e]),
          t.removeAttribute(e));
      }
      return n;
    }
    (d.camelCase = function (e) {
      return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }),
      (d.hyphenate = function (e) {
        return e.replace(/^(ms|webkit)(?=[A-Z])|[A-Z]/g, "-$&").toLowerCase();
      });
    const f = {},
      h = {
        localStorage: function () {
          try {
            return localStorage.setItem(r, r), localStorage.removeItem(r), !0;
          } catch (e) {}
          return !1;
        },
        sessionStorage: function () {
          try {
            return (
              sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            );
          } catch (e) {}
          return !1;
        },
        cssScope: function () {
          try {
            return document.querySelector(":scope"), !0;
          } catch (e) {}
          return !1;
        },
        passiveEvents: function () {
          let e = !1;
          try {
            let t = Object.defineProperty({}, "passive", {
              get: function () {
                return (e = !0);
              },
            });
            window.addEventListener("testPassive", null, t),
              window.removeEventListener("testPassive", null, t);
          } catch (e) {}
          return e;
        },
      };
    function m(e, t) {
      h[e] = t;
    }
  },
  5518: (e, t, n) => {
    function o(e, t, n) {
      let o = !1;
      if (navigator.clipboard) navigator.clipboard.writeText(e).then(t, n);
      else {
        if (document.execCommand) {
          const t = document.createElement("textarea");
          (t.value = e),
            document.body.appendChild(t),
            t.select(),
            (o = document.execCommand("copy")),
            document.body.removeChild(t);
        } else
          window.clipboardData &&
            (window.clipboardData.setData("Text", e), (o = !0));
        o ? t && t() : n && n();
      }
    }
    function r(e) {
      e.forEach((e) => {
        e.addEventListener("click", () => {
          let t = null,
            n = null;
          e.dataset.copySuccessMessage &&
            (t = () => {
              e.innerText = e.dataset.copySuccessMessage;
            }),
            e.dataset.copyFailureMessage &&
              (n = () => {
                e.innerText = e.dataset.copyFailureMessage;
              }),
            o(atob(e.dataset.clipboard), t, n);
        });
      });
    }
    n.r(t), n.d(t, { copy: () => o, registerClickEvents: () => r });
  }},
]);
