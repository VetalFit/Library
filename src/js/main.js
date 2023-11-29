import $ from './lib/lib';

$('#first').click(() => {
	$('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
	$('div').eq(2).fadeToggle(800);
})


$('button').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet ad omnis nesciunt accusantium. Velit molestias minus eius temporibus. Magnam unde quia repudiandae vero facere doloribus ipsum a voluptatum minima.'
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true,
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Данные сохранены');
				}
			],
			[
				'Another button',
				['btn-warning', 'ml-10'],
				false,
				() => {
					alert('Hello World')
				}
			]
		]
	}
}));