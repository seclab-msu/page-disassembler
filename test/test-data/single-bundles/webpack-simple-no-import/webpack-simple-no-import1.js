!(function () {
  var t,
    n = {
      993: function (t, n, a) {
        var e = a(85).reqData;
        n.default = function () {
          window.onload = function () {
            document
              .getElementById("btn")
              .addEventListener("click", function () {
                var t;
                (t = e.base + "?par1=" + e.p1 + "&par2=" + e.p2), fetch(t);
              });
          };
        };
      },
      85: function (t, n) {
        n.reqData = { base: "/api/data", p1: "123", p2: "abc" };
      },
    },
    a = {};
  (t = (function t(e) {
    var o = a[e];
    if (void 0 !== o) return o.exports;
    var r = (a[e] = { exports: {} });
    return n[e](r, r.exports, t), r.exports;
  })(993)),
    console.log("we start"),
    t();
})();
