WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Promotions slider
	let promotionsSlider = document.querySelector('.promotions .swiper')

	if (promotionsSlider) {
		new Swiper('.promotions .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		// Countdown
		$('.countdown').each(function () {
			let timerDate = $(this).data('date')

			$(this).countdown(timerDate, function (event) {
				$(this).find('.hours').text(event.strftime('%H'))
				$(this).find('.minutes').text(event.strftime('%M'))
				$(this).find('.seconds').text(event.strftime('%S'))
			})
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products:not(.skip) .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 8,
			breakpoints: {
				0: {
					slidesPerView: 'auto',
				},
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1280: {
					slidesPerView: 5,
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Brands slider
	const brandsSliders = [],
		brands = document.querySelectorAll('.brands .swiper')

	brands.forEach((el, i) => {
		el.classList.add('brands_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto',
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3,
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 5,
				}
			}
		}

		brandsSliders.push(new Swiper('.brands_s' + i, options))
	})


	// Photo gallery slider
	const photoGallerySliders = [],
		photoGallery = document.querySelectorAll('.photo_gallery .swiper')

	photoGallery.forEach((el, i) => {
		el.classList.add('photo_gallery_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto',
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 3,
				},
				1024: {
					spaceBetween: 12,
					slidesPerView: 4,
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.article')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.article')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		photoGallerySliders.push(new Swiper('.photo_gallery_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto',
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3,
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3,
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.article')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.article')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Certs slider
	const certsSliders = [],
		certs = document.querySelectorAll('.certs .swiper')

	certs.forEach((el, i) => {
		el.classList.add('certs_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 8,
				},
				768: {
					spaceBetween: 16,
				},
				1024: {
					spaceBetween: 24,
				},
				1280: {
					spaceBetween: 31,
				}
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto',
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 2,
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 3,
				},
				1280: {
					spaceBetween: 16,
					slidesPerView: 4,
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.review')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.review')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Compare slider
	let compareSlider = document.querySelector('.compare_info .swiper')

	if (compareSlider) {
		new Swiper('.compare_info .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 12,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: () => compareHeight(),
				resize: () => compareHeight()
			}
		})
	}


	// Mini pop-up windows
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(this).next('.mini_modal').addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when you click outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Fancybox
	const fancyOptions = {
		dragToClose: false,
		placeFocusBack: false,
		l10n: {
			CLOSE: 'Закрыть',
			NEXT: 'Следующий',
			PREV: 'Предыдущий',
			MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
		},
		tpl: {
			closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close_big"></use></svg></button>',

			main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
				<div class="fancybox__backdrop"></div>
				<div class="fancybox__carousel"></div>
				<div class="fancybox__footer"></div>
			</div>`,
		}
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show(
			[{
				src: `#${e.target.getAttribute('data-modal')}`,
				type: 'inline'
			}],
			fancyOptions
		)
	})


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		...fancyOptions,
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)'),
		selectsInstances = []

	if (selects) {
		selects.forEach(el => {
			selectsInstances.push(NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			}))

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub')

		// Submenu on the touch screen
		$('header .menu .item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Footer
	$('footer .data .links .title').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next('.items').slideToggle(300)
	})


	// Search
	$('.search .input').keyup(function() {
		const _self = $(this)

		const tips = $(this).closest('.search').find('.tips')

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')

			tips && _self.val().length > 3
				? tips.addClass('show')
				: tips.removeClass('show')
		})
	})


	// Form fields
	$('.form .input').keyup(function() {
		const _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')
		})
	})


	// Form submit
	$('#callback_modal form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show(
			[{
				src: '#success_message_modal',
				type: 'inline'
			}],
			fancyOptions
		)
	})


	// Location
	$('header .location .confirm .btn.close_btn').click(function(e) {
		e.preventDefault()

		$('header .location .confirm').hide()
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Changing the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Checkout
	$('.checkout_info .type .radio').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			const typeIndex = $(this).data('type')

			$('.checkout_info .type_info').hide()
			$('.checkout_info .type'+ typeIndex +'_info').fadeIn(300)
		}
	})


	$('.cart_info .promocode .remove_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.promocode')

		parent
			.find('.field').removeClass('success')
			.find('.input').val('')
	})


	// Password toggle
	$('.form .toggle_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		const field = $(this).closest('.field')

		$(this).hasClass('active')
			? field.find('.input').attr('type', 'text')
			: field.find('.input').attr('type', 'password')
	})


	// LK - Profile
	$('.lk_info .profile .add_type_btn').click(function(e) {
		e.preventDefault()

		const profile = $(this).closest('.profile')

		profile.find('.personal_data_form').hide()
		profile.find('.add_type_form').fadeIn(300)
	})

	$('.lk_info .profile .add_type_form .type .radio').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			const typeIndex = $(this).data('type')

			$('.lk_info .profile .add_type_form .type_info').hide()
			$('.lk_info .profile .add_type_form .type'+ typeIndex +'_info').fadeIn(300)
		}
	})

	$('.lk_info .profile .add_type_form .cancel_btn').click(function(e) {
		e.preventDefault()

		const profile = $(this).closest('.profile')

		profile.find('.add_type_form').hide()
		profile.find('.personal_data_form').fadeIn(300)
	})


	// Products filter
	$('.products_filter .item .name').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next('.data').slideToggle(300)
	})

	$('.products_filter .spoler_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.data')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.field.hide').fadeIn(200)
			: parent.find('.field.hide').fadeOut(100)
	})

	const coolingCapacityRange = $('#cooling_capacity_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10,
		from: 2,
		to: 9,
		step: 1,
		onChange: data => {
			$('.cooling_capacity_range input.from').val(data.from.toLocaleString('ru-RU'));
            $('.cooling_capacity_range input.to').val(data.to.toLocaleString('ru-RU'));
		},
	}).data('ionRangeSlider')

	$('.cooling_capacity_range .input').keyup(function () {
		coolingCapacityRange.update({
			from: parseInt($('.cooling_capacity_range .input.from').val()),
			to: parseInt($('.cooling_capacity_range .input.to').val()),
		})
	})

	const priceRange = $('#price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150000,
		from: 3100,
		to: 136100,
		step: 100,
		onChange: data => {
			$('.price_range input.from').val(data.from.toLocaleString('ru-RU'));
            $('.price_range input.to').val(data.to.toLocaleString('ru-RU'));
		},
	}).data('ionRangeSlider')

	$('.price_range .input').keyup(function () {
		priceRange.update({
			from: parseInt($('.price_range .input.from').val()),
			to: parseInt($('.price_range .input.to').val()),
		})
	})

	const areaRange = $('#area_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150,
		from: 14,
		to: 110,
		step: 1,
		onChange: data => {
			$('.area_range input.from').val(data.from.toLocaleString('ru-RU'));
            $('.area_range input.to').val(data.to.toLocaleString('ru-RU'));
		},
	}).data('ionRangeSlider')

	$('.area_range .input').keyup(function () {
		areaRange.update({
			from: parseInt($('.area_range .input.from').val()),
			to: parseInt($('.area_range .input.to').val()),
		})
	})


	$('.products_filter .reset_btn', '.filter_selected .reset_btn').click(function() {
		if (coolingCapacityRange) { coolingCapacityRange.reset() }
		if (priceRange) { priceRange.reset() }
		if (areaRange) { areaRange.reset() }

		$('.products_filter').get(0).reset()
	})


	// Category links
	$('.category_links .spoler_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.category_links')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.items .hide').fadeIn(200)
			: parent.find('.items .hide').fadeOut(100)
	})


	// Products view
	$('.products_head .view .grid_btn').click(function(e) {
		e.preventDefault()

		const products = $(this).closest('.content').find('.products')

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		products.find('.list_full')
			.removeClass('list_full')
			.addClass('grid_row')
	})

	$('.products_head .view .list_btn').click(function(e) {
		e.preventDefault()

		const products = $(this).closest('.content').find('.products')

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		products.find('.grid_row')
			.removeClass('grid_row')
			.addClass('list_full')
	})


	// Product features
	$('.product_data .features .spoler_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.features')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.hide').addClass('show')
			: parent.find('.hide').removeClass('show')
	})


	// Product install
	$('.product_data .install .item .head').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.item')

		parent.toggleClass('active')
		parent.find('.data').slideToggle(300)
	})
})



