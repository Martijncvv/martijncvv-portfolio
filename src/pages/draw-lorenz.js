import React from "react";
import Sketch from "react-p5";
import "../styling/draw-lorenz.css";

function DrawLorenz() {
	const screenWidth = window.screen.width;
	const screenHeight = window.screen.height;

	let x = 0.01;
	let y = 0;
	let z = 0;
	const a = 10;
	const b = 24.74;
	const c = 8 / 3;

	let i = 0;

	const dataPoints = [];

	const setup = (p5) => {
		p5.createCanvas(screenWidth, screenHeight * 0.9, p5.WEBGL);
	};

	const draw = (p5) => {
		p5.rotateY(i);
		p5.rotateX(1.6);
		p5.rotateZ(1.7);
		p5.translate(0, -10, -350);
		console.log(i);
		i += 0.003;
		p5.background(6, 41, 92);

		let dt = 0.01;
		let dx = a * (y - x) * dt;
		let dy = (x * (b - z) - y) * dt;
		let dz = (x * y - c * z) * dt;

		x += dx;
		y += dy;
		z += dz;
		if (dataPoints.length < 50000) {
			dataPoints.push({ x, y, z });
		}

		p5.scale(13);
		p5.stroke(255);
		p5.noFill();

		p5.beginShape();
		dataPoints.forEach((dataPoint) => {
			p5.vertex(dataPoint.x, dataPoint.y, dataPoint.z);
		});
		p5.endShape();
	};

	return (
		<>
			<div id="header">header</div>
			<div id="sketch-div">
				<Sketch setup={setup} draw={draw} />
				<div id="overlay"></div>
			</div>

			<div></div>
		</>
	);
}

export default DrawLorenz;
