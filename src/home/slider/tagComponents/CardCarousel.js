import Engine from "../Engine";

function CardCarousel() {
	setTimeout(() => {
		Engine("card");
	}, 42);

	return (
		<div className="wheel-carousel">
			<div className="wheel">
				<div className="card" id="card">
					CARD
				</div>
				<div className="card" id="card2">
					CARD
				</div>
				<div className="card" id="card3">
					CARD
				</div>
				<div className="card" id="card4">
					CARD
				</div>
				<div className="card" id="card5">
					CARD
				</div>
				<div className="card" id="card6">
					CARD
				</div>
				<div className="card" id="card7">
					CARD
				</div>
				<div className="card" id="card8">
					CARD
				</div>
				<div className="card" id="card9">
					CARD
				</div>
				<div className="card" id="card10">
					CARD
				</div>
				<div className="card" id="card11">
					CARD
				</div>
				<div className="card" id="card12">
					CARD
				</div>
				<div className="card" id="card13">
					CARD
				</div>
				<div className="card" id="card14">
					CARD
				</div>
			</div>
		</div>
	);
}

export default CardCarousel;
