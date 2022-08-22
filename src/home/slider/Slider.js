import CardCarousel from "./tagComponents/CardCarousel";
import StickerCarousel from "./tagComponents/StickerCarousel";
import BraceletCarousel from "./tagComponents/BraceletCarousel";
import KeychainCarousel from "./tagComponents/KeychainCarousel";
import Navigator from "./Navigator";

import './carousel.css';

import { useState } from "react";

function Slider() {

    const [carrouselCount, setCarrouselCount] = useState(0);

    function DefaultCarrousel() {
        switch (carrouselCount) {
            case 0:
                return <CardCarousel />
            case 1:
                return <StickerCarousel />
            case 2:
                return <BraceletCarousel />
            case 3:
                return <KeychainCarousel />
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