
function Navigator({ changeCarousel }) {

    function changeCarous(e, id) {
        changeCarousel(id);
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('selectedDot'))
        e.target.classList.add('selectedDot');
    }

    return (
        <div className="navigator">
            <div className="dot selectedDot" onClick={(e) => changeCarous(e, 0)}></div>
            <div className="dot" onClick={(e) => changeCarous(e, 1)}></div>
            <div className="dot" onClick={(e) => changeCarous(e, 2)}></div>
            <div className="dot" onClick={(e) => changeCarous(e, 3)}></div>
        </div>
    )
}

export default Navigator;