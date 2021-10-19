import React, { useState, useEffect } from "react";
import { useRacingContext } from "../../helpers/hooks/useRacingContext";

const FilterModal2 = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('modal fade show');
	const [isHeritage, setIsHeritage] = useState(false);
	const [isTalent, setIsTalent] = useState(false);
	const { filterOptions } = useRacingContext();
	const { heritages, talents } = filterOptions;

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
		<div className={_className} id="filter-popup2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			{isOpen && <div className="mask" onClick={handleClose}></div>}
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h3 className="modal-title" id="myModalLabel">Filter</h3>
					</div>
					<div className="modal-body" onClick={handleCloseCollapse}>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label for="">Heritage</label>
									<div className={`dropdown select-checkout ${isHeritage?'open':''}`}>
										<a className="dropdown-toggle btn" onClick={handleOpenHeritage} href>
											Select Heritage
										<b className="caret"></b>
										</a>
										{/* <Collapse in={isHeritage}> */}
											<ul className="dropdown-menu dropdown-menu-form" role="menu">
												{heritages.map((heritage, index) => (
													<li key={`heritage_${index}`} onClick={(e) => e.stopPropagation()}>
														<label className="checkbox">
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
							<div className="col-md-6">
								<div className="form-group">
									<label for="">Talent</label>
									<div className={`dropdown select-checkout ${isTalent?'open':''}`}>
										<a className="dropdown-toggle btn" onClick={handleOpenTalent} href>
											Select Talent
										<b className="caret"></b>
										</a>
										{/* <Collapse in={isTalent}> */}
											<ul className="dropdown-menu dropdown-menu-form" role="menu">
												{talents.map((talent, index) => (
												<li key={`talent_${index}`} onClick={(e) => e.stopPropagation()}>
													<label className="checkbox">
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
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label for="">Races (Min)</label>
									<input type="text" className="form-control" name="" id="" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label for="">Races (Max)</label>
									<input type="text" className="form-control" name="" id="" />
								</div>
							</div>
						</div>
						<div className="footer-btn">
							<button type="button" className="btn btn-reset">Reset</button>
							<button type="button" className="btn btn-filter-modal">Filter</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default FilterModal2;
