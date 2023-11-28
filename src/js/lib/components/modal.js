import $ from "../core";

$.prototype.modal = function () {
	for (let i = 0; i < this.length; i++) {
		const target = $(this[i]).getAttr('data-target')
		$(this[i]).click((e) => {
			e.preventDefault();
			$(target).fadeIn(500);
			document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + 'px';
			document.querySelectorAll('.fixed-blocks').forEach(e => {
				e.style.paddingRight = window.innerWidth - document.body.offsetWidth + 'px';
			});
			document.body.style.overflow = 'hidden';
		})
	}

	$('[data-close]').click(() => {
		$('.modal').fadeOut(500);
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
		document.querySelectorAll('.fixed-blocks').forEach(e => {
			e.style.paddingRight = '';
		});
	});

	$('.modal').click(e => {
		if (e.target.classList.contains('modal')) {
			$('.modal').fadeOut(500);
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
			document.querySelectorAll('.fixed-blocks').forEach(e => {
				e.style.paddingRight = '';
			});
		}
	})
};

$('[data-toggle="modal"]').modal();