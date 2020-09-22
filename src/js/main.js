$(document).ready(function () {
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('#navMenu');
	mobMenuItem = document.querySelectorAll('.main-menu a ')
	menuToggle.addEventListener('click', function () {
		if (this.classList.contains('active')) {

			this.classList.remove('active');
			mobMenu.classList.remove('active');
			for (let item of mobMenuItem) {
				item.classList.remove('animate')
			}
			// overlayBlock.classList.remove('active');
			// bodyEl.classList.remove('noscroll');

		} else {
			this.classList.add('active');
			mobMenu.classList.add('active');
			// overlayBlock.classList.add('active');
			// bodyEl.classList.add('noscroll');
			let delay = 0;
			for (let item of mobMenuItem) {
				setTimeout(function () {
					item.classList.add('animate');
				}, 50 + delay)
				delay += 100;
			}

		}
	});
	// маска для телефона
	// $(".phone").mask("+7(999)999-99-99");
	// $.fn.setCursorPosition = function (pos) {
	// 	if ($(this).get(0).setSelectionRange) {
	// 		$(this).get(0).setSelectionRange(pos, pos);
	// 	} else if ($(this).get(0).createTextRange) {
	// 		var range = $(this).get(0).createTextRange();
	// 		range.collapse(true);
	// 		range.moveEnd('character', pos);
	// 		range.moveStart('character', pos);
	// 		range.select();
	// 	}
	// };
	// $('input.phone').click(function () {
	// 	$(this).setCursorPosition(3); // set position number
	// });
	//аккордеон развернуть стрелку
	const faqAcordion = document.querySelector('#answers');
	if (faqAcordion) {
		$('.collapsable').on('show.bs.collapse', function () {
			let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
			tabIcon.addClass("rotate");
		});
		$('.collapsable').on('hide.bs.collapse', function () {
			let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
			tabIcon.removeClass("rotate");
		});
	}

})