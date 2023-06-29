!(function () {
  var t,
    n = {
      993: function (t, n, e) {
        var a = e(85).reqData;
        n.default = function () {
          window.onload = function () {
            document
              .getElementById("btn")
              .addEventListener("click", function () {
                var t;
                (t = a.base + "?par1=" + a.p1 + "&par2=" + a.p2), fetch(t);
              });
          };
        };
      },
      85: function (t, n) {
        n.reqData = { base: "/api/data", p1: "123", p2: "abc" };
      },
    },
    e = {};
  (t = (function t(a) {
    var r = e[a];
    if (void 0 !== r) return r.exports;
    var o = (e[a] = { exports: {} });
    return n[a](o, o.exports, t), o.exports;
  })(993)),
    console.log("start herre"),
    t();
})();
