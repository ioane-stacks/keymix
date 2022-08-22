import Engine from '../Engine';

function StickerCarousel() {

    setTimeout(() => {
        Engine('sticker');
    }, 42)

    return (
        <div className="wheel-carousel">
            <div className="wheel">
                <div className="sticker" id="card">STICKER</div>
                <div className="sticker" id="card2">STICKER</div>
                <div className="sticker" id="card3">STICKER</div>
                <div className="sticker" id="card4">STICKER</div>
                <div className="sticker" id="card5">STICKER</div>
                <div className="sticker" id="card6">STICKER</div>
                <div className="sticker" id="card7">STICKER</div>
                <div className="sticker" id="card8">STICKER</div>
                <div className="sticker" id="card9">STICKER</div>
                <div className="sticker" id="card10">STICKER</div>
                <div className="sticker" id="card11">STICKER</div>
                <div className="sticker" id="card12">STICKER</div>
                <div className="sticker" id="card13">STICKER</div>
                <div className="sticker" id="card14">STICKER</div>
            </div>
        </div>
    )
}

export default StickerCarousel;