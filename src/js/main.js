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


$('#carousel2').createCarousel([
	{
		url: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/Photography%20Page%20JDI_marquee_tb?$pjpeg$&jpegSize=200&wid=1199',
		alt: 'photo'
	},
	{
		url: 'https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fHwx&w=1000&q=80',
		alt: 'photo'
	},
	{
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNf93tx-Kisrjl3xgiitWcI0DBljwAo8LxA&usqp=CAU',
		alt: 'photo'
	},
]);


$().get('https://jsonplaceholder.typicode.com/posts/1/comments')
	.then(res => console.log(res));