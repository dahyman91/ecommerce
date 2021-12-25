(this["webpackJsonpreact-rails-api-project-template-client"] =
  this["webpackJsonpreact-rails-api-project-template-client"] || []).push([
  [0],
  {
    128: function (e, t, n) {},
    129: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        a = n.n(c),
        r = n(41),
        i = n.n(r),
        s = n(36),
        o = n(13),
        j = n(188),
        l = n(190),
        d = n(179),
        b = n(183),
        u = n(194),
        h = n(189),
        x = n(196),
        O = n(90),
        p = n.n(O),
        m = n(193),
        g = n(195),
        f = n(100),
        v = n(192),
        y = n(2);
      function w(e) {
        var t = e.setUrl;
        return (
          Object(c.useEffect)(
            function () {
              t("/login");
            },
            [t]
          ),
          Object(y.jsxs)(m.a, {
            variant: "body2",
            color: "text.secondary",
            align: "center",
            children: [
              "No Copyright \xa9 ",
              Object(y.jsx)(u.a, {
                color: "inherit",
                href: "https://mui.com/",
                children: "Store",
              }),
              " ",
              new Date().getFullYear(),
              ".",
            ],
          })
        );
      }
      var C = Object(f.a)();
      function S() {
        var e = Object(c.useState)(""),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(c.useState)(""),
          i = Object(o.a)(r, 2),
          s = i[0],
          O = i[1],
          f = Object(c.useState)(""),
          S = Object(o.a)(f, 2),
          k = S[0],
          P = S[1],
          I = Object(c.useState)(""),
          N = Object(o.a)(I, 2),
          E = N[0],
          U = N[1];
        return Object(y.jsx)(v.a, {
          theme: C,
          children: Object(y.jsxs)(g.a, {
            component: "main",
            maxWidth: "xs",
            children: [
              Object(y.jsx)(d.a, {}),
              Object(y.jsxs)(x.a, {
                sx: {
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                children: [
                  Object(y.jsx)(j.a, {
                    sx: { m: 1, bgcolor: "secondary.main" },
                    children: Object(y.jsx)(p.a, {}),
                  }),
                  Object(y.jsx)(m.a, {
                    component: "h1",
                    variant: "h5",
                    children: "Sign up",
                  }),
                  Object(y.jsxs)(x.a, {
                    component: "form",
                    noValidate: !0,
                    onSubmit: function (e) {
                      e.preventDefault(),
                        console.log(n),
                        console.log(s),
                        console.log(k),
                        console.log(E);
                    },
                    sx: { mt: 3 },
                    children: [
                      Object(y.jsxs)(h.a, {
                        container: !0,
                        spacing: 2,
                        children: [
                          Object(y.jsx)(h.a, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: Object(y.jsx)(b.a, {
                              onChange: function (e) {
                                return a(e.target.value);
                              },
                              value: n,
                              autoComplete: "given-name",
                              name: "firstName",
                              required: !0,
                              fullWidth: !0,
                              id: "firstName",
                              label: "First Name",
                              autoFocus: !0,
                            }),
                          }),
                          Object(y.jsx)(h.a, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: Object(y.jsx)(b.a, {
                              onChange: function (e) {
                                return O(e.target.value);
                              },
                              value: s,
                              required: !0,
                              fullWidth: !0,
                              id: "lastName",
                              label: "Last Name",
                              name: "lastName",
                              autoComplete: "family-name",
                            }),
                          }),
                          Object(y.jsx)(h.a, {
                            item: !0,
                            xs: 12,
                            children: Object(y.jsx)(b.a, {
                              onChange: function (e) {
                                return P(e.target.value);
                              },
                              value: k,
                              required: !0,
                              fullWidth: !0,
                              id: "email",
                              label: "Email Address",
                              name: "email",
                              autoComplete: "email",
                            }),
                          }),
                          Object(y.jsx)(h.a, {
                            item: !0,
                            xs: 12,
                            children: Object(y.jsx)(b.a, {
                              onChange: function (e) {
                                return U(e.target.value);
                              },
                              value: E,
                              required: !0,
                              fullWidth: !0,
                              name: "password",
                              label: "Password",
                              type: "password",
                              id: "password",
                              autoComplete: "new-password",
                            }),
                          }),
                        ],
                      }),
                      Object(y.jsx)(l.a, {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        sx: { mt: 3, mb: 2 },
                        children: "Sign Up",
                      }),
                      Object(y.jsx)(h.a, {
                        container: !0,
                        justifyContent: "center",
                        children: Object(y.jsx)(h.a, {
                          item: !0,
                          children: Object(y.jsx)(u.a, {
                            href: "/log-in",
                            variant: "body2",
                            children: "Already have an account? Sign in",
                          }),
                        }),
                      }),
                      Object(y.jsx)(h.a, {
                        container: !0,
                        justifyContent: "center",
                        children: Object(y.jsx)(u.a, {
                          href: "/home",
                          variant: "body2",
                          children: "Continue as Guest",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(y.jsx)(w, { sx: { mt: 5 } }),
            ],
          }),
        });
      }
      var k = n(16);
      var P = function (e) {
          var t = e.setUrl;
          return (
            Object(c.useEffect)(
              function () {
                t("/log-in");
              },
              [t]
            ),
            Object(y.jsx)("div", { children: "Log In" })
          );
        },
        I = n(58),
        N = n.p + "static/media/photo.c791112d.jpeg",
        E = {
          fontFamily: "sans-serif",
          textAlign: "center",
          width: "80%",
          margin: "auto",
        },
        U = {
          background: "white",
          borderRadius: "10px",
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        };
      var W = function (e) {
        var t = e.setUrl,
          n = Object(k.f)().product;
        return (
          Object(c.useEffect)(
            function () {
              t("/products/".concat(n));
            },
            [t, n]
          ),
          Object(y.jsx)(y.Fragment, {
            children: Object(y.jsxs)("div", {
              style: E,
              children: [
                Object(y.jsx)(I.Parallax, {
                  bgImage: N,
                  strength: 500,
                  children: Object(y.jsx)("div", {
                    style: { height: 500 },
                    children: Object(y.jsxs)("div", {
                      children: [
                        Object(y.jsx)("h3", { children: n }),
                        Object(y.jsxs)(l.a, {
                          style: U,
                          variant: "outlined",
                          children: ["Buy ", n],
                        }),
                      ],
                    }),
                  }),
                }),
                Object(y.jsx)("h2", { children: n }),
                Object(y.jsx)(I.Parallax, {
                  bgImage: [N],
                  strength: 200,
                  renderLayer: function (e) {
                    return Object(y.jsx)("div", {
                      children: Object(y.jsx)("div", {
                        style: {
                          position: "absolute",
                          background: "rgba(255, 125, 0, ".concat(1.2 * e, ")"),
                          left: "50%",
                          top: "50%",
                          borderRadius: "50%",
                          transform: "translate(-50%,-50%)",
                          width: 700 * e,
                          height: 700 * e,
                        },
                      }),
                    });
                  },
                  children: Object(y.jsx)("div", {
                    style: { height: 500 },
                    children: Object(y.jsx)("div", {
                      style: U,
                      children: "renderProp",
                    }),
                  }),
                }),
                Object(y.jsx)(I.Parallax, {
                  strength: 500,
                  children: Object(y.jsx)(I.Background, {
                    className: "custom-bg",
                    children: Object(y.jsx)("div", {
                      style: {
                        height: 2e3,
                        width: 2e3,
                        backgroundImage:
                          "url('https://i.imgur.com/8CV5WAB.png')",
                      },
                    }),
                  }),
                }),
                Object(y.jsx)("div", { style: { height: 500 } }),
              ],
            }),
          })
        );
      };
      var A = function (e) {
          var t = e.products,
            n = e.url,
            a = e.setUrl;
          return (
            Object(c.useEffect)(
              function () {
                a("/products");
              },
              [n, a]
            ),
            Object(y.jsx)("ul", {
              style: { paddingTop: "75px" },
              children: t.map(function (e) {
                return Object(y.jsx)(
                  "li",
                  {
                    children: Object(y.jsx)(u.a, {
                      href: "/products/".concat(e.id),
                      variant: "body2",
                      children: e.name,
                    }),
                  },
                  e.id
                );
              }),
            })
          );
        },
        B = n(80),
        F = n(5),
        L = n(191),
        D = n(197),
        q = n(200),
        R = n(186),
        T = n(198),
        z = n(199),
        G = n(99),
        J = n.n(G),
        M = n(95),
        V = n.n(M),
        K = n(94),
        Y = n.n(K),
        H = n(92),
        Q = n.n(H),
        X = n(93),
        Z = n.n(X),
        $ = n(96),
        _ = n.n($),
        ee = n(201),
        te = n(202),
        ne = n(203),
        ce = n(97),
        ae = n.n(ce),
        re = n(4),
        ie = n(175),
        se = n(20),
        oe = n(98),
        je = n.n(oe),
        le = Object(re.a)("div")(function (e) {
          var t = e.theme;
          return Object(F.a)(
            {
              position: "relative",
              borderRadius: t.shape.borderRadius,
              backgroundColor: Object(ie.a)(t.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: Object(ie.a)(t.palette.common.white, 0.25),
              },
              marginLeft: 0,
              width: "100%",
            },
            t.breakpoints.up("sm"),
            { marginLeft: t.spacing(2), width: "auto" }
          );
        }),
        de = Object(re.a)(se.c)(function (e) {
          var t = e.theme;
          return {
            color: "inherit",
            "& .MuiInputBase-input": Object(F.a)(
              {
                padding: t.spacing(1, 1, 1, 0),
                paddingLeft: "calc(1em + ".concat(t.spacing(4), ")"),
                transition: t.transitions.create("width"),
                width: "100%",
              },
              t.breakpoints.up("sm"),
              { width: "12ch", "&:focus": { width: "20ch" } }
            ),
          };
        }),
        be = Object(re.a)("div")(function (e) {
          return {
            padding: e.theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          };
        });
      function ue() {
        var e = c.useState({ top: !1, left: !1, bottom: !1, right: !1 }),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          r = function (e, t) {
            return function (c) {
              ("keydown" !== c.type ||
                ("Tab" !== c.key && "Shift" !== c.key)) &&
                a(Object(B.a)(Object(B.a)({}, n), {}, Object(F.a)({}, e, t)));
            };
          },
          i = function (e) {
            return Object(y.jsxs)(x.a, {
              sx: { width: "top" === e || "bottom" === e ? "auto" : 250 },
              role: "presentation",
              onClick: r(e, !1),
              onKeyDown: r(e, !1),
              children: [
                Object(y.jsxs)(D.a, {
                  children: [
                    Object(y.jsxs)(R.a, {
                      button: !0,
                      component: s.b,
                      to: "/products",
                      children: [
                        Object(y.jsx)(T.a, {
                          children: Object(y.jsx)(Q.a, {}),
                        }),
                        Object(y.jsx)(z.a, { primary: "Products" }),
                      ],
                    }),
                    Object(y.jsxs)(R.a, {
                      button: !0,
                      component: s.b,
                      to: "/cart",
                      children: [
                        Object(y.jsx)(T.a, {
                          children: Object(y.jsx)(Z.a, {}),
                        }),
                        Object(y.jsx)(z.a, { primary: "Cart" }),
                      ],
                    }),
                    Object(y.jsxs)(
                      R.a,
                      {
                        button: !0,
                        children: [
                          Object(y.jsx)(T.a, {
                            children: Object(y.jsx)(Y.a, {}),
                          }),
                          Object(y.jsx)(z.a, { primary: "Checkout" }),
                        ],
                      },
                      "Checkout"
                    ),
                  ],
                }),
                Object(y.jsx)(q.a, {}),
                Object(y.jsxs)(D.a, {
                  children: [
                    Object(y.jsxs)(
                      R.a,
                      {
                        button: !0,
                        component: s.b,
                        to: "/sign-in",
                        children: [
                          Object(y.jsx)(T.a, {
                            children: Object(y.jsx)(V.a, {}),
                          }),
                          Object(y.jsx)(z.a, { primary: "Profile" }),
                        ],
                      },
                      "Profile"
                    ),
                    Object(y.jsxs)(
                      R.a,
                      {
                        button: !0,
                        component: s.b,
                        to: "/sign-in",
                        children: [
                          Object(y.jsx)(T.a, {
                            children: Object(y.jsx)(_.a, {}),
                          }),
                          Object(y.jsx)(z.a, { primary: "Sign Out" }),
                        ],
                      },
                      "Sign Out"
                    ),
                  ],
                }),
              ],
            });
          };
        return Object(y.jsx)(x.a, {
          sx: { flexGrow: 1 },
          children: Object(y.jsx)(ee.a, {
            style: { width: "100vw", zIndex: "10" },
            children: Object(y.jsxs)(te.a, {
              children: [
                Object(y.jsx)(ne.a, {
                  size: "large",
                  edge: "end",
                  color: "inherit",
                  "aria-label": "open drawer",
                  sx: { mr: 2 },
                  children: ["right"].map(function (e) {
                    return Object(y.jsxs)(y.Fragment, {
                      children: [
                        Object(y.jsx)(ae.a, {
                          variant: "outlined",
                          style: { left: "5vw", top: "0px" },
                          onClick: r(e, !0),
                        }),
                        Object(y.jsx)(L.a, {
                          anchor: e,
                          open: n[e],
                          onClose: r(e, !1),
                          children: i(e),
                        }),
                      ],
                    });
                  }),
                }),
                Object(y.jsx)(m.a, {
                  children: "Dan's Store: A Place to Buy Things",
                }),
                Object(y.jsxs)(le, {
                  style: { position: "absolute", right: "100px" },
                  children: [
                    Object(y.jsx)(be, { children: Object(y.jsx)(je.a, {}) }),
                    Object(y.jsx)(de, {
                      placeholder: "Search\u2026",
                      inputProps: { "aria-label": "search" },
                    }),
                  ],
                }),
                Object(y.jsx)(ne.a, {
                  size: "large",
                  edge: "end",
                  color: "inherit",
                  "aria-label": "open drawer",
                  sx: { mr: 2 },
                  style: { position: "absolute", right: "20px" },
                  children: Object(y.jsx)(J.a, {}),
                }),
              ],
            }),
          }),
        });
      }
      n(128);
      var he = function () {
        var e = Object(c.useState)(""),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(c.useState)([]),
          i = Object(o.a)(r, 2),
          s = i[0],
          j = i[1];
        return (
          Object(c.useEffect)(function () {
            fetch("/products")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return j(e);
              });
          }, []),
          Object(y.jsxs)("div", {
            className: "App",
            children: [
              Object(y.jsx)(ue, {}),
              Object(y.jsxs)(k.c, {
                children: [
                  Object(y.jsx)(k.a, {
                    path: "/sign-up",
                    children: Object(y.jsx)(S, { setUrl: a }),
                  }),
                  Object(y.jsx)(k.a, {
                    path: "/log-in",
                    children: Object(y.jsx)(P, {}),
                  }),
                  Object(y.jsx)(k.a, {
                    exact: !0,
                    path: "/products",
                    children: Object(y.jsx)(A, {
                      products: s,
                      url: n,
                      setUrl: a,
                    }),
                  }),
                  Object(y.jsx)(k.a, {
                    exact: !0,
                    path: "/products/:product",
                    children: Object(y.jsx)(W, { setUrl: a }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      i.a.render(
        Object(y.jsx)(s.a, {
          children: Object(y.jsx)(a.a.StrictMode, {
            children: Object(y.jsx)(he, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[129, 1, 2]],
]);
//# sourceMappingURL=main.c65030dd.chunk.js.map
