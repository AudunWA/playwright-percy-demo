(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9291: function (a, b, c) {
      "use strict";
      var d = c(5988);
      c(7294);
      var e = c(2420);
      b.Z = function (a) {
        return (0, e.BX)("div", {
          className: "jsx-87433190 page-transition",
          children: [
            a.children,
            (0, e.tZ)(d.default, {
              id: "87433190",
              children: [
                ".page-transition.jsx-87433190{opacity:0;-webkit-animation-name:load-jsx-87433190;animation-name:load-jsx-87433190;-webkit-animation-duration:500ms;animation-duration:500ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}",
                "@-webkit-keyframes load-jsx-87433190{from{-webkit-transform:translateY(25px);-ms-transform:translateY(25px);transform:translateY(25px);opacity:0;}to{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}",
                "@keyframes load-jsx-87433190{from{-webkit-transform:translateY(25px);-ms-transform:translateY(25px);transform:translateY(25px);opacity:0;}to{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}",
              ],
            }),
          ],
        });
      };
    },
    777: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return ba;
          },
        });
      var d,
        e,
        f = c(266),
        g = c(809),
        h = c.n(g),
        i = c(5988),
        j = c(37),
        k = c(1664),
        l = c(498),
        m = c(2420),
        n = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            n,
            o = new Set(
              [].concat(
                (0, j.Z)(
                  (null === (b = a.data.speakers) || void 0 === b
                    ? void 0
                    : b.map(function (a) {
                        return a._id;
                      })) || []
                ),
                (0, j.Z)(
                  (null === (c = a.data.highlighted) || void 0 === c
                    ? void 0
                    : c.map(function (a) {
                        return a._id;
                      })) || []
                )
              )
            ).size;
          return (0, m.tZ)(k.default, {
            href: "/speakers",
            children: (0, m.BX)("div", {
              className: "jsx-2963114728 speakers",
              children: [
                (0, m.BX)("h3", {
                  className:
                    "jsx-2963114728 " +
                    "speakers__title ".concat(
                      null !== (d = a.data.phase) && void 0 !== d && d.isBooking
                        ? "speakers__title--booking"
                        : ""
                    ),
                  children: [
                    !(
                      null !== (e = a.data.phase) &&
                      void 0 !== e &&
                      e.isBooking
                    ) &&
                      o > 0 &&
                      (0, m.BX)("span", {
                        className: "jsx-2963114728",
                        children: [
                          o,
                          (0, m.tZ)("br", { className: "jsx-2963114728" }),
                        ],
                      }),
                    "speakers",
                  ],
                }),
                (0, m.tZ)("h4", {
                  className: "jsx-2963114728 speakers__subtitle",
                  children:
                    (null === (f = a.data.phase) || void 0 === f
                      ? void 0
                      : f.isBooking) &&
                    (null === (g = a.data.phase) || void 0 === g
                      ? void 0
                      : g.title) &&
                    (0, m.tZ)(m.HY, { children: a.data.phase.title }),
                }),
                (0, m.tZ)("div", {
                  className: "jsx-2963114728 speakers__persons",
                  children:
                    null === (h = a.data.highlighted) || void 0 === h
                      ? void 0
                      : h
                          .filter(function (a) {
                            return void 0 != a.slug;
                          })
                          .map(function (a) {
                            return (0,
                            m.tZ)(k.default, { href: "/speakers/[id]", as: "/speakers/".concat(a.slug.current), children: (0, m.BX)("a", { className: "jsx-2963114728 speakers__person", children: [(0, m.tZ)("img", { src: (0, l.G)(a.portrait).width(600).height(600).url(), alt: "Portrait of speaker named ".concat(a.firstName, " ").concat(a.lastName), className: "jsx-2963114728" }), (0, m.BX)("p", { className: "jsx-2963114728 speakers__person-title", children: [a.firstName, " ", a.lastName] })] }) }, a._id);
                          }),
                }),
                (0, m.tZ)("div", {
                  className: "jsx-2963114728 speakers__avatars",
                  children:
                    null === (n = a.data.speakers) || void 0 === n
                      ? void 0
                      : n
                          .filter(function (a) {
                            return void 0 != a.slug;
                          })
                          .filter(function (b) {
                            var c;
                            return !(
                              null !== (c = a.data.highlighted) &&
                              void 0 !== c &&
                              c
                                .map(function (a) {
                                  return a._id;
                                })
                                .includes(b._id)
                            );
                          })
                          .slice(0, 24)
                          .map(function (a) {
                            return (0,
                            m.tZ)(k.default, { href: "/speakers/[id]", as: "/speakers/".concat(a.slug.current), children: (0, m.tZ)("a", { className: "jsx-2963114728 speakers__avatar", children: (0, m.tZ)("img", { src: (0, l.G)(a.portrait).width(100).height(100).url(), alt: "Portrait of speaker named ".concat(a.firstName, " ").concat(a.lastName), className: "jsx-2963114728" }) }, a._id) }, a._id);
                          }),
                }),
                (0, m.tZ)(i.default, {
                  id: "2963114728",
                  children: [
                    ".speakers.jsx-2963114728{background-color:#21272b;padding:20px;padding-bottom:50px;cursor:pointer;-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;opacity:1;}",
                    "@media (min-width:600px){.speakers.jsx-2963114728{padding:40px;padding-bottom:70px;}}",
                    ".speakers.jsx-2963114728:hover{opacity:0.95;}",
                    ".speakers__title.jsx-2963114728{font-size:40px;color:white;font-weight:500;line-height:1em;}",
                    "@media (min-width:600px){.speakers__title.jsx-2963114728{font-size:60px;}}",
                    ".speakers__title--booking.jsx-2963114728{text-transform:capitalize;}",
                    ".speakers__subtitle.jsx-2963114728{font-size:20px;color:rgba(255,255,255,0.5);font-weight:300;margin-bottom:40px;line-height:1em;}",
                    "@media (min-width:600px){.speakers__subtitle.jsx-2963114728{font-size:30px;margin-bottom:60px;}}",
                    ".speakers__title-link.jsx-2963114728{-webkit-text-decoration:none;text-decoration:none;}",
                    ".speakers__persons.jsx-2963114728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:40px;}",
                    ".speakers__person.jsx-2963114728{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 150ms ease-out;transition:opacity 150ms ease-out;}",
                    ".speakers__person.jsx-2963114728:hover{opacity:0.8;}",
                    ".speakers__person.jsx-2963114728:not(:last-of-type){margin-right:15px;}",
                    "@media (min-width:800px){.speakers__person.jsx-2963114728:not(:last-of-type){margin-right:40px;}}",
                    ".speakers__person.jsx-2963114728 img.jsx-2963114728{width:100%;border-radius:50%;-webkit-filter:grayscale(100%);filter:grayscale(100%);}",
                    ".speakers__person-title.jsx-2963114728{text-align:center;margin-top:20px;color:rgba(255,255,255,0.5);font-weight:500;font-size:12px;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}",
                    "@media (min-width:375px){.speakers__person-title.jsx-2963114728{font-size:16px;}}",
                    ".speakers__avatars.jsx-2963114728{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:16px;}",
                    "@media (min-width:400px){.speakers__avatars.jsx-2963114728{grid-template-columns:repeat(8,1fr);}}",
                    "@media (min-width:700px){.speakers__avatars.jsx-2963114728{grid-gap:32px;}}",
                    "@media (min-width:1000px){.speakers__avatars.jsx-2963114728{grid-template-columns:repeat(6,1fr);}}",
                    "@media (min-width:1200px){.speakers__avatars.jsx-2963114728{grid-gap:16px;grid-template-columns:repeat(8,1fr);}}",
                    ".speakers__avatar.jsx-2963114728{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 150ms ease-out;transition:opacity 150ms ease-out;}",
                    ".speakers__avatar.jsx-2963114728:hover{opacity:0.8;}",
                    ".speakers__avatar.jsx-2963114728 img.jsx-2963114728{width:100%;border-radius:50%;-webkit-filter:grayscale(100%);filter:grayscale(100%);}",
                  ],
                }),
              ],
            }),
          });
        },
        o = c(6637),
        p = function (a) {
          var b, c, d, e, f;
          return (0, m.BX)("div", {
            className:
              i.default.dynamic([
                ["2760765060", [(0, o.$n)(0.05, "#272727")]],
              ]) + " topics",
            children: [
              (0, m.tZ)(k.default, {
                href: "/agenda",
                children: (0, m.tZ)("a", {
                  className: i.default.dynamic([
                    ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                  ]),
                  children: (0, m.tZ)("div", {
                    className:
                      i.default.dynamic([
                        ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                      ]) + " topics__target-area",
                    children: (0, m.BX)("div", {
                      className:
                        i.default.dynamic([
                          ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                        ]) + " topics__container",
                      children: [
                        (0, m.BX)("h3", {
                          className:
                            i.default.dynamic([
                              ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                            ]) +
                            " " +
                            "topics__title ".concat(
                              null !== (b = a.data.phase) &&
                                void 0 !== b &&
                                b.isBooking
                                ? "topics__title--boking"
                                : ""
                            ),
                          children: [
                            !(
                              null !== (c = a.data.phase) &&
                              void 0 !== c &&
                              c.isBooking
                            ) &&
                              (0, m.BX)("span", {
                                className: i.default.dynamic([
                                  ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                                ]),
                                children: [
                                  a.data.topicCount,
                                  (0, m.tZ)("br", {
                                    className: i.default.dynamic([
                                      [
                                        "2760765060",
                                        [(0, o.$n)(0.05, "#272727")],
                                      ],
                                    ]),
                                  }),
                                ],
                              }),
                            "topics",
                          ],
                        }),
                        (0, m.tZ)("h4", {
                          className:
                            i.default.dynamic([
                              ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                            ]) + " topics__title topics__subtitle",
                          children:
                            (null === (d = a.data.phase) || void 0 === d
                              ? void 0
                              : d.isBooking) &&
                            (null === (e = a.data.phase) || void 0 === e
                              ? void 0
                              : e.title) &&
                            (0, m.tZ)(m.HY, {
                              children:
                                null === (f = a.data.phase) || void 0 === f
                                  ? void 0
                                  : f.title,
                            }),
                        }),
                        (0, m.tZ)("p", {
                          className:
                            i.default.dynamic([
                              ["2760765060", [(0, o.$n)(0.05, "#272727")]],
                            ]) + " topics__items",
                          children: a.data.topics.map(function (a) {
                            return (0,
                            m.tZ)("span", { className: i.default.dynamic([["2760765060", [(0, o.$n)(0.05, "#272727")]]]) + " topics__item", children: a.title }, a._id);
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "2760765060",
                dynamic: [(0, o.$n)(0.05, "#272727")],
                children: [
                  ".topics.__jsx-style-dynamic-selector{background-color:#272727;-webkit-transition:opacity 250ms ease-out,background-color 250ms ease-out;transition:opacity 250ms ease-out,background-color 250ms ease-out;opacity:1;}",
                  ".topics.__jsx-style-dynamic-selector:hover{-webkit-transition:background-color 250ms ease-out;transition:background-color 250ms ease-out;background-color:".concat(
                    (0, o.$n)(0.05, "#272727"),
                    ";}"
                  ),
                  ".topics__container.__jsx-style-dynamic-selector{padding:20px;}",
                  "@media (min-width:600px){.topics__container.__jsx-style-dynamic-selector{padding:40px;}}",
                  ".topics.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}",
                  ".topics__title.__jsx-style-dynamic-selector{font-size:40px;color:white;font-weight:500;}",
                  "@media (min-width:600px){.topics__title.__jsx-style-dynamic-selector{font-size:60px;}}",
                  ".topics__title--boking.__jsx-style-dynamic-selector{text-transform:capitalize;}",
                  ".topics__subtitle.__jsx-style-dynamic-selector{font-size:20px;color:rgba(255,255,255,0.5);font-weight:300;margin-bottom:40px;line-height:1em;}",
                  "@media (min-width:600px){.topics__subtitle.__jsx-style-dynamic-selector{font-size:30px;margin-bottom:60px;}}",
                  ".topics__items.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:40px;}",
                  ".topics__item.__jsx-style-dynamic-selector{color:#919191;font-size:18px;font-weight:300;}",
                  ".topics__item.__jsx-style-dynamic-selector:not(:last-of-type){margin-right:35px;margin-bottom:20px;}",
                ],
              }),
            ],
          });
        },
        q = function (a) {
          var b = a.data;
          return (0, m.BX)("div", {
            className: "jsx-559834247 heading",
            children: [
              (0, m.tZ)("h1", {
                className: "jsx-559834247 heading__title",
                children: b.title,
              }),
              (0, m.BX)("h5", {
                className: "jsx-559834247 heading__date-place",
                children: [
                  b.date,
                  (0, m.tZ)("br", { className: "jsx-559834247" }),
                  b.location,
                ],
              }),
              (0, m.tZ)(i.default, {
                id: "559834247",
                children: [
                  ".heading.jsx-559834247{padding:0 60px 60px 0;}",
                  ".heading__title.jsx-559834247{margin-bottom:50px;font-size:40px;font-weight:500;}",
                  "@media (min-width:600px){.heading__title.jsx-559834247{font-size:60px;}}",
                  ".heading__date-place.jsx-559834247{font-size:18px;font-weight:normal;line-height:1.3em;}",
                ],
              }),
            ],
          });
        },
        r = function (a) {
          var b,
            c,
            d,
            e,
            f = a.data,
            g = {
              backgroundImage:
                "\n      linear-gradient(\n        rgba(0, 0, 0, 0.1), \n        rgba(0, 0, 0, 0.6)\n      ), \n      url(".concat(
                  (0, l.G)(f.image).width(1200).height(1200).url(),
                  ")"
                ),
            };
          return (0, m.BX)("div", {
            style: g,
            className: "jsx-3149430667 speaker",
            children: [
              (0, m.tZ)(k.default, {
                href: "/speakers/[id]",
                as: "/speakers/".concat(
                  null === (b = f.speaker) || void 0 === b
                    ? void 0
                    : null === (c = b.slug) || void 0 === c
                    ? void 0
                    : c.current
                ),
                children: (0, m.tZ)("a", {
                  className: "jsx-3149430667 speaker__link",
                  children: (0, m.tZ)("div", {
                    className: "jsx-3149430667 speaker__container",
                    children: (0, m.BX)("div", {
                      className: "jsx-3149430667 speaker__content",
                      children: [
                        (0, m.BX)("h4", {
                          className: "jsx-3149430667 speaker__title",
                          children: [
                            null === (d = f.speaker) || void 0 === d
                              ? void 0
                              : d.firstName,
                            " ",
                            null === (e = f.speaker) || void 0 === e
                              ? void 0
                              : e.lastName,
                          ],
                        }),
                        (0, m.BX)("p", {
                          className: "jsx-3149430667 speaker__quote",
                          children: ['"', f.quote, '"'],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "3149430667",
                children: [
                  ".speaker.jsx-3149430667{-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;background-size:cover;opacity:1;}",
                  ".speaker.jsx-3149430667:hover{opacity:0.95;}",
                  ".speaker__container.jsx-3149430667{padding:20px;padding-top:350px;background-size:cover;}",
                  "@media (min-width:600px){.speaker__container.jsx-3149430667{padding:40px;padding-top:350px;}}",
                  ".speaker__link.jsx-3149430667{-webkit-text-decoration:none;text-decoration:none;}",
                  ".speaker__title.jsx-3149430667{margin-bottom:1.5em;display:block;color:white;opacity:0.8;font-size:40px;font-weight:300;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 150ms ease-out;transition:opacity 150ms ease-out;}",
                  ".speaker__title.jsx-3149430667:hover{opacity:1;}",
                  ".speaker__quote.jsx-3149430667{font-size:40px;font-weight:500;color:white;opacity:0.65;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}",
                  "@media (min-width:600px){.speaker__quote.jsx-3149430667{font-size:60px;}}",
                ],
              }),
            ],
          });
        },
        s = function (a) {
          var b, c, d;
          return (0, m.BX)("div", {
            className: "jsx-341861568 image",
            children: [
              (0, m.tZ)(k.default, {
                href:
                  null !==
                    (b =
                      null === (c = a.data) || void 0 === c
                        ? void 0
                        : null === (d = c.action) || void 0 === d
                        ? void 0
                        : d.url) && void 0 !== b
                    ? b
                    : "/",
                children: (0, m.BX)("div", {
                  className: "jsx-341861568 image__target-area",
                  children: [
                    (0, m.tZ)("div", {
                      className: "jsx-341861568 image__background",
                      children: (0, m.tZ)("img", {
                        src: (0, l.G)(a.data.image).width(1200).url(),
                        className: "jsx-341861568",
                      }),
                    }),
                    (0, m.BX)("div", {
                      className: "jsx-341861568 image__overlay",
                      children: [
                        (0, m.tZ)("h3", {
                          className:
                            "jsx-341861568 " +
                            "image__title ".concat(
                              a.data.subtitle ? "" : "image__subtitle"
                            ),
                          children: a.data.title,
                        }),
                        (0, m.tZ)("h3", {
                          className:
                            "jsx-341861568 image__title image__subtitle",
                          children: a.data.subtitle,
                        }),
                        (0, m.tZ)("h3", {
                          className:
                            "jsx-341861568 image__title image__subtitle",
                          children: a.data.subsubtitle,
                        }),
                      ],
                    }),
                    a.data.action &&
                      (0, m.tZ)("div", {
                        className: "jsx-341861568 image__overlay-action",
                        children: (0, m.tZ)(k.default, {
                          href: a.data.action.url,
                          children: (0, m.tZ)("a", {
                            className: "jsx-341861568 image__link",
                            children: a.data.action.title,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "341861568",
                children: [
                  ".image.jsx-341861568{position:relative;}",
                  ".image__background.jsx-341861568{-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;opacity:1;}",
                  ".image__background.jsx-341861568:hover{opacity:0.95;}",
                  ".image__background.jsx-341861568 img.jsx-341861568{width:100%;}",
                  ".image__overlay.jsx-341861568{position:absolute;left:20px;right:20px;top:20px;}",
                  "@media (min-width:600px){.image__overlay.jsx-341861568{left:40px;right:40px;top:40px;}}",
                  ".image__target-area.jsx-341861568{cursor:pointer;}",
                  ".image__title.jsx-341861568{font-weight:500;color:white;font-size:30px;margin-bottom:3px;}",
                  ".image__subtitle.jsx-341861568{font-weight:300;}",
                  ".image__overlay-action.jsx-341861568{position:absolute;bottom:20px;left:20px;}",
                  "@media (min-width:600px){.image__overlay-action.jsx-341861568{bottom:40px;left:40px;}}",
                  ".image__link.jsx-341861568{color:white;font-size:24px;font-weight:500;-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;-webkit-text-decoration:none;text-decoration:none;}",
                  ".image__link.jsx-341861568:hover{opacity:0.5;}",
                ],
              }),
            ],
          });
        },
        t = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            j,
            n,
            o,
            p,
            q,
            r,
            s,
            t =
              null !==
                (b =
                  null === (c = a.data) || void 0 === c
                    ? void 0
                    : null === (d = c.image) || void 0 === d
                    ? void 0
                    : null === (e = d.asset) || void 0 === e
                    ? void 0
                    : null === (f = e.metadata) || void 0 === f
                    ? void 0
                    : null === (g = f.palette) || void 0 === g
                    ? void 0
                    : null === (h = g.darkMuted) || void 0 === h
                    ? void 0
                    : h.background) && void 0 !== b
                ? b
                : "rgba(0, 0, 0, 0.7)",
            u =
              null !==
                (j =
                  null === (n = a.data) || void 0 === n
                    ? void 0
                    : null === (o = n.image) || void 0 === o
                    ? void 0
                    : null === (p = o.asset) || void 0 === p
                    ? void 0
                    : null === (q = p.metadata) || void 0 === q
                    ? void 0
                    : null === (r = q.palette) || void 0 === r
                    ? void 0
                    : null === (s = r.darkMuted) || void 0 === s
                    ? void 0
                    : s.title) && void 0 !== j
                ? j
                : "white";
          return (0, m.BX)("div", {
            className: "jsx-567653535 experience",
            children: [
              (0, m.tZ)("div", {
                className: "jsx-567653535 experience__background",
                children:
                  a.data.image &&
                  (0, m.tZ)("img", {
                    src: (0, l.G)(a.data.image).width(1600).url(),
                    alt: "".concat(a.data.heading, " ").concat(a.data.title),
                    className: "jsx-567653535",
                  }),
              }),
              (0, m.tZ)("div", {
                style: {
                  background: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, ".concat(
                    t,
                    " 100%)"
                  ),
                },
                className: "jsx-567653535 experience__gradient",
              }),
              (0, m.tZ)("div", {
                className: "jsx-567653535 experience__overlay",
                children: (0, m.BX)("p", {
                  className: "jsx-567653535 experience__title",
                  children: [
                    a.data.title,
                    (0, m.tZ)("br", { className: "jsx-567653535" }),
                    a.data.subtitle,
                  ],
                }),
              }),
              (0, m.BX)("div", {
                className: "jsx-567653535 experience__experiences-overlay",
                children: [
                  (0, m.tZ)("h2", {
                    className: "jsx-567653535 experience__experiences-title",
                    children: a.data.heading,
                  }),
                  (0, m.tZ)("div", {
                    className: "jsx-567653535 experience__experiences-grid",
                    children:
                      a.data.experiences &&
                      a.data.experiences.map(function (a) {
                        return (0,
                        m.tZ)(k.default, { href: a.url, children: (0, m.tZ)("a", { style: { color: u }, className: "jsx-567653535 experience__experience", children: a.title }) }, a._key);
                      }),
                  }),
                ],
              }),
              (0, m.tZ)(i.default, {
                id: "567653535",
                children: [
                  ".experience.jsx-567653535{position:relative;min-height:400px;}",
                  ".experience__background.jsx-567653535 img.jsx-567653535{width:100%;}",
                  ".experience__overlay.jsx-567653535{position:absolute;left:20px;top:20px;}",
                  "@media (min-width:600px){.experience__overlay.jsx-567653535{left:40px;top:40px;}}",
                  ".experience__gradient.jsx-567653535{position:absolute;left:0;right:0;top:0;bottom:0;opacity:0.9;}",
                  ".experience__experiences-overlay.jsx-567653535{position:absolute;right:20px;bottom:20px;}",
                  "@media (min-width:600px){.experience__experiences-overlay.jsx-567653535{right:60px;bottom:60px;}}",
                  ".experience__experiences-grid.jsx-567653535{display:grid;grid-template-columns:1fr 1fr;grid-row-gap:10px;grid-column-gap:20px;}",
                  "@media (min-width:600px){.experience__experiences-grid.jsx-567653535{grid-column-gap:40px;}}",
                  ".experience__experiences-title.jsx-567653535{font-size:30px;font-weight:400;color:white;opacity:0.8;}",
                  "@media (min-width:600px){.experience__experiences-title.jsx-567653535{font-size:60px;margin-bottom:60px;}}",
                  ".experience__experience.jsx-567653535{color:rgba(255,255,255,0.9);font-weight:400;font-size:20px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;opacity:0.9;}",
                  "@media (min-width:600px){.experience__experience.jsx-567653535{font-size:30px;}}",
                  ".experience__experience.jsx-567653535:hover{opacity:0.7;}",
                  ".experience__title.jsx-567653535{color:white;font-size:30px;font-weight:500;opacity:0.8;}",
                  "@media (min-width:600px){.experience__title.jsx-567653535{font-size:60px;}}",
                ],
              }),
            ],
          });
        },
        u = c(7294),
        v = c(6694),
        w = function (a) {
          switch (a._type) {
            case "widgetHeading":
              return (0, m.tZ)(q, { data: a });
            case "widgetImage":
              return (0, m.tZ)(s, { data: a });
            case "widgetTopics":
              return (0, m.tZ)(p, { data: a });
            case "widgetSpeakers":
              return (0, m.tZ)(n, { data: a });
            case "widgetSpeaker":
              return (0, m.tZ)(r, { data: a });
            case "widgetWorkshops":
              return (0, m.tZ)(
                function (a) {
                  return (0, m.BX)("div", {
                    className: "jsx-1264193700 workshop",
                    children: [
                      (0, m.tZ)(k.default, {
                        href: "/workshops",
                        children: (0, m.tZ)("a", {
                          className: "jsx-1264193700 workshop__link",
                          children: (0, m.BX)("div", {
                            className: "jsx-1264193700 workshop__container",
                            children: [
                              (0, m.BX)("h4", {
                                className: "jsx-1264193700 workshop__title",
                                children: [
                                  a.data.count,
                                  (0, m.tZ)("br", {
                                    className: "jsx-1264193700",
                                  }),
                                  a.data.title,
                                ],
                              }),
                              (0, m.tZ)(k.default, {
                                href: "/workshops",
                                children: (0, m.tZ)("a", {
                                  className: "jsx-1264193700 workshop__action",
                                  children: "See Workshops",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, m.tZ)(i.default, {
                        id: "1264193700",
                        children: [
                          ".workshop.jsx-1264193700{background-color:black;-webkit-transition:background-color 200ms ease-out;transition:background-color 200ms ease-out;}",
                          ".workshop.jsx-1264193700:hover{background-color:rgba(0,0,0,0.95);}",
                          ".workshop__container.jsx-1264193700{position:relative;padding:20px;}",
                          "@media (min-width:600px){.workshop__container.jsx-1264193700{padding:40px;}}",
                          ".workshop__title.jsx-1264193700{margin-bottom:30px;font-size:40px;color:white;font-weight:500;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}",
                          "@media (min-width:600px){.workshop__title.jsx-1264193700{font-size:60px;}}",
                          ".workshop__link.jsx-1264193700{-webkit-text-decoration:none;text-decoration:none;}",
                          ".workshop__action.jsx-1264193700{color:#919191;-webkit-text-decoration:none;text-decoration:none;font-size:24px;-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out;}",
                          ".workshop__action.jsx-1264193700:hover{opacity:0.5;}",
                        ],
                      }),
                    ],
                  });
                },
                { data: a }
              );
            case "widgetExperience":
              return (0, m.tZ)(t, { data: a });
            case "widgetSpace":
              return (0, m.tZ)(
                function (a) {
                  return (0, m.tZ)("div", {
                    style: {
                      backgroundImage: "url('".concat(
                        (0, l.G)(a.data.image).width(1200).quality(75).url(),
                        "')"
                      ),
                    },
                    className: "jsx-1320321635 space",
                    children: (0, m.tZ)(i.default, {
                      id: "1320321635",
                      children: [
                        ".space.jsx-1320321635{height:100%;background-size:cover;background-position:50% 50%;}",
                      ],
                    }),
                  });
                },
                { data: a }
              );
            default:
              return null;
          }
        },
        x = c(466),
        y = c(8966),
        z = c(9566),
        A = function (a) {
          return (0, m.BX)("svg", {
            width: "34",
            height: "26",
            viewBox: "0 0 34 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, m.tZ)("path", {
                d: "M1 13L29.25 13",
                stroke: a.fillColor,
                "stroke-width": "2",
                "stroke-linecap": "square",
              }),
              (0, m.tZ)("path", {
                d: "M16.5 24.5L32 13.5L16.5 1",
                stroke: a.fillColor,
                "stroke-width": "2",
                "stroke-linecap": "square",
              }),
            ],
          });
        },
        B = c(2021),
        C = c(7005),
        D = function (a) {
          var b = a.data;
          return (0, m.BX)("div", {
            className: "jsx-1126205319 new__home__container",
            children: [
              (0, m.tZ)(E, { data: b }),
              (0, m.tZ)(G, { data: b }),
              (0, m.tZ)(H, { data: b }),
              (0, m.tZ)(I, { data: b }),
              (0, m.tZ)(L, { partners: b.partners }),
              (0, m.tZ)(J, { data: b }),
              (0, m.tZ)(M, { links: b.infoLinks }),
              (0, m.tZ)(i.default, {
                id: "1126205319",
                children: [
                  ".new__home__container.jsx-1126205319{margin-top:0px;margin-bottom:0px;box-sizing:border-box;}",
                ],
              }),
            ],
          });
        },
        E = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h = a.data,
            j = "Copenhagen Developers Festival" === h.title,
            k = j;
          return (0, m.BX)("div", {
            className:
              i.default.dynamic([
                ["2854663401", [(0, B.u)(h.featuredImage).width(1920).url()]],
              ]) + " main__header",
            children: [
              k &&
                j &&
                (0, m.BX)("div", {
                  className:
                    i.default.dynamic([
                      [
                        "2854663401",
                        [(0, B.u)(h.featuredImage).width(1920).url()],
                      ],
                    ]) + " main__header-center",
                  children: [
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-cphdevfest-title",
                      children: "Copenhagen ",
                    }),
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-cphdevfest-subtitle",
                      children: "Developers",
                    }),
                    "\xa0",
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-cphdevfest-title",
                      children: "Festival",
                    }),
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-cphdevfest-date",
                      children:
                        (null === (b = h.conference) || void 0 === b
                          ? void 0
                          : b.staticDate) ||
                        (h.conference &&
                          K(h.conference.fromDate, h.conference.toDate)),
                    }),
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-cphdevfest-venue",
                      children:
                        (null === (c = h.conference) || void 0 === c
                          ? void 0
                          : null === (d = c.venue) || void 0 === d
                          ? void 0
                          : d.title) || "",
                    }),
                    h.featureToggleDevFestDesign && !1,
                  ],
                }),
              !1 == k &&
                (0, m.BX)("div", {
                  className:
                    i.default.dynamic([
                      [
                        "2854663401",
                        [(0, B.u)(h.featuredImage).width(1920).url()],
                      ],
                    ]) + " main__header-center",
                  children: [
                    (0, m.tZ)("span", {
                      className:
                        i.default.dynamic([
                          [
                            "2854663401",
                            [(0, B.u)(h.featuredImage).width(1920).url()],
                          ],
                        ]) + " main__header-title",
                      children: h.title,
                    }),
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                    (null === (e = h.conference) || void 0 === e
                      ? void 0
                      : e.staticDate) ||
                      (h.conference &&
                        K(h.conference.fromDate, h.conference.toDate)),
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                    (null === (f = h.conference) || void 0 === f
                      ? void 0
                      : null === (g = f.venue) || void 0 === g
                      ? void 0
                      : g.title) || "",
                    (0, m.tZ)("br", {
                      className: i.default.dynamic([
                        [
                          "2854663401",
                          [(0, B.u)(h.featuredImage).width(1920).url()],
                        ],
                      ]),
                    }),
                  ],
                }),
              (0, m.tZ)(i.default, {
                id: "2854663401",
                dynamic: [(0, B.u)(h.featuredImage).width(1920).url()],
                children: [
                  ".main__header.__jsx-style-dynamic-selector{width:100%;height:650px;max-width:1920px;max-height:1051px;margin:-72px auto 0px auto;-webkit-filter:drop-shadow(20px 20px 30px rgba(0,0,0,0.25));filter:drop-shadow(20px 20px 30px rgba(0,0,0,0.25));z-index:0;background-image:url('".concat(
                    (0, B.u)(h.featuredImage).width(1920).url(),
                    "');background-repeat:no-repeat;background-position:center;background-size:cover;}"
                  ),
                  "@media (min-width:900px){.main__header.__jsx-style-dynamic-selector{margin:-108px auto 0px auto;height:750px;}}",
                  "@media (min-width:1200px){.main__header.__jsx-style-dynamic-selector{margin:-216px auto 0px auto;height:951px;}}",
                  "@media (min-width:1500px){.main__header.__jsx-style-dynamic-selector{height:1051px;}}",
                  ".main__header-center.__jsx-style-dynamic-selector{margin:auto;padding:200px 0px 0px 0px;font-family:'Calibre';font-style:normal;color:#FFFFFF;font-size:26px;font-weight:600;text-align:center;line-height:30px;}",
                  "@media (min-width:900px){.main__header-center.__jsx-style-dynamic-selector{padding:250px 0px 0px 0px;font-size:40px;line-height:44px;}}",
                  "@media (min-width:1200px){.main__header-center.__jsx-style-dynamic-selector{padding:330px 0px 0px 0px;font-size:50px;line-height:54px;}}",
                  "@media (min-width:1500px){.main__header-center.__jsx-style-dynamic-selector{padding:370px 0px 0px 0px;font-size:60px;line-height:64px;}}",
                  ".main__header-title.__jsx-style-dynamic-selector{font-family:'Calibre';font-style:normal;font-weight:700;font-size:80px;line-height:92.5%;}",
                  "@media (min-width:900px){.main__header-title.__jsx-style-dynamic-selector{font-size:100px;font-weight:900;}}",
                  "@media (min-width:1200px){.main__header-title.__jsx-style-dynamic-selector{font-size:120px;}}",
                  "@media (min-width:1500px){.main__header-title.__jsx-style-dynamic-selector{font-size:140px;}}",
                  ".main__header-cphdevfest-title.__jsx-style-dynamic-selector{display:inline-block;font-family:'Playfair Display';font-style:normal;font-weight:700;font-size:46px;line-height:92.5%;word-wrap:normal;}",
                  ".main__header-cphdevfest-subtitle.__jsx-style-dynamic-selector{display:inline-block;font-family:'Playfair Display Medium Italic';font-weight:500;font-size:46px;line-height:92.5%;word-wrap:normal;}",
                  ".main__header-cphdevfest-date.__jsx-style-dynamic-selector{font-family:'Poppins';font-style:normal;font-weight:700;font-size:24px;line-height:38px;}",
                  ".main__header-cphdevfest-venue.__jsx-style-dynamic-selector{font-family:'Poppins';font-style:normal;font-weight:400;font-size:24px;line-height:38px;}",
                  ".main__header-cphdevfest-conference-festival.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:267px;height:56px;margin:40px auto 0px auto;padding:4px;max-width:267px;max-height:56px;background:linear-gradient(90deg,#FFFFFF 0%,#563175 100%);border-radius:100px;font-family:'Poppins';font-style:normal;font-weight:700;font-size:20px;line-height:28px;text-align:center;}",
                  ".main__header-cphdevfest-conference.__jsx-style-dynamic-selector{padding:3px 8px 0px 0px;color:#000000;}",
                  ".main__header-cphdevfest-festival.__jsx-style-dynamic-selector{padding:3px 0px 0px 8px;color:#FFFFFF;}",
                  "@media (min-width:900px){.main__header-cphdevfest-title.__jsx-style-dynamic-selector{font-size:100px;font-weight:900;}.main__header-cphdevfest-subtitle.__jsx-style-dynamic-selector{font-size:100px;font-weight:400;}.main__header-cphdevfest-date.__jsx-style-dynamic-selector{font-size:28px;line-height:42px;}.main__header-cphdevfest-venue.__jsx-style-dynamic-selector{font-size:28px;line-height:42px;}}",
                  "@media (min-width:1200px){.main__header-cphdevfest-title.__jsx-style-dynamic-selector{font-size:120px;}.main__header-cphdevfest-subtitle.__jsx-style-dynamic-selector{font-size:120px;}.main__header-cphdevfest-date.__jsx-style-dynamic-selector{font-size:30px;line-height:48px;}.main__header-cphdevfest-venue.__jsx-style-dynamic-selector{font-size:30px;line-height:48px;}}",
                  "@media (min-width:1500px){.main__header-cphdevfest-title.__jsx-style-dynamic-selector{font-size:140px;}.main__header-cphdevfest-subtitle.__jsx-style-dynamic-selector{font-size:140px;}.main__header-cphdevfest-date.__jsx-style-dynamic-selector{font-size:32px;}.main__header-cphdevfest-venue.__jsx-style-dynamic-selector{font-size:32px;}}",
                ],
              }),
            ],
          });
        },
        F = { name: "14ml1ci", styles: "max-width:1920px;margin:0px auto" },
        G = function (a) {
          var b,
            c = a.data,
            d = c.homelinks;
          return d && d.links
            ? (0, m.BX)("div", {
                css: F,
                className: "jsx-3601836161",
                children: [
                  (0, m.BX)("div", {
                    className: "jsx-3601836161 links__container",
                    children: [
                      (0, m.BX)("div", {
                        className: "jsx-3601836161 links__left",
                        children: [
                          (0, m.tZ)("span", {
                            className: "jsx-3601836161 links__left-title",
                            children: d.title,
                          }),
                          (0, m.tZ)("br", { className: "jsx-3601836161" }),
                          (0, m.tZ)("span", {
                            className: "jsx-3601836161 links__left-date",
                            children:
                              (null === (b = c.conference) || void 0 === b
                                ? void 0
                                : b.staticDate) ||
                              (c.conference &&
                                K(c.conference.fromDate, c.conference.toDate)),
                          }),
                        ],
                      }),
                      (0, m.tZ)("div", {
                        className: "jsx-3601836161 links__right",
                        children: d.links.map(function (a) {
                          return "externalLink" === a._type
                            ? (0, m.BX)("div", {
                                className:
                                  "jsx-3601836161 links__right-link-line",
                                children: [
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-3601836161 links__right-text",
                                    children: (0, m.tZ)("a", {
                                      href: a.url,
                                      className: "jsx-3601836161",
                                      children: a.title,
                                    }),
                                  }),
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-3601836161 links__right-arrow",
                                    children: (0, m.tZ)("a", {
                                      href: a.url,
                                      className: "jsx-3601836161",
                                      children: (0, m.tZ)(A, {
                                        fillColor: "#fff",
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : "internalLink" === a._type
                            ? (0, m.BX)("div", {
                                className:
                                  "jsx-3601836161 links__right-link-line",
                                children: [
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-3601836161 links__right-text",
                                    children: (0, m.tZ)(
                                      k.default,
                                      {
                                        href: a.link,
                                        children: (0, m.tZ)("a", {
                                          className: "jsx-3601836161",
                                          children: a.title,
                                        }),
                                      },
                                      a._key
                                    ),
                                  }),
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-3601836161 links__right-arrow",
                                    children: (0, m.tZ)(
                                      k.default,
                                      {
                                        href: a.link,
                                        children: (0, m.tZ)("a", {
                                          className: "jsx-3601836161",
                                          children: (0, m.tZ)(A, {
                                            fillColor: "#fff",
                                          }),
                                        }),
                                      },
                                      a._key
                                    ),
                                  }),
                                ],
                              })
                            : void 0;
                        }),
                      }),
                    ],
                  }),
                  (0, m.tZ)(i.default, {
                    id: "3601836161",
                    children: [
                      ".links__container.jsx-3601836161{display:block;background-color:var(--page-level-two-color);font-family:'Calibre';font-style:normal;font-weight:400;font-size:44px;line-height:44px;text-align:left;color:white;}",
                      "@media (min-width:900px){.links__container.jsx-3601836161{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}",
                      ".links__left.jsx-3601836161{width:100%;padding:50px;}",
                      "@media (min-width:900px){.links__left.jsx-3601836161{width:50%;padding:80px 2% 60px 3%;}}",
                      "@media (min-width:1500px){.links__left.jsx-3601836161{padding:100px 5% 80px 10%;}}",
                      ".links__right.jsx-3601836161{width:100%;padding:50px;}",
                      "@media (min-width:900px){.links__right.jsx-3601836161{width:50%;padding:80px 3% 60px 0px;}}",
                      "@media (min-width:1500px){.links__right.jsx-3601836161{padding:100px 10% 80px 0px;}}",
                      ".links__left-title.jsx-3601836161{font-weight:600;font-size:48px;line-height:52px;}",
                      ".links__left-date.jsx-3601836161{font-weight:500;font-size:32px;line-height:52px;}",
                      ".links__right-link-line.jsx-3601836161{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0px 0px 20px 0px;}",
                      ".links__right-text.jsx-3601836161{width:80%;font-weight:400;font-size:44px;line-height:44px;}",
                      ".links__right-arrow.jsx-3601836161{width:20%;line-height:44px;}",
                      ".links__right-text.jsx-3601836161>a.jsx-3601836161{color:white;-webkit-text-decoration:none;text-decoration:none;}",
                      ".links__right-text.jsx-3601836161>a.jsx-3601836161:hover{color:white;font-weight:bold;-webkit-text-decoration:underline;text-decoration:underline;}",
                    ],
                  }),
                ],
              })
            : null;
        },
        H = function (a) {
          var b = a.data;
          return (0, m.BX)("div", {
            className: "jsx-1893824686 blocks__speakers__container",
            children: [
              b.blocks.map(function (a) {
                if ("blockSpeakers" === a._type)
                  return (0, m.tZ)(
                    N,
                    { block: a, speakers: b.speakers },
                    a._key
                  );
              }),
              (0, m.tZ)(i.default, {
                id: "1893824686",
                children: [
                  ".blocks__speakers__container.jsx-1893824686{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:0px;padding:5%;background-color:white;}",
                  "@media (min-width:1600px){.blocks__speakers__container.jsx-1893824686{padding:130px 150px;}}",
                ],
              }),
            ],
          });
        },
        I = function (a) {
          var b = a.data;
          return (0, m.BX)("div", {
            className: "jsx-460764417 blocks__others__container",
            children: [
              b.blocks.map(function (a) {
                return "blockNotice" === a._type
                  ? (0, m.tZ)(O, { block: a }, a._key)
                  : "blockKeyNumbers" === a._type
                  ? (0, m.tZ)(Q, { block: a }, a._key)
                  : "blockCta" === a._type
                  ? (0, m.tZ)(P, { block: a }, a._key)
                  : void 0;
              }),
              (0, m.tZ)(i.default, {
                id: "460764417",
                children: [
                  ".blocks__others__container.jsx-460764417{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0px;padding:5%;background:var(--page-level-five-color);}",
                  "@media (min-width:1600px){.blocks__others__container.jsx-460764417{padding:130px 80px;}}",
                ],
              }),
            ],
          });
        },
        J = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g = a.data;
          return (0, m.tZ)(m.HY, {
            children:
              g.confFooter &&
              (null === (b = g.confFooter) || void 0 === b
                ? void 0
                : b.title) &&
              (null === (c = g.confFooter) || void 0 === c ? void 0 : c.date) &&
              (0, m.BX)("div", {
                className: "jsx-3454932580 conference__info__container",
                children: [
                  (0, m.tZ)("div", {
                    className: "jsx-3454932580 conference__info__left",
                    children:
                      null === (d = g.confFooter) || void 0 === d
                        ? void 0
                        : d.title,
                  }),
                  (0, m.BX)("div", {
                    className: "jsx-3454932580 conference__info__right",
                    children: [
                      (0, m.tZ)("span", {
                        className: "jsx-3454932580",
                        children:
                          null === (e = g.confFooter) || void 0 === e
                            ? void 0
                            : e.date,
                      }),
                      (0, m.tZ)("br", { className: "jsx-3454932580" }),
                      (0, m.tZ)("span", {
                        className: "jsx-3454932580",
                        children:
                          null === (f = g.confFooter) || void 0 === f
                            ? void 0
                            : f.venue,
                      }),
                    ],
                  }),
                  (0, m.tZ)(i.default, {
                    id: "3454932580",
                    children: [
                      ".conference__info__container.jsx-3454932580{display:block;background-color:#FFFFFF;font-family:'Calibre';font-style:normal;color:#000000;}",
                      "@media (min-width:900px){.conference__info__container.jsx-3454932580{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}",
                      ".conference__info__left.jsx-3454932580{width:100%;padding:40px 0px 20px 5%;font-weight:500;font-size:96px;line-height:96px;}",
                      "@media (min-width:900px){.conference__info__left.jsx-3454932580{width:70%;padding:80px 2% 60px 3%;font-size:136px;line-height:124px;}}",
                      "@media (min-width:1500px){.conference__info__left.jsx-3454932580{padding:100px 0px 80px 200px;font-size:176px;line-height:136px;}}",
                      ".conference__info__right.jsx-3454932580{display:inline-block;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:100%;padding:0px 5% 40px 0px;text-align:right;font-weight:400;font-size:20px;line-height:20px;}",
                      "@media (min-width:900px){.conference__info__right.jsx-3454932580{width:30%;padding:80px 3% 60px 0px;font-size:28px;line-height:28px;}}",
                      "@media (min-width:1500px){.conference__info__right.jsx-3454932580{padding:100px 200px 80px 0px;}}",
                    ],
                  }),
                ],
              }),
          });
        };
      function K(a, b) {
        var c = new Date(a),
          d = new Date(b);
        return (0, x.Z)(c) == (0, x.Z)(d)
          ? (0, z.Z)(c, "d LLLL")
          : (0, y.Z)(c) == (0, y.Z)(d)
          ? "".concat((0, z.Z)(c, "d"), " – ").concat((0, z.Z)(d, "d LLL"))
          : 5 === (0, y.Z)(d)
          ? ""
              .concat((0, z.Z)(c, "d LLLL"), " – ")
              .concat((0, z.Z)(d, "d LLLL"))
          : "".concat((0, z.Z)(c, "d LLL"), " – ").concat((0, z.Z)(d, "d LLL"));
      }
      var L = function (a) {
          var b = a.partners,
            c = b,
            d = c[0];
          return (
            c[1],
            (0, m.tZ)("div", {
              children:
                b &&
                0 != b.length &&
                (0, m.BX)("div", {
                  className: "jsx-2659488190 partners__block",
                  children: [
                    (0, m.tZ)("div", {
                      className: "jsx-2659488190 partners__block__title-row",
                      children: (0, m.tZ)("h4", {
                        className:
                          "jsx-2659488190 partners__block__title-title",
                        children: "Partners",
                      }),
                    }),
                    (0, m.tZ)("div", {
                      className: "jsx-2659488190 partners__block__container",
                      children: (0, m.tZ)(C.Z, {
                        play: (null == b ? void 0 : b.length) > 0,
                        gradient: !1,
                        pauseOnHover: !0,
                        speed: 150,
                        children:
                          null == d
                            ? void 0
                            : d.map(function (a) {
                                return (0,
                                m.tZ)("div", { className: "jsx-2659488190 partner", children: (0, m.tZ)(k.default, { href: a.partnerLink, children: (0, m.tZ)("a", { className: "jsx-2659488190", children: (0, m.tZ)("img", { src: (0, B.u)(a.logoMono.asset._ref).width(240).height(112).url() || void 0, className: "jsx-2659488190" }) }) }, a._id) }, a._id);
                              }),
                      }),
                    }),
                    (0, m.tZ)(i.default, {
                      id: "2659488190",
                      children: [
                        ".partners__block.jsx-2659488190{display:block;width:100%;margin:0px;padding:0px;background-color:#FFFFFF;}",
                        ".partners__block__title-row.jsx-2659488190{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}",
                        ".partners__block__title-title.jsx-2659488190{font-family:'Calibre';font-style:normal;font-weight:600;font-size:48px;line-height:50px;text-align:center;color:#000000;padding:130px 0px 50px 0px;}",
                        ".partners__block__container.jsx-2659488190{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-self:stretch;}",
                        ".partner.jsx-2659488190{display:block;max-width:420px;min-width:380px;height:168px;margin:0px;border:solid 1px #EEEEEE;}",
                        ".partner.jsx-2659488190>a.jsx-2659488190{-webkit-text-decoration:none;text-decoration:none;}",
                        ".partner.jsx-2659488190>a.jsx-2659488190:hover{-webkit-text-decoration:none;text-decoration:none;}",
                        ".partner.jsx-2659488190>a.jsx-2659488190>img.jsx-2659488190{margin:28px auto;mix-blend-mode:multiply;}",
                        ".partner.jsx-2659488190>a.jsx-2659488190>img.jsx-2659488190:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}",
                        ".partners_logo.jsx-2659488190{margin:20px 15px;-webkit-transition:opacity 150ms ease-out;transition:opacity 150ms ease-out;}",
                        ".partners_logo.jsx-2659488190:hover{opacity:0.8;}",
                        ".partner_logo.jsx-2659488190 img.jsx-2659488190{width:220px;margin-left:40px;-webkit-filter:brightness(0) saturate(100%) invert(0%) saturate(100%) hue-rotate(197deg) brightness(101%) contrast(101%);filter:brightness(0) saturate(100%) invert(0%) saturate(100%) hue-rotate(197deg) brightness(101%) contrast(101%);opacity:0.75;}",
                      ],
                    }),
                  ],
                }),
            })
          );
        },
        M = function (a) {
          var b = a.links;
          return b && b.links
            ? (0, m.BX)("div", {
                className: "jsx-2514981205 info__links__container",
                children: [
                  b.links.map(function (a) {
                    return "infoLinkExternal" === a._type
                      ? (0, m.tZ)("a", {
                          href: a.url,
                          className: "jsx-2514981205",
                          children: (0, m.BX)("div", {
                            className: "jsx-2514981205 info__link__box",
                            children: [
                              (0, m.BX)("div", {
                                className:
                                  "jsx-2514981205 info__link__title-description",
                                children: [
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-2514981205 info__link__title",
                                    children: (0, m.tZ)("h6", {
                                      className: "jsx-2514981205",
                                      children: a.title,
                                    }),
                                  }),
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-2514981205 info__link__description",
                                    children: "\xa0",
                                  }),
                                ],
                              }),
                              (0, m.tZ)("div", {
                                className: "jsx-2514981205 info__link__arrow",
                                children: (0, m.tZ)(A, {
                                  fillColor: "#000000",
                                }),
                              }),
                              (0, m.tZ)("div", {
                                className: "jsx-2514981205 info__link__line",
                              }),
                            ],
                          }),
                        })
                      : "infoLinkInternal" === a._type
                      ? (0, m.tZ)(
                          k.default,
                          {
                            href: a.link,
                            children: (0, m.tZ)("a", {
                              className: "jsx-2514981205",
                              children: (0, m.BX)("div", {
                                className: "jsx-2514981205 info__link__box",
                                children: [
                                  (0, m.BX)("div", {
                                    className:
                                      "jsx-2514981205 info__link__title-description",
                                    children: [
                                      (0, m.tZ)("div", {
                                        className:
                                          "jsx-2514981205 info__link__title",
                                        children: (0, m.tZ)("h6", {
                                          className: "jsx-2514981205",
                                          children: a.title,
                                        }),
                                      }),
                                      (0, m.tZ)("div", {
                                        className:
                                          "jsx-2514981205 info__link__description",
                                        children: a.description,
                                      }),
                                    ],
                                  }),
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-2514981205 info__link__arrow",
                                    children: (0, m.tZ)(A, {
                                      fillColor: "#000000",
                                    }),
                                  }),
                                  (0, m.tZ)("div", {
                                    className:
                                      "jsx-2514981205 info__link__line",
                                  }),
                                ],
                              }),
                            }),
                          },
                          a._key
                        )
                      : void 0;
                  }),
                  (0, m.tZ)(i.default, {
                    id: "2514981205",
                    children: [
                      ".info__links__container.jsx-2514981205{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0px;padding:50px 5%;background-color:#FFFFFF;}",
                      "@media (min-width:900px){.info__links__container.jsx-2514981205{padding:100px 5%;}}",
                      "@media (min-width:1500px){.info__links__container.jsx-2514981205{padding:150px 5%;}}",
                      ".info__link__box.jsx-2514981205{display:block;width:250px;padding:0px;margin:20px;font-family:'Calibre';font-style:normal;color:#000000;}",
                      ".info__link__box.jsx-2514981205:hover{color:var(--page-level-two-color);}",
                      ".info__link__title-description.jsx-2514981205{width:100%;height:250px;padding:0px 15px;}",
                      ".info__link__title.jsx-2514981205{font-weight:500;font-size:36px;line-height:36px;}",
                      ".info__link__title.jsx-2514981205>h6.jsx-2514981205{font-weight:500;font-size:36px;line-height:36px;}",
                      ".info__link__description.jsx-2514981205{font-weight:400;font-size:18px;line-height:24px;}",
                      ".info__link__arrow.jsx-2514981205{width:100%;height:40px;padding:0px 15px;}",
                      ".info__link__line.jsx-2514981205{width:100%;height:2px;background-color:#000000;}",
                    ],
                  }),
                ],
              })
            : null;
        },
        N = function (a) {
          var b,
            c,
            d,
            e,
            f = a.block,
            g = a.speakers,
            h = new Set(
              [].concat(
                (0, j.Z)(
                  null !==
                    (b =
                      null == g
                        ? void 0
                        : g.map(function (a) {
                            return a._id;
                          })) && void 0 !== b
                    ? b
                    : []
                ),
                (0, j.Z)(
                  null !==
                    (c =
                      null === (d = f.highlighted) || void 0 === d
                        ? void 0
                        : d.map(function (a) {
                            return a._id;
                          })) && void 0 !== c
                    ? c
                    : []
                )
              )
            ).size;
          return (0, m.BX)("div", {
            className: "jsx-1659049350 speakers__content__container",
            children: [
              (0, m.tZ)("div", {
                className: "jsx-1659049350 speakers__title-row",
                children: (0, m.tZ)("h2", {
                  className: "jsx-1659049350 speakers__title-title",
                  children: "Speakers",
                }),
              }),
              f.subTitle &&
                (0, m.tZ)("div", {
                  className: "jsx-1659049350 speakers__title-subtitle",
                  children: f.subTitle,
                }),
              (0, m.tZ)("div", {
                className: "jsx-1659049350 speakers___container",
                children:
                  null === (e = f.highlighted) || void 0 === e
                    ? void 0
                    : e.map(function (a) {
                        var b;
                        return (0,
                        m.tZ)("div", { className: "jsx-1659049350 speakers__speaker", children: (0, m.tZ)(k.default, { href: "/speakers/".concat(null === (b = a.slug) || void 0 === b ? void 0 : b.current), passHref: !0, children: (0, m.BX)("a", { className: "jsx-1659049350", children: [(0, m.tZ)("img", { src: a.portrait && (0, B.u)(a.portrait).width(392).height(392).url(), className: "jsx-1659049350" }), (0, m.BX)("div", { className: "jsx-1659049350 speakers__speaker-signature", children: [(0, m.BX)("div", { className: "jsx-1659049350 speakers__speaker-signature-name", children: [a.firstName, " ", a.lastName] }), (0, m.tZ)("div", { className: "jsx-1659049350 speakers__speaker-signature-arrow", children: (0, m.tZ)(A, { fillColor: "#000000" }) })] })] }) }, a._id) });
                      }),
              }),
              f.showSpeakersCount &&
                (0, m.tZ)("div", {
                  className: "jsx-1659049350 speakers__count-row",
                  children: (0, m.tZ)(k.default, {
                    href: "/speakers",
                    passHref: !0,
                    children: (0, m.tZ)("div", {
                      className: "jsx-1659049350 speakers__count-button",
                      children: (0, m.BX)("a", {
                        className: "jsx-1659049350 speakers__count-link",
                        children: ["See all ", h, " speakers"],
                      }),
                    }),
                  }),
                }),
              (0, m.tZ)(i.default, {
                id: "1659049350",
                children: [
                  ".speakers__content__container.jsx-1659049350{display:block;width:100%;margin:0px;padding:0px;}",
                  ".speakers__title-row.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}",
                  ".speakers__title-title.jsx-1659049350{font-family:'Calibre';font-style:normal;font-weight:600;font-size:48px;line-height:50px;text-align:center;color:#000000;}",
                  ".speakers__title-subtitle.jsx-1659049350{width:100%;font-family:'Calibre';font-style:normal;font-weight:300;font-size:28px;line-height:36px;text-align:center;color:#000000;margin:0px 0px 20px 0px;}",
                  ".speakers___container.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}",
                  ".speakers__speaker.jsx-1659049350{display:block;max-width:392px;margin:12px;color:#000000;}",
                  ".speakers__speaker.jsx-1659049350:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
                  ".speakers__speaker.jsx-1659049350>a.jsx-1659049350{color:#232323;font-family:'Calibre';font-style:normal;font-weight:600;font-size:32px;line-height:40px;-webkit-text-decoration:none;text-decoration:none;}",
                  ".speakers__speaker.jsx-1659049350>a.jsx-1659049350:hover{-webkit-text-decoration:none;text-decoration:none;}",
                  ".speakers__speaker-signature.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0px 20px 10px;}",
                  ".speakers__speaker-signature-name.jsx-1659049350{width:90%;}",
                  ".speakers__speaker-signature-arrow.jsx-1659049350{width:10%;text-align:right;}",
                  ".links__right-link-line.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0px 0px 20px 0px;}",
                  ".speakers__count-row.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:15px 0px 0px 0px;}",
                  ".speakers__count-button.jsx-1659049350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:255px;height:64px;background-color:#231E8C;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;cursor:pointer;}",
                  ".speakers__count-link.jsx-1659049350{color:#FFFFFF;-webkit-text-decoration:none;text-decoration:none;font-family:'Calibre';font-style:normal;font-weight:700;font-size:20px;line-height:20px;}",
                ],
              }),
            ],
          });
        },
        O = function (a) {
          var b = a.block;
          return (0, m.BX)("div", {
            className: "jsx-1499733679 blocks__others__notice__container",
            children: [
              (0, m.tZ)(k.default, {
                href: b.ctaLink,
                passHref: !0,
                children: (0, m.BX)("a", {
                  className: "jsx-1499733679",
                  children: [
                    (0, m.tZ)("div", {
                      className: "jsx-1499733679 blocks__others__notice-image",
                      children:
                        b.image &&
                        (0, m.tZ)("img", {
                          src: (0, B.u)(b.image).width(600).height(490).url(),
                          className:
                            "jsx-1499733679 blocks__others__notice-image-style",
                        }),
                    }),
                    (0, m.BX)("div", {
                      className:
                        "jsx-1499733679 blocks__others__notice-row-title",
                      children: [
                        (0, m.tZ)("div", {
                          className:
                            "jsx-1499733679 blocks__others__notice-title",
                          children: (0, m.BX)("h2", {
                            className: "jsx-1499733679",
                            children: [b.title, "\xa0"],
                          }),
                        }),
                        (0, m.tZ)("div", {
                          className:
                            "jsx-1499733679 blocks__others__notice-arrow",
                          children: (0, m.tZ)(A, { fillColor: "#000000" }),
                        }),
                      ],
                    }),
                    (0, m.BX)("div", {
                      className:
                        "jsx-1499733679 blocks__others__notice-subtitle",
                      children: [b.preamble, "\xa0"],
                    }),
                  ],
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "1499733679",
                children: [
                  ".blocks__others__notice__container.jsx-1499733679{display:block;width:392px;margin:12px;color:#000000;}",
                  ".blocks__others__notice-image-style.jsx-1499733679{width:392px;}",
                  ".blocks__others__notice__container.jsx-1499733679:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",
                  "@media (min-width:900px){.blocks__others__notice__container.jsx-1499733679{width:600px;}.blocks__others__notice-image-style.jsx-1499733679{width:600px;}}",
                  ".blocks__others__notice__container.jsx-1499733679>a.jsx-1499733679{color:#232323;font-family:'Calibre';font-style:normal;font-weight:600;font-size:32px;line-height:40px;-webkit-text-decoration:none;text-decoration:none;}",
                  ".blocks__others__notice__container.jsx-1499733679>a.jsx-1499733679:hover{-webkit-text-decoration:none;text-decoration:none;}",
                  ".blocks__others__notice-row-title.jsx-1499733679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0px 5px 0px;font-family:'Calibre';font-style:normal;color:#000000;}",
                  ".blocks__others__notice-title.jsx-1499733679{width:90%;}",
                  ".blocks__others__notice-title.jsx-1499733679>h2.jsx-1499733679{font-weight:600;font-size:34px;line-height:36px;text-align:left;margin:0px;padding:0px;}",
                  ".blocks__others__notice-arrow.jsx-1499733679{width:10%;text-align:right;}",
                  ".blocks__others__notice-subtitle.jsx-1499733679{font-weight:300;font-size:24px;line-height:26px;}",
                  "@media (min-width:900px){.blocks__others__notice-title.jsx-1499733679>h2.jsx-1499733679{font-size:44px;line-height:46px;}.blocks__others__notice-subtitle.jsx-1499733679{font-size:32px;line-height:34px;}}",
                ],
              }),
            ],
          });
        },
        P = function (a) {
          var b = a.block;
          return (0, m.BX)("div", {
            className: "jsx-2405490654 blocks__others__cta___container",
            children: [
              (0, m.tZ)(k.default, {
                href: b.ctaLink,
                passHref: !0,
                children: (0, m.BX)("a", {
                  className: "jsx-2405490654",
                  children: [
                    (0, m.tZ)("div", {
                      className: "jsx-2405490654 blocks__others__cta_-image",
                      children:
                        b.image &&
                        (0, m.tZ)("img", {
                          src: (0, B.u)(b.image).width(600).height(490).url(),
                          className:
                            "jsx-2405490654 blocks__others__cta_-image-style",
                        }),
                    }),
                    (0, m.BX)("div", {
                      className:
                        "jsx-2405490654 blocks__others__cta_-row-title",
                      children: [
                        (0, m.tZ)("div", {
                          className:
                            "jsx-2405490654 blocks__others__cta_-title",
                          children: (0, m.BX)("h2", {
                            className: "jsx-2405490654",
                            children: [b.title, "\xa0"],
                          }),
                        }),
                        (0, m.tZ)("div", {
                          className:
                            "jsx-2405490654 blocks__others__cta_-arrow",
                          children: (0, m.tZ)(A, { fillColor: "#000000" }),
                        }),
                      ],
                    }),
                    (0, m.BX)("div", {
                      className: "jsx-2405490654 blocks__others__cta_-subtitle",
                      children: [b.preamble, "\xa0"],
                    }),
                  ],
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "2405490654",
                children: [
                  ".blocks__others__cta___container.jsx-2405490654{display:block;width:392px;margin:12px;color:#000000;}",
                  ".blocks__others__cta_-image-style.jsx-2405490654{width:392px;}",
                  ".blocks__others__cta___container.jsx-2405490654:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",
                  "@media (min-width:900px){.blocks__others__cta___container.jsx-2405490654{width:600px;}.blocks__others__cta_-image-style.jsx-2405490654{width:600px;}}",
                  ".blocks__others__cta___container.jsx-2405490654>a.jsx-2405490654{color:#232323;font-family:'Calibre';font-style:normal;font-weight:600;font-size:32px;line-height:40px;-webkit-text-decoration:none;text-decoration:none;}",
                  ".blocks__others__cta___container.jsx-2405490654>a.jsx-2405490654:hover{-webkit-text-decoration:none;text-decoration:none;}",
                  ".blocks__others__cta_-row-title.jsx-2405490654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0px 5px 0px;font-family:'Calibre';font-style:normal;color:#000000;}",
                  ".blocks__others__cta_-title.jsx-2405490654{width:90%;}",
                  ".blocks__others__cta_-title.jsx-2405490654>h2.jsx-2405490654{font-weight:600;font-size:34px;line-height:36px;text-align:left;margin:0px;padding:0px;}",
                  ".blocks__others__cta_-arrow.jsx-2405490654{width:10%;text-align:right;}",
                  ".blocks__others__cta_-subtitle.jsx-2405490654{font-weight:300;font-size:24px;line-height:26px;}",
                  "@media (min-width:900px){.blocks__others__cta_-title.jsx-2405490654>h2.jsx-2405490654{font-size:44px;line-height:46px;}.blocks__others__cta_-subtitle.jsx-2405490654{font-size:32px;line-height:34px;}}",
                ],
              }),
            ],
          });
        },
        Q = function (a) {
          var b = a.block;
          return (0, m.BX)("div", {
            className:
              i.default.dynamic([
                [
                  "734083956",
                  [
                    b.backgroundColor,
                    (0, o.XV)(b.backgroundColor),
                    (0, o.XV)(b.backgroundColor),
                    (0, o.XV)(b.backgroundColor),
                  ],
                ],
              ]) + " blocks__others__keynumber__container",
            children: [
              (0, m.tZ)("div", {
                className:
                  i.default.dynamic([
                    [
                      "734083956",
                      [
                        b.backgroundColor,
                        (0, o.XV)(b.backgroundColor),
                        (0, o.XV)(b.backgroundColor),
                        (0, o.XV)(b.backgroundColor),
                      ],
                    ],
                  ]) + " blocks__others__keynumber__container__background",
                children: b.keyNumbers.map(function (a) {
                  return a.linkTo
                    ? (0, m.tZ)(k.default, {
                        href: a.linkTo,
                        passHref: !0,
                        children: (0, m.tZ)("a", {
                          className: i.default.dynamic([
                            [
                              "734083956",
                              [
                                b.backgroundColor,
                                (0, o.XV)(b.backgroundColor),
                                (0, o.XV)(b.backgroundColor),
                                (0, o.XV)(b.backgroundColor),
                              ],
                            ],
                          ]),
                          children: (0, m.BX)("div", {
                            className:
                              i.default.dynamic([
                                [
                                  "734083956",
                                  [
                                    b.backgroundColor,
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                  ],
                                ],
                              ]) + " blocks__others__keynumber-row-link",
                            children: [
                              (0, m.BX)("div", {
                                className:
                                  i.default.dynamic([
                                    [
                                      "734083956",
                                      [
                                        b.backgroundColor,
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                      ],
                                    ],
                                  ]) + " blocks__others__keynumber-number",
                                children: [a.number, "\xa0\xa0"],
                              }),
                              (0, m.tZ)("div", {
                                className:
                                  i.default.dynamic([
                                    [
                                      "734083956",
                                      [
                                        b.backgroundColor,
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                      ],
                                    ],
                                  ]) + " blocks__others__keynumber-title",
                                children: a.title,
                              }),
                              (0, m.tZ)("div", {
                                className:
                                  i.default.dynamic([
                                    [
                                      "734083956",
                                      [
                                        b.backgroundColor,
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                        (0, o.XV)(b.backgroundColor),
                                      ],
                                    ],
                                  ]) + " blocks__others__keynumber-arrow",
                                children: (0, m.tZ)(A, {
                                  fillColor: "#000000",
                                }),
                              }),
                            ],
                          }),
                        }),
                      })
                    : (0, m.BX)("div", {
                        className:
                          i.default.dynamic([
                            [
                              "734083956",
                              [
                                b.backgroundColor,
                                (0, o.XV)(b.backgroundColor),
                                (0, o.XV)(b.backgroundColor),
                                (0, o.XV)(b.backgroundColor),
                              ],
                            ],
                          ]) + " blocks__others__keynumber-row",
                        children: [
                          (0, m.BX)("div", {
                            className:
                              i.default.dynamic([
                                [
                                  "734083956",
                                  [
                                    b.backgroundColor,
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                  ],
                                ],
                              ]) + " blocks__others__keynumber-number",
                            children: [a.number, "\xa0\xa0"],
                          }),
                          (0, m.tZ)("div", {
                            className:
                              i.default.dynamic([
                                [
                                  "734083956",
                                  [
                                    b.backgroundColor,
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                  ],
                                ],
                              ]) + " blocks__others__keynumber-title",
                            children: a.title,
                          }),
                          (0, m.tZ)("div", {
                            className:
                              i.default.dynamic([
                                [
                                  "734083956",
                                  [
                                    b.backgroundColor,
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                    (0, o.XV)(b.backgroundColor),
                                  ],
                                ],
                              ]) + " blocks__others__keynumber-arrow",
                            children: "\xa0",
                          }),
                        ],
                      });
                }),
              }),
              (0, m.tZ)(i.default, {
                id: "734083956",
                dynamic: [
                  b.backgroundColor,
                  (0, o.XV)(b.backgroundColor),
                  (0, o.XV)(b.backgroundColor),
                  (0, o.XV)(b.backgroundColor),
                ],
                children: [
                  ".blocks__others__keynumber__container.__jsx-style-dynamic-selector{display:block;width:392px;margin:12px;}",
                  ".blocks__others__keynumber__container__background.__jsx-style-dynamic-selector{background-color:"
                    .concat(b.backgroundColor, ";color:")
                    .concat(
                      (0, o.XV)(b.backgroundColor),
                      ";height:320px;padding:14px 14px 0px 14px;}"
                    ),
                  "@media (min-width:900px){.blocks__others__keynumber__container.__jsx-style-dynamic-selector{width:600px;min-height:595px;}.blocks__others__keynumber__container__background.__jsx-style-dynamic-selector{height:490px;}}",
                  ".blocks__others__keynumber__container.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{width:100%;-webkit-text-decoration:none !important;text-decoration:none !important;}",
                  ".blocks__others__keynumber__container.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}",
                  ".blocks__others__keynumber-row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:left;}",
                  ".blocks__others__keynumber-row-link.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:left;}",
                  ".blocks__others__keynumber-row-link.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",
                  ".blocks__others__keynumber-number.__jsx-style-dynamic-selector{width:20%;color:".concat(
                    (0, o.XV)(b.backgroundColor),
                    ";font-weight:600;font-size:36px;line-height:40px;text-align:right;}"
                  ),
                  ".blocks__others__keynumber-title.__jsx-style-dynamic-selector{width:70%;color:".concat(
                    (0, o.XV)(b.backgroundColor),
                    ";font-weight:300;font-size:36px;line-height:40px;text-align:left;}"
                  ),
                  ".blocks__others__keynumber-arrow.__jsx-style-dynamic-selector{width:10%;line-height:40px;text-align:right;}",
                  ".blocks__others__cta_-row-title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0px 5px 0px;font-family:'Calibre';font-style:normal;color:#000000;}",
                  ".blocks__others__cta_-title.__jsx-style-dynamic-selector{width:90%;}",
                  ".blocks__others__cta_-title.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{font-weight:600;font-size:34px;line-height:36px;text-align:left;margin:0px;padding:0px;}",
                  ".blocks__others__cta_-arrow.__jsx-style-dynamic-selector{width:10%;text-align:right;}",
                  ".blocks__others__cta_-subtitle.__jsx-style-dynamic-selector{font-weight:300;font-size:24px;line-height:26px;}",
                  "@media (min-width:900px){.blocks__others__cta_-title.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{font-size:44px;line-height:46px;}.blocks__others__cta_-subtitle.__jsx-style-dynamic-selector{font-size:32px;line-height:34px;}}",
                ],
              }),
            ],
          });
        },
        R = c(9291),
        S = c(2209),
        T = c(2870),
        U = c.n(T),
        V = c(6486),
        W = c(4723),
        X = U()(
          d ||
            (d = (0, S.Z)([
              "\n    *[_type == 'website' && _id == $conferenceId] [0] {\n    featureToggleDevFestDesign,\n    featureToggleNewDesign,\n    title,\n    featuredImage,\n    conference -> {\n        staticDate,\n        fromDate,\n        toDate,\n        venue -> {\n            title,\n        },\n\t},\n    blocks[] {\n        backgroundColor,\n        _key,\n        subTitle,\n        width,\n        _type,\n        title,\n        preamble,\n        image,\n        ctaText,\n        ctaLink,\n        keyNumbers,\n        showSpeakersCount,\n        highlighted[]->{\n            _id,\n            portrait,\n            firstName,\n            lastName,\n            slug,\n        },\n    },\n    homelinks,\n    confFooter,\n    infoLinks,\n    'conferenceRef': @.conference._ref,\n    'slotTopics': *[_type == 'slot' && references(^.conference._ref) && defined(schedule[].toDate)  && defined(schedule[].fromDate)] {\n      'topics': topics[] -> { ... }\n    },\n    'features': features[] {\n      ...,\n      speaker->,\n      image { ..., asset-> },\n      'highlighted': speakers[] -> { ..., speaker-> }\n    },\n    'slots': *[_type == 'slot' && references(^.conference._ref)] {\n      'speakers': speakers[] -> { ..., portrait, _id, firstName, lastName, }\n    },\n    \n    'workshops': *[\n      _type == 'slot' && \n      slotType == 'course' && \n      references(^.conference._ref)\n    ] {\n      'schedule': schedule[] { ... }\n    }\n\n   \n    \n}\n\n\n",
            ]))
        ),
        Y = U()(
          e ||
            (e = (0, S.Z)([
              '\n*[_type == "conference" && _id == *[_type == "website" && _id == $conferenceId][0].conference._ref][0].partners {\n    ...,\n    \'partner\': source->\n}\n',
            ]))
        );
      function Z(a) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = (0, f.Z)(
          h().mark(function a(b) {
            var c, d, e, f, g, i, j, k, l, m, n, o;
            return h().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), B.Z.fetch(X, { conferenceId: b });
                  case 2:
                    return (
                      (d = a.sent),
                      (a.next = 5),
                      B.Z.fetch(Y, { conferenceId: b })
                    );
                  case 5:
                    if (
                      ((e = a.sent),
                      (f = d.conferenceRef),
                      (g = d.workshops),
                      0 !== Object.keys(d).length)
                    ) {
                      a.next = 9;
                      break;
                    }
                    throw new Error("No data for conference");
                  case 9:
                    return (
                      (i =
                        e && (0, V.isArray)(e)
                          ? e.flatMap(function (a) {
                              return a.partner;
                            })
                          : []),
                      (j = d.slots
                        ? d.slots
                            .flatMap(function (a) {
                              var b;
                              return null !== (b = a.speakers) && void 0 !== b
                                ? b
                                : [];
                            })
                            .filter(function (a) {
                              return null !== a;
                            })
                        : []),
                      (k = (0, W.T)(j, "_id")),
                      (l = d.slotTopics
                        ? d.slotTopics
                            .flatMap(function (a) {
                              var b;
                              return null !== (b = a.topics) && void 0 !== b
                                ? b
                                : [];
                            })
                            .filter(function (a) {
                              return null !== a;
                            })
                        : []),
                      (n = (m = (0, W.T)(l, "_id")).length),
                      d.features &&
                        d.features
                          .filter(function (a) {
                            return "widgetTopics" == a._type;
                          })
                          .forEach(function (a) {
                            (a.topicCount = n), (a.topics = m);
                          }),
                      d.features &&
                        d.features
                          .filter(function (a) {
                            return "widgetSpeakers" == a._type;
                          })
                          .forEach(function (a) {
                            a.speakers = k;
                          }),
                      (o = g
                        ? g
                            .flatMap(function (a) {
                              return a.schedule;
                            })
                            .filter(function (a) {
                              return void 0 != a.conference;
                            })
                            .filter(function (a) {
                              return a.conference._ref == f;
                            })
                            .filter(function (a) {
                              return a.fromDate && a.toDate;
                            }).length
                        : 0),
                      d.features &&
                        d.features
                          .filter(function (a) {
                            return "widgetWorkshops" == a._type;
                          })
                          .forEach(function (a) {
                            a.count = o;
                          }),
                      a.abrupt("return", {
                        features:
                          null !== (c = null == d ? void 0 : d.features) &&
                          void 0 !== c
                            ? c
                            : [],
                        featureToggleDevFestDesign:
                          d.featureToggleDevFestDesign,
                        featureToggleNewDesign: d.featureToggleNewDesign,
                        title: d.title,
                        conference: {
                          _id: d.conference._id,
                          staticDate: d.conference.staticDate,
                          fromDate: d.conference.fromDate,
                          toDate: d.conference.toDate,
                          venue: d.conference.venue,
                        },
                        featuredImage: d.featuredImage,
                        homelinks: d.homelinks,
                        infoLinks: d.infoLinks,
                        blocks: d.blocks || [],
                        speakers: k || [],
                        partners: i || [],
                        confFooter: d.confFooter,
                      })
                    );
                  case 20:
                  case "end":
                    return a.stop();
                }
            }, a);
          })
        )).apply(this, arguments);
      }
      var _ = c(636),
        aa = function (a) {
          var b = a.data,
            c = a.newDesign;
          return (0, m.tZ)(R.Z, {
            children: (0, m.tZ)(
              c
                ? D
                : function (a) {
                    return (0, m.tZ)(v.Z, {
                      children: (0, m.BX)("div", {
                        className: "jsx-3378041967 masonry",
                        children: [
                          (0, m.BX)("div", {
                            className:
                              "jsx-3378041967 masonry__column masonry__column--desktop",
                            children: [
                              a.data.features
                                .filter(function (a) {
                                  return !a.fullWidth;
                                })
                                .filter(function (a) {
                                  return "widgetSpace" !== a._type;
                                })
                                .filter(function (a, b) {
                                  return b % 2 == 0;
                                })
                                .map(function (a) {
                                  return (0,
                                  m.tZ)("div", { className: "jsx-3378041967 masonry__item", children: w(a) }, a._key);
                                }),
                              a.data.features
                                .filter(function (a) {
                                  return !a.fullWidth;
                                })
                                .filter(function (a) {
                                  return "widgetSpace" === a._type;
                                })
                                .map(function (a) {
                                  return (0,
                                  m.tZ)("div", { className: "jsx-3378041967 masonry__item masonry__item--space", children: w(a) }, a._key);
                                }),
                            ],
                          }),
                          (0, m.BX)("div", {
                            className:
                              "jsx-3378041967 masonry__column masonry__column--desktop",
                            children: [
                              a.data.features
                                .filter(function (a) {
                                  return !a.fullWidth;
                                })
                                .filter(function (a) {
                                  return "widgetSpace" !== a._type;
                                })
                                .filter(function (a, b) {
                                  return b % 2 == 1;
                                })
                                .map(function (a) {
                                  return (0,
                                  m.tZ)("div", { className: "jsx-3378041967 masonry__item", children: w(a) }, a._key);
                                }),
                              a.data.features
                                .filter(function (a) {
                                  return !a.fullWidth;
                                })
                                .filter(function (a) {
                                  return "widgetSpace" === a._type;
                                })
                                .map(function (a) {
                                  return (0,
                                  m.tZ)("div", { className: "jsx-3378041967 masonry__item  masonry__item--space", children: w(a) }, a._key);
                                }),
                            ],
                          }),
                          (0, m.tZ)("div", {
                            className:
                              "jsx-3378041967 masonry__column masonry__column--mobile",
                            children: a.data.features
                              .filter(function (a) {
                                return !a.fullWidth;
                              })
                              .map(function (a) {
                                return (0,
                                m.tZ)("div", { className: "jsx-3378041967 masonry__item", children: w(a) }, a._key);
                              }),
                          }),
                          (0, m.tZ)("div", {
                            className: "jsx-3378041967 masonry__poster",
                            children: a.data.features
                              .filter(function (a) {
                                return a.fullWidth;
                              })
                              .map(function (a) {
                                return (0,
                                m.tZ)("div", { className: "jsx-3378041967 masonry__item", children: w(a) }, a._key);
                              }),
                          }),
                          (0, m.tZ)(i.default, {
                            id: "3378041967",
                            children: [
                              "@media (min-width:1000px){.masonry.jsx-3378041967{display:grid;grid-template-columns:50% 50%;}}",
                              ".masonry__column.jsx-3378041967{z-index:2;}",
                              ".masonry__item--space.jsx-3378041967{height:100%;}",
                              ".masonry__column--desktop.jsx-3378041967{display:none;}",
                              "@media (min-width:600px){.masonry__column--desktop.jsx-3378041967{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",
                              "@media (min-width:600px){.masonry__column--mobile.jsx-3378041967{display:none;}}",
                              "@media (min-width:600px){.masonry__poster.jsx-3378041967{grid-column:span 2;}}",
                            ],
                          }),
                        ],
                      }),
                    });
                  },
              { data: b }
            ),
          });
        };
      aa.getInitialProps = (function () {
        var a = (0, f.Z)(
          h().mark(function a(b) {
            var c, d;
            return h().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (c = (0, _.$)(b)), (a.next = 3), Z(c);
                  case 3:
                    return (
                      (d = a.sent),
                      a.abrupt("return", {
                        data: d,
                        newDesign:
                          d.featureToggleNewDesign ||
                          "true" === b.query["new-design"],
                      })
                    );
                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a);
          })
        );
        return function (b) {
          return a.apply(this, arguments);
        };
      })();
      var ba = aa;
    },
    5301: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(777);
        },
      ]);
    },
  },
  function (a) {
    a.O(0, [687, 774, 888, 179], function () {
      return a((a.s = 5301));
    }),
      (_N_E = a.O());
  },
]);
