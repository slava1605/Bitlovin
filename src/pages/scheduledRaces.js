import React, { useState } from "react";
import TerrainIcon from "../assets/images/terrain.png";
import { Link } from "react-router-dom";

const ScheduledRaces = () => {
  return (
		<div className="table-section">
			<div className="container">
				 <div className="table-box">
						<ul>
							 <li><Link to="/">Enter Race</Link></li>
							 <li className="active"><Link to="scheduled-races">Scheduled Races</Link></li>
							 <li><a href>Results</a></li>
						</ul>
						<div className="table-buttons">
							 <div className="filter-btns">
										 
									<div className="buttons">
										 <button class='btn'> Pecking Order: <span className="selected-text">A</span> <i className="fa fa-times"></i></button>
									 </div>
									 <div className="buttons">
										 <button class='btn'> Distance: <span className="selected-text">180m</span> <i className="fa fa-times"></i></button>
									 </div>
									 <div className="buttons">
										 <button class='btn'> Terrain: <span className="selected-text">Dirt</span> <i className="fa fa-times"></i></button>
									 </div>
									 <p>
											<a href className="clear-all">Clear All</a>
									 </p>


							 </div>
							 <div>
									<a href data-toggle="modal" data-target="#filter-popup" className="btn btn-filters"><span className="fa fa-sliders"></span>  Filters</a>
							 </div>
						</div>
						<div className="table-responsive">
							 <table className="table table-stripped table-hover" style={{borderCollapse: 'collapse'}}>
									<thead>
										 <tr>
												<th>Event</th>
												<th>Location</th>
												<th>Pecking Order</th>
												<th>Distance</th>
												<th>Terrain</th>
												<th>Prize Pool</th>
												<th>Starts In</th>
										 </tr>
									</thead>
									<tbody>
										 <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
												<td>Juvinile Jubile</td>
												<td>US San Francisco</td>
												<td><span className="text-class">A</span></td>
												<td>1600m</td>
												<td>
													 <img src="images/terrain.png" className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
												</td>
												<td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
												<td>1 m 42 s</td>
										 </tr>
										 <tr>
												<td colspan="8" className="hiddenRow">
													 <div className="accordian-body collapse" id="demo1">
															<div className="top-heading">
																 <div>
																		<h4>Juvinile Jublie <span className="starts-in">Starts in:  <img src="images/clock-icon.png" alt="" /> 00:45:50</span></h4>
																 </div>
																 <div>
																		<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
																 </div>
															</div>
															<table className="table">
																 <thead>
																		<tr>
																			 <th>Lane</th>
																			 <th>Image</th>
																			 <th>Name</th>
																			 <th>Heritage</th>
																			 <th>Perfection</th>
																			 <th>Owner</th>
																			 <th>History</th>
																			 <th>Races</th>
																		</tr>
																 </thead>
																 <tbody>
																		<tr>
																			 <td>1</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>12</td>
																		</tr>
																		<tr>
																			 <td>2</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>7</td>
																		</tr>
																		<tr>
																			 <td>3</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>3</td>
																		</tr>
																 </tbody>
															</table>
													 </div>
												</td>
										 </tr>
										 <tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
												<td>Juvinile Jubile</td>
												<td>US San Francisco</td>
												<td><span className="text-class">A</span></td>
												<td>1600m</td>
												<td>
													 <img src="images/terrain.png" className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
												</td>
												<td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
												<td>1 m 42 s</td>
										 </tr>
										 <tr>
												<td colspan="8" className="hiddenRow">
													 <div className="accordian-body collapse" id="demo2">
															<div className="top-heading">
																 <div>
																		<h4>Juvinile Jublie <span className="starts-in">Starts in:  <img src="images/clock-icon.png" alt="" /> 00:45:50</span></h4>
																 </div>
																 <div>
																		<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
																 </div>
															</div>
															<table className="table">
																 <thead>
																		<tr>
																			 <th>Lane</th>
																			 <th>Image</th>
																			 <th>Name</th>
																			 <th>Heritage</th>
																			 <th>Perfection</th>
																			 <th>Owner</th>
																			 <th>History</th>
																			 <th>Races</th>
																		</tr>
																 </thead>
																 <tbody>
																		<tr>
																			 <td>1</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>12</td>
																		</tr>
																		<tr>
																			 <td>2</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>7</td>
																		</tr>
																		<tr>
																			 <td>3</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>3</td>
																		</tr>
																 </tbody>
															</table>
													 </div>
												</td>
										 </tr>
										 <tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
												<td>Juvinile Jubile</td>
												<td>US San Francisco</td>
												<td><span className="text-class">A</span></td>
												<td>1600m</td>
												<td>
													 <img src="images/terrain.png" className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
												</td>
												<td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
												<td>1 m 42 s</td>
										 </tr>
										 <tr>
												<td colspan="8" className="hiddenRow">
													 <div className="accordian-body collapse" id="demo3">
															<div className="top-heading">
																 <div>
																		<h4>Juvinile Jublie <span className="starts-in">Starts in:  <img src="images/clock-icon.png" alt="" /> 00:45:50</span></h4>
																 </div>
																 <div>
																		<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
																 </div>
															</div>
															<table className="table">
																 <thead>
																		<tr>
																			 <th>Lane</th>
																			 <th>Image</th>
																			 <th>Name</th>
																			 <th>Heritage</th>
																			 <th>Perfection</th>
																			 <th>Owner</th>
																			 <th>History</th>
																			 <th>Races</th>
																		</tr>
																 </thead>
																 <tbody>
																		<tr>
																			 <td>1</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>12</td>
																		</tr>
																		<tr>
																			 <td>2</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>7</td>
																		</tr>
																		<tr>
																			 <td>3</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>3</td>
																		</tr>
																 </tbody>
															</table>
													 </div>
												</td>
										 </tr>
										 <tr data-toggle="collapse" data-target="#demo4" className="accordion-toggle">
												<td>Juvinile Jubile</td>
												<td>US San Francisco</td>
												<td><span className="text-class">A</span></td>
												<td>1600m</td>
												<td>
													 <img src="images/terrain.png" className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
												</td>
												<td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
												<td>1 m 42 s</td>
										 </tr>
										 <tr>
												<td colspan="8" className="hiddenRow">
													 <div className="accordian-body collapse" id="demo4">
															<div className="top-heading">
																 <div>
																		<h4>Juvinile Jublie <span className="starts-in">Starts in:  <img src="images/clock-icon.png" alt="" /> 00:45:50</span></h4>
																 </div>
																 <div>
																		<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
																 </div>
															</div>
															<table className="table">
																 <thead>
																		<tr>
																			 <th>Lane</th>
																			 <th>Image</th>
																			 <th>Name</th>
																			 <th>Heritage</th>
																			 <th>Perfection</th>
																			 <th>Owner</th>
																			 <th>History</th>
																			 <th>Races</th>
																		</tr>
																 </thead>
																 <tbody>
																		<tr>
																			 <td>1</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>12</td>
																		</tr>
																		<tr>
																			 <td>2</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>7</td>
																		</tr>
																		<tr>
																			 <td>3</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>3</td>
																		</tr>
																 </tbody>
															</table>
													 </div>
												</td>
										 </tr>
										 <tr data-toggle="collapse" data-target="#demo5" className="accordion-toggle">
												<td>Juvinile Jubile</td>
												<td>US San Francisco</td>
												<td><span className="text-class">A</span></td>
												<td>1600m</td>
												<td>
													 <img src="images/terrain.png" className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
												</td>
												<td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
												<td>1 m 42 s</td>
										 </tr>
										 <tr>
												<td colspan="8" className="hiddenRow">
													 <div className="accordian-body collapse" id="demo5">
															<div className="top-heading">
																 <div>
																		<h4>Juvinile Jublie <span className="starts-in">Starts in:  <img src="images/clock-icon.png" alt="" /> 00:45:50</span></h4>
																 </div>
																 <div>
																		<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
																 </div>
															</div>
															<table className="table">
																 <thead>
																		<tr>
																			 <th>Lane</th>
																			 <th>Image</th>
																			 <th>Name</th>
																			 <th>Heritage</th>
																			 <th>Perfection</th>
																			 <th>Owner</th>
																			 <th>History</th>
																			 <th>Races</th>
																		</tr>
																 </thead>
																 <tbody>
																		<tr>
																			 <td>1</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>12</td>
																		</tr>
																		<tr>
																			 <td>2</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>7</td>
																		</tr>
																		<tr>
																			 <td>3</td>
																			 <td><img src="images/chicken.png" className="img-pic" alt="" /></td>
																			 <td>Willber</td>
																			 <td>Dorking</td>
																			 <td>96%</td>
																			 <td>Liam</td>
																			 <td>2/0/4</td>
																			 <td>3</td>
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

export default ScheduledRaces;
