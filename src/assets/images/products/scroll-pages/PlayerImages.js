

// Import images to description pages (that are using onScroll effect)
import player_image_1 from '../player/image_1.svg';
import player_image_2 from '../player/image_2.svg';


// create an array of objects (image src + coordinates to display)
export const playerImages = [

	{
		src: player_image_1,
		top: '40px',
		left: '10px',
	},

	{   
		src: player_image_2, 
		top: '80px',
		left: '50px',
	}
];

playerImages.map((img) => {
	console.log(img)
})


// // Определение координаты элемента по горизонтали 
// function pageX(elem) {
// 	return elem.offsetParent ?
// 		elem.offsetLeft + pageX(elem.offsetParent) :
// 		elem.offsetLeft;
// }

// // Определение координаты элемента по вертикали
// function pageY(elem) {
// 	return elem.offsetParent ?
// 		elem.offsetTop + pageY(elem.offsetParent) :
// 		elem.offsetTop;
// }







