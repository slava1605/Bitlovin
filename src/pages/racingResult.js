import React, { useState } from "react";
import ChickenSmImg from "../assets/images/chicken-sm.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import ResultsTable from "../components/resultsTable";
import ResultsFilterModal from "../components/modals/resultsFilterModal.js";
import { Link } from "react-router-dom";

const RacingResult = () => {
	console.log(ChickenSmImg);
  return (
		<div className="racing-pending">
			<div className="container">
				<div className="racing-top">
						<div>
							<h3>Juvinile Jublie </h3>
							<p>
									<a href="" className="btn watch-replay">Watch Replay</a>
							</p>
						</div>
						<div className="text-right">
							<h4>Prizepool <span>$24.63 USD</span></h4>
							<h4> <span>Race Finished</span></h4>
						</div>
				</div>
				<div className="racing-list racing-list-result">
						<ul>
							<li>Pecking Order: <span className="text-class">A</span></li>
							<li>Distance: <span>1000m</span></li>
							<li>Status: <span>Finished</span></li>
							<li>Ran At: <span>10 Sep 2021, 12:36</span></li>
							<li>Terrain: <span></span></li>
						</ul>
				</div>
				<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>1st </h4>
										<span className="sec-text">58s</span>
										<ul>
											<li><span>Wilber</span></li>
											<li className="price-right"><span className="yellow-prize">Prize</span> <em> $5.99</em></li>
										</ul>
										<ul>
											<li>Dorking</li>
											<li>96%</li>
											<li>Stock</li>
											<li>Talent</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>2nd</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li className="price-right"><span className="yellow-prize">Prize</span> <em> $5.99</em></li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
												<li>Talent</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>3rd</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li className="price-right"><span className="yellow-prize">Prize</span> <em> $5.99</em></li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
												<li>Talent</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
				</div>
				<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>4th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>5th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>6th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
				</div>
				<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>7th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>8th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="racing-box">
									<div>
										<h4>9th</h4>
										<span className="sec-text">58s</span>
										<ul>
												<li><span>Wilber</span></li>
												<li>Talent</li>
										</ul>
										<ul>
												<li>Dorking</li>
												<li>96%</li>
												<li>Stock</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
};

export default RacingResult;
