import { useState } from "react";
import "./styles/gallerycontent.css";

import { IoClose } from "react-icons/io5";

function GalleryContent({ images }) {
	const [image, setImage] = useState(images[0]);
	const [display, setDisplay] = useState("");

	function maximizeImage(i) {
		setImage(images[i]);
		setDisplay("openImage");
		document.body.style.overflow = "hidden";
	}

	function closeImage() {
		setDisplay("");
		document.body.style.overflow = "auto";
	}

	function ImageView() {
		return (
			<div className={`image-view ${display}`}>
				<div className="image-close" onClick={closeImage}>
					<IoClose />
				</div>
				<img src={image} alt={image} />
			</div>
		);
	}

	return (
		<div className="gallery">
			{images.map((image, i) => {
				return (
					<div className="gallery-image" key={i}>
						<img src={image} alt={i} onClick={() => maximizeImage(i)} />
					</div>
				);
			})}
			<ImageView />
		</div>
	);
}

export default GalleryContent;
