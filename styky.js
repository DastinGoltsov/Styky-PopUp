//////////////////////////////////////////////////////////////////////////
// **popUp
//////////////////////////////////////////////////////////////////////////

const body = $('body');
const area = document.querySelector('.personal_area');

// add remove
jQuery(document).ready(function ($) {

	$('.usage-person').click(function () {
		$('.personal_area').removeClass('hidden');
		$('.personal_area').addClass('visible');

		$('.personal_area-body').addClass('hidden1');

		// block body
		$('body').addClass('block');
	})

	$('.cross').click(function () {
		$('.personal_area').removeClass('visible');
		$('.personal_area').addClass('hidden');
		$('body').removeClass('block');
	})

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".test-popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.personal_area').removeClass('visible');
			$('.personal_area').addClass('hidden');
			$('.personal_area-body').removeClass('hidden1');
			$('body').removeClass('block');
		}
	});
});