import React from "react";
import Sketch from "react-p5";
import "../styling/draw-lorenz.css";
import NavBar from "../components/nav-bar";
import Card from "../components/card";

import transpaDashboard from "../images/transpa/Transpa-page-dashboard.png";
import cryptoExtension from "../images/cryptoextension/CG_twitter_extension_screenshot_ETH_USD_CROP.png";
import cryptofolio from "../images/cryptofolio/cryptofolio_home-page-view_btc.png";
import chipsAndCircuitsWeb from "../images/chipsAndCircuits/chipsAndCircuitsWebV3.png";
import githubLogo from "../images/socialMedia/githubLogo.png";
import twitterLogo from "../images/socialMedia/twitterLogo.png";
import linkedinLogo from "../images/socialMedia/linkedinLogo.png";

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

	// DESKTOP
	let scale = 11;
	let sketchPlacement = 4.5;
	let desktop = true;
	// console.log(screenHeight);
	// MOBILE
	if (screenWidth <= 600) {
		scale = screenHeight / 160;
		sketchPlacement = screenHeight / 130;
		desktop = false;
	}

	const dataPoints = [];

	const setup = (p5) => {
		const canvas = p5.createCanvas(screenWidth, screenHeight * 0.9, p5.WEBGL);
		canvas.parent("sketch-holder");
	};

	document.addEventListener("DOMContentLoaded", function () {
		// let topContainer = document.getElementById("top-container");
		// let bottomContainer = document.getElementById("bottom-container");
		// let footerContainer = document.getElementById("footer-container");
		// topContainer.addEventListener("mouseenter", function (event) {
		// 	scale = 13;
		// });
		// bottomContainer.addEventListener("mouseenter", function (event) {
		// 	scale = 11;
		// });
		// footerContainer.addEventListener("mouseenter", function (event) {
		// 	scale = 11;
		// });
	});

	const draw = (p5) => {
		p5.rotateY(i);
		p5.rotateX(1.6);
		p5.rotateZ(1.7);

		console.log("window.screen.height", window.screen.height);
		p5.translate(0, 0, -(window.screen.height / sketchPlacement));

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
			<Sketch setup={setup} draw={draw} />
			<div id="sketch-holder"></div>

			<div className="main">
				{desktop && <NavBar />}

				<div className="container fullWindow-container  flex-wrap-between fc-100">
					<div className="container-element">
						<h1>Martijn van Veen</h1>
						<h2>Full Stack Developer</h2>
					</div>

					<div className="container-element right-element">
						<p>INTP/INTF Logician/Mediator,</p>
						<p>Humanitarian: Driven to make the world a better place.</p>
						<p>
							Creative and imaginative in coming up with insightful solutions to
							meaningful problems.
						</p>
					</div>
				</div>

				<div className="container flex-wrap-between bgc-100 ">
					<div className="container-element">
						<h1>About</h1>
						<p>
							My name is Martijn van Veen, 26 years old and I am interested in
							technological innovations. This ranges from blockchain technology
							to artificial intelligence, and from apps that track body data to
							the third industrial revolution.
							<br /> <br /> In my free time I like to create (educational)
							content on social media about various blockchain projects.
							Currently I’m developing myself to be able to work as a developer
							at an innovative and open-minded company.
						</p>
					</div>

					<div className="container-element">
						<h1>Me</h1>
						<div>
							<div className="flex-wrap-between">
								<ul>
									<h3>Stacks</h3>
									<li>Javascript</li>
									<li>React</li>
									<li>Redux</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>SQL</li>
									<li>Python</li>
								</ul>
								<p></p>
								<ul>
									<h3>Hobbies</h3>
									<li>Fitness</li>
									<li>Reading</li>
									<li>Travelling</li>
									<li>Playing Guitar</li>
								</ul>
								<ul>
									<h3>Interests</h3>
									<li>Cryptocurrencies</li>
									<li>Sustainability</li>
									<li>Philosophy</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container flex-wrap-between bgc-900 ">
					<div className="container-element flex-center">
						<Card
							title="Transpa Platform"
							text="A platform where SMB's can create pages to increase product transparency; Connecting business and
						customer by communicating through the product."
							stacks="Javascript, React, Redux, Sequalize, HTML, CSS"
							GHLink="https://github.com/Martijncvv/transpa_frontend"
							background={transpaDashboard}
						/>
					</div>

					<div className="container-element flex-center">
						<Card
							title="Cryptofolio"
							text="A cryptocurrency portfolio tracker that shows price
						data, social media data and has the functionality to explore
						new investment opportunities within the industry."
							stacks="Python, Django, Javascript, HTML, CSS"
							GHLink="https://github.com/Martijncvv/cryptocurrency_portfolio_project"
							background={cryptofolio}
						/>
					</div>
					<div className="container-element flex-center">
						<Card
							title="Cryptoticker Extension"
							text="A Google Chrome extension which displays information about a
						cryptocurrency in a popup when the user selects a coin ticker
						(BTC/ ETH) and presses CTRL+SHIFT+F."
							stacks="Javascript, HTML, CSS"
							GHLink="https://github.com/Martijncvv/cryptocurrency_chrome_extension"
							background={cryptoExtension}
						/>
					</div>

					<div className="container-element flex-center">
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

				<div className="container fullWindow-container  flex-wrap-between fc-100">
					<div className="container-element">
						<h1>Contact</h1>
						<div id="contact">
							<a
								href="https://github.com/Martijncvv"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img alt="github logo" src={githubLogo} />
							</a>

							<a
								href="https://www.linkedin.com/in/martijncvv/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img alt="linkedin logo" src={linkedinLogo} />
							</a>

							<a
								href="https://twitter.com/Martijncvv"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img alt="twitter logo" src={twitterLogo} />
							</a>
						</div>
					</div>

					<div className="container-element mid-element">
						<p></p>
					</div>

					<div className="container-element right-element">
						<h2>Butterfly Effect</h2>
						<p>
							In chaos theory, the butterfly effect is the sensitive dependence
							on initial conditions in which a small change in one state of a
							deterministic nonlinear system can result in large differences in
							a later state.
						</p>
						{desktop && (
							<p>
								The term butterfly effect comes from an analogy where a
								butterfly flaps its wings in Tokyo and a tornado occurs in
								Tennessee.
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default DrawLorenz;
