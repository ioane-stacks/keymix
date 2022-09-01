import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/styles.css";

function Slider({ images }) {
	return (
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
						<SwiperSlide key={i}>
							<img src={img} alt={i} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Slider;
