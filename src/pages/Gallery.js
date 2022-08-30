import { EffectCube, EffectFade, EffectFlip, EffectCreative, EffectCoverflow, EffectCards, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

import a1 from "../icons/Production/Bracelet.svg";
import a2 from "../icons/Production/Sticker.svg";
import a3 from "../icons/Production/Keyfog.svg";
import a4 from "../icons/Production/PlasticCard.svg";

function Gallery() {
	return (
		<div className="container">
			<section>
				<div className="page-section">
					<div className="ps-header">
						<Swiper modules={[EffectCoverflow, Autoplay]} slidesPerView={1} effect="coverflow">
							<SwiperSlide>
								<img className="sld" src={a1} alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="sld" src={a2} alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="sld" src={a3} alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="sld" src={a4} alt="" />
							</SwiperSlide>
							<span slot="container-start">კარუსელი</span>
						</Swiper>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Gallery;
