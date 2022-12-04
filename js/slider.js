(function ($) {
	"use strict";

	/*--
		Banner Height
    -----------------------------------*/
	function bannerHeight() {
		var header = $(".header-section"),
			headerHeight = header.innerHeight(),
			banner = $(".slider-wrapper, .page-banner__wrapper"),
			nextElem = header.next();

		if (header.hasClass("header-sticky") == true) {
			banner.css({
				// 'min-height' : 'calc(100vh - ' + headerHeight + 'px)',
				"margin-top": headerHeight + "px",
			});
			nextElem.css({
				"margin-top": headerHeight + "px",
			});
		}
	}
	bannerHeight();

	/*--
		Header Sticky
    -----------------------------------*/
	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 100) {
			$(".header-sticky").removeClass("sticky");
			$(
				".header-sticky .header-main-04 .header-logo img, .header-sticky .header-main-05 .header-logo img"
			).attr("src", "assets/images/light-logo.png");
		} else {
			$(".header-sticky").addClass("sticky");
			$(
				".header-sticky .header-main-04 .header-logo img, .header-sticky .header-main-05 .header-logo img"
			).attr("src", "assets/images/dark-logo.png");
		}
	});

	/*--
		Sub menu viewport position
    -----------------------------------*/
	var windows = $(window);

	if ($(".menu-primary__container>li").find(".sub-menu").length) {
		var elm = $(".menu-primary__container>li").find(".sub-menu");

		elm.each(function () {
			var off = $(this).offset();
			var l = off.left;
			var w = $(this).width();
			var docH = windows.height();
			var docW = windows.width() - 10;
			var isEntirelyVisible = l + w <= docW;

			if (!isEntirelyVisible) {
				$(this).addClass("left");
			}
		});
	}

	/*--
		Mobile Search Doropdown
    -----------------------------------*/
	$(".search-open").click(function () {
		$(".header-serach").toggleClass("open");
	});

	/*--
		Menu Active
    -----------------------------------*/
	$(function () {
		var url = window.location.pathname;
		var activePage = url.substring(url.lastIndexOf("/") + 1);
		$(".dashboard-nav__menu-list li a").each(function () {
			var linkPage = this.href.substring(this.href.lastIndexOf("/") + 1);

			if (activePage == linkPage) {
				$(this).closest("li").addClass("active");
			}
		});
	});

	/*--
        Off Canvas Menu
    -----------------------------------*/
	/*Variables*/
	var $offCanvasNav = $(".canvas-menu"),
		$offCanvasNavSubMenu = $offCanvasNav.find(
			".sub-menu, .mega-menu, .menu-item "
		);

	/*Add Toggle Button With Off Canvas Sub Menu*/
	$offCanvasNavSubMenu
		.parent()
		.prepend('<span class="mobile-menu-expand"></span>');

	/*Close Off Canvas Sub Menu*/
	$offCanvasNavSubMenu.slideUp();

	/*Category Sub Menu Toggle*/
	$offCanvasNav.on(
		"click",
		"li a, li .mobile-menu-expand, li .menu-title",
		function (e) {
			var $this = $(this);
			if (
				$this
					.parent()
					.attr("class")
					.match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
				($this.attr("href") === "#" || $this.hasClass("mobile-menu-expand"))
			) {
				e.preventDefault();
				if ($this.siblings("ul:visible").length) {
					$this.parent("li").removeClass("active-expand");
					$this.siblings("ul").slideUp();
				} else {
					$this.parent("li").addClass("active-expand");
					$this.closest("li").siblings("li").find("ul:visible").slideUp();
					$this.closest("li").siblings("li").removeClass("active-expand");
					$this.siblings("ul").slideDown();
				}
			}
		}
	);

	$(".sub-menu, .mega-menu, .menu-item")
		.parent("li")
		.addClass("menu-item-has-children");
	$(".mega-menu").parent("li").addClass("mega-menu-children");

	/*--
        parallax
    -----------------------------------*/
	var scene = document.querySelectorAll(".scene");

	scene.forEach((el) => {
		var parallaxInstance = new Parallax(el, {
			pointerEvents: true,
		});
	});

	/*--
		Mobile Search Doropdown
    -----------------------------------*/
	$(".btn-toggle").click(function () {
		$(".dashboard-menu").addClass("open");
	});
	$(".close-btn").click(function () {
		$(".dashboard-menu").removeClass("open");
	});

	/*--
		Demo Option Toggle
    -----------------------------------*/
	$(".demo-open").click(function () {
		$(".edumall-demo-option").toggleClass("open");
	});

	/*--
        Testimonial
    -----------------------------------*/
	var swiper = new Swiper(".testimonial-active .swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".testimonial-active .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});

	/*--
        Testimonial 02
    -----------------------------------*/
	var swiper = new Swiper(".testimonial-active-02 .swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".testimonial-active-02 .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	/*--
        Testimonial 03
    -----------------------------------*/
	var swiper = new Swiper(".testimonial-active-03 .swiper", {
		slidesPerView: 2,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".testimonial-active-03 .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});

	/*--
        Courses Tab
    -----------------------------------*/
	var swiper = new Swiper(".course-tab-active .swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".course-tab-active .swiper-button-next",
			prevEl: ".course-tab-active .swiper-button-prev",
		},
		pagination: {
			el: ".course-tab-active .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

	/*--
        Courses
    -----------------------------------*/
	var swiper = new Swiper(".course-active .swiper", {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".course-active .swiper-button-next",
			prevEl: ".course-active .swiper-button-prev",
		},
		pagination: {
			el: ".course-active .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	/*--
        Category 
    -----------------------------------*/
	var swiper = new Swiper(".category-active .swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".category-active .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".category-active .swiper-button-next",
			prevEl: ".category-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

	/*--
        Partners 
    -----------------------------------*/
	var swiper = new Swiper(".partners-active .swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: ".partners-active .swiper-button-next",
			prevEl: ".partners-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 7,
			},
		},
	});

	/*--
        Event 
    -----------------------------------*/
	var swiper = new Swiper(".event-active .swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".event-active .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".event-active .swiper-button-next",
			prevEl: ".event-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});

	/*--
        Event 02
    -----------------------------------*/
	var swiper = new Swiper(".event-active-02 .swiper", {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".event-active-02 .swiper-button-next",
			prevEl: ".event-active-02 .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	/*--
        Banner
    -----------------------------------*/
	var swiper = new Swiper(".banner-active .swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".banner-active .swiper-button-next",
			prevEl: ".banner-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});

	/*--
        Instructors
    -----------------------------------*/
	var swiper = new Swiper(".instructor-active .swiper", {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".instructor-active .swiper-button-next",
			prevEl: ".instructor-active .swiper-button-prev",
		},
		pagination: {
			el: ".instructor-active .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	/*--
        Related Posts
    -----------------------------------*/
	var swiper = new Swiper(".related-posts .swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".related-posts .swiper-button-next",
			prevEl: ".related-posts .swiper-button-prev",
		},
		pagination: {
			el: ".related-posts .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});

	/*--
        Speaker 
    -----------------------------------*/
	var swiper = new Swiper(".speaker-active .swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 1000,
		loop: true,
		pagination: {
			el: ".speaker-active .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".speaker-active .swiper-button-next",
			prevEl: ".speaker-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

	/*--
        Related Products 
    -----------------------------------*/
	var swiper = new Swiper(".related-products-active .swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 1000,
		loop: false,
		pagination: {
			el: ".related-products-active .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".related-products-active .swiper-button-next",
			prevEl: ".related-products-active .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

	/*--
        Shop single Product 
    -----------------------------------*/
	var swiper = new Swiper(".shop-single-product__image-thumbs  .swiper", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".shop-single-product__image-main  .swiper", {
		spaceBetween: 10,
		speed: 1000,
		thumbs: {
			swiper: swiper,
		},
	});

	/*--
        Counter Up
    -----------------------------------*/
	var counted = 0;
	$(window).scroll(function () {
		const counter = document.querySelectorAll(".counter");

		counter.forEach(function (element) {
			var oTop = $(element).offset().top - window.innerHeight;
			if (counted == 0 && $(window).scrollTop() > oTop) {
				$(".count").each(function () {
					var $this = $(this),
						countTo = $this.attr("data-count");
					$({
						countNum: $this.text(),
					}).animate(
						{
							countNum: countTo,
						},

						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
								//alert('finished');
							},
						}
					);
				});
				counted = 1;
			}
		});
	});

	/*--
        Countdown
    -----------------------------------*/
	function makeTimer($endDate, $this, $format) {
		var today = new Date();
		var BigDay = new Date($endDate),
			msPerDay = 24 * 60 * 60 * 1000,
			timeLeft = BigDay.getTime() - today.getTime(),
			e_daysLeft = timeLeft / msPerDay,
			daysLeft = Math.floor(e_daysLeft),
			e_hrsLeft = (e_daysLeft - daysLeft) * 24,
			hrsLeft = Math.floor(e_hrsLeft),
			e_minsLeft = (e_hrsLeft - hrsLeft) * 60,
			minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60),
			e_secsLeft = (e_minsLeft - minsLeft) * 60,
			secsLeft = Math.floor((e_minsLeft - minsLeft) * 60);

		var yearsLeft = 0;
		var monthsLeft = 0;
		var weeksLeft = 0;

		if ($format != "short") {
			if (daysLeft > 365) {
				yearsLeft = Math.floor(daysLeft / 365);
				daysLeft = daysLeft % 365;
			}

			if (daysLeft > 30) {
				monthsLeft = Math.floor(daysLeft / 30);
				daysLeft = daysLeft % 30;
			}
			if (daysLeft > 7) {
				weeksLeft = Math.floor(daysLeft / 7);
				daysLeft = daysLeft % 7;
			}
		}

		var yearsLeft = yearsLeft < 10 ? "0" + yearsLeft : yearsLeft,
			monthsLeft = monthsLeft < 10 ? "0" + monthsLeft : monthsLeft,
			weeksLeft = weeksLeft < 10 ? "0" + weeksLeft : weeksLeft,
			daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft,
			hrsLeft = hrsLeft < 10 ? "0" + hrsLeft : hrsLeft,
			minsLeft = minsLeft < 10 ? "0" + minsLeft : minsLeft,
			secsLeft = secsLeft < 10 ? "0" + secsLeft : secsLeft,
			yearsText = yearsLeft > 1 ? "Years" : "year",
			monthsText = monthsLeft > 1 ? "Months" : "month",
			weeksText = weeksLeft > 1 ? "Weeks" : "week",
			daysText = daysLeft > 1 ? "Days" : "day",
			hourText = hrsLeft > 1 ? "Hours" : "hr",
			minsText = minsLeft > 1 ? "Mints" : "min",
			secText = secsLeft > 1 ? "Secs" : "sec";

		var $markup = {
			wrapper: $this.find(".countdown__item"),
			year: $this.find(".yearsLeft"),
			month: $this.find(".monthsLeft"),
			week: $this.find(".weeksLeft"),
			day: $this.find(".daysLeft"),
			hour: $this.find(".hoursLeft"),
			minute: $this.find(".minsLeft"),
			second: $this.find(".secsLeft"),
			yearTxt: $this.find(".yearsText"),
			monthTxt: $this.find(".monthsText"),
			weekTxt: $this.find(".weeksText"),
			dayTxt: $this.find(".daysText"),
			hourTxt: $this.find(".hoursText"),
			minTxt: $this.find(".minsText"),
			secTxt: $this.find(".secsText"),
		};

		var elNumber = $markup.wrapper.length;
		$this.addClass("item-" + elNumber);
		$($markup.year).html(yearsLeft);
		$($markup.yearTxt).html(yearsText);
		$($markup.month).html(monthsLeft);
		$($markup.monthTxt).html(monthsText);
		$($markup.week).html(weeksLeft);
		$($markup.weekTxt).html(weeksText);
		$($markup.day).html(daysLeft);
		$($markup.dayTxt).html(daysText);
		$($markup.hour).html(hrsLeft);
		$($markup.hourTxt).html(hourText);
		$($markup.minute).html(minsLeft);
		$($markup.minTxt).html(minsText);
		$($markup.second).html(secsLeft);
		$($markup.secTxt).html(secText);
	}

	$(".countdown").each(function () {
		var $this = $(this);
		var $endDate = $(this).data("countdown");
		var $format = $(this).data("format");
		setInterval(function () {
			makeTimer($endDate, $this, $format);
		}, 0);
	});

	/*--
        Light Box
    -----------------------------------*/
	var lightboxVideo = GLightbox({
		selector: ".glightbox",
	});

	/*--
        Perfect Scrollbar
    -----------------------------------*/
	const container = document.querySelectorAll(".widgetScroll");

	container.forEach(function (el) {
		const ps = new PerfectScrollbar(el, {
			wheelSpeed: 0.4,
			wheelPropagation: true,
			minScrollbarLength: 10,
		});
	});

	const navScroll = document.querySelectorAll(".navScroll");

	navScroll.forEach(function (el) {
		const ps = new PerfectScrollbar(el, {
			wheelSpeed: 0.4,
			wheelPropagation: true,
			minScrollbarLength: 10,
		});
	});

	/*--
        Tooltip
    -----------------------------------*/
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-tooltip="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	/*--
        PowerTip
    -----------------------------------*/
	$(".course-item, .course-item-02").data("powertiptarget", "course-hover");

	$(".course-item, .course-item-02").powerTip({
		placement: "e",
		mouseOnToPopup: true,
		smartPlacement: true,
	});

	$(".course-list-item").data("powertiptarget", "course-list-hover");

	$(".course-list-item").powerTip({
		placement: "n",
		mouseOnToPopup: true,
		smartPlacement: true,
	});

	/*--
        Nice Select
    -----------------------------------*/
	// $('.select').niceSelect();
	$(".edumall-nice-select").EdumallNiceSelect();

	/*--
        Datepicker
    -----------------------------------*/
	$(".filter_start_date").flatpickr({
		altInput: true,
		altFormat: "F j, Y",
		disableMobile: true,
	});

	/*--
        Sticky
    -----------------------------------*/
	$(".sidebar-sticky").stick_in_parent({
		offset_top: 130,
		parent: ".sticky-parent", // note: we must now manually provide the parent
	});

	/*--
        Masonry
    -----------------------------------*/
	$(".container").imagesLoaded(function () {
		// images have loaded

		$(".grid").masonry({
			// options
			itemSelector: ".grid-item",
			columnWidth: 2,
		});
	});

	/*--
        Product Quantity Activation
    -----------------------------------*/
	$(".add").on("click", function () {
		if ($(this).prev().val()) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
					.next()
					.val(+$(this).next().val() - 1);
		}
	});

	/*--
		Rating Script
	-----------------------------------*/
	$("#rating li").on("mouseover", function () {
		var onStar = parseInt($(this).data("value"), 10);
		var siblings = $(this).parent().children("li.star");
		Array.from(siblings, function (item) {
			var value = item.dataset.value;
			var child = item.firstChild;
			if (value <= onStar) {
				child.classList.add("hover");
			} else {
				child.classList.remove("hover");
			}
		});
	});

	$("#rating").on("mouseleave", function () {
		var child = $(this).find("li.star i");
		Array.from(child, function (item) {
			item.classList.remove("hover");
		});
	});

	$("#rating li").on("click", function (e) {
		var onStar = parseInt($(this).data("value"), 10);
		var siblings = $(this).parent().children("li.star");
		Array.from(siblings, function (item) {
			var value = item.dataset.value;
			var child = item.firstChild;
			if (value <= onStar) {
				child.classList.remove("hover", "far");
				child.classList.add("fas");
			} else {
				child.classList.remove("fas");
				child.classList.add("far");
			}
		});
	});

	/*--
        Select 2
    -----------------------------------*/
	$(".select2").select2({
		tags: true,
	});

	/*--
        Checkout Account Active
    -----------------------------------*/
	$("#account").on("click", function () {
		if ($("#account:checked").length > 0) {
			$(".checkout-form__account").slideDown();
		} else {
			$(".checkout-form__account").slideUp();
		}
	});

	/*--
        Checkout Shipping Active
    -----------------------------------*/
	$("#shipping").on("click", function () {
		if ($("#shipping:checked").length > 0) {
			$(".checkout-form__shipping").slideDown();
		} else {
			$(".checkout-form__shipping").slideUp();
		}
	});

	/*--
        Checkout Payment Active
    -----------------------------------*/
	var checked = $(".payment-method:checked");
	if (checked) {
		$(checked).siblings(".payment-details").slideDown(500);
	}
	$(".payment-method").on("change", function () {
		$(".payment-details").slideUp(500);
		$(this).siblings(".payment-details").slideToggle(500);
	});

	/*--
        Checkout Payment Option Active
    -----------------------------------*/
	$(".card-option").on("click", function () {
		if ($(".card-option:checked").length > 0) {
			$(".checkout-form__payment-card").slideDown();
		} else {
			$(".checkout-form__payment-card").slideUp();
		}
	});

	/*--
        AOS Animation
    -----------------------------------*/
	AOS.init({
		once: true,
		offset: 0,
	});

	/*--
        Profile Photo and Cover Photo editor
    -----------------------------------*/
	var PhotoEditor = function (photo_editor) {
		this.dialogue_box = photo_editor.find("#dashboard-photo-dialogue-box");

		this.open_dialogue_box = function (name) {
			this.dialogue_box.attr("name", name);
			this.dialogue_box.trigger("click");
		};

		this.validate_image = function (file) {
			return true;
		};

		this.upload_selected_image = function (name, file) {
			if (!file || !this.validate_image(file)) {
				return;
			}

			var nonce = tutor_get_nonce_data(true);

			var context = this;
			context.toggle_loader(name, true);

			// Prepare payload to upload
			var form_data = new FormData();
			form_data.append("action", "tutor_user_photo_upload");
			form_data.append("photo_type", name);
			form_data.append("photo_file", file, file.name);
			form_data.append(nonce.key, nonce.value);

			$.ajax({
				url: window._tutorobject.ajaxurl,
				data: form_data,
				type: "POST",
				processData: false,
				contentType: false,
				error: context.error_alert,
				complete: function () {
					context.toggle_loader(name, false);
				},
			});
		};

		this.accept_upload_image = function (context, e) {
			var file = e.currentTarget.files[0] || null;
			context.update_preview(e.currentTarget.name, file);
			context.upload_selected_image(e.currentTarget.name, file);
			$(e.currentTarget).val("");
		};

		this.delete_image = function (name) {
			var context = this;
			context.toggle_loader(name, true);

			$.ajax({
				url: window._tutorobject.ajaxurl,
				data: { action: "tutor_user_photo_remove", photo_type: name },
				type: "POST",
				error: context.error_alert,
				complete: function () {
					context.toggle_loader(name, false);
				},
			});
		};

		this.update_preview = function (name, file) {
			var renderer = photo_editor.find(
				name == "cover_photo" ? "#dashboard-cover-area" : "#profile-photo"
			);

			if (!file) {
				renderer.css(
					"background-image",
					"url(" + renderer.data("fallback") + ")"
				);
				this.delete_image(name);
				return;
			}

			var reader = new FileReader();
			reader.onload = function (e) {
				renderer.css("background-image", "url(" + e.target.result + ")");
			};

			reader.readAsDataURL(file);
		};

		this.toggle_profile_pic_action = function (show) {
			var method =
				show === undefined ? "toggleClass" : show ? "addClass" : "removeClass";
			photo_editor[method]("pop-up-opened");
		};

		this.error_alert = function () {
			alert("Something Went Wrong.");
		};

		this.toggle_loader = function (name, show) {
			photo_editor
				.find("#photo-meta-area .loader-area")
				.css("display", show ? "block" : "none");
		};

		this.initialize = function () {
			var context = this;

			this.dialogue_box.change(function (e) {
				context.accept_upload_image(context, e);
			});

			photo_editor
				.find("#profile-photo .overlay, #profile-photo-option>div:last-child")
				.click(function () {
					context.toggle_profile_pic_action();
				});

			// Upload new
			photo_editor.find(".cover-uploader").click(function () {
				context.open_dialogue_box("cover_photo");
			});
			photo_editor.find(".profile-photo-uploader").click(function () {
				context.open_dialogue_box("profile_photo");
			});

			// Delete existing
			photo_editor.find(".cover-deleter").click(function () {
				context.update_preview("cover_photo", null);
			});
			photo_editor.find(".profile-photo-deleter").click(function () {
				context.update_preview("profile_photo", null);
			});
		};
	};

	var photo_editor = $("#dashboard-profile-cover-photo-editor");
	photo_editor.length > 0 ? new PhotoEditor(photo_editor).initialize() : 0;

	/*--
        Back To Top
    -----------------------------------*/
	var toTopBtn = document.querySelectorAll(".backBtn");

	toTopBtn.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});

		//hide/show button on scroll up/down
		var scrollPos = 0;

		window.addEventListener("scroll", function () {
			// detects new state and compares it with the new one
			if (document.body.getBoundingClientRect().top > scrollPos) {
				btn.style.display = "none";
			} else {
				btn.style.display = "block";
			}
			// saves the new position for iteration.
			scrollPos = document.body.getBoundingClientRect().top;
		});
	});
})(jQuery);