window.addEventListener('load', function () {
	// Product delivery methods
	document.querySelectorAll('.product_data .delivery_methods .grid_row').forEach(el => {
		let styles = getComputedStyle(el)

		productsDeliveryMethodsHeight(el, parseInt(styles.getPropertyValue('--items_per_line')))
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Product delivery methods
		document.querySelectorAll('.product_data .delivery_methods .grid_row').forEach(el => {
			let styles = getComputedStyle(el)

			productsDeliveryMethodsHeight(el, parseInt(styles.getPropertyValue('--items_per_line')))
		})


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})


// Compare height
function compareHeight() {
	// Reset heights
	$('.compare_labels > *, .compare_vals > *').height('auto')

	let featureLabels = $('.compare_labels > *'),
		featureVals = $('.compare_vals'),
		sizes = new Object()

	featureVals.each(function () {
		$(this).find('> *').each(function () {
			let index = $(this).index(),
				height = $(this).outerHeight()

			if (sizes[index]) {
				if (height > sizes[index]) {
					sizes[index] = height
				}
			} else {
				sizes[index] = height
			}
		})
	})

	featureLabels.each(function () {
		let index = $(this).index(),
    		height = $(this).outerHeight()

		if (sizes[index]) {
			if (height > sizes[index]) {
				sizes[index] = height
			}
		} else {
			sizes[index] = height
		}
	})

	// Set height
	$.each(sizes, (key, height) => {
		featureVals.each(function () {
			$(this).find('> *').eq(key).innerHeight(height)
		})

		featureLabels.eq(key).innerHeight(height)
	})
}



// Product delivery methods
function productsDeliveryMethodsHeight(context, step) {
	let start = 0,
		finish = step,
		methods = [...context.querySelectorAll('.method')],
		methodsDesc = context.querySelectorAll('.desc'),
		i = 0

	methodsDesc.forEach(el => el.style.height = 'auto')

	methods.forEach(el => {
		methods.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .desc'))

		start = start + step
		finish = finish + step
		i++
	})
}