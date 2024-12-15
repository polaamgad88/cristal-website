
(() => {
  var um = Object.create;
  var qr = Object.defineProperty;
  var cm = Object.getOwnPropertyDescriptor;
  var lm = Object.getOwnPropertyNames;
  var fm = Object.getPrototypeOf,
    dm = Object.prototype.hasOwnProperty;
  var ye = (e, t) => () => (e && (t = e((e = 0))), t);
  var g = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Fe = (e, t) => {
      for (var r in t) qr(e, r, { get: t[r], enumerable: !0 });
    },
    _a = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of lm(t))
          !dm.call(e, i) &&
            i !== r &&
            qr(e, i, {
              get: () => t[i],
              enumerable: !(n = cm(t, i)) || n.enumerable,
            });
      return e;
    };
  var pe = (e, t, r) => (
    (r = e != null ? um(fm(e)) : {}),
    _a(
      t || !e || !e.__esModule
        ? qr(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
    $e = (e) => _a(qr({}, "__esModule", { value: !0 }), e);
  var ba = g(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) >= 16 : !1;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function () {
          return !1;
        };
        return;
      }
      let n = function (a) {
        let u = window.getComputedStyle(a, null),
          l = u.getPropertyValue("position"),
          _ = u.getPropertyValue("overflow"),
          f = u.getPropertyValue("display");
        (!l || l === "static") && (a.style.position = "relative"),
          _ !== "hidden" && (a.style.overflow = "hidden"),
          (!f || f === "inline") && (a.style.display = "block"),
          a.clientHeight === 0 && (a.style.height = "100%"),
          a.className.indexOf("object-fit-polyfill") === -1 &&
          (a.className += " object-fit-polyfill");
      },
        i = function (a) {
          let u = window.getComputedStyle(a, null),
            l = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px",
            };
          for (let _ in l)
            u.getPropertyValue(_) !== l[_] && (a.style[_] = l[_]);
        },
        o = function (a) {
          let u = a.parentNode;
          n(u),
            i(a),
            (a.style.position = "absolute"),
            (a.style.height = "100%"),
            (a.style.width = "auto"),
            a.clientWidth > u.clientWidth
              ? ((a.style.top = "0"),
                (a.style.marginTop = "0"),
                (a.style.left = "50%"),
                (a.style.marginLeft = a.clientWidth / -2 + "px"))
              : ((a.style.width = "100%"),
                (a.style.height = "auto"),
                (a.style.left = "0"),
                (a.style.marginLeft = "0"),
                (a.style.top = "50%"),
                (a.style.marginTop = a.clientHeight / -2 + "px"));
        },
        s = function (a) {
          if (typeof a > "u" || a instanceof Event)
            a = document.querySelectorAll("[data-object-fit]");
          else if (a && a.nodeName) a = [a];
          else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
          else return !1;
          for (let u = 0; u < a.length; u++) {
            if (!a[u].nodeName) continue;
            let l = a[u].nodeName.toLowerCase();
            if (l === "img") {
              if (t) continue;
              a[u].complete
                ? o(a[u])
                : a[u].addEventListener("load", function () {
                  o(this);
                });
            } else
              l === "video"
                ? a[u].readyState > 0
                  ? o(a[u])
                  : a[u].addEventListener("loadedmetadata", function () {
                    o(this);
                  })
                : o(a[u]);
          }
          return !0;
        };
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", s)
        : s(),
        window.addEventListener("resize", s),
        (window.objectFitPolyfill = s);
    })();
  });
  var Ia = g(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      function e(n) {
        Webflow.env("design") ||
          ($("video").each(function () {
            n && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
            $(".w-background-video--control").each(function () {
              n ? r($(this)) : t($(this));
            }));
      }
      function t(n) {
        n.find("> span").each(function (i) {
          $(this).prop("hidden", () => i === 0);
        });
      }
      function r(n) {
        n.find("> span").each(function (i) {
          $(this).prop("hidden", () => i === 1);
        });
      }
      $(document).ready(() => {
        let n = window.matchMedia("(prefers-reduced-motion: reduce)");
        n.addEventListener("change", (i) => {
          e(!i.matches);
        }),
          n.matches && e(!1),
          $("video:not([autoplay])").each(function () {
            $(this)
              .parent()
              .find(".w-background-video--control")
              .each(function () {
                t($(this));
              });
          }),
          $(document).on("click", ".w-background-video--control", function (i) {
            if (Webflow.env("design")) return;
            let o = $(i.currentTarget),
              s = $(`video#${o.attr("aria-controls")}`).get(0);
            if (s)
              if (s.paused) {
                let a = s.play();
                r(o),
                  a &&
                  typeof a.catch == "function" &&
                  a.catch(() => {
                    t(o);
                  });
              } else s.pause(), t(o);
          });
      });
    })();
  });
  var Jn = g(() => {
    "use strict";
    window.tram = (function (e) {
      function t(d, x) {
        var R = new p.Bare();
        return R.init(d, x);
      }
      function r(d) {
        return d.replace(/[A-Z]/g, function (x) {
          return "-" + x.toLowerCase();
        });
      }
      function n(d) {
        var x = parseInt(d.slice(1), 16),
          R = (x >> 16) & 255,
          M = (x >> 8) & 255,
          S = 255 & x;
        return [R, M, S];
      }
      function i(d, x, R) {
        return (
          "#" + ((1 << 24) | (d << 16) | (x << 8) | R).toString(16).slice(1)
        );
      }
      function o() { }
      function s(d, x) {
        l("Type warning: Expected: [" + d + "] Got: [" + typeof x + "] " + x);
      }
      function a(d, x, R) {
        l("Units do not match [" + d + "]: " + x + ", " + R);
      }
      function u(d, x, R) {
        if ((x !== void 0 && (R = x), d === void 0)) return R;
        var M = R;
        return (
          we.test(d) || !Oe.test(d)
            ? (M = parseInt(d, 10))
            : Oe.test(d) && (M = 1e3 * parseFloat(d)),
          0 > M && (M = 0),
          M === M ? M : R
        );
      }
      function l(d) {
        oe.debug && window && window.console.warn(d);
      }
      function _(d) {
        for (var x = -1, R = d ? d.length : 0, M = []; ++x < R;) {
          var S = d[x];
          S && M.push(S);
        }
        return M;
      }
      var f = (function (d, x, R) {
        function M(se) {
          return typeof se == "object";
        }
        function S(se) {
          return typeof se == "function";
        }
        function G() { }
        function ie(se, ve) {
          function Z() {
            var Ce = new ce();
            return S(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
          }
          function ce() { }
          ve === R && ((ve = se), (se = Object)), (Z.Bare = ce);
          var le,
            be = (G[d] = se[d]),
            Qe = (ce[d] = Z[d] = new G());
          return (
            (Qe.constructor = Z),
            (Z.mixin = function (Ce) {
              return (ce[d] = Z[d] = ie(Z, Ce)[d]), Z;
            }),
            (Z.open = function (Ce) {
              if (
                ((le = {}),
                  S(Ce) ? (le = Ce.call(Z, Qe, be, Z, se)) : M(Ce) && (le = Ce),
                  M(le))
              )
                for (var or in le) x.call(le, or) && (Qe[or] = le[or]);
              return S(Qe.init) || (Qe.init = se), Z;
            }),
            Z.open(ve)
          );
        }
        return ie;
      })("prototype", {}.hasOwnProperty),
        y = {
          ease: [
            "ease",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                G = S * d;
              return (
                x +
                R * (-2.75 * G * S + 11 * S * S + -15.5 * G + 8 * S + 0.25 * d)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                G = S * d;
              return x + R * (-1 * G * S + 3 * S * S + -3 * G + 2 * S);
            },
          ],
          "ease-out": [
            "ease-out",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                G = S * d;
              return (
                x +
                R * (0.3 * G * S + -1.6 * S * S + 2.2 * G + -1.8 * S + 1.9 * d)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                G = S * d;
              return x + R * (2 * G * S + -5 * S * S + 2 * G + 2 * S);
            },
          ],
          linear: [
            "linear",
            function (d, x, R, M) {
              return (R * d) / M + x;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (d, x, R, M) {
              return R * (d /= M) * d + x;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (d, x, R, M) {
              return -R * (d /= M) * (d - 2) + x;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d + x
                : (-R / 2) * (--d * (d - 2) - 1) + x;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d + x;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (d, x, R, M) {
              return R * ((d = d / M - 1) * d * d + 1) + x;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d + x
                : (R / 2) * ((d -= 2) * d * d + 2) + x;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d * d + x;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (d, x, R, M) {
              return -R * ((d = d / M - 1) * d * d * d - 1) + x;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d * d + x
                : (-R / 2) * ((d -= 2) * d * d * d - 2) + x;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d * d * d + x;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (d, x, R, M) {
              return R * ((d = d / M - 1) * d * d * d * d + 1) + x;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d * d * d + x
                : (R / 2) * ((d -= 2) * d * d * d * d + 2) + x;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (d, x, R, M) {
              return -R * Math.cos((d / M) * (Math.PI / 2)) + R + x;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (d, x, R, M) {
              return R * Math.sin((d / M) * (Math.PI / 2)) + x;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (d, x, R, M) {
              return (-R / 2) * (Math.cos((Math.PI * d) / M) - 1) + x;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (d, x, R, M) {
              return d === 0 ? x : R * Math.pow(2, 10 * (d / M - 1)) + x;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (d, x, R, M) {
              return d === M
                ? x + R
                : R * (-Math.pow(2, (-10 * d) / M) + 1) + x;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (d, x, R, M) {
              return d === 0
                ? x
                : d === M
                  ? x + R
                  : (d /= M / 2) < 1
                    ? (R / 2) * Math.pow(2, 10 * (d - 1)) + x
                    : (R / 2) * (-Math.pow(2, -10 * --d) + 2) + x;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (d, x, R, M) {
              return -R * (Math.sqrt(1 - (d /= M) * d) - 1) + x;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (d, x, R, M) {
              return R * Math.sqrt(1 - (d = d / M - 1) * d) + x;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (-R / 2) * (Math.sqrt(1 - d * d) - 1) + x
                : (R / 2) * (Math.sqrt(1 - (d -= 2) * d) + 1) + x;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                R * (d /= M) * d * ((S + 1) * d - S) + x
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                R * ((d = d / M - 1) * d * ((S + 1) * d + S) + 1) + x
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                (d /= M / 2) < 1
                  ? (R / 2) * d * d * (((S *= 1.525) + 1) * d - S) + x
                  : (R / 2) *
                  ((d -= 2) * d * (((S *= 1.525) + 1) * d + S) + 2) +
                  x
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        w = window,
        A = "bkwld-tram",
        T = /[\-\.0-9]/g,
        N = /[A-Z]/,
        L = "number",
        F = /^(rgb|#)/,
        k = /(em|cm|mm|in|pt|pc|px)$/,
        q = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        K = "unitless",
        J = /(all|none) 0s ease 0s/,
        re = /^(width|height)$/,
        B = " ",
        C = E.createElement("a"),
        I = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        X = function (d) {
          if (d in C.style) return { dom: d, css: d };
          var x,
            R,
            M = "",
            S = d.split("-");
          for (x = 0; x < S.length; x++)
            M += S[x].charAt(0).toUpperCase() + S[x].slice(1);
          for (x = 0; x < I.length; x++)
            if (((R = I[x] + M), R in C.style))
              return { dom: R, css: P[x] + d };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: X("transform"),
          transition: X("transition"),
          backface: X("backface-visibility"),
          timing: X("transition-timing-function"),
        });
      if (V.transition) {
        var te = V.timing.dom;
        if (((C.style[te] = y["ease-in-back"][0]), !C.style[te]))
          for (var ne in m) y[ne][0] = m[ne];
      }
      var U = (t.frame = (function () {
        var d =
          w.requestAnimationFrame ||
          w.webkitRequestAnimationFrame ||
          w.mozRequestAnimationFrame ||
          w.oRequestAnimationFrame ||
          w.msRequestAnimationFrame;
        return d && V.bind
          ? d.bind(w)
          : function (x) {
            w.setTimeout(x, 16);
          };
      })()),
        H = (t.now = (function () {
          var d = w.performance,
            x = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
          return x && V.bind
            ? x.bind(d)
            : Date.now ||
            function () {
              return +new Date();
            };
        })()),
        h = f(function (d) {
          function x(ae, de) {
            var Ee = _(("" + ae).split(B)),
              ge = Ee[0];
            de = de || {};
            var Le = Y[ge];
            if (!Le) return l("Unsupported property: " + ge);
            if (!de.weak || !this.props[ge]) {
              var Ue = Le[0],
                Me = this.props[ge];
              return (
                Me || (Me = this.props[ge] = new Ue.Bare()),
                Me.init(this.$el, Ee, Le, de),
                Me
              );
            }
          }
          function R(ae, de, Ee) {
            if (ae) {
              var ge = typeof ae;
              if (
                (de ||
                  (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  ge == "number" && de)
              )
                return (
                  (this.timer = new Q({
                    duration: ae,
                    context: this,
                    complete: G,
                  })),
                  void (this.active = !0)
                );
              if (ge == "string" && de) {
                switch (ae) {
                  case "hide":
                    Z.call(this);
                    break;
                  case "stop":
                    ie.call(this);
                    break;
                  case "redraw":
                    ce.call(this);
                    break;
                  default:
                    x.call(this, ae, Ee && Ee[1]);
                }
                return G.call(this);
              }
              if (ge == "function") return void ae.call(this, this);
              if (ge == "object") {
                var Le = 0;
                Qe.call(
                  this,
                  ae,
                  function (Ie, sm) {
                    Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(sm);
                  },
                  function (Ie) {
                    "wait" in Ie && (Le = u(Ie.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                  ((this.timer = new Q({ duration: Le, context: this })),
                    (this.active = !0),
                    de && (this.timer.complete = G));
                var Ue = this,
                  Me = !1,
                  Fr = {};
                U(function () {
                  Qe.call(Ue, ae, function (Ie) {
                    Ie.active && ((Me = !0), (Fr[Ie.name] = Ie.nextStyle));
                  }),
                    Me && Ue.$el.css(Fr);
                });
              }
            }
          }
          function M(ae) {
            (ae = u(ae, 0)),
              this.active
                ? this.queue.push({ options: ae })
                : ((this.timer = new Q({
                  duration: ae,
                  context: this,
                  complete: G,
                })),
                  (this.active = !0));
          }
          function S(ae) {
            return this.active
              ? (this.queue.push({ options: ae, args: arguments }),
                void (this.timer.complete = G))
              : l(
                "No active transition timer. Use start() or wait() before then()."
              );
          }
          function G() {
            if (
              (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
            ) {
              var ae = this.queue.shift();
              R.call(this, ae.options, !0, ae.args);
            }
          }
          function ie(ae) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var de;
            typeof ae == "string"
              ? ((de = {}), (de[ae] = 1))
              : (de = typeof ae == "object" && ae != null ? ae : this.props),
              Qe.call(this, de, Ce),
              be.call(this);
          }
          function se(ae) {
            ie.call(this, ae), Qe.call(this, ae, or, om);
          }
          function ve(ae) {
            typeof ae != "string" && (ae = "block"),
              (this.el.style.display = ae);
          }
          function Z() {
            ie.call(this), (this.el.style.display = "none");
          }
          function ce() {
            this.el.offsetHeight;
          }
          function le() {
            ie.call(this),
              e.removeData(this.el, A),
              (this.$el = this.el = null);
          }
          function be() {
            var ae,
              de,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ae in this.props)
              (de = this.props[ae]), de.active && Ee.push(de.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
              ((this.style = Ee), (this.el.style[V.transition.dom] = Ee));
          }
          function Qe(ae, de, Ee) {
            var ge,
              Le,
              Ue,
              Me,
              Fr = de !== Ce,
              Ie = {};
            for (ge in ae)
              (Ue = ae[ge]),
                ge in fe
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[ge] = Ue))
                  : (N.test(ge) && (ge = r(ge)),
                    ge in Y ? (Ie[ge] = Ue) : (Me || (Me = {}), (Me[ge] = Ue)));
            for (ge in Ie) {
              if (((Ue = Ie[ge]), (Le = this.props[ge]), !Le)) {
                if (!Fr) continue;
                Le = x.call(this, ge);
              }
              de.call(this, Le, Ue);
            }
            Ee && Me && Ee.call(this, Me);
          }
          function Ce(ae) {
            ae.stop();
          }
          function or(ae, de) {
            ae.set(de);
          }
          function om(ae) {
            this.$el.css(ae);
          }
          function We(ae, de) {
            d[ae] = function () {
              return this.children
                ? am.call(this, de, arguments)
                : (this.el && de.apply(this, arguments), this);
            };
          }
          function am(ae, de) {
            var Ee,
              ge = this.children.length;
            for (Ee = 0; ge > Ee; Ee++) ae.apply(this.children[Ee], de);
            return this;
          }
          (d.init = function (ae) {
            if (
              ((this.$el = e(ae)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                oe.keepInherited && !oe.fallback)
            ) {
              var de = z(this.el, "transition");
              de && !J.test(de) && (this.upstream = de);
            }
            V.backface &&
              oe.hideBackface &&
              b(this.el, V.backface.css, "hidden");
          }),
            We("add", x),
            We("start", R),
            We("wait", M),
            We("then", S),
            We("next", G),
            We("stop", ie),
            We("set", se),
            We("show", ve),
            We("hide", Z),
            We("redraw", ce),
            We("destroy", le);
        }),
        p = f(h, function (d) {
          function x(R, M) {
            var S = e.data(R, A) || e.data(R, A, new h.Bare());
            return S.el || S.init(R), M ? S.start(M) : S;
          }
          d.init = function (R, M) {
            var S = e(R);
            if (!S.length) return this;
            if (S.length === 1) return x(S[0], M);
            var G = [];
            return (
              S.each(function (ie, se) {
                G.push(x(se, M));
              }),
              (this.children = G),
              this
            );
          };
        }),
        v = f(function (d) {
          function x() {
            var G = this.get();
            this.update("auto");
            var ie = this.get();
            return this.update(G), ie;
          }
          function R(G, ie, se) {
            return ie !== void 0 && (se = ie), G in y ? G : se;
          }
          function M(G) {
            var ie = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(G);
            return (ie ? i(ie[1], ie[2], ie[3]) : G).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var S = { duration: 500, ease: "ease", delay: 0 };
          (d.init = function (G, ie, se, ve) {
            (this.$el = G), (this.el = G[0]);
            var Z = ie[0];
            se[2] && (Z = se[2]),
              ee[Z] && (Z = ee[Z]),
              (this.name = Z),
              (this.type = se[1]),
              (this.duration = u(ie[1], this.duration, S.duration)),
              (this.ease = R(ie[2], this.ease, S.ease)),
              (this.delay = u(ie[3], this.delay, S.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = re.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + y[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (d.set = function (G) {
              (G = this.convert(G, this.type)), this.update(G), this.redraw();
            }),
            (d.transition = function (G) {
              (this.active = !0),
                (G = this.convert(G, this.type)),
                this.auto &&
                (this.el.style[this.name] == "auto" &&
                  (this.update(this.get()), this.redraw()),
                  G == "auto" && (G = x.call(this))),
                (this.nextStyle = G);
            }),
            (d.fallback = function (G) {
              var ie =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (G = this.convert(G, this.type)),
                this.auto &&
                (ie == "auto" && (ie = this.convert(this.get(), this.type)),
                  G == "auto" && (G = x.call(this))),
                (this.tween = new O({
                  from: ie,
                  to: G,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (d.get = function () {
              return z(this.el, this.name);
            }),
            (d.update = function (G) {
              b(this.el, this.name, G);
            }),
            (d.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                  (this.nextStyle = null),
                  b(this.el, this.name, this.get()));
              var G = this.tween;
              G && G.context && G.destroy();
            }),
            (d.convert = function (G, ie) {
              if (G == "auto" && this.auto) return G;
              var se,
                ve = typeof G == "number",
                Z = typeof G == "string";
              switch (ie) {
                case L:
                  if (ve) return G;
                  if (Z && G.replace(T, "") === "") return +G;
                  se = "number(unitless)";
                  break;
                case F:
                  if (Z) {
                    if (G === "" && this.original) return this.original;
                    if (ie.test(G))
                      return G.charAt(0) == "#" && G.length == 7 ? G : M(G);
                  }
                  se = "hex or rgb string";
                  break;
                case k:
                  if (ve) return G + this.unit;
                  if (Z && ie.test(G)) return G;
                  se = "number(px) or string(unit)";
                  break;
                case q:
                  if (ve) return G + this.unit;
                  if (Z && ie.test(G)) return G;
                  se = "number(px) or string(unit or %)";
                  break;
                case j:
                  if (ve) return G + this.angle;
                  if (Z && ie.test(G)) return G;
                  se = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ve || (Z && q.test(G))) return G;
                  se = "number(unitless) or string(unit or %)";
              }
              return s(se, G), G;
            }),
            (d.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = f(v, function (d, x) {
          d.init = function () {
            x.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), F));
          };
        }),
        D = f(v, function (d, x) {
          (d.init = function () {
            x.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (d.get = function () {
              return this.$el[this.name]();
            }),
            (d.update = function (R) {
              this.$el[this.name](R);
            });
        }),
        W = f(v, function (d, x) {
          function R(M, S) {
            var G, ie, se, ve, Z;
            for (G in M)
              (ve = fe[G]),
                (se = ve[0]),
                (ie = ve[1] || G),
                (Z = this.convert(M[G], se)),
                S.call(this, ie, Z, se);
          }
          (d.init = function () {
            x.init.apply(this, arguments),
              this.current ||
              ((this.current = {}),
                fe.perspective &&
                oe.perspective &&
                ((this.current.perspective = oe.perspective),
                  b(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (d.set = function (M) {
              R.call(this, M, function (S, G) {
                this.current[S] = G;
              }),
                b(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (d.transition = function (M) {
              var S = this.values(M);
              this.tween = new ue({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var G,
                ie = {};
              for (G in this.current) ie[G] = G in S ? S[G] : this.current[G];
              (this.active = !0), (this.nextStyle = this.style(ie));
            }),
            (d.fallback = function (M) {
              var S = this.values(M);
              this.tween = new ue({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (d.update = function () {
              b(this.el, this.name, this.style(this.current));
            }),
            (d.style = function (M) {
              var S,
                G = "";
              for (S in M) G += S + "(" + M[S] + ") ";
              return G;
            }),
            (d.values = function (M) {
              var S,
                G = {};
              return (
                R.call(this, M, function (ie, se, ve) {
                  (G[ie] = se),
                    this.current[ie] === void 0 &&
                    ((S = 0),
                      ~ie.indexOf("scale") && (S = 1),
                      (this.current[ie] = this.convert(S, ve)));
                }),
                G
              );
            });
        }),
        O = f(function (d) {
          function x(Z) {
            se.push(Z) === 1 && U(R);
          }
          function R() {
            var Z,
              ce,
              le,
              be = se.length;
            if (be)
              for (U(R), ce = H(), Z = be; Z--;)
                (le = se[Z]), le && le.render(ce);
          }
          function M(Z) {
            var ce,
              le = e.inArray(Z, se);
            le >= 0 &&
              ((ce = se.slice(le + 1)),
                (se.length = le),
                ce.length && (se = se.concat(ce)));
          }
          function S(Z) {
            return Math.round(Z * ve) / ve;
          }
          function G(Z, ce, le) {
            return i(
              Z[0] + le * (ce[0] - Z[0]),
              Z[1] + le * (ce[1] - Z[1]),
              Z[2] + le * (ce[2] - Z[2])
            );
          }
          var ie = { ease: y.ease[1], from: 0, to: 1 };
          (d.init = function (Z) {
            (this.duration = Z.duration || 0), (this.delay = Z.delay || 0);
            var ce = Z.ease || ie.ease;
            y[ce] && (ce = y[ce][1]),
              typeof ce != "function" && (ce = ie.ease),
              (this.ease = ce),
              (this.update = Z.update || o),
              (this.complete = Z.complete || o),
              (this.context = Z.context || this),
              (this.name = Z.name);
            var le = Z.from,
              be = Z.to;
            le === void 0 && (le = ie.from),
              be === void 0 && (be = ie.to),
              (this.unit = Z.unit || ""),
              typeof le == "number" && typeof be == "number"
                ? ((this.begin = le), (this.change = be - le))
                : this.format(be, le),
              (this.value = this.begin + this.unit),
              (this.start = H()),
              Z.autoplay !== !1 && this.play();
          }),
            (d.play = function () {
              this.active ||
                (this.start || (this.start = H()), (this.active = !0), x(this));
            }),
            (d.stop = function () {
              this.active && ((this.active = !1), M(this));
            }),
            (d.render = function (Z) {
              var ce,
                le = Z - this.start;
              if (this.delay) {
                if (le <= this.delay) return;
                le -= this.delay;
              }
              if (le < this.duration) {
                var be = this.ease(le, 0, 1, this.duration);
                return (
                  (ce = this.startRGB
                    ? G(this.startRGB, this.endRGB, be)
                    : S(this.begin + be * this.change)),
                  (this.value = ce + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ce = this.endHex || this.begin + this.change),
                (this.value = ce + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (d.format = function (Z, ce) {
              if (((ce += ""), (Z += ""), Z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ce)),
                  (this.endRGB = n(Z)),
                  (this.endHex = Z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var le = ce.replace(T, ""),
                  be = Z.replace(T, "");
                le !== be && a("tween", ce, Z), (this.unit = le);
              }
              (ce = parseFloat(ce)),
                (Z = parseFloat(Z)),
                (this.begin = this.value = ce),
                (this.change = Z - ce);
            }),
            (d.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var se = [],
            ve = 1e3;
        }),
        Q = f(O, function (d) {
          (d.init = function (x) {
            (this.duration = x.duration || 0),
              (this.complete = x.complete || o),
              (this.context = x.context),
              this.play();
          }),
            (d.render = function (x) {
              var R = x - this.start;
              R < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ue = f(O, function (d, x) {
          (d.init = function (R) {
            (this.context = R.context),
              (this.update = R.update),
              (this.tweens = []),
              (this.current = R.current);
            var M, S;
            for (M in R.values)
              (S = R.values[M]),
                this.current[M] !== S &&
                this.tweens.push(
                  new O({
                    name: M,
                    from: this.current[M],
                    to: S,
                    duration: R.duration,
                    delay: R.delay,
                    ease: R.ease,
                    autoplay: !1,
                  })
                );
            this.play();
          }),
            (d.render = function (R) {
              var M,
                S,
                G = this.tweens.length,
                ie = !1;
              for (M = G; M--;)
                (S = this.tweens[M]),
                  S.context &&
                  (S.render(R), (this.current[S.name] = S.value), (ie = !0));
              return ie
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (d.destroy = function () {
              if ((x.destroy.call(this), this.tweens)) {
                var R,
                  M = this.tweens.length;
                for (R = M; R--;) this.tweens[R].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (d) {
        if (!V.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + d + ")");
        var x = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = x.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (d) {
          return new O(d);
        }),
        (t.delay = function (d, x, R) {
          return new Q({ complete: x, duration: d, context: R });
        }),
        (e.fn.tram = function (d) {
          return t.call(null, this, d);
        });
      var b = e.style,
        z = e.css,
        ee = { transform: V.transform && V.transform.css },
        Y = {
          color: [c, F],
          background: [c, F, "background-color"],
          "outline-color": [c, F],
          "border-color": [c, F],
          "border-top-color": [c, F],
          "border-right-color": [c, F],
          "border-bottom-color": [c, F],
          "border-left-color": [c, F],
          "border-width": [v, k],
          "border-top-width": [v, k],
          "border-right-width": [v, k],
          "border-bottom-width": [v, k],
          "border-left-width": [v, k],
          "border-spacing": [v, k],
          "letter-spacing": [v, k],
          margin: [v, k],
          "margin-top": [v, k],
          "margin-right": [v, k],
          "margin-bottom": [v, k],
          "margin-left": [v, k],
          padding: [v, k],
          "padding-top": [v, k],
          "padding-right": [v, k],
          "padding-bottom": [v, k],
          "padding-left": [v, k],
          "outline-width": [v, k],
          opacity: [v, L],
          top: [v, q],
          right: [v, q],
          bottom: [v, q],
          left: [v, q],
          "font-size": [v, q],
          "text-indent": [v, q],
          "word-spacing": [v, q],
          width: [v, q],
          "min-width": [v, q],
          "max-width": [v, q],
          height: [v, q],
          "min-height": [v, q],
          "max-height": [v, q],
          "line-height": [v, K],
          "scroll-top": [D, L, "scrollTop"],
          "scroll-left": [D, L, "scrollLeft"],
        },
        fe = {};
      V.transform &&
        ((Y.transform = [W]),
          (fe = {
            x: [q, "translateX"],
            y: [q, "translateY"],
            rotate: [j],
            rotateX: [j],
            rotateY: [j],
            scale: [L],
            scaleX: [L],
            scaleY: [L],
            skew: [j],
            skewX: [j],
            skewY: [j],
          })),
        V.transform &&
        V.backface &&
        ((fe.z = [q, "translateZ"]),
          (fe.rotateZ = [j]),
          (fe.scaleZ = [L]),
          (fe.perspective = [k]));
      var we = /ms/,
        Oe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ta = g((i1, wa) => {
    "use strict";
    var pm = window.$,
      gm = Jn() && pm.tram;
    wa.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        s = r.slice,
        a = r.concat,
        u = n.toString,
        l = n.hasOwnProperty,
        _ = r.forEach,
        f = r.map,
        y = r.reduce,
        m = r.reduceRight,
        E = r.filter,
        w = r.every,
        A = r.some,
        T = r.indexOf,
        N = r.lastIndexOf,
        L = Array.isArray,
        F = Object.keys,
        k = i.bind,
        q =
          (e.each =
            e.forEach =
            function (I, P, X) {
              if (I == null) return I;
              if (_ && I.forEach === _) I.forEach(P, X);
              else if (I.length === +I.length) {
                for (var V = 0, te = I.length; V < te; V++)
                  if (P.call(X, I[V], V, I) === t) return;
              } else
                for (var ne = e.keys(I), V = 0, te = ne.length; V < te; V++)
                  if (P.call(X, I[ne[V]], ne[V], I) === t) return;
              return I;
            });
      (e.map = e.collect =
        function (I, P, X) {
          var V = [];
          return I == null
            ? V
            : f && I.map === f
              ? I.map(P, X)
              : (q(I, function (te, ne, U) {
                V.push(P.call(X, te, ne, U));
              }),
                V);
        }),
        (e.find = e.detect =
          function (I, P, X) {
            var V;
            return (
              j(I, function (te, ne, U) {
                if (P.call(X, te, ne, U)) return (V = te), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (I, P, X) {
            var V = [];
            return I == null
              ? V
              : E && I.filter === E
                ? I.filter(P, X)
                : (q(I, function (te, ne, U) {
                  P.call(X, te, ne, U) && V.push(te);
                }),
                  V);
          });
      var j =
        (e.some =
          e.any =
          function (I, P, X) {
            P || (P = e.identity);
            var V = !1;
            return I == null
              ? V
              : A && I.some === A
                ? I.some(P, X)
                : (q(I, function (te, ne, U) {
                  if (V || (V = P.call(X, te, ne, U))) return t;
                }),
                  !!V);
          });
      (e.contains = e.include =
        function (I, P) {
          return I == null
            ? !1
            : T && I.indexOf === T
              ? I.indexOf(P) != -1
              : j(I, function (X) {
                return X === P;
              });
        }),
        (e.delay = function (I, P) {
          var X = s.call(arguments, 2);
          return setTimeout(function () {
            return I.apply(null, X);
          }, P);
        }),
        (e.defer = function (I) {
          return e.delay.apply(e, [I, 1].concat(s.call(arguments, 1)));
        }),
        (e.throttle = function (I) {
          var P, X, V;
          return function () {
            P ||
              ((P = !0),
                (X = arguments),
                (V = this),
                gm.frame(function () {
                  (P = !1), I.apply(V, X);
                }));
          };
        }),
        (e.debounce = function (I, P, X) {
          var V,
            te,
            ne,
            U,
            H,
            h = function () {
              var p = e.now() - U;
              p < P
                ? (V = setTimeout(h, P - p))
                : ((V = null), X || ((H = I.apply(ne, te)), (ne = te = null)));
            };
          return function () {
            (ne = this), (te = arguments), (U = e.now());
            var p = X && !V;
            return (
              V || (V = setTimeout(h, P)),
              p && ((H = I.apply(ne, te)), (ne = te = null)),
              H
            );
          };
        }),
        (e.defaults = function (I) {
          if (!e.isObject(I)) return I;
          for (var P = 1, X = arguments.length; P < X; P++) {
            var V = arguments[P];
            for (var te in V) I[te] === void 0 && (I[te] = V[te]);
          }
          return I;
        }),
        (e.keys = function (I) {
          if (!e.isObject(I)) return [];
          if (F) return F(I);
          var P = [];
          for (var X in I) e.has(I, X) && P.push(X);
          return P;
        }),
        (e.has = function (I, P) {
          return l.call(I, P);
        }),
        (e.isObject = function (I) {
          return I === Object(I);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        J = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        re = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (I) {
          return "\\" + J[I];
        },
        C = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (I, P, X) {
          !P && X && (P = X), (P = e.defaults({}, P, e.templateSettings));
          var V = RegExp(
            [
              (P.escape || K).source,
              (P.interpolate || K).source,
              (P.evaluate || K).source,
            ].join("|") + "|$",
            "g"
          ),
            te = 0,
            ne = "__p+='";
          I.replace(V, function (p, v, c, D, W) {
            return (
              (ne += I.slice(te, W).replace(re, B)),
              (te = W + p.length),
              v
                ? (ne +=
                  `'+
    ((__t=(` +
                  v +
                  `))==null?'':_.escape(__t))+
    '`)
                : c
                  ? (ne +=
                    `'+
    ((__t=(` +
                    c +
                    `))==null?'':__t)+
    '`)
                  : D &&
                  (ne +=
                    `';
    ` +
                    D +
                    `
    __p+='`),
              p
            );
          }),
            (ne += `';
    `);
          var U = P.variable;
          if (U) {
            if (!C.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (ne =
              `with(obj||{}){
    ` +
              ne +
              `}
    `),
              (U = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            ne +
            `return __p;
    `;
          var H;
          try {
            H = new Function(P.variable || "obj", "_", ne);
          } catch (p) {
            throw ((p.source = ne), p);
          }
          var h = function (p) {
            return H.call(this, p, e);
          };
          return (
            (h.source =
              "function(" +
              U +
              `){
    ` +
              ne +
              "}"),
            h
          );
        }),
        e
      );
    })();
  });
  var Se = g((o1, Pa) => {
    "use strict";
    var he = {},
      Rt = {},
      Ct = [],
      ti = window.Webflow || [],
      ft = window.jQuery,
      He = ft(window),
      hm = ft(document),
      Ze = ft.isFunction,
      Ve = (he._ = Ta()),
      Aa = (he.tram = Jn() && ft.tram),
      Gr = !1,
      ri = !1;
    Aa.config.hideBackface = !1;
    Aa.config.keepInherited = !0;
    he.define = function (e, t, r) {
      Rt[e] && Sa(Rt[e]);
      var n = (Rt[e] = t(ft, Ve, r) || {});
      return Oa(n), n;
    };
    he.require = function (e) {
      return Rt[e];
    };
    function Oa(e) {
      he.env() &&
        (Ze(e.design) && He.on("__wf_design", e.design),
          Ze(e.preview) && He.on("__wf_preview", e.preview)),
        Ze(e.destroy) && He.on("__wf_destroy", e.destroy),
        e.ready && Ze(e.ready) && vm(e);
    }
    function vm(e) {
      if (Gr) {
        e.ready();
        return;
      }
      Ve.contains(Ct, e.ready) || Ct.push(e.ready);
    }
    function Sa(e) {
      Ze(e.design) && He.off("__wf_design", e.design),
        Ze(e.preview) && He.off("__wf_preview", e.preview),
        Ze(e.destroy) && He.off("__wf_destroy", e.destroy),
        e.ready && Ze(e.ready) && mm(e);
    }
    function mm(e) {
      Ct = Ve.filter(Ct, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (Gr) {
        Ze(e) && e();
        return;
      }
      ti.push(e);
    };
    he.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var kr = navigator.userAgent.toLowerCase(),
      Ra = (he.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      ym = (he.env.chrome =
        /chrome/.test(kr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(kr.match(/chrome\/(\d+)\./)[1], 10)),
      Em = (he.env.ios = /(ipod|iphone|ipad)/.test(kr));
    he.env.safari = /safari/.test(kr) && !ym && !Em;
    var ei;
    Ra &&
      hm.on("touchstart mousedown", function (e) {
        ei = e.target;
      });
    he.validClick = Ra
      ? function (e) {
        return e === ei || ft.contains(e, ei);
      }
      : function () {
        return !0;
      };
    var Ca = "resize.webflow orientationchange.webflow load.webflow",
      _m = "scroll.webflow " + Ca;
    he.resize = ni(He, Ca);
    he.scroll = ni(He, _m);
    he.redraw = ni();
    function ni(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (i) {
          Ve.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ve.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () { });
    he.ready = function () {
      (Gr = !0), ri ? bm() : Ve.each(Ct, xa), Ve.each(ti, xa), he.resize.up();
    };
    function xa(e) {
      Ze(e) && e();
    }
    function bm() {
      (ri = !1), Ve.each(Rt, Oa);
    }
    var _t;
    he.load = function (e) {
      _t.then(e);
    };
    function La() {
      _t && (_t.reject(), He.off("load", _t.resolve)),
        (_t = new ft.Deferred()),
        He.on("load", _t.resolve);
    }
    he.destroy = function (e) {
      (e = e || {}),
        (ri = !0),
        He.triggerHandler("__wf_destroy"),
        e.domready != null && (Gr = e.domready),
        Ve.each(Rt, Sa),
        he.resize.off(),
        he.scroll.off(),
        he.redraw.off(),
        (Ct = []),
        (ti = []),
        _t.state() === "pending" && La();
    };
    ft(he.ready);
    La();
    Pa.exports = window.Webflow = he;
  });
  var Ma = g((a1, Da) => {
    "use strict";
    var Na = Se();
    Na.define(
      "brand",
      (Da.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          s = window.location,
          a = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            E = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(E) && s.hostname !== E && (m = !0),
            m &&
            !a &&
            ((l = l || f()),
              y(),
              setTimeout(y, 500),
              e(r).off(u, _).on(u, _));
        };
        function _() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", m ? "display: none !important;" : "");
        }
        function f() {
          // var m = e('<a class="w-webflow-badge"></a>').attr(
          //     "href",
          //     "https://webflow.com?utm_campaign=brandjs"
          //   ),
          //   E = e("<img>")
          //     .attr(
          //       "src",
          //       "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
          //     )
          //     .attr("alt", "")
          //     .css({ marginRight: "4px", width: "26px" }),
          //   w = e("<img>")
          //     .attr(
          //       "src",
          //       "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
          //     )
          //     .attr("alt", "Made in Webflow");
          // return m.append(E, w), m[0];
        }
        function y() {
          var m = i.children(o),
            E = m.length && m.get(0) === l,
            w = Na.env("editor");
          if (E) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(l);
        }
        return t;
      })
    );
  });
  document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.client-marquee-list');
    carousels.forEach(carousel => {
      let scrollPosition = 0;
      function scrollCarousel() {
        scrollPosition += 1; // Adjust this value to control the speed of the rotation
        if (scrollPosition >= carousel.scrollWidth) {
          scrollPosition = 0; // Reset to start when reaching the end
        }
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scrollCarousel);
      }
      scrollCarousel();
    });
  });

  var qa = g((s1, Fa) => {
    "use strict";
    var ii = Se();
    ii.define(
      "edit",
      (Fa.exports = function (e, t, r) {
        if (
          ((r = r || {}),
            (ii.env("test") || ii.env("frame")) && !r.fixture && !Im())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          s = document.location,
          a = "hashchange",
          u,
          l = r.load || y,
          _ = !1;
        try {
          _ =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch { }
        _
          ? l()
          : s.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
              /\?edit$/.test(s.href)) &&
            l()
            : i.on(a, f).triggerHandler(a);
        function f() {
          u || (/\?edit/.test(s.hash) && l());
        }
        function y() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(a, f),
            N(function (F) {
              e.ajax({
                url: T("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(F),
              });
            });
        }
        function m(F) {
          return function (k) {
            if (!k) {
              console.error("Could not load editor data");
              return;
            }
            (k.thirdPartyCookiesSupported = F),
              E(A(k.scriptPath), function () {
                window.WebflowEditor(k);
              });
          };
        }
        function E(F, k) {
          e.ajax({ type: "GET", url: F, dataType: "script", cache: !0 }).then(
            k,
            w
          );
        }
        function w(F, k, q) {
          throw (console.error("Could not load editor script: " + k), q);
        }
        function A(F) {
          return F.indexOf("//") >= 0
            ? F
            : T("https://editor-api.webflow.com" + F);
        }
        function T(F) {
          return F.replace(/([^:])\/\//g, "$1/");
        }
        function N(F) {
          var k = window.document.createElement("iframe");
          (k.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (k.style.display = "none"),
            (k.sandbox = "allow-scripts allow-same-origin");
          var q = function (j) {
            j.data === "WF_third_party_cookies_unsupported"
              ? (L(k, q), F(!1))
              : j.data === "WF_third_party_cookies_supported" &&
              (L(k, q), F(!0));
          };
          (k.onerror = function () {
            L(k, q), F(!1);
          }),
            window.addEventListener("message", q, !1),
            window.document.body.appendChild(k);
        }
        function L(F, k) {
          window.removeEventListener("message", k, !1), F.remove();
        }
        return n;
      })
    );
    function Im() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ga = g((u1, ka) => {
    "use strict";
    var wm = Se();
    wm.define(
      "focus-visible",
      (ka.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            s = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function a(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function u(L) {
            var F = L.type,
              k = L.tagName;
            return !!(
              (k === "INPUT" && s[F] && !L.readOnly) ||
              (k === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function l(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function _(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function f(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (a(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function y() {
            n = !1;
          }
          function m(L) {
            a(L.target) && (n || u(L.target)) && l(L.target);
          }
          function E(L) {
            a(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
                window.clearTimeout(o),
                (o = window.setTimeout(function () {
                  i = !1;
                }, 100)),
                _(L.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function T() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), T());
          }
          document.addEventListener("keydown", f, !0),
            document.addEventListener("mousedown", y, !0),
            document.addEventListener("pointerdown", y, !0),
            document.addEventListener("touchstart", y, !0),
            document.addEventListener("visibilitychange", w, !0),
            A(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", E, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ua = g((c1, Wa) => {
    "use strict";
    var Xa = Se();
    Xa.define(
      "focus",
      (Wa.exports = function () {
        var e = [],
          t = !1;
        function r(s) {
          t &&
            (s.preventDefault(),
              s.stopPropagation(),
              s.stopImmediatePropagation(),
              e.unshift(s));
        }
        function n(s) {
          var a = s.target,
            u = a.tagName;
          return (
            (/^a$/i.test(u) && a.href != null) ||
            (/^(button|textarea)$/i.test(u) && a.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
              !a.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && a.controls === !0)
          );
        }
        function i(s) {
          n(s) &&
            ((t = !0),
              setTimeout(() => {
                for (t = !1, s.target.focus(); e.length > 0;) {
                  var a = e.pop();
                  a.target.dispatchEvent(new MouseEvent(a.type, a));
                }
              }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ba = g((l1, Ha) => {
    "use strict";
    var oi = window.jQuery,
      Je = {},
      Xr = [],
      Va = ".w-ix",
      Wr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), oi(t).triggerHandler(Je.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), oi(t).triggerHandler(Je.types.OUTRO));
        },
      };
    Je.triggers = {};
    Je.types = { INTRO: "w-ix-intro" + Va, OUTRO: "w-ix-outro" + Va };
    Je.init = function () {
      for (var e = Xr.length, t = 0; t < e; t++) {
        var r = Xr[t];
        r[0](0, r[1]);
      }
      (Xr = []), oi.extend(Je.triggers, Wr);
    };
    Je.async = function () {
      for (var e in Wr) {
        var t = Wr[e];
        Wr.hasOwnProperty(e) &&
          (Je.triggers[e] = function (r, n) {
            Xr.push([t, n]);
          });
      }
    };
    Je.async();
    Ha.exports = Je;
  });
  var Lt = g((f1, ja) => {
    "use strict";
    var ai = Ba();
    function za(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Tm = window.jQuery,
      Ur = {},
      Ka = ".w-ix",
      xm = {
        reset: function (e, t) {
          ai.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ai.triggers.intro(e, t), za(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ai.triggers.outro(e, t), za(t, "COMPONENT_INACTIVE");
        },
      };
    Ur.triggers = {};
    Ur.types = { INTRO: "w-ix-intro" + Ka, OUTRO: "w-ix-outro" + Ka };
    Tm.extend(Ur.triggers, xm);
    ja.exports = Ur;
  });
  var si = g((d1, Ya) => {
    var Am =
      typeof global == "object" && global && global.Object === Object && global;
    Ya.exports = Am;
  });
  var Be = g((p1, Qa) => {
    var Om = si(),
      Sm = typeof self == "object" && self && self.Object === Object && self,
      Rm = Om || Sm || Function("return this")();
    Qa.exports = Rm;
  });
  var Pt = g((g1, $a) => {
    var Cm = Be(),
      Lm = Cm.Symbol;
    $a.exports = Lm;
  });
  var ts = g((h1, es) => {
    var Za = Pt(),
      Ja = Object.prototype,
      Pm = Ja.hasOwnProperty,
      Nm = Ja.toString,
      ar = Za ? Za.toStringTag : void 0;
    function Dm(e) {
      var t = Pm.call(e, ar),
        r = e[ar];
      try {
        e[ar] = void 0;
        var n = !0;
      } catch { }
      var i = Nm.call(e);
      return n && (t ? (e[ar] = r) : delete e[ar]), i;
    }
    es.exports = Dm;
  });
  var ns = g((v1, rs) => {
    var Mm = Object.prototype,
      Fm = Mm.toString;
    function qm(e) {
      return Fm.call(e);
    }
    rs.exports = qm;
  });
  var dt = g((m1, as) => {
    var is = Pt(),
      km = ts(),
      Gm = ns(),
      Xm = "[object Null]",
      Wm = "[object Undefined]",
      os = is ? is.toStringTag : void 0;
    function Um(e) {
      return e == null
        ? e === void 0
          ? Wm
          : Xm
        : os && os in Object(e)
          ? km(e)
          : Gm(e);
    }
    as.exports = Um;
  });
  var ui = g((y1, ss) => {
    function Vm(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ss.exports = Vm;
  });
  var ci = g((E1, us) => {
    var Hm = ui(),
      Bm = Hm(Object.getPrototypeOf, Object);
    us.exports = Bm;
  });
  var at = g((_1, cs) => {
    function zm(e) {
      return e != null && typeof e == "object";
    }
    cs.exports = zm;
  });
  var li = g((b1, fs) => {
    var Km = dt(),
      jm = ci(),
      Ym = at(),
      Qm = "[object Object]",
      $m = Function.prototype,
      Zm = Object.prototype,
      ls = $m.toString,
      Jm = Zm.hasOwnProperty,
      ey = ls.call(Object);
    function ty(e) {
      if (!Ym(e) || Km(e) != Qm) return !1;
      var t = jm(e);
      if (t === null) return !0;
      var r = Jm.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ls.call(r) == ey;
    }
    fs.exports = ty;
  });
  var ds = g((fi) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    fi.default = ry;
    function ry(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var ps = g((pi, di) => {
    "use strict";
    Object.defineProperty(pi, "__esModule", { value: !0 });
    var ny = ds(),
      iy = oy(ny);
    function oy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Nt;
    typeof self < "u"
      ? (Nt = self)
      : typeof window < "u"
        ? (Nt = window)
        : typeof global < "u"
          ? (Nt = global)
          : typeof di < "u"
            ? (Nt = di)
            : (Nt = Function("return this")());
    var ay = (0, iy.default)(Nt);
    pi.default = ay;
  });
  var gi = g((sr) => {
    "use strict";
    sr.__esModule = !0;
    sr.ActionTypes = void 0;
    sr.default = ms;
    var sy = li(),
      uy = vs(sy),
      cy = ps(),
      gs = vs(cy);
    function vs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hs = (sr.ActionTypes = { INIT: "@@redux/INIT" });
    function ms(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
          typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ms)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        s = [],
        a = s,
        u = !1;
      function l() {
        a === s && (a = s.slice());
      }
      function _() {
        return o;
      }
      function f(w) {
        if (typeof w != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          l(),
          a.push(w),
          function () {
            if (A) {
              (A = !1), l();
              var N = a.indexOf(w);
              a.splice(N, 1);
            }
          }
        );
      }
      function y(w) {
        if (!(0, uy.default)(w))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof w.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, w));
        } finally {
          u = !1;
        }
        for (var A = (s = a), T = 0; T < A.length; T++) A[T]();
        return w;
      }
      function m(w) {
        if (typeof w != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = w), y({ type: hs.INIT });
      }
      function E() {
        var w,
          A = f;
        return (
          (w = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                N.next && N.next(_());
              }
              L();
              var F = A(L);
              return { unsubscribe: F };
            },
          }),
          (w[gs.default] = function () {
            return this;
          }),
          w
        );
      }
      return (
        y({ type: hs.INIT }),
        (n = { dispatch: y, subscribe: f, getState: _, replaceReducer: m }),
        (n[gs.default] = E),
        n
      );
    }
  });
  var vi = g((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = ly;
    function ly(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch { }
    }
  });
  var _s = g((mi) => {
    "use strict";
    mi.__esModule = !0;
    mi.default = hy;
    var ys = gi(),
      fy = li(),
      x1 = Es(fy),
      dy = vi(),
      A1 = Es(dy);
    function Es(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function py(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function gy(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: ys.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " +
              ys.ActionTypes.INIT +
              ' or other actions in "redux/*" ') +
            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function hy(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var s;
      var a;
      try {
        gy(r);
      } catch (u) {
        a = u;
      }
      return function () {
        var l =
          arguments.length <= 0 || arguments[0] === void 0
            ? {}
            : arguments[0],
          _ = arguments[1];
        if (a) throw a;
        if (!1) var f;
        for (var y = !1, m = {}, E = 0; E < o.length; E++) {
          var w = o[E],
            A = r[w],
            T = l[w],
            N = A(T, _);
          if (typeof N > "u") {
            var L = py(w, _);
            throw new Error(L);
          }
          (m[w] = N), (y = y || N !== T);
        }
        return y ? m : l;
      };
    }
  });
  var Is = g((yi) => {
    "use strict";
    yi.__esModule = !0;
    yi.default = vy;
    function bs(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function vy(e, t) {
      if (typeof e == "function") return bs(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
          (e === null ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          s = e[o];
        typeof s == "function" && (n[o] = bs(s, t));
      }
      return n;
    }
  });
  var _i = g((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    Ei.default = my;
    function my() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, s) {
          return s(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ws = g((bi) => {
    "use strict";
    bi.__esModule = !0;
    var yy =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    bi.default = Iy;
    var Ey = _i(),
      _y = by(Ey);
    function by(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Iy() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, s) {
          var a = n(i, o, s),
            u = a.dispatch,
            l = [],
            _ = {
              getState: a.getState,
              dispatch: function (y) {
                return u(y);
              },
            };
          return (
            (l = t.map(function (f) {
              return f(_);
            })),
            (u = _y.default.apply(void 0, l)(a.dispatch)),
            yy({}, a, { dispatch: u })
          );
        };
      };
    }
  });
  var Ii = g((Xe) => {
    "use strict";
    Xe.__esModule = !0;
    Xe.compose =
      Xe.applyMiddleware =
      Xe.bindActionCreators =
      Xe.combineReducers =
      Xe.createStore =
      void 0;
    var wy = gi(),
      Ty = Dt(wy),
      xy = _s(),
      Ay = Dt(xy),
      Oy = Is(),
      Sy = Dt(Oy),
      Ry = ws(),
      Cy = Dt(Ry),
      Ly = _i(),
      Py = Dt(Ly),
      Ny = vi(),
      L1 = Dt(Ny);
    function Dt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Xe.createStore = Ty.default;
    Xe.combineReducers = Ay.default;
    Xe.bindActionCreators = Sy.default;
    Xe.applyMiddleware = Cy.default;
    Xe.compose = Py.default;
  });
  var ze,
    wi,
    et,
    Dy,
    My,
    Vr,
    Fy,
    Ti = ye(() => {
      "use strict";
      (ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (wi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (et = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Dy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (My = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Vr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Fy = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Pe,
    qy,
    Hr = ye(() => {
      "use strict";
      (Pe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (qy = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var ky,
    Ts = ye(() => {
      "use strict";
      ky = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Gy,
    Xy,
    Wy,
    Uy,
    Vy,
    Hy,
    By,
    xi,
    xs = ye(() => {
      "use strict";
      Hr();
      ({
        TRANSFORM_MOVE: Gy,
        TRANSFORM_SCALE: Xy,
        TRANSFORM_ROTATE: Wy,
        TRANSFORM_SKEW: Uy,
        STYLE_SIZE: Vy,
        STYLE_FILTER: Hy,
        STYLE_FONT_VARIATION: By,
      } = Pe),
        (xi = {
          [Gy]: !0,
          [Xy]: !0,
          [Wy]: !0,
          [Uy]: !0,
          [Vy]: !0,
          [Hy]: !0,
          [By]: !0,
        });
    });
  var Te = {};
  Fe(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => uE,
    IX2_ANIMATION_FRAME_CHANGED: () => rE,
    IX2_CLEAR_REQUESTED: () => Jy,
    IX2_ELEMENT_STATE_CHANGED: () => sE,
    IX2_EVENT_LISTENER_ADDED: () => eE,
    IX2_EVENT_STATE_CHANGED: () => tE,
    IX2_INSTANCE_ADDED: () => iE,
    IX2_INSTANCE_REMOVED: () => aE,
    IX2_INSTANCE_STARTED: () => oE,
    IX2_MEDIA_QUERIES_DEFINED: () => lE,
    IX2_PARAMETER_CHANGED: () => nE,
    IX2_PLAYBACK_REQUESTED: () => $y,
    IX2_PREVIEW_REQUESTED: () => Qy,
    IX2_RAW_DATA_IMPORTED: () => zy,
    IX2_SESSION_INITIALIZED: () => Ky,
    IX2_SESSION_STARTED: () => jy,
    IX2_SESSION_STOPPED: () => Yy,
    IX2_STOP_REQUESTED: () => Zy,
    IX2_TEST_FRAME_RENDERED: () => fE,
    IX2_VIEWPORT_WIDTH_CHANGED: () => cE,
  });
  var zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    eE,
    tE,
    rE,
    nE,
    iE,
    oE,
    aE,
    sE,
    uE,
    cE,
    lE,
    fE,
    As = ye(() => {
      "use strict";
      (zy = "IX2_RAW_DATA_IMPORTED"),
        (Ky = "IX2_SESSION_INITIALIZED"),
        (jy = "IX2_SESSION_STARTED"),
        (Yy = "IX2_SESSION_STOPPED"),
        (Qy = "IX2_PREVIEW_REQUESTED"),
        ($y = "IX2_PLAYBACK_REQUESTED"),
        (Zy = "IX2_STOP_REQUESTED"),
        (Jy = "IX2_CLEAR_REQUESTED"),
        (eE = "IX2_EVENT_LISTENER_ADDED"),
        (tE = "IX2_EVENT_STATE_CHANGED"),
        (rE = "IX2_ANIMATION_FRAME_CHANGED"),
        (nE = "IX2_PARAMETER_CHANGED"),
        (iE = "IX2_INSTANCE_ADDED"),
        (oE = "IX2_INSTANCE_STARTED"),
        (aE = "IX2_INSTANCE_REMOVED"),
        (sE = "IX2_ELEMENT_STATE_CHANGED"),
        (uE = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (cE = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (lE = "IX2_MEDIA_QUERIES_DEFINED"),
        (fE = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  Fe(Re, {
    ABSTRACT_NODE: () => c_,
    AUTO: () => ZE,
    BACKGROUND: () => zE,
    BACKGROUND_COLOR: () => BE,
    BAR_DELIMITER: () => t_,
    BORDER_COLOR: () => KE,
    BOUNDARY_SELECTOR: () => vE,
    CHILDREN: () => r_,
    COLON_DELIMITER: () => e_,
    COLOR: () => jE,
    COMMA_DELIMITER: () => JE,
    CONFIG_UNIT: () => TE,
    CONFIG_VALUE: () => _E,
    CONFIG_X_UNIT: () => bE,
    CONFIG_X_VALUE: () => mE,
    CONFIG_Y_UNIT: () => IE,
    CONFIG_Y_VALUE: () => yE,
    CONFIG_Z_UNIT: () => wE,
    CONFIG_Z_VALUE: () => EE,
    DISPLAY: () => YE,
    FILTER: () => WE,
    FLEX: () => QE,
    FONT_VARIATION_SETTINGS: () => UE,
    HEIGHT: () => HE,
    HTML_ELEMENT: () => s_,
    IMMEDIATE_CHILDREN: () => n_,
    IX2_ID_DELIMITER: () => dE,
    OPACITY: () => XE,
    PARENT: () => o_,
    PLAIN_OBJECT: () => u_,
    PRESERVE_3D: () => a_,
    RENDER_GENERAL: () => f_,
    RENDER_PLUGIN: () => p_,
    RENDER_STYLE: () => d_,
    RENDER_TRANSFORM: () => l_,
    ROTATE_X: () => DE,
    ROTATE_Y: () => ME,
    ROTATE_Z: () => FE,
    SCALE_3D: () => NE,
    SCALE_X: () => CE,
    SCALE_Y: () => LE,
    SCALE_Z: () => PE,
    SIBLINGS: () => i_,
    SKEW: () => qE,
    SKEW_X: () => kE,
    SKEW_Y: () => GE,
    TRANSFORM: () => xE,
    TRANSLATE_3D: () => RE,
    TRANSLATE_X: () => AE,
    TRANSLATE_Y: () => OE,
    TRANSLATE_Z: () => SE,
    WF_PAGE: () => pE,
    WIDTH: () => VE,
    WILL_CHANGE: () => $E,
    W_MOD_IX: () => hE,
    W_MOD_JS: () => gE,
  });
  var dE,
    pE,
    gE,
    hE,
    vE,
    mE,
    yE,
    EE,
    _E,
    bE,
    IE,
    wE,
    TE,
    xE,
    AE,
    OE,
    SE,
    RE,
    CE,
    LE,
    PE,
    NE,
    DE,
    ME,
    FE,
    qE,
    kE,
    GE,
    XE,
    WE,
    UE,
    VE,
    HE,
    BE,
    zE,
    KE,
    jE,
    YE,
    QE,
    $E,
    ZE,
    JE,
    e_,
    t_,
    r_,
    n_,
    i_,
    o_,
    a_,
    s_,
    u_,
    c_,
    l_,
    f_,
    d_,
    p_,
    Os = ye(() => {
      "use strict";
      (dE = "|"),
        (pE = "data-wf-page"),
        (gE = "w-mod-js"),
        (hE = "w-mod-ix"),
        (vE = ".w-dyn-item"),
        (mE = "xValue"),
        (yE = "yValue"),
        (EE = "zValue"),
        (_E = "value"),
        (bE = "xUnit"),
        (IE = "yUnit"),
        (wE = "zUnit"),
        (TE = "unit"),
        (xE = "transform"),
        (AE = "translateX"),
        (OE = "translateY"),
        (SE = "translateZ"),
        (RE = "translate3d"),
        (CE = "scaleX"),
        (LE = "scaleY"),
        (PE = "scaleZ"),
        (NE = "scale3d"),
        (DE = "rotateX"),
        (ME = "rotateY"),
        (FE = "rotateZ"),
        (qE = "skew"),
        (kE = "skewX"),
        (GE = "skewY"),
        (XE = "opacity"),
        (WE = "filter"),
        (UE = "font-variation-settings"),
        (VE = "width"),
        (HE = "height"),
        (BE = "backgroundColor"),
        (zE = "background"),
        (KE = "borderColor"),
        (jE = "color"),
        (YE = "display"),
        (QE = "flex"),
        ($E = "willChange"),
        (ZE = "AUTO"),
        (JE = ","),
        (e_ = ":"),
        (t_ = "|"),
        (r_ = "CHILDREN"),
        (n_ = "IMMEDIATE_CHILDREN"),
        (i_ = "SIBLINGS"),
        (o_ = "PARENT"),
        (a_ = "preserve-3d"),
        (s_ = "HTML_ELEMENT"),
        (u_ = "PLAIN_OBJECT"),
        (c_ = "ABSTRACT_NODE"),
        (l_ = "RENDER_TRANSFORM"),
        (f_ = "RENDER_GENERAL"),
        (d_ = "RENDER_STYLE"),
        (p_ = "RENDER_PLUGIN");
    });
  var Ss = {};
  Fe(Ss, {
    ActionAppliesTo: () => qy,
    ActionTypeConsts: () => Pe,
    EventAppliesTo: () => wi,
    EventBasedOn: () => et,
    EventContinuousMouseAxes: () => Dy,
    EventLimitAffectedElements: () => My,
    EventTypeConsts: () => ze,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => ky,
    QuickEffectDirectionConsts: () => Fy,
    QuickEffectIds: () => Vr,
    ReducedMotionTypes: () => xi,
  });
  var qe = ye(() => {
    "use strict";
    Ti();
    Hr();
    Ts();
    xs();
    As();
    Os();
    Hr();
    Ti();
  });
  var g_,
    Rs,
    Cs = ye(() => {
      "use strict";
      qe();
      ({ IX2_RAW_DATA_IMPORTED: g_ } = Te),
        (Rs = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case g_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Mt = g((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var h_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
    _e.clone = zr;
    _e.addLast = Ns;
    _e.addFirst = Ds;
    _e.removeLast = Ms;
    _e.removeFirst = Fs;
    _e.insert = qs;
    _e.removeAt = ks;
    _e.replaceAt = Gs;
    _e.getIn = Kr;
    _e.set = jr;
    _e.setIn = Yr;
    _e.update = Ws;
    _e.updateIn = Us;
    _e.merge = Vs;
    _e.mergeDeep = Hs;
    _e.mergeIn = Bs;
    _e.omit = zs;
    _e.addDefaults = Ks;
    var Ls = "INVALID_ARGS";
    function Ps(e) {
      throw new Error(e);
    }
    function Ai(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var v_ = {}.hasOwnProperty;
    function zr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ai(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function ke(e, t, r) {
      var n = r;
      n == null && Ps(Ls);
      for (
        var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3;
        a < o;
        a++
      )
        s[a - 3] = arguments[a];
      for (var u = 0; u < s.length; u++) {
        var l = s[u];
        if (l != null) {
          var _ = Ai(l);
          if (_.length)
            for (var f = 0; f <= _.length; f++) {
              var y = _[f];
              if (!(e && n[y] !== void 0)) {
                var m = l[y];
                t && Br(n[y]) && Br(m) && (m = ke(e, t, n[y], m)),
                  !(m === void 0 || m === n[y]) &&
                  (i || ((i = !0), (n = zr(n))), (n[y] = m));
              }
            }
        }
      }
      return n;
    }
    function Br(e) {
      var t = typeof e > "u" ? "undefined" : h_(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ns(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Ds(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ms(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Fs(e) {
      return e.length ? e.slice(1) : e;
    }
    function qs(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function ks(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Gs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Kr(e, t) {
      if ((!Array.isArray(t) && Ps(Ls), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function jr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = zr(i);
      return (o[t] = r), o;
    }
    function Xs(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var s =
          Br(e) && Br(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Xs(s, t, r, n + 1);
      }
      return jr(e, o, i);
    }
    function Yr(e, t, r) {
      return t.length ? Xs(e, t, r, 0) : r;
    }
    function Ws(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return jr(e, t, i);
    }
    function Us(e, t, r) {
      var n = Kr(e, t),
        i = r(n);
      return Yr(e, t, i);
    }
    function Vs(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? ke.call.apply(ke, [null, !1, !1, e, t, r, n, i, o].concat(a))
        : ke(!1, !1, e, t, r, n, i, o);
    }
    function Hs(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? ke.call.apply(ke, [null, !1, !0, e, t, r, n, i, o].concat(a))
        : ke(!1, !0, e, t, r, n, i, o);
    }
    function Bs(e, t, r, n, i, o, s) {
      var a = Kr(e, t);
      a == null && (a = {});
      for (
        var u = void 0,
        l = arguments.length,
        _ = Array(l > 7 ? l - 7 : 0),
        f = 7;
        f < l;
        f++
      )
        _[f - 7] = arguments[f];
      return (
        _.length
          ? (u = ke.call.apply(ke, [null, !1, !1, a, r, n, i, o, s].concat(_)))
          : (u = ke(!1, !1, a, r, n, i, o, s)),
        Yr(e, t, u)
      );
    }
    function zs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (v_.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, s = Ai(e), a = 0; a < s.length; a++) {
        var u = s[a];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Ks(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? ke.call.apply(ke, [null, !0, !1, e, t, r, n, i, o].concat(a))
        : ke(!0, !1, e, t, r, n, i, o);
    }
    var m_ = {
      clone: zr,
      addLast: Ns,
      addFirst: Ds,
      removeLast: Ms,
      removeFirst: Fs,
      insert: qs,
      removeAt: ks,
      replaceAt: Gs,
      getIn: Kr,
      set: jr,
      setIn: Yr,
      update: Ws,
      updateIn: Us,
      merge: Vs,
      mergeDeep: Hs,
      mergeIn: Bs,
      omit: zs,
      addDefaults: Ks,
    };
    _e.default = m_;
  });
  var Ys,
    y_,
    E_,
    __,
    b_,
    I_,
    js,
    Qs,
    $s = ye(() => {
      "use strict";
      qe();
      (Ys = pe(Mt())),
        ({
          IX2_PREVIEW_REQUESTED: y_,
          IX2_PLAYBACK_REQUESTED: E_,
          IX2_STOP_REQUESTED: __,
          IX2_CLEAR_REQUESTED: b_,
        } = Te),
        (I_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (js = Object.create(null, {
          [y_]: { value: "preview" },
          [E_]: { value: "playback" },
          [__]: { value: "stop" },
          [b_]: { value: "clear" },
        })),
        (Qs = (e = I_, t) => {
          if (t.type in js) {
            let r = [js[t.type]];
            return (0, Ys.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    w_,
    T_,
    x_,
    A_,
    O_,
    S_,
    R_,
    C_,
    L_,
    P_,
    Zs,
    N_,
    Js,
    eu = ye(() => {
      "use strict";
      qe();
      (Ne = pe(Mt())),
        ({
          IX2_SESSION_INITIALIZED: w_,
          IX2_SESSION_STARTED: T_,
          IX2_TEST_FRAME_RENDERED: x_,
          IX2_SESSION_STOPPED: A_,
          IX2_EVENT_LISTENER_ADDED: O_,
          IX2_EVENT_STATE_CHANGED: S_,
          IX2_ANIMATION_FRAME_CHANGED: R_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: C_,
          IX2_VIEWPORT_WIDTH_CHANGED: L_,
          IX2_MEDIA_QUERIES_DEFINED: P_,
        } = Te),
        (Zs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (N_ = 20),
        (Js = (e = Zs, t) => {
          switch (t.type) {
            case w_: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case T_:
              return (0, Ne.set)(e, "active", !0);
            case x_: {
              let {
                payload: { step: r = N_ },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case A_:
              return Zs;
            case R_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case O_: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case S_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case C_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case L_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let s = 0; s < i; s++) {
                let { key: a, min: u, max: l } = n[s];
                if (r >= u && r <= l) {
                  o = a;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case P_:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var ru = g(($1, tu) => {
    function D_() {
      (this.__data__ = []), (this.size = 0);
    }
    tu.exports = D_;
  });
  var Qr = g((Z1, nu) => {
    function M_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    nu.exports = M_;
  });
  var ur = g((J1, iu) => {
    var F_ = Qr();
    function q_(e, t) {
      for (var r = e.length; r--;) if (F_(e[r][0], t)) return r;
      return -1;
    }
    iu.exports = q_;
  });
  var au = g((e2, ou) => {
    var k_ = ur(),
      G_ = Array.prototype,
      X_ = G_.splice;
    function W_(e) {
      var t = this.__data__,
        r = k_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : X_.call(t, r, 1), --this.size, !0;
    }
    ou.exports = W_;
  });
  var uu = g((t2, su) => {
    var U_ = ur();
    function V_(e) {
      var t = this.__data__,
        r = U_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    su.exports = V_;
  });
  var lu = g((r2, cu) => {
    var H_ = ur();
    function B_(e) {
      return H_(this.__data__, e) > -1;
    }
    cu.exports = B_;
  });
  var du = g((n2, fu) => {
    var z_ = ur();
    function K_(e, t) {
      var r = this.__data__,
        n = z_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    fu.exports = K_;
  });
  var cr = g((i2, pu) => {
    var j_ = ru(),
      Y_ = au(),
      Q_ = uu(),
      $_ = lu(),
      Z_ = du();
    function Ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ft.prototype.clear = j_;
    Ft.prototype.delete = Y_;
    Ft.prototype.get = Q_;
    Ft.prototype.has = $_;
    Ft.prototype.set = Z_;
    pu.exports = Ft;
  });
  var hu = g((o2, gu) => {
    var J_ = cr();
    function eb() {
      (this.__data__ = new J_()), (this.size = 0);
    }
    gu.exports = eb;
  });
  var mu = g((a2, vu) => {
    function tb(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    vu.exports = tb;
  });
  var Eu = g((s2, yu) => {
    function rb(e) {
      return this.__data__.get(e);
    }
    yu.exports = rb;
  });
  var bu = g((u2, _u) => {
    function nb(e) {
      return this.__data__.has(e);
    }
    _u.exports = nb;
  });
  var tt = g((c2, Iu) => {
    function ib(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Iu.exports = ib;
  });
  var Oi = g((l2, wu) => {
    var ob = dt(),
      ab = tt(),
      sb = "[object AsyncFunction]",
      ub = "[object Function]",
      cb = "[object GeneratorFunction]",
      lb = "[object Proxy]";
    function fb(e) {
      if (!ab(e)) return !1;
      var t = ob(e);
      return t == ub || t == cb || t == sb || t == lb;
    }
    wu.exports = fb;
  });
  var xu = g((f2, Tu) => {
    var db = Be(),
      pb = db["__core-js_shared__"];
    Tu.exports = pb;
  });
  var Su = g((d2, Ou) => {
    var Si = xu(),
      Au = (function () {
        var e = /[^.]+$/.exec((Si && Si.keys && Si.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function gb(e) {
      return !!Au && Au in e;
    }
    Ou.exports = gb;
  });
  var Ri = g((p2, Ru) => {
    var hb = Function.prototype,
      vb = hb.toString;
    function mb(e) {
      if (e != null) {
        try {
          return vb.call(e);
        } catch { }
        try {
          return e + "";
        } catch { }
      }
      return "";
    }
    Ru.exports = mb;
  });
  var Lu = g((g2, Cu) => {
    var yb = Oi(),
      Eb = Su(),
      _b = tt(),
      bb = Ri(),
      Ib = /[\\^$.*+?()[\]{}|]/g,
      wb = /^\[object .+?Constructor\]$/,
      Tb = Function.prototype,
      xb = Object.prototype,
      Ab = Tb.toString,
      Ob = xb.hasOwnProperty,
      Sb = RegExp(
        "^" +
        Ab.call(Ob)
          .replace(Ib, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
      );
    function Rb(e) {
      if (!_b(e) || Eb(e)) return !1;
      var t = yb(e) ? Sb : wb;
      return t.test(bb(e));
    }
    Cu.exports = Rb;
  });
  var Nu = g((h2, Pu) => {
    function Cb(e, t) {
      return e?.[t];
    }
    Pu.exports = Cb;
  });
  var pt = g((v2, Du) => {
    var Lb = Lu(),
      Pb = Nu();
    function Nb(e, t) {
      var r = Pb(e, t);
      return Lb(r) ? r : void 0;
    }
    Du.exports = Nb;
  });
  var $r = g((m2, Mu) => {
    var Db = pt(),
      Mb = Be(),
      Fb = Db(Mb, "Map");
    Mu.exports = Fb;
  });
  var lr = g((y2, Fu) => {
    var qb = pt(),
      kb = qb(Object, "create");
    Fu.exports = kb;
  });
  var Gu = g((E2, ku) => {
    var qu = lr();
    function Gb() {
      (this.__data__ = qu ? qu(null) : {}), (this.size = 0);
    }
    ku.exports = Gb;
  });
  var Wu = g((_2, Xu) => {
    function Xb(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Xu.exports = Xb;
  });
  var Vu = g((b2, Uu) => {
    var Wb = lr(),
      Ub = "__lodash_hash_undefined__",
      Vb = Object.prototype,
      Hb = Vb.hasOwnProperty;
    function Bb(e) {
      var t = this.__data__;
      if (Wb) {
        var r = t[e];
        return r === Ub ? void 0 : r;
      }
      return Hb.call(t, e) ? t[e] : void 0;
    }
    Uu.exports = Bb;
  });
  var Bu = g((I2, Hu) => {
    var zb = lr(),
      Kb = Object.prototype,
      jb = Kb.hasOwnProperty;
    function Yb(e) {
      var t = this.__data__;
      return zb ? t[e] !== void 0 : jb.call(t, e);
    }
    Hu.exports = Yb;
  });
  var Ku = g((w2, zu) => {
    var Qb = lr(),
      $b = "__lodash_hash_undefined__";
    function Zb(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Qb && t === void 0 ? $b : t),
        this
      );
    }
    zu.exports = Zb;
  });
  var Yu = g((T2, ju) => {
    var Jb = Gu(),
      eI = Wu(),
      tI = Vu(),
      rI = Bu(),
      nI = Ku();
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    qt.prototype.clear = Jb;
    qt.prototype.delete = eI;
    qt.prototype.get = tI;
    qt.prototype.has = rI;
    qt.prototype.set = nI;
    ju.exports = qt;
  });
  var Zu = g((x2, $u) => {
    var Qu = Yu(),
      iI = cr(),
      oI = $r();
    function aI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Qu(),
          map: new (oI || iI)(),
          string: new Qu(),
        });
    }
    $u.exports = aI;
  });
  var ec = g((A2, Ju) => {
    function sI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Ju.exports = sI;
  });
  var fr = g((O2, tc) => {
    var uI = ec();
    function cI(e, t) {
      var r = e.__data__;
      return uI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    tc.exports = cI;
  });
  var nc = g((S2, rc) => {
    var lI = fr();
    function fI(e) {
      var t = lI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    rc.exports = fI;
  });
  var oc = g((R2, ic) => {
    var dI = fr();
    function pI(e) {
      return dI(this, e).get(e);
    }
    ic.exports = pI;
  });
  var sc = g((C2, ac) => {
    var gI = fr();
    function hI(e) {
      return gI(this, e).has(e);
    }
    ac.exports = hI;
  });
  var cc = g((L2, uc) => {
    var vI = fr();
    function mI(e, t) {
      var r = vI(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    uc.exports = mI;
  });
  var Zr = g((P2, lc) => {
    var yI = Zu(),
      EI = nc(),
      _I = oc(),
      bI = sc(),
      II = cc();
    function kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    kt.prototype.clear = yI;
    kt.prototype.delete = EI;
    kt.prototype.get = _I;
    kt.prototype.has = bI;
    kt.prototype.set = II;
    lc.exports = kt;
  });
  var dc = g((N2, fc) => {
    var wI = cr(),
      TI = $r(),
      xI = Zr(),
      AI = 200;
    function OI(e, t) {
      var r = this.__data__;
      if (r instanceof wI) {
        var n = r.__data__;
        if (!TI || n.length < AI - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new xI(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    fc.exports = OI;
  });
  var Ci = g((D2, pc) => {
    var SI = cr(),
      RI = hu(),
      CI = mu(),
      LI = Eu(),
      PI = bu(),
      NI = dc();
    function Gt(e) {
      var t = (this.__data__ = new SI(e));
      this.size = t.size;
    }
    Gt.prototype.clear = RI;
    Gt.prototype.delete = CI;
    Gt.prototype.get = LI;
    Gt.prototype.has = PI;
    Gt.prototype.set = NI;
    pc.exports = Gt;
  });
  var hc = g((M2, gc) => {
    var DI = "__lodash_hash_undefined__";
    function MI(e) {
      return this.__data__.set(e, DI), this;
    }
    gc.exports = MI;
  });
  var mc = g((F2, vc) => {
    function FI(e) {
      return this.__data__.has(e);
    }
    vc.exports = FI;
  });
  var Ec = g((q2, yc) => {
    var qI = Zr(),
      kI = hc(),
      GI = mc();
    function Jr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new qI(); ++t < r;) this.add(e[t]);
    }
    Jr.prototype.add = Jr.prototype.push = kI;
    Jr.prototype.has = GI;
    yc.exports = Jr;
  });
  var bc = g((k2, _c) => {
    function XI(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _c.exports = XI;
  });
  var wc = g((G2, Ic) => {
    function WI(e, t) {
      return e.has(t);
    }
    Ic.exports = WI;
  });
  var Li = g((X2, Tc) => {
    var UI = Ec(),
      VI = bc(),
      HI = wc(),
      BI = 1,
      zI = 2;
    function KI(e, t, r, n, i, o) {
      var s = r & BI,
        a = e.length,
        u = t.length;
      if (a != u && !(s && u > a)) return !1;
      var l = o.get(e),
        _ = o.get(t);
      if (l && _) return l == t && _ == e;
      var f = -1,
        y = !0,
        m = r & zI ? new UI() : void 0;
      for (o.set(e, t), o.set(t, e); ++f < a;) {
        var E = e[f],
          w = t[f];
        if (n) var A = s ? n(w, E, f, t, e, o) : n(E, w, f, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          y = !1;
          break;
        }
        if (m) {
          if (
            !VI(t, function (T, N) {
              if (!HI(m, N) && (E === T || i(E, T, r, n, o))) return m.push(N);
            })
          ) {
            y = !1;
            break;
          }
        } else if (!(E === w || i(E, w, r, n, o))) {
          y = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), y;
    }
    Tc.exports = KI;
  });
  var Ac = g((W2, xc) => {
    var jI = Be(),
      YI = jI.Uint8Array;
    xc.exports = YI;
  });
  var Sc = g((U2, Oc) => {
    function QI(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Oc.exports = QI;
  });
  var Cc = g((V2, Rc) => {
    function $I(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Rc.exports = $I;
  });
  var Mc = g((H2, Dc) => {
    var Lc = Pt(),
      Pc = Ac(),
      ZI = Qr(),
      JI = Li(),
      ew = Sc(),
      tw = Cc(),
      rw = 1,
      nw = 2,
      iw = "[object Boolean]",
      ow = "[object Date]",
      aw = "[object Error]",
      sw = "[object Map]",
      uw = "[object Number]",
      cw = "[object RegExp]",
      lw = "[object Set]",
      fw = "[object String]",
      dw = "[object Symbol]",
      pw = "[object ArrayBuffer]",
      gw = "[object DataView]",
      Nc = Lc ? Lc.prototype : void 0,
      Pi = Nc ? Nc.valueOf : void 0;
    function hw(e, t, r, n, i, o, s) {
      switch (r) {
        case gw:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case pw:
          return !(e.byteLength != t.byteLength || !o(new Pc(e), new Pc(t)));
        case iw:
        case ow:
        case uw:
          return ZI(+e, +t);
        case aw:
          return e.name == t.name && e.message == t.message;
        case cw:
        case fw:
          return e == t + "";
        case sw:
          var a = ew;
        case lw:
          var u = n & rw;
          if ((a || (a = tw), e.size != t.size && !u)) return !1;
          var l = s.get(e);
          if (l) return l == t;
          (n |= nw), s.set(e, t);
          var _ = JI(a(e), a(t), n, i, o, s);
          return s.delete(e), _;
        case dw:
          if (Pi) return Pi.call(e) == Pi.call(t);
      }
      return !1;
    }
    Dc.exports = hw;
  });
  var en = g((B2, Fc) => {
    function vw(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e;
    }
    Fc.exports = vw;
  });
  var xe = g((z2, qc) => {
    var mw = Array.isArray;
    qc.exports = mw;
  });
  var Ni = g((K2, kc) => {
    var yw = en(),
      Ew = xe();
    function _w(e, t, r) {
      var n = t(e);
      return Ew(e) ? n : yw(n, r(e));
    }
    kc.exports = _w;
  });
  var Xc = g((j2, Gc) => {
    function bw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
        var s = e[r];
        t(s, r, e) && (o[i++] = s);
      }
      return o;
    }
    Gc.exports = bw;
  });
  var Di = g((Y2, Wc) => {
    function Iw() {
      return [];
    }
    Wc.exports = Iw;
  });
  var Mi = g((Q2, Vc) => {
    var ww = Xc(),
      Tw = Di(),
      xw = Object.prototype,
      Aw = xw.propertyIsEnumerable,
      Uc = Object.getOwnPropertySymbols,
      Ow = Uc
        ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              ww(Uc(e), function (t) {
                return Aw.call(e, t);
              }));
        }
        : Tw;
    Vc.exports = Ow;
  });
  var Bc = g(($2, Hc) => {
    function Sw(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n;
    }
    Hc.exports = Sw;
  });
  var Kc = g((Z2, zc) => {
    var Rw = dt(),
      Cw = at(),
      Lw = "[object Arguments]";
    function Pw(e) {
      return Cw(e) && Rw(e) == Lw;
    }
    zc.exports = Pw;
  });
  var dr = g((J2, Qc) => {
    var jc = Kc(),
      Nw = at(),
      Yc = Object.prototype,
      Dw = Yc.hasOwnProperty,
      Mw = Yc.propertyIsEnumerable,
      Fw = jc(
        (function () {
          return arguments;
        })()
      )
        ? jc
        : function (e) {
          return Nw(e) && Dw.call(e, "callee") && !Mw.call(e, "callee");
        };
    Qc.exports = Fw;
  });
  var Zc = g((eq, $c) => {
    function qw() {
      return !1;
    }
    $c.exports = qw;
  });
  var tn = g((pr, Xt) => {
    var kw = Be(),
      Gw = Zc(),
      tl = typeof pr == "object" && pr && !pr.nodeType && pr,
      Jc = tl && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
      Xw = Jc && Jc.exports === tl,
      el = Xw ? kw.Buffer : void 0,
      Ww = el ? el.isBuffer : void 0,
      Uw = Ww || Gw;
    Xt.exports = Uw;
  });
  var rn = g((tq, rl) => {
    var Vw = 9007199254740991,
      Hw = /^(?:0|[1-9]\d*)$/;
    function Bw(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Vw),
        !!t &&
        (r == "number" || (r != "symbol" && Hw.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    rl.exports = Bw;
  });
  var nn = g((rq, nl) => {
    var zw = 9007199254740991;
    function Kw(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zw;
    }
    nl.exports = Kw;
  });
  var ol = g((nq, il) => {
    var jw = dt(),
      Yw = nn(),
      Qw = at(),
      $w = "[object Arguments]",
      Zw = "[object Array]",
      Jw = "[object Boolean]",
      eT = "[object Date]",
      tT = "[object Error]",
      rT = "[object Function]",
      nT = "[object Map]",
      iT = "[object Number]",
      oT = "[object Object]",
      aT = "[object RegExp]",
      sT = "[object Set]",
      uT = "[object String]",
      cT = "[object WeakMap]",
      lT = "[object ArrayBuffer]",
      fT = "[object DataView]",
      dT = "[object Float32Array]",
      pT = "[object Float64Array]",
      gT = "[object Int8Array]",
      hT = "[object Int16Array]",
      vT = "[object Int32Array]",
      mT = "[object Uint8Array]",
      yT = "[object Uint8ClampedArray]",
      ET = "[object Uint16Array]",
      _T = "[object Uint32Array]",
      me = {};
    me[dT] =
      me[pT] =
      me[gT] =
      me[hT] =
      me[vT] =
      me[mT] =
      me[yT] =
      me[ET] =
      me[_T] =
      !0;
    me[$w] =
      me[Zw] =
      me[lT] =
      me[Jw] =
      me[fT] =
      me[eT] =
      me[tT] =
      me[rT] =
      me[nT] =
      me[iT] =
      me[oT] =
      me[aT] =
      me[sT] =
      me[uT] =
      me[cT] =
      !1;
    function bT(e) {
      return Qw(e) && Yw(e.length) && !!me[jw(e)];
    }
    il.exports = bT;
  });
  var sl = g((iq, al) => {
    function IT(e) {
      return function (t) {
        return e(t);
      };
    }
    al.exports = IT;
  });
  var cl = g((gr, Wt) => {
    var wT = si(),
      ul = typeof gr == "object" && gr && !gr.nodeType && gr,
      hr = ul && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
      TT = hr && hr.exports === ul,
      Fi = TT && wT.process,
      xT = (function () {
        try {
          var e = hr && hr.require && hr.require("util").types;
          return e || (Fi && Fi.binding && Fi.binding("util"));
        } catch { }
      })();
    Wt.exports = xT;
  });
  var on = g((oq, dl) => {
    var AT = ol(),
      OT = sl(),
      ll = cl(),
      fl = ll && ll.isTypedArray,
      ST = fl ? OT(fl) : AT;
    dl.exports = ST;
  });
  var qi = g((aq, pl) => {
    var RT = Bc(),
      CT = dr(),
      LT = xe(),
      PT = tn(),
      NT = rn(),
      DT = on(),
      MT = Object.prototype,
      FT = MT.hasOwnProperty;
    function qT(e, t) {
      var r = LT(e),
        n = !r && CT(e),
        i = !r && !n && PT(e),
        o = !r && !n && !i && DT(e),
        s = r || n || i || o,
        a = s ? RT(e.length, String) : [],
        u = a.length;
      for (var l in e)
        (t || FT.call(e, l)) &&
          !(
            s &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              NT(l, u))
          ) &&
          a.push(l);
      return a;
    }
    pl.exports = qT;
  });
  var an = g((sq, gl) => {
    var kT = Object.prototype;
    function GT(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || kT;
      return e === r;
    }
    gl.exports = GT;
  });
  var vl = g((uq, hl) => {
    var XT = ui(),
      WT = XT(Object.keys, Object);
    hl.exports = WT;
  });
  var sn = g((cq, ml) => {
    var UT = an(),
      VT = vl(),
      HT = Object.prototype,
      BT = HT.hasOwnProperty;
    function zT(e) {
      if (!UT(e)) return VT(e);
      var t = [];
      for (var r in Object(e)) BT.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ml.exports = zT;
  });
  var bt = g((lq, yl) => {
    var KT = Oi(),
      jT = nn();
    function YT(e) {
      return e != null && jT(e.length) && !KT(e);
    }
    yl.exports = YT;
  });
  var vr = g((fq, El) => {
    var QT = qi(),
      $T = sn(),
      ZT = bt();
    function JT(e) {
      return ZT(e) ? QT(e) : $T(e);
    }
    El.exports = JT;
  });
  var bl = g((dq, _l) => {
    var e0 = Ni(),
      t0 = Mi(),
      r0 = vr();
    function n0(e) {
      return e0(e, r0, t0);
    }
    _l.exports = n0;
  });
  var Tl = g((pq, wl) => {
    var Il = bl(),
      i0 = 1,
      o0 = Object.prototype,
      a0 = o0.hasOwnProperty;
    function s0(e, t, r, n, i, o) {
      var s = r & i0,
        a = Il(e),
        u = a.length,
        l = Il(t),
        _ = l.length;
      if (u != _ && !s) return !1;
      for (var f = u; f--;) {
        var y = a[f];
        if (!(s ? y in t : a0.call(t, y))) return !1;
      }
      var m = o.get(e),
        E = o.get(t);
      if (m && E) return m == t && E == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var A = s; ++f < u;) {
        y = a[f];
        var T = e[y],
          N = t[y];
        if (n) var L = s ? n(N, T, y, t, e, o) : n(T, N, y, e, t, o);
        if (!(L === void 0 ? T === N || i(T, N, r, n, o) : L)) {
          w = !1;
          break;
        }
        A || (A = y == "constructor");
      }
      if (w && !A) {
        var F = e.constructor,
          k = t.constructor;
        F != k &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof F == "function" &&
            F instanceof F &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    wl.exports = s0;
  });
  var Al = g((gq, xl) => {
    var u0 = pt(),
      c0 = Be(),
      l0 = u0(c0, "DataView");
    xl.exports = l0;
  });
  var Sl = g((hq, Ol) => {
    var f0 = pt(),
      d0 = Be(),
      p0 = f0(d0, "Promise");
    Ol.exports = p0;
  });
  var Cl = g((vq, Rl) => {
    var g0 = pt(),
      h0 = Be(),
      v0 = g0(h0, "Set");
    Rl.exports = v0;
  });
  var ki = g((mq, Ll) => {
    var m0 = pt(),
      y0 = Be(),
      E0 = m0(y0, "WeakMap");
    Ll.exports = E0;
  });
  var un = g((yq, kl) => {
    var Gi = Al(),
      Xi = $r(),
      Wi = Sl(),
      Ui = Cl(),
      Vi = ki(),
      ql = dt(),
      Ut = Ri(),
      Pl = "[object Map]",
      _0 = "[object Object]",
      Nl = "[object Promise]",
      Dl = "[object Set]",
      Ml = "[object WeakMap]",
      Fl = "[object DataView]",
      b0 = Ut(Gi),
      I0 = Ut(Xi),
      w0 = Ut(Wi),
      T0 = Ut(Ui),
      x0 = Ut(Vi),
      It = ql;
    ((Gi && It(new Gi(new ArrayBuffer(1))) != Fl) ||
      (Xi && It(new Xi()) != Pl) ||
      (Wi && It(Wi.resolve()) != Nl) ||
      (Ui && It(new Ui()) != Dl) ||
      (Vi && It(new Vi()) != Ml)) &&
      (It = function (e) {
        var t = ql(e),
          r = t == _0 ? e.constructor : void 0,
          n = r ? Ut(r) : "";
        if (n)
          switch (n) {
            case b0:
              return Fl;
            case I0:
              return Pl;
            case w0:
              return Nl;
            case T0:
              return Dl;
            case x0:
              return Ml;
          }
        return t;
      });
    kl.exports = It;
  });
  var zl = g((Eq, Bl) => {
    var Hi = Ci(),
      A0 = Li(),
      O0 = Mc(),
      S0 = Tl(),
      Gl = un(),
      Xl = xe(),
      Wl = tn(),
      R0 = on(),
      C0 = 1,
      Ul = "[object Arguments]",
      Vl = "[object Array]",
      cn = "[object Object]",
      L0 = Object.prototype,
      Hl = L0.hasOwnProperty;
    function P0(e, t, r, n, i, o) {
      var s = Xl(e),
        a = Xl(t),
        u = s ? Vl : Gl(e),
        l = a ? Vl : Gl(t);
      (u = u == Ul ? cn : u), (l = l == Ul ? cn : l);
      var _ = u == cn,
        f = l == cn,
        y = u == l;
      if (y && Wl(e)) {
        if (!Wl(t)) return !1;
        (s = !0), (_ = !1);
      }
      if (y && !_)
        return (
          o || (o = new Hi()),
          s || R0(e) ? A0(e, t, r, n, i, o) : O0(e, t, u, r, n, i, o)
        );
      if (!(r & C0)) {
        var m = _ && Hl.call(e, "__wrapped__"),
          E = f && Hl.call(t, "__wrapped__");
        if (m || E) {
          var w = m ? e.value() : e,
            A = E ? t.value() : t;
          return o || (o = new Hi()), i(w, A, r, n, o);
        }
      }
      return y ? (o || (o = new Hi()), S0(e, t, r, n, i, o)) : !1;
    }
    Bl.exports = P0;
  });
  var Bi = g((_q, Yl) => {
    var N0 = zl(),
      Kl = at();
    function jl(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Kl(e) && !Kl(t))
          ? e !== e && t !== t
          : N0(e, t, r, n, jl, i);
    }
    Yl.exports = jl;
  });
  var $l = g((bq, Ql) => {
    var D0 = Ci(),
      M0 = Bi(),
      F0 = 1,
      q0 = 2;
    function k0(e, t, r, n) {
      var i = r.length,
        o = i,
        s = !n;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var a = r[i];
        if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
      }
      for (; ++i < o;) {
        a = r[i];
        var u = a[0],
          l = e[u],
          _ = a[1];
        if (s && a[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var f = new D0();
          if (n) var y = n(l, _, u, e, t, f);
          if (!(y === void 0 ? M0(_, l, F0 | q0, n, f) : y)) return !1;
        }
      }
      return !0;
    }
    Ql.exports = k0;
  });
  var zi = g((Iq, Zl) => {
    var G0 = tt();
    function X0(e) {
      return e === e && !G0(e);
    }
    Zl.exports = X0;
  });
  var ef = g((wq, Jl) => {
    var W0 = zi(),
      U0 = vr();
    function V0(e) {
      for (var t = U0(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, W0(i)];
      }
      return t;
    }
    Jl.exports = V0;
  });
  var Ki = g((Tq, tf) => {
    function H0(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    tf.exports = H0;
  });
  var nf = g((xq, rf) => {
    var B0 = $l(),
      z0 = ef(),
      K0 = Ki();
    function j0(e) {
      var t = z0(e);
      return t.length == 1 && t[0][2]
        ? K0(t[0][0], t[0][1])
        : function (r) {
          return r === e || B0(r, e, t);
        };
    }
    rf.exports = j0;
  });
  var mr = g((Aq, of) => {
    var Y0 = dt(),
      Q0 = at(),
      $0 = "[object Symbol]";
    function Z0(e) {
      return typeof e == "symbol" || (Q0(e) && Y0(e) == $0);
    }
    of.exports = Z0;
  });
  var ln = g((Oq, af) => {
    var J0 = xe(),
      ex = mr(),
      tx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      rx = /^\w*$/;
    function nx(e, t) {
      if (J0(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        ex(e)
        ? !0
        : rx.test(e) || !tx.test(e) || (t != null && e in Object(t));
    }
    af.exports = nx;
  });
  var cf = g((Sq, uf) => {
    var sf = Zr(),
      ix = "Expected a function";
    function ji(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(ix);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, n);
        return (r.cache = o.set(i, s) || o), s;
      };
      return (r.cache = new (ji.Cache || sf)()), r;
    }
    ji.Cache = sf;
    uf.exports = ji;
  });
  var ff = g((Rq, lf) => {
    var ox = cf(),
      ax = 500;
    function sx(e) {
      var t = ox(e, function (n) {
        return r.size === ax && r.clear(), n;
      }),
        r = t.cache;
      return t;
    }
    lf.exports = sx;
  });
  var pf = g((Cq, df) => {
    var ux = ff(),
      cx =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      lx = /\\(\\)?/g,
      fx = ux(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(cx, function (r, n, i, o) {
            t.push(i ? o.replace(lx, "$1") : n || r);
          }),
          t
        );
      });
    df.exports = fx;
  });
  var Yi = g((Lq, gf) => {
    function dx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;)
        i[r] = t(e[r], r, e);
      return i;
    }
    gf.exports = dx;
  });
  var _f = g((Pq, Ef) => {
    var hf = Pt(),
      px = Yi(),
      gx = xe(),
      hx = mr(),
      vx = 1 / 0,
      vf = hf ? hf.prototype : void 0,
      mf = vf ? vf.toString : void 0;
    function yf(e) {
      if (typeof e == "string") return e;
      if (gx(e)) return px(e, yf) + "";
      if (hx(e)) return mf ? mf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -vx ? "-0" : t;
    }
    Ef.exports = yf;
  });
  var If = g((Nq, bf) => {
    var mx = _f();
    function yx(e) {
      return e == null ? "" : mx(e);
    }
    bf.exports = yx;
  });
  var yr = g((Dq, wf) => {
    var Ex = xe(),
      _x = ln(),
      bx = pf(),
      Ix = If();
    function wx(e, t) {
      return Ex(e) ? e : _x(e, t) ? [e] : bx(Ix(e));
    }
    wf.exports = wx;
  });
  var Vt = g((Mq, Tf) => {
    var Tx = mr(),
      xx = 1 / 0;
    function Ax(e) {
      if (typeof e == "string" || Tx(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -xx ? "-0" : t;
    }
    Tf.exports = Ax;
  });
  var fn = g((Fq, xf) => {
    var Ox = yr(),
      Sx = Vt();
    function Rx(e, t) {
      t = Ox(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[Sx(t[r++])];
      return r && r == n ? e : void 0;
    }
    xf.exports = Rx;
  });
  var dn = g((qq, Af) => {
    var Cx = fn();
    function Lx(e, t, r) {
      var n = e == null ? void 0 : Cx(e, t);
      return n === void 0 ? r : n;
    }
    Af.exports = Lx;
  });
  var Sf = g((kq, Of) => {
    function Px(e, t) {
      return e != null && t in Object(e);
    }
    Of.exports = Px;
  });
  var Cf = g((Gq, Rf) => {
    var Nx = yr(),
      Dx = dr(),
      Mx = xe(),
      Fx = rn(),
      qx = nn(),
      kx = Vt();
    function Gx(e, t, r) {
      t = Nx(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i;) {
        var s = kx(t[n]);
        if (!(o = e != null && r(e, s))) break;
        e = e[s];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && qx(i) && Fx(s, i) && (Mx(e) || Dx(e)));
    }
    Rf.exports = Gx;
  });
  var Pf = g((Xq, Lf) => {
    var Xx = Sf(),
      Wx = Cf();
    function Ux(e, t) {
      return e != null && Wx(e, t, Xx);
    }
    Lf.exports = Ux;
  });
  var Df = g((Wq, Nf) => {
    var Vx = Bi(),
      Hx = dn(),
      Bx = Pf(),
      zx = ln(),
      Kx = zi(),
      jx = Ki(),
      Yx = Vt(),
      Qx = 1,
      $x = 2;
    function Zx(e, t) {
      return zx(e) && Kx(t)
        ? jx(Yx(e), t)
        : function (r) {
          var n = Hx(r, e);
          return n === void 0 && n === t ? Bx(r, e) : Vx(t, n, Qx | $x);
        };
    }
    Nf.exports = Zx;
  });
  var pn = g((Uq, Mf) => {
    function Jx(e) {
      return e;
    }
    Mf.exports = Jx;
  });
  var Qi = g((Vq, Ff) => {
    function eA(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ff.exports = eA;
  });
  var kf = g((Hq, qf) => {
    var tA = fn();
    function rA(e) {
      return function (t) {
        return tA(t, e);
      };
    }
    qf.exports = rA;
  });
  var Xf = g((Bq, Gf) => {
    var nA = Qi(),
      iA = kf(),
      oA = ln(),
      aA = Vt();
    function sA(e) {
      return oA(e) ? nA(aA(e)) : iA(e);
    }
    Gf.exports = sA;
  });
  var gt = g((zq, Wf) => {
    var uA = nf(),
      cA = Df(),
      lA = pn(),
      fA = xe(),
      dA = Xf();
    function pA(e) {
      return typeof e == "function"
        ? e
        : e == null
          ? lA
          : typeof e == "object"
            ? fA(e)
              ? cA(e[0], e[1])
              : uA(e)
            : dA(e);
    }
    Wf.exports = pA;
  });
  var $i = g((Kq, Uf) => {
    var gA = gt(),
      hA = bt(),
      vA = vr();
    function mA(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!hA(t)) {
          var o = gA(r, 3);
          (t = vA(t)),
            (r = function (a) {
              return o(i[a], a, i);
            });
        }
        var s = e(t, r, n);
        return s > -1 ? i[o ? t[s] : s] : void 0;
      };
    }
    Uf.exports = mA;
  });
  var Zi = g((jq, Vf) => {
    function yA(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Vf.exports = yA;
  });
  var Bf = g((Yq, Hf) => {
    var EA = /\s/;
    function _A(e) {
      for (var t = e.length; t-- && EA.test(e.charAt(t)););
      return t;
    }
    Hf.exports = _A;
  });
  var Kf = g((Qq, zf) => {
    var bA = Bf(),
      IA = /^\s+/;
    function wA(e) {
      return e && e.slice(0, bA(e) + 1).replace(IA, "");
    }
    zf.exports = wA;
  });
  var gn = g(($q, Qf) => {
    var TA = Kf(),
      jf = tt(),
      xA = mr(),
      Yf = 0 / 0,
      AA = /^[-+]0x[0-9a-f]+$/i,
      OA = /^0b[01]+$/i,
      SA = /^0o[0-7]+$/i,
      RA = parseInt;
    function CA(e) {
      if (typeof e == "number") return e;
      if (xA(e)) return Yf;
      if (jf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = jf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = TA(e);
      var r = OA.test(e);
      return r || SA.test(e) ? RA(e.slice(2), r ? 2 : 8) : AA.test(e) ? Yf : +e;
    }
    Qf.exports = CA;
  });
  var Jf = g((Zq, Zf) => {
    var LA = gn(),
      $f = 1 / 0,
      PA = 17976931348623157e292;
    function NA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = LA(e)), e === $f || e === -$f)) {
        var t = e < 0 ? -1 : 1;
        return t * PA;
      }
      return e === e ? e : 0;
    }
    Zf.exports = NA;
  });
  var Ji = g((Jq, ed) => {
    var DA = Jf();
    function MA(e) {
      var t = DA(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    ed.exports = MA;
  });
  var rd = g((ek, td) => {
    var FA = Zi(),
      qA = gt(),
      kA = Ji(),
      GA = Math.max;
    function XA(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : kA(r);
      return i < 0 && (i = GA(n + i, 0)), FA(e, qA(t, 3), i);
    }
    td.exports = XA;
  });
  var eo = g((tk, nd) => {
    var WA = $i(),
      UA = rd(),
      VA = WA(UA);
    nd.exports = VA;
  });
  var ad = {};
  Fe(ad, {
    ELEMENT_MATCHES: () => HA,
    FLEX_PREFIXED: () => to,
    IS_BROWSER_ENV: () => Ke,
    TRANSFORM_PREFIXED: () => ht,
    TRANSFORM_STYLE_PREFIXED: () => vn,
    withBrowser: () => hn,
  });
  var od,
    Ke,
    hn,
    HA,
    to,
    ht,
    id,
    vn,
    mn = ye(() => {
      "use strict";
      (od = pe(eo())),
        (Ke = typeof window < "u"),
        (hn = (e, t) => (Ke ? e() : t)),
        (HA = hn(() =>
          (0, od.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (to = hn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (ht = hn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (id = ht.split("transform")[0]),
        (vn = id ? id + "TransformStyle" : "transformStyle");
    });
  var ro = g((rk, fd) => {
    var BA = 4,
      zA = 0.001,
      KA = 1e-7,
      jA = 10,
      Er = 11,
      yn = 1 / (Er - 1),
      YA = typeof Float32Array == "function";
    function sd(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ud(e, t) {
      return 3 * t - 6 * e;
    }
    function cd(e) {
      return 3 * e;
    }
    function En(e, t, r) {
      return ((sd(t, r) * e + ud(t, r)) * e + cd(t)) * e;
    }
    function ld(e, t, r) {
      return 3 * sd(t, r) * e * e + 2 * ud(t, r) * e + cd(t);
    }
    function QA(e, t, r, n, i) {
      var o,
        s,
        a = 0;
      do
        (s = t + (r - t) / 2), (o = En(s, n, i) - e), o > 0 ? (r = s) : (t = s);
      while (Math.abs(o) > KA && ++a < jA);
      return s;
    }
    function $A(e, t, r, n) {
      for (var i = 0; i < BA; ++i) {
        var o = ld(t, r, n);
        if (o === 0) return t;
        var s = En(t, r, n) - e;
        t -= s / o;
      }
      return t;
    }
    fd.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = YA ? new Float32Array(Er) : new Array(Er);
      if (t !== r || n !== i)
        for (var s = 0; s < Er; ++s) o[s] = En(s * yn, t, n);
      function a(u) {
        for (var l = 0, _ = 1, f = Er - 1; _ !== f && o[_] <= u; ++_) l += yn;
        --_;
        var y = (u - o[_]) / (o[_ + 1] - o[_]),
          m = l + y * yn,
          E = ld(m, t, n);
        return E >= zA ? $A(u, m, t, n) : E === 0 ? m : QA(u, l, l + yn, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
            ? 0
            : l === 1
              ? 1
              : En(a(l), r, i);
      };
    };
  });
  var br = {};
  Fe(br, {
    bounce: () => NO,
    bouncePast: () => DO,
    ease: () => ZA,
    easeIn: () => JA,
    easeInOut: () => tO,
    easeOut: () => eO,
    inBack: () => TO,
    inCirc: () => _O,
    inCubic: () => oO,
    inElastic: () => OO,
    inExpo: () => mO,
    inOutBack: () => AO,
    inOutCirc: () => IO,
    inOutCubic: () => sO,
    inOutElastic: () => RO,
    inOutExpo: () => EO,
    inOutQuad: () => iO,
    inOutQuart: () => lO,
    inOutQuint: () => pO,
    inOutSine: () => vO,
    inQuad: () => rO,
    inQuart: () => uO,
    inQuint: () => fO,
    inSine: () => gO,
    outBack: () => xO,
    outBounce: () => wO,
    outCirc: () => bO,
    outCubic: () => aO,
    outElastic: () => SO,
    outExpo: () => yO,
    outQuad: () => nO,
    outQuart: () => cO,
    outQuint: () => dO,
    outSine: () => hO,
    swingFrom: () => LO,
    swingFromTo: () => CO,
    swingTo: () => PO,
  });
  function rO(e) {
    return Math.pow(e, 2);
  }
  function nO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function iO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function oO(e) {
    return Math.pow(e, 3);
  }
  function aO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function sO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function uO(e) {
    return Math.pow(e, 4);
  }
  function cO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function lO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function fO(e) {
    return Math.pow(e, 5);
  }
  function dO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function pO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function gO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function hO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function vO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function mO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function yO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function EO(e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function _O(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function bO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function IO(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function wO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function TO(e) {
    let t = st;
    return e * e * ((t + 1) * e - t);
  }
  function xO(e) {
    let t = st;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function AO(e) {
    let t = st;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function OO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
  }
  function SO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function RO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r) *
            0.5 +
            1);
  }
  function CO(e) {
    let t = st;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function LO(e) {
    let t = st;
    return e * e * ((t + 1) * e - t);
  }
  function PO(e) {
    let t = st;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function NO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function DO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var _r,
    st,
    ZA,
    JA,
    eO,
    tO,
    no = ye(() => {
      "use strict";
      (_r = pe(ro())),
        (st = 1.70158),
        (ZA = (0, _r.default)(0.25, 0.1, 0.25, 1)),
        (JA = (0, _r.default)(0.42, 0, 1, 1)),
        (eO = (0, _r.default)(0, 0, 0.58, 1)),
        (tO = (0, _r.default)(0.42, 0, 0.58, 1));
    });
  var pd = {};
  Fe(pd, {
    applyEasing: () => FO,
    createBezierEasing: () => MO,
    optimizeFloat: () => Ir,
  });
  function Ir(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function MO(e) {
    return (0, dd.default)(...e);
  }
  function FO(e, t, r) {
    return t === 0
      ? 0
      : t === 1
        ? 1
        : Ir(r ? (t > 0 ? r(t) : t) : t > 0 && e && br[e] ? br[e](t) : t);
  }
  var dd,
    io = ye(() => {
      "use strict";
      no();
      dd = pe(ro());
    });
  var vd = {};
  Fe(vd, {
    createElementState: () => hd,
    ixElements: () => QO,
    mergeActionState: () => oo,
  });
  function hd(e, t, r, n, i) {
    let o =
      r === qO ? (0, Ht.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Ht.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function oo(e, t, r, n, i) {
    let o = ZO(i);
    return (0, Ht.mergeIn)(e, [t, YO, r], n, o);
  }
  function ZO(e) {
    let { config: t } = e;
    return $O.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        s = t[i],
        a = t[o];
      return s != null && a != null && (r[o] = a), r;
    }, {});
  }
  var Ht,
    ik,
    qO,
    ok,
    kO,
    GO,
    XO,
    WO,
    UO,
    VO,
    HO,
    BO,
    zO,
    KO,
    jO,
    gd,
    YO,
    QO,
    $O,
    md = ye(() => {
      "use strict";
      Ht = pe(Mt());
      qe();
      ({
        HTML_ELEMENT: ik,
        PLAIN_OBJECT: qO,
        ABSTRACT_NODE: ok,
        CONFIG_X_VALUE: kO,
        CONFIG_Y_VALUE: GO,
        CONFIG_Z_VALUE: XO,
        CONFIG_VALUE: WO,
        CONFIG_X_UNIT: UO,
        CONFIG_Y_UNIT: VO,
        CONFIG_Z_UNIT: HO,
        CONFIG_UNIT: BO,
      } = Re),
        ({
          IX2_SESSION_STOPPED: zO,
          IX2_INSTANCE_ADDED: KO,
          IX2_ELEMENT_STATE_CHANGED: jO,
        } = Te),
        (gd = {}),
        (YO = "refState"),
        (QO = (e = gd, t = {}) => {
          switch (t.type) {
            case zO:
              return gd;
            case KO: {
              let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: s,
              } = t.payload,
                { actionTypeId: a } = o,
                u = e;
              return (
                (0, Ht.getIn)(u, [r, n]) !== n && (u = hd(u, n, s, r, o)),
                oo(u, r, a, i, o)
              );
            }
            case jO: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return oo(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      $O = [
        [kO, UO],
        [GO, VO],
        [XO, HO],
        [WO, BO],
      ];
    });
  var yd = g((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    function JO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    JO(ao, {
      clearPlugin: function () {
        return aS;
      },
      createPluginInstance: function () {
        return iS;
      },
      getPluginConfig: function () {
        return eS;
      },
      getPluginDestination: function () {
        return nS;
      },
      getPluginDuration: function () {
        return tS;
      },
      getPluginOrigin: function () {
        return rS;
      },
      renderPlugin: function () {
        return oS;
      },
    });
    var eS = (e) => e.value,
      tS = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      rS = (e) => e || { value: 0 },
      nS = (e) => ({ value: e.value }),
      iS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      oS = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      aS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var _d = g((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    function sS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    sS(so, {
      clearPlugin: function () {
        return mS;
      },
      createPluginInstance: function () {
        return hS;
      },
      getPluginConfig: function () {
        return fS;
      },
      getPluginDestination: function () {
        return gS;
      },
      getPluginDuration: function () {
        return dS;
      },
      getPluginOrigin: function () {
        return pS;
      },
      renderPlugin: function () {
        return vS;
      },
    });
    var uS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      cS = () => window.Webflow.require("spline"),
      lS = (e, t) => e.filter((r) => !t.includes(r)),
      fS = (e, t) => e.value[t],
      dS = () => null,
      Ed = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      pS = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            s = lS(n, o);
          return s.length ? s.reduce((u, l) => ((u[l] = Ed[l]), u), e) : e;
        }
        return n.reduce((o, s) => ((o[s] = Ed[s]), o), {});
      },
      gS = (e) => e.value,
      hS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? uS(r) : null;
      },
      vS = (e, t, r) => {
        let n = cS(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          s = (a) => {
            if (!a)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = o && a.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? s(i.spline) : n.setLoadHandler(e, s);
      },
      mS = () => null;
  });
  var bd = g((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    function yS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    yS(lo, {
      clearPlugin: function () {
        return OS;
      },
      createPluginInstance: function () {
        return xS;
      },
      getPluginConfig: function () {
        return bS;
      },
      getPluginDestination: function () {
        return TS;
      },
      getPluginDuration: function () {
        return IS;
      },
      getPluginOrigin: function () {
        return wS;
      },
      renderPlugin: function () {
        return AS;
      },
    });
    var uo = "--wf-rive-fit",
      co = "--wf-rive-alignment",
      ES = (e) => document.querySelector(`[data-w-id="${e}"]`),
      _S = () => window.Webflow.require("rive"),
      bS = (e, t) => e.value.inputs[t],
      IS = () => null,
      wS = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      TS = (e) => e.value.inputs ?? {},
      xS = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let n = t?.config?.target?.pluginElement;
        return n ? ES(n) : null;
      },
      AS = (e, { PLUGIN_RIVE: t }, r) => {
        let n = _S(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: s, inputs: a = {} } = r.config.value || {};
        function u(l) {
          if (l.loaded) _();
          else {
            let f = () => {
              _(), l?.off("load", f);
            };
            l?.on("load", f);
          }
          function _() {
            let f = l.stateMachineInputs(s);
            if (f != null) {
              if ((l.isPlaying || l.play(s, !1), uo in a || co in a)) {
                let y = l.layout,
                  m = a[uo] ?? y.fit,
                  E = a[co] ?? y.alignment;
                (m !== y.fit || E !== y.alignment) &&
                  (l.layout = y.copyWith({ fit: m, alignment: E }));
              }
              for (let y in a) {
                if (y === uo || y === co) continue;
                let m = f.find((E) => E.name === y);
                if (m != null)
                  switch (m.type) {
                    case o.Boolean: {
                      if (a[y] != null) {
                        let E = !!a[y];
                        m.value = E;
                      }
                      break;
                    }
                    case o.Number: {
                      let E = t[y];
                      E != null && (m.value = E);
                      break;
                    }
                    case o.Trigger: {
                      a[y] && m.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : n.setLoadHandler(e, u);
      },
      OS = (e, t) => null;
  });
  var po = g((fo) => {
    "use strict";
    Object.defineProperty(fo, "__esModule", { value: !0 });
    Object.defineProperty(fo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return SS;
      },
    });
    var Id = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function SS(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        a = (typeof Id[o] == "string" ? Id[o].toLowerCase() : null) || o;
      if (a.startsWith("#")) {
        let u = a.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
          ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (a.startsWith("rgba")) {
        let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (a.startsWith("rgb")) {
        let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (a.startsWith("hsla")) {
        let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          f = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let y = (1 - Math.abs(2 * f - 1)) * _,
          m = y * (1 - Math.abs(((l / 60) % 2) - 1)),
          E = f - y / 2,
          w,
          A,
          T;
        l >= 0 && l < 60
          ? ((w = y), (A = m), (T = 0))
          : l >= 60 && l < 120
            ? ((w = m), (A = y), (T = 0))
            : l >= 120 && l < 180
              ? ((w = 0), (A = y), (T = m))
              : l >= 180 && l < 240
                ? ((w = 0), (A = m), (T = y))
                : l >= 240 && l < 300
                  ? ((w = m), (A = 0), (T = y))
                  : ((w = y), (A = 0), (T = m)),
          (t = Math.round((w + E) * 255)),
          (r = Math.round((A + E) * 255)),
          (n = Math.round((T + E) * 255));
      } else if (a.startsWith("hsl")) {
        let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          f = parseFloat(u[2].replace("%", "")) / 100,
          y = (1 - Math.abs(2 * f - 1)) * _,
          m = y * (1 - Math.abs(((l / 60) % 2) - 1)),
          E = f - y / 2,
          w,
          A,
          T;
        l >= 0 && l < 60
          ? ((w = y), (A = m), (T = 0))
          : l >= 60 && l < 120
            ? ((w = m), (A = y), (T = 0))
            : l >= 120 && l < 180
              ? ((w = 0), (A = y), (T = m))
              : l >= 180 && l < 240
                ? ((w = 0), (A = m), (T = y))
                : l >= 240 && l < 300
                  ? ((w = m), (A = 0), (T = y))
                  : ((w = y), (A = 0), (T = m)),
          (t = Math.round((w + E) * 255)),
          (r = Math.round((A + E) * 255)),
          (n = Math.round((T + E) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var wd = g((go) => {
    "use strict";
    Object.defineProperty(go, "__esModule", { value: !0 });
    function RS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    RS(go, {
      clearPlugin: function () {
        return qS;
      },
      createPluginInstance: function () {
        return MS;
      },
      getPluginConfig: function () {
        return LS;
      },
      getPluginDestination: function () {
        return DS;
      },
      getPluginDuration: function () {
        return PS;
      },
      getPluginOrigin: function () {
        return NS;
      },
      renderPlugin: function () {
        return FS;
      },
    });
    var CS = po(),
      LS = (e, t) => e.value[t],
      PS = () => null,
      NS = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, CS.normalizeColor)(i);
      },
      DS = (e) => e.value,
      MS = () => null,
      FS = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: s, red: a, green: u, blue: l, alpha: _ } = o,
          f;
        s != null && (f = s + i),
          a != null &&
          l != null &&
          u != null &&
          _ != null &&
          (f = `rgba(${a}, ${u}, ${l}, ${_})`),
          f != null && document.documentElement.style.setProperty(n, f);
      },
      qS = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var xd = g((ho) => {
    "use strict";
    Object.defineProperty(ho, "__esModule", { value: !0 });
    Object.defineProperty(ho, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return US;
      },
    });
    var _n = (qe(), $e(Ss)),
      kS = bn(yd()),
      GS = bn(_d()),
      XS = bn(bd()),
      WS = bn(wd());
    function Td(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Td = function (n) {
        return n ? r : t;
      })(e);
    }
    function bn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Td(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var US = new Map([
      [_n.ActionTypeConsts.PLUGIN_LOTTIE, { ...kS }],
      [_n.ActionTypeConsts.PLUGIN_SPLINE, { ...GS }],
      [_n.ActionTypeConsts.PLUGIN_RIVE, { ...XS }],
      [_n.ActionTypeConsts.PLUGIN_VARIABLE, { ...WS }],
    ]);
  });
  var Ad = {};
  Fe(Ad, {
    clearPlugin: () => bo,
    createPluginInstance: () => HS,
    getPluginConfig: () => mo,
    getPluginDestination: () => Eo,
    getPluginDuration: () => VS,
    getPluginOrigin: () => yo,
    isPluginType: () => wt,
    renderPlugin: () => _o,
  });
  function wt(e) {
    return vo.pluginMethodMap.has(e);
  }
  var vo,
    Tt,
    mo,
    yo,
    VS,
    Eo,
    HS,
    _o,
    bo,
    Io = ye(() => {
      "use strict";
      mn();
      vo = pe(xd());
      (Tt = (e) => (t) => {
        if (!Ke) return () => null;
        let r = vo.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (mo = Tt("getPluginConfig")),
        (yo = Tt("getPluginOrigin")),
        (VS = Tt("getPluginDuration")),
        (Eo = Tt("getPluginDestination")),
        (HS = Tt("createPluginInstance")),
        (_o = Tt("renderPlugin")),
        (bo = Tt("clearPlugin"));
    });
  var Sd = g((pk, Od) => {
    function BS(e, t) {
      return e == null || e !== e ? t : e;
    }
    Od.exports = BS;
  });
  var Cd = g((gk, Rd) => {
    function zS(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
      return r;
    }
    Rd.exports = zS;
  });
  var Pd = g((hk, Ld) => {
    function KS(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
          var u = s[e ? a : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ld.exports = KS;
  });
  var Dd = g((vk, Nd) => {
    var jS = Pd(),
      YS = jS();
    Nd.exports = YS;
  });
  var wo = g((mk, Md) => {
    var QS = Dd(),
      $S = vr();
    function ZS(e, t) {
      return e && QS(e, t, $S);
    }
    Md.exports = ZS;
  });
  var qd = g((yk, Fd) => {
    var JS = bt();
    function eR(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!JS(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, s = Object(r);
          (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;

        );
        return r;
      };
    }
    Fd.exports = eR;
  });
  var To = g((Ek, kd) => {
    var tR = wo(),
      rR = qd(),
      nR = rR(tR);
    kd.exports = nR;
  });
  var Xd = g((_k, Gd) => {
    function iR(e, t, r, n, i) {
      return (
        i(e, function (o, s, a) {
          r = n ? ((n = !1), o) : t(r, o, s, a);
        }),
        r
      );
    }
    Gd.exports = iR;
  });
  var Ud = g((bk, Wd) => {
    var oR = Cd(),
      aR = To(),
      sR = gt(),
      uR = Xd(),
      cR = xe();
    function lR(e, t, r) {
      var n = cR(e) ? oR : uR,
        i = arguments.length < 3;
      return n(e, sR(t, 4), r, i, aR);
    }
    Wd.exports = lR;
  });
  var Hd = g((Ik, Vd) => {
    var fR = Zi(),
      dR = gt(),
      pR = Ji(),
      gR = Math.max,
      hR = Math.min;
    function vR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
        ((i = pR(r)), (i = r < 0 ? gR(n + i, 0) : hR(i, n - 1))),
        fR(e, dR(t, 3), i, !0)
      );
    }
    Vd.exports = vR;
  });
  var zd = g((wk, Bd) => {
    var mR = $i(),
      yR = Hd(),
      ER = mR(yR);
    Bd.exports = ER;
  });
  function Kd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function _R(e, t) {
    if (Kd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Kd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var xo,
    jd = ye(() => {
      "use strict";
      xo = _R;
    });
  var dp = {};
  Fe(dp, {
    cleanupHTMLElement: () => mC,
    clearAllStyles: () => vC,
    clearObjectCache: () => qR,
    getActionListProgress: () => EC,
    getAffectedElements: () => Co,
    getComputedStyle: () => BR,
    getDestinationValues: () => ZR,
    getElementId: () => WR,
    getInstanceId: () => GR,
    getInstanceOrigin: () => jR,
    getItemConfigByKey: () => $R,
    getMaxDurationItemIndex: () => fp,
    getNamespacedParameterId: () => IC,
    getRenderType: () => up,
    getStyleProp: () => JR,
    mediaQueriesEqual: () => TC,
    observeStore: () => HR,
    reduceListToGroup: () => _C,
    reifyState: () => UR,
    renderHTMLElement: () => eC,
    shallowEqual: () => xo,
    shouldAllowMediaQuery: () => wC,
    shouldNamespaceEventParameter: () => bC,
    stringifyTarget: () => xC,
  });
  function qR() {
    In.clear();
  }
  function GR() {
    return "i" + kR++;
  }
  function WR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + XR++;
  }
  function UR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, An.default)(
      e,
      (s, a) => {
        let { eventTypeId: u } = a;
        return s[u] || (s[u] = {}), (s[u][a.id] = a), s;
      },
      {}
    ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((s) => s.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function HR({ store: e, select: t, onChange: r, comparator: n = VR }) {
    let { getState: i, subscribe: o } = e,
      s = o(u),
      a = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        s();
        return;
      }
      n(l, a) || ((a = l), r(a, e));
    }
    return s;
  }
  function $d(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: s,
        useEventTarget: a,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: s,
        useEventTarget: a,
      };
    }
    return {};
  }
  function Co({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (C, I) =>
          C.concat(
            Co({
              config: { target: I },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
      getValidDocument: s,
      getQuerySelector: a,
      queryDocument: u,
      getChildElements: l,
      getSiblingElements: _,
      matchSelector: f,
      elementContains: y,
      isSiblingNode: m,
    } = i,
      { target: E } = e;
    if (!E) return [];
    let {
      id: w,
      objectId: A,
      selector: T,
      selectorGuids: N,
      appliesTo: L,
      useEventTarget: F,
    } = $d(E);
    if (A) return [In.has(A) ? In.get(A) : In.set(A, {}).get(A)];
    if (L === wi.PAGE) {
      let C = s(w);
      return C ? [C] : [];
    }
    let q = (t?.action?.config?.affectedElements ?? {})[w || T] || {},
      j = !!(q.id || q.selector),
      K,
      J,
      re,
      B = t && a($d(t.target));
    if (
      (j
        ? ((K = q.limitAffectedElements), (J = B), (re = a(q)))
        : (J = re = a({ id: w, selector: T, selectorGuids: N })),
        t && F)
    ) {
      let C = r && (re || F === !0) ? [r] : u(B);
      if (re) {
        if (F === DR) return u(re).filter((I) => C.some((P) => y(I, P)));
        if (F === Yd) return u(re).filter((I) => C.some((P) => y(P, I)));
        if (F === Qd) return u(re).filter((I) => C.some((P) => m(P, I)));
      }
      return C;
    }
    return J == null || re == null
      ? []
      : Ke && n
        ? u(re).filter((C) => n.contains(C))
        : K === Yd
          ? u(J, re)
          : K === NR
            ? l(u(J)).filter(f(re))
            : K === Qd
              ? _(u(J)).filter(f(re))
              : u(re);
  }
  function BR({ element: e, actionItem: t }) {
    if (!Ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Yt:
      case Qt:
      case $t:
      case Zt:
      case Sn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function jR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: s } = n;
    if (wt(s)) return yo(s)(t[s], n);
    switch (n.actionTypeId) {
      case zt:
      case Kt:
      case jt:
      case Ar:
        return t[n.actionTypeId] || Lo[n.actionTypeId];
      case Or:
        return zR(t[n.actionTypeId], n.config.filters);
      case Sr:
        return KR(t[n.actionTypeId], n.config.fontVariations);
      case op:
        return { value: (0, ut.default)(parseFloat(o(e, Tn)), 1) };
      case Yt: {
        let a = o(e, rt),
          u = o(e, nt),
          l,
          _;
        return (
          n.config.widthUnit === vt
            ? (l = Zd.test(a) ? parseFloat(a) : parseFloat(r.width))
            : (l = (0, ut.default)(parseFloat(a), parseFloat(r.width))),
          n.config.heightUnit === vt
            ? (_ = Zd.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (_ = (0, ut.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: l, heightValue: _ }
        );
      }
      case Qt:
      case $t:
      case Zt:
        return pC({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case Sn:
        return { value: (0, ut.default)(o(e, xn), r.display) };
      case FR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function ZR({ element: e, actionItem: t, elementApi: r }) {
    if (wt(t.actionTypeId)) return Eo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case zt:
      case Kt:
      case jt:
      case Ar: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Yt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: s, heightUnit: a } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!Ke) return { widthValue: u, heightValue: l };
        if (s === vt) {
          let _ = n(e, rt);
          i(e, rt, ""), (u = o(e, "offsetWidth")), i(e, rt, _);
        }
        if (a === vt) {
          let _ = n(e, nt);
          i(e, nt, ""), (l = o(e, "offsetHeight")), i(e, nt, _);
        }
        return { widthValue: u, heightValue: l };
      }
      case Qt:
      case $t:
      case Zt: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: s,
          globalSwatchId: a,
        } = t.config;
        if (a && a.startsWith("--")) {
          let { getStyle: u } = r,
            l = u(e, a),
            _ = (0, tp.normalizeColor)(l);
          return {
            rValue: _.red,
            gValue: _.green,
            bValue: _.blue,
            aValue: _.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: s };
      }
      case Or:
        return t.config.filters.reduce(YR, {});
      case Sr:
        return t.config.fontVariations.reduce(QR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function up(e) {
    if (/^TRANSFORM_/.test(e)) return np;
    if (/^STYLE_/.test(e)) return So;
    if (/^GENERAL_/.test(e)) return Oo;
    if (/^PLUGIN_/.test(e)) return ip;
  }
  function JR(e, t) {
    return e === So ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function eC(e, t, r, n, i, o, s, a, u) {
    switch (a) {
      case np:
        return oC(e, t, r, i, s);
      case So:
        return gC(e, t, r, i, o, s);
      case Oo:
        return hC(e, i, s);
      case ip: {
        let { actionTypeId: l } = i;
        if (wt(l)) return _o(l)(u, t, i);
      }
    }
  }
  function oC(e, t, r, n, i) {
    let o = iC
      .map((a) => {
        let u = Lo[a],
          {
            xValue: l = u.xValue,
            yValue: _ = u.yValue,
            zValue: f = u.zValue,
            xUnit: y = "",
            yUnit: m = "",
            zUnit: E = "",
          } = t[a] || {};
        switch (a) {
          case zt:
            return `${wR}(${l}${y}, ${_}${m}, ${f}${E})`;
          case Kt:
            return `${TR}(${l}${y}, ${_}${m}, ${f}${E})`;
          case jt:
            return `${xR}(${l}${y}) ${AR}(${_}${m}) ${OR}(${f}${E})`;
          case Ar:
            return `${SR}(${l}${y}, ${_}${m})`;
          default:
            return "";
        }
      })
      .join(" "),
      { setStyle: s } = i;
    xt(e, ht, i), s(e, ht, o), uC(n, r) && s(e, vn, RR);
  }
  function aC(e, t, r, n) {
    let i = (0, An.default)(t, (s, a, u) => `${s} ${u}(${a}${nC(u, r)})`, ""),
      { setStyle: o } = n;
    xt(e, wr, n), o(e, wr, i);
  }
  function sC(e, t, r, n) {
    let i = (0, An.default)(
      t,
      (s, a, u) => (s.push(`"${u}" ${a}`), s),
      []
    ).join(", "),
      { setStyle: o } = n;
    xt(e, Tr, n), o(e, Tr, i);
  }
  function uC({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === zt && n !== void 0) ||
      (e === Kt && n !== void 0) ||
      (e === jt && (t !== void 0 || r !== void 0))
    );
  }
  function dC(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function pC({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ro[t],
      o = n(e, i),
      s = lC.test(o) ? o : r[i],
      a = dC(fC, s).split(xr);
    return {
      rValue: (0, ut.default)(parseInt(a[0], 10), 255),
      gValue: (0, ut.default)(parseInt(a[1], 10), 255),
      bValue: (0, ut.default)(parseInt(a[2], 10), 255),
      aValue: (0, ut.default)(parseFloat(a[3]), 1),
    };
  }
  function gC(e, t, r, n, i, o) {
    let { setStyle: s } = o;
    switch (n.actionTypeId) {
      case Yt: {
        let { widthUnit: a = "", heightUnit: u = "" } = n.config,
          { widthValue: l, heightValue: _ } = r;
        l !== void 0 && (a === vt && (a = "px"), xt(e, rt, o), s(e, rt, l + a)),
          _ !== void 0 &&
          (u === vt && (u = "px"), xt(e, nt, o), s(e, nt, _ + u));
        break;
      }
      case Or: {
        aC(e, r, n.config, o);
        break;
      }
      case Sr: {
        sC(e, r, n.config, o);
        break;
      }
      case Qt:
      case $t:
      case Zt: {
        let a = Ro[n.actionTypeId],
          u = Math.round(r.rValue),
          l = Math.round(r.gValue),
          _ = Math.round(r.bValue),
          f = r.aValue;
        xt(e, a, o),
          s(e, a, f >= 1 ? `rgb(${u},${l},${_})` : `rgba(${u},${l},${_},${f})`);
        break;
      }
      default: {
        let { unit: a = "" } = n.config;
        xt(e, i, o), s(e, i, r.value + a);
        break;
      }
    }
  }
  function hC(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Sn: {
        let { value: i } = t.config;
        i === CR && Ke ? n(e, xn, to) : n(e, xn, i);
        return;
      }
    }
  }
  function xt(e, t, r) {
    if (!Ke) return;
    let n = sp[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      s = i(e, Bt);
    if (!s) {
      o(e, Bt, n);
      return;
    }
    let a = s.split(xr).map(ap);
    a.indexOf(n) === -1 && o(e, Bt, a.concat(n).join(xr));
  }
  function cp(e, t, r) {
    if (!Ke) return;
    let n = sp[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      s = i(e, Bt);
    !s ||
      s.indexOf(n) === -1 ||
      o(
        e,
        Bt,
        s
          .split(xr)
          .map(ap)
          .filter((a) => a !== n)
          .join(xr)
      );
  }
  function vC({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let s = n[o],
        { config: a } = s.action,
        { actionListId: u } = a,
        l = i[u];
      l && Jd({ actionList: l, event: s, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Jd({ actionList: i[o], elementApi: t });
      });
  }
  function Jd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        ep({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
      i.forEach((o) => {
        let { continuousActionGroups: s } = o;
        s.forEach((a) => {
          ep({ actionGroup: a, event: t, elementApi: r });
        });
      });
  }
  function ep({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: s } = i,
        a;
      wt(o)
        ? (a = (u) => bo(o)(u, i))
        : (a = lp({ effect: yC, actionTypeId: o, elementApi: r })),
        Co({ config: s, event: t, elementApi: r }).forEach(a);
    });
  }
  function mC(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Yt) {
      let { config: s } = t;
      s.widthUnit === vt && n(e, rt, ""), s.heightUnit === vt && n(e, nt, "");
    }
    i(e, Bt) && lp({ effect: cp, actionTypeId: o, elementApi: r })(e);
  }
  function yC(e, t, r) {
    let { setStyle: n } = r;
    cp(e, t, r), n(e, t, ""), t === ht && n(e, vn, "");
  }
  function fp(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          s = o.delay + o.duration;
        s >= t && ((t = s), (r = i));
      }),
      r
    );
  }
  function EC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      s = 0,
      a = 0;
    return (
      r.forEach((u, l) => {
        if (n && l === 0) return;
        let { actionItems: _ } = u,
          f = _[fp(_)],
          { config: y, actionTypeId: m } = f;
        i.id === f.id && (a = s + o);
        let E = up(m) === Oo ? 0 : y.duration;
        s += y.delay + E;
      }),
      s > 0 ? Ir(a / s) : 0
    );
  }
  function _C({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      s = (a) => (
        o.push((0, On.mergeIn)(a, ["config"], { delay: 0, duration: 0 })),
        a.id === t
      );
    return (
      n && n.some(({ actionItems: a }) => a.some(s)),
      i &&
      i.some((a) => {
        let { continuousActionGroups: u } = a;
        return u.some(({ actionItems: l }) => l.some(s));
      }),
      (0, On.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function bC(e, { basedOn: t }) {
    return (
      (e === ze.SCROLLING_IN_VIEW && (t === et.ELEMENT || t == null)) ||
      (e === ze.MOUSE_MOVE && t === et.ELEMENT)
    );
  }
  function IC(e, t) {
    return e + MR + t;
  }
  function wC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function TC(e, t) {
    return xo(e && e.sort(), t && t.sort());
  }
  function xC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ao + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ao + r + Ao + n;
  }
  var ut,
    An,
    wn,
    On,
    tp,
    bR,
    IR,
    wR,
    TR,
    xR,
    AR,
    OR,
    SR,
    RR,
    CR,
    Tn,
    wr,
    Tr,
    rt,
    nt,
    rp,
    LR,
    PR,
    Yd,
    NR,
    Qd,
    DR,
    xn,
    Bt,
    vt,
    xr,
    MR,
    Ao,
    np,
    Oo,
    So,
    ip,
    zt,
    Kt,
    jt,
    Ar,
    op,
    Or,
    Sr,
    Yt,
    Qt,
    $t,
    Zt,
    Sn,
    FR,
    ap,
    Ro,
    sp,
    In,
    kR,
    XR,
    VR,
    Zd,
    zR,
    KR,
    YR,
    QR,
    $R,
    Lo,
    tC,
    rC,
    nC,
    iC,
    cC,
    lC,
    fC,
    lp,
    pp = ye(() => {
      "use strict";
      (ut = pe(Sd())), (An = pe(Ud())), (wn = pe(zd())), (On = pe(Mt()));
      qe();
      jd();
      io();
      tp = pe(po());
      Io();
      mn();
      ({
        BACKGROUND: bR,
        TRANSFORM: IR,
        TRANSLATE_3D: wR,
        SCALE_3D: TR,
        ROTATE_X: xR,
        ROTATE_Y: AR,
        ROTATE_Z: OR,
        SKEW: SR,
        PRESERVE_3D: RR,
        FLEX: CR,
        OPACITY: Tn,
        FILTER: wr,
        FONT_VARIATION_SETTINGS: Tr,
        WIDTH: rt,
        HEIGHT: nt,
        BACKGROUND_COLOR: rp,
        BORDER_COLOR: LR,
        COLOR: PR,
        CHILDREN: Yd,
        IMMEDIATE_CHILDREN: NR,
        SIBLINGS: Qd,
        PARENT: DR,
        DISPLAY: xn,
        WILL_CHANGE: Bt,
        AUTO: vt,
        COMMA_DELIMITER: xr,
        COLON_DELIMITER: MR,
        BAR_DELIMITER: Ao,
        RENDER_TRANSFORM: np,
        RENDER_GENERAL: Oo,
        RENDER_STYLE: So,
        RENDER_PLUGIN: ip,
      } = Re),
        ({
          TRANSFORM_MOVE: zt,
          TRANSFORM_SCALE: Kt,
          TRANSFORM_ROTATE: jt,
          TRANSFORM_SKEW: Ar,
          STYLE_OPACITY: op,
          STYLE_FILTER: Or,
          STYLE_FONT_VARIATION: Sr,
          STYLE_SIZE: Yt,
          STYLE_BACKGROUND_COLOR: Qt,
          STYLE_BORDER: $t,
          STYLE_TEXT_COLOR: Zt,
          GENERAL_DISPLAY: Sn,
          OBJECT_VALUE: FR,
        } = Pe),
        (ap = (e) => e.trim()),
        (Ro = Object.freeze({ [Qt]: rp, [$t]: LR, [Zt]: PR })),
        (sp = Object.freeze({
          [ht]: IR,
          [rp]: bR,
          [Tn]: Tn,
          [wr]: wr,
          [rt]: rt,
          [nt]: nt,
          [Tr]: Tr,
        })),
        (In = new Map());
      kR = 1;
      XR = 1;
      VR = (e, t) => e === t;
      (Zd = /px/),
        (zR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = tC[n.type]), r),
            e || {}
          )),
        (KR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
              (r[n.type] = rC[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (YR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (QR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        ($R = (e, t, r) => {
          if (wt(e)) return mo(e)(r, t);
          switch (e) {
            case Or: {
              let n = (0, wn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Sr: {
              let n = (0, wn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Lo = {
        [zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [jt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ar]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (tC = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (rC = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (nC = (e, t) => {
          let r = (0, wn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (iC = Object.keys(Lo));
      (cC = "\\(([^)]+)\\)"), (lC = /^rgb/), (fC = RegExp(`rgba?${cC}`));
      lp =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
          (n) => {
            switch (t) {
              case zt:
              case Kt:
              case jt:
              case Ar:
                e(n, ht, r);
                break;
              case Or:
                e(n, wr, r);
                break;
              case Sr:
                e(n, Tr, r);
                break;
              case op:
                e(n, Tn, r);
                break;
              case Yt:
                e(n, rt, r), e(n, nt, r);
                break;
              case Qt:
              case $t:
              case Zt:
                e(n, Ro[t], r);
                break;
              case Sn:
                e(n, xn, r);
                break;
            }
          };
    });
  var At = g((Po) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    function AC(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    AC(Po, {
      IX2BrowserSupport: function () {
        return OC;
      },
      IX2EasingUtils: function () {
        return RC;
      },
      IX2Easings: function () {
        return SC;
      },
      IX2ElementsReducer: function () {
        return CC;
      },
      IX2VanillaPlugins: function () {
        return LC;
      },
      IX2VanillaUtils: function () {
        return PC;
      },
    });
    var OC = Jt((mn(), $e(ad))),
      SC = Jt((no(), $e(br))),
      RC = Jt((io(), $e(pd))),
      CC = Jt((md(), $e(vd))),
      LC = Jt((Io(), $e(Ad))),
      PC = Jt((pp(), $e(dp)));
    function gp(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (gp = function (n) {
        return n ? r : t;
      })(e);
    }
    function Jt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = gp(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var Cn,
    ct,
    NC,
    DC,
    MC,
    FC,
    qC,
    kC,
    Rn,
    hp,
    GC,
    XC,
    No,
    WC,
    UC,
    VC,
    HC,
    vp,
    mp = ye(() => {
      "use strict";
      qe();
      (Cn = pe(At())),
        (ct = pe(Mt())),
        ({
          IX2_RAW_DATA_IMPORTED: NC,
          IX2_SESSION_STOPPED: DC,
          IX2_INSTANCE_ADDED: MC,
          IX2_INSTANCE_STARTED: FC,
          IX2_INSTANCE_REMOVED: qC,
          IX2_ANIMATION_FRAME_CHANGED: kC,
        } = Te),
        ({
          optimizeFloat: Rn,
          applyEasing: hp,
          createBezierEasing: GC,
        } = Cn.IX2EasingUtils),
        ({ RENDER_GENERAL: XC } = Re),
        ({
          getItemConfigByKey: No,
          getRenderType: WC,
          getStyleProp: UC,
        } = Cn.IX2VanillaUtils),
        (VC = (e, t) => {
          let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: s,
            restingValue: a,
            actionTypeId: u,
            customEasingFn: l,
            skipMotion: _,
            skipToValue: f,
          } = e,
            { parameters: y } = t.payload,
            m = Math.max(1 - s, 0.01),
            E = y[n];
          E == null && ((m = 1), (E = a));
          let w = Math.max(E, 0) || 0,
            A = Rn(w - r),
            T = _ ? f : Rn(r + A * m),
            N = T * 100;
          if (T === r && e.current) return e;
          let L, F, k, q;
          for (let K = 0, { length: J } = i; K < J; K++) {
            let { keyframe: re, actionItems: B } = i[K];
            if ((K === 0 && (L = B[0]), N >= re)) {
              L = B[0];
              let C = i[K + 1],
                I = C && N !== re;
              (F = I ? C.actionItems[0] : null),
                I && ((k = re / 100), (q = (C.keyframe - re) / 100));
            }
          }
          let j = {};
          if (L && !F)
            for (let K = 0, { length: J } = o; K < J; K++) {
              let re = o[K];
              j[re] = No(u, re, L.config);
            }
          else if (L && F && k !== void 0 && q !== void 0) {
            let K = (T - k) / q,
              J = L.config.easing,
              re = hp(J, K, l);
            for (let B = 0, { length: C } = o; B < C; B++) {
              let I = o[B],
                P = No(u, I, L.config),
                te = (No(u, I, F.config) - P) * re + P;
              j[I] = te;
            }
          }
          return (0, ct.merge)(e, { position: T, current: j });
        }),
        (HC = (e, t) => {
          let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: s,
            verbose: a,
            actionItem: u,
            destination: l,
            destinationKeys: _,
            pluginDuration: f,
            instanceDelay: y,
            customEasingFn: m,
            skipMotion: E,
          } = e,
            w = u.config.easing,
            { duration: A, delay: T } = u.config;
          f != null && (A = f),
            (T = y ?? T),
            s === XC ? (A = 0) : (o || E) && (A = T = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let L = N - (i + T);
            if (a) {
              let K = N - i,
                J = A + T,
                re = Rn(Math.min(Math.max(0, K / J), 1));
              e = (0, ct.set)(e, "verboseTimeElapsed", J * re);
            }
            if (L < 0) return e;
            let F = Rn(Math.min(Math.max(0, L / A), 1)),
              k = hp(w, F, m),
              q = {},
              j = null;
            return (
              _.length &&
              (j = _.reduce((K, J) => {
                let re = l[J],
                  B = parseFloat(n[J]) || 0,
                  I = (parseFloat(re) - B) * k + B;
                return (K[J] = I), K;
              }, {})),
              (q.current = j),
              (q.position = F),
              F === 1 && ((q.active = !1), (q.complete = !0)),
              (0, ct.merge)(e, q)
            );
          }
          return e;
        }),
        (vp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case NC:
              return t.payload.ixInstances || Object.freeze({});
            case DC:
              return Object.freeze({});
            case MC: {
              let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: s,
                eventStateKey: a,
                actionListId: u,
                groupIndex: l,
                isCarrier: _,
                origin: f,
                destination: y,
                immediate: m,
                verbose: E,
                continuous: w,
                parameterId: A,
                actionGroups: T,
                smoothing: N,
                restingValue: L,
                pluginInstance: F,
                pluginDuration: k,
                instanceDelay: q,
                skipMotion: j,
                skipToValue: K,
              } = t.payload,
                { actionTypeId: J } = i,
                re = WC(J),
                B = UC(re, J),
                C = Object.keys(y).filter(
                  (P) => y[P] != null && typeof y[P] != "string"
                ),
                { easing: I } = i.config;
              return (0, ct.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: y,
                destinationKeys: C,
                immediate: m,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: J,
                eventId: o,
                eventTarget: s,
                eventStateKey: a,
                actionListId: u,
                groupIndex: l,
                renderType: re,
                isCarrier: _,
                styleProp: B,
                continuous: w,
                parameterId: A,
                actionGroups: T,
                smoothing: N,
                restingValue: L,
                pluginInstance: F,
                pluginDuration: k,
                instanceDelay: q,
                skipMotion: j,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(I) && I.length === 4 ? GC(I) : void 0,
              });
            }
            case FC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ct.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case qC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let s = 0; s < o; s++) {
                let a = i[s];
                a !== r && (n[a] = e[a]);
              }
              return n;
            }
            case kC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let s = n[o],
                  a = e[s],
                  u = a.continuous ? VC : HC;
                r = (0, ct.set)(r, s, u(a, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var BC,
    zC,
    KC,
    yp,
    Ep = ye(() => {
      "use strict";
      qe();
      ({
        IX2_RAW_DATA_IMPORTED: BC,
        IX2_SESSION_STOPPED: zC,
        IX2_PARAMETER_CHANGED: KC,
      } = Te),
        (yp = (e = {}, t) => {
          switch (t.type) {
            case BC:
              return t.payload.ixParameters || {};
            case zC:
              return {};
            case KC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Ip = {};
  Fe(Ip, { default: () => YC });
  var _p,
    bp,
    jC,
    YC,
    wp = ye(() => {
      "use strict";
      _p = pe(Ii());
      Cs();
      $s();
      eu();
      bp = pe(At());
      mp();
      Ep();
      ({ ixElements: jC } = bp.IX2ElementsReducer),
        (YC = (0, _p.combineReducers)({
          ixData: Rs,
          ixRequest: Qs,
          ixSession: Js,
          ixElements: jC,
          ixInstances: vp,
          ixParameters: yp,
        }));
    });
  var xp = g((Wk, Tp) => {
    var QC = dt(),
      $C = xe(),
      ZC = at(),
      JC = "[object String]";
    function eL(e) {
      return typeof e == "string" || (!$C(e) && ZC(e) && QC(e) == JC);
    }
    Tp.exports = eL;
  });
  var Op = g((Uk, Ap) => {
    var tL = Qi(),
      rL = tL("length");
    Ap.exports = rL;
  });
  var Rp = g((Vk, Sp) => {
    var nL = "\\ud800-\\udfff",
      iL = "\\u0300-\\u036f",
      oL = "\\ufe20-\\ufe2f",
      aL = "\\u20d0-\\u20ff",
      sL = iL + oL + aL,
      uL = "\\ufe0e\\ufe0f",
      cL = "\\u200d",
      lL = RegExp("[" + cL + nL + sL + uL + "]");
    function fL(e) {
      return lL.test(e);
    }
    Sp.exports = fL;
  });
  var kp = g((Hk, qp) => {
    var Lp = "\\ud800-\\udfff",
      dL = "\\u0300-\\u036f",
      pL = "\\ufe20-\\ufe2f",
      gL = "\\u20d0-\\u20ff",
      hL = dL + pL + gL,
      vL = "\\ufe0e\\ufe0f",
      mL = "[" + Lp + "]",
      Do = "[" + hL + "]",
      Mo = "\\ud83c[\\udffb-\\udfff]",
      yL = "(?:" + Do + "|" + Mo + ")",
      Pp = "[^" + Lp + "]",
      Np = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Dp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      EL = "\\u200d",
      Mp = yL + "?",
      Fp = "[" + vL + "]?",
      _L = "(?:" + EL + "(?:" + [Pp, Np, Dp].join("|") + ")" + Fp + Mp + ")*",
      bL = Fp + Mp + _L,
      IL = "(?:" + [Pp + Do + "?", Do, Np, Dp, mL].join("|") + ")",
      Cp = RegExp(Mo + "(?=" + Mo + ")|" + IL + bL, "g");
    function wL(e) {
      for (var t = (Cp.lastIndex = 0); Cp.test(e);) ++t;
      return t;
    }
    qp.exports = wL;
  });
  var Xp = g((Bk, Gp) => {
    var TL = Op(),
      xL = Rp(),
      AL = kp();
    function OL(e) {
      return xL(e) ? AL(e) : TL(e);
    }
    Gp.exports = OL;
  });
  var Up = g((zk, Wp) => {
    var SL = sn(),
      RL = un(),
      CL = bt(),
      LL = xp(),
      PL = Xp(),
      NL = "[object Map]",
      DL = "[object Set]";
    function ML(e) {
      if (e == null) return 0;
      if (CL(e)) return LL(e) ? PL(e) : e.length;
      var t = RL(e);
      return t == NL || t == DL ? e.size : SL(e).length;
    }
    Wp.exports = ML;
  });
  var Hp = g((Kk, Vp) => {
    var FL = "Expected a function";
    function qL(e) {
      if (typeof e != "function") throw new TypeError(FL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Vp.exports = qL;
  });
  var Fo = g((jk, Bp) => {
    var kL = pt(),
      GL = (function () {
        try {
          var e = kL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch { }
      })();
    Bp.exports = GL;
  });
  var qo = g((Yk, Kp) => {
    var zp = Fo();
    function XL(e, t, r) {
      t == "__proto__" && zp
        ? zp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Kp.exports = XL;
  });
  var Yp = g((Qk, jp) => {
    var WL = qo(),
      UL = Qr(),
      VL = Object.prototype,
      HL = VL.hasOwnProperty;
    function BL(e, t, r) {
      var n = e[t];
      (!(HL.call(e, t) && UL(n, r)) || (r === void 0 && !(t in e))) &&
        WL(e, t, r);
    }
    jp.exports = BL;
  });
  var Zp = g(($k, $p) => {
    var zL = Yp(),
      KL = yr(),
      jL = rn(),
      Qp = tt(),
      YL = Vt();
    function QL(e, t, r, n) {
      if (!Qp(e)) return e;
      t = KL(t, e);
      for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
        var u = YL(t[i]),
          l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != s) {
          var _ = a[u];
          (l = n ? n(_, u, a) : void 0),
            l === void 0 && (l = Qp(_) ? _ : jL(t[i + 1]) ? [] : {});
        }
        zL(a, u, l), (a = a[u]);
      }
      return e;
    }
    $p.exports = QL;
  });
  var eg = g((Zk, Jp) => {
    var $L = fn(),
      ZL = Zp(),
      JL = yr();
    function eP(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i;) {
        var s = t[n],
          a = $L(e, s);
        r(a, s) && ZL(o, JL(s, e), a);
      }
      return o;
    }
    Jp.exports = eP;
  });
  var rg = g((Jk, tg) => {
    var tP = en(),
      rP = ci(),
      nP = Mi(),
      iP = Di(),
      oP = Object.getOwnPropertySymbols,
      aP = oP
        ? function (e) {
          for (var t = []; e;) tP(t, nP(e)), (e = rP(e));
          return t;
        }
        : iP;
    tg.exports = aP;
  });
  var ig = g((eG, ng) => {
    function sP(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    ng.exports = sP;
  });
  var ag = g((tG, og) => {
    var uP = tt(),
      cP = an(),
      lP = ig(),
      fP = Object.prototype,
      dP = fP.hasOwnProperty;
    function pP(e) {
      if (!uP(e)) return lP(e);
      var t = cP(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !dP.call(e, n))) || r.push(n);
      return r;
    }
    og.exports = pP;
  });
  var ug = g((rG, sg) => {
    var gP = qi(),
      hP = ag(),
      vP = bt();
    function mP(e) {
      return vP(e) ? gP(e, !0) : hP(e);
    }
    sg.exports = mP;
  });
  var lg = g((nG, cg) => {
    var yP = Ni(),
      EP = rg(),
      _P = ug();
    function bP(e) {
      return yP(e, _P, EP);
    }
    cg.exports = bP;
  });
  var dg = g((iG, fg) => {
    var IP = Yi(),
      wP = gt(),
      TP = eg(),
      xP = lg();
    function AP(e, t) {
      if (e == null) return {};
      var r = IP(xP(e), function (n) {
        return [n];
      });
      return (
        (t = wP(t)),
        TP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    fg.exports = AP;
  });
  var gg = g((oG, pg) => {
    var OP = gt(),
      SP = Hp(),
      RP = dg();
    function CP(e, t) {
      return RP(e, SP(OP(t)));
    }
    pg.exports = CP;
  });
  var vg = g((aG, hg) => {
    var LP = sn(),
      PP = un(),
      NP = dr(),
      DP = xe(),
      MP = bt(),
      FP = tn(),
      qP = an(),
      kP = on(),
      GP = "[object Map]",
      XP = "[object Set]",
      WP = Object.prototype,
      UP = WP.hasOwnProperty;
    function VP(e) {
      if (e == null) return !0;
      if (
        MP(e) &&
        (DP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          FP(e) ||
          kP(e) ||
          NP(e))
      )
        return !e.length;
      var t = PP(e);
      if (t == GP || t == XP) return !e.size;
      if (qP(e)) return !LP(e).length;
      for (var r in e) if (UP.call(e, r)) return !1;
      return !0;
    }
    hg.exports = VP;
  });
  var yg = g((sG, mg) => {
    var HP = qo(),
      BP = wo(),
      zP = gt();
    function KP(e, t) {
      var r = {};
      return (
        (t = zP(t, 3)),
        BP(e, function (n, i, o) {
          HP(r, i, t(n, i, o));
        }),
        r
      );
    }
    mg.exports = KP;
  });
  var _g = g((uG, Eg) => {
    function jP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    Eg.exports = jP;
  });
  var Ig = g((cG, bg) => {
    var YP = pn();
    function QP(e) {
      return typeof e == "function" ? e : YP;
    }
    bg.exports = QP;
  });
  var Tg = g((lG, wg) => {
    var $P = _g(),
      ZP = To(),
      JP = Ig(),
      eN = xe();
    function tN(e, t) {
      var r = eN(e) ? $P : ZP;
      return r(e, JP(t));
    }
    wg.exports = tN;
  });
  var Ag = g((fG, xg) => {
    var rN = Be(),
      nN = function () {
        return rN.Date.now();
      };
    xg.exports = nN;
  });
  var Rg = g((dG, Sg) => {
    var iN = tt(),
      ko = Ag(),
      Og = gn(),
      oN = "Expected a function",
      aN = Math.max,
      sN = Math.min;
    function uN(e, t, r) {
      var n,
        i,
        o,
        s,
        a,
        u,
        l = 0,
        _ = !1,
        f = !1,
        y = !0;
      if (typeof e != "function") throw new TypeError(oN);
      (t = Og(t) || 0),
        iN(r) &&
        ((_ = !!r.leading),
          (f = "maxWait" in r),
          (o = f ? aN(Og(r.maxWait) || 0, t) : o),
          (y = "trailing" in r ? !!r.trailing : y));
      function m(q) {
        var j = n,
          K = i;
        return (n = i = void 0), (l = q), (s = e.apply(K, j)), s;
      }
      function E(q) {
        return (l = q), (a = setTimeout(T, t)), _ ? m(q) : s;
      }
      function w(q) {
        var j = q - u,
          K = q - l,
          J = t - j;
        return f ? sN(J, o - K) : J;
      }
      function A(q) {
        var j = q - u,
          K = q - l;
        return u === void 0 || j >= t || j < 0 || (f && K >= o);
      }
      function T() {
        var q = ko();
        if (A(q)) return N(q);
        a = setTimeout(T, w(q));
      }
      function N(q) {
        return (a = void 0), y && n ? m(q) : ((n = i = void 0), s);
      }
      function L() {
        a !== void 0 && clearTimeout(a), (l = 0), (n = u = i = a = void 0);
      }
      function F() {
        return a === void 0 ? s : N(ko());
      }
      function k() {
        var q = ko(),
          j = A(q);
        if (((n = arguments), (i = this), (u = q), j)) {
          if (a === void 0) return E(u);
          if (f) return clearTimeout(a), (a = setTimeout(T, t)), m(u);
        }
        return a === void 0 && (a = setTimeout(T, t)), s;
      }
      return (k.cancel = L), (k.flush = F), k;
    }
    Sg.exports = uN;
  });
  var Lg = g((pG, Cg) => {
    var cN = Rg(),
      lN = tt(),
      fN = "Expected a function";
    function dN(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(fN);
      return (
        lN(r) &&
        ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        cN(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Cg.exports = dN;
  });
  var Ng = {};
  Fe(Ng, {
    actionListPlaybackChanged: () => tr,
    animationFrameChanged: () => Pn,
    clearRequested: () => qN,
    elementStateChanged: () => zo,
    eventListenerAdded: () => Ln,
    eventStateChanged: () => Vo,
    instanceAdded: () => Ho,
    instanceRemoved: () => Bo,
    instanceStarted: () => Nn,
    mediaQueriesDefined: () => jo,
    parameterChanged: () => er,
    playbackRequested: () => MN,
    previewRequested: () => DN,
    rawDataImported: () => Go,
    sessionInitialized: () => Xo,
    sessionStarted: () => Wo,
    sessionStopped: () => Uo,
    stopRequested: () => FN,
    testFrameRendered: () => kN,
    viewportWidthChanged: () => Ko,
  });
  var Pg,
    pN,
    gN,
    hN,
    vN,
    mN,
    yN,
    EN,
    _N,
    bN,
    IN,
    wN,
    TN,
    xN,
    AN,
    ON,
    SN,
    RN,
    CN,
    LN,
    PN,
    NN,
    Go,
    Xo,
    Wo,
    Uo,
    DN,
    MN,
    FN,
    qN,
    Ln,
    kN,
    Vo,
    Pn,
    er,
    Ho,
    Nn,
    Bo,
    zo,
    tr,
    Ko,
    jo,
    Dn = ye(() => {
      "use strict";
      qe();
      (Pg = pe(At())),
        ({
          IX2_RAW_DATA_IMPORTED: pN,
          IX2_SESSION_INITIALIZED: gN,
          IX2_SESSION_STARTED: hN,
          IX2_SESSION_STOPPED: vN,
          IX2_PREVIEW_REQUESTED: mN,
          IX2_PLAYBACK_REQUESTED: yN,
          IX2_STOP_REQUESTED: EN,
          IX2_CLEAR_REQUESTED: _N,
          IX2_EVENT_LISTENER_ADDED: bN,
          IX2_TEST_FRAME_RENDERED: IN,
          IX2_EVENT_STATE_CHANGED: wN,
          IX2_ANIMATION_FRAME_CHANGED: TN,
          IX2_PARAMETER_CHANGED: xN,
          IX2_INSTANCE_ADDED: AN,
          IX2_INSTANCE_STARTED: ON,
          IX2_INSTANCE_REMOVED: SN,
          IX2_ELEMENT_STATE_CHANGED: RN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: CN,
          IX2_VIEWPORT_WIDTH_CHANGED: LN,
          IX2_MEDIA_QUERIES_DEFINED: PN,
        } = Te),
        ({ reifyState: NN } = Pg.IX2VanillaUtils),
        (Go = (e) => ({ type: pN, payload: { ...NN(e) } })),
        (Xo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: gN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Wo = () => ({ type: hN })),
        (Uo = () => ({ type: vN })),
        (DN = ({ rawData: e, defer: t }) => ({
          type: mN,
          payload: { defer: t, rawData: e },
        })),
        (MN = ({
          actionTypeId: e = Pe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: s,
          verbose: a,
          rawData: u,
        }) => ({
          type: yN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: s,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: a,
            rawData: u,
          },
        })),
        (FN = (e) => ({ type: EN, payload: { actionListId: e } })),
        (qN = () => ({ type: _N })),
        (Ln = (e, t) => ({
          type: bN,
          payload: { target: e, listenerParams: t },
        })),
        (kN = (e = 1) => ({ type: IN, payload: { step: e } })),
        (Vo = (e, t) => ({ type: wN, payload: { stateKey: e, newState: t } })),
        (Pn = (e, t) => ({ type: TN, payload: { now: e, parameters: t } })),
        (er = (e, t) => ({ type: xN, payload: { key: e, value: t } })),
        (Ho = (e) => ({ type: AN, payload: { ...e } })),
        (Nn = (e, t) => ({ type: ON, payload: { instanceId: e, time: t } })),
        (Bo = (e) => ({ type: SN, payload: { instanceId: e } })),
        (zo = (e, t, r, n) => ({
          type: RN,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (tr = ({ actionListId: e, isPlaying: t }) => ({
          type: CN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Ko = ({ width: e, mediaQueries: t }) => ({
          type: LN,
          payload: { width: e, mediaQueries: t },
        })),
        (jo = () => ({ type: PN }));
    });
  var De = {};
  Fe(De, {
    elementContains: () => $o,
    getChildElements: () => jN,
    getClosestElement: () => Rr,
    getProperty: () => VN,
    getQuerySelector: () => Qo,
    getRefType: () => Zo,
    getSiblingElements: () => YN,
    getStyle: () => UN,
    getValidDocument: () => BN,
    isSiblingNode: () => KN,
    matchSelector: () => HN,
    queryDocument: () => zN,
    setStyle: () => WN,
  });
  function WN(e, t, r) {
    e.style[t] = r;
  }
  function UN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function VN(e, t) {
    return e[t];
  }
  function HN(e) {
    return (t) => t[Yo](e);
  }
  function Qo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Dg) !== -1) {
        let n = e.split(Dg),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Fg)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function BN(e) {
    return e == null || e === document.documentElement.getAttribute(Fg)
      ? document
      : null;
  }
  function zN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function $o(e, t) {
    return e.contains(t);
  }
  function KN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function jN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let s = 0; s < o; s++) t.push(i[s]);
    }
    return t;
  }
  function YN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let s = o.firstElementChild;
      for (; s != null;)
        e.indexOf(s) === -1 && t.push(s), (s = s.nextElementSibling);
    }
    return t;
  }
  function Zo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? GN
        : XN
      : null;
  }
  var Mg,
    Yo,
    Dg,
    GN,
    XN,
    Fg,
    Rr,
    qg = ye(() => {
      "use strict";
      Mg = pe(At());
      qe();
      ({ ELEMENT_MATCHES: Yo } = Mg.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Dg,
          HTML_ELEMENT: GN,
          PLAIN_OBJECT: XN,
          WF_PAGE: Fg,
        } = Re);
      Rr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Yo] && r[Yo](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    });
  var Jo = g((vG, Gg) => {
    var QN = tt(),
      kg = Object.create,
      $N = (function () {
        function e() { }
        return function (t) {
          if (!QN(t)) return {};
          if (kg) return kg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Gg.exports = $N;
  });
  var Mn = g((mG, Xg) => {
    function ZN() { }
    Xg.exports = ZN;
  });
  var qn = g((yG, Wg) => {
    var JN = Jo(),
      eD = Mn();
    function Fn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Fn.prototype = JN(eD.prototype);
    Fn.prototype.constructor = Fn;
    Wg.exports = Fn;
  });
  var Bg = g((EG, Hg) => {
    var Ug = Pt(),
      tD = dr(),
      rD = xe(),
      Vg = Ug ? Ug.isConcatSpreadable : void 0;
    function nD(e) {
      return rD(e) || tD(e) || !!(Vg && e && e[Vg]);
    }
    Hg.exports = nD;
  });
  var jg = g((_G, Kg) => {
    var iD = en(),
      oD = Bg();
    function zg(e, t, r, n, i) {
      var o = -1,
        s = e.length;
      for (r || (r = oD), i || (i = []); ++o < s;) {
        var a = e[o];
        t > 0 && r(a)
          ? t > 1
            ? zg(a, t - 1, r, n, i)
            : iD(i, a)
          : n || (i[i.length] = a);
      }
      return i;
    }
    Kg.exports = zg;
  });
  var Qg = g((bG, Yg) => {
    var aD = jg();
    function sD(e) {
      var t = e == null ? 0 : e.length;
      return t ? aD(e, 1) : [];
    }
    Yg.exports = sD;
  });
  var Zg = g((IG, $g) => {
    function uD(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    $g.exports = uD;
  });
  var th = g((wG, eh) => {
    var cD = Zg(),
      Jg = Math.max;
    function lD(e, t, r) {
      return (
        (t = Jg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Jg(n.length - t, 0), s = Array(o);
            ++i < o;

          )
            s[i] = n[t + i];
          i = -1;
          for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
          return (a[t] = r(s)), cD(e, this, a);
        }
      );
    }
    eh.exports = lD;
  });
  var nh = g((TG, rh) => {
    function fD(e) {
      return function () {
        return e;
      };
    }
    rh.exports = fD;
  });
  var ah = g((xG, oh) => {
    var dD = nh(),
      ih = Fo(),
      pD = pn(),
      gD = ih
        ? function (e, t) {
          return ih(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: dD(t),
            writable: !0,
          });
        }
        : pD;
    oh.exports = gD;
  });
  var uh = g((AG, sh) => {
    var hD = 800,
      vD = 16,
      mD = Date.now;
    function yD(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = mD(),
          i = vD - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= hD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    sh.exports = yD;
  });
  var lh = g((OG, ch) => {
    var ED = ah(),
      _D = uh(),
      bD = _D(ED);
    ch.exports = bD;
  });
  var dh = g((SG, fh) => {
    var ID = Qg(),
      wD = th(),
      TD = lh();
    function xD(e) {
      return TD(wD(e, void 0, ID), e + "");
    }
    fh.exports = xD;
  });
  var hh = g((RG, gh) => {
    var ph = ki(),
      AD = ph && new ph();
    gh.exports = AD;
  });
  var mh = g((CG, vh) => {
    function OD() { }
    vh.exports = OD;
  });
  var ea = g((LG, Eh) => {
    var yh = hh(),
      SD = mh(),
      RD = yh
        ? function (e) {
          return yh.get(e);
        }
        : SD;
    Eh.exports = RD;
  });
  var bh = g((PG, _h) => {
    var CD = {};
    _h.exports = CD;
  });
  var ta = g((NG, wh) => {
    var Ih = bh(),
      LD = Object.prototype,
      PD = LD.hasOwnProperty;
    function ND(e) {
      for (
        var t = e.name + "", r = Ih[t], n = PD.call(Ih, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    wh.exports = ND;
  });
  var Gn = g((DG, Th) => {
    var DD = Jo(),
      MD = Mn(),
      FD = 4294967295;
    function kn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = FD),
        (this.__views__ = []);
    }
    kn.prototype = DD(MD.prototype);
    kn.prototype.constructor = kn;
    Th.exports = kn;
  });
  var Ah = g((MG, xh) => {
    function qD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t;
    }
    xh.exports = qD;
  });
  var Sh = g((FG, Oh) => {
    var kD = Gn(),
      GD = qn(),
      XD = Ah();
    function WD(e) {
      if (e instanceof kD) return e.clone();
      var t = new GD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = XD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Oh.exports = WD;
  });
  var Lh = g((qG, Ch) => {
    var UD = Gn(),
      Rh = qn(),
      VD = Mn(),
      HD = xe(),
      BD = at(),
      zD = Sh(),
      KD = Object.prototype,
      jD = KD.hasOwnProperty;
    function Xn(e) {
      if (BD(e) && !HD(e) && !(e instanceof UD)) {
        if (e instanceof Rh) return e;
        if (jD.call(e, "__wrapped__")) return zD(e);
      }
      return new Rh(e);
    }
    Xn.prototype = VD.prototype;
    Xn.prototype.constructor = Xn;
    Ch.exports = Xn;
  });
  var Nh = g((kG, Ph) => {
    var YD = Gn(),
      QD = ea(),
      $D = ta(),
      ZD = Lh();
    function JD(e) {
      var t = $D(e),
        r = ZD[t];
      if (typeof r != "function" || !(t in YD.prototype)) return !1;
      if (e === r) return !0;
      var n = QD(r);
      return !!n && e === n[0];
    }
    Ph.exports = JD;
  });
  var qh = g((GG, Fh) => {
    var Dh = qn(),
      eM = dh(),
      tM = ea(),
      ra = ta(),
      rM = xe(),
      Mh = Nh(),
      nM = "Expected a function",
      iM = 8,
      oM = 32,
      aM = 128,
      sM = 256;
    function uM(e) {
      return eM(function (t) {
        var r = t.length,
          n = r,
          i = Dh.prototype.thru;
        for (e && t.reverse(); n--;) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(nM);
          if (i && !s && ra(o) == "wrapper") var s = new Dh([], !0);
        }
        for (n = s ? n : r; ++n < r;) {
          o = t[n];
          var a = ra(o),
            u = a == "wrapper" ? tM(o) : void 0;
          u &&
            Mh(u[0]) &&
            u[1] == (aM | iM | oM | sM) &&
            !u[4].length &&
            u[9] == 1
            ? (s = s[ra(u[0])].apply(s, u[3]))
            : (s = o.length == 1 && Mh(o) ? s[a]() : s.thru(o));
        }
        return function () {
          var l = arguments,
            _ = l[0];
          if (s && l.length == 1 && rM(_)) return s.plant(_).value();
          for (var f = 0, y = r ? t[f].apply(this, l) : _; ++f < r;)
            y = t[f].call(this, y);
          return y;
        };
      });
    }
    Fh.exports = uM;
  });
  var Gh = g((XG, kh) => {
    var cM = qh(),
      lM = cM();
    kh.exports = lM;
  });
  var Wh = g((WG, Xh) => {
    function fM(e, t, r) {
      return (
        e === e &&
        (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Xh.exports = fM;
  });
  var Vh = g((UG, Uh) => {
    var dM = Wh(),
      na = gn();
    function pM(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = na(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = na(t)), (t = t === t ? t : 0)),
        dM(na(e), t, r)
      );
    }
    Uh.exports = pM;
  });
  var Zh,
    Jh,
    ev,
    tv,
    gM,
    hM,
    vM,
    mM,
    yM,
    EM,
    _M,
    bM,
    IM,
    wM,
    TM,
    xM,
    AM,
    OM,
    SM,
    rv,
    nv,
    RM,
    CM,
    LM,
    iv,
    PM,
    NM,
    ov,
    DM,
    ia,
    av,
    Hh,
    Bh,
    sv,
    Lr,
    MM,
    it,
    uv,
    FM,
    Ge,
    je,
    Pr,
    cv,
    oa,
    zh,
    aa,
    qM,
    Cr,
    kM,
    GM,
    XM,
    lv,
    Kh,
    WM,
    jh,
    UM,
    VM,
    HM,
    Yh,
    Wn,
    Un,
    Qh,
    $h,
    fv,
    dv = ye(() => {
      "use strict";
      (Zh = pe(Gh())), (Jh = pe(dn())), (ev = pe(Vh()));
      qe();
      sa();
      Dn();
      (tv = pe(At())),
        ({
          MOUSE_CLICK: gM,
          MOUSE_SECOND_CLICK: hM,
          MOUSE_DOWN: vM,
          MOUSE_UP: mM,
          MOUSE_OVER: yM,
          MOUSE_OUT: EM,
          DROPDOWN_CLOSE: _M,
          DROPDOWN_OPEN: bM,
          SLIDER_ACTIVE: IM,
          SLIDER_INACTIVE: wM,
          TAB_ACTIVE: TM,
          TAB_INACTIVE: xM,
          NAVBAR_CLOSE: AM,
          NAVBAR_OPEN: OM,
          MOUSE_MOVE: SM,
          PAGE_SCROLL_DOWN: rv,
          SCROLL_INTO_VIEW: nv,
          SCROLL_OUT_OF_VIEW: RM,
          PAGE_SCROLL_UP: CM,
          SCROLLING_IN_VIEW: LM,
          PAGE_FINISH: iv,
          ECOMMERCE_CART_CLOSE: PM,
          ECOMMERCE_CART_OPEN: NM,
          PAGE_START: ov,
          PAGE_SCROLL: DM,
        } = ze),
        (ia = "COMPONENT_ACTIVE"),
        (av = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Hh } = Re),
        ({ getNamespacedParameterId: Bh } = tv.IX2VanillaUtils),
        (sv = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Lr = sv(({ element: e, nativeEvent: t }) => e === t.target)),
        (MM = sv(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (it = (0, Zh.default)([Lr, MM])),
        (uv = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !qM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (FM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!uv(e, n);
        }),
        (Ge = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: s } = t,
            { actionListId: a, autoStopEventId: u } = o.config,
            l = uv(e, u);
          return (
            l &&
            rr({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + Hh + n.split(Hh)[1],
              actionListId: (0, Jh.default)(l, "action.config.actionListId"),
            }),
            rr({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a,
            }),
            Nr({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a,
            }),
            i
          );
        }),
        (je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Pr = { handler: je(it, Ge) }),
        (cv = { ...Pr, types: [ia, av].join(" ") }),
        (oa = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (zh = "mouseover mouseout"),
        (aa = { types: oa }),
        (qM = { PAGE_START: ov, PAGE_FINISH: iv }),
        (Cr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, ev.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (kM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (GM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let s = e.contains(i);
          return !!(r === "mouseout" && o && s);
        }),
        (XM = (e) => {
          let {
            element: t,
            event: { config: r },
          } = e,
            { clientWidth: n, clientHeight: i } = Cr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return kM(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (lv = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ia, av].indexOf(n) !== -1 ? n === ia : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Kh = (e) => (t, r) => {
          let n = { elementHovered: GM(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (WM = (e) => (t, r) => {
          let n = { ...r, elementVisible: XM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (jh =
          (e) =>
            (t, r = {}) => {
              let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Cr(),
                {
                  event: { config: s, eventTypeId: a },
                } = t,
                { scrollOffsetValue: u, scrollOffsetUnit: l } = s,
                _ = l === "PX",
                f = i - o,
                y = Number((n / f).toFixed(2));
              if (r && r.percentTop === y) return r;
              let m = (_ ? u : (o * (u || 0)) / 100) / f,
                E,
                w,
                A = 0;
              r &&
                ((E = y > r.percentTop),
                  (w = r.scrollingDown !== E),
                  (A = w ? y : r.anchorTop));
              let T = a === rv ? y >= A + m : y <= A - m,
                N = {
                  ...r,
                  percentTop: y,
                  inBounds: T,
                  anchorTop: A,
                  scrollingDown: E,
                };
              return (r && T && (w || N.inBounds !== r.inBounds) && e(t, N)) || N;
            }),
        (UM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (VM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (HM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Yh =
          (e) =>
            (t, r = { clickCount: 0 }) => {
              let n = { clickCount: (r.clickCount % 2) + 1 };
              return (n.clickCount !== r.clickCount && e(t, n)) || n;
            }),
        (Wn = (e = !0) => ({
          ...cv,
          handler: je(
            e ? it : Lr,
            lv((t, r) => (r.isActive ? Pr.handler(t, r) : r))
          ),
        })),
        (Un = (e = !0) => ({
          ...cv,
          handler: je(
            e ? it : Lr,
            lv((t, r) => (r.isActive ? r : Pr.handler(t, r)))
          ),
        })),
        (Qh = {
          ...aa,
          handler: WM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: s } = o;
            return !s[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === nv) === r
                ? (Ge(e), { ...t, triggered: !0 })
                : t;
          }),
        }),
        ($h = 0.05),
        (fv = {
          [IM]: Wn(),
          [wM]: Un(),
          [bM]: Wn(),
          [_M]: Un(),
          [OM]: Wn(!1),
          [AM]: Un(!1),
          [TM]: Wn(),
          [xM]: Un(),
          [NM]: { types: "ecommerce-cart-open", handler: je(it, Ge) },
          [PM]: { types: "ecommerce-cart-close", handler: je(it, Ge) },
          [gM]: {
            types: "click",
            handler: je(
              it,
              Yh((e, { clickCount: t }) => {
                FM(e) ? t === 1 && Ge(e) : Ge(e);
              })
            ),
          },
          [hM]: {
            types: "click",
            handler: je(
              it,
              Yh((e, { clickCount: t }) => {
                t === 2 && Ge(e);
              })
            ),
          },
          [vM]: { ...Pr, types: "mousedown" },
          [mM]: { ...Pr, types: "mouseup" },
          [yM]: {
            types: zh,
            handler: je(
              it,
              Kh((e, t) => {
                t.elementHovered && Ge(e);
              })
            ),
          },
          [EM]: {
            types: zh,
            handler: je(
              it,
              Kh((e, t) => {
                t.elementHovered || Ge(e);
              })
            ),
          },
          [SM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                basedOn: s,
                selectedAxis: a,
                continuousParameterGroupId: u,
                reverse: l,
                restingState: _ = 0,
              } = r,
                {
                  clientX: f = o.clientX,
                  clientY: y = o.clientY,
                  pageX: m = o.pageX,
                  pageY: E = o.pageY,
                } = n,
                w = a === "X_AXIS",
                A = n.type === "mouseout",
                T = _ / 100,
                N = u,
                L = !1;
              switch (s) {
                case et.VIEWPORT: {
                  T = w
                    ? Math.min(f, window.innerWidth) / window.innerWidth
                    : Math.min(y, window.innerHeight) / window.innerHeight;
                  break;
                }
                case et.PAGE: {
                  let {
                    scrollLeft: F,
                    scrollTop: k,
                    scrollWidth: q,
                    scrollHeight: j,
                  } = Cr();
                  T = w ? Math.min(F + m, q) / q : Math.min(k + E, j) / j;
                  break;
                }
                case et.ELEMENT:
                default: {
                  N = Bh(i, u);
                  let F = n.type.indexOf("mouse") === 0;
                  if (F && it({ element: t, nativeEvent: n }) !== !0) break;
                  let k = t.getBoundingClientRect(),
                    { left: q, top: j, width: K, height: J } = k;
                  if (!F && !UM({ left: f, top: y }, k)) break;
                  (L = !0), (T = w ? (f - q) / K : (y - j) / J);
                  break;
                }
              }
              return (
                A && (T > 1 - $h || T < $h) && (T = Math.round(T)),
                (s !== et.ELEMENT || L || L !== o.elementHovered) &&
                ((T = l ? 1 - T : T), e.dispatch(er(N, T))),
                {
                  elementHovered: L,
                  clientX: f,
                  clientY: y,
                  pageX: m,
                  pageY: E,
                }
              );
            },
          },
          [DM]: {
            types: oa,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: s } = Cr(),
                a = i / (o - s);
              (a = n ? 1 - a : a), e.dispatch(er(r, a));
            },
          },
          [LM]: {
            types: oa,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                scrollLeft: o,
                scrollTop: s,
                scrollWidth: a,
                scrollHeight: u,
                clientHeight: l,
              } = Cr(),
                {
                  basedOn: _,
                  selectedAxis: f,
                  continuousParameterGroupId: y,
                  startsEntering: m,
                  startsExiting: E,
                  addEndOffset: w,
                  addStartOffset: A,
                  addOffsetValue: T = 0,
                  endOffsetValue: N = 0,
                } = r,
                L = f === "X_AXIS";
              if (_ === et.VIEWPORT) {
                let F = L ? o / a : s / u;
                return (
                  F !== i.scrollPercent && t.dispatch(er(y, F)),
                  { scrollPercent: F }
                );
              } else {
                let F = Bh(n, y),
                  k = e.getBoundingClientRect(),
                  q = (A ? T : 0) / 100,
                  j = (w ? N : 0) / 100;
                (q = m ? q : 1 - q), (j = E ? j : 1 - j);
                let K = k.top + Math.min(k.height * q, l),
                  re = k.top + k.height * j - K,
                  B = Math.min(l + re, u),
                  I = Math.min(Math.max(0, l - K), B) / B;
                return (
                  I !== i.scrollPercent && t.dispatch(er(F, I)),
                  { scrollPercent: I }
                );
              }
            },
          },
          [nv]: Qh,
          [RM]: Qh,
          [rv]: {
            ...aa,
            handler: jh((e, t) => {
              t.scrollingDown && Ge(e);
            }),
          },
          [CM]: {
            ...aa,
            handler: jh((e, t) => {
              t.scrollingDown || Ge(e);
            }),
          },
          [iv]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Lr, VM(Ge)),
          },
          [ov]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Lr, HM(Ge)),
          },
        });
    });
  var Rv = {};
  Fe(Rv, {
    observeRequests: () => lF,
    startActionGroup: () => Nr,
    startEngine: () => jn,
    stopActionGroup: () => rr,
    stopAllActionGroups: () => Av,
    stopEngine: () => Yn,
  });
  function lF(e) {
    Ot({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: pF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: gF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: hF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: vF });
  }
  function fF(e) {
    Ot({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Yn(e),
          Iv({ store: e, elementApi: De }),
          jn({ store: e, allowEvents: !0 }),
          wv();
      },
    });
  }
  function dF(e, t) {
    let r = Ot({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function pF({ rawData: e, defer: t }, r) {
    let n = () => {
      jn({ store: r, rawData: e, allowEvents: !0 }), wv();
    };
    t ? setTimeout(n, 0) : n();
  }
  function wv() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function gF(e, t) {
    let {
      actionTypeId: r,
      actionListId: n,
      actionItemId: i,
      eventId: o,
      allowEvents: s,
      immediate: a,
      testManual: u,
      verbose: l = !0,
    } = e,
      { rawData: _ } = e;
    if (n && i && _ && a) {
      let f = _.actionLists[n];
      f && (_ = JM({ actionList: f, actionItemId: i, rawData: _ }));
    }
    if (
      (jn({ store: t, rawData: _, allowEvents: s, testManual: u }),
        (n && r === Pe.GENERAL_START_ACTION) || ua(r))
    ) {
      rr({ store: t, actionListId: n }),
        xv({ store: t, actionListId: n, eventId: o });
      let f = Nr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: a,
        verbose: l,
      });
      l && f && t.dispatch(tr({ actionListId: n, isPlaying: !a }));
    }
  }
  function hF({ actionListId: e }, t) {
    e ? rr({ store: t, actionListId: e }) : Av({ store: t }), Yn(t);
  }
  function vF(e, t) {
    Yn(t), Iv({ store: t, elementApi: De });
  }
  function jn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Go(t)),
      i.active ||
      (e.dispatch(
        Xo({
          hasBoundaryNodes: !!document.querySelector(Hn),
          reducedMotion:
            document.body.hasAttribute("data-wf-ix-vacation") &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        })
      ),
        r &&
        (IF(e), mF(), e.getState().ixSession.hasDefinedMediaQueries && fF(e)),
        e.dispatch(Wo()),
        yF(e, n));
  }
  function mF() {
    let { documentElement: e } = document;
    e.className.indexOf(pv) === -1 && (e.className += ` ${pv}`);
  }
  function yF(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Pn(n, o)), t ? dF(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Yn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(EF), nF(), e.dispatch(Uo());
    }
  }
  function EF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function _F({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: s,
    smoothing: a,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: _ } = e.getState(),
      { events: f } = l,
      y = f[n],
      { eventTypeId: m } = y,
      E = {},
      w = {},
      A = [],
      { continuousActionGroups: T } = s,
      { id: N } = s;
    eF(m, i) && (N = tF(t, N));
    let L = _.hasBoundaryNodes && r ? Rr(r, Hn) : null;
    T.forEach((F) => {
      let { keyframe: k, actionItems: q } = F;
      q.forEach((j) => {
        let { actionTypeId: K } = j,
          { target: J } = j.config;
        if (!J) return;
        let re = J.boundaryMode ? L : null,
          B = iF(J) + ca + K;
        if (((w[B] = bF(w[B], k, j)), !E[B])) {
          E[B] = !0;
          let { config: C } = j;
          Bn({
            config: C,
            event: y,
            eventTarget: r,
            elementRoot: re,
            elementApi: De,
          }).forEach((I) => {
            A.push({ element: I, key: B });
          });
        }
      });
    }),
      A.forEach(({ element: F, key: k }) => {
        let q = w[k],
          j = (0, lt.default)(q, "[0].actionItems[0]", {}),
          { actionTypeId: K } = j,
          re = (
            K === Pe.PLUGIN_RIVE
              ? (j.config?.target?.selectorGuids || []).length === 0
              : Kn(K)
          )
            ? fa(K)(F, j)
            : null,
          B = la({ element: F, actionItem: j, elementApi: De }, re);
        da({
          store: e,
          element: F,
          eventId: n,
          actionListId: o,
          actionItem: j,
          destination: B,
          continuous: !0,
          parameterId: N,
          actionGroups: q,
          smoothing: a,
          restingValue: u,
          pluginInstance: re,
        });
      });
  }
  function bF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, s) => (o.keyframe === t ? ((i = s), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function IF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    Tv(e),
      (0, nr.default)(r, (i, o) => {
        let s = fv[o];
        if (!s) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        SF({ logic: s, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && TF(e);
  }
  function TF(e) {
    let t = () => {
      Tv(e);
    };
    wF.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(Ln(window, [r, t]));
    }),
      t();
  }
  function Tv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Ko({ width: n, mediaQueries: i }));
    }
  }
  function SF({ logic: e, store: t, events: r }) {
    RF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: s } = o,
      a = xF(r, OF);
    if (!(0, vv.default)(a)) return;
    (0, nr.default)(a, (f, y) => {
      let m = r[y],
        { action: E, id: w, mediaQueries: A = o.mediaQueryKeys } = m,
        { actionListId: T } = E.config;
      oF(A, o.mediaQueryKeys) || t.dispatch(jo()),
        E.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(m.config) ? m.config : [m.config]).forEach((L) => {
          let { continuousParameterGroupId: F } = L,
            k = (0, lt.default)(s, `${T}.continuousParameterGroups`, []),
            q = (0, hv.default)(k, ({ id: J }) => J === F),
            j = (L.smoothing || 0) / 100,
            K = (L.restingState || 0) / 100;
          q &&
            f.forEach((J, re) => {
              let B = w + ca + re;
              _F({
                store: t,
                eventStateKey: B,
                eventTarget: J,
                eventId: w,
                eventConfig: L,
                actionListId: T,
                parameterGroup: q,
                smoothing: j,
                restingValue: K,
              });
            });
        }),
        (E.actionTypeId === Pe.GENERAL_START_ACTION || ua(E.actionTypeId)) &&
        xv({ store: t, actionListId: T, eventId: w });
    });
    let u = (f) => {
      let { ixSession: y } = t.getState();
      AF(a, (m, E, w) => {
        let A = r[E],
          T = y.eventState[w],
          { action: N, mediaQueries: L = o.mediaQueryKeys } = A;
        if (!zn(L, y.mediaQueryKey)) return;
        let F = (k = {}) => {
          let q = i(
            {
              store: t,
              element: m,
              event: A,
              eventConfig: k,
              nativeEvent: f,
              eventStateKey: w,
            },
            T
          );
          aF(q, T) || t.dispatch(Vo(w, q));
        };
        N.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(F)
          : F();
      });
    },
      l = (0, _v.default)(u, cF),
      _ = ({ target: f = document, types: y, throttle: m }) => {
        y.split(" ")
          .filter(Boolean)
          .forEach((E) => {
            let w = m ? l : u;
            f.addEventListener(E, w), t.dispatch(Ln(f, [E, w]));
          });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function RF(e) {
    if (!uF) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        s = Qo(o);
      t[s] ||
        ((i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) &&
          ((t[s] = !0),
            (r += s + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function xv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: s } = n,
      a = s[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, lt.default)(u, "actionItemGroups[0].actionItems", []),
        _ = (0, lt.default)(a, "mediaQueries", n.mediaQueryKeys);
      if (!zn(_, i.mediaQueryKey)) return;
      l.forEach((f) => {
        let { config: y, actionTypeId: m } = f,
          E =
            y?.target?.useEventTarget === !0 && y?.target?.objectId == null
              ? { target: a.target, targets: a.targets }
              : y,
          w = Bn({ config: E, event: a, elementApi: De }),
          A = Kn(m);
        w.forEach((T) => {
          let N = A ? fa(m)(T, f) : null;
          da({
            destination: la({ element: T, actionItem: f, elementApi: De }, N),
            immediate: !0,
            store: e,
            element: T,
            eventId: r,
            actionItem: f,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function Av({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, nr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        pa(r, e), i && e.dispatch(tr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function rr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: s } = e.getState(),
      a = s.hasBoundaryNodes && r ? Rr(r, Hn) : null;
    (0, nr.default)(o, (u) => {
      let l = (0, lt.default)(u, "actionItem.config.target.boundaryMode"),
        _ = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && _) {
        if (a && l && !$o(a, u.element)) return;
        pa(u, e),
          u.verbose && e.dispatch(tr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Nr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: s,
    verbose: a,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: _ } = u,
      f = _[t] || {},
      { mediaQueries: y = u.mediaQueryKeys } = f,
      m = (0, lt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: E, useFirstGroupAsInitialState: w } = m;
    if (!E || !E.length) return !1;
    o >= E.length && (0, lt.default)(f, "config.loop") && (o = 0),
      o === 0 && w && o++;
    let T =
      (o === 0 || (o === 1 && w)) && ua(f.action?.actionTypeId)
        ? f.config.delay
        : void 0,
      N = (0, lt.default)(E, [o, "actionItems"], []);
    if (!N.length || !zn(y, l.mediaQueryKey)) return !1;
    let L = l.hasBoundaryNodes && r ? Rr(r, Hn) : null,
      F = QM(N),
      k = !1;
    return (
      N.forEach((q, j) => {
        let { config: K, actionTypeId: J } = q,
          re = Kn(J),
          { target: B } = K;
        if (!B) return;
        let C = B.boundaryMode ? L : null;
        Bn({
          config: K,
          event: f,
          eventTarget: r,
          elementRoot: C,
          elementApi: De,
        }).forEach((P, X) => {
          let V = re ? fa(J)(P, q) : null,
            te = re ? sF(J)(P, q) : null;
          k = !0;
          let ne = F === j && X === 0,
            U = $M({ element: P, actionItem: q }),
            H = la({ element: P, actionItem: q, elementApi: De }, V);
          da({
            store: e,
            element: P,
            actionItem: q,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ne,
            computedStyle: U,
            destination: H,
            immediate: s,
            verbose: a,
            pluginInstance: V,
            pluginDuration: te,
            instanceDelay: T,
          });
        });
      }),
      k
    );
  }
  function da(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: s,
        pluginInstance: a,
        continuous: u,
        restingValue: l,
        eventId: _,
      } = n,
      f = !u,
      y = jM(),
      { ixElements: m, ixSession: E, ixData: w } = t.getState(),
      A = KM(m, i),
      { refState: T } = m[A] || {},
      N = Zo(i),
      L = E.reducedMotion && xi[o.actionTypeId],
      F;
    if (L && u)
      switch (w.events[_]?.eventTypeId) {
        case ze.MOUSE_MOVE:
        case ze.MOUSE_MOVE_IN_VIEWPORT:
          F = l;
          break;
        default:
          F = 0.5;
          break;
      }
    let k = ZM(i, T, r, o, De, a);
    if (
      (t.dispatch(
        Ho({
          instanceId: y,
          elementId: A,
          origin: k,
          refType: N,
          skipMotion: L,
          skipToValue: F,
          ...n,
        })
      ),
        Ov(document.body, "ix2-animation-started", y),
        s)
    ) {
      CF(t, y);
      return;
    }
    Ot({ store: t, select: ({ ixInstances: q }) => q[y], onChange: Sv }),
      f && t.dispatch(Nn(y, E.tick));
  }
  function pa(e, t) {
    Ov(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: s } = i[r] || {};
    s === bv && rF(o, n, De), t.dispatch(Bo(e.id));
  }
  function Ov(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function CF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Nn(t, 0)), e.dispatch(Pn(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Sv(n[t], e);
  }
  function Sv(e, t) {
    let {
      active: r,
      continuous: n,
      complete: i,
      elementId: o,
      actionItem: s,
      actionTypeId: a,
      renderType: u,
      current: l,
      groupIndex: _,
      eventId: f,
      eventTarget: y,
      eventStateKey: m,
      actionListId: E,
      isCarrier: w,
      styleProp: A,
      verbose: T,
      pluginInstance: N,
    } = e,
      { ixData: L, ixSession: F } = t.getState(),
      { events: k } = L,
      q = k && k[f] ? k[f] : {},
      { mediaQueries: j = L.mediaQueryKeys } = q;
    if (zn(j, F.mediaQueryKey) && (n || r || i)) {
      if (l || (u === zM && i)) {
        t.dispatch(zo(o, a, l, s));
        let { ixElements: K } = t.getState(),
          { ref: J, refType: re, refState: B } = K[o] || {},
          C = B && B[a];
        (re === bv || Kn(a)) && YM(J, B, C, f, s, A, De, u, N);
      }
      if (i) {
        if (w) {
          let K = Nr({
            store: t,
            eventId: f,
            eventTarget: y,
            eventStateKey: m,
            actionListId: E,
            groupIndex: _ + 1,
            verbose: T,
          });
          T && !K && t.dispatch(tr({ actionListId: E, isPlaying: !1 }));
        }
        pa(e, t);
      }
    }
  }
  var hv,
    lt,
    vv,
    mv,
    yv,
    Ev,
    nr,
    _v,
    Vn,
    BM,
    ua,
    ca,
    Hn,
    bv,
    zM,
    pv,
    Bn,
    KM,
    la,
    Ot,
    jM,
    YM,
    Iv,
    QM,
    $M,
    ZM,
    JM,
    eF,
    tF,
    zn,
    rF,
    nF,
    iF,
    oF,
    aF,
    Kn,
    fa,
    sF,
    gv,
    uF,
    cF,
    wF,
    xF,
    AF,
    OF,
    sa = ye(() => {
      "use strict";
      (hv = pe(eo())),
        (lt = pe(dn())),
        (vv = pe(Up())),
        (mv = pe(gg())),
        (yv = pe(vg())),
        (Ev = pe(yg())),
        (nr = pe(Tg())),
        (_v = pe(Lg()));
      qe();
      Vn = pe(At());
      Dn();
      qg();
      dv();
      (BM = Object.keys(Vr)),
        (ua = (e) => BM.includes(e)),
        ({
          COLON_DELIMITER: ca,
          BOUNDARY_SELECTOR: Hn,
          HTML_ELEMENT: bv,
          RENDER_GENERAL: zM,
          W_MOD_IX: pv,
        } = Re),
        ({
          getAffectedElements: Bn,
          getElementId: KM,
          getDestinationValues: la,
          observeStore: Ot,
          getInstanceId: jM,
          renderHTMLElement: YM,
          clearAllStyles: Iv,
          getMaxDurationItemIndex: QM,
          getComputedStyle: $M,
          getInstanceOrigin: ZM,
          reduceListToGroup: JM,
          shouldNamespaceEventParameter: eF,
          getNamespacedParameterId: tF,
          shouldAllowMediaQuery: zn,
          cleanupHTMLElement: rF,
          clearObjectCache: nF,
          stringifyTarget: iF,
          mediaQueriesEqual: oF,
          shallowEqual: aF,
        } = Vn.IX2VanillaUtils),
        ({
          isPluginType: Kn,
          createPluginInstance: fa,
          getPluginDuration: sF,
        } = Vn.IX2VanillaPlugins),
        (gv = navigator.userAgent),
        (uF = gv.match(/iPad/i) || gv.match(/iPhone/)),
        (cF = 12);
      wF = ["resize", "orientationchange"];
      (xF = (e, t) => (0, mv.default)((0, Ev.default)(e, t), yv.default)),
        (AF = (e, t) => {
          (0, nr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let s = n + ca + o;
              t(i, n, s);
            });
          });
        }),
        (OF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Bn({ config: t, elementApi: De });
        });
    });
  var Pv = g((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    function LF(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    LF(ha, {
      actions: function () {
        return DF;
      },
      destroy: function () {
        return Lv;
      },
      init: function () {
        return kF;
      },
      setEnv: function () {
        return qF;
      },
      store: function () {
        return Qn;
      },
    });
    var PF = Ii(),
      NF = MF((wp(), $e(Ip))),
      ga = (sa(), $e(Rv)),
      DF = FF((Dn(), $e(Ng)));
    function MF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Cv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Cv = function (n) {
        return n ? r : t;
      })(e);
    }
    function FF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Cv(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Qn = (0, PF.createStore)(NF.default);
    function qF(e) {
      e() && (0, ga.observeRequests)(Qn);
    }
    function kF(e) {
      Lv(), (0, ga.startEngine)({ store: Qn, rawData: e, allowEvents: !0 });
    }
    function Lv() {
      (0, ga.stopEngine)(Qn);
    }
  });
  var Fv = g((ZG, Mv) => {
    "use strict";
    var Nv = Se(),
      Dv = Pv();
    Dv.setEnv(Nv.env);
    Nv.define(
      "ix2",
      (Mv.exports = function () {
        return Dv;
      })
    );
  });
  var kv = g((JG, qv) => {
    "use strict";
    var ir = Se();
    ir.define(
      "links",
      (qv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = ir.env(),
          s = window.location,
          a = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          _ = /\/$/,
          f,
          y;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && ir.env("design")),
            (y = ir.env("slug") || s.pathname || ""),
            ir.scroll.off(w),
            (f = []);
          for (var T = document.links, N = 0; N < T.length; ++N) E(T[N]);
          f.length && (ir.scroll.on(w), w());
        }
        function E(T) {
          if (!T.getAttribute("hreflang")) {
            var N =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((a.href = N), !(N.indexOf(":") >= 0))) {
              var L = e(T);
              if (
                a.hash.length > 1 &&
                a.host + a.pathname === s.host + s.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                var F = e(a.hash);
                F.length && f.push({ link: L, sec: F, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var k =
                  a.href === s.href || N === y || (l.test(N) && _.test(y));
                A(L, u, k);
              }
            }
          }
        }
        function w() {
          var T = n.scrollTop(),
            N = n.height();
          t.each(f, function (L) {
            if (!L.link.attr("hreflang")) {
              var F = L.link,
                k = L.sec,
                q = k.offset().top,
                j = k.outerHeight(),
                K = N * 0.5,
                J = k.is(":visible") && q + j - K >= T && q + K <= T + N;
              L.active !== J && ((L.active = J), A(F, u, J));
            }
          });
        }
        function A(T, N, L) {
          var F = T.hasClass(N);
          (L && F) || (!L && !F) || (L ? T.addClass(N) : T.removeClass(N));
        }
        return r;
      })
    );
  });
  var Xv = g((eX, Gv) => {
    "use strict";
    var $n = Se();
    $n.define(
      "scroll",
      (Gv.exports = function (e) {
        var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll",
        },
          r = window.location,
          n = E() ? null : window.history,
          i = e(window),
          o = e(document),
          s = e(document.body),
          a =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (C) {
              window.setTimeout(C, 15);
            },
          u = $n.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(y));
        function E() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(C) {
          return w.test(C.hash) && C.host + C.pathname === r.host + r.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function L(C, I) {
          var P;
          switch (I) {
            case "add":
              (P = C.attr("tabindex")),
                P
                  ? C.attr("data-wf-tabindex-swap", P)
                  : C.attr("tabindex", "-1");
              break;
            case "remove":
              (P = C.attr("data-wf-tabindex-swap")),
                P
                  ? (C.attr("tabindex", P),
                    C.removeAttr("data-wf-tabindex-swap"))
                  : C.removeAttr("tabindex");
              break;
          }
          C.toggleClass("wf-force-outline-none", I === "add");
        }
        function F(C) {
          var I = C.currentTarget;
          if (
            !(
              $n.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))
            )
          ) {
            var P = A(I) ? I.hash : "";
            if (P !== "") {
              var X = e(P);
              X.length &&
                (C && (C.preventDefault(), C.stopPropagation()),
                  k(P, C),
                  window.setTimeout(
                    function () {
                      q(X, function () {
                        L(X, "add"),
                          X.get(0).focus({ preventScroll: !0 }),
                          L(X, "remove");
                      });
                    },
                    C ? 0 : 300
                  ));
            }
          }
        }
        function k(C) {
          if (
            r.hash !== C &&
            n &&
            n.pushState &&
            !($n.env.chrome && r.protocol === "file:")
          ) {
            var I = n.state && n.state.hash;
            I !== C && n.pushState({ hash: C }, "", C);
          }
        }
        function q(C, I) {
          var P = i.scrollTop(),
            X = j(C);
          if (P !== X) {
            var V = K(C, P, X),
              te = Date.now(),
              ne = function () {
                var U = Date.now() - te;
                window.scroll(0, J(P, X, U, V)),
                  U <= V ? a(ne) : typeof I == "function" && I();
              };
            a(ne);
          }
        }
        function j(C) {
          var I = e(l),
            P = I.css("position") === "fixed" ? I.outerHeight() : 0,
            X = C.offset().top - P;
          if (C.data("scroll") === "mid") {
            var V = i.height() - P,
              te = C.outerHeight();
            te < V && (X -= Math.round((V - te) / 2));
          }
          return X;
        }
        function K(C, I, P) {
          if (N()) return 0;
          var X = 1;
          return (
            s.add(C).each(function (V, te) {
              var ne = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (X = ne);
            }),
            (472.143 * Math.log(Math.abs(I - P) + 125) - 2e3) * X
          );
        }
        function J(C, I, P, X) {
          return P > X ? I : C + (I - C) * re(P / X);
        }
        function re(C) {
          return C < 0.5
            ? 4 * C * C * C
            : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: C, WF_CLICK_SCROLL: I } = t;
          o.on(I, f, F),
            o.on(C, _, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: B };
      })
    );
  });
  var Uv = g((tX, Wv) => {
    "use strict";
    var GF = Se();
    GF.define(
      "touch",
      (Wv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var s = !1,
            a = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            _;
          o.addEventListener("touchstart", f, !1),
            o.addEventListener("touchmove", y, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", E, !1),
            o.addEventListener("mousedown", f, !1),
            o.addEventListener("mousemove", y, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", E, !1);
          function f(A) {
            var T = A.touches;
            (T && T.length > 1) ||
              ((s = !0),
                T ? ((a = !0), (l = T[0].clientX)) : (l = A.clientX),
                (_ = l));
          }
          function y(A) {
            if (s) {
              if (a && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var T = A.touches,
                N = T ? T[0].clientX : A.clientX,
                L = N - _;
              (_ = N),
                Math.abs(L) > u &&
                r &&
                String(r()) === "" &&
                (i("swipe", A, { direction: L > 0 ? "right" : "left" }), E());
            }
          }
          function m(A) {
            if (s && ((s = !1), a && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (a = !1);
              return;
            }
          }
          function E() {
            s = !1;
          }
          function w() {
            o.removeEventListener("touchstart", f, !1),
              o.removeEventListener("touchmove", y, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", E, !1),
              o.removeEventListener("mousedown", f, !1),
              o.removeEventListener("mousemove", y, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", E, !1),
              (o = null);
          }
          this.destroy = w;
        }
        function i(o, s, a) {
          var u = e.Event(o, { originalEvent: s });
          e(s.target).trigger(u, a);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Bv = g((rX, Hv) => {
    "use strict";
    var St = Se(),
      XF = Lt(),
      Ye = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Vv = !0,
      WF = /^#[a-zA-Z0-9\-_]+$/;
    St.define(
      "dropdown",
      (Hv.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = St.env(),
          o = !1,
          s,
          a = St.env.touch,
          u = ".w-dropdown",
          l = "w--open",
          _ = XF.triggers,
          f = 900,
          y = "focusout" + u,
          m = "keydown" + u,
          E = "mouseenter" + u,
          w = "mousemove" + u,
          A = "mouseleave" + u,
          T = (a ? "click" : "mouseup") + u,
          N = "w-close" + u,
          L = "setting" + u,
          F = e(document),
          k;
        (n.ready = q),
          (n.design = function () {
            o && I(), (o = !1), q();
          }),
          (n.preview = function () {
            (o = !0), q();
          });
        function q() {
          (s = i && St.env("design")), (k = F.find(u)), k.each(j);
        }
        function j(c, D) {
          var W = e(D),
            O = e.data(D, u);
          O ||
            (O = e.data(D, u, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (O.toggle = O.el.children(".w-dropdown-toggle")),
            (O.list = O.el.children(".w-dropdown-list")),
            (O.links = O.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (O.complete = V(O)),
            (O.mouseLeave = ne(O)),
            (O.mouseUpOutside = X(O)),
            (O.mouseMoveOutside = U(O)),
            K(O);
          var Q = O.toggle.attr("id"),
            ue = O.list.attr("id");
          Q || (Q = "w-dropdown-toggle-" + c),
            ue || (ue = "w-dropdown-list-" + c),
            O.toggle.attr("id", Q),
            O.toggle.attr("aria-controls", ue),
            O.toggle.attr("aria-haspopup", "menu"),
            O.toggle.attr("aria-expanded", "false"),
            O.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            O.toggle.prop("tagName") !== "BUTTON" &&
            (O.toggle.attr("role", "button"),
              O.toggle.attr("tabindex") || O.toggle.attr("tabindex", "0")),
            O.list.attr("id", ue),
            O.list.attr("aria-labelledby", Q),
            O.links.each(function (b, z) {
              z.hasAttribute("tabindex") || z.setAttribute("tabindex", "0"),
                WF.test(z.hash) && z.addEventListener("click", C.bind(null, O));
            }),
            O.el.off(u),
            O.toggle.off(u),
            O.nav && O.nav.off(u);
          var oe = re(O, Vv);
          s && O.el.on(L, J(O)),
            s ||
            (i && ((O.hovering = !1), C(O)),
              O.config.hover && O.toggle.on(E, te(O)),
              O.el.on(N, oe),
              O.el.on(m, H(O)),
              O.el.on(y, v(O)),
              O.toggle.on(T, oe),
              O.toggle.on(m, p(O)),
              (O.nav = O.el.closest(".w-nav")),
              O.nav.on(N, oe));
        }
        function K(c) {
          var D = Number(c.el.css("z-index"));
          (c.manageZ = D === f || D === f + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !a,
              delay: c.el.attr("data-delay"),
            });
        }
        function J(c) {
          return function (D, W) {
            (W = W || {}),
              K(c),
              W.open === !0 && B(c, !0),
              W.open === !1 && C(c, { immediate: !0 });
          };
        }
        function re(c, D) {
          return r(function (W) {
            if (c.open || (W && W.type === "w-close"))
              return C(c, { forceClose: D });
            B(c);
          });
        }
        function B(c) {
          if (!c.open) {
            P(c),
              (c.open = !0),
              c.list.addClass(l),
              c.toggle.addClass(l),
              c.toggle.attr("aria-expanded", "true"),
              _.intro(0, c.el[0]),
              St.redraw.up(),
              c.manageZ && c.el.css("z-index", f + 1);
            var D = St.env("editor");
            s || F.on(T, c.mouseUpOutside),
              c.hovering && !D && c.el.on(A, c.mouseLeave),
              c.hovering && D && F.on(w, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function C(c, { immediate: D, forceClose: W } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !W)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var O = c.config;
            if (
              (_.outro(0, c.el[0]),
                F.off(T, c.mouseUpOutside),
                F.off(w, c.mouseMoveOutside),
                c.el.off(A, c.mouseLeave),
                window.clearTimeout(c.delayId),
                !O.delay || D)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, O.delay);
          }
        }
        function I() {
          F.find(u).each(function (c, D) {
            e(D).triggerHandler(N);
          });
        }
        function P(c) {
          var D = c.el[0];
          k.each(function (W, O) {
            var Q = e(O);
            Q.is(D) || Q.has(D).length || Q.triggerHandler(N);
          });
        }
        function X(c) {
          return (
            c.mouseUpOutside && F.off(T, c.mouseUpOutside),
            r(function (D) {
              if (c.open) {
                var W = e(D.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var O = e.inArray(c.el[0], W.parents(u)) === -1,
                    Q = St.env("editor");
                  if (O) {
                    if (Q) {
                      var ue =
                        W.parents().length === 1 &&
                        W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ue || oe) return;
                    }
                    C(c);
                  }
                }
              }
            })
          );
        }
        function V(c) {
          return function () {
            c.list.removeClass(l),
              c.toggle.removeClass(l),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function te(c) {
          return function () {
            (c.hovering = !0), B(c);
          };
        }
        function ne(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || C(c);
          };
        }
        function U(c) {
          return r(function (D) {
            if (c.open) {
              var W = e(D.target),
                O = e.inArray(c.el[0], W.parents(u)) === -1;
              if (O) {
                var Q = W.parents(".w-editor-bem-EditorHoverControls").length,
                  ue = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  b =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (Q || ue || b) return;
                (c.hovering = !1), C(c);
              }
            }
          });
        }
        function H(c) {
          return function (D) {
            if (!(s || !c.open))
              switch (
              ((c.selectedIdx = c.links.index(document.activeElement)),
                D.keyCode)
              ) {
                case Ye.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), h(c), D.preventDefault())
                    : void 0;
                case Ye.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      h(c),
                      D.preventDefault())
                    : void 0;
                case Ye.ESCAPE:
                  return C(c), c.toggle.focus(), D.stopPropagation();
                case Ye.ARROW_RIGHT:
                case Ye.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    h(c),
                    D.preventDefault()
                  );
                case Ye.ARROW_LEFT:
                case Ye.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    h(c),
                    D.preventDefault()
                  );
              }
          };
        }
        function h(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function p(c) {
          var D = re(c, Vv);
          return function (W) {
            if (!s) {
              if (!c.open)
                switch (W.keyCode) {
                  case Ye.ARROW_UP:
                  case Ye.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case Ye.SPACE:
                case Ye.ENTER:
                  return D(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function v(c) {
          return r(function (D) {
            var { relatedTarget: W, target: O } = D,
              Q = c.el[0],
              ue = Q.contains(W) || Q.contains(O);
            return ue || C(c), D.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var zv = g((va) => {
    "use strict";
    Object.defineProperty(va, "__esModule", { value: !0 });
    Object.defineProperty(va, "default", {
      enumerable: !0,
      get: function () {
        return UF;
      },
    });
    function UF(e, t, r, n, i, o, s, a, u, l, _, f, y) {
      return function (m) {
        e(m);
        var E = m.form,
          w = {
            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
            pageId: E.attr("data-wf-page-id") || "",
            elementId: E.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              E.html()
            ),
            trackingCookies: n(),
          };
        let A = E.attr("data-wf-flow");
        A && (w.wfFlow = A), i(m);
        var T = o(E, w.fields);
        if (T) return s(T);
        if (((w.fileUploads = a(E)), u(m), !l)) {
          _(m);
          return;
        }
        f.ajax({
          url: y,
          type: "POST",
          data: w,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (m.success = !0), _(m);
          })
          .fail(function () {
            _(m);
          });
      };
    }
  });
  var jv = g((iX, Kv) => {
    "use strict";
    var Zn = Se();
    Zn.define(
      "forms",
      (Kv.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          s = window.XDomainRequest && !window.atob,
          a = ".w-form",
          u,
          l = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          f = window.alert,
          y = Zn.env(),
          m,
          E,
          w,
          A = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            f(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
          function () {
            N(), !y && !m && F();
          };
        function N() {
          (u = e("html").attr("data-wf-site")),
            (E = "https://webflow.com/api/v1/form/" + u),
            s &&
            E.indexOf("https://webflow.com") >= 0 &&
            (E = E.replace(
              "https://webflow.com",
              "https://formdata.webflow.com"
            )),
            (w = `${E}/signFile`),
            (i = e(a + " form")),
            i.length && i.each(L);
        }
        function L(U, H) {
          var h = e(H),
            p = e.data(H, a);
          p || (p = e.data(H, a, { form: h })), k(p);
          var v = h.closest("div.w-form");
          (p.done = v.find("> .w-form-done")),
            (p.fail = v.find("> .w-form-fail")),
            (p.fileUploads = v.find(".w-file-upload")),
            p.fileUploads.each(function (W) {
              V(W, p);
            });
          var c =
            p.form.attr("aria-label") || p.form.attr("data-name") || "Form";
          p.done.attr("aria-label") || p.form.attr("aria-label", c),
            p.done.attr("tabindex", "-1"),
            p.done.attr("role", "region"),
            p.done.attr("aria-label") ||
            p.done.attr("aria-label", c + " success"),
            p.fail.attr("tabindex", "-1"),
            p.fail.attr("role", "region"),
            p.fail.attr("aria-label") ||
            p.fail.attr("aria-label", c + " failure");
          var D = (p.action = h.attr("action"));
          if (
            ((p.handler = null),
              (p.redirect = h.attr("data-redirect")),
              A.test(D))
          ) {
            p.handler = I;
            return;
          }
          if (!D) {
            if (u) {
              p.handler = (() => {
                let W = zv().default;
                return W(k, o, Zn, re, X, j, f, K, q, u, P, e, E);
              })();
              return;
            }
            T();
          }
        }
        function F() {
          (m = !0),
            n.on("submit", a + " form", function (W) {
              var O = e.data(this, a);
              O.handler && ((O.evt = W), O.handler(O));
            });
          let U = ".w-checkbox-input",
            H = ".w-radio-input",
            h = "w--redirected-checked",
            p = "w--redirected-focus",
            v = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            D = [
              ["checkbox", U],
              ["radio", H],
            ];
          n.on(
            "change",
            a + ' form input[type="checkbox"]:not(' + U + ")",
            (W) => {
              e(W.target).siblings(U).toggleClass(h);
            }
          ),
            n.on("change", a + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${U})`).map((Q, ue) =>
                e(ue).siblings(H).removeClass(h)
              );
              let O = e(W.target);
              O.hasClass("w-radio-input") || O.siblings(H).addClass(h);
            }),
            D.forEach(([W, O]) => {
              n.on(
                "focus",
                a + ` form input[type="${W}"]:not(` + O + ")",
                (Q) => {
                  e(Q.target).siblings(O).addClass(p),
                    e(Q.target).filter(c).siblings(O).addClass(v);
                }
              ),
                n.on(
                  "blur",
                  a + ` form input[type="${W}"]:not(` + O + ")",
                  (Q) => {
                    e(Q.target).siblings(O).removeClass(`${p} ${v}`);
                  }
                );
            });
        }
        function k(U) {
          var H = (U.btn = U.form.find(':input[type="submit"]'));
          (U.wait = U.btn.attr("data-wait") || null),
            (U.success = !1),
            H.prop("disabled", !1),
            U.label && H.val(U.label);
        }
        function q(U) {
          var H = U.btn,
            h = U.wait;
          H.prop("disabled", !0), h && ((U.label = H.val()), H.val(h));
        }
        function j(U, H) {
          var h = null;
          return (
            (H = H || {}),
            U.find(':input:not([type="submit"]):not([type="file"])').each(
              function (p, v) {
                var c = e(v),
                  D = c.attr("type"),
                  W =
                    c.attr("data-name") || c.attr("name") || "Field " + (p + 1);
                W = encodeURIComponent(W);
                var O = c.val();
                if (D === "checkbox") O = c.is(":checked");
                else if (D === "radio") {
                  if (H[W] === null || typeof H[W] == "string") return;
                  O =
                    U.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof O == "string" && (O = e.trim(O)),
                  (H[W] = O),
                  (h = h || B(c, D, W, O));
              }
            ),
            h
          );
        }
        function K(U) {
          var H = {};
          return (
            U.find(':input[type="file"]').each(function (h, p) {
              var v = e(p),
                c = v.attr("data-name") || v.attr("name") || "File " + (h + 1),
                D = v.attr("data-value");
              typeof D == "string" && (D = e.trim(D)), (H[c] = D);
            }),
            H
          );
        }
        let J = { _mkto_trk: "marketo" };
        function re() {
          return document.cookie.split("; ").reduce(function (H, h) {
            let p = h.split("="),
              v = p[0];
            if (v in J) {
              let c = J[v],
                D = p.slice(1).join("=");
              H[c] = D;
            }
            return H;
          }, {});
        }
        function B(U, H, h, p) {
          var v = null;
          return (
            H === "password"
              ? (v = "Passwords cannot be submitted.")
              : U.attr("required")
                ? p
                  ? l.test(U.attr("type")) &&
                  (_.test(p) ||
                    (v = "Please enter a valid email address for: " + h))
                  : (v = "Please fill out the required field: " + h)
                : h === "g-recaptcha-response" &&
                !p &&
                (v = "Please confirm you\u2019re not a robot."),
            v
          );
        }
        function C(U) {
          X(U), P(U);
        }
        function I(U) {
          k(U);
          var H = U.form,
            h = {};
          if (/^https/.test(o.href) && !/^https/.test(U.action)) {
            H.attr("method", "post");
            return;
          }
          X(U);
          var p = j(H, h);
          if (p) return f(p);
          q(U);
          var v;
          t.each(h, function (O, Q) {
            l.test(Q) && (h.EMAIL = O),
              /^((full[ _-]?)?name)$/i.test(Q) && (v = O),
              /^(first[ _-]?name)$/i.test(Q) && (h.FNAME = O),
              /^(last[ _-]?name)$/i.test(Q) && (h.LNAME = O);
          }),
            v &&
            !h.FNAME &&
            ((v = v.split(" ")),
              (h.FNAME = v[0]),
              (h.LNAME = h.LNAME || v[1]));
          var c = U.action.replace("/post?", "/post-json?") + "&c=?",
            D = c.indexOf("u=") + 2;
          D = c.substring(D, c.indexOf("&", D));
          var W = c.indexOf("id=") + 3;
          (W = c.substring(W, c.indexOf("&", W))),
            (h["b_" + D + "_" + W] = ""),
            e
              .ajax({ url: c, data: h, dataType: "jsonp" })
              .done(function (O) {
                (U.success = O.result === "success" || /already/.test(O.msg)),
                  U.success || console.info("MailChimp error: " + O.msg),
                  P(U);
              })
              .fail(function () {
                P(U);
              });
        }
        function P(U) {
          var H = U.form,
            h = U.redirect,
            p = U.success;
          if (p && h) {
            Zn.location(h);
            return;
          }
          U.done.toggle(p),
            U.fail.toggle(!p),
            p ? U.done.focus() : U.fail.focus(),
            H.toggle(!p),
            k(U);
        }
        function X(U) {
          U.evt && U.evt.preventDefault(), (U.evt = null);
        }
        function V(U, H) {
          if (!H.fileUploads || !H.fileUploads[U]) return;
          var h,
            p = e(H.fileUploads[U]),
            v = p.find("> .w-file-upload-default"),
            c = p.find("> .w-file-upload-uploading"),
            D = p.find("> .w-file-upload-success"),
            W = p.find("> .w-file-upload-error"),
            O = v.find(".w-file-upload-input"),
            Q = v.find(".w-file-upload-label"),
            ue = Q.children(),
            oe = W.find(".w-file-upload-error-msg"),
            b = D.find(".w-file-upload-file"),
            z = D.find(".w-file-remove-link"),
            ee = b.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            we = oe.attr("data-w-generic-error");
          if (
            (y ||
              Q.on("click keydown", function (S) {
                (S.type === "keydown" && S.which !== 13 && S.which !== 32) ||
                  (S.preventDefault(), O.click());
              }),
              Q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              z.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              y)
          )
            O.on("click", function (S) {
              S.preventDefault();
            }),
              Q.on("click", function (S) {
                S.preventDefault();
              }),
              ue.on("click", function (S) {
                S.preventDefault();
              });
          else {
            z.on("click keydown", function (S) {
              if (S.type === "keydown") {
                if (S.which !== 13 && S.which !== 32) return;
                S.preventDefault();
              }
              O.removeAttr("data-value"),
                O.val(""),
                ee.html(""),
                v.toggle(!0),
                D.toggle(!1),
                Q.focus();
            }),
              O.on("change", function (S) {
                (h = S.target && S.target.files && S.target.files[0]),
                  h &&
                  (v.toggle(!1),
                    W.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    ee.text(h.name),
                    M() || q(H),
                    (H.fileUploads[U].uploading = !0),
                    te(h, x));
              });
            var Oe = Q.outerHeight();
            O.height(Oe), O.width(1);
          }
          function d(S) {
            var G = S.responseJSON && S.responseJSON.msg,
              ie = we;
            typeof G == "string" && G.indexOf("InvalidFileTypeError") === 0
              ? (ie = fe)
              : typeof G == "string" &&
              G.indexOf("MaxFileSizeError") === 0 &&
              (ie = Y),
              oe.text(ie),
              O.removeAttr("data-value"),
              O.val(""),
              c.toggle(!1),
              v.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (H.fileUploads[U].uploading = !1),
              M() || k(H);
          }
          function x(S, G) {
            if (S) return d(S);
            var ie = G.fileName,
              se = G.postData,
              ve = G.fileId,
              Z = G.s3Url;
            O.attr("data-value", ve), ne(Z, se, h, ie, R);
          }
          function R(S) {
            if (S) return d(S);
            c.toggle(!1),
              D.css("display", "inline-block"),
              D.focus(),
              (H.fileUploads[U].uploading = !1),
              M() || k(H);
          }
          function M() {
            var S = (H.fileUploads && H.fileUploads.toArray()) || [];
            return S.some(function (G) {
              return G.uploading;
            });
          }
        }
        function te(U, H) {
          var h = new URLSearchParams({ name: U.name, size: U.size });
          e.ajax({ type: "GET", url: `${w}?${h}`, crossDomain: !0 })
            .done(function (p) {
              H(null, p);
            })
            .fail(function (p) {
              H(p);
            });
        }
        function ne(U, H, h, p, v) {
          var c = new FormData();
          for (var D in H) c.append(D, H[D]);
          c.append("file", h, p),
            e
              .ajax({
                type: "POST",
                url: U,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                v(null);
              })
              .fail(function (W) {
                v(W);
              });
        }
        return r;
      })
    );
  });
  var $v = g((oX, Qv) => {
    "use strict";
    var ma = Se(),
      Yv = "w-condition-invisible",
      VF = "." + Yv;
    function HF(e) {
      return e.filter(function (t) {
        return !Mr(t);
      });
    }
    function Mr(e) {
      return !!(e.$el && e.$el.closest(VF).length);
    }
    function ya(e, t) {
      for (var r = e; r >= 0; r--) if (!Mr(t[r])) return r;
      return -1;
    }
    function Ea(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!Mr(t[r])) return r;
      return -1;
    }
    function BF(e, t) {
      return ya(e - 1, t) === -1;
    }
    function zF(e, t) {
      return Ea(e + 1, t) === -1;
    }
    function Dr(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function KF(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        s = "w-lightbox",
        a = s + "-",
        u = /(^|\s+)/g,
        l = [],
        _,
        f,
        y,
        m = [];
      function E(p, v) {
        return (
          (l = o(p) ? p : [p]),
          f || E.build(),
          HF(l).length > 1 &&
          ((f.items = f.empty),
            l.forEach(function (c, D) {
              var W = H("thumbnail"),
                O = H("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(W);
              Dr(O, `show item ${D + 1} of ${l.length}`),
                Mr(c) && O.addClass(Yv),
                (f.items = f.items.add(O)),
                re(c.thumbnailUrl || c.url, function (Q) {
                  Q.prop("width") > Q.prop("height")
                    ? V(Q, "wide")
                    : V(Q, "tall"),
                    W.append(V(Q, "thumbnail-image"));
                });
            }),
            f.strip.empty().append(f.items),
            V(f.content, "group")),
          i(te(f.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          V(f.html, "noscroll"),
          E.show(v || 0)
        );
      }
      (E.build = function () {
        return (
          E.destroy(),
          (f = { html: r(t.documentElement), empty: r() }),
          (f.arrowLeft = H("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.arrowRight = H("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.close = H("control close").attr("role", "button")),
          Dr(f.arrowLeft, "previous image"),
          Dr(f.arrowRight, "next image"),
          Dr(f.close, "close lightbox"),
          (f.spinner = H("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (f.strip = H("strip").attr("role", "tablist")),
          (y = new I(f.spinner, P("hide"))),
          (f.content = H("content").append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = H("container").append(f.content, f.strip)),
          (f.lightbox = H("backdrop hide").append(f.container)),
          f.strip.on("click", X("item"), L),
          f.content
            .on("swipe", F)
            .on("click", X("left"), A)
            .on("click", X("right"), T)
            .on("click", X("close"), N)
            .on("click", X("image, caption"), T),
          f.container.on("click", X("view"), N).on("dragstart", X("img"), q),
          f.lightbox.on("keydown", j).on("focusin", k),
          r(n).append(f.lightbox),
          E
        );
      }),
        (E.destroy = function () {
          f && (te(f.html, "noscroll"), f.lightbox.remove(), (f = void 0));
        }),
        (E.show = function (p) {
          if (p !== _) {
            var v = l[p];
            if (!v) return E.hide();
            if (Mr(v)) {
              if (p < _) {
                var c = ya(p - 1, l);
                p = c > -1 ? c : p;
              } else {
                var D = Ea(p + 1, l);
                p = D > -1 ? D : p;
              }
              v = l[p];
            }
            var W = _;
            (_ = p),
              f.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              y.show();
            var O = (v.html && h(v.width, v.height)) || v.url;
            return (
              re(O, function (Q) {
                if (p !== _) return;
                var ue = H("figure", "figure").append(V(Q, "image")),
                  oe = H("frame").append(ue),
                  b = H("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(oe),
                  z,
                  ee;
                v.html &&
                  ((z = r(v.html)),
                    (ee = z.is("iframe")),
                    ee && z.on("load", Y),
                    ue.append(V(z, "embed"))),
                  v.caption &&
                  ue.append(H("caption", "figcaption").text(v.caption)),
                  f.spinner.before(b),
                  ee || Y();
                function Y() {
                  if (
                    (f.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                      y.hide(),
                      p !== _)
                  ) {
                    b.remove();
                    return;
                  }
                  let fe = BF(p, l);
                  ne(f.arrowLeft, "inactive", fe),
                    U(f.arrowLeft, fe),
                    fe && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                  let we = zF(p, l);
                  if (
                    (ne(f.arrowRight, "inactive", we),
                      U(f.arrowRight, we),
                      we && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                      f.view
                        ? (i(f.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(B(f.view)),
                          i(b)
                            .add("opacity .3s")
                            .add("transform .3s")
                            .set({ x: p > W ? "80px" : "-80px" })
                            .start({ opacity: 1, x: 0 }))
                        : b.css("opacity", 1),
                      (f.view = b),
                      f.view.prop("tabIndex", 0),
                      f.items)
                  ) {
                    te(f.items, "active"), f.items.removeAttr("aria-selected");
                    var Oe = f.items.eq(p);
                    V(Oe, "active"), Oe.attr("aria-selected", !0), C(Oe);
                  }
                }
              }),
              f.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
              (r("body")
                .children()
                .each(function () {
                  r(this).hasClass("w-lightbox-backdrop") ||
                    r(this).is("script") ||
                    (m.push({
                      node: r(this),
                      hidden: r(this).attr("aria-hidden"),
                      tabIndex: r(this).attr("tabIndex"),
                    }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                }),
                f.close.focus()),
              E
            );
          }
        }),
        (E.hide = function () {
          return (
            i(f.lightbox).add("opacity .3s").start({ opacity: 0 }).then(J), E
          );
        }),
        (E.prev = function () {
          var p = ya(_ - 1, l);
          p > -1 && E.show(p);
        }),
        (E.next = function () {
          var p = Ea(_ + 1, l);
          p > -1 && E.show(p);
        });
      function w(p) {
        return function (v) {
          this === v.target && (v.stopPropagation(), v.preventDefault(), p());
        };
      }
      var A = w(E.prev),
        T = w(E.next),
        N = w(E.hide),
        L = function (p) {
          var v = r(this).index();
          p.preventDefault(), E.show(v);
        },
        F = function (p, v) {
          p.preventDefault(),
            v.direction === "left"
              ? E.next()
              : v.direction === "right" && E.prev();
        },
        k = function () {
          this.focus();
        };
      function q(p) {
        p.preventDefault();
      }
      function j(p) {
        var v = p.keyCode;
        v === 27 || K(v, "close")
          ? E.hide()
          : v === 37 || K(v, "left")
            ? E.prev()
            : v === 39 || K(v, "right")
              ? E.next()
              : K(v, "item") && r(":focus").click();
      }
      function K(p, v) {
        if (p !== 13 && p !== 32) return !1;
        var c = r(":focus").attr("class"),
          D = P(v).trim();
        return c.includes(D);
      }
      function J() {
        f &&
          (f.strip.scrollLeft(0).empty(),
            te(f.html, "noscroll"),
            V(f.lightbox, "hide"),
            f.view && f.view.remove(),
            te(f.content, "group"),
            V(f.arrowLeft, "inactive"),
            V(f.arrowRight, "inactive"),
            (_ = f.view = void 0),
            m.forEach(function (p) {
              var v = p.node;
              v &&
                (p.hidden
                  ? v.attr("aria-hidden", p.hidden)
                  : v.removeAttr("aria-hidden"),
                  p.tabIndex
                    ? v.attr("tabIndex", p.tabIndex)
                    : v.removeAttr("tabIndex"));
            }),
            (m = []),
            r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function re(p, v) {
        var c = H("img", "img");
        return (
          c.one("load", function () {
            v(c);
          }),
          c.attr("src", p),
          c
        );
      }
      function B(p) {
        return function () {
          p.remove();
        };
      }
      function C(p) {
        var v = p.get(0),
          c = f.strip.get(0),
          D = v.offsetLeft,
          W = v.clientWidth,
          O = c.scrollLeft,
          Q = c.clientWidth,
          ue = c.scrollWidth - Q,
          oe;
        D < O
          ? (oe = Math.max(0, D + W - Q))
          : D + W > Q + O && (oe = Math.min(D, ue)),
          oe != null &&
          i(f.strip).add("scroll-left 500ms").start({ "scroll-left": oe });
      }
      function I(p, v, c) {
        (this.$element = p),
          (this.className = v),
          (this.delay = c || 200),
          this.hide();
      }
      (I.prototype.show = function () {
        var p = this;
        p.timeoutId ||
          (p.timeoutId = setTimeout(function () {
            p.$element.removeClass(p.className), delete p.timeoutId;
          }, p.delay));
      }),
        (I.prototype.hide = function () {
          var p = this;
          if (p.timeoutId) {
            clearTimeout(p.timeoutId), delete p.timeoutId;
            return;
          }
          p.$element.addClass(p.className);
        });
      function P(p, v) {
        return p.replace(u, (v ? " ." : " ") + a);
      }
      function X(p) {
        return P(p, !0);
      }
      function V(p, v) {
        return p.addClass(P(v));
      }
      function te(p, v) {
        return p.removeClass(P(v));
      }
      function ne(p, v, c) {
        return p.toggleClass(P(v), c);
      }
      function U(p, v) {
        return p.attr("aria-hidden", v).attr("tabIndex", v ? -1 : 0);
      }
      function H(p, v) {
        return V(r(t.createElement(v || "div")), p);
      }
      function h(p, v) {
        var c =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          p +
          '" height="' +
          v +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      return (
        (function () {
          var p = e.navigator.userAgent,
            v = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            c = p.match(v),
            D = p.indexOf("Android ") > -1 && p.indexOf("Chrome") === -1;
          if (!D && (!c || c[2] > 7)) return;
          var W = t.createElement("style");
          t.head.appendChild(W), e.addEventListener("resize", O, !0);
          function O() {
            var Q = e.innerHeight,
              ue = e.innerWidth,
              oe =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Q +
                "px}.w-lightbox-view {width:" +
                ue +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Q +
                "px}.w-lightbox-image {max-width:" +
                ue +
                "px;max-height:" +
                Q +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Q +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Q +
                "px}.w-lightbox-item {width:" +
                0.1 * Q +
                "px;padding:" +
                0.02 * Q +
                "px " +
                0.01 * Q +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Q +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Q +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Q +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Q +
                "px}.w-lightbox-image {max-width:" +
                0.96 * ue +
                "px;max-height:" +
                0.96 * Q +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * ue +
                "px;max-height:" +
                0.84 * Q +
                "px}}";
            W.textContent = oe;
          }
          O();
        })(),
        E
      );
    }
    ma.define(
      "lightbox",
      (Qv.exports = function (e) {
        var t = {},
          r = ma.env(),
          n = KF(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          s,
          a = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = l;
        function l() {
          (s = r && ma.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(a)),
            o.webflowLightBox(),
            o.each(function () {
              Dr(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (E, w) {
              var A = e.data(w, a);
              A ||
                (A = e.data(w, a, {
                  el: e(w),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                A.el.off(a),
                _(A),
                s
                  ? A.el.on("setting" + a, _.bind(null, A))
                  : A.el.on("click" + a, f(A)).on("click" + a, function (T) {
                    T.preventDefault();
                  });
            });
          },
        });
        function _(m) {
          var E = m.el.children(".w-json").html(),
            w,
            A;
          if (!E) {
            m.items = [];
            return;
          }
          try {
            E = JSON.parse(E);
          } catch (T) {
            console.error("Malformed lightbox JSON configuration.", T);
          }
          y(E),
            E.items.forEach(function (T) {
              T.$el = m.el;
            }),
            (w = E.group),
            w
              ? ((A = u[w]),
                A || (A = u[w] = []),
                (m.items = A),
                E.items.length &&
                ((m.index = A.length), A.push.apply(A, E.items)))
              : ((m.items = E.items), (m.index = 0));
        }
        function f(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function y(m) {
          m.images &&
            (m.images.forEach(function (E) {
              E.type = "image";
            }),
              (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var Jv = g((aX, Zv) => {
    "use strict";
    var mt = Se(),
      jF = Lt(),
      Ae = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    mt.define(
      "navbar",
      (Zv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          s = t.debounce,
          a,
          u,
          l,
          _,
          f = mt.env(),
          y = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          E = "w--open",
          w = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          T = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          L = jF.triggers,
          F = e();
        (r.ready = r.design = r.preview = k),
          (r.destroy = function () {
            (F = e()), q(), u && u.length && u.each(re);
          });
        function k() {
          (l = f && mt.env("design")),
            (_ = mt.env("editor")),
            (a = e(document.body)),
            (u = o.find(m)),
            u.length && (u.each(J), q(), j());
        }
        function q() {
          mt.resize.off(K);
        }
        function j() {
          mt.resize.on(K);
        }
        function K() {
          u.each(v);
        }
        function J(b, z) {
          var ee = e(z),
            Y = e.data(z, m);
          Y ||
            (Y = e.data(z, m, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = ee.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = ee.find(".w-nav-button")),
            (Y.container = ee.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + b),
            (Y.outside = h(Y));
          var fe = ee.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
            Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(m),
            Y.button.off(m),
            Y.menu.off(m),
            I(Y),
            l
              ? (B(Y), Y.el.on("setting" + m, P(Y)))
              : (C(Y),
                Y.button.on("click" + m, U(Y)),
                Y.menu.on("click" + m, "a", H(Y)),
                Y.button.on("keydown" + m, X(Y)),
                Y.el.on("keydown" + m, V(Y))),
            v(b, z);
        }
        function re(b, z) {
          var ee = e.data(z, m);
          ee && (B(ee), e.removeData(z, m));
        }
        function B(b) {
          b.overlay && (oe(b, !0), b.overlay.remove(), (b.overlay = null));
        }
        function C(b) {
          b.overlay ||
            ((b.overlay = e(y).appendTo(b.el)),
              b.overlay.attr("id", b.overlayContainerId),
              (b.parent = b.menu.parent()),
              oe(b, !0));
        }
        function I(b) {
          var z = {},
            ee = b.config || {},
            Y = (z.animation = b.el.attr("data-animation") || "default");
          (z.animOver = /^over/.test(Y)),
            (z.animDirect = /left$/.test(Y) ? -1 : 1),
            ee.animation !== Y && b.open && t.defer(ne, b),
            (z.easing = b.el.attr("data-easing") || "ease"),
            (z.easing2 = b.el.attr("data-easing2") || "ease");
          var fe = b.el.attr("data-duration");
          (z.duration = fe != null ? Number(fe) : 400),
            (z.docHeight = b.el.attr("data-doc-height")),
            (b.config = z);
        }
        function P(b) {
          return function (z, ee) {
            ee = ee || {};
            var Y = i.width();
            I(b),
              ee.open === !0 && Q(b, !0),
              ee.open === !1 && oe(b, !0),
              b.open &&
              t.defer(function () {
                Y !== i.width() && ne(b);
              });
          };
        }
        function X(b) {
          return function (z) {
            switch (z.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return U(b)(), z.preventDefault(), z.stopPropagation();
              case Ae.ESCAPE:
                return oe(b), z.preventDefault(), z.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return b.open
                  ? (z.keyCode === Ae.END
                    ? (b.selectedIdx = b.links.length - 1)
                    : (b.selectedIdx = 0),
                    te(b),
                    z.preventDefault(),
                    z.stopPropagation())
                  : (z.preventDefault(), z.stopPropagation());
            }
          };
        }
        function V(b) {
          return function (z) {
            if (b.open)
              switch (
              ((b.selectedIdx = b.links.index(document.activeElement)),
                z.keyCode)
              ) {
                case Ae.HOME:
                case Ae.END:
                  return (
                    z.keyCode === Ae.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    te(b),
                    z.preventDefault(),
                    z.stopPropagation()
                  );
                case Ae.ESCAPE:
                  return (
                    oe(b),
                    b.button.focus(),
                    z.preventDefault(),
                    z.stopPropagation()
                  );
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return (
                    (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                    te(b),
                    z.preventDefault(),
                    z.stopPropagation()
                  );
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return (
                    (b.selectedIdx = Math.min(
                      b.links.length - 1,
                      b.selectedIdx + 1
                    )),
                    te(b),
                    z.preventDefault(),
                    z.stopPropagation()
                  );
              }
          };
        }
        function te(b) {
          if (b.links[b.selectedIdx]) {
            var z = b.links[b.selectedIdx];
            z.focus(), H(z);
          }
        }
        function ne(b) {
          b.open && (oe(b, !0), Q(b, !0));
        }
        function U(b) {
          return s(function () {
            b.open ? oe(b) : Q(b);
          });
        }
        function H(b) {
          return function (z) {
            var ee = e(this),
              Y = ee.attr("href");
            if (!mt.validClick(z.currentTarget)) {
              z.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && b.open && oe(b);
          };
        }
        function h(b) {
          return (
            b.outside && o.off("click" + m, b.outside),
            function (z) {
              var ee = e(z.target);
              (_ && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                p(b, ee);
            }
          );
        }
        var p = s(function (b, z) {
          if (b.open) {
            var ee = z.closest(".w-nav-menu");
            b.menu.is(ee) || oe(b);
          }
        });
        function v(b, z) {
          var ee = e.data(z, m),
            Y = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !Y && !l && oe(ee, !0), ee.container.length)) {
            var fe = D(ee);
            ee.links.each(fe), ee.dropdowns.each(fe);
          }
          ee.open && ue(ee);
        }
        var c = "max-width";
        function D(b) {
          var z = b.container.css(c);
          return (
            z === "none" && (z = ""),
            function (ee, Y) {
              (Y = e(Y)), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, z);
            }
          );
        }
        function W(b, z) {
          z.setAttribute("data-nav-menu-open", "");
        }
        function O(b, z) {
          z.removeAttribute("data-nav-menu-open");
        }
        function Q(b, z) {
          if (b.open) return;
          (b.open = !0),
            b.menu.each(W),
            b.links.addClass(N),
            b.dropdowns.addClass(w),
            b.dropdownToggle.addClass(A),
            b.dropdownList.addClass(T),
            b.button.addClass(E);
          var ee = b.config,
            Y = ee.animation;
          (Y === "none" || !n.support.transform || ee.duration <= 0) &&
            (z = !0);
          var fe = ue(b),
            we = b.menu.outerHeight(!0),
            Oe = b.menu.outerWidth(!0),
            d = b.el.height(),
            x = b.el[0];
          if (
            (v(0, x),
              L.intro(0, x),
              mt.redraw.up(),
              l || o.on("click" + m, b.outside),
              z)
          ) {
            S();
            return;
          }
          var R = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (b.overlay &&
              ((F = b.menu.prev()), b.overlay.show().append(b.menu)),
              ee.animOver)
          ) {
            n(b.menu)
              .add(R)
              .set({ x: ee.animDirect * Oe, height: fe })
              .start({ x: 0 })
              .then(S),
              b.overlay && b.overlay.width(Oe);
            return;
          }
          var M = d + we;
          n(b.menu).add(R).set({ y: -M }).start({ y: 0 }).then(S);
          function S() {
            b.button.attr("aria-expanded", "true");
          }
        }
        function ue(b) {
          var z = b.config,
            ee = z.docHeight ? o.height() : a.height();
          return (
            z.animOver
              ? b.menu.height(ee)
              : b.el.css("position") !== "fixed" &&
              (ee -= b.el.outerHeight(!0)),
            b.overlay && b.overlay.height(ee),
            ee
          );
        }
        function oe(b, z) {
          if (!b.open) return;
          (b.open = !1), b.button.removeClass(E);
          var ee = b.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (z = !0),
              L.outro(0, b.el[0]),
              o.off("click" + m, b.outside),
              z)
          ) {
            n(b.menu).stop(), x();
            return;
          }
          var Y = "transform " + ee.duration + "ms " + ee.easing2,
            fe = b.menu.outerHeight(!0),
            we = b.menu.outerWidth(!0),
            Oe = b.el.height();
          if (ee.animOver) {
            n(b.menu)
              .add(Y)
              .start({ x: we * ee.animDirect })
              .then(x);
            return;
          }
          var d = Oe + fe;
          n(b.menu).add(Y).start({ y: -d }).then(x);
          function x() {
            b.menu.height(""),
              n(b.menu).set({ x: 0, y: 0 }),
              b.menu.each(O),
              b.links.removeClass(N),
              b.dropdowns.removeClass(w),
              b.dropdownToggle.removeClass(A),
              b.dropdownList.removeClass(T),
              b.overlay &&
              b.overlay.children().length &&
              (F.length ? b.menu.insertAfter(F) : b.menu.prependTo(b.parent),
                b.overlay.attr("style", "").hide()),
              b.el.triggerHandler("w-close"),
              b.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var rm = g((sX, tm) => {
    "use strict";
    var yt = Se(),
      YF = Lt(),
      ot = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      em =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    yt.define(
      "slider",
      (tm.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          s,
          a = yt.env(),
          u = ".w-slider",
          l = '<div class="w-slider-dot" data-wf-ignore />',
          _ =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          f = "w-slider-force-show",
          y = YF.triggers,
          m,
          E = !1;
        (r.ready = function () {
          (s = yt.env("design")), w();
        }),
          (r.design = function () {
            (s = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (s = !1), w();
          }),
          (r.redraw = function () {
            (E = !0), w(), (E = !1);
          }),
          (r.destroy = A);
        function w() {
          (o = i.find(u)), o.length && (o.each(L), !m && (A(), T()));
        }
        function A() {
          yt.resize.off(N), yt.redraw.off(r.redraw);
        }
        function T() {
          yt.resize.on(N), yt.redraw.on(r.redraw);
        }
        function N() {
          o.filter(":visible").each(V);
        }
        function L(h, p) {
          var v = e(p),
            c = e.data(p, u);
          c ||
            (c = e.data(p, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: v,
              config: {},
            })),
            (c.mask = v.children(".w-slider-mask")),
            (c.left = v.children(".w-slider-arrow-left")),
            (c.right = v.children(".w-slider-arrow-right")),
            (c.nav = v.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(y.reset),
            E && (c.maskWidth = 0),
            v.attr("role") === void 0 && v.attr("role", "region"),
            v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
          var D = c.mask.attr("id");
          if (
            (D || ((D = "w-slider-mask-" + h), c.mask.attr("id", D)),
              !s && !c.ariaLiveLabel && (c.ariaLiveLabel = e(_).appendTo(c.mask)),
              c.left.attr("role", "button"),
              c.left.attr("tabindex", "0"),
              c.left.attr("aria-controls", D),
              c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
              c.right.attr("role", "button"),
              c.right.attr("tabindex", "0"),
              c.right.attr("aria-controls", D),
              c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
              !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(u),
            c.left.off(u),
            c.right.off(u),
            c.nav.off(u),
            F(c),
            s
              ? (c.el.on("setting" + u, I(c)), C(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + u, I(c)),
                c.left.on("click" + u, K(c)),
                c.right.on("click" + u, J(c)),
                c.left.on("keydown" + u, j(c, K)),
                c.right.on("keydown" + u, j(c, J)),
                c.nav.on("keydown" + u, "> div", I(c)),
                c.config.autoplay &&
                !c.hasTimer &&
                ((c.hasTimer = !0), (c.timerCount = 1), B(c)),
                c.el.on("mouseenter" + u, q(c, !0, "mouse")),
                c.el.on("focusin" + u, q(c, !0, "keyboard")),
                c.el.on("mouseleave" + u, q(c, !1, "mouse")),
                c.el.on("focusout" + u, q(c, !1, "keyboard"))),
            c.nav.on("click" + u, "> div", I(c)),
            a ||
            c.mask
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
          var W = v.filter(":hidden");
          W.addClass(f);
          var O = v.parents(":hidden");
          O.addClass(f), E || V(h, p), W.removeClass(f), O.removeClass(f);
        }
        function F(h) {
          var p = {};
          (p.crossOver = 0),
            (p.animation = h.el.attr("data-animation") || "slide"),
            p.animation === "outin" &&
            ((p.animation = "cross"), (p.crossOver = 0.5)),
            (p.easing = h.el.attr("data-easing") || "ease");
          var v = h.el.attr("data-duration");
          if (
            ((p.duration = v != null ? parseInt(v, 10) : 500),
              k(h.el.attr("data-infinite")) && (p.infinite = !0),
              k(h.el.attr("data-disable-swipe")) && (p.disableSwipe = !0),
              k(h.el.attr("data-hide-arrows"))
                ? (p.hideArrows = !0)
                : h.config.hideArrows && (h.left.show(), h.right.show()),
              k(h.el.attr("data-autoplay")))
          ) {
            (p.autoplay = !0),
              (p.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3),
              (p.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + u + " touchstart" + u;
            s ||
              h.el.off(c).one(c, function () {
                C(h);
              });
          }
          var D = h.right.width();
          (p.edge = D ? D + 40 : 100), (h.config = p);
        }
        function k(h) {
          return h === "1" || h === "true";
        }
        function q(h, p, v) {
          return function (c) {
            if (p) h.hasFocus[v] = p;
            else if (
              e.contains(h.el.get(0), c.relatedTarget) ||
              ((h.hasFocus[v] = p),
                (h.hasFocus.mouse && v === "keyboard") ||
                (h.hasFocus.keyboard && v === "mouse"))
            )
              return;
            p
              ? (h.ariaLiveLabel.attr("aria-live", "polite"),
                h.hasTimer && C(h))
              : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && B(h));
          };
        }
        function j(h, p) {
          return function (v) {
            switch (v.keyCode) {
              case ot.SPACE:
              case ot.ENTER:
                return p(h)(), v.preventDefault(), v.stopPropagation();
            }
          };
        }
        function K(h) {
          return function () {
            X(h, { index: h.index - 1, vector: -1 });
          };
        }
        function J(h) {
          return function () {
            X(h, { index: h.index + 1, vector: 1 });
          };
        }
        function re(h, p) {
          var v = null;
          p === h.slides.length && (w(), te(h)),
            t.each(h.anchors, function (c, D) {
              e(c.els).each(function (W, O) {
                e(O).index() === p && (v = D);
              });
            }),
            v != null && X(h, { index: v, immediate: !0 });
        }
        function B(h) {
          C(h);
          var p = h.config,
            v = p.timerMax;
          (v && h.timerCount++ > v) ||
            (h.timerId = window.setTimeout(function () {
              h.timerId == null || s || (J(h)(), B(h));
            }, p.delay));
        }
        function C(h) {
          window.clearTimeout(h.timerId), (h.timerId = null);
        }
        function I(h) {
          return function (p, v) {
            v = v || {};
            var c = h.config;
            if (s && p.type === "setting") {
              if (v.select === "prev") return K(h)();
              if (v.select === "next") return J(h)();
              if ((F(h), te(h), v.select == null)) return;
              re(h, v.select);
              return;
            }
            if (p.type === "swipe")
              return c.disableSwipe || yt.env("editor")
                ? void 0
                : v.direction === "left"
                  ? J(h)()
                  : v.direction === "right"
                    ? K(h)()
                    : void 0;
            if (h.nav.has(p.target).length) {
              var D = e(p.target).index();
              if (
                (p.type === "click" && X(h, { index: D }), p.type === "keydown")
              )
                switch (p.keyCode) {
                  case ot.ENTER:
                  case ot.SPACE: {
                    X(h, { index: D }), p.preventDefault();
                    break;
                  }
                  case ot.ARROW_LEFT:
                  case ot.ARROW_UP: {
                    P(h.nav, Math.max(D - 1, 0)), p.preventDefault();
                    break;
                  }
                  case ot.ARROW_RIGHT:
                  case ot.ARROW_DOWN: {
                    P(h.nav, Math.min(D + 1, h.pages)), p.preventDefault();
                    break;
                  }
                  case ot.HOME: {
                    P(h.nav, 0), p.preventDefault();
                    break;
                  }
                  case ot.END: {
                    P(h.nav, h.pages), p.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function P(h, p) {
          var v = h.children().eq(p).focus();
          h.children().not(v);
        }
        function X(h, p) {
          p = p || {};
          var v = h.config,
            c = h.anchors;
          h.previous = h.index;
          var D = p.index,
            W = {};
          D < 0
            ? ((D = c.length - 1),
              v.infinite &&
              ((W.x = -h.endX), (W.from = 0), (W.to = c[0].width)))
            : D >= c.length &&
            ((D = 0),
              v.infinite &&
              ((W.x = c[c.length - 1].width),
                (W.from = -c[c.length - 1].x),
                (W.to = W.from - W.x))),
            (h.index = D);
          var O = h.nav
            .children()
            .eq(D)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          h.nav
            .children()
            .not(O)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            v.hideArrows &&
            (h.index === c.length - 1 ? h.right.hide() : h.right.show(),
              h.index === 0 ? h.left.hide() : h.left.show());
          var Q = h.offsetX || 0,
            ue = (h.offsetX = -c[h.index].x),
            oe = { x: ue, opacity: 1, visibility: "" },
            b = e(c[h.index].els),
            z = e(c[h.previous] && c[h.previous].els),
            ee = h.slides.not(b),
            Y = v.animation,
            fe = v.easing,
            we = Math.round(v.duration),
            Oe = p.vector || (h.index > h.previous ? 1 : -1),
            d = "opacity " + we + "ms " + fe,
            x = "transform " + we + "ms " + fe;
          if (
            (b.find(em).removeAttr("tabindex"),
              b.removeAttr("aria-hidden"),
              b.find("*").removeAttr("aria-hidden"),
              ee.find(em).attr("tabindex", "-1"),
              ee.attr("aria-hidden", "true"),
              ee.find("*").attr("aria-hidden", "true"),
              s || (b.each(y.intro), ee.each(y.outro)),
              p.immediate && !E)
          ) {
            n(b).set(oe), S();
            return;
          }
          if (h.index === h.previous) return;
          if (
            (s || h.ariaLiveLabel.text(`Slide ${D + 1} of ${c.length}.`),
              Y === "cross")
          ) {
            var R = Math.round(we - we * v.crossOver),
              M = Math.round(we - R);
            (d = "opacity " + R + "ms " + fe),
              n(z).set({ visibility: "" }).add(d).start({ opacity: 0 }),
              n(b)
                .set({ visibility: "", x: ue, opacity: 0, zIndex: h.depth++ })
                .add(d)
                .wait(M)
                .then({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "fade") {
            n(z).set({ visibility: "" }).stop(),
              n(b)
                .set({ visibility: "", x: ue, opacity: 0, zIndex: h.depth++ })
                .add(d)
                .start({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "over") {
            (oe = { x: h.endX }),
              n(z).set({ visibility: "" }).stop(),
              n(b)
                .set({
                  visibility: "",
                  zIndex: h.depth++,
                  x: ue + c[h.index].width * Oe,
                })
                .add(x)
                .start({ x: ue })
                .then(S);
            return;
          }
          v.infinite && W.x
            ? (n(h.slides.not(z))
              .set({ visibility: "", x: W.x })
              .add(x)
              .start({ x: ue }),
              n(z).set({ visibility: "", x: W.from }).add(x).start({ x: W.to }),
              (h.shifted = z))
            : (v.infinite &&
              h.shifted &&
              (n(h.shifted).set({ visibility: "", x: Q }),
                (h.shifted = null)),
              n(h.slides).set({ visibility: "" }).add(x).start({ x: ue }));
          function S() {
            (b = e(c[h.index].els)),
              (ee = h.slides.not(b)),
              Y !== "slide" && (oe.visibility = "hidden"),
              n(ee).set(oe);
          }
        }
        function V(h, p) {
          var v = e.data(p, u);
          if (v) {
            if (U(v)) return te(v);
            s && H(v) && te(v);
          }
        }
        function te(h) {
          var p = 1,
            v = 0,
            c = 0,
            D = 0,
            W = h.maskWidth,
            O = W - h.config.edge;
          O < 0 && (O = 0),
            (h.anchors = [{ els: [], x: 0, width: 0 }]),
            h.slides.each(function (ue, oe) {
              c - v > O &&
                (p++,
                  (v += W),
                  (h.anchors[p - 1] = { els: [], x: c, width: 0 })),
                (D = e(oe).outerWidth(!0)),
                (c += D),
                (h.anchors[p - 1].width += D),
                h.anchors[p - 1].els.push(oe);
              var b = ue + 1 + " of " + h.slides.length;
              e(oe).attr("aria-label", b), e(oe).attr("role", "group");
            }),
            (h.endX = c),
            s && (h.pages = null),
            h.nav.length && h.pages !== p && ((h.pages = p), ne(h));
          var Q = h.index;
          Q >= p && (Q = p - 1), X(h, { immediate: !0, index: Q });
        }
        function ne(h) {
          var p = [],
            v,
            c = h.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var D = 0, W = h.pages; D < W; D++)
            (v = e(l)),
              v
                .attr("aria-label", "Show slide " + (D + 1) + " of " + W)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              h.nav.hasClass("w-num") && v.text(D + 1),
              c != null && v.css({ "margin-left": c, "margin-right": c }),
              p.push(v);
          h.nav.empty().append(p);
        }
        function U(h) {
          var p = h.mask.width();
          return h.maskWidth !== p ? ((h.maskWidth = p), !0) : !1;
        }
        function H(h) {
          var p = 0;
          return (
            h.slides.each(function (v, c) {
              p += e(c).outerWidth(!0);
            }),
            h.slidesWidth !== p ? ((h.slidesWidth = p), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var im = g((uX, nm) => {
    "use strict";
    var Et = Se(),
      QF = Lt();
    Et.define(
      "tabs",
      (nm.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          s = Et.env,
          a = s.safari,
          u = s(),
          l = "data-w-tab",
          _ = "data-w-pane",
          f = ".w-tabs",
          y = "w--current",
          m = "w--tab-active",
          E = QF.triggers,
          w = !1;
        (t.ready = t.design = t.preview = A),
          (t.redraw = function () {
            (w = !0), A(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(f)), i.length && (i.each(L), T());
          });
        function A() {
          (o = u && Et.env("design")),
            (i = n.find(f)),
            i.length &&
            (i.each(F), Et.env("preview") && !w && i.each(L), T(), N());
        }
        function T() {
          Et.redraw.off(t.redraw);
        }
        function N() {
          Et.redraw.on(t.redraw);
        }
        function L(B, C) {
          var I = e.data(C, f);
          I &&
            (I.links && I.links.each(E.reset),
              I.panes && I.panes.each(E.reset));
        }
        function F(B, C) {
          var I = f.substr(1) + "-" + B,
            P = e(C),
            X = e.data(C, f);
          if (
            (X || (X = e.data(C, f, { el: P, config: {} })),
              (X.current = null),
              (X.tabIdentifier = I + "-" + l),
              (X.paneIdentifier = I + "-" + _),
              (X.menu = P.children(".w-tab-menu")),
              (X.links = X.menu.children(".w-tab-link")),
              (X.content = P.children(".w-tab-content")),
              (X.panes = X.content.children(".w-tab-pane")),
              X.el.off(f),
              X.links.off(f),
              X.menu.attr("role", "tablist"),
              X.links.attr("tabindex", "-1"),
              k(X),
              !o)
          ) {
            X.links.on("click" + f, j(X)), X.links.on("keydown" + f, K(X));
            var V = X.links.filter("." + y),
              te = V.attr(l);
            te && J(X, { tab: te, immediate: !0 });
          }
        }
        function k(B) {
          var C = {};
          C.easing = B.el.attr("data-easing") || "ease";
          var I = parseInt(B.el.attr("data-duration-in"), 10);
          I = C.intro = I === I ? I : 0;
          var P = parseInt(B.el.attr("data-duration-out"), 10);
          (P = C.outro = P === P ? P : 0),
            (C.immediate = !I && !P),
            (B.config = C);
        }
        function q(B) {
          var C = B.current;
          return Array.prototype.findIndex.call(
            B.links,
            (I) => I.getAttribute(l) === C,
            null
          );
        }
        function j(B) {
          return function (C) {
            C.preventDefault();
            var I = C.currentTarget.getAttribute(l);
            I && J(B, { tab: I });
          };
        }
        function K(B) {
          return function (C) {
            var I = q(B),
              P = C.key,
              X = {
                ArrowLeft: I - 1,
                ArrowUp: I - 1,
                ArrowRight: I + 1,
                ArrowDown: I + 1,
                End: B.links.length - 1,
                Home: 0,
              };
            if (P in X) {
              C.preventDefault();
              var V = X[P];
              V === -1 && (V = B.links.length - 1),
                V === B.links.length && (V = 0);
              var te = B.links[V],
                ne = te.getAttribute(l);
              ne && J(B, { tab: ne });
            }
          };
        }
        function J(B, C) {
          C = C || {};
          var I = B.config,
            P = I.easing,
            X = C.tab;
          if (X !== B.current) {
            B.current = X;
            var V;
            B.links.each(function (v, c) {
              var D = e(c);
              if (C.immediate || I.immediate) {
                var W = B.panes[v];
                c.id || (c.id = B.tabIdentifier + "-" + v),
                  W.id || (W.id = B.paneIdentifier + "-" + v),
                  (c.href = "#" + W.id),
                  c.setAttribute("role", "tab"),
                  c.setAttribute("aria-controls", W.id),
                  c.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(l) === X
                ? ((V = c),
                  D.addClass(y)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(E.intro))
                : D.hasClass(y) &&
                D.removeClass(y)
                  .attr({ tabindex: "-1", "aria-selected": "false" })
                  .each(E.outro);
            });
            var te = [],
              ne = [];
            B.panes.each(function (v, c) {
              var D = e(c);
              c.getAttribute(l) === X
                ? te.push(c)
                : D.hasClass(m) && ne.push(c);
            });
            var U = e(te),
              H = e(ne);
            if (C.immediate || I.immediate) {
              U.addClass(m).each(E.intro),
                H.removeClass(m),
                w || Et.redraw.up();
              return;
            } else {
              var h = window.scrollX,
                p = window.scrollY;
              V.focus(), window.scrollTo(h, p);
            }
            H.length && I.outro
              ? (H.each(E.outro),
                r(H)
                  .add("opacity " + I.outro + "ms " + P, { fallback: a })
                  .start({ opacity: 0 })
                  .then(() => re(I, H, U)))
              : re(I, H, U);
          }
        }
        function re(B, C, I) {
          if (
            (C.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
              I.addClass(m).each(E.intro),
              Et.redraw.up(),
              !B.intro)
          )
            return r(I).set({ opacity: 1 });
          r(I)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + B.intro + "ms " + B.easing, { fallback: a })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  ba();
  Ia();
  Ma();
  qa();
  Ga();
  Ua();
  Lt();
  Fv();
  kv();
  Xv();
  Uv();
  Bv();
  jv();
  $v();
  Jv();
  rm();
  im();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716201106824,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716201106824,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360128331,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360128331,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360189098,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360189099,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360201354,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360201354,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360211505,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360211505,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1716360801299,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716360801299,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|18e01387-4d46-8e6a-1951-f8d6628c28e5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|18e01387-4d46-8e6a-1951-f8d6628c28e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715923319713,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|742a78fd-c84b-af2b-1b74-aec38cf08e9c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|742a78fd-c84b-af2b-1b74-aec38cf08e9c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715923319713,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716437977303,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716437977304,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716440379201,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716440379201,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441113875,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441113876,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441314812,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441314813,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441337096,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716441337097,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716445806215,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716445806215,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716451269551,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716451269551,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716456699284,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716456699284,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715942860219,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715942860220,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532388542,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532388542,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532389091,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532389091,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532389575,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532389575,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532390141,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532390141,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532390655,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716532390655,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-138": {
      id: "e-138",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-140": {
      id: "e-140",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-139",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716540359156,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716541112815,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716541112815,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716546679801,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716546679801,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552774817,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552774817,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552775622,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552775622,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552776135,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552776135,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552776822,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-155",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552776822,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552777246,
    },
    "e-158": {
      id: "e-158",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-157",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552777246,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552777678,
    },
    "e-160": {
      id: "e-160",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552777678,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778085,
    },
    "e-162": {
      id: "e-162",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-161",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778085,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778510,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778510,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778950,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-165",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552778950,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552779377,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552779377,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552779758,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552779758,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552780187,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-171",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716552780187,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-190": {
      id: "e-190",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-192": {
      id: "e-192",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-191",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-194": {
      id: "e-194",
      name: "",
      animationType: "preset",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-193",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716615376689,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630449037,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-213",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630449038,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630544823,
    },
    "e-216": {
      id: "e-216",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-215",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630544824,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630575680,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630575709,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630590599,
    },
    "e-220": {
      id: "e-220",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716630590600,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-222",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631022335,
    },
    "e-222": {
      id: "e-222",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-221",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631022336,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-224",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631107511,
    },
    "e-224": {
      id: "e-224",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-223",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631107512,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-226",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631123982,
    },
    "e-226": {
      id: "e-226",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-225",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631123983,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-228",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631149095,
    },
    "e-228": {
      id: "e-228",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-227",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631149096,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-230",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631824805,
    },
    "e-230": {
      id: "e-230",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-229",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716631824806,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632387952,
    },
    "e-232": {
      id: "e-232",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632387953,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632473277,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632473278,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632489076,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632489077,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632501151,
    },
    "e-238": {
      id: "e-238",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632501180,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632514390,
    },
    "e-240": {
      id: "e-240",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632514391,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-242",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632525688,
    },
    "e-242": {
      id: "e-242",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-241",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632525963,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632538950,
    },
    "e-244": {
      id: "e-244",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632538951,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-261",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-264",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-264": {
      id: "e-264",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-263",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-270": {
      id: "e-270",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716632563569,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-278": {
      id: "e-278",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-277",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-280": {
      id: "e-280",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-279",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-286": {
      id: "e-286",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-296": {
      id: "e-296",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-298": {
      id: "e-298",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-300": {
      id: "e-300",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-299",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634027801,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634407073,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634407075,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634429425,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634429426,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634445175,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716634445204,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716968032051,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716968032051,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716981754209,
    },
    "e-312": {
      id: "e-312",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-311",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716981754210,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716982312091,
    },
    "e-314": {
      id: "e-314",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-313",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716982312093,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983279597,
    },
    "e-316": {
      id: "e-316",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-315",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983279598,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983290884,
    },
    "e-318": {
      id: "e-318",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-317",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983290887,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1716983439581,
    },
    "e-320": {
      id: "e-320",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-319",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983439583,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983642326,
    },
    "e-322": {
      id: "e-322",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-321",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983642328,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983771964,
    },
    "e-324": {
      id: "e-324",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-323",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983771965,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-326",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983786563,
    },
    "e-326": {
      id: "e-326",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-325",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983786565,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983955276,
    },
    "e-328": {
      id: "e-328",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-327",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983955277,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983971628,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-329",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716983971629,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151097834,
    },
    "e-332": {
      id: "e-332",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-331",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151097836,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151231457,
    },
    "e-334": {
      id: "e-334",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151231458,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-336",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151261054,
    },
    "e-336": {
      id: "e-336",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-335",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1717151261056,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|ef30abb9-6932-6a46-f8a8-d168f5a63277",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|ef30abb9-6932-6a46-f8a8-d168f5a63277",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718262599918,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|a79644be-5be4-26f2-8498-8fe488d91e08",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|a79644be-5be4-26f2-8498-8fe488d91e08",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1718262608978,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|06621418-d6bb-7ca0-15ec-629dc18b9aab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|06621418-d6bb-7ca0-15ec-629dc18b9aab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262617681,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|caf1ff26-2bf2-0bd5-d83c-d1c6daf227ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|caf1ff26-2bf2-0bd5-d83c-d1c6daf227ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262659972,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262672627,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9807520c-65b7-e828-71bd-909a6cfe1804",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9807520c-65b7-e828-71bd-909a6cfe1804",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262714108,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9807520c-65b7-e828-71bd-909a6cfe1801",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9807520c-65b7-e828-71bd-909a6cfe1801",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262735762,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47214|4d1494cd-2540-49d1-21fa-fe6893df2a13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47214|4d1494cd-2540-49d1-21fa-fe6893df2a13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262761216,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47214|5a6f3651-79ca-2810-51c6-38dfb55e81c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47214|5a6f3651-79ca-2810-51c6-38dfb55e81c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262770514,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|3cfb94a2-272e-6feb-92ff-50daad6fc9ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|3cfb94a2-272e-6feb-92ff-50daad6fc9ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262800618,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|1cd81e9b-b16c-09d8-e9a4-32450510748f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|1cd81e9b-b16c-09d8-e9a4-32450510748f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718262827770,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|748f0872-c4df-86e5-aebc-1ada7a3468e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|748f0872-c4df-86e5-aebc-1ada7a3468e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1718262844909,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262874439,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|c45c1248-442f-bd61-9d0f-37c04d6ef6d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|c45c1248-442f-bd61-9d0f-37c04d6ef6d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262888308,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-368" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|934a11b2-7d2b-e11b-f2b5-dfd2864de64e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|934a11b2-7d2b-e11b-f2b5-dfd2864de64e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262900756,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262909437,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|07eba158-492e-175e-895b-f04e3bb68525",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|07eba158-492e-175e-895b-f04e3bb68525",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262940612,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47215|0a466629-f086-71d9-8def-c7632ab41053",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47215|0a466629-f086-71d9-8def-c7632ab41053",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262953748,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd47219|51506210-a64a-fa97-8e8d-e5a7be8b24c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd47219|51506210-a64a-fa97-8e8d-e5a7be8b24c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262970493,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|3b43402a-582b-62fc-ede0-894cbb577907",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|3b43402a-582b-62fc-ede0-894cbb577907",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262986373,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|4da009e8-fcfd-7767-f650-141b92a26e77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|4da009e8-fcfd-7767-f650-141b92a26e77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718262993992,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-382" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|437de16c-1705-bf2d-e9fb-edeecb11fef6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|437de16c-1705-bf2d-e9fb-edeecb11fef6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263003862,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|d46c37d5-6fad-1564-50c5-cf30818fe716",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|d46c37d5-6fad-1564-50c5-cf30818fe716",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263020673,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-390" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|2968ded2-dbba-13e1-d6ac-732af799a4a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|2968ded2-dbba-13e1-d6ac-732af799a4a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263063229,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|f4bb15b3-83f8-89ca-3cec-9417130b4854",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|f4bb15b3-83f8-89ca-3cec-9417130b4854",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263071417,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-394" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|51a742a4-964a-7100-4fbf-61cae26d0e35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|51a742a4-964a-7100-4fbf-61cae26d0e35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263085351,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-396" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|35b2d355-c252-88d2-5eba-af273bbf404e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|35b2d355-c252-88d2-5eba-af273bbf404e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263093934,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-398" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18ffee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18ffee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263126814,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-400" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|69c439e3-9f81-a260-bba1-b37b24b2a1af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|69c439e3-9f81-a260-bba1-b37b24b2a1af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263145103,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|fca8396e-99fc-7b91-5c00-1a7d3a088456",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|fca8396e-99fc-7b91-5c00-1a7d3a088456",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263176905,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|f6137ff7-4c14-6989-0d24-123b8da78d49",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|f6137ff7-4c14-6989-0d24-123b8da78d49",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263199599,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|a7db57ba-b2b5-b80b-8804-7026112b7b58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|a7db57ba-b2b5-b80b-8804-7026112b7b58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263207079,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|622d00b6-4c27-8f2f-8c21-bd7e18ace6fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|622d00b6-4c27-8f2f-8c21-bd7e18ace6fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263216863,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|9ae087bc-2bf1-fd97-ff52-c04f8db44ed6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|9ae087bc-2bf1-fd97-ff52-c04f8db44ed6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263227136,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|37d1d56a-56cb-22fb-c695-2d2345f20197",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|37d1d56a-56cb-22fb-c695-2d2345f20197",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263239632,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|024bd3f4-2fbb-8bf9-ae4f-152c6b49a343",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|024bd3f4-2fbb-8bf9-ae4f-152c6b49a343",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263247850,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-416" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|c4e574ac-8f5d-4e47-4069-ceb353fc13ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|c4e574ac-8f5d-4e47-4069-ceb353fc13ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263257072,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-418" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|fd87bd76-358f-6780-7769-fb23eae47cde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|fd87bd76-358f-6780-7769-fb23eae47cde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263269113,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cb827c2522c910072cc|d94eb5f3-f432-aef6-76a6-6adea49aa256",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cb827c2522c910072cc|d94eb5f3-f432-aef6-76a6-6adea49aa256",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263281564,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|bebb3873-7c02-b5a7-15ea-c708f44cdf5f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|bebb3873-7c02-b5a7-15ea-c708f44cdf5f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263304624,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-424" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263326528,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-426" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263338128,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-428" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263348340,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-430" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263360439,
    },
    "e-431": {
      id: "e-431",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-432" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718263371799,
    },
    "e-433": {
      id: "e-433",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-434" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|6b6df9c7-e63c-ae4d-3892-32a6782d1c4e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|6b6df9c7-e63c-ae4d-3892-32a6782d1c4e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263383117,
    },
    "e-435": {
      id: "e-435",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-436" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|6fb62b58-d04c-4b18-206f-d494b2a74a06",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|6fb62b58-d04c-4b18-206f-d494b2a74a06",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263400617,
    },
    "e-437": {
      id: "e-437",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-438" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|a309b0ae-d68a-3f8d-cb29-f57cbc70b52c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|a309b0ae-d68a-3f8d-cb29-f57cbc70b52c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263414306,
    },
    "e-439": {
      id: "e-439",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-440" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|04361781-a6b3-b95e-e5cb-ddac63d3d567",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|04361781-a6b3-b95e-e5cb-ddac63d3d567",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263421635,
    },
    "e-441": {
      id: "e-441",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-442" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d14f48328e2b8e67d68|35567c8f-89e5-1624-1509-47fcbbffc938",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d14f48328e2b8e67d68|35567c8f-89e5-1624-1509-47fcbbffc938",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263429059,
    },
    "e-443": {
      id: "e-443",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-444" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|38a6a120-d427-dd67-3012-e334ca1e6575",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|38a6a120-d427-dd67-3012-e334ca1e6575",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263461012,
    },
    "e-445": {
      id: "e-445",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-446" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263472596,
    },
    "e-447": {
      id: "e-447",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-448" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263482779,
    },
    "e-449": {
      id: "e-449",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-450" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263491674,
    },
    "e-451": {
      id: "e-451",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-452" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f613",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f613",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263503778,
    },
    "e-453": {
      id: "e-453",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-454" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f617",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f617",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263517811,
    },
    "e-455": {
      id: "e-455",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-456" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|7dac627e-bd2e-9f3b-2281-d86d3c1fb2a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|7dac627e-bd2e-9f3b-2281-d86d3c1fb2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263528729,
    },
    "e-457": {
      id: "e-457",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-458" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|787703af-b548-2eb3-24f4-fc70a37b6324",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|787703af-b548-2eb3-24f4-fc70a37b6324",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263537553,
    },
    "e-459": {
      id: "e-459",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-460" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|323aaa03-185b-c800-2fbc-943658198bf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|323aaa03-185b-c800-2fbc-943658198bf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263547906,
    },
    "e-461": {
      id: "e-461",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-462" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263562219,
    },
    "e-463": {
      id: "e-463",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-464" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|0d968355-2376-6560-0363-3b2a4a08413a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|0d968355-2376-6560-0363-3b2a4a08413a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263580339,
    },
    "e-465": {
      id: "e-465",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-466" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916997",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916997",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263592347,
    },
    "e-467": {
      id: "e-467",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-468" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263629678,
    },
    "e-469": {
      id: "e-469",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-470" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3cc9b8ca62a7826fd802|589664f0-8594-5e64-8a13-a3238a24df32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3cc9b8ca62a7826fd802|589664f0-8594-5e64-8a13-a3238a24df32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263646932,
    },
    "e-475": {
      id: "e-475",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-476" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|081409aa-e748-9f25-ba02-79de2d51566f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|081409aa-e748-9f25-ba02-79de2d51566f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263690957,
    },
    "e-477": {
      id: "e-477",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-478" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|49a37429-5d36-acfa-07b7-3bf469bd3432",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|49a37429-5d36-acfa-07b7-3bf469bd3432",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263705508,
    },
    "e-479": {
      id: "e-479",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-480" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|ae51c95a-058b-9168-a227-8708e27fa740",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|ae51c95a-058b-9168-a227-8708e27fa740",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263733980,
    },
    "e-481": {
      id: "e-481",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-482" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|cc1d4aef-c2e2-d738-b068-39077be3f716",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|cc1d4aef-c2e2-d738-b068-39077be3f716",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263742860,
    },
    "e-483": {
      id: "e-483",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-484" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|88058f69-d218-d873-71a0-3f19dde8efda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|88058f69-d218-d873-71a0-3f19dde8efda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263750964,
    },
    "e-485": {
      id: "e-485",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-486" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|1c237287-a737-fbd3-8bf7-3961a9b16c46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|1c237287-a737-fbd3-8bf7-3961a9b16c46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263761941,
    },
    "e-487": {
      id: "e-487",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-488" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|67877755-80f0-1cf6-602b-c11976010ef2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|67877755-80f0-1cf6-602b-c11976010ef2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263779021,
    },
    "e-489": {
      id: "e-489",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-490" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|411b3886-e1ea-1d78-f49f-87e8914482bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|411b3886-e1ea-1d78-f49f-87e8914482bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263800797,
    },
    "e-491": {
      id: "e-491",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-492" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|b99c4a3d-cb1a-1fe6-197d-47d13cd3493f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|b99c4a3d-cb1a-1fe6-197d-47d13cd3493f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263811089,
    },
    "e-493": {
      id: "e-493",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-494" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263823048,
    },
    "e-495": {
      id: "e-495",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-496" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|064f1ee3-f684-ee93-90fb-b8cc0504bf1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|064f1ee3-f684-ee93-90fb-b8cc0504bf1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263835670,
    },
    "e-497": {
      id: "e-497",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-498" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|259c1fcf-a470-2304-38c5-c4d3428a54fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|259c1fcf-a470-2304-38c5-c4d3428a54fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263847990,
    },
    "e-499": {
      id: "e-499",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-500" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|e4dd9b03-d9f6-f754-63db-18dd23bcb795",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|e4dd9b03-d9f6-f754-63db-18dd23bcb795",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263865174,
    },
    "e-501": {
      id: "e-501",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-502" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|dc47f25e-3a5f-8bbe-4e38-e9df2b695bd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|dc47f25e-3a5f-8bbe-4e38-e9df2b695bd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263876546,
    },
    "e-503": {
      id: "e-503",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-504" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|48679e5e-8a08-b825-c0d2-b7485a8deb3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|48679e5e-8a08-b825-c0d2-b7485a8deb3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263906426,
    },
    "e-505": {
      id: "e-505",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-506" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|b10825d0-00f2-7906-1195-250a05d1ac89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|b10825d0-00f2-7906-1195-250a05d1ac89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263923240,
    },
    "e-507": {
      id: "e-507",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-508" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|0d033437-ddd3-07e7-a0d5-1cdfa9897e54",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|0d033437-ddd3-07e7-a0d5-1cdfa9897e54",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263933434,
    },
    "e-509": {
      id: "e-509",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-510" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|a634f175-74ec-307a-7a11-5c5f700b3b40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|a634f175-74ec-307a-7a11-5c5f700b3b40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263946664,
    },
    "e-511": {
      id: "e-511",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-512" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|839c8eb6-5292-f26e-be1d-67df768bacc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|839c8eb6-5292-f26e-be1d-67df768bacc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263960914,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-514" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|0d3da4f7-deee-5231-9990-3287f5a77dd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|0d3da4f7-deee-5231-9990-3287f5a77dd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263973441,
    },
    "e-515": {
      id: "e-515",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-516" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263982440,
    },
    "e-517": {
      id: "e-517",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-518" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718263994023,
    },
    "e-519": {
      id: "e-519",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-520" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|ea37dbc2-88d3-ed0e-adcf-828ab4cb2f40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|ea37dbc2-88d3-ed0e-adcf-828ab4cb2f40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264009760,
    },
    "e-523": {
      id: "e-523",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-524" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|125fc3b4-4dcf-7957-1678-9a532f84a30a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|125fc3b4-4dcf-7957-1678-9a532f84a30a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264030065,
    },
    "e-529": {
      id: "e-529",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-530" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|57d76187-7b18-ea04-117c-eacedbd59057",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|57d76187-7b18-ea04-117c-eacedbd59057",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264076055,
    },
    "e-531": {
      id: "e-531",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-532" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|1602f84e-e6a1-a96a-3e98-11ec2b0fa2cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|1602f84e-e6a1-a96a-3e98-11ec2b0fa2cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264087087,
    },
    "e-533": {
      id: "e-533",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-534" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399854",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399854",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264098495,
    },
    "e-535": {
      id: "e-535",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-536" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|68dbbe75-3c09-0de2-2acb-62c8ada6a03c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|68dbbe75-3c09-0de2-2acb-62c8ada6a03c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264115886,
    },
    "e-537": {
      id: "e-537",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-538" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|c291018a-df91-d7f1-187e-03fe6644aa3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|c291018a-df91-d7f1-187e-03fe6644aa3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264130602,
    },
    "e-539": {
      id: "e-539",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-540" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264152903,
    },
    "e-541": {
      id: "e-541",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-542" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e083",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e083",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264168895,
    },
    "e-543": {
      id: "e-543",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-544" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|d4bf2931-d444-19de-89bc-1fc388f7311e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|d4bf2931-d444-19de-89bc-1fc388f7311e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264181805,
    },
    "e-545": {
      id: "e-545",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-546" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|9509a71e-2fdf-6eb0-2480-99effe088f94",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|9509a71e-2fdf-6eb0-2480-99effe088f94",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264193477,
    },
    "e-547": {
      id: "e-547",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-548" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|15199b90-fa33-7427-a45c-0a45564f28b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|15199b90-fa33-7427-a45c-0a45564f28b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264214151,
    },
    "e-549": {
      id: "e-549",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-550" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|75cc54a2-184f-aac3-b01c-46336253572f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|75cc54a2-184f-aac3-b01c-46336253572f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264300877,
    },
    "e-551": {
      id: "e-551",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-552" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|ec41c649-9964-886f-e8b8-060864a2d0ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|ec41c649-9964-886f-e8b8-060864a2d0ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264310246,
    },
    "e-553": {
      id: "e-553",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-554" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b106f1e305b850bd4720e|607726a4-1da8-5bc3-4b3a-3da2eb9bf5a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b106f1e305b850bd4720e|607726a4-1da8-5bc3-4b3a-3da2eb9bf5a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264335772,
    },
    "e-555": {
      id: "e-555",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-556" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|435c44ca-5090-b7b2-2429-edd4620bddde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|435c44ca-5090-b7b2-2429-edd4620bddde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264740816,
    },
    "e-559": {
      id: "e-559",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-560" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c953e135737715128a0|901c9dba-72ea-9381-8dc8-547268ae4dca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c953e135737715128a0|901c9dba-72ea-9381-8dc8-547268ae4dca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264770135,
    },
    "e-561": {
      id: "e-561",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-562" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|d371ee1c-3e18-68e1-0947-adea0bff45a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|d371ee1c-3e18-68e1-0947-adea0bff45a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718264979356,
    },
    "e-563": {
      id: "e-563",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-564" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3ca49829d6b151d13b85|d298b79f-995d-b0a1-6c43-716ef8d66242",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3ca49829d6b151d13b85|d298b79f-995d-b0a1-6c43-716ef8d66242",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1718264991540,
    },
    "e-565": {
      id: "e-565",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-566",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273507160,
    },
    "e-566": {
      id: "e-566",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-565",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273507191,
    },
    "e-573": {
      id: "e-573",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-574",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273609435,
    },
    "e-574": {
      id: "e-574",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-573",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273609435,
    },
    "e-575": {
      id: "e-575",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-576",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273630977,
    },
    "e-576": {
      id: "e-576",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-575",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273630977,
    },
    "e-577": {
      id: "e-577",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-578",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273643592,
    },
    "e-578": {
      id: "e-578",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-577",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718273643592,
    },
    "e-579": {
      id: "e-579",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-580" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|55e2ca58-2c7a-bc44-2223-9943f93dd140",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664b3c87e3be7883cb5c5472|55e2ca58-2c7a-bc44-2223-9943f93dd140",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718276274868,
    },
    "e-581": {
      id: "e-581",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-582" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718337170994,
    },
    "e-583": {
      id: "e-583",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-584" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|e8bc833b-3dec-11cd-6581-602e28097f43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|e8bc833b-3dec-11cd-6581-602e28097f43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718340959656,
    },
    "e-585": {
      id: "e-585",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-586" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf829b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf829b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718341484441,
    },
    "e-587": {
      id: "e-587",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-588" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870967",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870967",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1718341484962,
    },
    "e-589": {
      id: "e-589",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-590" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|921deaac-0463-dcce-965e-92a317924bc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|921deaac-0463-dcce-965e-92a317924bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343151562,
    },
    "e-591": {
      id: "e-591",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-592" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|042f11f0-eae4-6293-e729-22dbeb302f2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|042f11f0-eae4-6293-e729-22dbeb302f2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343165760,
    },
    "e-593": {
      id: "e-593",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-594" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343181804,
    },
    "e-595": {
      id: "e-595",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-596" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|b0b5a6a3-c3ba-60cc-fb9d-3d182234c4a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|b0b5a6a3-c3ba-60cc-fb9d-3d182234c4a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343945776,
    },
    "e-597": {
      id: "e-597",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-598" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|d3b285b2-69bf-5b9e-9d9c-4abfe385a949",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|d3b285b2-69bf-5b9e-9d9c-4abfe385a949",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343959200,
    },
    "e-599": {
      id: "e-599",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-600" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870963",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870963",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343972216,
    },
    "e-601": {
      id: "e-601",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-602" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf8297",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf8297",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718343983842,
    },
    "e-603": {
      id: "e-603",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-604" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666bb1fc3300a64c63135d21|1ea8aba9-8585-aaf1-d7be-65bb0c16d47c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666bb1fc3300a64c63135d21|1ea8aba9-8585-aaf1-d7be-65bb0c16d47c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718344061431,
    },
    "e-605": {
      id: "e-605",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-606",
        },
      },
      mediaQueries: ["main"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727695644370,
    },
    "e-606": {
      id: "e-606",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-605",
        },
      },
      mediaQueries: ["main"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727695644373,
    },
    "e-607": {
      id: "e-607",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-608",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|21faddf9-2fa8-d7ce-691d-0d7223a4203d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727698534899,
    },
    "e-608": {
      id: "e-608",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-607",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664b3c87e3be7883cb5c5472|21faddf9-2fa8-d7ce-691d-0d7223a4203d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727698534899,
    },
    "e-609": {
      id: "e-609",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-610",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727699487416,
    },
    "e-610": {
      id: "e-610",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-609",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727699487420,
    },
  },
  actionLists: {
    "a-3": {
      id: "a-3",
      title: "Dropdown [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: -15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684479538925,
    },
    "a-4": {
      id: "a-4",
      title: "Dropdown [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1684479538925,
    },
    "a-7": {
      id: "a-7",
      title: "Service Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-service-image-wrap",
                  selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-service-image-wrap",
                  selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716360131338,
    },
    "a-8": {
      id: "a-8",
      title: "Service Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-service-image-wrap",
                  selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-link-white",
                  selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716360131338,
    },
    "a-9": {
      id: "a-9",
      title: "Button Hover [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716360807978,
    },
    "a-10": {
      id: "a-10",
      title: "Button Hover [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon",
                  selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716360807978,
    },
    "a-11": {
      id: "a-11",
      title: "Gallery Marquee [Left to Right]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-marquee-list",
                  selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-marquee-list",
                  selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"],
                },
                xValue: -1512,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-marquee-list",
                  selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712053097256,
    },
    "a-12": {
      id: "a-12",
      title: "Client Marquee [Left to Right]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-marquee-list",
                  selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 20000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-marquee-list",
                  selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"],
                },
                xValue: -1512,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 20000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-marquee-list",
                  selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712053097256,
    },
    "a-13": {
      id: "a-13",
      title: "Team Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-overlay",
                  selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social",
                  selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-overlay",
                  selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"],
                },
                value: 0.6,
                unit: "",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social",
                  selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-13-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716437981108,
    },
    "a-14": {
      id: "a-14",
      title: "Team Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-overlay",
                  selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social",
                  selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716437981108,
    },
    "a-15": {
      id: "a-15",
      title: "Blog Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716441118083,
    },
    "a-16": {
      id: "a-16",
      title: "Blog Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716441118083,
    },
    "a-17": {
      id: "a-17",
      title: "Project Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-project-image",
                  selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-detail-image",
                  selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slider-overlay",
                  selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-project-image",
                  selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-detail-image",
                  selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-17-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slider-overlay",
                  selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"],
                },
                value: 0.6,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716445811255,
    },
    "a-18": {
      id: "a-18",
      title: "Project Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".simple-project-image",
                  selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-detail-image",
                  selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slider-overlay",
                  selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716445811255,
    },
    "a-19": {
      id: "a-19",
      title: "ðŸª— Accordion [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content-wrap",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon-minus",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content-wrap",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-19-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon-minus",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649057594510,
    },
    "a-20": {
      id: "a-20",
      title: "ðŸª— Accordion [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content-wrap",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-20-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon-minus",
                  selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649057930494,
    },
    "a-21": {
      id: "a-21",
      title: "Our Client Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-overlay",
                  selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-overlay",
                  selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716551078513,
    },
    "a-22": {
      id: "a-22",
      title: "Our Client Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-overlay",
                  selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716551078513,
    },
    "a-23": {
      id: "a-23",
      title: "Project Slide In View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-image-wrap",
                  selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-item",
                  selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"],
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 1800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-image-wrap",
                  selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 1800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-item",
                  selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716613894081,
    },
    "a-24": {
      id: "a-24",
      title: "Project Slide Out View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-image-wrap",
                  selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-slide-item",
                  selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716613894081,
    },
    "a-27": {
      id: "a-27",
      title: "Service Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-image",
                  selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-image",
                  selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716630455206,
    },
    "a-28": {
      id: "a-28",
      title: "Service Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-image",
                  selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716630455206,
    },
    "a-29": {
      id: "a-29",
      title: "Gallery Image Hover [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-image",
                  selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-image",
                  selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716632391345,
    },
    "a-30": {
      id: "a-30",
      title: "Gallery Image Hover [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gallery-image",
                  selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716632391345,
    },
    "a-31": {
      id: "a-31",
      title: "Arrow Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-dark",
                  selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-dark",
                  selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-light",
                  selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-light",
                  selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-dark",
                  selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-dark",
                  selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-light",
                  selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-light",
                  selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716981757754,
    },
    "a-32": {
      id: "a-32",
      title: "Arrow Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-dark",
                  selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-dark",
                  selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".left-arrow-icon-light",
                  selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".right-arrow-icon-light",
                  selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716981757754,
    },
    "a-33": {
      id: "a-33",
      title: "Map Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-titles",
                  selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-titles",
                  selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1717151100622,
    },
    "a-34": {
      id: "a-34",
      title: "Map Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-titles",
                  selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1717151100622,
    },
    "a-25": {
      id: "a-25",
      title: "Project Hover [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".project-image-wrap",
                  selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-title-wrap",
                  selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".project-image-wrap",
                  selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-title-wrap",
                  selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"],
                },
                value: 0.4,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716623383711,
    },
    "a-26": {
      id: "a-26",
      title: "Project Hover [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".project-image-wrap",
                  selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-title-wrap",
                  selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716623383711,
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
