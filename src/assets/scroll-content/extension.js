import { extensionImages } from "../images/products/scroll-pages/ExtensionImagesStatic";

export default [...Array(9)].map((e,i)=>({
	header: (i+1)+"-SlideExtensionHeader",
	body: (i+1)+"-SlideExtensionBody",
	img: extensionImages[i]
}));