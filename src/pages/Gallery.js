import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

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

	return (
		<div className="container">
			<section>
				<div className="page-section">
					<div className="ps-header"></div>
					<div className="app">
						<Swiper
							effect={"coverflow"}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={"auto"}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={{ type: "fraction" }}
							modules={[EffectCoverflow, Pagination]}
							loop={true}
						>
							{images.map((img, i) => {
								return (
									<SwiperSlide>
										<img src={img} alt={i} key={i} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Gallery;
