import Engine from '../Engine';

function KeychainCarousel() {

    setTimeout(() => {
        Engine('keychain');
    }, 42)

    return (
        <div className="wheel-carousel">
            <div className="wheel">
                <div className="keychain" id="card">KEYCHAIN</div>
                <div className="keychain" id="card2">KEYCHAIN</div>
                <div className="keychain" id="card3">KEYCHAIN</div>
                <div className="keychain" id="card4">KEYCHAIN</div>
                <div className="keychain" id="card5">KEYCHAIN</div>
                <div className="keychain" id="card6">KEYCHAIN</div>
                <div className="keychain" id="card7">KEYCHAIN</div>
                <div className="keychain" id="card8">KEYCHAIN</div>
                <div className="keychain" id="card9">KEYCHAIN</div>
                <div className="keychain" id="card10">KEYCHAIN</div>
                <div className="keychain" id="card11">KEYCHAIN</div>
                <div className="keychain" id="card12">KEYCHAIN</div>
                <div className="keychain" id="card13">KEYCHAIN</div>
                <div className="keychain" id="card14">KEYCHAIN</div>
            </div>
        </div>
    )
}

export default KeychainCarousel;