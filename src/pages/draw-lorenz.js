import React from "react";
import Sketch from "react-p5";
import "../styling/draw-lorenz.css";
import NavBar from "../components/nav-bar";

import TranspaDashboard from "../images/transpa/Transpa-page-dashboard.png";
import cryptoExtension from "../images/cryptoextension/CG_twitter_extension_screenshot_ETH_USD_CROP.png";
import Cryptofolio from "../images/cryptofolio/cryptofolio_home-page-view_btc.png";
import chipsAndCircuitsWeb from "../images/chipsAndCircuits/chipsAndCircuitsWebV3.png";
import Card from "../components/card";

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

	const setup = (p5) => {
		const canvas = p5.createCanvas(screenWidth, screenHeight * 0.9, p5.WEBGL);
		canvas.parent("sketch-holder");
	};

	const testF = () => {
		console.log("TESTTEST");
	};
	document.addEventListener("DOMContentLoaded", function () {
		let topContainer = document.getElementById("top-container");
		let bottomContainer = document.getElementById("bottom-container");
		let footerContainer = document.getElementById("footer-container");

		topContainer.addEventListener("mouseenter", function (event) {
			scale = 13;
		});
		bottomContainer.addEventListener("mouseenter", function (event) {
			scale = 11;
		});
		footerContainer.addEventListener("mouseenter", function (event) {
			scale = 11;
		});
	});

	const draw = (p5) => {
		p5.rotateY(i);
		p5.rotateX(1.6);
		p5.rotateZ(1.7);
		p5.translate(0, -10, -350);
		console.log(i);
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
			p5.vertex(dataPoint.x, dataPoint.y, dataPoint.z);
		});
		p5.endShape();
	};

	return (
		<>
			<NavBar />
			<Sketch setup={setup} draw={draw} />
			<div id="sketch-holder"></div>

			<div id="content">
				<div id="top-container">
					<div id="top-container-left">
						<div id="name">
							<h1>Martijn van Veen</h1>
							<h2>Full Stack Developer</h2>
						</div>

						<a href="#" target="_blank" id="contact-button">
							Contact me
						</a>
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
										<h4>Stacks</h4>
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
										<h4>Hobbies</h4>
										<li>Fitness</li>
										<li>Reading</li>
										<li>Travelling</li>
										<li>Playing Guitar</li>
									</ul>
								</div>
								<div className="mid-container-right-box">
									<ul>
										<h4>Interests</h4>
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
						<Card
							title="Transpa Transparency Platform"
							text="A platform where SMB's can create pages for products they sell
						to increase product transparency; Connecting business and
						customer by communicating through the product."
							stacks="Javascript, React, Redux, Sequalize, HTML, CSS"
							GHLink="https://github.com/Martijncvv/transpa_frontend"
							background={TranspaDashboard}
						/>
						<Card
							title="Cryptocurrency Ticker Extension"
							text="A Google Chrome extension which displays information about a
						cryptocurrency in a popup when the user selects a coin ticker
						(BTC/ ETH) and presses CTRL+SHIFT+F."
							stacks="Javascript, HTML, CSS"
							GHLink="https://github.com/Martijncvv/cryptocurrency_chrome_extension"
							background={cryptoExtension}
						/>
					</div>
					<div id="bottom-container-right">
						<Card
							title="Cryptofolio"
							text="A clean cryptocurrency portfolio tracker that shows (historical) price
						data, social media data and has the functionality to explore
						new investment opportunities within the cryptocurrency industry."
							stacks="Python, Django, Javascript, HTML, CSS"
							GHLink="https://github.com/Martijncvv/cryptocurrency_portfolio_project"
							background={Cryptofolio}
						/>
						<Card
							title="Chips and Circuits"
							text="An algorithm that is able to find an optimal routing of wires
							connecting several (uniform) logic-gates that form a
							hypothetical microchip."
							stacks="Python, Javascript, HTML, CSS"
							GHLink="https://github.com/Martijncvv/chips_and_circuits"
							background={chipsAndCircuitsWeb}
						/>
					</div>
				</div>

				<div id="footer-container">
					<div id="footer-container-left">
						<div className="footer-container-description">
							<h1>Contact</h1>
							<a href="https://github.com/Martijncvv" target="_blank">
								Github
							</a>
							<a href="https://www.linkedin.com/in/martijncvv/" target="_blank">
								Linkedin
							</a>
							<a href="https://twitter.com/Martijncvv" target="_blank">
								Twitter
							</a>
						</div>
					</div>

					<div id="footer-container-right">
						<div className="footer-container-description">
							<h1>Butterfly Effect</h1>
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
					</div>
				</div>
			</div>
		</>
	);
}

export default DrawLorenz;
