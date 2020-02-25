

// Import images to description pages (that are using onScroll effect)
import extension_image_2 from '../extension/image_2.svg';
import extension_image_3 from '../extension/image_3.svg';


// create an array of objects (image src + coordinates to display)
export const extensionImages = [

	{
		src: extension_image_2,
		top: '80px',
		left: '30px',
	},

	{   
		src: extension_image_3, 
		top: '30px',
		left: '5px',
	}
];

extensionImages.map((img) => {
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







