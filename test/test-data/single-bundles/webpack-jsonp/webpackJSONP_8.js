(self.webpackChunk = self.webpackChunk || []).push([
  [948],
  {9662: (t, r, e) => {
    var n = e(7854),
      o = e(614),
      i = e(6330),
      u = n.TypeError;
    t.exports = function (t) {
      if (o(t)) return t;
      throw u(i(t) + " is not a function");
    };
  },
  6077: (t, r, e) => {
    var n = e(7854),
      o = e(614),
      i = n.String,
      u = n.TypeError;
    t.exports = function (t) {
      if ("object" == typeof t || o(t)) return t;
      throw u("Can't set " + i(t) + " as a prototype");
    };
  },},
]);
