import { useState } from "react";
import GalleryContent from "./GalleryContent";
import Slider from "./Slider";
import "./styles/gallery.css";

import { BsImages } from "react-icons/bs";
import { TbSlideshow } from "react-icons/tb";

import { defaultContent } from "../data/defaultContent.js";

function Gallery() {
	const img1 = "https://images.hdqwalls.com/wallpapers/the-hell-cat-4p.jpg";
	const img2 = "https://images.hdqwalls.com/wallpapers/love-season-of-cats-v8.jpg";
	const img3 = "https://images.hdqwalls.com/wallpapers/black-cat-looking-out-window-minimal-mq.jpg";
	const img4 = "https://images.hdqwalls.com/wallpapers/thumb/cat-beach-silhouette-4s.jpg";
	const img5 = "https://images.hdqwalls.com/wallpapers/thumb/never-lose-sight-p2.jpg";
	const img6 = "https://images.hdqwalls.com/wallpapers/thumb/hello-from-you-2e.jpg";
	const img7 = "https://images.hdqwalls.com/wallpapers/thumb/cat-bee-meeting-5k-4i.jpg";
	const img8 = "https://images.hdqwalls.com/wallpapers/thumb/the-decline-of-humanity-4k-to.jpg";
	const img9 = "https://images.hdqwalls.com/wallpapers/thumb/white-kitty-5k-jj.jpg";
	const img10 = "https://images.hdqwalls.com/wallpapers/thumb/writing-stories-eu.jpg";
	const img11 = "https://images.hdqwalls.com/wallpapers/thumb/cat-soul-ak.jpg";

	const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

	const [switchGallery, setSwitchGallery] = useState(0);

	function DefaultGallery() {
		return <>{switchGallery === 0 ? <Slider images={images} /> : <GalleryContent images={images} />}</>;
	}

	return (
		<div className="container">
			<section>
				<div className="page-section">
					<div className="ps-header">
						<h1>{defaultContent.galleryPage.galleryName}</h1>
					</div>
					<div className="switch-gallery">
						<div className="gallery-btn" onClick={() => setSwitchGallery(0)}>
							<TbSlideshow />
						</div>
						<div className="gallery-btn" onClick={() => setSwitchGallery(1)}>
							<BsImages />
						</div>
					</div>
					<DefaultGallery />
				</div>
			</section>
		</div>
	);
}

export default Gallery;
