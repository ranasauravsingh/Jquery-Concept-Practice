!(function (t, e) {
	function o(e, o) {
		(this.element = e),
			(this.config = t.extend({}, n, o)),
			(this._defaults = n),
			(this._name = i),
			this.init();
	}
	var i = "svgpopup",
		n = {
			stepX: 12,
			stepY: 12,
			fill: "#03BDD6",
			fillOdd: null,
			fillEven: null,
			strokeFill: null,
			opacity: 0.8,
			speed: 1.8,
			figure: "triangle",
			visible: !1,
			randomize: !0,
			closeButtonText: "&#10006;",
			width: t(e).width(),
			height: t(e).height(),
			onAnimationComplate: function () {},
		};
	(o.prototype.init = function () {
		var e = this.element,
			o = this.config,
			i = {
				svg: null,
				poligon: null,
				content: null,
				sizeX: this.config.width / this.config.stepX,
				sizeY: this.config.height / this.config.stepY,
				getRandomInt: function (t, e) {
					return Math.floor(Math.random() * (e - t + 1)) + t;
				},
				createPolygon: function (t, e) {
					var n = null;
					return (
						"triangle" === o.figure
							? (n = {
									first:
										t * i.sizeX +
										"," +
										e * i.sizeY +
										" " +
										(t + 1) * i.sizeX +
										"," +
										e * i.sizeY +
										" " +
										t * i.sizeX +
										"," +
										(e + 1) * i.sizeY,
									second:
										t * i.sizeX +
										"," +
										(e + 1) * i.sizeY +
										" " +
										(t + 1) * i.sizeX +
										"," +
										e * i.sizeY +
										" " +
										(t + 1) * i.sizeX +
										"," +
										(e + 1) * i.sizeY,
							  })
							: "rectangle" === o.figure &&
							  (n =
									t * i.sizeX +
									"," +
									e * i.sizeY +
									" " +
									(t + 1) * i.sizeX +
									"," +
									e * i.sizeY +
									" " +
									(t + 1) * i.sizeX +
									"," +
									(e + 1) * i.sizeY +
									" " +
									t * i.sizeX +
									"," +
									(e + 1) * i.sizeY),
						n
					);
				},
				createMarkup: function (t) {
					for (
						var e =
								(o.width / o.stepX,
								o.height / o.stepY,
								'<svg class="svg-popup-particles-wrap ' + t + '">'),
							n = 0;
						n < o.stepX;
						n++
					)
						for (var s = 0; s < o.stepY; s++) {
							var a = i.createPolygon(n, s),
								p = {
									odd: null === o.fillOdd ? o.fill : o.fillOdd,
									even: null === o.fillEven ? o.fill : o.fillEven,
								},
								l = null === o.strokeFill ? p.odd : o.strokeFill,
								r = i.getRandomInt(0, o.width),
								d = i.getRandomInt(0, o.height),
								g = i.getRandomInt(0, o.width),
								c = i.getRandomInt(0, o.height),
								h = o.randomize === !0 ? i.getRandomInt(0, 360) : 0,
								f = o.randomize === !0 ? i.getRandomInt(0, 360) : 0,
								u =
									"opacity: " +
									o.opacity +
									";position:absolute;-webkit-transform:translate(" +
									r +
									"px," +
									d +
									"px) rotateX(" +
									h +
									"deg) rotateY(" +
									f +
									"deg);",
								y =
									"opacity: " +
									o.opacity +
									";position:absolute;-webkit-transform:translate(" +
									g +
									"px," +
									c +
									"px) rotateX(" +
									h +
									"deg) rotateY(" +
									f +
									"deg);";
							if ("triangle" === o.figure)
								(e +=
									'<polygon data-posx="' +
									r +
									'" data-rotationy="' +
									f +
									'" data-rotationx="' +
									h +
									'" data-posy="' +
									d +
									'" style="' +
									u +
									'" fill="' +
									p.odd +
									'" stroke="' +
									l +
									'" points="' +
									a.first +
									'"></polygon>'),
									(e +=
										'<polygon data-posx="' +
										g +
										'" data-rotationy="' +
										f +
										'" data-rotationx="' +
										h +
										'" " data-posy="' +
										c +
										'" style="' +
										y +
										'" fill="' +
										p.even +
										'" stroke="' +
										l +
										'" points="' +
										a.second +
										'"></polygon>');
							else if ("rectangle" === o.figure) {
								var v = (s + n) % 2 === 0 ? p.odd : p.even,
									l = null === o.strokeFill ? v : o.strokeFill;
								e +=
									'<polygon data-posx="' +
									r +
									'" data-rotationy="' +
									f +
									'" data-rotationx="' +
									h +
									'" data-posy="' +
									d +
									'" style="' +
									u +
									'" fill="' +
									v +
									'" stroke="' +
									l +
									'" points="' +
									a +
									'"></polygon>';
							}
						}
					return (e += "</svg>");
				},
				destroyPolygon: function (e) {
					for (var n = 0; n < this.polygon.length; n++) {
						var s = t(this.polygon[n]),
							a = s.attr("data-posx"),
							p = s.attr("data-posy"),
							l = s.attr("data-rotationy"),
							r = s.attr("data-rotationx");
						s.css({
							transform:
								"translate(" +
								a +
								"px," +
								p +
								"px) rotateX(" +
								r +
								"deg) rotateY(" +
								l +
								"deg)",
							"-webkit-transform":
								"translate(" +
								a +
								"px," +
								p +
								"px) rotateX(" +
								r +
								"deg) rotateY(" +
								l +
								"deg)",
							opacity: o.visible === !1 ? 0 : o.opacity,
						});
					}
					e.detach(),
						this.content.css({ top: o.height + "%" }),
						setTimeout(function () {
							i.svg.css({ "z-index": "-1" });
						}, 1e3 * o.speed);
				},
				animPolygon: function () {
					this.svg.css({ opacity: o.opacity, "z-index": "10000" }),
						this.polygon.css({
							transform: " translate(0,0) rotateX(0deg) rotateY(0deg)",
							"-webkit-transform":
								" translate(0,0) rotateX(0deg) rotateY(0deg)",
							transition: "all " + o.speed + "s",
							"-webkit-transition": "all " + o.speed + "s",
							opacity: "1",
						}),
						t(".svg-popup-content").height() >= o.height &&
							t(".svg-popup-content")
								.css({
									"max-height": o.height - 30 + "px",
									"overflow-y": "auto",
									"overflow-x": "hidden",
								})
								.addClass("svg-popup-max-height"),
						setTimeout(function () {
							i.content
								.css({ top: "50%" })
								.append(
									'<span class="svg-popup-close">' +
										o.closeButtonText +
										"</span>"
								),
								t(".svg-popup-close").on("click", function () {
									i.destroyPolygon(t(this));
								}),
								o.onAnimationComplate(e);
						}, 1e3 * o.speed);
				},
				appendMarkup: function () {
					(this.content = t("#" + t(e).data("svg-popup"))
						.append(i.createMarkup(t(e).data("svg-popup")))
						.find(".svg-popup-content")
						.css({
							position: "fixed",
							left: "50%",
							top: o.height + "%",
							"z-index": "10001",
							transform: "translate(-50%,-50%)",
							"-webkit-transform": "translate(-50%,-50%)",
							"-webkit-transition": "top 0.3s",
							transition: "top 0.3s",
						})),
						(this.svg = t("#" + t(e).data("svg-popup")).find(
							"svg.svg-popup-particles-wrap"
						)),
						(this.polygon = this.svg.find("polygon")),
						this.svg.css({
							width: o.width + "px",
							height: o.height + "px",
							opacity: o.visible === !1 ? 0 : 1,
							position: "fixed",
							top: "0px",
							left: "0px",
							overflow: "hidden",
							"z-index": "-1",
						});
				},
				init: function () {
					this.appendMarkup(),
						t(e).on("click", function () {
							i.animPolygon();
						});
				},
			};
		i.init();
	}),
		(t.fn[i] = function (e) {
			return this.each(function () {
				t.data(this, "plugin_" + i) ||
					t.data(this, "plugin_" + i, new o(this, e));
			});
		});
})(jQuery, window, document);
