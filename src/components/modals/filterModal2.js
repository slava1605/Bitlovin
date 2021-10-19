import React, { useState, useEffect } from "react";

const heritages = ['Serema', 'Sultan', 'Lakenvelder', 'Dorking'];

const talents = [
	'Anvil', 'Black Hole', 'Blue Egg', 'Blue Rooster', 'Chickenapult',
 	'Cold Snap', 'Coober', 'Devolution', 'DIG', 'Fan Group', 'Flight', 'Growth', 'Helicopter', 
 	'Jetpack', 'Machete', 'Moving Walkway', 'Rollerblades', 'Royal Procession', 'Teleport'
];

const FilterModal2 = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('modal fade show');
	const [isHeritage, setIsHeritage] = useState(false);
	const [isTalent, setIsTalent] = useState(false);

	useEffect(() => {
		if (isOpen)
			setClassName('modal fade in');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('modal fade closing');
		setTimeout(() => {
			setClassName('modal fade');
			onClose();
		}, 350);
	};

	const handleCloseCollapse = (e) => {
		e.stopPropagation();
		console.log('hey')
		setIsHeritage(false);
		setIsTalent(false);
	};

	const handleOpenTalent = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsTalent(!isTalent);
		setIsHeritage(false);
	};

	const handleOpenHeritage = (e) => {
		e.preventDefault();
		e.stopPropagation();
		console.log('hello');
		setIsHeritage(!isHeritage);
		setIsTalent(false);
	};

	return (
		<div class={_className} id="filter-popup2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			{isOpen && <div className="mask" onClick={handleClose}></div>}
			<div class="modal-dialog" role="document">
				<div class="modal-content">
						<div class="modal-header">
							<h3 class="modal-title" id="myModalLabel">Filter</h3>
						</div>
						<div class="modal-body" onClick={handleCloseCollapse}>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Heritage</label>
										<div class={`dropdown select-checkout ${isHeritage?'open':''}`}>
											<a class="dropdown-toggle btn" onClick={handleOpenHeritage} href>
												Select Heritage
											<b class="caret"></b>
											</a>
											{/* <Collapse in={isHeritage}> */}
												<ul class="dropdown-menu dropdown-menu-form" role="menu">
													{heritages.map((heritage, index) => (
														<li key={`heritage_${index}`} onClick={(e) => e.stopPropagation()}>
															<label class="checkbox">
																<input type="checkbox" />
																{heritage}
															</label>
														</li>
													))}
												</ul>
											{/* </Collapse> */}
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Talent</label>
										<div class={`dropdown select-checkout ${isTalent?'open':''}`}>
											<a class="dropdown-toggle btn" onClick={handleOpenTalent} href>
												Select Talent
											<b class="caret"></b>
											</a>
											{/* <Collapse in={isTalent}> */}
												<ul class="dropdown-menu dropdown-menu-form" role="menu">
													{talents.map((talent, index) => (
													<li key={`talent_${index}`} onClick={(e) => e.stopPropagation()}>
														<label class="checkbox">
															<input type="checkbox" />
															{talent}
														</label>
													</li>
													))}
												</ul>
											{/* </Collapse> */}
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Races (Min)</label>
										<input type="text" class="form-control" name="" id="" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="">Races (Max)</label>
										<input type="text" class="form-control" name="" id="" />
									</div>
								</div>
							</div>
							<div class="footer-btn">
								<button type="button" class="btn btn-reset">Reset</button>
								<button type="button" class="btn btn-filter-modal">Filter</button>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
};

export default FilterModal2;
