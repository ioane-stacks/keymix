import CardCarousel from "./tagComponents/CardCarousel";
import StickerCarousel from "./tagComponents/StickerCarousel";
import BraceletCarousel from "./tagComponents/BraceletCarousel";
import Navigator from "./Navigator";

import './carousel.css';

import { useEffect, useState } from "react";

function Slider() {

    const [carrouselCount, setCarrouselCount] = useState(0);

    function DefaultCarrousel() {
        switch (carrouselCount) {
            case 0:
                return <CardCarousel />
                break;
            case 1:
                return <StickerCarousel />
                break;
            case 2:
                return <BraceletCarousel />
                break;
            default:
                return <CardCarousel />
        }
    }
    return (
        <div className="slider">
            <DefaultCarrousel />
            <Navigator changeCarousel={setCarrouselCount} />
        </div>
    )
}

export default Slider;