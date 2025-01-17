!function(r) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = r(); else if ('function' == typeof define && define.amd) define([], r); else {
    var e;
    e = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this, e.omnivore = r();
  }
}(function() {
  var r;
  return function r(e, t, n) {
    function o(u, a) {
      if (!t[u]) {
        if (!e[u]) {
          var s = 'function' == typeof require && require;
          if (!a && s) return s(u, !0);
          if (i) return i(u, !0);
          var f = new Error('Cannot find module \'' + u + '\'');
          throw f.code = 'MODULE_NOT_FOUND', f;
        }
        var c = t[u] = { exports: {} };
        e[u][0].call(c.exports, function(r) {
          var t = e[u][1][r];
          return o(t ? t : r);
        }, c, c.exports, r, e, t, n);
      }
      return t[u].exports;
    }

    for (var i = 'function' == typeof require && require, u = 0; u < n.length; u++) o(n[u]);
    return o;
  }({
    1: [function(r, e, t) {
      function n(r, e) {
        'setGeoJSON' in r ? r.setGeoJSON(e) : 'addData' in r && r.addData(e);
      }

      function o(r, e, t) {
        var o = t || L.geoJson();
        return y(r, function(r, e) {
          return r ? o.fire('error', { error: r }) : (n(o, JSON.parse(e.responseText)), void o.fire('ready'));
        }), o;
      }

      function i(r, e, t) {
        function n(r, t) {
          return r ? o.fire('error', { error: r }) : (l(t.responseText, e, o), void o.fire('ready'));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function u(r, e, t) {
        function n(r, t) {
          function n() {
            i = !0;
          }

          var i;
          return r ? o.fire('error', { error: r }) : (o.on('error', n), p(t.responseText, e, o), o.off('error', n), void (i || o.fire('ready')));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function a(r, e, t) {
        function n(r, t) {
          function n() {
            i = !0;
          }

          var i;
          return r ? o.fire('error', { error: r }) : (o.on('error', n), h(t.responseXML || t.responseText, e, o), o.off('error', n), void (i || o.fire('ready')));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function s(r, e, t) {
        function n(r, t) {
          function n() {
            i = !0;
          }

          var i;
          return r ? o.fire('error', { error: r }) : (o.on('error', n), g(t.responseXML || t.responseText, e, o), o.off('error', n), void (i || o.fire('ready')));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function f(r, e, t) {
        function n(r, t) {
          return r ? o.fire('error', { error: r }) : (v(t.responseText, e, o), void o.fire('ready'));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function c(r, e, t) {
        function n(r, t) {
          return r ? o.fire('error', { error: r }) : (d(t.responseText, e, o), void o.fire('ready'));
        }

        var o = t || L.geoJson();
        return y(r, n), o;
      }

      function l(r, e, t) {
        var o = 'string' == typeof r ? JSON.parse(r) : r;
        t = t || L.geoJson();
        for (var i in o.objects) {
          var u = S.feature(o, o.objects[i]);
          u.features ? n(t, u.features) : n(t, u);
        }
        return t;
      }

      function p(r, e, t) {
        function o(r, e) {
          return r ? t.fire('error', { error: r }) : void n(t, e);
        }

        return t = t || L.geoJson(), e = e || {}, x.csv2geojson(r, e, o), t;
      }

      function h(r, e, t) {
        var o = m(r);
        if (!o) return t.fire('error', { error: 'Could not parse GPX' });
        t = t || L.geoJson();
        var i = T.gpx(o);
        return n(t, i), t;
      }

      function g(r, e, t) {
        var o = m(r);
        if (!o) return t.fire('error', { error: 'Could not parse KML' });
        t = t || L.geoJson();
        var i = T.kml(o);
        return n(t, i), t;
      }

      function d(r, e, t) {
        t = t || L.geoJson(), e = e || {};
        for (var o = E.decode(r, e.precision), i = {
          type: 'LineString',
          coordinates: [],
        }, u = 0; u < o.length; u++) i.coordinates[u] = [o[u][1], o[u][0]];
        return n(t, i), t;
      }

      function v(r, e, t) {
        t = t || L.geoJson();
        var o = w(r);
        return n(t, o), t;
      }

      function m(r) {
        return 'string' == typeof r ? (new DOMParser).parseFromString(r, 'text/xml') : r;
      }

      var y = r('corslite'), x = r('csv2geojson'), w = r('wellknown'), E = r('polyline'), S = r('topojson'),
        T = r('togeojson');
      e.exports.polyline = c, e.exports.polyline.parse = d, e.exports.geojson = o, e.exports.topojson = i, e.exports.topojson.parse = l, e.exports.csv = u, e.exports.csv.parse = p, e.exports.gpx = a, e.exports.gpx.parse = h, e.exports.kml = s, e.exports.kml.parse = g, e.exports.wkt = f, e.exports.wkt.parse = v;
    }, { corslite: 4, csv2geojson: 5, polyline: 8, togeojson: 9, topojson: 10, wellknown: 11 }], 2: [function(r, e, t) {
    }, {}], 3: [function(r, e, t) {
      function n() {
        throw new Error('setTimeout has not been defined');
      }

      function o() {
        throw new Error('clearTimeout has not been defined');
      }

      function i(r) {
        if (l === setTimeout) return setTimeout(r, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(r, 0);
        try {
          return l(r, 0);
        }
        catch (e) {
          try {
            return l.call(null, r, 0);
          }
          catch (e) {
            return l.call(this, r, 0);
          }
        }
      }

      function u(r) {
        if (p === clearTimeout) return clearTimeout(r);
        if ((p === o || !p) && clearTimeout) return p = clearTimeout, clearTimeout(r);
        try {
          return p(r);
        }
        catch (e) {
          try {
            return p.call(null, r);
          }
          catch (e) {
            return p.call(this, r);
          }
        }
      }

      function a() {
        v && g && (v = !1, g.length ? d = g.concat(d) : m = -1, d.length && s());
      }

      function s() {
        if (!v) {
          var r = i(a);
          v = !0;
          for (var e = d.length; e;) {
            for (g = d, d = []; ++m < e;) g && g[m].run();
            m = -1, e = d.length;
          }
          g = null, v = !1, u(r);
        }
      }

      function f(r, e) {
        this.fun = r, this.array = e;
      }

      function c() {
      }

      var l, p, h = e.exports = {};
      !function() {
        try {
          l = 'function' == typeof setTimeout ? setTimeout : n;
        }
        catch (r) {
          l = n;
        }
        try {
          p = 'function' == typeof clearTimeout ? clearTimeout : o;
        }
        catch (r) {
          p = o;
        }
      }();
      var g, d = [], v = !1, m = -1;
      h.nextTick = function(r) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
        d.push(new f(r, e)), 1 !== d.length || v || i(s);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, h.title = 'browser', h.browser = !0, h.env = {}, h.argv = [], h.version = '', h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(r) {
        throw new Error('process.binding is not supported');
      }, h.cwd = function() {
        return '/';
      }, h.chdir = function(r) {
        throw new Error('process.chdir is not supported');
      }, h.umask = function() {
        return 0;
      };
    }, {}], 4: [function(r, e, t) {
      function n(r, e, t) {
        function n(r) {
          return r >= 200 && r < 300 || 304 === r;
        }

        function o() {
          void 0 === a.status || n(a.status) ? e.call(a, null, a) : e.call(a, a, null);
        }

        var i = !1;
        if ('undefined' == typeof window.XMLHttpRequest) return e(Error('Browser not supported'));
        if ('undefined' == typeof t) {
          var u = r.match(/^\s*https?:\/\/[^\/]*/);
          t = u && u[0] !== location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        }
        var a = new window.XMLHttpRequest;
        if (t && !('withCredentials' in a)) {
          a = new window.XDomainRequest;
          var s = e;
          e = function() {
            if (i) s.apply(this, arguments); else {
              var r = this, e = arguments;
              setTimeout(function() {
                s.apply(r, e);
              }, 0);
            }
          };
        }
        return 'onload' in a ? a.onload = o : a.onreadystatechange = function() {
          4 === a.readyState && o();
        }, a.onerror = function(r) {
          e.call(this, r || !0, null), e = function() {
          };
        }, a.onprogress = function() {
        }, a.ontimeout = function(r) {
          e.call(this, r, null), e = function() {
          };
        }, a.onabort = function(r) {
          e.call(this, r, null), e = function() {
          };
        }, a.open('GET', r, !0), a.send(null), i = !0, a;
      }

      'undefined' != typeof e && (e.exports = n);
    }, {}], 5: [function(r, e, t) {
      'use strict';

      function n(r, e) {
        var t, n, o;
        for (var i in r) n = i.match(e), n && (!t || n[0].length / i.length > o) && (o = n[0].length / i.length, t = i);
        return t;
      }

      function o(r) {
        return n(r, m);
      }

      function i(r) {
        return n(r, y);
      }

      function u(r) {
        return !!r.match(m);
      }

      function a(r) {
        return !!r.match(y);
      }

      function s(r) {
        return 'object' == typeof r ? Object.keys(r).length : 0;
      }

      function f(r) {
        var e = [',', ';', '\t', '|'], t = [];
        return e.forEach(function(e) {
          var n = d.dsvFormat(e)
            .parse(r);
          if (n.length >= 1) {
            for (var o = s(n[0]), i = 0; i < n.length; i++) if (s(n[i]) !== o) return;
            t.push({ delimiter: e, arity: Object.keys(n[0]).length });
          }
        }), t.length ? t.sort(function(r, e) {
          return e.arity - r.arity;
        })[0].delimiter : null;
      }

      function c(r) {
        return delete r.columns, r;
      }

      function l(r) {
        var e = f(r);
        return e ? c(d.dsvFormat(e)
          .parse(r)) : null;
      }

      function p(r, e, t) {
        t || (t = e, e = {}), e.delimiter = e.delimiter || ',';
        var n = e.latfield || '', u = e.lonfield || '', a = e.crs || '', s = [],
          c = { type: 'FeatureCollection', features: s };
        if ('' !== a && (c.crs = {
          type: 'name',
          properties: { name: a },
        }), 'auto' === e.delimiter && 'string' == typeof r && (e.delimiter = f(r), !e.delimiter)) return void t({
          type: 'Error',
          message: 'Could not autodetect delimiter',
        });
        var l = 'string' == typeof r ? d.dsvFormat(e.delimiter)
          .parse(r) : r;
        if (!l.length) return void t(null, c);
        var p, h = [];
        n || (n = o(l[0])), u || (u = i(l[0]));
        var g = !n || !u;
        if (g) {
          for (p = 0; p < l.length; p++) s.push({ type: 'Feature', properties: l[p], geometry: null });
          return void t(h.length ? h : null, c);
        }
        for (p = 0; p < l.length; p++) if (void 0 !== l[p][u] && void 0 !== l[p][n]) {
          var m, y, x, w = l[p][u], L = l[p][n];
          x = v(w, 'EW'), x && (w = x), x = v(L, 'NS'), x && (L = x), m = parseFloat(w), y = parseFloat(L), isNaN(m) || isNaN(y) ? h.push({
            message: 'A row contained an invalid value for latitude or longitude',
            row: l[p],
            index: p,
          }) : (e.includeLatLon || (delete l[p][u], delete l[p][n]), s.push({
            type: 'Feature',
            properties: l[p],
            geometry: { type: 'Point', coordinates: [parseFloat(m), parseFloat(y)] },
          }));
        }
        t(h.length ? h : null, c);
      }

      function h(r) {
        for (var e = r.features, t = {
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: [] },
        }, n = 0; n < e.length; n++) t.geometry.coordinates.push(e[n].geometry.coordinates);
        return t.properties = e.reduce(function(r, e) {
          for (var t in e.properties) r[t] || (r[t] = []), r[t].push(e.properties[t]);
          return r;
        }, {}), { type: 'FeatureCollection', features: [t] };
      }

      function g(r) {
        for (var e = r.features, t = {
          type: 'Feature',
          geometry: { type: 'Polygon', coordinates: [[]] },
        }, n = 0; n < e.length; n++) t.geometry.coordinates[0].push(e[n].geometry.coordinates);
        return t.properties = e.reduce(function(r, e) {
          for (var t in e.properties) r[t] || (r[t] = []), r[t].push(e.properties[t]);
          return r;
        }, {}), { type: 'FeatureCollection', features: [t] };
      }

      var d = r('d3-dsv'), v = r('sexagesimal'), m = /(Lat)(itude)?/gi, y = /(L)(on|ng)(gitude)?/i;
      e.exports = {
        isLon: a,
        isLat: u,
        guessLatHeader: o,
        guessLonHeader: i,
        csv: d.csvParse,
        tsv: d.tsvParse,
        dsv: d,
        auto: l,
        csv2geojson: p,
        toLine: h,
        toPolygon: g,
      };
    }, { 'd3-dsv': 6, sexagesimal: 7 }], 6: [function(e, t, n) {
      !function(e, o) {
        'object' == typeof n && 'undefined' != typeof t ? o(n) : 'function' == typeof r && r.amd ? r(['exports'], o) : o(e.d3 = e.d3 || {});
      }(this, function(r) {
        'use strict';

        function e(r) {
          return new Function('d', 'return {' + r.map(function(r, e) {
            return JSON.stringify(r) + ': d[' + e + ']';
          })
            .join(',') + '}');
        }

        function t(r, t) {
          var n = e(r);
          return function(e, o) {
            return t(n(e), o, r);
          };
        }

        function n(r) {
          var e = Object.create(null), t = [];
          return r.forEach(function(r) {
            for (var n in r) n in e || t.push(e[n] = n);
          }), t;
        }

        function o(r) {
          function o(r, n) {
            var o, u, a = i(r, function(r, i) {
              return o ? o(r, i - 1) : (u = r, void (o = n ? t(r, n) : e(r)));
            });
            return a.columns = u, a;
          }

          function i(r, e) {
            function t() {
              if (f >= s) return u;
              if (o) return o = !1, i;
              var e, t = f;
              if (34 === r.charCodeAt(t)) {
                for (var n = t; n++ < s;) if (34 === r.charCodeAt(n)) {
                  if (34 !== r.charCodeAt(n + 1)) break;
                  ++n;
                }
                return f = n + 2, e = r.charCodeAt(n + 1), 13 === e ? (o = !0, 10 === r.charCodeAt(n + 2) && ++f) : 10 === e && (o = !0), r.slice(t + 1, n)
                  .replace(/""/g, '"');
              }
              for (; f < s;) {
                var a = 1;
                if (e = r.charCodeAt(f++), 10 === e) o = !0; else if (13 === e) o = !0, 10 === r.charCodeAt(f) && (++f, ++a); else if (e !== l) continue;
                return r.slice(t, f - a);
              }
              return r.slice(t);
            }

            for (var n, o, i = {}, u = {}, a = [], s = r.length, f = 0, c = 0; (n = t()) !== u;) {
              for (var p = []; n !== i && n !== u;) p.push(n), n = t();
              e && null == (p = e(p, c++)) || a.push(p);
            }
            return a;
          }

          function u(e, t) {
            return null == t && (t = n(e)), [t.map(f)
              .join(r)].concat(e.map(function(e) {
              return t.map(function(r) {
                return f(e[r]);
              })
                .join(r);
            }))
              .join('\n');
          }

          function a(r) {
            return r.map(s)
              .join('\n');
          }

          function s(e) {
            return e.map(f)
              .join(r);
          }

          function f(r) {
            return null == r ? '' : c.test(r += '') ? '"' + r.replace(/\"/g, '""') + '"' : r;
          }

          var c = new RegExp('["' + r + '\n]'), l = r.charCodeAt(0);
          return { parse: o, parseRows: i, format: u, formatRows: a };
        }

        var i = o(','), u = i.parse, a = i.parseRows, s = i.format, f = i.formatRows, c = o('\t'), l = c.parse,
          p = c.parseRows, h = c.format, g = c.formatRows;
        r.dsvFormat = o, r.csvParse = u, r.csvParseRows = a, r.csvFormat = s, r.csvFormatRows = f, r.tsvParse = l, r.tsvParseRows = p, r.tsvFormat = h, r.tsvFormatRows = g, Object.defineProperty(r, '__esModule', { value: !0 });
      });
    }, {}], 7: [function(r, e, t) {
      function n(r, e) {
        return a(r, e).val;
      }

      function o(r) {
        return i(r.lat, 'lat') + ' ' + i(r.lon, 'lon');
      }

      function i(r, e) {
        var t = u(r, e);
        return t.whole + '° ' + (t.minutes ? t.minutes + '\' ' : '') + (t.seconds ? t.seconds + '" ' : '') + t.dir;
      }

      function u(r, e) {
        var t = { lat: ['N', 'S'], lon: ['E', 'W'] }[e] || '', n = t[r >= 0 ? 0 : 1], o = Math.abs(r),
          i = Math.floor(o), u = o - i, a = 60 * u, s = Math.floor(a), f = Math.floor(60 * (a - s));
        return { whole: i, minutes: s, seconds: f, dir: n };
      }

      function a(r, e, t) {
        if (e || (e = 'NSEW'), 'string' != typeof r) return { val: null, regex: t };
        t = t || /[\s\,]*([\-|\—|\―]?[0-9.]+)°? *(?:([0-9.]+)['’′‘] *)?(?:([0-9.]+)(?:''|"|”|″) *)?([NSEW])?/gi;
        var n = t.exec(r);
        return n ? n[4] && e.indexOf(n[4]) === -1 ? {
          val: null,
          regex: t,
        } : {
          val: ((n[1] ? parseFloat(n[1]) : 0) + (n[2] ? parseFloat(n[2]) / 60 : 0) + (n[3] ? parseFloat(n[3]) / 3600 : 0)) * (n[4] && 'S' === n[4] || 'W' === n[4] ? -1 : 1),
          regex: t,
          raw: n[0],
          dim: n[4],
        } : { val: null, regex: t };
      }

      function s(r, e) {
        r = r.trim();
        var t = a(r, e);
        if (null === t.val) return null;
        var n = a(r, e, t.regex);
        return null === n.val ? null : t.raw + n.raw !== r ? null : t.dim ? f(t.val, n.val, t.dim) : [t.val, n.val];
      }

      function f(r, e, t) {
        return 'N' === t || 'S' === t ? [r, e] : 'W' === t || 'E' === t ? [e, r] : void 0;
      }

      e.exports = n, e.exports.pair = s, e.exports.format = i, e.exports.formatPair = o, e.exports.coordToDMS = u;
    }, {}], 8: [function(r, e, t) {
      'use strict';

      function n(r, e) {
        r = Math.round(r * e), r <<= 1, r < 0 && (r = ~r);
        for (var t = ''; r >= 32;) t += String.fromCharCode((32 | 31 & r) + 63), r >>= 5;
        return t += String.fromCharCode(r + 63);
      }

      function o(r) {
        for (var e = [], t = 0; t < r.length; t++) e.push(r[t].slice()
          .reverse());
        return e;
      }

      var i = {};
      i.decode = function(r, e) {
        for (var t, n, o = 0, i = 0, u = 0, a = [], s = 0, f = 0, c = null, l = Math.pow(10, e || 5); o < r.length;) {
          c = null, s = 0, f = 0;
          do c = r.charCodeAt(o++) - 63, f |= (31 & c) << s, s += 5; while (c >= 32);
          t = 1 & f ? ~(f >> 1) : f >> 1, s = f = 0;
          do c = r.charCodeAt(o++) - 63, f |= (31 & c) << s, s += 5; while (c >= 32);
          n = 1 & f ? ~(f >> 1) : f >> 1, i += t, u += n, a.push([i / l, u / l]);
        }
        return a;
      }, i.encode = function(r, e) {
        if (!r.length) return '';
        for (var t = Math.pow(10, e || 5), o = n(r[0][0], t) + n(r[0][1], t), i = 1; i < r.length; i++) {
          var u = r[i], a = r[i - 1];
          o += n(u[0] - a[0], t), o += n(u[1] - a[1], t);
        }
        return o;
      }, i.fromGeoJSON = function(r, e) {
        if (r && 'Feature' === r.type && (r = r.geometry), !r || 'LineString' !== r.type) throw new Error('Input must be a GeoJSON LineString');
        return i.encode(o(r.coordinates), e);
      }, i.toGeoJSON = function(r, e) {
        var t = i.decode(r, e);
        return { type: 'LineString', coordinates: o(t) };
      }, 'object' == typeof e && e.exports && (e.exports = i);
    }, {}], 9: [function(r, e, t) {
      (function(n) {
        var o = function() {
          'use strict';

          function e(r) {
            if (!r || !r.length) return 0;
            for (var e = 0, t = 0; e < r.length; e++) t = (t << 5) - t + r.charCodeAt(e) | 0;
            return t;
          }

          function o(r, e) {
            return r.getElementsByTagName(e);
          }

          function i(r, e) {
            return r.getAttribute(e);
          }

          function u(r, e) {
            return parseFloat(i(r, e));
          }

          function a(r, e) {
            var t = o(r, e);
            return t.length ? t[0] : null;
          }

          function s(r) {
            return r.normalize && r.normalize(), r;
          }

          function f(r) {
            for (var e = 0, t = []; e < r.length; e++) t[e] = parseFloat(r[e]);
            return t;
          }

          function c(r) {
            var e = {};
            for (var t in r) r[t] && (e[t] = r[t]);
            return e;
          }

          function l(r) {
            return r && s(r), r && r.textContent || '';
          }

          function p(r) {
            return f(r.replace(y, '')
              .split(','));
          }

          function h(r) {
            for (var e = r.replace(x, '')
              .split(w), t = [], n = 0; n < e.length; n++) t.push(p(e[n]));
            return t;
          }

          function g(r) {
            var e, t = [u(r, 'lon'), u(r, 'lat')], n = a(r, 'ele'), o = a(r, 'gpxtpx:hr') || a(r, 'hr'),
              i = a(r, 'time');
            return n && (e = parseFloat(l(n)), isNaN(e) || t.push(e)), {
              coordinates: t,
              time: i ? l(i) : null,
              heartRate: o ? parseFloat(l(o)) : null,
            };
          }

          function d() {
            return { type: 'FeatureCollection', features: [] };
          }

          function v(r) {
            return void 0 !== r.xml ? r.xml : m.serializeToString(r);
          }

          var m, y = /\s*/g, x = /^\s*|\s*$/g, w = /\s+/;
          'undefined' != typeof XMLSerializer ? m = new XMLSerializer : 'object' != typeof t || 'object' != typeof n || n.browser || (m = new (r('xmldom').XMLSerializer));
          var L = {
            kml: function(r) {
              function t(r) {
                var e, t;
                return r = r || '', '#' === r.substr(0, 1) && (r = r.substr(1)), 6 !== r.length && 3 !== r.length || (e = r), 8 === r.length && (t = parseInt(r.substr(0, 2), 16) / 255, e = '#' + r.substr(2)), [e, isNaN(t) ? void 0 : t];
              }

              function n(r) {
                return f(r.split(' '));
              }

              function u(r) {
                var e = o(r, 'coord', 'gx'), t = [], i = [];
                0 === e.length && (e = o(r, 'gx:coord'));
                for (var u = 0; u < e.length; u++) t.push(n(l(e[u])));
                for (var a = o(r, 'when'), s = 0; s < a.length; s++) i.push(l(a[s]));
                return { coords: t, times: i };
              }

              function s(r) {
                var e, t, n, i, f, c = [], g = [];
                if (a(r, 'MultiGeometry')) return s(a(r, 'MultiGeometry'));
                if (a(r, 'MultiTrack')) return s(a(r, 'MultiTrack'));
                if (a(r, 'gx:MultiTrack')) return s(a(r, 'gx:MultiTrack'));
                for (n = 0; n < y.length; n++) if (t = o(r, y[n])) for (i = 0; i < t.length; i++) if (e = t[i], 'Point' === y[n]) c.push({
                  type: 'Point',
                  coordinates: p(l(a(e, 'coordinates'))),
                }); else if ('LineString' === y[n]) c.push({
                  type: 'LineString',
                  coordinates: h(l(a(e, 'coordinates'))),
                }); else if ('Polygon' === y[n]) {
                  var d = o(e, 'LinearRing'), v = [];
                  for (f = 0; f < d.length; f++) v.push(h(l(a(d[f], 'coordinates'))));
                  c.push({ type: 'Polygon', coordinates: v });
                }
                else if ('Track' === y[n] || 'gx:Track' === y[n]) {
                  var m = u(e);
                  c.push({ type: 'LineString', coordinates: m.coords }), m.times.length && g.push(m.times);
                }
                return { geoms: c, coordTimes: g };
              }

              function c(r) {
                var e, n = s(r), u = {}, f = l(a(r, 'name')), c = l(a(r, 'styleUrl')), p = l(a(r, 'description')),
                  h = a(r, 'TimeSpan'), g = a(r, 'ExtendedData'), d = a(r, 'LineStyle'), v = a(r, 'PolyStyle');
                if (!n.geoms.length) return [];
                if (f && (u.name = f), '#' !== c[0] && (c = '#' + c), c && m[c] && (u.styleUrl = c, u.styleHash = m[c]), p && (u.description = p), h) {
                  var y = l(a(h, 'begin')), x = l(a(h, 'end'));
                  u.timespan = { begin: y, end: x };
                }
                if (d) {
                  var w = t(l(a(d, 'color'))), L = w[0], E = w[1], S = parseFloat(l(a(d, 'width')));
                  L && (u.stroke = L), isNaN(E) || (u['stroke-opacity'] = E), isNaN(S) || (u['stroke-width'] = S);
                }
                if (v) {
                  var T = t(l(a(v, 'color'))), M = T[0], P = T[1], N = l(a(v, 'fill')), b = l(a(v, 'outline'));
                  M && (u.fill = M), isNaN(P) || (u['fill-opacity'] = P), N && (u['fill-opacity'] = '1' === N ? 1 : 0), b && (u['stroke-opacity'] = '1' === b ? 1 : 0);
                }
                if (g) {
                  var F = o(g, 'Data'), j = o(g, 'SimpleData');
                  for (e = 0; e < F.length; e++) u[F[e].getAttribute('name')] = l(a(F[e], 'value'));
                  for (e = 0; e < j.length; e++) u[j[e].getAttribute('name')] = l(j[e]);
                }
                n.coordTimes.length && (u.coordTimes = 1 === n.coordTimes.length ? n.coordTimes[0] : n.coordTimes);
                var C = {
                  type: 'Feature',
                  geometry: 1 === n.geoms.length ? n.geoms[0] : { type: 'GeometryCollection', geometries: n.geoms },
                  properties: u,
                };
                return i(r, 'id') && (C.id = i(r, 'id')), [C];
              }

              for (var g = d(), m = {}, y = ['Polygon', 'LineString', 'Point', 'Track', 'gx:Track'], x = o(r, 'Placemark'), w = o(r, 'Style'), L = o(r, 'StyleMap'), E = 0; E < w.length; E++) m['#' + i(w[E], 'id')] = e(v(w[E]))
                .toString(16);
              for (var S = 0; S < L.length; S++) m['#' + i(L[S], 'id')] = e(v(L[S]))
                .toString(16);
              for (var T = 0; T < x.length; T++) g.features = g.features.concat(c(x[T]));
              return g;
            }, gpx: function(r) {
              function e(r, e) {
                var t = o(r, e), n = [], i = [], u = [], a = t.length;
                if (a < 2) return {};
                for (var s = 0; s < a; s++) {
                  var f = g(t[s]);
                  n.push(f.coordinates), f.time && i.push(f.time), f.heartRate && u.push(f.heartRate);
                }
                return { line: n, times: i, heartRates: u };
              }

              function t(r) {
                for (var t, n = o(r, 'trkseg'), i = [], a = [], s = [], f = 0; f < n.length; f++) t = e(n[f], 'trkpt'), t.line && i.push(t.line), t.times && t.times.length && a.push(t.times), t.heartRates && t.heartRates.length && s.push(t.heartRates);
                if (0 !== i.length) {
                  var c = u(r);
                  return a.length && (c.coordTimes = 1 === i.length ? a[0] : a), s.length && (c.heartRates = 1 === i.length ? s[0] : s), {
                    type: 'Feature',
                    properties: c,
                    geometry: {
                      type: 1 === i.length ? 'LineString' : 'MultiLineString',
                      coordinates: 1 === i.length ? i[0] : i,
                    },
                  };
                }
              }

              function n(r) {
                var t = e(r, 'rtept');
                if (t.line) {
                  var n = { type: 'Feature', properties: u(r), geometry: { type: 'LineString', coordinates: t.line } };
                  return n;
                }
              }

              function i(r) {
                var e = u(r);
                return e.sym = l(a(r, 'sym')), {
                  type: 'Feature',
                  properties: e,
                  geometry: { type: 'Point', coordinates: g(r).coordinates },
                };
              }

              function u(r) {
                var e, t = ['name', 'desc', 'author', 'copyright', 'link', 'time', 'keywords'], n = {};
                for (e = 0; e < t.length; e++) n[t[e]] = l(a(r, t[e]));
                return c(n);
              }

              var s, f, p = o(r, 'trk'), h = o(r, 'rte'), v = o(r, 'wpt'), m = d();
              for (s = 0; s < p.length; s++) f = t(p[s]), f && m.features.push(f);
              for (s = 0; s < h.length; s++) f = n(h[s]), f && m.features.push(f);
              for (s = 0; s < v.length; s++) m.features.push(i(v[s]));
              return m;
            },
          };
          return L;
        }();
        'undefined' != typeof e && (e.exports = o);
      }).call(this, r('_process'));
    }, { _process: 3, xmldom: 2 }], 10: [function(e, t, n) {
      !function(e, o) {
        'object' == typeof n && 'undefined' != typeof t ? o(n) : 'function' == typeof r && r.amd ? r(['exports'], o) : o(e.topojson = e.topojson || {});
      }(this, function(r) {
        'use strict';

        function e() {
        }

        function t(r) {
          if (!r) return e;
          var t, n, o = r.scale[0], i = r.scale[1], u = r.translate[0], a = r.translate[1];
          return function(r, e) {
            e || (t = n = 0), r[0] = (t += r[0]) * o + u, r[1] = (n += r[1]) * i + a;
          };
        }

        function n(r) {
          if (!r) return e;
          var t, n, o = r.scale[0], i = r.scale[1], u = r.translate[0], a = r.translate[1];
          return function(r, e) {
            e || (t = n = 0);
            var s = Math.round((r[0] - u) / o), f = Math.round((r[1] - a) / i);
            r[0] = s - t, r[1] = f - n, t = s, n = f;
          };
        }

        function o(r, e) {
          for (var t, n = r.length, o = n - e; o < --n;) t = r[o], r[o++] = r[n], r[n] = t;
        }

        function i(r, e) {
          for (var t = 0, n = r.length; t < n;) {
            var o = t + n >>> 1;
            r[o] < e ? t = o + 1 : n = o;
          }
          return t;
        }

        function u(r, e) {
          return 'GeometryCollection' === e.type ? {
            type: 'FeatureCollection', features: e.geometries.map(function(e) {
              return a(r, e);
            }),
          } : a(r, e);
        }

        function a(r, e) {
          var t = { type: 'Feature', id: e.id, properties: e.properties || {}, geometry: s(r, e) };
          return null == e.id && delete t.id, t;
        }

        function s(r, e) {
          function n(r, e) {
            e.length && e.pop();
            for (var t, n = l[r < 0 ? ~r : r], i = 0, u = n.length; i < u; ++i) e.push(t = n[i].slice()), c(t, i);
            r < 0 && o(e, u);
          }

          function i(r) {
            return r = r.slice(), c(r, 0), r;
          }

          function u(r) {
            for (var e = [], t = 0, o = r.length; t < o; ++t) n(r[t], e);
            return e.length < 2 && e.push(e[0].slice()), e;
          }

          function a(r) {
            for (var e = u(r); e.length < 4;) e.push(e[0].slice());
            return e;
          }

          function s(r) {
            return r.map(a);
          }

          function f(r) {
            var e = r.type;
            return 'GeometryCollection' === e ? { type: e, geometries: r.geometries.map(f) } : e in p ? {
              type: e,
              coordinates: p[e](r),
            } : null;
          }

          var c = t(r.transform), l = r.arcs, p = {
            Point: function(r) {
              return i(r.coordinates);
            }, MultiPoint: function(r) {
              return r.coordinates.map(i);
            }, LineString: function(r) {
              return u(r.arcs);
            }, MultiLineString: function(r) {
              return r.arcs.map(u);
            }, Polygon: function(r) {
              return s(r.arcs);
            }, MultiPolygon: function(r) {
              return r.arcs.map(s);
            },
          };
          return f(e);
        }

        function f(r, e) {
          function t(e) {
            var t, n = r.arcs[e < 0 ? ~e : e], o = n[0];
            return r.transform ? (t = [0, 0], n.forEach(function(r) {
              t[0] += r[0], t[1] += r[1];
            })) : t = n[n.length - 1], e < 0 ? [t, o] : [o, t];
          }

          function n(r, e) {
            for (var t in r) {
              var n = r[t];
              delete e[n.start], delete n.start, delete n.end, n.forEach(function(r) {
                o[r < 0 ? ~r : r] = 1;
              }), a.push(n);
            }
          }

          var o = {}, i = {}, u = {}, a = [], s = -1;
          return e.forEach(function(t, n) {
            var o, i = r.arcs[t < 0 ? ~t : t];
            i.length < 3 && !i[1][0] && !i[1][1] && (o = e[++s], e[s] = t, e[n] = o);
          }), e.forEach(function(r) {
            var e, n, o = t(r), a = o[0], s = o[1];
            if (e = u[a]) if (delete u[e.end], e.push(r), e.end = s, n = i[s]) {
              delete i[n.start];
              var f = n === e ? e : e.concat(n);
              i[f.start = e.start] = u[f.end = n.end] = f;
            }
            else i[e.start] = u[e.end] = e; else if (e = i[s]) if (delete i[e.start], e.unshift(r), e.start = a, n = u[a]) {
              delete u[n.end];
              var c = n === e ? e : n.concat(e);
              i[c.start = n.start] = u[c.end = e.end] = c;
            }
            else i[e.start] = u[e.end] = e; else e = [r], i[e.start = a] = u[e.end = s] = e;
          }), n(u, i), n(i, u), e.forEach(function(r) {
            o[r < 0 ? ~r : r] || a.push([r]);
          }), a;
        }

        function c(r) {
          return s(r, l.apply(this, arguments));
        }

        function l(r, e, t) {
          function n(r) {
            var e = r < 0 ? ~r : r;
            (c[e] || (c[e] = [])).push({ i: r, g: s });
          }

          function o(r) {
            r.forEach(n);
          }

          function i(r) {
            r.forEach(o);
          }

          function u(r) {
            'GeometryCollection' === r.type ? r.geometries.forEach(u) : r.type in l && (s = r, l[r.type](r.arcs));
          }

          var a = [];
          if (arguments.length > 1) {
            var s, c = [], l = {
              LineString: o, MultiLineString: i, Polygon: i, MultiPolygon: function(r) {
                r.forEach(i);
              },
            };
            u(e), c.forEach(arguments.length < 3 ? function(r) {
              a.push(r[0].i);
            } : function(r) {
              t(r[0].g, r[r.length - 1].g) && a.push(r[0].i);
            });
          }
          else for (var p = 0, h = r.arcs.length; p < h; ++p) a.push(p);
          return { type: 'MultiLineString', arcs: f(r, a) };
        }

        function p(r) {
          var e = r[0], t = r[1], n = r[2];
          return Math.abs((e[0] - n[0]) * (t[1] - e[1]) - (e[0] - t[0]) * (n[1] - e[1]));
        }

        function h(r) {
          for (var e, t = -1, n = r.length, o = r[n - 1], i = 0; ++t < n;) e = o, o = r[t], i += e[0] * o[1] - e[1] * o[0];
          return i / 2;
        }

        function g(r) {
          return s(r, d.apply(this, arguments));
        }

        function d(r, e) {
          function t(r) {
            r.forEach(function(e) {
              e.forEach(function(e) {
                (o[e = e < 0 ? ~e : e] || (o[e] = [])).push(r);
              });
            }), i.push(r);
          }

          function n(e) {
            return Math.abs(h(s(r, { type: 'Polygon', arcs: [e] }).coordinates[0]));
          }

          var o = {}, i = [], u = [];
          return e.forEach(function(r) {
            'Polygon' === r.type ? t(r.arcs) : 'MultiPolygon' === r.type && r.arcs.forEach(t);
          }), i.forEach(function(r) {
            if (!r._) {
              var e = [], t = [r];
              for (r._ = 1, u.push(e); r = t.pop();) e.push(r), r.forEach(function(r) {
                r.forEach(function(r) {
                  o[r < 0 ? ~r : r].forEach(function(r) {
                    r._ || (r._ = 1, t.push(r));
                  });
                });
              });
            }
          }), i.forEach(function(r) {
            delete r._;
          }), {
            type: 'MultiPolygon', arcs: u.map(function(e) {
              var t, i = [];
              if (e.forEach(function(r) {
                r.forEach(function(r) {
                  r.forEach(function(r) {
                    o[r < 0 ? ~r : r].length < 2 && i.push(r);
                  });
                });
              }), i = f(r, i), (t = i.length) > 1) for (var u, a, s = 1, c = n(i[0]); s < t; ++s) (u = n(i[s])) > c && (a = i[0], i[0] = i[s], i[s] = a, c = u);
              return i;
            }),
          };
        }

        function v(r) {
          function e(r, e) {
            r.forEach(function(r) {
              r < 0 && (r = ~r);
              var t = o[r];
              t ? t.push(e) : o[r] = [e];
            });
          }

          function t(r, t) {
            r.forEach(function(r) {
              e(r, t);
            });
          }

          function n(r, e) {
            'GeometryCollection' === r.type ? r.geometries.forEach(function(r) {
              n(r, e);
            }) : r.type in a && a[r.type](r.arcs, e);
          }

          var o = {}, u = r.map(function() {
            return [];
          }), a = {
            LineString: e, MultiLineString: t, Polygon: t, MultiPolygon: function(r, e) {
              r.forEach(function(r) {
                t(r, e);
              });
            },
          };
          r.forEach(n);
          for (var s in o) for (var f = o[s], c = f.length, l = 0; l < c; ++l) for (var p = l + 1; p < c; ++p) {
            var h, g = f[l], d = f[p];
            (h = u[g])[s = i(h, d)] !== d && h.splice(s, 0, d), (h = u[d])[s = i(h, g)] !== g && h.splice(s, 0, g);
          }
          return u;
        }

        function m(r, e) {
          return r[1][2] - e[1][2];
        }

        function y() {
          function r(r, e) {
            for (; e > 0;) {
              var t = (e + 1 >> 1) - 1, o = n[t];
              if (m(r, o) >= 0) break;
              n[o._ = e] = o, n[r._ = e = t] = r;
            }
          }

          function e(r, e) {
            for (; ;) {
              var t = e + 1 << 1, i = t - 1, u = e, a = n[u];
              if (i < o && m(n[i], a) < 0 && (a = n[u = i]), t < o && m(n[t], a) < 0 && (a = n[u = t]), u === e) break;
              n[a._ = e] = a, n[r._ = e = u] = r;
            }
          }

          var t = {}, n = [], o = 0;
          return t.push = function(e) {
            return r(n[e._ = o] = e, o++), o;
          }, t.pop = function() {
            if (!(o <= 0)) {
              var r, t = n[0];
              return --o > 0 && (r = n[o], e(n[r._ = 0] = r, 0)), t;
            }
          }, t.remove = function(t) {
            var i, u = t._;
            if (n[u] === t) return u !== --o && (i = n[o], (m(i, t) < 0 ? r : e)(n[i._ = u] = i, u)), u;
          }, t;
        }

        function x(r, e) {
          function o(r) {
            a.remove(r), r[1][2] = e(r), a.push(r);
          }

          var i = t(r.transform), u = n(r.transform), a = y();
          return e || (e = p), r.arcs.forEach(function(r) {
            var t, n, s, f, c = [], l = 0;
            for (n = 0, s = r.length; n < s; ++n) f = r[n], i(r[n] = [f[0], f[1], 1 / 0], n);
            for (n = 1, s = r.length - 1; n < s; ++n) t = r.slice(n - 1, n + 2), t[1][2] = e(t), c.push(t), a.push(t);
            for (n = 0, s = c.length; n < s; ++n) t = c[n], t.previous = c[n - 1], t.next = c[n + 1];
            for (; t = a.pop();) {
              var p = t.previous, h = t.next;
              t[1][2] < l ? t[1][2] = l : l = t[1][2], p && (p.next = h, p[2] = t[2], o(p)), h && (h.previous = p, h[0] = t[0], o(h));
            }
            r.forEach(u);
          }), r;
        }

        var w = '1.6.26';
        r.version = w, r.mesh = c, r.meshArcs = l, r.merge = g, r.mergeArcs = d, r.feature = u, r.neighbors = v, r.presimplify = x;
      });
    }, {}], 11: [function(r, e, t) {
      function n(r) {
        function e(r) {
          var e = v.substring(y)
            .match(r);
          return e ? (y += e[0].length, e[0]) : null;
        }

        function t(r) {
          return r && m.match(/\d+/) && (r.crs = {
            type: 'name',
            properties: { name: 'urn:ogc:def:crs:EPSG::' + m },
          }), r;
        }

        function n() {
          e(/^\s*/);
        }

        function o() {
          n();
          for (var r, t = 0, o = [], i = [o], a = o; r = e(/^(\()/) || e(/^(\))/) || e(/^(\,)/) || e(u);) {
            if ('(' === r) i.push(a), a = [], i[i.length - 1].push(a), t++; else if (')' === r) {
              if (0 === a.length) return null;
              if (a = i.pop(), !a) return null;
              if (t--, 0 === t) break;
            }
            else if (',' === r) a = [], i[i.length - 1].push(a); else {
              if (r.split(/\s/g)
                .some(isNaN)) return null;
              Array.prototype.push.apply(a, r.split(/\s/g)
                .map(parseFloat));
            }
            n();
          }
          return 0 !== t ? null : o;
        }

        function i() {
          for (var r, t, o = []; t = e(u) || e(/^(\,)/);) ',' === t ? (o.push(r), r = []) : t.split(/\s/g)
            .some(isNaN) || (r || (r = []), Array.prototype.push.apply(r, t.split(/\s/g)
            .map(parseFloat))), n();
          return r ? (o.push(r), o.length ? o : null) : null;
        }

        function a() {
          if (!e(/^(point)/i)) return null;
          if (n(), !e(/^(\()/)) return null;
          var r = i();
          return r ? (n(), e(/^(\))/) ? { type: 'Point', coordinates: r[0] } : null) : null;
        }

        function s() {
          if (!e(/^(multipoint)/i)) return null;
          n();
          var r = v.substring(v.indexOf('(') + 1, v.length - 1)
            .replace(/\(/g, '')
            .replace(/\)/g, '');
          v = 'MULTIPOINT (' + r + ')';
          var t = o();
          return t ? (n(), { type: 'MultiPoint', coordinates: t }) : null;
        }

        function f() {
          if (!e(/^(multilinestring)/i)) return null;
          n();
          var r = o();
          return r ? (n(), { type: 'MultiLineString', coordinates: r }) : null;
        }

        function c() {
          if (!e(/^(linestring)/i)) return null;
          if (n(), !e(/^(\()/)) return null;
          var r = i();
          return r && e(/^(\))/) ? { type: 'LineString', coordinates: r } : null;
        }

        function l() {
          if (!e(/^(polygon)/i)) return null;
          n();
          var r = o();
          return r ? { type: 'Polygon', coordinates: r } : null;
        }

        function p() {
          if (!e(/^(multipolygon)/i)) return null;
          n();
          var r = o();
          return r ? { type: 'MultiPolygon', coordinates: r } : null;
        }

        function h() {
          var r, t = [];
          if (!e(/^(geometrycollection)/i)) return null;
          if (n(), !e(/^(\()/)) return null;
          for (; r = g();) t.push(r), n(), e(/^(\,)/), n();
          return e(/^(\))/) ? { type: 'GeometryCollection', geometries: t } : null;
        }

        function g() {
          return a() || c() || l() || s() || f() || p() || h();
        }

        var d = r.split(';'), v = d.pop(), m = (d.shift() || '').split('=')
          .pop(), y = 0;
        return t(g());
      }

      function o(r) {
        function e(r) {
          return r.join(' ');
        }

        function t(r) {
          return r.map(e)
            .join(', ');
        }

        function n(r) {
          return r.map(t)
            .map(u)
            .join(', ');
        }

        function i(r) {
          return r.map(n)
            .map(u)
            .join(', ');
        }

        function u(r) {
          return '(' + r + ')';
        }

        switch ('Feature' === r.type && (r = r.geometry), r.type) {
          case'Point':
            return 'POINT (' + e(r.coordinates) + ')';
          case'LineString':
            return 'LINESTRING (' + t(r.coordinates) + ')';
          case'Polygon':
            return 'POLYGON (' + n(r.coordinates) + ')';
          case'MultiPoint':
            return 'MULTIPOINT (' + t(r.coordinates) + ')';
          case'MultiPolygon':
            return 'MULTIPOLYGON (' + i(r.coordinates) + ')';
          case'MultiLineString':
            return 'MULTILINESTRING (' + n(r.coordinates) + ')';
          case'GeometryCollection':
            return 'GEOMETRYCOLLECTION (' + r.geometries.map(o)
              .join(', ') + ')';
          default:
            throw new Error('stringify requires a valid GeoJSON Feature or geometry object as input');
        }
      }

      e.exports = n, e.exports.parse = n, e.exports.stringify = o;
      var i = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/,
        u = new RegExp('^' + i.source + '(\\s' + i.source + '){1,}');
    }, {}],
  }, {}, [1])(1);
});
