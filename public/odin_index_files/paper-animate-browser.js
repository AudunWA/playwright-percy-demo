!(function e(t, n, a) {
	function o(r, s) {
		if (!n[r]) {
			if (!t[r]) {
				var d = "function" == typeof require && require;
				if (!s && d) return d(r, !0);
				if (i) return i(r, !0);
				var u = new Error("Cannot find module '" + r + "'");
				throw ((u.code = "MODULE_NOT_FOUND"), u);
			}
			var p = (n[r] = { exports: {} });
			t[r][0].call(
				p.exports,
				function(e) {
					var n = t[r][1][e];
					return o(n || e);
				},
				p,
				p.exports,
				e,
				t,
				n,
				a
			);
		}
		return n[r].exports;
	}
	for (var i = "function" == typeof require && require, r = 0; r < a.length; r++) o(a[r]);
	return o;
})(
	{
		1: [function(e, t, n) {}, {}],
		2: [
			function(e, t, n) {
				"use strict";
				function a(e) {
					var t = { duration: 400, delay: 0, repeat: 0, easing: "linear", complete: void 0, step: void 0, mode: "onFrame" };
					return (
						void 0 === e && (e = {}),
						void 0 === e.duration ? (e.duration = t.duration) : ((e.duration = Number(e.duration)), e.duration < 0 && (e.duration = t.duration)),
						void 0 === e.delay ? (e.delay = t.delay) : ((e.delay = Number(e.delay)), e.delay < 1 && (e.delay = t.delay)),
						void 0 === e.repeat
							? (e.repeat = t.repeat)
							: "function" == typeof e.repeat || (!0 !== e.repeat && ((e.repeat = Number(e.repeat)), e.repeat < 0 && (e.repeat = t.repeat))),
						void 0 === e.easing && (e.easing = t.easing),
						"function" == typeof e.easing
							? (e.easingFunction = e.easing)
							: void 0 !== r.easing[e.easing] && r.easing.hasOwnProperty(e.easing)
								? (e.easingFunction = r.easing[e.easing])
								: ((e.easing = t.easing), (e.easingFunction = r.easing[t.easing])),
						"function" != typeof e.complete && (e.complete = void 0),
						"function" != typeof e.step && (e.step = void 0),
						-1 === ["onFrame", "timeout"].indexOf(e.mode) && (e.mode = t.mode),
						e
					);
				}
				n.__esModule = !0;
				var o = (e("./getPaper"), e("./tween")),
					i = e("./frameManager"),
					r = e("./easing"),
					s = (function() {
						function e(t, n, r, s) {
							var d = this;
							if (
								((this.stopped = !1),
								(this.startTime = new Date().getTime()),
								(this.settings = a(r)),
								(this.item = t),
								(this.itemForAnimations = this.settings.parentItem || this.item),
								(this.repeat = this.settings.repeat || 0),
								"function" == typeof this.settings.repeat)
							) {
								var u = this.settings.repeat;
								this.repeatCallback = function() {
									return u(t, d) ? new e(t, n, r, s) : null;
								};
							} else
								(!0 === this.repeat || this.repeat > 0) &&
									(this.repeatCallback = function(a) {
										return (r.repeat = a), new e(t, n, r, s);
									});
							(this.tweens = []),
								(this.ticker = null),
								(this._continue = s),
								void 0 === this.itemForAnimations.data && (this.itemForAnimations.data = {}),
								void 0 === this.itemForAnimations.data._animatePaperAnims && (this.itemForAnimations.data._animatePaperAnims = []),
								(this._dataIndex = this.itemForAnimations.data._animatePaperAnims.length),
								(this.itemForAnimations.data._animatePaperAnims[this._dataIndex] = this);
							for (var p in n) n.hasOwnProperty(p) && this.tweens.push(new o.Tween(p, n[p], this));
							"onFrame" === this.settings.mode &&
								(this.ticker = i.add(this.itemForAnimations, "_animate" + this.startTime + (Math.floor(999 * Math.random()) + 1), function() {
									d.tick();
								}));
						}
						return (
							(e.prototype.tick = function() {
								var e = this;
								if (e.stopped) return !1;
								var t = new Date().getTime();
								if (e.startTime + e.settings.delay > t) return !1;
								for (
									var n = Math.max(0, e.startTime + e.settings.delay + e.settings.duration - t),
										a = n / e.settings.duration || 0,
										o = 1 - a,
										i = 0,
										r = e.tweens.length;
									i < r;
									i++
								)
									e.tweens[i].run(o);
								return (
									void 0 !== e.settings.step && e.settings.step.call(e.item, { percent: o, remaining: n }),
									void 0 !== e.settings.parentItem ? e.settings.parentItem.project.view.draw() : e.item.project.view.draw(),
									e.settings.mode,
									o < 1 && r ? n : (e.end(), !1)
								);
							}),
							(e.prototype.stop = function(e, t) {
								void 0 === e && (e = !1), void 0 === t && (t = !1);
								var n = this,
									a = 0,
									o = e ? n.tweens.length : 0;
								if (n.stopped) return n;
								for (n.stopped = !0; a < o; a++) n.tweens[a].run(1);
								e && (n._continue && (n._continue = null), n.end(t));
							}),
							(e.prototype.end = function(e) {
								void 0 === e && (e = !1);
								var t = this;
								if (
									("onFrame" === t.settings.mode && i.remove(t.itemForAnimations, t.ticker),
									void 0 !== t.settings.complete && t.settings.complete.call(t.item, this),
									t.settings.mode,
									"function" == typeof t._continue && t._continue.call(t.item),
									(t.itemForAnimations.data._animatePaperAnims[t._dataIndex] = null),
									!e && "function" == typeof t.repeatCallback)
								) {
									var n = t.repeat;
									return !0 !== t.repeat && (n = t.repeat - 1), t.repeatCallback(n);
								}
								t = null;
							}),
							e
						);
					})();
				n.Animation = s;
			},
			{ "./easing": 3, "./frameManager": 7, "./getPaper": 8, "./tween": 10 }
		],
		3: [
			function(e, t, n) {
				"use strict";
				(n.__esModule = !0),
					(n.easing = {
						extendEasing: function(e) {
							for (var t in e) e.hasOwnProperty(t) && (n.easing[t] = e[t]);
						},
						linear: function(e) {
							return e;
						},
						swing: function(e) {
							return 0.5 - Math.cos(e * Math.PI) / 2;
						},
						Sine: function(e) {
							return 1 - Math.cos((e * Math.PI) / 2);
						},
						Circ: function(e) {
							return 1 - Math.sqrt(1 - e * e);
						},
						Elastic: function(e) {
							return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((80 * (e - 1) - 7.5) * Math.PI) / 15);
						},
						Back: function(e) {
							return e * e * (3 * e - 2);
						},
						Bounce: function(e) {
							for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
							return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
						}
					});
				for (var a = ["Quad", "Cubic", "Quart", "Quint", "Expo"], o = 0, i = a.length; o < i; o++)
					n.easing[a[o]] = function(e) {
						return Math.pow(e, o + 2);
					};
				a = null;
				for (var r in n.easing)
					if (n.easing.hasOwnProperty(r)) {
						var s = n.easing[r];
						(n.easing["easeIn" + r] = s),
							(n.easing["easeOut" + r] = function(e) {
								return 1 - s(1 - e);
							}),
							(n.easing["easeInOut" + r] = function(e) {
								return e < 0.5 ? s(2 * e) / 2 : 1 - s(-2 * e + 2) / 2;
							});
					}
			},
			{}
		],
		4: [
			function(e, t, n) {
				"use strict";
				n.__esModule = !0;
				var a = e("./animation"),
					o = function(e, t) {
						var n = [];
						t instanceof Array ? (n = t) : n.push(t);
						var o = 0;
						return (
							new a.Animation(e, n[o].properties, n[o].settings, function t() {
								o++, void 0 !== n[o] && new a.Animation(e, n[o].properties, n[o].settings, t);
							}),
							e
						);
					};
				(n.grow = function(e, t) {
					return console.log("segmentGrow was buggy and has been removed, sorry :/"), e;
				}),
					(n.shake = function(e, t) {
						for (var n = 2 * Math.floor(t ? t.nb || 2 : 2), a = Math.floor(t ? t.movement || 40 : 40), i = [], r = !0; n > 0; n--) {
							var s = n % 2 ? "+" : "-",
								d = a,
								u = null;
							1 === n && t && void 0 !== t.complete && (u = t.complete),
								(r || 1 === n) && ((d /= 2), (r = !1)),
								i.push({ properties: { position: { x: s + d } }, settings: { duration: 100, easing: "swing", complete: u } });
						}
						o(e, i);
					}),
					(n.fadeIn = function(e, t) {
						var n = 500,
							a = void 0,
							i = "swing";
						void 0 !== t &&
							(void 0 !== t.duration && (n = Number(t.duration)),
							"function" == typeof t.complete && (a = t.complete),
							void 0 !== t.easing && (i = t.easing)),
							o(e, { properties: { opacity: 1 }, settings: { duration: n, easing: i, complete: a } });
					}),
					(n.fadeOut = function(e, t) {
						var n = 500,
							a = void 0,
							i = "swing";
						void 0 !== t &&
							(void 0 !== t.duration && (n = Number(t.duration)),
							"function" == typeof t.complete && (a = t.complete),
							void 0 !== t.easing && (i = t.easing)),
							o(e, { properties: { opacity: 0 }, settings: { duration: n, easing: i, complete: a } });
					}),
					(n.slideUp = function(e, t) {
						var n = 500,
							a = void 0,
							i = 50,
							r = "swing";
						void 0 !== t &&
							(void 0 !== t.duration && (n = Number(t.duration)),
							"function" == typeof t.complete && (a = t.complete),
							void 0 !== t.easing && (r = t.easing),
							void 0 !== t.distance && (i = t.distance)),
							o(e, { properties: { opacity: 1, position: { y: "-" + i } }, settings: { duration: n, easing: r, complete: a } });
					}),
					(n.slideDown = function(e, t) {
						var n = 500,
							a = void 0,
							i = 50,
							r = "swing";
						void 0 !== t &&
							(void 0 !== t.duration && (n = Number(t.duration)),
							"function" == typeof t.complete && (a = t.complete),
							void 0 !== t.easing && (r = t.easing),
							void 0 !== t.distance && (i = t.distance)),
							o(e, { properties: { opacity: 0, position: { y: "+" + i } }, settings: { duration: n, easing: r, complete: a } });
					}),
					(n.splash = function(e, t) {
						var n = 500,
							a = void 0,
							i = "swing";
						void 0 !== t &&
							(void 0 !== t.duration && (n = Number(t.duration)),
							"function" == typeof t.complete && (a = t.complete),
							void 0 !== t.easing && (i = t.easing)),
							o(e, { properties: { opacity: 1, scale: 3, rotate: 360 }, settings: { duration: n, easing: i, complete: a } });
					}),
					void 0 !== t &&
						(t.exports = {
							grow: function(e, t) {
								return console.log("segmentGrow was buggy and has been removed, sorry :/"), e;
							},
							shake: n.shake,
							fadeIn: n.fadeIn,
							fadeOut: n.fadeOut,
							slideUp: n.slideUp,
							slideDown: n.slideDown,
							splash: n.splash
						});
			},
			{ "./animation": 2 }
		],
		5: [
			function(e, t, n) {
				"use strict";
				n.__esModule = !0;
				var a = e("./export");
				window.animatePaper = a;
			},
			{ "./export": 6 }
		],
		6: [
			function(e, t, n) {
				"use strict";
				n.__esModule = !0;
				var a = e("./animation"),
					o = e("./effects"),
					i = e("./easing"),
					r = e("./frameManager"),
					s = e("./prophooks"),
					d = e("./getPaper");
				(n.animate = function(e, t) {
					var n = [];
					t instanceof Array ? (n = t) : n.push(t);
					var o = 0;
					return (
						new a.Animation(e, n[o].properties, n[o].settings, function t() {
							o++, void 0 !== n[o] && new a.Animation(e, n[o].properties, n[o].settings, t);
						}),
						e
					);
				}),
					(n.stop = function(e, t, n) {
						if (e.data._animatePaperAnims)
							for (var a = 0, o = e.data._animatePaperAnims.length; a < o; a++)
								e.data._animatePaperAnims[a] && e.data._animatePaperAnims[a].stop(t, n);
						return e;
					}),
					(n.extendEasing = i.easing.extendEasing),
					(n.frameManager = r),
					(n.fx = o),
					d.Item.prototype.animate ||
						(d.Item.prototype.animate = function(e) {
							return n.animate(this, e);
						}),
					d.Item.prototype.stop ||
						(d.Item.prototype.stop = function(e, t) {
							return n.stop(this, e, t);
						}),
					void 0 !== t &&
						(t.exports = {
							animate: n.animate,
							stop: n.stop,
							frameManager: n.frameManager,
							fx: n.fx,
							extendEasing: n.extendEasing,
							extendPropHooks: s.extendPropHooks
						});
			},
			{ "./animation": 2, "./easing": 3, "./effects": 4, "./frameManager": 7, "./getPaper": 8, "./prophooks": 9 }
		],
		7: [
			function(e, t, n) {
				"use strict";
				function a(e) {
					var t = this;
					if ((void 0 === t.data && (t.data = {}), void 0 !== t.data._customHandlers && t.data._customHandlersCount > 0))
						for (var n in t.data._customHandlers)
							t.data._customHandlers.hasOwnProperty(n) && "function" == typeof t.data._customHandlers[n] && t.data._customHandlers[n].call(t, e);
				}
				(n.__esModule = !0),
					(n.add = function(e, t, n, o) {
						return (
							void 0 === e.data._customHandlers && ((e.data._customHandlers = {}), (e.data._customHandlersCount = 0)),
							(e.data._customHandlers[t] = n),
							(e.data._customHandlersCount += 1),
							e.data._customHandlersCount > 0 && (void 0 !== o ? (o.onFrame = a) : (e.onFrame = a)),
							t
						);
					}),
					(n.remove = function(e, t) {
						void 0 !== e.data._customHandlers &&
							((e.data._customHandlers[t] = null),
							(e.data._customHandlersCount -= 1),
							e.data._customHandlersCount <= 0 && (e.data._customHandlersCount = 0));
					});
			},
			{}
		],
		8: [
			function(e, t, n) {
				var a = e("paper");
				"undefined" != typeof window && void 0 !== window.paper && (a = window.paper), (t.exports = a);
			},
			{ paper: 1 }
		],
		9: [
			function(e, t, n) {
				"use strict";
				function a(e) {
					var t = null,
						n = "";
					if (((t = Number(e)), "string" == typeof e)) {
						var a = e.match(r);
						(n = a[1]), (t = Number(a[2]));
					}
					return { value: t, direction: n };
				}
				function o(e) {
					var t;
					return e.type ? (t = e.type) : (e.red, (t = "rgb")), t;
				}
				function i(e) {
					var t;
					if (e._properties) t = e._properties;
					else {
						switch (o(e)) {
							case "gray":
								t = ["gray"];
								break;
							case "rgb":
								t = ["red", "green", "blue"];
								break;
							case "hsl":
								t = ["hue", "saturation", "lightness"];
								break;
							case "hsb":
								t = ["hue", "brightness", "saturation"];
						}
					}
					return t;
				}
				n.__esModule = !0;
				for (
					var r = /^([+\-])(.+)/,
						s = function(e, t, n) {
							if (-1 !== ["+", "-"].indexOf(n) && void 0 !== e && void 0 !== t) {
								if ((e.x || 0, t.x || 0, e.y || 0, t.y || 0, "+" === n)) return e.add(t);
								if ("-" === n) return e.subtract(t);
								throw new Error("Unknown operator");
							}
						},
						d = {
							_default: {
								get: function(e) {
									var t;
									return null !== e.item[e.prop] && (t = e.item[e.prop]), t;
								},
								set: function(e) {
									var t = {};
									(t[e.prop] = e.now), e.item.set(t);
								}
							},
							scale: {
								get: function(e) {
									return (
										e.item.data._animatePaperVals || (e.item.data._animatePaperVals = {}),
										void 0 === e.item.data._animatePaperVals.scale && (e.item.data._animatePaperVals.scale = 1),
										e.item.data._animatePaperVals.scale
									);
								},
								set: function(e) {
									var t = e.item.data._animatePaperVals.scale,
										n = e.now / t;
									e.item.data._animatePaperVals.scale = e.now;
									var a = !1;
									void 0 !== e.A.settings.center && (a = e.A.settings.center),
										void 0 !== e.A.settings.scaleCenter && (a = e.A.settings.scaleCenter),
										!1 !== a ? e.item.scale(n, a) : e.item.scale(n);
								}
							},
							rotate: {
								get: function(e) {
									return (
										e.item.data._animatePaperVals || (e.item.data._animatePaperVals = {}),
										void 0 === e.item.data._animatePaperVals.rotate && (e.item.data._animatePaperVals.rotate = -0),
										e.item.data._animatePaperVals.rotate
									);
								},
								set: function(e) {
									var t = e.item.data._animatePaperVals.rotate,
										n = e.now - t;
									e.item.data._animatePaperVals.rotate = e.now;
									var a = !1;
									void 0 !== e.A.settings.center && (a = e.A.settings.center),
										void 0 !== e.A.settings.rotateCenter && (a = e.A.settings.rotateCenter),
										!1 !== a ? e.item.rotate(n, a) : e.item.rotate(n);
								}
							},
							translate: {
								get: function(e) {
									return (
										e.item.data._animatePaperVals || (e.item.data._animatePaperVals = {}),
										void 0 === e.item.data._animatePaperVals.translate && (e.item.data._animatePaperVals.translate = new paper.Point(0, 0)),
										e.item.data._animatePaperVals.translate
									);
								},
								set: function(e) {
									var t = e.item.data._animatePaperVals.translate,
										n = s(e.now, t, "-");
									(e.item.data._animatePaperVals.translate = e.now), e.item.translate(n);
								},
								ease: function(e, t) {
									var n = s(e.end, e.start, "-");
									return (n.x = n.x * t), (n.y = n.y * t), (e.now = s(n, e.start, "+")), e.now;
								}
							},
							position: {
								get: function(e) {
									return { x: e.item.position.x, y: e.item.position.y };
								},
								set: function(e) {
									(e.item.position.x += e.now.x), (e.item.position.y += e.now.y);
								},
								ease: function(e, t) {
									void 0 === e._easePositionCache && (e._easePositionCache = { x: 0, y: 0 });
									var n = a(e.end.x || 0),
										o = n.value,
										i = n.direction,
										r = a(e.end.y || 0),
										s = r.value,
										d = r.direction,
										u = function(e) {
											return (e || 0) * t;
										};
									return (
										void 0 !== e.end.x
											? "+" === i
												? ((e.now.x = u(o) - e._easePositionCache.x), (e._easePositionCache.x += e.now.x))
												: "-" === i
													? ((e.now.x = u(o) - e._easePositionCache.x), (e._easePositionCache.x += e.now.x), (e.now.x = -e.now.x))
													: ((e.now.x = (o - e.start.x) * t - e._easePositionCache.x), (e._easePositionCache.x += e.now.x))
											: (e.now.x = 0),
										void 0 !== e.end.y
											? "+" === d
												? ((e.now.y = u(s) - e._easePositionCache.y), (e._easePositionCache.y += e.now.y))
												: "-" === d
													? ((e.now.y = u(s) - e._easePositionCache.y), (e._easePositionCache.y += e.now.y), (e.now.y = -e.now.y))
													: ((e.now.y = (s - e.start.y) * t - e._easePositionCache.y), (e._easePositionCache.y += e.now.y))
											: (e.now.y = 0),
										e.now
									);
								}
							},
							pointPosition: {
								get: function(e) {
									return { x: e.item.x, y: e.item.y };
								},
								set: function(e) {
									(e.item.x += e.now.x), (e.item.y += e.now.y);
								},
								ease: function(e, t) {
									void 0 === e._easePositionCache && (e._easePositionCache = { x: 0, y: 0 });
									var n = a(e.end.x || 0),
										o = n.value,
										i = n.direction,
										r = a(e.end.y || 0),
										s = r.value,
										d = r.direction,
										u = function(e) {
											return (e || 0) * t;
										};
									return (
										void 0 !== e.end.x
											? "+" === i
												? ((e.now.x = u(o) - e._easePositionCache.x), (e._easePositionCache.x += e.now.x))
												: "-" === i
													? ((e.now.x = u(o) - e._easePositionCache.x), (e._easePositionCache.x += e.now.x), (e.now.x = -e.now.x))
													: ((e.now.x = (o - e.start.x) * t - e._easePositionCache.x), (e._easePositionCache.x += e.now.x))
											: (e.now.x = 0),
										void 0 !== e.end.y
											? "+" === d
												? ((e.now.y = u(s) - e._easePositionCache.y), (e._easePositionCache.y += e.now.y))
												: "-" === d
													? ((e.now.y = u(s) - e._easePositionCache.y), (e._easePositionCache.y += e.now.y), (e.now.y = -e.now.y))
													: ((e.now.y = (s - e.start.y) * t - e._easePositionCache.y), (e._easePositionCache.y += e.now.y))
											: (e.now.y = 0),
										e.now
									);
								}
							},
							Color: {
								get: function(e) {
									for (var t = e.item[e.prop], n = i(t), a = {}, o = 0, r = n; o < r.length; o++) {
										var s = r[o];
										a[s] = t[s];
									}
									return a;
								},
								set: function(e) {
									for (var t = i(e.item[e.prop]), n = e.item[e.prop], a = {}, o = 0, r = t; o < r.length; o++) {
										var s = r[o];
										a[s] = n[s] + e.now[s];
									}
									e.item[e.prop] = a;
								},
								ease: function(e, t) {
									for (
										var n = i(e.item[e.prop]),
											o = function(e) {
												return (e || 0) * t;
											},
											r = 0,
											s = n;
										r < s.length;
										r++
									) {
										var d = s[r],
											u = d;
										void 0 === e._easeColorCache && (e._easeColorCache = {}), void 0 === e._easeColorCache[u] && (e._easeColorCache[u] = 0);
										var p = a(e.end[u] || 0),
											c = p.value,
											m = p.direction;
										void 0 !== e.end[u]
											? "+" === m
												? ((e.now[u] = o(c) - e._easeColorCache[u]), (e._easeColorCache[u] += e.now[u]))
												: "-" === m
													? ((e.now[u] = o(c) - e._easeColorCache[u]), (e._easeColorCache[u] += e.now[u]), (e.now[u] = -e.now[u]))
													: ((e.now[u] = (c - e.start[u]) * t - e._easeColorCache[u]), (e._easeColorCache[u] += e.now[u]))
											: (e.now[u] = 0);
									}
									return e.now;
								}
							}
						},
						u = ["fill", "stroke"],
						p = 0,
						c = u.length;
					p < c;
					p++
				)
					d[u[p] + "Color"] = d.Color;
				(n._tweenPropHooks = d),
					(n._pointDiff = s),
					(n.extendPropHooks = function(e) {
						for (var t in e) e.hasOwnProperty(t) && (d[t] = e[t]);
					}),
					void 0 !== t && (t.exports = { _tweenPropHooks: d, __pointDiff: s, extendPropHooks: n.extendPropHooks });
			},
			{}
		],
		10: [
			function(e, t, n) {
				"use strict";
				n.__esModule = !0;
				var a = e("./prophooks"),
					o = e("./easing"),
					i = (function() {
						function e(e, t, n) {
							var a = this;
							(a.A = n),
								(a.item = n.item),
								(a.prop = e),
								(a.end = t),
								(a.start = a.cur()),
								"string" == typeof a.end && "+" === a.end.charAt(0)
									? (a.end = a.start + parseFloat(a.end))
									: "string" == typeof a.end && "-" === a.end.charAt(0) && (a.end = a.start + parseFloat(a.end)),
								(a.now = a.cur()),
								(a.direction = a.end > a.start ? "+" : "-");
						}
						return (
							(e.prototype.cur = function() {
								var e = this,
									t = a._tweenPropHooks[e.prop];
								return t && t.get ? t.get(e) : a._tweenPropHooks._default.get(e);
							}),
							(e.prototype.run = function(e) {
								var t,
									n = this,
									i = a._tweenPropHooks[n.prop],
									r = n.A.settings;
								if (r.duration) {
									var s = void 0;
									(s = "function" == typeof r.easing ? r.easing : o.easing[r.easing]), (n.pos = t = s(e, r.duration * e, 0, 1, n.duration));
								} else n.pos = t = e;
								return (
									i && i.ease ? i.ease(n, t) : (n.now = (n.end - n.start) * t + n.start),
									i && i.set ? i.set(n) : a._tweenPropHooks._default.set(n),
									n
								);
							}),
							e
						);
					})();
				n.Tween = i;
			},
			{ "./easing": 3, "./prophooks": 9 }
		]
	},
	{},
	[5]
);
