import React from "react";
import Sketch from "react-p5";
import "../styling/draw-lorenz.css";
import NavBar from "../components/nav-bar";

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
	let sphere;

	const setup = (p5) => {
		const canvas = p5.createCanvas(screenWidth, screenHeight * 0.9, p5.WEBGL);
		canvas.parent("sketch-holder");
		// canvas.style("overflow", "hidden");
	};

	const testF = () => {
		console.log("TESTTEST");
	};

	const draw = (p5) => {
		p5.rotateY(i);
		p5.rotateX(1.6);
		p5.rotateZ(1.7);
		p5.translate(0, -10, -350);
		// console.log(i);
		i += 0.003;
		p5.background(4, 30, 69);

		let dt = 0.01;
		let dx = a * (y - x) * dt;
		let dy = (x * (b - z) - y) * dt;
		let dz = (x * y - c * z) * dt;

		x += dx;
		y += dy;
		z += dz;

		dataPoints.push({ x, y, z });
		if (dataPoints.length > 1000) {
			dataPoints.shift();
		}

		p5.scale(13);
		p5.stroke(247, 247, 247);
		p5.noFill();

		p5.beginShape();
		dataPoints.forEach((dataPoint) => {
			// console.log(dataPoint);
			p5.vertex(dataPoint.x, dataPoint.y, dataPoint.z);
			if (
				dataPoint.x === -8.04130748960242 &&
				dataPoint.y === -8.651822589990463 &&
				dataPoint.z === 28.27212631037705
			) {
				// p5.translate(dataPoint.x, dataPoint.y, dataPoint.z);
				// sphere = p5.sphere(1);
				// // console.log(p5.screenX())
				// p5.translate(-dataPoint.x, -dataPoint.y, -dataPoint.z);
			}
		});
		p5.endShape();

		if (p5.pmouseX == -8.04130748960242 && p5.pmouseY == -8.651822589990463) {
			testF();
		}
		// console.log(p5.pMouseX);

		// console.log(sphere);
		// console.log(p5.mouseY);
	};

	return (
		<>
			<NavBar />
			<Sketch setup={setup} draw={draw} />
			<div id="sketch-holder"></div>
			{/* <div id="overlay"></div> */}

			<div id="content">
				<div id="top-container">
					<div id="top-container-left">
						<div>
							<h1>Martijn van Veen</h1>
							<h2>Full Stack Developer</h2>
						</div>

						<button id="contact-button">Contact Me</button>
					</div>

					<div id="top-container-right">
						<ul>
							<li>INTP/INTF Logician/Mediator, </li>
							<li>Humanitarian: Driven to make the world a better place. </li>
							<li>
								Creative and imaginative in coming up with insightful solutions
								to meaningful problems.
							</li>
						</ul>
					</div>
				</div>
				<div id="mid-container">
					<div id="mid-container-left">
						<h1>About me</h1>
					</div>
					{/* <div id="mid-container-mid"></div> */}
					<div id="mid-container-right">
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.{" "}
						</p>
					</div>
				</div>
				<div id="bottom-container">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.{" "}
					</p>
				</div>
			</div>
		</>
	);
}

export default DrawLorenz;
