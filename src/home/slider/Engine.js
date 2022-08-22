
function Cards(object) {
    const cards = document.querySelectorAll(`.${object}`);
    const wheel = document.querySelector('.wheel');

    let WC_WIDTH = parseFloat(getComputedStyle(document.querySelector('.wheel-carousel')).getPropertyValue('width'));
    let WHEEL_CFC = 3.5;

    let wheel_radius = WC_WIDTH / WHEEL_CFC;

    let theta = 0.0;
    let x = 0.0;
    let y = 0.0;

    let rotate = 360.0 / cards.length;
    let angle = 0.0;

    let middle = {
        x: 0.0,
        y: 0.0,
    };

    let center = {
        x: parseFloat(getComputedStyle(cards[0]).left),
        y: parseFloat(getComputedStyle(cards[0]).top),
    };

    cards.forEach((card, i) => {
        theta = (Math.PI / (cards.length / 2)) * i;
        x = Math.cos(theta) * wheel_radius;
        y = i === cards.length / 2 ? 0 : Math.sin(theta) * wheel_radius;
        middle.x = parseFloat(getComputedStyle(card).width) / 2.0;
        middle.y = parseFloat(getComputedStyle(card).height) / 2.0;

        card.style.left = `${center.x + x - middle.x}px`;
        card.style.top = `${center.y + y - middle.y}px`;
        card.style.transform = `rotate(${angle}deg)`;
        card.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        angle += rotate;
    });

    theta = 0.0;
    wheel.addEventListener('wheel', (e) => {
        theta = theta + e.wheelDeltaY * 0.0005;
        wheel.style.transform = `translate(-50%, -50%) rotate(${(theta * (360 / Math.PI))}deg)`;
    });
}

export default Cards;