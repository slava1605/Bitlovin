import React, { useState } from "react";
import MyCoopFilterModal from "../components/modals/myCoopFilterModal";

const MyCoop = () => {
	const [isFilterModal, setIsFilterModal] = useState(false);

	const handleOpenFilter = (e) => {
		setIsFilterModal(true);
	};

	return (
		<div class="my-coop">
			<div class="container">
				<div class="my-coop-top">
					<div class="width100">
						<h1 class="text-center">My Coop</h1>
						<h4 class="text-center">You have 5 Chickens</h4>
					</div>
					<div>
						<a href onClick={handleOpenFilter} class="btn btn-filters">
							<span class="fa fa-sliders"></span>  Filters
						</a>
					</div>
				</div>
				<div class="row ten-columns">
						<div class="col-sm-2">
							<div class="coop-box">
								<a href>  <img src="images/chicken-thumbnail.png" alt="" /></a>
								<h3>Flight</h3>
								<ul>
									<li><a href>Dorking</a></li>
									<li><a href>92%</a></li>
									<li><a href>Talent</a></li>
									<li><a href>Spicy</a></li>
								</ul>
								<p class="text-center">
									<a href class="btn btn-showdetails">SHOW DETAILS</a>
								</p>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="coop-box">
								<a href>  <img src="images/chicken-thumbnail.png" alt="" /></a>
								<h3>Flight</h3>
								<ul>
									<li><a href>Dorking</a></li>
									<li><a href>92%</a></li>
									<li><a href>Talent</a></li>
									<li><a href>Spicy</a></li>
								</ul>
								<p class="text-center">
									<a href class="btn btn-showdetails">SHOW DETAILS</a>
								</p>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="coop-box">
								<a href>  <img src="images/chicken-thumbnail.png" alt="" /></a>
								<h3>Flight</h3>
								<ul>
									<li><a href>Dorking</a></li>
									<li><a href>92%</a></li>
									<li><a href>Talent</a></li>
									<li><a href>Spicy</a></li>
								</ul>
								<p class="text-center">
									<a href class="btn btn-showdetails">SHOW DETAILS</a>
								</p>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="coop-box">
								<a href>  <img src="images/chicken-thumbnail.png" alt="" /></a>
								<h3>Flight</h3>
								<ul>
									<li><a href>Dorking</a></li>
									<li><a href>92%</a></li>
									<li><a href>Talent</a></li>
									<li><a href>Spicy</a></li>
								</ul>
								<p class="text-center">
									<a href class="btn btn-showdetails">SHOW DETAILS</a>
								</p>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="coop-box">
								<a href>  <img src="images/chicken-thumbnail.png" alt="" /></a>
								<h3>Flight</h3>
								<ul>
									<li><a href>Dorking</a></li>
									<li><a href>92%</a></li>
									<li><a href>Talent</a></li>
									<li><a href>Spicy</a></li>
								</ul>
								<p class="text-center">
									<a href class="btn btn-showdetails">SHOW DETAILS</a>
								</p>
							</div>
						</div>
				</div>
			</div>
			{isFilterModal && <MyCoopFilterModal onClose={() => setIsFilterModal(false)} />}
		</div>
	)
};

export default MyCoop;
