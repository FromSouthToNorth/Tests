// https://d3js.org/d3-tile/ v1.0.0 Copyright 2019 Mike Bostock
!function (t, n) {'object' == typeof exports && 'undefined' != typeof module ? n(exports) : 'function' == typeof define && define.amd ? define(['exports'], n) : n((t = t || self).d3 = t.d3 || {})}(this, function (t) {
  'use strict';

  function n(t) {return t.k}

  function e(t) {return [t.x, t.y]}

  function o(t) {return function () {return t}}

  t.tile = function () {
    let t = 0, r = 0, u = 960, i = 500, f = !0, l = !0, c = 256, a = n, h = e, p = 0;

    function s() {
      const n = +a.apply(this, arguments), e = h.apply(this, arguments), o = Math.log2(n / c),
        s = Math.round(Math.max(o + p, 0)), M = Math.pow(2, o - s) * c, d = +e[0] - n / 2, m = +e[1] - n / 2,
        g = Math.max(f ? 0 : -1 / 0, Math.floor((t - d) / M)), y = Math.min(f ? 1 << s : 1 / 0, Math.ceil((u - d) / M)),
        x = Math.max(l ? 0 : -1 / 0, Math.floor((r - m) / M)), z = Math.min(l ? 1 << s : 1 / 0, Math.ceil((i - m) / M)),
        b = [];
      for (let t = x; t < z; ++t) for (let n = g; n < y; ++n) b.push([n, t, s]);
      return b.translate = [d / M, m / M], b.scale = M, b
    }

    return s.size = function (n) {return arguments.length ? (t = r = 0, u = +n[0], i = +n[1], s) : [u - t, i - r]}, s.extent = function (n) {return arguments.length ? (t = +n[0][0], r = +n[0][1], u = +n[1][0], i = +n[1][1], s) : [[t, r], [u, i]]}, s.scale = function (t) {return arguments.length ? (a = 'function' == typeof t ? t : o(+t), s) : a}, s.translate = function (t) {return arguments.length ? (h = 'function' == typeof t ? t : o([+t[0], +t[1]]), s) : h}, s.zoomDelta = function (t) {return arguments.length ? (p = +t, s) : p}, s.tileSize = function (t) {return arguments.length ? (c = +t, s) : c}, s.clamp = function (t) {return arguments.length ? (f = l = !!t, s) : f && l}, s.clampX = function (t) {return arguments.length ? (f = !!t, s) : f}, s.clampY = function (t) {return arguments.length ? (l = !!t, s) : l}, s
  }, t.tileWrap = function ([t, n, e]) {
    const o = 1 << e;
    return [t - Math.floor(t / o) * o, n - Math.floor(n / o) * o, e]
  }, Object.defineProperty(t, '__esModule', { value: !0 })
});
