import React, { useState } from "react";
import TerrainIcon from "../assets/images/terrain.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import RacingTable from "../components/racingTable";

const Main = () => {
	const { headerFocus, setHeaderFocus } = useRacingContext();

	return (
		<div className="table-section" onClick={() => setHeaderFocus(!headerFocus)}>
			<div className="container">
				<div className="table-box">
						<ul>
							<li className="active"><a href="">Enter Race</a></li>
							<li><a href="">Scheduled Races</a></li>
							<li><a href="">Results</a></li>
						</ul>
						<div className="table-buttons">
							<div>
									<a href="#" className="btn btn-races">Open Races</a>
							</div>
							<div>
									<a href="#" data-toggle="modal" data-target="#filter-popup" className="btn btn-filters"><span className="fa fa-sliders"></span>  Filters</a>
							</div>
						</div>
						<div className="table-responsive">
							<RacingTable />
							<table className="table table-stripped table-hover" style={{borderCollapse: 'collapse'}}>
								<thead>
									<tr>
											<th>Event</th>
											<th>Location</th>
											<th>Pecking Order</th>
											<th>Distance</th>
											<th>Terrain</th>
											<th>Entry Fee</th>
											<th>Prize Pool</th>
											<th>Capacity</th>
									</tr>
								</thead>
								<tbody>
									<tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
										<td>The Timbuktu Trek</td>
										<td>Timbuktu, Mali</td>
										<td><span className="text-class">A</span></td>
										<td>140m</td>
										<td>
											<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
										</td>
										<td><span className="price-green"> $17.88 </span> <span className="price-usd">USD</span></td>
										<td><span className="price-green"> $128.75 </span> <span className="price-usd">USD</span></td>
										<td>3/8</td>
									</tr>
									<tr>
										<td colspan="8" className="hiddenRow">
											<div className="accordian-body collapse" id="demo1">
													<div className="pick-gate">
														<h2 className="text-center">Pick a Lane to enter</h2>
														<div className="open-gates">
																<span>Open Lane</span>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
														</div>
													</div>
													{/* <!-- pick-gate--> */}
													{/* <!-- <div className="top-heading">
														<div>
																<h4>Juvinile Jublie</h4>
														</div>
														<div>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
														</div>
														</div> --> */}
													{/* <!-- top-heading --> */}
													<table className="table">
														<thead>
																<tr>
																	<th>Image</th>
																	<th>Lane</th>
																	<th>Name</th>
																	<th>Heritage</th>
																	<th>Perfection</th>
																	<th>Owner</th>
																	<th>History</th>
																	<th>Races</th>
																</tr>
														</thead>
														<tbody>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>3</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>5</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>8</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
														</tbody>
													</table>
											</div>
										</td>
									</tr>
									<tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
											<td>Mauritshuis Ras</td>
											<td>The Hague, Netherlands</td>
											<td><span className="text-class">A</span></td>
											<td>210m</td>
											<td>
												<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
											</td>
											<td><span className="price-green"> $35.76</span> <span className="price-usd">USD</span></td>
											<td><span className="price-green"> $257.49</span> <span className="price-usd">USD</span></td>
											<td>3/8</td>
									</tr>
									<tr>
										<td colspan="8" className="hiddenRow">
											<div className="accordian-body collapse" id="demo2">
													<div className="pick-gate">
														<h2 className="text-center">Pick a Lane to enter</h2>
														<div className="open-gates">
																<span>Open Lane</span>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
														</div>
													</div>
													{/* <!-- pick-gate--> */}
													{/* <!-- <div className="top-heading">
														<div>
																<h4>Juvinile Jublie</h4>
														</div>
														<div>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
														</div>
														</div> --> */}
													{/* <!-- top-heading --> */}
													<table className="table">
														<thead>
																<tr>
																	<th>Image</th>
																	<th>Lane</th>
																	<th>Name</th>
																	<th>Heritage</th>
																	<th>Perfection</th>
																	<th>Owner</th>
																	<th>History</th>
																	<th>Races</th>
																</tr>
														</thead>
														<tbody>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>3</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>5</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>8</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
														</tbody>
													</table>
											</div>
										</td>
									</tr>
									<tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
										<td>Bauernhof Lopp</td>
										<td>Matfors, Sweden</td>
										<td><span className="text-class">A</span></td>
										<td>180m</td>
										<td>
											<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
										</td>
										<td><span className="price-green"> $7.15</span> <span className="price-usd">USD</span></td>
										<td><span className="price-green"> $51.50</span> <span className="price-usd">USD</span></td>
										<td>3/8</td>
									</tr>
									<tr>
										<td colspan="8" className="hiddenRow">
											<div className="accordian-body collapse" id="demo3">
													<div className="pick-gate">
														<h2 className="text-center">Pick a Lane to enter</h2>
														<div className="open-gates">
																<span>Open Lane</span>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
														</div>
													</div>
													{/* <!-- pick-gate--> */}
													{/* <!-- <div className="top-heading">
														<div>
																<h4>Juvinile Jublie</h4>
														</div>
														<div>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
														</div>
														</div> --> */}
													{/* <!-- top-heading --> */}
													<table className="table">
														<thead>
																<tr>
																	<th>Image</th>
																	<th>Lane</th>
																	<th>Name</th>
																	<th>Heritage</th>
																	<th>Perfection</th>
																	<th>Owner</th>
																	<th>History</th>
																	<th>Races</th>
																</tr>
														</thead>
														<tbody>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>3</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>5</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>8</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
														</tbody>
													</table>
											</div>
										</td>
									</tr>
									<tr data-toggle="collapse" data-target="#demo4" className="accordion-toggle">
										<td>The Rio Run</td>
										<td>Rio de Janeiro, Brazil</td>
										<td><span className="text-class">A</span></td>
										<td>100m</td>
										<td>
											<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
										</td>
										<td><span className="price-green"> $3.58</span> <span className="price-usd">USD</span></td>
										<td><span className="price-green"> $25.75</span> <span className="price-usd">USD</span></td>
										<td>3/8</td>
									</tr>
									<tr>
										<td colspan="8" className="hiddenRow">
											<div className="accordian-body collapse" id="demo4">
													<div className="pick-gate">
														<h2 className="text-center">Pick a Lane to enter</h2>
														<div className="open-gates">
																<span>Open Lane</span>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
														</div>
													</div>
													{/* <!-- pick-gate--> */}
													{/* <!-- <div className="top-heading">
														<div>
																<h4>Juvinile Jublie</h4>
														</div>
														<div>
																<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
														</div>
														</div> --> */}
													{/* <!-- top-heading --> */}
													<table className="table">
														<thead>
																<tr>
																	<th>Image</th>
																	<th>Lane</th>
																	<th>Name</th>
																	<th>Heritage</th>
																	<th>Perfection</th>
																	<th>Owner</th>
																	<th>History</th>
																	<th>Races</th>
																</tr>
														</thead>
														<tbody>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>3</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>5</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
																<tr data-toggle="modal" data-target="#view-chicken">
																	<td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																	<td>8</td>
																	<td>Willber</td>
																	<td>Dorking</td>
																	<td>96%</td>
																	<td>Liam</td>
																	<td>2/0/4</td>
																	<td>12</td>
																</tr>
														</tbody>
													</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
				</div>
			</div>
		</div>
	)
};

export default Main;