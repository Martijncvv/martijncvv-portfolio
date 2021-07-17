import React from "react";
import "./card.css";

function Card(props) {
	return (
		<div
			className="card"
			style={{ backgroundImage: `url(${props.background})` }}
		>
			<div className="card-content">
				<h2 className="card-title">{props.title}</h2>
				<p className="card-body">{props.text}</p>
				<p className="card-stacks">{props.stacks}</p>

				<a href={props.GHLink} target="_blank" className="card-button">
					Details
				</a>
			</div>
		</div>
	);
}

export default Card;
