import { testImages } from "../images/products/scroll-pages/TestImages";

export default [...Array(3)].map((e,i)=>({
	header: (i+1)+"-SlideTestHeader",
	body: (i+1)+"-SlideTestBody",
	img: testImages[i]
}));