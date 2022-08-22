import Engine from '../Engine';

function BraceletCarousel() {

    setTimeout(() => {
        Engine('bracelet');
    }, 42)

    return (
        <div className="wheel-carousel">
            <div className="wheel">
                <div className="bracelet" id="card">BRACELET</div>
                <div className="bracelet" id="card2">BRACELET</div>
                <div className="bracelet" id="card3">BRACELET</div>
                <div className="bracelet" id="card4">BRACELET</div>
                <div className="bracelet" id="card5">BRACELET</div>
                <div className="bracelet" id="card6">BRACELET</div>
                <div className="bracelet" id="card7">BRACELET</div>
                <div className="bracelet" id="card8">BRACELET</div>
                <div className="bracelet" id="card9">BRACELET</div>
                <div className="bracelet" id="card10">BRACELET</div>
                <div className="bracelet" id="card11">BRACELET</div>
                <div className="bracelet" id="card12">BRACELET</div>
                <div className="bracelet" id="card13">BRACELET</div>
                <div className="bracelet" id="card14">BRACELET</div>
            </div>
        </div>
    )
}

export default BraceletCarousel;