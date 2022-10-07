export const TooltipBottom = (props) => {
	return (
		<div className="tooltip" style={props.toolTipStyle}>
			<div className="tooltip-info">
				<p>{props.item.itemName}</p>
				<div className="horisont"></div>
				<p>
					ფასი: {props.item.itemPrice}ლ. | საერთო: {props.item.itemPrice * props.quantity}ლ.
				</p>
			</div>
			<div className="tooltip-stick-bottom" style={props.tooltipStickStyle}></div>
		</div>
	);
};

export const TooltipTop = (props) => {
	return (
		<div className="tooltip" style={props.toolTipStyle}>
			<div className="tooltip-stick-top" style={props.tooltipStickStyle}></div>
			<div className="tooltip-info">
				<p>{props.item.itemName}</p>
				<div className="horisont"></div>
				<p>
					ფასი: {props.item.itemPrice}ლ. | საერთო: {props.item.itemPrice * props.quantity}ლ.
				</p>
			</div>
		</div>
	);
};

export const TooltipLeft = (props) => {
	return (
		<div className="tooltip" style={props.toolTipStyle}>
			<div className="tooltip-stick-left" style={props.tooltipStickStyle && props.tooltipStickStyle}></div>
			<div className="tooltip-info">
				<p>{props.item.itemName}</p>
				<div className="horisont"></div>
				<p>
					ფასი: {props.item.itemPrice}ლ. | საერთო: {props.item.itemPrice * props.quantity}ლ.
				</p>
			</div>
		</div>
	);
};
