import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const MyCoopFilterModal = ({ onClose }) => {

	const [_className, setClassName] = useState("modal fade show");

	useEffect(() => {
		 setClassName("modal fade in");
	}, []);

	const handleCloseModal = (e) => {
		 e.stopPropagation();
		 setClassName("modal fade closing");
		 setTimeout(() => onClose(), 350);
	};

	return (
		<div class={`${_className} bs-example-modal-lg my-coop-filter`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div className="mask" onClick={handleCloseModal}></div>
			<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-body">
								<h3>Filter</h3>
								<h4 class="fbold">Stats</h4>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Name</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Heritage</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Heritage
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Serema
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Sultan
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Lakenvelder
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Dorking
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Talent</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Talent
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Anvil
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Black Hole
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Blue Egg
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Blue Rooster
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Chickenapult
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Cold Snap
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Coober
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Devolution
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Dig
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Fan  Group
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Flight
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Growth
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Helicopter
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Jetpack
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Machete
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Moving Walkway
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Rollerblades
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Royal Procession
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Teleport
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Stock</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Stock
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Spicy
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Robust
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Fresh
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Crisp
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Tender
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Bland
																	</label>
															</li>
														</ul>
												</div>         
											</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Perfection (Min)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Perfection (Max)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Situation</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Situation
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Barn
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Race Pen
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Racing
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<h4 class="fbold">Race History</h4>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Races (Min)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Races (Max)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">POP (Min)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">POP (Max)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Placed (Min)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Placed (Max)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Winnings (Min)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Winnings (Max)</label>
												<input type="text" class="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Pecking Order</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Pecking Order
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	A
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	B
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	C
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Chicks
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<h4 class="fbold">Traits</h4>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Gender</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Gender
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Hen
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Rooster
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Color</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Color
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Bald Chicken
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Cherry Dusk
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Classic
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Eggshell
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	English Mustard   
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Istanblue
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Joker's Jade
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Manic Mint
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Merah Red
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Orange Will
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Purple  Wine
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Robot
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Rose
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Royal Violet
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Sapphire
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Screamin Green
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Shocking Pink
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Wild Moss
																	</label>
															</li>
														</ul>
												</div>  
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Comb</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Comb
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Blue
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Candy
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Green
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Pink
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Purple   
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Red
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Studs
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Teal
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div> 
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Wattle</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Wattle
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Blue
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Candy
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Green
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Pink
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Purple   
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Red
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Teal
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Beak</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Beak
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Gold
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Accessory</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Accessory
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	None 
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Ring
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Vampire
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Eyes</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Eyes
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Alien
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Angry
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Beauty
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Bloodshot
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Bulging
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Cockeyed
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Crosseyed
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Determined
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Exhausted
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Eyepatch
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Lizard
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Robot
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Sad
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Shocked
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Sleepy
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Background</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Background
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Amethyst 
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Autumn
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Flesh
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Lava
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Lilac
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Ocean
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Spring
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Stone
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Summer
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Winter
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 col-sm-6">
											<div class="form-group">
												<label for="">Stripes</label>
												<div class="dropdown select-checkout">
														<a class="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Stripes
														<b class="caret"></b>
														</a>
														<ul class="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	Yes
																	</label>
															</li>
															<li>
																	<label class="checkbox">
																	<input type="checkbox" />
																	No
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-filter-modal">Filter</button>
									<button type="button" class="btn btn-reset">Reset</button>
								</div>
						</div>
					</div>
			</div>
		</div>
	)
};

export default MyCoopFilterModal;
