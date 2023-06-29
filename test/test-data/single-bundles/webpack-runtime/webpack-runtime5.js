!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
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
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./"),
    n((n.s = 1242));
})({117: function (e, t) {
  var n;
  n = (function () {
    return this;
  })();
  try {
    n = n || new Function("return this")();
  } catch (r) {
    "object" === typeof window && (n = window);
  }
  e.exports = n;
},
1242: function (e, t, n) {
  n(257), (e.exports = n(1243));
},
1243: function (e, t, n) {
  var r, i, o;
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self && self,
    (i = [n(160), n(1244)]),
    void 0 ===
      (o =
        "function" ===
        typeof (r = function (e, t) {
          "use strict";
          var r,
            i,
            o = n(23);
          function a() {
            var t = (0, e.default)(".nav-search-input")[0].value.trim();
            t
              ? window.open(
                  "/credit/publicCreditSearch.htm?key=" +
                    encodeURIComponent(t)
                )
              : window.open("/credit/cha.htm"),
              goldlog.record(
                "/xinyong.newhome.dosearch",
                "CLK",
                "",
                "H1481495477"
              );
          }
          function s(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
              n = window.location.search.substr(1).match(t);
            return null != n ? decodeURIComponent(n[2]) : null;
          }
          function u() {
            var e = s("returnURL") || s("Done") || s("return_url");
            return e || location.href;
          }
          (e = o(e)),
            window.isBigImgLoaded
              ? (0, e.default)(".banner-wrap").addClass("start-animation")
              : (0, e.default)(".banner-big-img").on("load", function () {
                  (0, e.default)(".banner-wrap").addClass("start-animation");
                }),
            (0, e.default)(".nav-search-input").keypress(function () {
              "13" == event.keyCode && a();
            }),
            (0, e.default)(".nav-search-icon2").click(function () {
              a();
            }),
            (0, e.default)("#register-btn").attr(
              "href",
              ((r = u()),
              (i = "//accounts.alibaba.com/register/cnfm_reg.htm"),
              "credit.alibaba.com" != location.host &&
                (i =
                  "//xinyong.1688.com/register.htm?Done=" +
                  encodeURIComponent(r)),
              i)
            );
          var l = !1,
            c = (0, e.default)(".video-ele")[0];
          (0, e.default)(".banner-action").click(function () {
            (0, e.default)(".video-bg").show(),
              (0, e.default)(".video-box").show(),
              l
                ? c.play()
                : ((c.src =
                    "https://os.alipayobjects.com/rmsportal/FeYJgPROSKsjPFNEedfu.mp4"),
                  c.play(),
                  (l = !0));
          }),
            (0, e.default)(".video-close").click(function () {
              (0, e.default)(".video-bg").hide(),
                (0, e.default)(".video-box").hide(),
                l && c.pause();
            }),
            (function () {
              var t,
                n = 1,
                r = window["banner-count"],
                i = window["banner-delay"] || 5e3;
              function o(t) {
                (n = +t) > r && (n = 1),
                  (0, e.default)(".banner-wrap").removeClass(
                    "banner-current"
                  ),
                  (0, e.default)("[data-banner-index=" + n + "]").addClass(
                    "banner-current"
                  ),
                  (0, e.default)(".banner-dot").removeClass("current"),
                  (0, e.default)(
                    "[data-banner-dot-index=" + n + "]"
                  ).addClass("current");
              }
              function a() {
                t && clearInterval(t),
                  (t = setInterval(function () {
                    o(++n);
                  }, i));
              }
              r > 1 && a(),
                (0, e.default)(".banner-dot").click(function () {
                  o((0, e.default)(this).attr("data-banner-dot-index")), a();
                });
            })();
        })
          ? r.apply(t, i)
          : r) || (e.exports = o);
}});
