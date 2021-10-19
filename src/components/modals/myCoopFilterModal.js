import React, { useState, useEffect } from "react";
import { useRacingContext } from "../../helpers/hooks/useRacingContext";

const DropdownFilter = ({ label, options }) => {
	const [opened, setOpened] = useState(false);
	const [values, setValues] = useState([]);

	const handleOptionChange = (index) => (e) => {
		let temp = JSON.parse(JSON.stringify(values));
		temp[index] = !!e.target.checked;
		setValues(temp);
	};

	return (
		<div className="form-group">
			<label for="">{label}</label>
			<div className={`dropdown select-checkout ${opened?"open":""}`}>
					<a className="dropdown-toggle btn" onClick={(e) => setOpened(!opened)} href>
						Select {label}
						<b className="caret"></b>
					</a>
					<ul className="dropdown-menu dropdown-menu-form" role="menu">
						{options.map((option, index) => (
							<li key={`option_${index}${new Date().getTime()}`}>
									<label className="checkbox">
									<input
										type="checkbox"
										checked={values[index] === undefined ? false : values[index]}
										onChange={handleOptionChange(index)}
									/>
									{option}
									</label>
							</li>
						))}
					</ul>
			</div>
		</div>
	)
}

const MyCoopFilterModal = ({ onClose }) => {
	const [_className, setClassName] = useState("modal fade show");
	const { filterOptions } = useRacingContext();
	const [opened, setOpened] = useState();
	const [values, setValues] = useState({});

	useEffect(() => {
		 setClassName("modal fade in");
	}, []);

	const handleCloseModal = (e) => {
		 e.stopPropagation();
		 setClassName("modal fade closing");
		 setTimeout(() => onClose(), 350);
	};

	const handleOpenDropdown = (key) => {
		if (opened && opened === key)
			setOpened()
		else setOpened(key);
	};

	return (
		<div class={`${_className} bs-example-modal-lg my-coop-filter`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div className="mask" onClick={handleCloseModal}></div>
			<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-body">
								<h3>Filter</h3>
								<h4 className="fbold">Stats</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Name</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Heritage" options={filterOptions.heritages} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Talent" options={filterOptions.talents} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Stock" options={filterOptions.stocks} />
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Perfection (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Perfection (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Situation</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Situation
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Barn
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Race Pen
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Racing
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<h4 className="fbold">Race History</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Races (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Races (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">POP (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">POP (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Placed (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Placed (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Winnings (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Winnings (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Pecking Order</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Pecking Order
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	A
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	B
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	C
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Chicks
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<h4 className="fbold">Traits</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Gender</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Gender
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Hen
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Rooster
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Color</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Color
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Bald Chicken
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Cherry Dusk
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Classic
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Eggshell
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	English Mustard   
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Istanblue
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Joker's Jade
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Manic Mint
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Merah Red
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Orange Will
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Purple  Wine
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Robot
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Rose
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Royal Violet
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Sapphire
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Screamin Green
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Shocking Pink
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Wild Moss
																	</label>
															</li>
														</ul>
												</div>  
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Comb</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Comb
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Blue
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Candy
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Green
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Pink
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Purple   
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Red
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Studs
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Teal
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div> 
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Wattle</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Wattle
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Blue
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Candy
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Green
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Pink
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Purple   
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Red
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Teal
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Beak</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Beak
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Black
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Gold
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Orange
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	White
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Yellow
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Accessory</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Accessory
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	None 
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Ring
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Vampire
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Eyes</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Eyes
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Alien
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Angry
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Beauty
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Bloodshot
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Bulging
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Cockeyed
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Crosseyed
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Determined
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Exhausted
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Eyepatch
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Lizard
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Robot
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Sad
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Shocked
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Sleepy
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Background</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Background
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Amethyst 
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Autumn
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Flesh
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Lava
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Lilac
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Ocean
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Spring
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Stone
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Summer
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Winter
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Stripes</label>
												<div className="dropdown select-checkout">
														<a className="dropdown-toggle btn" data-toggle="dropdown" href>
														Select Stripes
														<b className="caret"></b>
														</a>
														<ul className="dropdown-menu dropdown-menu-form" role="menu">
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	Yes
																	</label>
															</li>
															<li>
																	<label className="checkbox">
																	<input type="checkbox" />
																	No
																	</label>
															</li>
														</ul>
												</div>
											</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-filter-modal">Filter</button>
									<button type="button" className="btn btn-reset">Reset</button>
								</div>
						</div>
					</div>
			</div>
		</div>
	)
};

export default MyCoopFilterModal;
