import React from "react";
import Sketch from "react-p5";
import "../styling/draw-lorenz.css";
import NavBar from "../components/nav-bar";

import TranspaDashboard from "../images/transpa/Transpa-page-dashboard.png";
import cryptoExtension from "../images/cryptoextension/CG_Whatsapp_extension_screenshot_VET_USD.png";
import Cryptofolio from "../images/cryptofolio/cryptofolio_home-page-view_btc.png";
import chipsAndCircuitsWeb from "../images/chipsAndCircuits/chipsAndCircuitsWeb.png";

function DrawLorenz() {
	const screenWidth = window.screen.width;
	const screenHeight = window.screen.height;

	let x = 0.01;
	let y = 0;
	let z = 0;
	const a = 10;
	const b = 24.74;
	const c = 8 / 3;
	// const a = 3;
	// const b = 28;
	// const c = 8 / 3;
	// const a = 10;
	// const b = 28;
	// const c = 8 / 3;

	let i = 0;
	let scale = 13;

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
	document.addEventListener("DOMContentLoaded", function () {
		let topContainer = document.getElementById("top-container");
		let bottomContainer = document.getElementById("bottom-container");
		let footerContainer = document.getElementById("footer-container");
		let footerButton1 = document.getElementById("button-1");
		let footerDescription1 = document.getElementById("footer-description-1");

		topContainer.addEventListener("mouseenter", function (event) {
			scale = 13;
		});
		bottomContainer.addEventListener("mouseenter", function (event) {
			scale = 7;
			footerDescription1.style.visibility = "hidden";
		});
		footerContainer.addEventListener("mouseenter", function (event) {
			scale = 13;
		});
		footerButton1.addEventListener("mouseenter", function (event) {
			scale = 13;

			footerDescription1.style.visibility = "visible";
		});
	});

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
		if (dataPoints.length > 2500) {
			dataPoints.shift();
		}

		p5.scale(scale);
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
						<div className="mid-container-text">
							<h1>About</h1>
							<p>
								My name is Martijn van Veen, 26 years old and I am interested in
								technological innovations. This ranges from blockchain
								technology to artificial intelligence, and from apps that track
								body data to the third industrial revolution.
								<br /> <br /> In my free time I like to create (educational)
								content on social media about various blockchain projects.
								Currently I’m developing myself to be able to work as a
								developer at an innovative and open-minded company.
							</p>
						</div>
					</div>

					<div id="mid-container-right">
						<div className="mid-container-text">
							<h1>Me</h1>
							<div id="mid-container-right-content">
								<div className="mid-container-right-box">
									<ul>
										<li>Stacks</li>
										<li>Javascript</li>
										<li>React</li>
										<li>Redux</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>SQL</li>
										<li>Python</li>
									</ul>
								</div>
								<div className="mid-container-right-box">
									<ul>
										<li>Hobbies</li>
										<li>Fitness</li>
										<li>Reading</li>
										<li>Travelling</li>
										<li>Playing Guitar</li>
									</ul>
								</div>
								<div className="mid-container-right-box">
									<ul>
										<li>Interests</li>
										<li>Cryptocurrencies</li>
										<li>Sustainability</li>
										<li>Philosophy</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="bottom-container">
					<div id="bottom-container-left">
						<div className="bottom-container-box">
							<div>
								<h3>Transpa Product Transparency Platform</h3>
								<p>
									A platform where SMB's can create pages for products they sell
									to increase product transparency; Connecting business and
									customer by communicating through the product.
								</p>
								<p className="bottom-container-stacks">
									Javascript, React, Redux, Sequalize, HTML, CSS
								</p>
								<a
									href="https://github.com/Martijncvv/transpa_frontend"
									target="_blank"
								>
									<h4>Github</h4>
								</a>
							</div>
							<div className="bottom-container-images">
								<img
									className="bottom-container-image"
									src={TranspaDashboard}
									alt="Transpa Dashboard"
								/>
							</div>
						</div>

						<div className="bottom-container-box">
							<div>
								<h3>Cryptocurrency Google Chrome Extension</h3>
								<p>
									A Google Chrome extension which displays information about a
									cryptocurrency in a popup when the user selects a coin ticker
									(BTC/ ETH) and presses CTRL+SHIFT+F.
								</p>
								<p className="bottom-container-stacks">Javascript, HTML, CSS</p>
								<a
									href="https://github.com/Martijncvv/cryptocurrency_chrome_extension"
									target="_blank"
								>
									<h4>Github</h4>
								</a>
							</div>
							<div className="bottom-container-images">
								<img
									className="bottom-container-image"
									src={cryptoExtension}
									alt="Crypto Chrome Extension"
								/>
							</div>
						</div>
					</div>
					<div id="bottom-container-right">
						<div className="bottom-container-box">
							<div>
								<h3>Cryptofolio</h3>
								<p>
									A clean cryptocurrency portfolio tracker that shows price
									data, social media data and has the functionality to explore
									new investment opportunities.
								</p>
								<p className="bottom-container-stacks">
									Python, Django, Javascript, HTML, CSS
								</p>
								<a
									href="https://github.com/Martijncvv/cryptocurrency_portfolio_project"
									target="_blank"
								>
									<h4>Github</h4>
								</a>
							</div>
							<div className="bottom-container-images">
								<img
									className="bottom-container-image"
									src={Cryptofolio}
									alt="Cryptofolio Dashboard"
								/>
							</div>
						</div>
						<div className="bottom-container-box">
							<div>
								<h3>Chips and Circuits</h3>
								<p>
									An algorithm that is able to find an optimal routing of wires
									connecting several (uniform) logic-gates that form a
									hypothetical microchip.
								</p>
								<p className="bottom-container-stacks">
									Python, Javascript, HTML, CSS
								</p>
								<a
									href="https://github.com/Martijncvv/chips_and_circuits"
									target="_blank"
								>
									<h4>Github</h4>
								</a>
							</div>
							<div className="bottom-container-images">
								<img
									className="bottom-container-image"
									src={chipsAndCircuitsWeb}
									alt="Chips and Circuits Dashboard"
								/>
							</div>
						</div>
					</div>
				</div>
				<div id="footer-container">
					<div id="footer-container-left">
						<div
							id="footer-description-1"
							className="footer-container-description"
						>
							<p>Butterfly Effect</p>
							<p>
								In chaos theory, the butterfly effect is the sensitive
								dependence on initial conditions in which a small change in one
								state of a deterministic nonlinear system can result in large
								differences in a later state.
							</p>
							<p>
								The term butterfly effect comes from an analogy where a
								butterfly flaps its wings in Tokyo and a tornado occurs in
								Tennessee.
							</p>
						</div>
						<div className="footer-container-button" id="button-1"></div>
					</div>

					<div id="footer-container-right"></div>
				</div>
			</div>
		</>
	);
}

export default DrawLorenz;
